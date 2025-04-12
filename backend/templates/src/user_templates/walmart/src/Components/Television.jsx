import React, { useEffect, useState, useContext } from 'react';
import { Container, Typography, Grid, Card, Box, CardContent, CardMedia, CircularProgress, Button } from '@mui/material';
import { CartContext } from './CartContext';

const Television = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products/category?type=tv')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <CircularProgress />
  ) : (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Television
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.model}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.model}
                  sx={{ objectFit: 'contain' }}
                />
                {product.discount && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: 'red',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '0 0 5px 0',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {product.discount}% OFF
                    </Typography>
                  </Box>
                )}
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.model}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  <span style={{ textDecoration: product.discount ? 'line-through' : 'none' }}>
                    ${product.price}
                  </span>
                  {product.discount ? (
                    <span style={{ marginLeft: '10px', color: 'red' }}>
                      ${product.price - (product.price * product.discount / 100)}
                    </span>
                  ) : null}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brand: {product.brand}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => addToCart(product)}
                  sx={{ marginTop: '10px' }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Television;
