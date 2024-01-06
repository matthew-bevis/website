'use client'
import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';
import Footer from 'app/_components/footer';
import Header from 'app/_components/header';

export default function Layout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <>
            <ThemeProvider theme={theme}>
            <Header />
                {children}
            <Footer />
            </ThemeProvider>
        </>
    )
}