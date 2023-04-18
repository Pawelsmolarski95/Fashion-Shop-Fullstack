import { useParams } from 'react-router-dom';
import MainProducts from '../MainProducts/MainProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySearchPhrase } from '../../../redux/productsSlice';


const SearchPhrase = () => {
  const { phrase } = useParams();

  const dispatch = useDispatch();
  const productBySearchPhrase = useSelector(state => getProductBySearchPhrase(state, phrase));

  return (
    <div>
      <MainProducts products={productBySearchPhrase} />
    </div>
  );
};

export default SearchPhrase;
