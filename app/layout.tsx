'use client'

import React from 'react';
import theme from './theme';
import { ThemeProvider } from '@mui/material';

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body style={{margin: '0', padding: '0', maxWidth: '100%', maxHeight: '100%'}}>
            {children}
        </body>
      </html>
      </ThemeProvider>
    )
}
