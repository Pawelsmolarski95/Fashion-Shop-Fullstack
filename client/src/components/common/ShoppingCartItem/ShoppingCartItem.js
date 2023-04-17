import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { decreaseCart } from '../../../redux/cartSlice';
import { IMGS_URL } from '../../../config';

const ShoppingCartItem = ({
  size,
  name,
  quantity,
  price,
  handleRemoveFromCart,
  handleDecrease,
  handleIncrease,
  id,
  color,
  image
}) => {
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const total = Math.floor(quantity * price * 100) / 100;
    const roundedTotal = total.toFixed(2);

    setTotalPrice(roundedTotal);
  }, []);

  const [comment, setComment] = useState('');

  const handleChangeComment = (value) => {
    
    setComment(value)
  }
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={`${IMGS_URL}/uploads/${image}`}
        alt="product-image"
        className="w-[200px] h-[100px] object-cover rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0 flex flex-col justify-between">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
          <p className="mt-1 text-xs text-gray-700">Size: {size}</p>
          <p className="mt-1 text-xs text-gray-700">Color: {color}</p>
        </div>
        <div className="mt-4 flex flex-col relative justify-center sm:space-y-6 sm:mt-0 sm:block sm:space-x-2">
          <button
            className="p-2  absolute top-[-17%] right-[-10%]"
            onClick={() => handleRemoveFromCart(id)}
          >
            X{' '}
          </button>
          <div className="flex items-center border-gray-100">
            <button onClick={() => handleDecrease(id)}>
              <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-[#4f46e5] hover:text-blue-50">
                {' '}
                -{' '}
              </span>
            </button>

            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              value={quantity}
              min="1"
            />
            <button onClick={() => handleIncrease(id)}>
              <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-[#4f46e5] hover:text-blue-50">
                {' '}
                +{' '}
              </span>
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-md font-bold">Price: {price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
