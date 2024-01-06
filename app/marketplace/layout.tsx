import React from 'react';
import Header from '../_components/header';
import Footer from '../_components/footer';
import { ThemeProvider } from '@mui/material';
import theme from 'app/theme';


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