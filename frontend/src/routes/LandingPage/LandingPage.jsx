import React from 'react';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import video from '../../images/video.mp4';
import Button from '@mui/material/Button';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* LEFT */}
        <Box 
          sx={{ 
            width: '55%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 12
          }}>
          <Typography 
            variant="h2"
            sx={{
              fontSize: 32,
              fontWeight: 800,
              width: 500,
              marginBottom: 4
            }}
          >
            Having Trouble of ???
          </Typography>
          <Typography 
            variant="h2"
            sx={{
              fontSize: 37,
              fontWeight: 800,
              width: 500,
              marginBottom: 4
            }}
          >
            Introducing YOLO
          </Typography>
          <Typography 
            sx={{
              fontSize: 29,
              width: 700,
              marginBottom: 4
            }}
          >
            We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
          </Typography>

          <Button variant="outlined">YOLO</Button>
          

        </Box>

        {/* RIGHT */}
        <Box
          component="video"
          autoPlay
          muted
          loop
          sx={{
            width: '45%',
            height: '300px',
            objectFit: 'cover',
          }}
        >
          <source src={video} type="video/mp4" />
        </Box>
        
      </Box>
    </React.Fragment>
  );
};

export default LandingPage;
