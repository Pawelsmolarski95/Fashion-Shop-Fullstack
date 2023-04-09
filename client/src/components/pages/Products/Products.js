import { useDispatch, useSelector } from 'react-redux';
import ProductBox from '../../common/ProductBox/ProductBox';

import {
  getAllProducts,
  getRequest,
  loadProductsRequest,
} from '../../../redux/productsRedux';
import { useEffect } from 'react';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  // const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.slice(0, 4).map((product) => (
            <ProductBox
              id={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
