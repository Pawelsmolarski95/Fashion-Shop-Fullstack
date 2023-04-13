import { useEffect, useState } from 'react';
import ShoppingCartItem from '../../common/ShoppingCartItem/ShoppingCartItem';
import ShoppingCartForm from '../../common/ShoppingCartForm/ShoppingCartForm';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem('cart'));
    setItems(getCart);
  }, [items]);

  return (
    <div className="h-auto bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Your bag:</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {Array.isArray(items) ? (
            items.map((item) => (
              <ShoppingCartItem
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                size={item.size}
              />
            ))
          ) : (
            <ShoppingCartItem
              name={items.name}
              quantity={items.quantity}
              price={items.price}
              size={items.size}
            />
          )}
           
           <ShoppingCartForm />
        </div>
       
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-[#4f46e5] py-1.5 font-medium text-blue-50">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
