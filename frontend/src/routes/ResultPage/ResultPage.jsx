import React from 'react'
import { Box, Container } from '@mui/system';
import Result from '../../components/Result';
import Map from '../../components/Map';
import './index.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IternaryItem from '../../components/IternaryItem'; 
import { Typography, Button } from '@mui/material';


const ResultPage = () => {
  const [events, setEvents] = React.useState([
    // Initial events data
    { id: 1, title: 'Event 1', yolo: '4', duration: '6 hours', image: "https://s1.ticketm.net/tm/en-au/dam/a/c7a/e92e76cc-05f5-49ba-a4ec-9f09d5822c7a_EVENT_DETAIL_PAGE_16_9.jpg"},
    { id: 2, title: 'Event 2', yolo: '5', duration: '6 hours', image: "https://s1.ticketm.net/tm/en-au/dam/a/c7a/e92e76cc-05f5-49ba-a4ec-9f09d5822c7a_EVENT_DETAIL_PAGE_16_9.jpg"},
    // Add more events as needed
  ]);

  const [step, setStep] = React.useState(2)

  const handleRemove = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => {
        if (event.id === eventId) {
          return { ...event, isRemoving: true }; // Set isRemoving flag to true for the event to trigger the animation
        }
        return event;
      })
    );

    setTimeout(() => {
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
    }, 500); // Delay removal of the event to allow animation to complete (adjust timing as needed)
  };

  const handleBackButton = () => {
    setStep(1)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh'
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5
        }}
      >
        <Typography 
          variant="h2"
          sx={{
            fontSize: 32,
            fontWeight: 800,
            width: 500,
            marginBottom: 4,
            marginLeft: 8
          }}
        >
          Result
        </Typography>

        {step > 1 && (
          <Button onClick={handleBackButton}
            sx={{
              alignSelf: "self-start",
              marginLeft: 5
            }}
          >
            <ArrowBackIosIcon/>
          </Button>

        )}

        {step === 1 && (
          <>
            {events.map((event) => (
              <div
                key={event.id}
                className={`event-container ${event.isRemoving ? 'slide-out' : ''}`}
              >
                <Result
                  title={event.title}
                  yolo={event.yolo}
                  duration={event.duration}
                  image={event.image}
                  onRemove={() => handleRemove(event.id)}
                />
            </div>

            ))}
          </>
        )}

        {step === 2 && (
          <>
            <Typography 
              variant="h2"
              sx={{
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 4
              }}
            >
              Adventure day
            </Typography>

           <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                height: "100vh",
                width: "60%",
              }}
            >
            <IternaryItem
              location="location 1"
              desc="slkjahfk asljkfhdskj "
              yolo="4"  
              type="scen"
            />
             <IternaryItem
              location="location 1"
              desc="slkjahfk asljkfhdskj "
              yolo="4"  
              type="scen"
            />
             <IternaryItem
              location="location 1"
              desc="slkjahfk asljkfhdskj "
              yolo="4"  
              type="food"
            />
          </Box>
          </>
        )}
        
        
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          width: '60%',
          backgroundColor: 'blue'
        }}
      >
        <Map />
      </Box>
    </Box>
  )
}

export default ResultPage