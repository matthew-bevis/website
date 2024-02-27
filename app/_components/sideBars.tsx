import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// Left side component
export const SideLeft = () => {
  const theme = useTheme(); // Access theme object

  return (
    <Grid
      item
      xl={1}
      pr={0}
      sx={{
        bgcolor: theme.palette.primary.main,
        display: { xl: 'flex', md: 'none', lg: 'none', xs: 'none' },
      }}
    />
  );
};

// Right side component
export const SideRight = () => {
  const theme = useTheme(); // Access theme object

  return (
    <Grid
      item
      xl={1}
      ml={0}
      sx={{
        bgcolor: theme.palette.primary.main,
        display: { xl: 'flex', md: 'none', lg: 'none', xs: 'none' },
      }}
    />
  );
};