'use client'

import { createTheme } from "@mui/material";
import "./fonts.css";

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
  overrides: {
    MuiCssBaseline: {
      
    }
  }
});

export default theme;