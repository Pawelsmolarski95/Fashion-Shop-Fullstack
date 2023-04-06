const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[#f3f4f6] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-900">
               Sign up and we’ll keep you updated with the latest
              collections, exclusive offers and promotions. 
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                {/* <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
              </div>
              <dt className="mt-4 font-semibold text-gray-900">
                Weekly articles
              </dt>
              <dd className="mt-2 leading-7 text-gray-600">
              Stay up to date and don't miss our weekly articles about the world of fashion.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                {/* <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Proven news</dt>
              <dd className="mt-2 leading-7 text-gray-600">
              With our newsletter, he will know everything that is happening in the latest fashion trends.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Newsletter;
