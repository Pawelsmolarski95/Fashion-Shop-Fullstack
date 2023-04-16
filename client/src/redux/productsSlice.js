import axios from 'axios';
import { API_URL } from '../config';


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  request: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.data = action.payload;
      state.request = null;
    },
    setRequest: (state, action) => {
      state.request = action.payload;
    },
  },
});

export const { loadProducts, setRequest } = productsSlice.actions;

export const getAllProducts = (state) => state.products.data;
export const getProductById = (state, id) =>
  state.products.data.find((product) => product.id === id);
export const getProductByCategory = (state, category) =>
  state.products.data.filter((product) => product.category === category);
export const getProductBySearchPhrase = (state, phrase) =>
  state.products.data.find((product) => product.name.includes(phrase));
export const getMostTrending = (state) =>
  state.products.data
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
export const getMostPurchased = (state) =>
  state.products.data.slice().slice(0, 4);
export const getRequest = (state) => state.products.request;


export const loadProductsRequest = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    dispatch(loadProducts(res.data));
  } catch (error) {
    dispatch(setRequest(error.message));
  }
};

export const loadSearchedProductsRequest = (searchPhrase) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/products`, {
      params: {
        name: searchPhrase,
        nameFilterType: 'CONTAINS',
        sortField: 'name',
        orderDirection: 'DESC',
      },
    });
    dispatch(loadProducts(res.data));
  } catch (error) {
    dispatch(setRequest(error.message));
  }
};

export const loadProductByIdRequest = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/products`, {
      params: {
        id,
        nameFilterType: 'EQUALS',
        sortField: 'id',
        orderDirection: 'ASC',
      },
    });
    dispatch(loadProducts(res.data));
  } catch (error) {
    dispatch(setRequest(error.message));
  }
};

export const loadProductByCategoryRequest = (category) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/products`, {
      params: {
        category,
        nameFilterType: 'EQUALS',
        sortField: 'category',
        orderDirection: 'ASC',
      },
    });
    dispatch(loadProducts(res.data));
  } catch (error) {
    dispatch(setRequest(error.message));
  }
};

export default productsSlice.reducer;