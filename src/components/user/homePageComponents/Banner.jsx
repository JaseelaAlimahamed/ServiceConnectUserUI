import React from 'react'
import Slider from "react-slick";


const Banner = ({ discount, title, description, buttonText }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <div className="relative bg-medium-dark-gray  text-white p-6 md:p-10  rounded-3xl shadow-lg h-96 w-full lg:w-3/5 sm:w-96  mx-auto">
      
     <img src='./Path 3.svg' className='absolute w-72 top-0 left-0 z-0' />
      <img src='./Path 2.svg' className='absolute bottom-0 right-0 z-0'/>
      <div className="relative z-10 flex  md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold">{discount}</h2>
          <h3 className="text-xl md:text-3xl mt-2">{title}</h3>
          <p className="text-sm md:text-lg mt-2">{description}</p>
        </div>
        <button className=" text-white py-2 px-4 bg-medium-dark-gray rounded hover:bg-pink-600 transition duration-300 z-10">
        {buttonText}
        </button>
      </div>
     
      <div className="flex justify-center space-x-2  z-10">
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
      </div>
    </div>

  )
}


export default Banner