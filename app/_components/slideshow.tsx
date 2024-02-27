'use client'

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import Arrow from 'react-material-ui-carousel';

const images = [
  {
    imgPath: "https://bulkitrade-images.s3.amazonaws.com/images/banners/KIHILNTT-1656237167949.jpg",
    label: "Pizza"
  },
  {
    imgPath: "https://bulkitrade-images.s3.amazonaws.com/images/banners/VGVJWSGT-1656237152730.jpg",
    label: "iheartbees"
  },
  {
    imgPath: "https://bulkitrade-images.s3.amazonaws.com/images/banners/EBICJTMX-1656237138676.jpg",
    label: "JUS"
  },
  {
    imgPath: "https://bulkitrade-images.s3.amazonaws.com/images/banners/SERSRJJF-1656237117866.jpg",
    label: "ArcticZeroScoop"
  },
  {
    imgPath: "https://bulkitrade-images.s3.amazonaws.com/images/banners/FKBOASFN-1656328447681.jpg",
    label: "ArcticZeroGF"
  },
];

function Slideshow() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
          mx: 'auto',
          marginBottom: '-20px'
        }}
      >
        <Carousel
          //@ts-ignore
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          width='100%'
          indicators={false}
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 4 ? (
                <Box
                  component="img"
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: '1',
                    height: 250,
                    display: 'block',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    margin: '0 auto'
                  }}
                    src={step.imgPath}
                  />
              ) : null}
            </div>
          ))}
        </Carousel>
        <Box sx={{ display: 'block', justifyContent: 'space-between'}}>
          <Arrow
            //@ts-ignore
            direction="left"
            onClick={handleBack}
            sx={{ fontSize: '40px', color: 'white', cursor: 'pointer'}}
          />
          <Arrow
            //@ts-ignore
            direction="right"
            onClick={handleNext}
            sx={{ fontSize: '40px', color: 'white', cursor: 'pointer'}}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Slideshow;