import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Box, Container } from '@mui/material';
import { CartProvider } from './Components/CartContext';
import { ThemeContextProvider } from './Components/ThemeContext';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Mobiles from './Components/Mobiles';
import About from './Components/About';
import Television from './Components/Television';
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import Gamings from './Components/Gamings';
import Laptops from './Components/Laptops';
import Appliances from './Components/Appliances';
import Audios from './Components/Audios';
import Products from './Components/Products';
import Game from './Components/Game';

const HomeContainer = (props) => (
  <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', textAlign: 'center' }}>
    {props.children}
  </Container>
);

const App = () => {
  return (
    <ThemeContextProvider>
      <CartProvider>
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ flex: '1' }}>
              <Routes>
                <Route path="/" element={
                  <HomeContainer>
                    <Home />
                  </HomeContainer>
                } 
                />
                <Route path="/signup" element={
                  <HomeContainer>
                    <Signup />
                  </HomeContainer>
                } 
                />
                
                <Route path="/cart" element={
                  <HomeContainer>
                    <Cart />
                  </HomeContainer>
                } 
                />
                <Route path="/mobiles" element={
                  <HomeContainer>
                    <Mobiles />
                  </HomeContainer>
                } 
                />
                <Route path="/television" element={
                  <HomeContainer>
                    <Television />
                  </HomeContainer>
                } 
                />
                <Route path="/gaming" element={
                  <HomeContainer>
                    <Gamings />
                  </HomeContainer>
                } 
                />
                <Route path="/laptops" element={
                  <HomeContainer>
                    <Laptops />
                  </HomeContainer>
                } 
                />
                <Route path="/appliances" element={
                  <HomeContainer>
                    <Appliances />
                  </HomeContainer>
                } 
                />
                <Route path="/game" element={
                  <HomeContainer>
                    <Game />
                  </HomeContainer>
                } 
                />
                <Route path="/audios" element={
                  <HomeContainer>
                    <Audios />
                  </HomeContainer>
                } 
                />
                <Route path="/products" element={
                  <HomeContainer>
                    <Products />
                  </HomeContainer>
                } 
                />
                <Route path="/about" element={
                  <HomeContainer>
                    <About />
                  </HomeContainer>
                } 
                />
                <Route path="/contact-us" element={
                  <HomeContainer>
                    <ContactUs />
                  </HomeContainer>
                } 
                />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </CartProvider>
    </ThemeContextProvider>
  );
};

export default App;
