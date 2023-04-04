import { Route, Routes } from 'react-router';
import './App.css';


import NavBar from './components/layout/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import Footer from './components/layout/Footer/Footer';
import MainProducts from './components/pages/MainProducts/MainProducts';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<MainProducts />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
