import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './productsRedux';
import userReducer from './userRedux';
import cartReducer from './cartRedux';



const subreducers = {
  user: userReducer,
  products: productsReducer,
  cart: cartReducer

};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default store;
