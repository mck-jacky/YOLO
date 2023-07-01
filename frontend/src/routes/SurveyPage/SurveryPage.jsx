import { Box, Typography } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EscalatorIcon from '@mui/icons-material/Escalator';
import EscalatorOutlinedIcon from '@mui/icons-material/EscalatorOutlined';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['1', '2', '3', '4'];

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
    fontSize: '48px'
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
    fontSize: '48px'
  },
});

const SurveryPage = () => {
  const [age, setAge] = React.useState('');
  const [step, setStep] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleNextButton = (event) => {
    setStep(step+1)
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box sx={{ width: 600 }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        <Box
          sx={{
            width: 1000
          }}
        >

          {step === 1 && (
            <>
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2
                }}
              >
                1. How many POIS
              </Typography>

              <Box
                sx={{
                  marginBottom: 10
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          )}

          {step === 2 && (
            <>
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2
                }}
              >
                2. Result type
              </Typography>

              <Box
                sx={{
                  marginBottom: 10
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          )}

          {step === 3 && (
            <>
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2
                }}
              >
                3. Location
              </Typography>

              <Box
                sx={{
                  marginBottom: 10
                }}
              >
                <TextField id="standard-basic" label="Standard" variant="standard" fullWidth/>
              </Box>
            </>
          )}

          {step === 4 && (
            <>
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2
                }}
              >
                4. Level of tolerance
              </Typography>

              <Box
                sx={{
                  marginBottom: 10
                }}
              >
                
                <StyledRating
                  name="customized-color"
                  defaultValue={0}
                  getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                  precision={1}
                  icon={<EscalatorOutlinedIcon fontSize="inherit" />}
                  emptyIcon={<EscalatorIcon fontSize="inherit" />}
                  size="48px"
                />
              </Box>
            </>
          )}

        <Button variant="contained" onClick={handleNextButton}>
          <DoneOutlinedIcon/>
          Next
        </Button>

          
        </Box>
        
       

      </Box>
    </React.Fragment>
  )
}

export default SurveryPage