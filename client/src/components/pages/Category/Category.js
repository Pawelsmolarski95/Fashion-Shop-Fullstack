import { useParams } from 'react-router-dom';
import MainProducts from '../MainProducts/MainProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByCategory, getRequest, loadProductByCategoryRequest } from '../../../redux/productsSlice';


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
