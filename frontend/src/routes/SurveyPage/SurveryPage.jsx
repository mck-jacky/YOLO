import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EscalatorIcon from '@mui/icons-material/Escalator';
import EscalatorOutlinedIcon from '@mui/icons-material/EscalatorOutlined';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import IParallax from '@react-spring/parallax'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField, Button, Chip, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const steps = ['POIS', 'Type', 'Location', 'YOLO Level', 'Keywords'];

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

const CustomStyledRating = styled(StyledRating)({
  fontSize: '48px', // Adjust the font size as per your requirement
});

const SurveryPage = () => {
  const [age, setAge] = React.useState('');
  const [step, setStep] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate();

  const handleNextButton = (event) => {
    setStep(step+1)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    console.log(step)

    if (step === 5) {
      navigate('/result')
    }
  }
  const [activeStep, setActiveStep] = React.useState(0);

  const [food, setFood] = React.useState(true);
  const [scenery, setScenery] = React.useState(true);
  const [shopping, setShopping] = React.useState(true);
  const [random, setRandom] = React.useState(true);

  const handleFood = () => {
    setFood(!food)
    setRandom(true)
  }

  const handleScenery = () => {
    setScenery(!scenery)
    setRandom(true)
  }

  const handleShopping = () => {
    setShopping(!shopping)
    setRandom(true)
  }

  const handleRandom = () => {
    setFood(true)
    setScenery(true)
    setShopping(true)
    setRandom(!random)
  }

  const [keywords, setKeywords] = React.useState(["hiking", "IGA", "Chicken Wrap"]);
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddKeyword = () => {
    if (inputValue.trim() !== '') {
      setKeywords([...keywords, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteKeyword = (index) => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddKeyword();
    }
  };


  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 600,
            marginTop: 3
          }}
        >
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            width: 1000,
            marginTop: -10
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
                  <InputLabel id="demo-simple-select-label">POIS</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="POIS"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
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
                  marginBottom: 10,
                  display: 'flex'
                }}
              >
                <Button
                  sx={{ marginRight: 3 }}
                  variant={food ? 'outlined' : 'contained'}
                  onClick={handleFood}
                >
                  Food
                </Button>
                <Button
                  sx={{ marginRight: 3 }}
                  variant={scenery ? 'outlined' : 'contained'}
                  onClick={handleScenery}
                >
                  Scenery
                </Button>
                <Button
                  sx={{ marginRight: 3 }}
                  variant={shopping ? 'outlined' : 'contained'}
                  onClick={handleShopping}
                >
                  Shopping
                </Button>
                <Button
                  sx={{ marginRight: 3 }}
                  variant={random ? 'outlined' : 'contained'}
                  onClick={handleRandom}
                >
                  Random
                </Button>
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
                <TextField id="standard-basic" label="Location" variant="standard" fullWidth/>
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
                4. Level of YOLO
              </Typography>

              <Box
                sx={{
                  marginBottom: 10
                }}
              >
                
                <CustomStyledRating
                  name="customized-color"
                  defaultValue={0}
                  getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                  precision={1}
                  icon={<EscalatorOutlinedIcon fontSize="inherit" />}
                  emptyIcon={<EscalatorIcon fontSize="inherit" />}
                />
              </Box>
            </>
          )}

          {step === 5 && (
            <>
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2
                }}
              >
                5. Keywords
              </Typography>

              <Box
                sx={{
                  marginBottom: 10
                }}
              >
                  <Box
                    sx={{
                      display: 'flex'
                    }}
                  >
                    <TextField 
                      label="Enter a keyword"
                      value={inputValue}
                      variant="standard" 
                      fullWidth
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                    />
                    <Button variant="text" onClick={handleAddKeyword}>
                      <KeyboardArrowRightIcon/>
                    </Button>
                  </Box>

                  <div style={{ marginTop: '1rem' }}>
                    {keywords.map((keyword, index) => (
                      <Chip
                        key={index}
                        label={keyword}
                        onDelete={() => handleDeleteKeyword(index)}
                        style={{ marginRight: '0.5rem' }}
                      />
                    ))}
                  </div>
              
                

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