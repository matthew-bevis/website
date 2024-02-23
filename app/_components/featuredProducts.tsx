import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

const cardsData = [
  { title: 'Card 1', content: 'Content for Card 1' },
  { title: 'Card 2', content: 'Content for Card 2' },
  { title: 'Card 3', content: 'Content for Card 3' },
  { title: 'Card 4', content: 'Content for Card 4' },
  // Add more cards in the future
];

const FeaturedProducts = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % cardsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg" sx={{paddingBottom: '20px'}}>
      <Grid container spacing={2} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card>
                <CardContent sx={{height: '250px'}}>
                  <Typography variant="h5">{card.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {card.content}
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;