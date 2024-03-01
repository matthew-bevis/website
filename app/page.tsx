'use client'

import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';

const MyApp = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default MyApp;