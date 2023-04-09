import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://images.pexels.com/photos/4966995/pexels-photo-4966995.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={'/product/category/women'}>
                    <span className="absolute inset-0"></span>
                    Women
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  The perfect collection for her...
                </p>
              </div>

              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={'/product/category/men'}>
                    <span className="absolute inset-0"></span>
                    Men
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  The pretty clothes for his...
                </p>
              </div>

              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={'/product/category/accessories'}>
                    <span className="absolute inset-0"></span>
                    Accesories
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  Improve your style by adding a few extras...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
