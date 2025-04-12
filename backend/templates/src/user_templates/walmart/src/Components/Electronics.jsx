import React, { useEffect, useState, useContext } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CircularProgress, Button } from '@mui/material';
import { CartContext } from './CartContext';

const Electronics = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
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
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
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

export default Electronics;
