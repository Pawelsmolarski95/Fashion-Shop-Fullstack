import { useParams } from 'react-router-dom';
import MainProducts from '../MainProducts/MainProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductBySearchPhrase, loadSearchedProductsRequest } from '../../../redux/productsSlice';


const SearchPhrase = () => {
  const { phrase } = useParams();

  const dispatch = useDispatch();
  const productBySearchPhrase = useSelector(getProductBySearchPhrase);


  useEffect(() => {
    dispatch(loadSearchedProductsRequest(phrase));
  }, [dispatch]);
  
  return (
    <div>
      <MainProducts products={productBySearchPhrase} />
    </div>
  );
};

export default SearchPhrase;
