import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Footer = () => {
  const [mode, setMode] = useState('auto');
  return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Clothes
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Shoes
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Accesories
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          FAQ
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <a
                        href="javascript:void(0)"
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Ab
                        </a>
                      </Link>
                    </li>

                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Changelog
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Terms of service
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-center">
                  <label
                    class="block text-gray-700 text-[16px] font-bold mb-2"
                    for="username"
                  >
                    Do you want to be updated with our news ?
                  </label>
                  <div className="relative">
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <a href="/">
                      <button className="absolute text-[34px] right-0 top-[50%] translate-y-[-50%] cursor-pointer">
                        <AiOutlineArrowRight style={{ color: '#4f46e5' }} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <Link href="javascript:void(0)">
            <a>LOGO</a>
          </Link>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            2023 Shop. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
