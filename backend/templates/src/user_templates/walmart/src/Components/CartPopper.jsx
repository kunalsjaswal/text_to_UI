import React from 'react';
import { Popper, Paper, Typography, Button, Box } from '@mui/material';

const CartPopper = ({ anchorEl, open, product, onClose }) => {
  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom" transition>
      {({ TransitionProps }) => (
        <Paper elevation={3} {...TransitionProps} sx={{ padding: '20px', maxWidth: '300px', textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Added to Cart
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            ${product.price}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Button variant="contained" color="primary" onClick={onClose}>
              Continue Shopping
            </Button>
            <Button variant="outlined" color="secondary" onClick={onClose}>
              View Cart
            </Button>
          </Box>
        </Paper>
      )}
    </Popper>
  );
};

export default CartPopper;
