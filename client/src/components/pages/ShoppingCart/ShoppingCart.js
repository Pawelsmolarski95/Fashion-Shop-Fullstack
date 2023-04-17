import { useEffect, useState } from 'react';
import ShoppingCartItem from '../../common/ShoppingCartItem/ShoppingCartItem';
import ShoppingCartForm from '../../common/ShoppingCartForm/ShoppingCartForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCart,
  increaseCart,
  prepareCartToOrder,
  removeAllCart,
  removeFromCart,
} from '../../../redux/cartSlice';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  function getTotalPrice(cartItems) {
    const totalPrice = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return totalPrice;
  }

  const totalPrice = getTotalPrice(cart.cartItems);
  const shipping = 4.99;

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleRemoveAll = () => {
    dispatch(removeAllCart());
  };

  const handleDecrease = (id) => {
    dispatch(decreaseCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseCart(id));
  };
  const handlePrepareToOrder = () => {
    localStorage.setItem('commentToOrder', JSON.stringify(comment));
  };

  return (
    <div className="h-auto bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Your bag:</h1>

      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.cartItems.length === 0 ? (
            <div className="text-center">
              <h5>Your cart is empty</h5>{' '}
            </div>
          ) : (
            <div>
              {cart.cartItems?.map((item) => (
                <ShoppingCartItem
                  name={item.name}
                  id={item.id}
                  quantity={item.quantity}
                  price={item.price * item.quantity}
                  size={item.size}
                  color={item.color}
                  image={item.image}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col md:w-[40%]">
          <div className="mt-6 mb-6 h-full rounded-lg  bg-white p-6 shadow-md md:mt-0 ">
            <p className="text-gray-700 mb-1 text-[14px]">
              Here you can add more details about your order
            </p>
            <hr className="my-4" />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border p-1 border-[#e5e7eb] w-full h-auto rounded-lg "
            />
          </div>

          <div className="mt-6 mb-6 h-full rounded-lg  bg-white p-6 shadow-md md:mt-0 ">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">${shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  ${totalPrice + shipping} USD
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <Link to={'/order'}>
              <button
                onClick={() => handlePrepareToOrder(comment)}
                className="mt-6 w-full rounded-md bg-[#4f46e5] py-1.5 font-medium text-blue-50"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      {cart.cartItems.length !== 0 ? (
        <div className="flex justify-center mb-5">
          <button
            onClick={() => handleRemoveAll()}
            className="my-6 rounded-md border-2 text-[16px] border-[#4f46e5] text-[#4f46e5] py-1.5 px-3 font-medium text-blue-5 inline-flex"
          >
            Remove All
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingCart;
