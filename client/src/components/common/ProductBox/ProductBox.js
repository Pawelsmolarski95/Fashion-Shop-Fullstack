import Rating from '@mui/material/Rating';
import phone from './phone1.jpeg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductBox = () => {
  const [value, setValue] = useState(3);
  return (
    <div className="max-w-[250px] h-auto">
      <img
        src={phone}
        style={{ width: 250, height: 250 }}
        alt="phone"
        className="object-fit rounded-lg"
      />
      <div className="flex justify-between">
        <h2 className="text-lg font-bold tracking-widest">Iphone 12 Pro </h2>
        <h2>100$</h2>
      </div>
      <div className="my-4 ">
        <p className="text-sm">
          Attach one to your keys. Put another in your backpack. If they’re
          misplaced, just use the Find My app.
        </p>
      </div>
      <div className="flex my-3">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
      <div className="flex justify-between">
        <Link to="/product/:id">
          <button
           className=" border-gray-500 border-2 text-[12px]  cursor-pointer uppercase rounded-full w-[100px] h-[35px] tracking-wide text-gray-500 "
          >
            See more
          </button>
        </Link>

        <button className="bg-[#5271FF] text-[12px] border-none cursor-pointer uppercase rounded-full w-[100px] h-[35px] tracking-wide text-[#EDE9E8]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
