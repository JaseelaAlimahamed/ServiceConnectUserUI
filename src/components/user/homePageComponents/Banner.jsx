import React, { useState } from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = ({banners}) => {
  const [currentSlide,setCurrentSlide]= useState(0)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index)
  };

  return (
    <Slider {...settings}>{
    banners.map((banner,Index)=>(

    
    <div className="relative bg-medium-black  text-white p-6 md:p-10  rounded-3xl shadow-lg h-96  lg:w-3/5 sm:w-96  mx-auto">
        {/* Background Shapes */}
        <svg
        width="300"
        height="257"
        viewBox="0 0 300 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='absolute   top-0 left-0 z-0'
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 64.5V20C0 8.95431 8.95431 0 20 0H156C156 0 130.5 39 117.5 32.5C104.5 26 100.914 13.0479 83 18.5C65.0858 23.9521 71.0279 46.6068 60 50C48.9721 53.3932 35 31.5 28 36C21 40.5 19.3524 68.5877 16 72C12.6476 75.4123 0 64.5 0 64.5Z"
          fill="#1D1F2A"
        />
      </svg>
     
      
      <svg
        width="527"
        height="157"
        viewBox="0 0 527 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='absolute bottom-0 right-0 z-0'
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.591797 157C0.591797 157 154.733 131.445 180.908 123.267C207.083 115.089 192.542 73.1779 221.625 73.1779C250.708 73.1779 324.871 115.089 369.95 115.089C415.029 115.089 436.842 20.0223 455.746 20.0223C474.65 20.0223 486.283 73.1779 503.733 73.1779C521.183 73.1779 527 0.600098 527 0.600098V137C527 148.046 518.046 157 507 157H0.591797Z"
          fill="#1D1F2A"
        />
      </svg>
       {/* Text Content */}
      <div className="relative z-10 flex mt-5   md:flex-row items-center justify-between">
        <div className="text-center md:text-left mt-2 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-5xl font-bold">{banner.discount}</h2>
          <h3 className="text-xl md:text-4xl mt-2">{banner.title}</h3>
          <p className="text-sm md:text-2xl mt-5">{banner.description}</p>
        </div>
        {/* Button (Optional if needed) */}
        <button className=" text-white py-3 px-4 bg-medium-black rounded hover:font-bold transition duration-300 z-10">
        {banner.buttonText}
        </button>
      </div>


      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              {banners.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    index === currentSlide ? 'bg-yellow-500' : 'bg-gray-500'
                  }`}
                ></div>
              ))}
            </div>
     
     
    </div>
))}


    </Slider>

)
}


export default Banner