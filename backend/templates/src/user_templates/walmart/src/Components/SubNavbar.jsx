import React from 'react';
import { AppBar, Toolbar, Button, Grid, IconButton, useTheme } from '@mui/material';
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const StyledAppBar = (props) => (
  <AppBar {...props} sx={{ backgroundColor: '#fff', color: '#000', marginTop: 0, position: 'sticky', top: '64px', zIndex: 1000 }}>
    {props.children}
  </AppBar>
);

const SubNavbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;

  const getButtonStyle = (path) => ({
    fontWeight: currentPath === path ? 'bold' : 'normal',
  });

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="flex-start">
          <IconButton onClick={toggleTheme} color="inherit" sx={{ marginRight: '10px' }}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button component={Link} to="/" color="inherit" sx={getButtonStyle('/')}>Home</Button>
          <Button component={Link} to="/mobiles" color="inherit" sx={getButtonStyle('/mobiles')}>Mobiles</Button>
          <Button component={Link} to="/television" color="inherit" sx={getButtonStyle('/television')}>Television</Button>
          <Button component={Link} to="/gaming" color="inherit" sx={getButtonStyle('/gaming')}>Gamings</Button>
          <Button component={Link} to="/laptops" color="inherit" sx={getButtonStyle('/laptops')}>Laptops</Button>
          <Button component={Link} to="/appliances" color="inherit" sx={getButtonStyle('/appliances')}>Appliances</Button>
          <Button component={Link} to="/game" color="inherit" sx={getButtonStyle('/game')}>Game</Button>
          <Button component={Link} to="/audios" color="inherit" sx={getButtonStyle('/audios')}>Audios</Button>
          <Button component={Link} to="/about" color="inherit" sx={getButtonStyle('/about')}>About</Button>
          <Button component={Link} to="/contact-us" color="inherit" sx={getButtonStyle('/contact-us')}>Contact Us</Button>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default SubNavbar;
