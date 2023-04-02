import banner from './banner.jpeg';

const Banner = () => {
  return (
    <div className=" m-w-[1600px] h-[400px] m-auto text-center object-cover mt-12 relative ">
      <img src={banner} alt="banner" style={{   height: 400 }} className='object-cover w-full brightness-50 '/>
      <h2 className='absolute top-[20%] lg:top-[40%] left-[50%] translate-x-[-50%] uppercase tracking-widest text-[28px] text-[#EDE9E8] font-semibold'>Grab Up to 50% Off On Selected Headphone</h2>
        <button className='bg-[#5271FF] border-none cursor-pointer  absolute top-[70%] left-[50%] translate-x-[-50%] uppercase rounded-full w-[150px] h-[50px] tracking-widest text-[#EDE9E8]'>
            Buy now
        </button>
    </div>
  );
};

export default Banner;
