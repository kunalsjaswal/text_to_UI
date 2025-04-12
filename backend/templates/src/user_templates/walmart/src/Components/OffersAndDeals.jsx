import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, CardMedia, CircularProgress, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const OffersAndDeals = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products/category');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProducts = async (category) => {
      setLoadingProducts((prevLoading) => ({ ...prevLoading, [category]: true }));
      try {
        const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${category}`);
        const data = await response.json();
        setProducts((prevProducts) => ({
          ...prevProducts,
          [category]: data.products.slice(0, 4),
        }));
      } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error);
      } finally {
        setLoadingProducts((prevLoading) => ({ ...prevLoading, [category]: false }));
      }
    };

    const fetchAllData = async () => {
      await fetchCategories();
      for (const category of categories) {
        await fetchProducts(category);
      }
      setLoading(false);
    };

    fetchAllData();
  }, [categories]);

  return loading ? (
    <CircularProgress />
  ) : (
    <Container sx={{ marginTop: '20px', marginBottom: '40px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Offers and Deals
      </Typography>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: '40px', padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            {category.toUpperCase()}
          </Typography>
          <Grid container spacing={3}>
            {products[category]?.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.title}>
                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      style={{background:"white"}}
                      image={product.image}
                      alt={product.title}
                      sx={{ objectFit: 'contain' }}
                    />
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
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          
        </div>
      ))}
    </Container>
  );
};

export default OffersAndDeals;
