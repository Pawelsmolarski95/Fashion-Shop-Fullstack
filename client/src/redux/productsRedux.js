import axios from 'axios';
import { API_URL } from '../config';

// selectors
export const getAllProducts = ({ products }) => products.data;
export const getProductById = ({ products }, productId) =>
  products.data.find((product) => product.id === productId);
export const getRequest = ({ products }) => products.request;

// action name creator
const reducerName = 'products';
const createActionName = (actionName) => `app/${reducerName}/${actionName}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

// actions
export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });

//thunk

export const loadProductsRequest = () => {
  return async (dispatch) => {
    fetch('http://localhost:3000/api/products')
    .then(res=> res.json())
    .then(products => dispatch(loadProducts(products)))
};
}

// export const loadSearchedProductsRequest = () => {
//   return async (dispatch) => {
//     dispatch(startRequest({ name: 'LOAD_PRODUCTS' }));
//     try {
//       const res = await axios.get(`${API_URL}/products`, {
//         params: {
//           name: `${searchPhrase}`,
//           nameFilterType: 'CONTAINS',
//           sortField: 'name',
//           orderDirection: 'DESC',
//         },
//       });
//       dispatch(loadProducts(res.data));
//       dispatch(endRequest({ name: 'LOAD_PRODUCTS' }));
//     } catch (err) {
//       dispatch(errorRequest({ name: 'LOAD_PRODUCTS', error: err.message }));
//     }
//   };
// };

// export const loadCategoryProductsRequest = (category) => {
//   return async (dispatch) => {
//     dispatch(startRequest({ name: 'LOAD_PRODUCTS' }));
//     try {
//       const res = await axios.get(`${API_URL}/products`, {
//         params: {
//           category: `${category}`,
//         },
//       });
//       dispatch(loadProducts(res.data));
//       dispatch(endRequest({ name: 'LOAD_PRODUCTS' }));
//     } catch (err) {
//       dispatch(errorRequest({ name: 'LOAD_PRODUCTS', error: err.message }));
//     }
//   };
// };

// initial state
const initialState = {
  data: [],

};

// action creators
const productsReducer = (statePart = initialState, action ) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: [...action.payload] };
    
    default:
      return statePart;
  }
};

export default productsReducer;
