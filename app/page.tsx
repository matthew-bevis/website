'use client'

import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

const MyApp = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default MyApp;