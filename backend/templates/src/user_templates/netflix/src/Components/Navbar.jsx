import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import logo from 'https://pngimg.com/uploads/netflix/netflix_PNG15.png';

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ background: 'linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(36,36,36,1) 100%)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <Toolbar>
        <img src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="Netflix Logo" style={{ height: '30px', marginRight: '20px' }} />
        <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
          <Button color="inherit" style={{ color: '#FF0000', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#FF0000'}>Home</Button>
          <Button color="inherit" style={{ color: '#FF0000', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#FF0000'}>TV Shows</Button>
          <Button color="inherit" style={{ color: '#FF0000', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#FF0000'}>Movies</Button>
          <Button color="inherit" style={{ color: '#FF0000', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#FF0000'}>New & Popular</Button>
          <Button color="inherit" style={{ color: '#FF0000', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#FF0000'}>My List</Button>
        </Box>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
