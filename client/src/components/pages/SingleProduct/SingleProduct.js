import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from '../../../redux/cartSlice';
import { getProductById } from '../../../redux/productsSlice';
import { IMGS_URL } from '../../../config';
import Rating from '../../common/Ratings/Ratings';

const SingleProduct = () => {
  const { id } = useParams();

  const product = useSelector((state) => getProductById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (props) => {
    dispatch(addToCart(props));
    navigate('/shoppingcart');
  };
  return (
    <>
      {product && (
        <div className="bg-white">
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li>
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      Men
                    </a>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li className="text-sm">
                  <a
                    href="#"
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {product.name}
                  </a>
                </li>
              </ol>
            </nav>

            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="h-[700px] aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={`${IMGS_URL}/uploads/${product.image[0].fileName}`}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="h-[334px] aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    src={`${IMGS_URL}/uploads/${product.image[1].fileName}`}
                    alt="Model wearing plain black basic tee."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-[334px] aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    src={`${IMGS_URL}/uploads/${product.image[2].fileName}`}
                    alt="Model wearing plain gray basic tee."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  src={`${IMGS_URL}/uploads/${product.image[3].fileName}`}
                  alt="Model wearing plain white basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>

              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  ${product.price}
                </p>

                <Rating />

                <form className="mt-10">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a color</legend>
                      <div className="flex items-center space-x-3">
                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="White"
                            onChange={(e) => setColor(e.target.value)}
                            className="sr-only peer "
                            aria-labelledby="color-choice-0-label"
                          />
                          <span id="color-choice-0-label" className="sr-only">
                            {' '}
                            White{' '}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10 peer-checked:scale-150"
                          ></span>
                        </label>

                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Gray"
                            className="sr-only peer"
                            onChange={(e) => setColor(e.target.value)}
                            aria-labelledby="color-choice-1-label"
                          />
                          <span id="color-choice-1-label" className="sr-only">
                            {' '}
                            Gray{' '}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10  peer-checked:scale-150"
                          ></span>
                        </label>

                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Black"
                            className="sr-only peer"
                            onClick={(e) => setColor(e.target.value)}
                            aria-labelledby="color-choice-2-label"
                          />
                          <span id="color-choice-2-label" className="sr-only">
                            {' '}
                            Black{' '}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10  peer-checked:scale-150"
                          ></span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a size</legend>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 peer-checked:bg-gray-50  focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="XXS"
                            disabled={product.size !== 'XXS'}
                            onChange={(e) => setSize(e.target.value)}
                            className="sr-only peer"
                            aria-labelledby="size-choice-0-label"
                          />
                          <span id="size-choice-0-label">XXS</span>
                          {product.size !== 'XXS' ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200 peer-checked:bg-gray-50 "
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          )}
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line
                                x1="0"
                                y1="100"
                                x2="100"
                                y2="0"
                                vector-effect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        </label>

                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 peer-checked:bg-gray-50  focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="XS"
                            disabled={product.size !== 'XS'}
                            className="sr-only peer"
                            onChange={(e) => setSize(e.target.value)}
                            aria-labelledby="size-choice-1-label"
                          />
                          <span id="size-choice-1-label">XS</span>

                          {product.size !== 'XS' ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          )}
                        </label>

                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase peer-checked:bg-gray-50   hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="S"
                            disabled={product.size !== 'S'}
                            onChange={(e) => setSize(e.target.value)}
                            className="sr-only peer"
                            aria-labelledby="size-choice-2-label"
                          />
                          <span id="size-choice-2-label">S</span>

                          {product.size !== 'S' ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          )}
                        </label>

                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm peer-checked:bg-gray-50  font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="M"
                            disabled={product.size !== 'M'}
                            onChange={(e) => setSize(e.target.value)}
                            className="sr-only peer "
                            aria-labelledby="size-choice-3-label"
                          />
                          <span id="size-choice-3-label">M</span>

                          {product.size !== 'M' ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          )}
                        </label>

                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm peer-checked:bg-gray-50  font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="L"
                            disabled={product.size !== 'L'}
                            onChange={(e) => setSize(e.target.value)}
                            className="sr-only peer"
                            aria-labelledby="size-choice-4-label"
                          />
                          <span id="size-choice-4-label">L</span>

                          {product.size !== 'L' ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          )}
                        </label>

                        <label className="group  peer-checked:bg-gray-300 relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase   hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="XL"
                            disabled={product.size !== 'XL'}
                            onChange={(e) => setSize(e.target.value)}
                            className="sr-only peer"
                            aria-labelledby="size-choice-5-label"

                          />
                         
                          <span id="size-choice-5-label border-red-500  ">XL</span>
                          {product.size !== 'XL' ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200 "
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          )}
                        </label>

                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase peer-checked:bg-gray-50  hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="2XL"
                            disabled={product.size !== '2XL'}
                            onChange={(e) => setSize(e.target.value)}
                            className="sr-only peer"
                            aria-labelledby="size-choice-6-label"
                          />
                          <span id="size-choice-6-label">2XL</span>
                          {product.size !== '2XL' ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          )}
                        </label>

                        <label className="group relative flex items-center justify-center rounded-md border peer-checked:bg-gray-50  py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="3XL"
                            disabled={product.size !== '3XL'}
                            onChange={(e) => setSize(e.target.value)}
                            className="sr-only peer"
                            aria-labelledby="size-choice-7-label"
                          />
                          <span id="size-choice-7-label">3XL</span>

                          {product.size !== '3XL' ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          )}
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <label for="Quantity" class="sr-only">
                      {' '}
                      Quantity{' '}
                    </label>

                    <div className="flex items-center my-7 gap-1">
                      <button
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        -
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        value={quantity}
                        className="w-24 h-10 border-gray-200 rounded sm:text-sm text-center"
                      />

                      <button
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleSubmit({
                        id: product.id,
                        name: product.name,
                        quantity: quantity,
                        size: size,
                        price: product.price,
                        color: color,
                        image: product.image[0].fileName,
                      })
                    }
                    className=" flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </form>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      The Basic Tee 6-Pack allows you to fully express your
                      vibrant personality with three grayscale options. Feeling
                      adventurous? Put on a heather gray tee. Want to be a
                      trendsetter? Try our exclusive colorway:
                      &quot;Black&quot;. Need to add an extra pop of color to
                      your outfit? Our white tee has you covered.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          Hand cut and sewn locally
                        </span>
                      </li>

                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          Dyed with our proprietary colors
                        </span>
                      </li>

                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          Pre-washed &amp; pre-shrunk
                        </span>
                      </li>

                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          Ultra-soft 100% cotton
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">
                      The 6-Pack includes two black, two white, and two heather
                      gray Basic Tees. Sign up for our subscription service and
                      be the first to get new, exciting colors, like our
                      upcoming &quot;Charcoal Gray&quot; limited release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
