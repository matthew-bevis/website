'use client'

import { createTheme, Theme } from "@mui/material";

const Helvetica = {
  fontFamily: 'Helvetica',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
  local('Helvetica'),
  url(./fonts/HelveticaNeue-Regular.otf)
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

type ThemeMode = 'light' | 'dark';

export const getTheme = (mode: ThemeMode): Theme => {
  return createTheme({
  palette: {
    mode, // 'light' or 'dark'
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: { main: '#034EA2' },
          background: { default: '#FAFAFA', paper: 'white' },
          secondary: { main: '#F68B1F', dark: '#F26522'}
        }
      : {
          // palette values for dark mode
          primary: { main: '#034EA2' },
          background: { default: '#7a7a7a', paper: '#a3a3a3' },
        }),
  },
  typography: {
    fontFamily: 'Helvetica',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [Helvetica],
        }
      }
    }
  }
});
}