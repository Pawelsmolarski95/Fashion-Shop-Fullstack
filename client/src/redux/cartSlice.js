import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];
const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0;
const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0;

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id,
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(newItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(state.quantity),
        0,
      );
      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item)),
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    },
  },
});
export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;