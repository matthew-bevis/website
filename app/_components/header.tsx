'use client'

import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import CustomizedInputBase from './search-bar';
import Link from 'next/link';
import AccountMenu from './accountMenu';
import { useTheme } from '@mui/material/styles'; // Import useTheme hook
import './styling.css';
import { Grid, ThemeProvider } from '@mui/material';

const Header: React.FC = () => {
  const theme = useTheme(); // Access theme object
  
  return (
    <ThemeProvider theme={theme}>
    <Grid item xs={12} xl={12} lg={12} md={12} sx={{ maxWidth: '100%', display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      bgcolor: '#FAFAFA',
      padding: 0,
      margin: 0}}>
      <Grid item xl={4} sx={{ pl:0 }}>
        <Link href="/">
          <Image src='https://user.bulkitrade.com/assets/images/bulkitrade.png' alt="Bulkitrade Logo" width= '150' height= '50' style={{ marginRight: '50px', marginLeft: '10px'}} />
        </Link>
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center', width: 'auto', height: 'auto', maxWidth: '100%' }}>
        <CustomizedInputBase/>
        <Link href='/marketplace/signin'>
          <Button variant="contained" color="primary" style={{ backgroundColor: theme.palette.primary.main, marginLeft: '20px', whiteSpace: 'nowrap'}}>
            Sign-In
          </Button>
        </Link>
        <Link href="/marketplace/register">
          <Button variant="contained" color="primary" style={{ backgroundColor: theme.palette.secondary.main, marginLeft: '10px', whiteSpace: 'nowrap'}}>
            Sign-Up
          </Button>
        </Link>
        <AccountMenu />
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default Header;