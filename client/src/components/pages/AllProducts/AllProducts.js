
import MainProducts from '../MainProducts/MainProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../../redux/productSlice';


const AllProducts = () => {

    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state) => state.products);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  return (
    <div>
      <MainProducts products={products}/>
    </div>
  );
};

export default AllProducts;
