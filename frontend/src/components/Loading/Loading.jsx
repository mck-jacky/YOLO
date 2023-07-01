import React, { useEffect } from 'react';
import loading from '../../images/loading.mp4';
import { Box, Container } from '@mui/system';

const Loading = ({ onVideoEnd }) => {
  useEffect(() => {
    const videoDuration = 2.5 * 1000; // Convert seconds to milliseconds
    const timer = setTimeout(() => {
      onVideoEnd();
    }, videoDuration);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [onVideoEnd]);

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        sx={{
          width: '15%', // Adjust the width as needed
          height: '15%',
        }}
      >
        <source src={loading} type="video/mp4" />
      </Box>
    </Container>
  );
};

export default Loading;
