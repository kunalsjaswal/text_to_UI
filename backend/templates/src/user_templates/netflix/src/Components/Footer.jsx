import React from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Container maxWidth="xl" style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '20px', textAlign: 'center' }}>
      <Typography variant="body1" style={{ marginBottom: '10px' }}>
        © 2023 Netflix, Inc.
      </Typography>
      <div>
        <IconButton color="inherit" href="https://www.facebook.com/netflix">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://www.twitter.com/netflix">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://www.instagram.com/netflix">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" href="https://www.youtube.com/netflix">
          <YouTube />
        </IconButton>
      </div>
    </Container>
  );
};

export default Footer;
