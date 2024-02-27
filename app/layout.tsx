'use client'

import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme(); // Access theme object
  return (
    <html>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </html>
  );
}