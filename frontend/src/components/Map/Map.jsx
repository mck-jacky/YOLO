import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./index.css"
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3VuZG9tMTIzIiwiYSI6ImNsampvYTV3ajA5ejgzcHRndG01MnlzN3EifQ.WS2XL21teWkYAGG36cNN8g';

const Map = ({in_lng, in_lat, in_zoom, in_geopath, in_pinpoints}) => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(in_lng);
  const [lat, setLat] = useState(in_lat);
  const [zoom, setZoom] = useState(in_zoom);
  const [pinpoints, setPinpoints] = useState(in_pinpoints);
  const [map, setMap] = useState(null);

  // Initialize map when component mounts
  useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lat, lng],
      zoom: zoom
    });
    setMap(map);
    
    const geojson = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'coordinates': in_geopath,
            'type': 'LineString'
          }
        }
      ]
    };

    map.on('load', () => {
      map.addSource("line", {
        type: "geojson",
        data: geojson,
      });

      map.setPaintProperty("water", "fill-color", "#cce3f9");

      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        (error, image) => {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with 2 points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: in_pinpoints,
            },
          });

          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );

      // add a line layer without line-dasharray defined to fill the gaps in the dashed line
      map.addLayer({
        type: "line",
        source: "line",
        id: "line-background",
        paint: {
          "line-color": "#f39a0c",
          "line-width": 10,
          "line-opacity": 0.4,
        },
      });

      // add a line layer with line-dasharray set to the first value in dashArraySequence
      map.addLayer({
        type: "line",
        source: "line",
        id: "line-dashed",
        paint: {
          "line-color": "#f39a0c",
          "line-width": 10,
          "line-dasharray": [0, 4, 3],
        },
      });

      // technique based on https://jsfiddle.net/2mws8y3q/
      // an array of valid line-dasharray values, specifying the lengths of the alternating dashes and gaps that form the dash pattern
      const dashArraySequence = [
        [0, 4, 3],
        [0.5, 4, 2.5],
        [1, 4, 2],
        [1.5, 4, 1.5],
        [2, 4, 1],
        [2.5, 4, 0.5],
        [3, 4, 0],
        [0, 0.5, 3, 3.5],
        [0, 1, 3, 3],
        [0, 1.5, 3, 2.5],
        [0, 2, 3, 2],
        [0, 2.5, 3, 1.5],
        [0, 3, 3, 1],
        [0, 3.5, 3, 0.5],
      ];

      let step = 0;

      function animateDashArray(timestamp) {
        // Update line-dasharray using the next value in dashArraySequence. The
        // divisor in the expression `timestamp / 50` controls the animation speed.
        const newStep = parseInt((timestamp / 50) % dashArraySequence.length);

        if (newStep !== step) {
          map.setPaintProperty(
            "line-dashed",
            "line-dasharray",
            dashArraySequence[step]
          );
          step = newStep;
        }

        // Request the next frame of the animation.
        requestAnimationFrame(animateDashArray);
      }

      // start the animation
      animateDashArray(0);
      
      setTimeout(() => {
        map.flyTo({
          center: [151.0126, -33.8550],
          zoom: 9.09
        });
      }, 150);
    });

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => {
      // map.remove();
    }
  }, []);

  useEffect(() => {    
    const geojson = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'coordinates': in_geopath,
            'type': 'LineString'
          }
        }
      ]
    };

    if (map) {
      const sourceObject = map.getSource('line');
      if (sourceObject) {
        sourceObject.setData(geojson);
      }
      
      map.flyTo({
        center: [in_lat, in_lng],
        zoom: in_zoom
      });

      const pointObject = map.getSource('points');
      if (pointObject) {
        pointObject.setData({
          type: "FeatureCollection",
          features: in_pinpoints
        });
      }

    }
  }, [in_lng, in_lat, in_zoom, in_geopath, in_pinpoints]);

  return (
    <div>
      <div ref={mapContainerRef} className='map-container' />
    </div>
  );
};

export default Map;