import { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CircularProgress, Button } from '@mui/material';

const StyledContainer = (props) => (
  <Container {...props} sx={{ marginTop: '20px' }}>
    {props.children}
  </Container>
);

const StyledCard = (props) => (
  <Card {...props} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
    {props.children}
  </Card>
);

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
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
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <StyledContainer>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <StyledCard>
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
                <Typography variant="body2" color="text.secondary">
                  {expanded[product.id] ? product.description : truncateText(product.description, 30)}
                </Typography>
                <Button size="small" onClick={() => toggleExpand(product.id)}>
                  {expanded[product.id] ? 'Read less' : 'Read more'}
                </Button>
                <Typography variant="h6" color="text.primary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default Products;
