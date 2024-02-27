'use client'

import { CssBaseline, Grid, ThemeProvider, useTheme } from '@mui/material';
import Footer from 'app/_components/footer';
import Header from 'app/_components/header';
import { SideLeft, SideRight } from 'app/_components/sideBars';
import Slideshow from 'app/_components/slideshow';
import { getTheme } from 'app/theme';
import React, { useEffect, useState } from 'react';

export default function Layout({
    children,
}: {
  children: React.ReactNode
}) {
    
    const theme = useTheme();
    
    return (
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Grid container>
      {/* Left column */}
      <SideLeft />
      {/* Center column for main content */}
      <Grid
        item
        xs={12} // Takes full width on smaller screens
        md={12} // Adjust the size based on your layout needs
        lg={12} // Adjust the size based on your layout needs
        xl={10} // Center content occupies the space between the side columns on XL screens
        sx={{
          display: 'flex',
          justifyContent: 'center', // Center the children content horizontally
          alignItems: 'center', // Center the children content vertically
        }}
      >
        {children} {/* This is where the main content goes */}
      </Grid>

      {/* Right column */}
      <SideRight />
    </Grid>
            <Footer/>
        </ThemeProvider>
    </> 
    )
}