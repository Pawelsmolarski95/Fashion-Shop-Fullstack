import './App.css';
import Banner from './components/features/Banner/Banner';
import SortTools from './components/features/SortTools/SortTools';


import NavBar from './components/layout/NavBar/NavBar';
import Products from './components/pages/Products/Products';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <SortTools />
      <Products/>
      
    </>
  );
}

export default App;
