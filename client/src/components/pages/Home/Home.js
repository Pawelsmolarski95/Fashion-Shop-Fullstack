import Banner from '../../features/Banner/Banner';
import Categories from '../../features/Categories/Categories'
import TrendingProducts from '../../features/TrendingProducts/TrendingProducts';
import Blog from '../../features/Blog/Blog';
import MostPurchased from '../../features/MostPurchased/MostPurchased';
import Newsletter from '../../features/Newsletter/Newsletter';
import { useDispatch } from 'react-redux';
import { loadProductsRequest } from '../../../redux/productsRedux';
import { useEffect } from 'react';


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProducts />
      <MostPurchased  />
      <Blog />
      <Newsletter />
    </>
  );
};

export default Home;
