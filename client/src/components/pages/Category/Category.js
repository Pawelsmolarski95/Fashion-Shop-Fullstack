import { useParams } from 'react-router-dom';
import MainProducts from '../MainProducts/MainProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductByCategory } from '../../../redux/productReducer';

const Category = () => {

    const { category } = useParams();
    const dispatch = useDispatch();
    const { productByCategory, isLoading, error } = useSelector(
      (state) => state.products,
    );
  
    useEffect(() => {
      dispatch(fetchProductByCategory(category));
    }, [dispatch, category]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!productByCategory) {
      return <div>No product selected</div>;
    }
  
  return (
    <div>
      <MainProducts products={productByCategory}/>
    </div>
  );
};

export default Category;
