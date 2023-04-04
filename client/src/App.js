import { Route, Routes } from 'react-router';
import './App.css';


import NavBar from './components/layout/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
