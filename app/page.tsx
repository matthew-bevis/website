
'use client'
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your theme
import Page from 'app/marketplace/page';

export default function RootPage() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}