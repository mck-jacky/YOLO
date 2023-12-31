import React, { useState } from 'react'
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Button from '@mui/material/Button';

const Result = ({ title, yolo, duration, image, onRemove, onClick }) => {
  const handleRemove = () => {
    onRemove(); // Call the provided onRemove function to remove the component
  };

  const handleOnClick = () => {
    onClick();
  }

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
          sx={{
            width: "166px",
            height: "115px",
            objectFit: 'contain'
          }}
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
            width: 600
          }}
        >
          <Typography 
            sx={{
              fontSize: 16,
              fontWeight: 800,
              cursor: "pointer"
            }}
            onClick={handleOnClick}
          >
            {title}
          </Typography>
          <Typography 
            sx={{
              fontSize: 16,
              fontWeight: 700,
              color: "#ffd700"
            }}
          >
            YOLO Lv.{yolo}
          </Typography>
          <Typography 
            sx={{
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Duration: {duration}
          </Typography>
        </Box>
            
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
            <Button
              onClick={handleRemove}
              title="Cancel"
              sx={{
                '&:hover': {
                  '& .hover-text': {
                    display: 'block',
                  },
                },
              }}
            >
              <CancelOutlinedIcon
                sx={{
                  fontSize: 25,
                  color: 'white',
                }}
              />
              <span className="hover-text" style={{ display: 'none' }}>
                Cancel
              </span>
            </Button>
        </Box>
          
      </Box>

    </Box>
  )
}

export default Result