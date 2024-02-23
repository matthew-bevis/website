'use client'

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import Marketplace from './marketplace/page';
import { getTheme } from './theme'
import React, { useState } from 'react';
import RootLayout from './layout';

const MyApp: React.FC = () => {

  const [mode] = useState<'light' | 'dark'>('light'); // Ensuring strict type for mode

  // Directly assign theme based on the current mode
  const theme = getTheme(mode === 'light' || mode === 'dark' ? mode : 'light');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootLayout>
        <Marketplace />
      </RootLayout>
    </ThemeProvider>
  );
 };

export default MyApp;