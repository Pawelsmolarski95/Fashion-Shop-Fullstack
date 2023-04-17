import { useEffect, useState } from 'react';
import { IMGS_URL } from '../../../config';

const ShoppingCartOrder = ({
  size,
  name,
  quantity,
  price,
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

  return (
    <div className=" inline-block mb-6 rounded-lg bg-white p-3 shadow-md sm:flex sm:justify-start">
      <img
        src={`${IMGS_URL}/uploads/${image}`}
        alt="product-image"
        className="w-full rounded-lg object-cover sm:w-[140px] sm:h-[100px]"
      />
      <div className="sm:ml-3 sm:flex flex-col sm:w-full gap-1 ">
        <div className="mt-5 flex flex-col justify-around sm:mt-0">
          <h2 className="text-xs font-bold text-gray-900">{name}</h2>
        </div>
        <div className=" flex flex-col gap-1 justify-around">
          <p className="mt-1 text-xs font-">Size: {size}</p>
          <p className="text-xs">Quantity: {quantity}</p>
          <p className="text-xs">Color: {color}</p>

          <p className="text-xs">Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartOrder;
