import ProductBox from '../../common/ProductBox/ProductBox';
import { AiOutlineArrowRight } from 'react-icons/ai';

const TrendingProducts = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center ">
            <a href="/products">
              {' '}
              <h2 className="text-2xl mb-4 font-bold text-gray-900">
                Trending Products
              </h2>
            </a>

            <div className="flex justify-center items-center gap-1">
              <p className="text-[#4f46e5]">Shop the collection</p>
              <AiOutlineArrowRight style={{ color: '#4f46e5' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
