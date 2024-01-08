'use client'
import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';

export default function Layout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    )
}