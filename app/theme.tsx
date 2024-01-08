'use client'

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#034EA2',
    },
    secondary: {
      main: '#F68B1F',
      dark: '#F26522'
    },
  },
  typography: {
    fontFamily: 'Helvetica-Neue'
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          fontFamily: 'Helvetica Neue',
        },
      },
    },
  },
});

export default theme;