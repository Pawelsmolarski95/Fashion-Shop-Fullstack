import { useEffect, useState } from 'react';

const ShoppingCartOrder = ({
  size,
  name,
  quantity,
  price,
  id,
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
        src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="product-image"
        className="w-full rounded-lg sm:w-[100px] sm:h-[100px]"
      />
      <div className="sm:ml-3 sm:flex sm:w-full gap-3 ">
        <div className="mt-5 flex flex-col justify-around sm:mt-0">
          <h2 className="text-xs font-bold text-gray-900">{name}</h2>
        </div>
        <div className=" flex flex-col justify-around">
          <p className="mt-1 text-xs">Size: {size}</p>
          <p className="text-xs">Quantity:{quantity}</p>

          <p className="text-xs">Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartOrder;
