'use client'

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import Header from './_components/header';
import Footer from './_components/footer';
import { getTheme } from './theme';
import { ThemeMode } from './interfaces';


export default function RootLayout({ children }: { children: React.ReactNode }) {
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
    <html>
      <title>Bulkitrade</title>
      <ThemeProvider theme={theme}>
        <Header/>
          {children}
        <Footer/>
      </ThemeProvider>
    </html>
  );
}