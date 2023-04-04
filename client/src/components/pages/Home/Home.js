import Banner from '../../features/Banner/Banner';
import Categories from '../../features/Categories/Categories'
import TrendingProducts from '../../features/TrendingProducts/TrendingProducts';
import Blog from '../../features/Blog/Blog';
import MostPurchased from '../../features/MostPurchased/MostPurchased';

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProducts />
      <MostPurchased />
      <Blog />
    </>
  );
};

export default Home;
