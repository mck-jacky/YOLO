import React, { useState } from 'react';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import video from '../../images/video.mp4';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const LandingPage = () => {
  const [step, setStep] = useState(1)

  const handleLogin = () => {
    if (step === 1) setStep(2)
    if (step === 2) setStep(1)
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* LEFT */}
        {step === 1 && (
          <Box 
          sx={{ 
            width: '55%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 8
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

          <Link to="/survey">
            <Button variant="outlined">YOLO</Button>
          </Link>

          <Box
            sx={{
              display: 'flex',
              marginTop: 3
            }}
          >
            <Button 
              sx={{
                marginRight: 1
              }}
              variant="outlined"
              onClick={handleLogin}
            >
              <ArrowOutwardIcon/>Login
            </Button>
            <Button 
              variant="outlined"
            >
              <ArrowOutwardIcon/>Register
            </Button>
          </Box>

          

        </Box>
        )}

        {step === 2 && (
          <Box
            sx={{
              width: '55%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div>
            <MDBCardBody className='p-5'>

              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <h3 className="ls-tight" style={{color: "#99c5c4"}}>
                  YOLO
                </h3>
              </Link>

              <h1 className="my-3 display-5 fw-bold ls-tight">
              Sign in
              </h1>

              <Box component="form">
                <MDBInput wrapperClass='mb-4' label='Email' id='email' name="email" type='email' />
                <MDBInput wrapperClass='mb-4' label='Password' id='password' name="password" type='password' />

                <MDBBtn style={{backgroundColor: "#99c5c4"}} className='w-100 mb-4' size='md' onClick={handleLogin}>sign in</MDBBtn>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: 2
                }}
              >
                <p>New here? Register <Link to="/register">here</Link></p>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: 2
                }}
              >
                <p>Forgot password? Click <Link to="/reset_password">here</Link></p>
              </Box>


            </MDBCardBody>
          </div>


          </Box>

        )}
        

        {/* RIGHT */}
        <Box
          component="video"
          autoPlay
          muted
          loop
          sx={{
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
