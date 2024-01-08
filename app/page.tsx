'use client'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Slideshow from './_components/slideshow';
import CategoryGrid from 'app/_components/categoryGrid';
import NewProducts from 'app/_components/newProducts';
import FeaturedProducts from 'app/_components/featuredProducts';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const Marketplace: React.FC = () => {
    return (
    <ThemeProvider theme={theme}>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={0}
      sx={{ flexGrow: 1 }}
    >
      {/* Left column, visible only on extra-large screens */}
      <Grid
        item
        xl={1}
        pr={0}
        sx={{
          backgroundColor: '#034EA2',
          display: { xl: 'flex', md: 'none', lg: 'none', xs: 'none' },
        }}
      />

      {/* Center column, takes full width on all screens */}
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        xl={10}
        sx={{
          p: 0,
          m: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png")', width: '100%', boxSizing: 'border-box' }}>
          <Slideshow />

          <div className="segment1">
            <h1 className="segmentText">New Products</h1>
            <NewProducts />
          </div>

          <div className="segmentG">
            <h1 className="segmentText">Categories</h1>
            <CategoryGrid />
          </div>
          <Box
            component="img"
            mb={-.5}
            pb={0}
            sx={{
              overflow: 'hidden',
              height: 'auto',
              width: '100%',
            }}
            alt='JUS banner'
            src="https://user.bulkitrade.com/assets/images/ads1.jpg"
          />
          <div className="segmentW">
            <h1 className="segmentText">Featured Products</h1>
            <FeaturedProducts />
          </div>
        </div>
      </Grid>

      {/* Right column, visible only on extra-large screens */}
      <Grid
        item
        xl={1}
        ml={0}
        sx={{
          backgroundColor: '#034EA2',
          display: { xl: 'flex', md: 'none', lg: 'none', xs: 'none' },
        }}
      />
    </Grid>
    </ThemeProvider>
  );
};

export default Marketplace;