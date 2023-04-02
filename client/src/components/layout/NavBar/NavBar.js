import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { BsFillBasketFill } from 'react-icons/bs';
import { SlArrowDown } from 'react-icons/sl';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { Popover } from '@headlessui/react';
import logo from './shop.svg';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Popover className="mx-aut w-full flex items-center  px-6 py-2 h-24">
      <img src={logo} alt="logo" width={130} height={130} />
      <div className="grow">
        <form className="hidden md:flex justify-end items-center relative">
          <input
            type="text"
            placeholder="Search product"
            className="rounded-lg border-gray-500 border-2 py-1 px-8 placeholder-gray-500 bg-inherit outline-none"
          />
          <div className="absolute right-2 cursor-pointer">
            <AiOutlineSearch size={24} />
          </div>
        </form>
      </div>
      <div className="grow">
        <ul className="hidden md:flex items-center uppercase tracking-widest justify-center md:justify-end text-[#3E5151] gap-2 md:gap-8 cursor-pointer">
          <li>Home</li>
          <ul className="relative flex justify-center items-center ">
            Categories
            <div
              className={
                open
                  ? ' transition duration-500 ease-in-out rotate-180 ml-1'
                  : 'transition duration-500 ease-in-ou ml-1 '
              }
              onClick={() => handleOpen()}
            >
              <SlArrowDown size={18} />
            </div>
            <div
              className={
                open
                  ? 'absolute top-6 left-0 transition duration-500 ease-in-out bg-[#EDE9E8] z-10 px-2 mt-3'
                  : 'hidden absolute top-6 left-0 transition duration-500 ease-in-out'
              }
            >
              <li className="py-2">Notebook</li>
              <li className="py-2">Phone</li>
              <li className="py-2">PC</li>
              <li className="py-2">Accesories</li>
            </div>
          </ul>

          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="grow ">
        <div className="hidden md:flex justify-end gap-5 mr-4">
          <BiUser size={24} />
          <BsFillBasketFill size={24} />
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
        className="absolute z-[100] inset-x-0 h-auto top-0 origin-top-right transform  bg-gray-500 transition md:hidden"
      >
        <div className=" shadow-lg   ring-opacity-5  pt-6 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <img src={logo} alt="logo" width={130} height={130} />
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#EDE9E8] p-2 text-[#3E5151]">
                  <span className="sr-only">Close menu</span>
                  <AiOutlineClose size={20} />
                </Popover.Button>
              </div>
            </div>
            <ul className="flex justify-center mt-8 items-center flex-col text-[#EDE9E8] uppercase tracking-widest gap-4">
              <li>Home</li>
              <ul
                className={
                  open
                    ? ' flex flex-col'
                    : 'relative flex justify-center items-center'
                }
              >
                <div className="flex justify-center items-center">
                  Categories
                  <div
                    className={
                      open
                        ? ' transition duration-500 ease-in-out rotate-180 ml-1'
                        : 'transition duration-500 ease-in-ou ml-1 '
                    }
                    onClick={() => handleOpen()}
                  >
                    <SlArrowDown size={18} />
                  </div>
                </div>

                <div
                  className={
                    open
                      ? ' text-sm  text-center transition duration-500 ease-in-out'
                      : ' text-sm hidden absolute top-6 left-4 transition duration-500 ease-in-out'
                  }
                >
                  <li className="py-2">Notebook</li>
                  <li className="py-2">Phone</li>
                  <li className="py-2">PC</li>
                  <li className="py-2">Accesories</li>
                </div>
              </ul>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <div className="flex items-center justify-center gap-10 mt-10">
              <form className="flex justify-end items-center relative">
                <input
                  type="text"
                  placeholder="Search product"
                  className="rounded-lg  border-2 py-1 px-8 placeholder-gray-500 bg-[#EDE9E8] outline-none"
                />
                <div className="absolute right-2 cursor-pointer">
                  <AiOutlineSearch size={24} />
                </div>
              </form>
              <div className="flex">
                <div className="flex justify-end gap-10 mr-4 text-[#EDE9E8]">
                  <BiUser size={24} />
                  <BsFillBasketFill size={24} />
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
