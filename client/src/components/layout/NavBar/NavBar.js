import React, {  useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { Popover } from '@headlessui/react';
import { ShoppingBagIcon, User, UserIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { IMGS_URL } from '../../../config';

const NavBar = ({ cart }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSearch = () => {
    navigate('/product/searchphrase/' + `${searchValue}`)
  }
  const [openCart, setOpenCart] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  return (
    <Popover className="mx-auto max-w-2xl  sm:px-6 lg:max-w-7xl lg:px-8 flex items-center  px-6 py-2 h-24">
      <a href="/">
        <img
          src={`${IMGS_URL}/uploads/logo.png`}
          alt="logo"
          width={200}
          height={150}
          className="mt-1"
        />
      </a>
      <div className="grow">
        <form className="hidden md:flex justify-end items-center relative">
          <input
            type="text"
            placeholder="Search product"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="rounded-full font-serif border-gray-500 border-[1.5px] text-[13px] text-gray-00 px-1 py-[2px] lg:px-8 placeholder-gray-600 bg-inherit outline-none"
            onKeyDown={(event) => {
              if (event.keyCode === 13) { 
                event.preventDefault(); 
                handleSearch(); 
              }
            }}
          />
          <Link to={'/product/searchphrase/' + `${searchValue}`}>
            <div className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer">
              <AiOutlineSearch size={22} />
            </div>
          </Link>
        </form>
      </div>
      <div className="grow">
        <ul className="hidden md:flex font-serif items-center font-medium tracking-widest justify-center md:justify-end text-gray-600 gap-2 lg:gap-8 cursor-pointer">
          <Link to={'/product/category/men'}>
            <li>Men</li>
          </Link>
          <Link to={'/product/category/women'}>
            <li>Women</li>
          </Link>

          <Link to={'/product/category/accessories'}>
            <li>Accesories</li>
          </Link>
          <Link to={'/contact'}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="grow ">
        <div className="hidden md:flex justify-end gap-5 mr-4">
          <a href="/login">
            <UserIcon
              className="h-6 w-6 flex-shrink-0 text-gray-900 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </a>

          <div
            className="ml-4 flow-root lg:ml-6"
            onClick={() => setOpenCart(true)}
          >
            <div className="group -m-2 relative flex items-center p-2">
              <Link to={'/shoppingcart'}>
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-900 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Link>

              <span className="ml-2 absolute h-[16px] w-[16px] right-1 top-6  text-sm font-medium bg-[#4f46e5] rounded-full text-white  group-hover:text-gray-800">
                <p className="text-[11px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></p>
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grow  flex items-center justify-end md:hidden">
        <Popover.Button className="inline-flex items-center justify-end gap-2 p-2 text-[#EDE9E8]  bg-gray-500  md:gap-8">
          <AiOutlineMenu size={25} aria-hidden="true" />
        </Popover.Button>
      </div>
      {/* ------------------MOBILE CART------------------*/}
      <Popover.Panel
        focus
        className="absolute z-[100] inset-x-0 h-auto top-0 origin-top-right transform text-gray-900 bg-[#f3f4f6] transition md:hidden"
      >
        <div className=" shadow-lg   ring-opacity-5  pt-6 divide-gray-50 text-gray-900 ">
          <div className="pt-1 pb-5 px-5">
            <div className="flex items-center justify-between">
              <img  src={`${IMGS_URL}/uploads/logo.png`} alt="logo" width={170} height={130} />
              <div className="-mr-2">
                <Popover.Button className="absolute top-3 right-6 gap-2 rounded-md bg-[#f3f4f6] p-2 text-[#3E5151]">
                  <span className="sr-only">Close menu</span>
                  <AiOutlineClose size={20} />
                </Popover.Button>
              </div>
            </div>
            <ul className="flex justify-center mt-8 items-center flex-col text-gray-900  font-bold tracking-widest gap-4">
              <Link to={'/product/category/men'}>
                <li>Men</li>
              </Link>
              <Link to={'/product/category/women'}>
                <li>Women</li>
              </Link>

              <Link to={'/product/category/accessories'}>
                <li>Accesories</li>
              </Link>
              <Link to={'/contact'}>
                <li>Contact</li>
              </Link>
            </ul>
            <div className="flex items-center justify-center gap-10 mt-10">
              <form className="flex justify-end items-center relative">
                <input
                  type="text"
                  placeholder="Search product"
                  className="rounded-lg  border-2 py-1 px-8 placeholder-gray-700 bg-[#EDE9E8] outline-none"
                />
                <div className="absolute right-2 cursor-pointer">
                  <AiOutlineSearch size={24} />
                </div>
              </form>
              <div className="flex">
                <div className="flex justify-end gap-10 mr-4 text-gray-600">
                  <a href="/login">
                    <UserIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-900 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link to={'/shoppingcart'}>
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-900 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
export default NavBar;
