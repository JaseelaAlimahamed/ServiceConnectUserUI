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

    
    <div className="relative bg-medium-dark-gray  text-white p-6 md:p-10  rounded-3xl shadow-lg h-96  lg:w-3/5 sm:w-96  mx-auto">
        {/* Background Shapes */}
     <img src='./Path 3.svg' className='absolute w-80  top-0 left-0 z-0' />
      <img src='./Path 2.svg' className='absolute bottom-0 right-0 z-0'/>
       {/* Text Content */}
      <div className="relative z-10 flex mt-5   md:flex-row items-center justify-between">
        <div className="text-center md:text-left mt-2 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-5xl font-bold">{banner.discount}</h2>
          <h3 className="text-xl md:text-4xl mt-2">{banner.title}</h3>
          <p className="text-sm md:text-2xl mt-5">{banner.description}</p>
        </div>
        {/* Button (Optional if needed) */}
        <button className=" text-white py-3 px-4 bg-medium-dark-gray rounded hover:bg-pink-600 transition duration-300 z-10">
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