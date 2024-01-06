'use client'
import * as React from 'react';
import Layout from './layout';
import Grid from '@mui/material/Grid';
import Slideshow from '../_components/slideshow';
import CategoryGrid from 'app/_components/categoryGrid';
import NewProducts from 'app/_components/newProducts';
import FeaturedProducts from 'app/_components/featuredProducts';

const Marketplace: React.FC = () => {
  return (
    <Layout>
      <div style={{ backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png")' }}>
        <Slideshow />
        {/*<Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
          sx={{ flexGrow: 1 }}
        >
          <Grid item xl={1} sx={{ backgroundColor: '#034EA2', flex: 1, display: { xl: 'flex' } }} />
  <Grid item xs={12} md={8} sx={{ margin: '0', padding: '0', flex: 1 }}>*/}
            <div className="segment1">
              <h1 className="segmentText">New Products</h1>
              <NewProducts />
            </div>

            <div className="segmentG">
              <h1 className="segmentText">Categories</h1>
              <CategoryGrid />
            </div>
            <div className="segmentW">
              <h1 className="segmentText">Featured Products</h1>
              <FeaturedProducts />
            </div>
          {/*</Grid>
          <Grid item xl={1} sx={{ backgroundColor: '#034EA2', flex: 1, display: { xl: 'flex' } }} />
</Grid>*/}
      </div>
    </Layout>
  );
};

export default Marketplace;