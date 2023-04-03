import { Route, Routes } from 'react-router';
import './App.css';


import NavBar from './components/layout/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
      </Routes>
    </main>
  );
}

export default App;
