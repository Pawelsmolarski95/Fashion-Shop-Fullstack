import { useParams } from 'react-router-dom';
import MainProducts from '../MainProducts/MainProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductBySearchPhrase } from '../../../redux/productSlice';

const SearchPhrase = () => {
  const { phrase } = useParams();

  const dispatch = useDispatch();
  const { productBySearchPhrase, isLoading, error } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductBySearchPhrase(phrase));
  }, [dispatch, phrase]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productBySearchPhrase) {
    return <div>No product selected</div>;
  }

  return (
    <div>
      <MainProducts products={productBySearchPhrase} />
    </div>
  );
};

export default SearchPhrase;
