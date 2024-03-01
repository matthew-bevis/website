'use client'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image'

const imageArray = [
  "https://bulkitrade-images.s3.amazonaws.com/images/banners/KIHILNTT-1656237167949.jpg",
  "https://bulkitrade-images.s3.amazonaws.com/images/banners/VGVJWSGT-1656237152730.jpg",
  "https://bulkitrade-images.s3.amazonaws.com/images/banners/EBICJTMX-1656237138676.jpg",
  "https://bulkitrade-images.s3.amazonaws.com/images/banners/SERSRJJF-1656237117866.jpg",
  "https://bulkitrade-images.s3.amazonaws.com/images/banners/FKBOASFN-1656328447681.jpg",
];

const Slideshow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imageArray.length;

  const handleNext = () => {
    console.log('Next button clicked'); // This should log when next button is clicked
    setActiveStep((prevActiveStep) => 
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };
  
  const handleBack = () => {
    console.log('Back button clicked'); // This should log when back button is clicked
    setActiveStep((prevActiveStep) => 
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };
  
  // Add this useEffect to log the activeStep whenever it changes
  React.useEffect(() => {
    console.log(`Current active step is: ${activeStep}`);
  }, [activeStep]);

  return (
    <Box sx={{ 
      position: 'relative', 
      maxWidth: '100%', 
      height: 'auto', // Set the height to match your images
      justifyContent: 'center', 
      alignItems: 'center', 
      mb: 0, 
      pb: 0,
    }}>
      <Box sx={{ position: 'relative', width: '100%', paddingTop: '25%'}}>
  <Image
    src={imageArray[activeStep]}
    alt={`Slide ${activeStep}`}
    layout="fill"
    objectFit="cover"
  />
</Box>
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          bgcolor: 'background.paper',
          '&:hover': {
            bgcolor: 'background.default',
          },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          bgcolor: 'background.paper',
          '&:hover': {
            bgcolor: 'background.default',
          },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default Slideshow;