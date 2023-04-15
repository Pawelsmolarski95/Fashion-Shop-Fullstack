import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartItemsQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemId = action.payload.id;
      const itemIndex = state.cartItems.find((item) => item.id === itemId);
      if (itemIndex) {
        itemIndex.cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId,
      );
      state.cartItems = updatedCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeAllCart(state, action) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === itemId);
      console.log(itemId);

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== itemId,
        );
        state.cartItems = nextCartItems;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    increaseCart(state, action) {
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === itemId);
      state.cartItems[itemIndex].quantity += 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllCart,
  decreaseCart,
  increaseCart,
  prepareCartToOrder
} = cartSlice.actions;

export default cartSlice.reducer;
