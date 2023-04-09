import Banner from '../../features/Banner/Banner';
import Categories from '../../features/Categories/Categories'
import TrendingProducts from '../../features/TrendingProducts/TrendingProducts';
import Blog from '../../features/Blog/Blog';
import MostPurchased from '../../features/MostPurchased/MostPurchased';
import Newsletter from '../../features/Newsletter/Newsletter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts, loadProductsRequest } from '../../../redux/productsRedux';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  // const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProducts products={products} />
      <MostPurchased products={products} />
      <Blog />
      <Newsletter />
    </>
  );
};

export default Home;
