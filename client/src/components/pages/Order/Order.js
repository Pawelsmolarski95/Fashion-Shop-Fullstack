import { useEffect, useState } from 'react';
import ShoppingCartItem from '../../common/ShoppingCartItem/ShoppingCartItem';
import ShoppingCartForm from '../../common/ShoppingCartForm/ShoppingCartForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCart,
  getCart,
  removeAllCart,
  removeFromCart,
} from '../../../redux/cartSlice';
import { Link } from 'react-router-dom';
import ShoppingCartOrder from '../../common/ShoppingCartOrder/ShoppingCartOrder';

const Order = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  function getTotalPrice(cartItems) {
    const totalPrice = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return totalPrice;
  }
  const handleRemoveFromCart = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  const totalPrice = getTotalPrice(cart.cartItems);
  const shipping = 4.99;

  const handleRemoveAll = () => {
    dispatch(removeAllCart());
  };

  return (
    <div className="h-auto bg-gray-100 py-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Order</h1>

      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-[50%]">
          {cart.cartItems.length === 0 ? (
            <div className="text-center">
              <h5>Your cart is empty</h5>{' '}
            </div>
          ) : (
            <div>
              {cart.cartItems?.map((item) => (
                <ShoppingCartOrder
                  name={item.name}
                  id={item.id}
                  quantity={item.quantity}
                  price={item.price * item.quantity}
                  size={item.size}
                  handleRemoveFromCart={handleRemoveFromCart}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>
        <div className='flex flex-col md:w-2/3'>
          {' '}
          <div className="mt-6 mb-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full">
           
            
          </div>
          <div className="mt-6 mb-6 h-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  ${totalPrice + shipping} USD
                </p>
              </div>
            </div>
            <div className='flex '>
                <button className="mt-6 m-auto text-center w-[60%] rounded-md bg-[#4f46e5] py-1.5 font-medium text-blue-50">
              Order
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
