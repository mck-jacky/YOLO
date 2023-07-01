import React, { useState } from 'react'
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';

const Result = ({ title, time, location, nOfTickets, image }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 2
        }}
    >

      <Box
        sx={{
          width: 500,
          display: 'flex',
          padding: 2,
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)', // Adjust the blur intensity as needed
          zIndex: -1,
        }}
      />

        <Box
          component="img"
          sx={{}}
          alt='event-image'
          src={image}
        />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 2,
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Typography 
            sx={{
              fontSize: 16,
              fontWeight: 800,
            }}
          >
            {title}
          </Typography>
          <Typography 
            sx={{
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {time}
          </Typography>
          <Typography 
            sx={{
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {location}
          </Typography>
          <Typography 
            sx={{
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Number of tickets: {nOfTickets}
          </Typography>
        </Box>
          
      </Box>

    </Box>
  )
}

export default Result