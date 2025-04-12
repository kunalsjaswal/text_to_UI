import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, InputAdornment, Grid } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import SubNavbar from './SubNavbar';


const StyledAppBar = (props) => (
  <AppBar position="sticky" sx={{ backgroundColor: 'primary', marginBottom: 0, top: 0, zIndex: 1100 }}>
    {props.children}
  </AppBar>
);

const StyledButton = (props) => (
  <Button {...props} sx={{ marginRight: '10px', color: '#FFF', '&:hover': { color: '#FFD700' } }}>
    {props.children}
  </Button>
);

const Navbar = () => {
  return (
    <>
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={2} container alignItems="center">
            <Link to="/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/200px-Walmart_logo.svg.png" alt="Walmart Logo" style={{ height: '40px', marginRight: '10px', borderRadius: '5px' }} />
            </Link>
          </Grid>
          <Grid item xs={5}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { borderRadius: '20px', backgroundColor: '#fff' }
              }}
            />
          </Grid>
          <Grid item xs={3} container justifyContent="flex-end">
            <StyledButton component={Link} to="/signup"><AccountCircleIcon/> Signup</StyledButton>
            <StyledButton component={Link} to="/cart"><ShoppingCartIcon /> My Cart</StyledButton>
          </Grid>
        </Grid>
        </Toolbar>
    </StyledAppBar>
    {/* <SubNavbar /> */}
    </>
  );
};

export default Navbar;
