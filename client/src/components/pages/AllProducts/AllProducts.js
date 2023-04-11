
import MainProducts from '../MainProducts/MainProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts, getRequest, loadProductsRequest } from '../../../redux/productsRedux';



const AllProducts = () => {

  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);


  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);
  

  return (
    <div>
      <MainProducts products={products}/>
    </div>
  );
};

export default AllProducts;
