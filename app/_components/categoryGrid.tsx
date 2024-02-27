'use client'

import React from 'react';
import { Grid, Button, Container, useTheme } from '@mui/material';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];

const CategoryGrid = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ pb: '20px' }} style={{ display: 'block', justifyContent: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              style={{
                height: '100px',
                backgroundColor: theme.palette.secondary.main, // Use theme color
                color: theme.palette.common.white, // Set text color to contrast
              }}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          style={{
            height: '100px',
            fontFamily: 'Helvetica',
            backgroundColor: theme.palette.secondary.dark, // Use theme color
            color: theme.palette.common.white, // Set text color to contrast
          }}
        >
          More Categories
        </Button>
      </Grid>
    </Container>
  );
};

export default CategoryGrid;