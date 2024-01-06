'use client'
import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from 'app/theme';
import Header from 'app/_components/header';
import Footer from 'app/_components/footer';

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