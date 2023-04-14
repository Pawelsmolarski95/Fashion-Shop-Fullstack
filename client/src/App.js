import { Route, Routes } from 'react-router';
import './App.css';

import NavBar from './components/layout/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import Footer from './components/layout/Footer/Footer';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import ShoppingCart from './components/pages/ShoppingCart/ShoppingCart';
import AllProducts from './components/pages/AllProducts/AllProducts';
import Category from './components/pages/Category/Category';
import SearchPhrase from './components/pages/SearchPhrase/SearchPhrase';
import Contact from './components/pages/Contact/Contact';
import { useDispatch } from 'react-redux';
import { loadProductsRequest } from './redux/productsSlice';
import { useEffect } from 'react';
import { getAllCart } from './redux/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Order from './components/pages/Order/Order';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsRequest());
    console.log('LOAD Products Request');
  }, [dispatch]);

  return (
    <main>
      <ToastContainer autoClose={4000} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/product/category/:category" element={<Category />} />
        <Route
          path="/product/searchphrase/:phrase"
          element={<SearchPhrase />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
