import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Paper sx={{ padding: '30px', marginTop: '20px', width: '100%', maxWidth: '600px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: '10px', fontWeight: 'bold' }}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box sx={{ marginTop: '20px', width: '100%', maxWidth: '600px', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '20px' }}>
        <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
          Contact Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ marginRight: '10px' }} />
              <Typography variant="body1">+1 800 123 4567</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ marginRight: '10px' }} />
              <Typography variant="body1">support@walmart.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ marginRight: '10px' }} />
              <Typography variant="body1">702 SW 8th St, Bentonville, AR 72716, USA</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
