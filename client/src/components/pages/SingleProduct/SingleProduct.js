import { Breadcrumbs, Rating, Typography } from '@mui/material';
import phone from './phone1.jpeg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SingleProduct = () => {
  const [value, setValue] = useState(4);
  return (
    <div className="w-full mt-28 m-auto">
      <div className="flex max-w-[1200px] flex-col m-auto justify-center items-center">
        <div className=" self-start">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Electronics
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Phones
            </Link>
            <Typography color="text.primary">Iphone 12 Pro</Typography>
          </Breadcrumbs>
        </div>
        <div className="flex w-full gap-14 mt-8">
          <div className="flex  ">
            <img
              src={phone}
              alt="phone"
              className="object-cover"
              style={{ width: 600, height: 600 }}
            />
            <div></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-[30px] uppercase tracking-wider">
                Iphone 12 Pro{' '}
              </h1>
              <p className="text-sm text-gray-600 ">
                Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                lorem ipsum{' '}
              </p>
              <div className="flex items-center">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <p className="text-m text-gray-600">(133)</p>
              </div>
            </div>
            <span className="bg-gray-300 w-full h-[2px]"></span>
            <div>
              <h1 className="text-[24px] tracking-wide">Price: 300$</h1>
            </div>
            <span className="bg-gray-300 w-full h-[2px]"></span>
            <div className="flex flex-col gap-6">
              <h3 className="text-[20px]">Choose color</h3>
              <div className="flex items-center  gap-8">
                 <span className="  bg-lime-800 rounded-full w-10 h-10"> </span>
                 <span className="  bg-red-700 rounded-full w-10 h-10"> </span>
                 <span className=" bg-yellow-500 rounded-full w-10 h-10"> </span>
                 <span className="  bg-sky-700 rounded-full w-10 h-10"> </span>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
