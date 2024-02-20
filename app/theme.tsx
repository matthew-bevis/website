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
    fontFamily: 'Helvetica Neue',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': {
            fontFamily: 'Helvetica Neue',
            src: 'url("./fonts/HelveticaNeue-Regular.otf") format("opentype")',
          },
        },
      },
    },
  },
});

export default theme;
