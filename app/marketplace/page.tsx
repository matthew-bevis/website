'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import CategoryGrid from 'app/_components/categoryGrid';
import NewProducts from 'app/_components/newProducts';
import FeaturedProducts from 'app/_components/featuredProducts';
import { Box, CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { getTheme } from 'app/theme';
import { useEffect, useState } from 'react';
import RootLayout from 'app/layout';

const Marketplace: React.FC = () => {
  
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <RootLayout>
        <CssBaseline />
        <Box sx={{
          justifyContent: 'center',
          marginLeft: '0',
          marginRight: '0', // Center the box
          maxWidth: '100%', // Ensure it doesn't exceed the viewport width
          width: '100%', // Full width
        }}>
        {/* Ensure that the container takes the full width and no unnecessary spacing is introduced */}
        <Grid container sx={{ m: 0, p: 0, width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
          {/* The backgroundImage style should be applied to a Box component that wraps all content */}
          <Box sx={{
            backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png")',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
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
      </RootLayout>
    </ThemeProvider>
  );
};

export default Marketplace;