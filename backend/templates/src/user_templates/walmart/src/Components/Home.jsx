import React from 'react';
import { Container, Button, Typography, Grid, Box } from '@mui/material';
import OffersAndDeals from './OffersAndDeals';
import laptopImage from '../assets/laptop.png';
import partyImage from '../assets/party.png';
import tubImage from '../assets/tub.png';
import acImage from '../assets/ac.png';
import fridgeImage from '../assets/fridge.png';
import tryfreeImage from '../assets/tryfree.png';

const HomeContainer = (props) => (
  <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', textAlign: 'center' }}>
    {props.children}
  </Container>
);

const BannerImage = (props) => (
  <img {...props} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginTop: '20px' }} />
);

const StyledButton = (props) => (
  <Button {...props} sx={{ margin: '20px', backgroundColor: '#FFD700', color: '#333', '&:hover': { backgroundColor: '#FFA500' } }}>
    {props.children}
  </Button>
);

const ProductsContainer = (props) => (
  <Box {...props} sx={{ display: 'flex', overflowX: 'auto', padding: '20px', gap: '20px' }}>
    {props.children}
  </Box>
);

const Home = () => {
  return (
    <HomeContainer>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Walmart
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Discover Amazing Products and Deals
      </Typography>
      <StyledButton variant="contained" size="large">
        Shop Now
      </StyledButton>
      <Grid container spacing={2} style={{ padding: '20px', width: '100%' }}>
        <Grid item xs={6} sm={3}>
          <img src={laptopImage} alt="Laptop" style={{ width: '100%', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={6} sm={6}>
          <img src={partyImage} alt="Party" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src={tubImage} alt="Tub" style={{ width: '100%', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src={acImage} alt="AC" style={{ width: '100%', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={6} sm={6}>
          <img src={tryfreeImage} alt="Try Free" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src={fridgeImage} alt="Fridge" style={{ width: '100%', borderRadius: '10px' }} />
        </Grid>
      </Grid>
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Product
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4, mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '10px' }}
      >
        <img src={laptopImage} alt="Featured Laptop" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
        <Typography variant="h6" component="p" sx={{ mt: 2 }}>
          High-Performance Laptop
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: 1, mb: 2 }}>
          Experience the best performance with our latest high-performance laptop. Perfect for gaming, work, and entertainment.
        </Typography>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </Box>
      <OffersAndDeals />
    </HomeContainer>
  );
};

export default Home;
