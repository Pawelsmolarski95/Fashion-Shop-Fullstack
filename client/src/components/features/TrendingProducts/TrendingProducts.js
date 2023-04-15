import { useDispatch, useSelector } from 'react-redux';
import ProductBox from '../../common/ProductBox/ProductBox';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect } from 'react';
import {

  getMostTrending,

} from '../../../redux/productsSlice';

const TrendingProducts = () => {

  const products = useSelector(getMostTrending);


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
              <p className="text-[#4f46e5]">See all products</p>
              <AiOutlineArrowRight style={{ color: '#4f46e5' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.slice(0, 4).map((product) => (
              <ProductBox
              key={product.id} 
                id={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
