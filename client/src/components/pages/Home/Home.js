import Banner from '../../features/Banner/Banner';
import Categories from '../../features/Categories/Categories'
import TrendingProducts from '../../features/TrendingProducts/TrendingProducts';
import Blog from '../../features/Blog/Blog';
import MostPurchased from '../../features/MostPurchased/MostPurchased';
import Newsletter from '../../features/Newsletter/Newsletter';


const Home = () => {

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
