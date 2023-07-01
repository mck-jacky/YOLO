import React from 'react'
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const IternaryItem = ({location, desc, yolo, type}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: 4
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex"  
            }}
          >
            {type === "scen" && (
              <LocationOnIcon 
              sx={{
                marginRight: 2
              }}
            />
            )}

            {type === "food" && (
              <FastfoodIcon 
              sx={{
                marginRight: 2
              }}
            />
            )}

            <Typography 
              variant="h2"
              sx={{
                fontSize: 25,
                fontWeight: 600
              }}
            >
              {location}
            </Typography>
          </Box>
          <Typography 
              variant="h2"
              sx={{
                fontSize: 20,
                marginLeft: 5,
                fontWeight: 400,
                color: "grey"
              }}
            >
              {desc}
            </Typography>
        </Box>
        <Typography 
          variant="h2"
          sx={{
            fontSize: 25,
          }}
        >
          {yolo}
        </Typography>
      </Box>
    </>
  )
}

export default IternaryItem