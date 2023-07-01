import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
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
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
// import styles from './style.css';
import './style.css';


// Page component
export const Page = ({ offset, gradient, onClick }) => (
  <>
   {/* onClick={onClick} */}
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    {/* <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer> */}
  </>
)

const CardPage = () => {  
  const parallaxRef = useRef(null);

  const scroll = (to) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to)
    }
  }

  return (
    <Box>
      {/* <div style={{ background: '#dfdfdf'}}> */}
        <Parallax className="container" ref={parallaxRef} pages={3} horizontal>
          <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
          <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
        </Parallax>
      {/* </div> */}
    </Box>
  )
}

export default CardPage