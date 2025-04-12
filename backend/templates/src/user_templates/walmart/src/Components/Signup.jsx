import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Paper } from '@mui/material';

const StyledContainer = (props) => (
  <Container {...props} sx={{ marginTop: '50px' }}>
    {props.children}
  </Container>
);

const StyledPaper = (props) => (
  <Paper {...props} sx={{ padding: '20px', marginTop: '20px' }}>
    {props.children}
  </Paper>
);

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
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
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" align="center">Signup</Typography>
      <StyledPaper>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                value={formData.username}
                onChange={handleChange}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Signup
              </Button>
            </Grid>
          </Grid>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Signup;
