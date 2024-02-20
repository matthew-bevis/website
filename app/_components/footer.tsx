import React from 'react';
import { Container, Grid, Typography, Divider } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from 'app/theme';

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container className="footer" sx={{ textAlign: 'center' }}>
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
    </Container>
    </ThemeProvider>
  );
};

export default Footer;