import { useParams } from 'react-router-dom';
import MainProducts from '../MainProducts/MainProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductByCategory, getRequest, loadProductByCategoryRequest } from '../../../redux/productsRedux';


const Category = () => {
  const { category } = useParams();
  const productByCategory = useSelector(state => getProductByCategory(state, category));

  return (
    <div>
      <MainProducts products={productByCategory} />
    </div>
  );
};

export default Category;
