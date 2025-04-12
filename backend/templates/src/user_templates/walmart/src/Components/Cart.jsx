import React, { useContext } from 'react';
import { Container, Typography, Grid, Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
     clearCart();
   };

   const totalBill = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Cart
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {cartItems.length === 0 ? (
          <Typography variant="h6" component="p">
            Your cart is empty.
          </Typography>
        ) : (
          cartItems.map((item, index) => (
            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
              <Typography variant="body1" sx={{ flex: '0 0 50px' }}>
                {index + 1}
              </Typography>
              <Typography variant="body1" sx={{ flex: '1 1 auto', textAlign: 'center' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ flex: '0 0 100px', textAlign: 'right' }}>
                ${item.price} x {item.quantity}
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => removeFromCart(item.id)}
                sx={{ marginLeft: '10px' }}
              >
                Remove
              </Button>
            </Box>
          ))
        )}
      </Box>
      {cartItems.length > 0 && (
         <>
           <Typography variant="h5" component="p" sx={{ marginTop: '20px' }}>
             Total Bill: ${totalBill.toFixed(2)}
           </Typography>
           <Button
             variant="contained"
             color="primary"
             onClick={handleClickOpen}
             sx={{ marginTop: '20px' }}
           >
             Buy Now
           </Button>
           <Dialog
             open={open}
             onClose={handleClose}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
           >
             <DialogTitle id="alert-dialog-title">{"Order Placed Successfully"}</DialogTitle>
             <DialogContent>
               <DialogContentText id="alert-dialog-description">
                 Your order has been placed successfully.
               </DialogContentText>
             </DialogContent>
             <DialogActions>
               <Button onClick={handleClose} color="primary" autoFocus>
                 OK
               </Button>
             </DialogActions>
           </Dialog>
         </>
        )}
    </Container>
  );
};

export default Cart;
