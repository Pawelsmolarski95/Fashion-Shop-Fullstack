import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../config';

const initialState = {
  products: [],
  selectedProduct: null,
  productByCategory: null,
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setProductByCategory: (state, action) => {
      state.productByCategory = action.payload;
    }
  },
});


export const { setLoading, setError, setProducts,setSelectedProduct,setProductByCategory } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    dispatch(setProducts(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const fetchProductById = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`http://localhost:3000/api/products/${id}`);
    dispatch(setSelectedProduct(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const fetchProductByCategory = (category) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`http://localhost:3000/api/products/category/${category}`);
    dispatch(setProductByCategory(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export default productSlice.reducer;
