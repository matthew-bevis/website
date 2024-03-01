'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import CategoryGrid from 'app/_components/categoryGrid';
import NewProducts from 'app/_components/newProducts';
import FeaturedProducts from 'app/_components/featuredProducts';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { getTheme } from 'app/theme';
import { useEffect, useState } from 'react';
import Layout from './layout';
import { ThemeMode } from 'app/interfaces';
import Slideshow from 'app/_components/slideshow';

const Marketplace: React.FC = () => {

  const [mode, setMode] = useState<ThemeMode>(ThemeMode.Light); // Use ThemeMode here

    // Only attempt to access local storage in the client-side
    useEffect(() => {
      const savedMode = localStorage.getItem('themeMode') as ThemeMode || ThemeMode.Light;
      setMode(savedMode);
    }, []);
  
    // Use useEffect for side-effects like setting localStorage
    useEffect(() => {
      localStorage.setItem('themeMode', mode);
    }, [mode]);
  
    const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Box sx={{
          justifyContent: 'center',
          marginLeft: '0',
          marginRight: '0', // Center the box
          maxWidth: '100%', // Ensure it doesn't exceed the viewport width
          width: '100%', // Full width
          p: 0,
          m:0
        }}>
        <Grid container sx={{
          m: 0,
          p: 0,
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          justifyContent: 'center', // Centers children horizontally
          alignItems: 'center', // Centers children vertically
          backgroundImage: {
            xs: 'none', // No background image for xs screens
            sm: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png")' // Background image for screens larger than xs
          }
        }}>
        <Grid item xs={12} sm={12} md={12} lg={10} xl={8} sx={{ 
          flexGrow: 1,
          justifyContent: 'center', 
          p: 0,
          // Set the left and right padding to 0 only for xs screens
          px: { xs: 0, sm: 0, md: 0, lg: 0}, // Adjust these values as needed for padding on larger screens
        }}>
          <Slideshow />
        </Grid>
      </Grid>
        {/* Ensure that the container takes the full width and no unnecessary spacing is introduced */}
        <Grid container sx={{ m: 0, p: 0, width: '100%', maxWidth: '100%', boxSizing: 'border-box', mt:0, pt: 0}}>
          {/* The backgroundImage style should be applied to a Box component that wraps all content */}
          
          <Box sx={{
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            p: 0,
            m: 0
          }}>
            
            <Box sx={{ display: 'block', alignItems: 'center', justifyContent: 'center', bgcolor: theme.palette.background.paper, mt: 0, p: 0 }}>
              <h1 className="segmentText">New Products</h1>
              <NewProducts />
            </Box>

            <div className="segmentG">
              <h1 className="segmentText">Categories</h1>
              <CategoryGrid />
            </div>

            <Box
              component="img"
              mb={-0.5}
              pb={0}
              sx={{ overflow: 'hidden', height: 'auto', width: '100%' }}
              alt="JUS banner"
              src="https://user.bulkitrade.com/assets/images/ads1.jpg"
            />
            
            <div className="segmentW">
              <h1 className="segmentText">Featured Products</h1>
              <FeaturedProducts />
            </div>
          </Box>
        </Grid>
        </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default Marketplace;