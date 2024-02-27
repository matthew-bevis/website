'use client'

import * as React from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@mui/material/styles';


const countries = ["Country 1", "Country 2", "Country 3"]; // Add all countries here
const businessTypes = ["Retailer", "Brand", "Distributor", "Service Provider", "Other"];

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {
  const theme = useTheme();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Handle form submission
  };

  return (
    <Box sx={{
      bgcolor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      minHeight: '100vh',
      py: 3,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Container component="main" maxWidth="xs">
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Business Email" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="phone" label="Phone Number" name="phone" autoComplete="tel" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Business Type</InputLabel>
                  <Select required id="businessType" label="Business Type" name="businessType">
                    {businessTypes.map((type) => (
                      <MenuItem key={type} value={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="businessName" label="Business Name" name="businessName" autoComplete="organization" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="businessWebsite" label="Business Website" name="businessWebsite" autoComplete="url" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="businessAddress1" label="Business Address #1" name="businessAddress1" autoComplete="address-line1" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="businessAddress2" label="Business Address #2" name="businessAddress2" autoComplete="address-line2" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth id="city" label="City" name="city" autoComplete="address-level2" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth id="state" label="State" name="state" autoComplete="address-level1" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="zipCode" label="Zip Code" name="zipCode" autoComplete="postal-code" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select required id="country" label="Country" name="country">
                    {countries.map((country) => (
                      <MenuItem key={country} value={country}>{country}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="approvalRequired" color="primary" required />}
                  label="Accounts are subject to approval and additional information may be required."
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="agreeToTerms" color="primary" required />}
                  label="I have read and agree to Bulkitrade's Terms and Conditions and Privacy Policy."
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign up for Free
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}