// import Rating from '@mui/material/Rating';
// import phone from './phone1.jpeg';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

const ProductBox = () => {
  const [value, setValue] = useState(3);
  return (
    <a href="/product/:id" className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
    </a>
  );
};

export default ProductBox;
