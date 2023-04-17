
import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import orderReducer from './orderSlice';
import userReducer from './userSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer
  },
});

export default store;
