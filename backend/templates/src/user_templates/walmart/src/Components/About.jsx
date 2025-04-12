import React from 'react';
import { Container, Typography, Grid, Link, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const About = () => {
  return (
    <Container sx={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        About Walmart
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#555', maxWidth: '50%', margin: '0 auto', textAlign: 'center' }}>
        Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores.
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link href="https://www.facebook.com/walmart" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', color: '#3b5998', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            <Facebook sx={{ marginRight: '5px' }} />
            Facebook
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.twitter.com/walmart" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', color: '#1da1f2', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            <Twitter sx={{ marginRight: '5px' }} />
            Twitter
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.instagram.com/walmart" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', color: '#e1306c', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            <Instagram sx={{ marginRight: '5px' }} />
            Instagram
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
