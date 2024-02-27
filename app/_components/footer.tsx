'use client'

import React from 'react';
import { Box, Grid, Typography, Divider, useTheme, ThemeProvider } from '@mui/material';

const Footer = () => {
  const theme = useTheme(); // Access theme object
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ bottom: '0',
      bgcolor: theme.palette.primary.main,
      color: theme.palette.background.paper,
      mt: '0px',
      pt: '20px',
      position: 'relative', // To handle potential horizontal scrolling issues
      left: '0',
      right: '0',
      marginLeft: '0',
      width: '100%',
      marginRight: '0',
      borderTop: '1px solid #ccc',
      justifyContent: 'flex-end'}}>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={2} marginTop="10px">
          <Typography variant="body1" style={{ fontWeight: 'bolder' }}>
            International Wholesale
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bolder' }}>
            Supply and Demand, Solved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Join Us
          </Typography>
          <Typography variant="body2">Marketplace</Typography>
          <Typography variant="body2">Brands</Typography>
          <Typography variant="body2">Corporate</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            About
          </Typography>
          <Typography variant="body2">About Us</Typography>
          <Typography variant="body2">Contact Us</Typography>
          <Typography variant="body2">FAQ</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Terms
          </Typography>
          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2">Terms and Conditions</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: '20px', backgroundColor: 'white' }} />

      <Typography
        variant="body2"
        align="center"
        sx={{ paddingBottom: '10px', textAlign: 'center' }}
      >
        © 2024 Bulkitrade, Inc. All Rights Reserved
      </Typography>
    </Box>
    </ThemeProvider>
  );
};

export default Footer;