import React from 'react';
import { Grid, Button, Container } from '@mui/material';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];

const CategoryGrid = () => {
  return (
    <Container maxWidth="lg" style={{display: 'block', justifyContent: 'center', paddingBottom: '20px'}}>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              style={{ height: '100px', fontFamily: 'Helvetica Neue', backgroundColor: '#F26522'}}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{marginTop: '20px'}}>
        <Button
          variant="contained"
          style={{
            height: '100px',
            fontFamily: 'Helvetica Neue',
            backgroundColor: '#F26522'
          }}
        >
          More Categories
        </Button>
      </Grid>
    </Container>
  );
};

export default CategoryGrid;