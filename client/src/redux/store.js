import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import productsReducer from './productsRedux';
import thunk from 'redux-thunk';

const subreducers = {
  products: productsReducer,
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
