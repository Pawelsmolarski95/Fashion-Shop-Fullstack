import axios from 'axios';

export const getAllCartProducts = ({ cart }) => cart.products;
export const getAllCartProductsCount = ({ cart }) =>
  cart.products.reduce((n, { quantity }) => n + quantity, 0);

export const getAllCartProductsSum = ({ cart }) =>
  cart.products.reduce(
    (n, { price, quantity }) => Math.round((n + price * quantity) * 100) / 100,
    0,
  );

export const getCartProductById = ({ cart }, cartProductId) =>
  cart.products.find((product) => product.id === cartProductId);

  const reducerName = 'cart';
const createActionName = (actionName) => `app/${reducerName}/${actionName}`;

const ADD_CART_PRODUCT = createActionName('ADD_CART_PRODUCT');
const UPDATE_CART_PRODUCT = createActionName('UPDATE_CART_PRODUCT');
const REMOVE_CART_PRODUCT = createActionName('REMOVE_CART_PRODUCT');
const LOAD_CART_PRODUCTS = createActionName('LOAD_CART_PRODUCTS');

const RESET_CART_PRODUCT = createActionName('RESET_CART_PRODUCT');

export const addCartProduct = (payload) => ({
    payload,
    type: ADD_CART_PRODUCT,
  });
  export const loadCartProducts = (payload) => ({
    payload,
    type: LOAD_CART_PRODUCTS,
  });
  export const removeCartProduct = (payload) => ({
    payload,
    type: REMOVE_CART_PRODUCT,
  });
  export const updateCartProduct = (payload) => ({
    payload,
    type: UPDATE_CART_PRODUCT,
  });
  export const resetCartProduct = (payload) => ({
    payload,
    type: RESET_CART_PRODUCT,
  });

  export const loadCartProductsRequest = () => {
    return async (dispatch) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart && cart.products) {
          dispatch(loadCartProducts(cart.products));
        }
    };
  };
  
  const createCartInLocalStorage = () => {
    const cart = {
      products: [],
    };
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const updateCartProductsRequest = (productToAdd) => {
    return async (dispatch) => {
      if (localStorage.getItem('cart') === null) {
        createCartInLocalStorage();
      }
  
      let cart = JSON.parse(localStorage.getItem('cart'));
  
      const findProduct = cart.products.find(
        (product) => product.id === productToAdd.id,
      );
  
      if (!findProduct) {
        cart = {
          ...cart,
          products:
            productToAdd.quantity !== 0
              ? [...cart.products, productToAdd]
              : [...cart.products],
        };
        dispatch(addCartProduct(productToAdd));
      }
  
      if (findProduct && productToAdd.quantity !== 0) {
        cart = {
          ...cart,
          products: cart.products.map((product) =>
            product.id === productToAdd.id && productToAdd.quantity !== 0
              ? { ...product, ...productToAdd }
              : product,
          ),
        };
        dispatch(updateCartProduct(productToAdd));
      }
  
      if (findProduct && productToAdd.quantity === 0) {
        cart = {
          ...cart,
          products: cart.products.filter((product) =>
            product.id === productToAdd.id ? false : true,
          ),
        };
        dispatch(removeCartProduct(productToAdd));
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  };
  
  // initial state
  const initialState = {
    products: [],

  };
  
  // action creators
  const cartReducer = (statePart = initialState, action = {}) => {
    switch (action.type) {
      case LOAD_CART_PRODUCTS:
        return {
          ...statePart,
          products: [...action.payload],
        };
      case ADD_CART_PRODUCT:
        return {
          ...statePart,
          products:
            action.payload.quantity !== 0
              ? [...statePart.products, action.payload]
              : [...statePart.products],
        };
      case REMOVE_CART_PRODUCT:
        return {
          ...statePart,
          products: statePart.products.filter((product) =>
            product.id === action.payload.id ? false : true,
          ),
        };
      case UPDATE_CART_PRODUCT:
        return {
          ...statePart,
          products: statePart.products.map((product) =>
            product.id === action.payload.id && action.payload.quantity !== 0
              ? { ...product, ...action.payload }
              : product,
          ),
        };
      case RESET_CART_PRODUCT:
        return initialState;
      default:
        return statePart;
    }
  };
  
  export default cartReducer;
  