import React from 'react';
import { AppBar, Toolbar, Grid, Button, Link, IconButton, Typography, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#404040', color: '#fff', marginTop: '20px', padding: '20px', textAlign: 'center' }}>
      <Toolbar>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button component={RouterLink} to="/" color="inherit">Home</Button>
            <Button component={RouterLink} to="/mobiles" color="inherit">Mobiles</Button>
            <Button component={RouterLink} to="/television" color="inherit">Television</Button>
            <Button component={RouterLink} to="/gaming" color="inherit">Gamings</Button>
            <Button component={RouterLink} to="/laptops" color="inherit">Laptops</Button>
            <Button component={RouterLink} to="/appliances" color="inherit">Appliances</Button>
            <Button component={RouterLink} to="/audios" color="inherit">Audios</Button>
            <Button component={RouterLink} to="/about" color="inherit">About</Button>
            <Button component={RouterLink} to="/contact-us" color="inherit">Contact Us</Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ marginTop: '10px', maxWidth: '50%', margin: '0 auto', textAlign: 'center' }}>
              Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box>
              <Link href="https://www.facebook.com/walmart" target="_blank" rel="noopener" color="inherit">
                <IconButton color="inherit">
                  <Facebook />
                </IconButton>
              </Link>
              <Link href="https://www.twitter.com/walmart" target="_blank" rel="noopener" color="inherit">
                <IconButton color="inherit">
                  <Twitter />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/walmart" target="_blank" rel="noopener" color="inherit">
                <IconButton color="inherit">
                  <Instagram />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
