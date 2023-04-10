import { combineReducers, configureStore } from '@reduxjs/toolkit';

import productSlice from './productSlice';
import cartSlice from './cartSlice';

const rootReducer = combineReducers({
    products: productSlice,
    card: cartSlice
  });

const store = configureStore({
  reducer: rootReducer,
});

export default store;

