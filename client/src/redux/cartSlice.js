import { createSlice } from '@reduxjs/toolkit';

export const items =
  localStorage.getItem('cartItems') !== null
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
export const totalAmount =
  localStorage.getItem('totalAmount') !== null
    ? JSON.parse(localStorage.getItem('totalAmount'))
    : 0;
export const totalQuantity =
  localStorage.getItem('totalQuantity') !== null
    ? JSON.parse(localStorage.getItem('totalQuantity'))
    : 0;

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

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          size: newItem.size,
          color: newItem.color,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(newItem.totalPrice) + Number(newItem.price);
      }
      state.totalQuantity = state.totalQuantity + newItem.quantity;

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      );
      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item)),
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem(
        'totalQuantity',
        JSON.stringify(state.totalQuantity),
      );
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity, 0),
      );

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item)),
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem(
        'totalQuantity',
        JSON.stringify(state.totalQuantity),
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
