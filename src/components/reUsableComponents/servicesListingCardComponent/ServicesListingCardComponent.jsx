/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ServicesListingCardComponent = ({ serviceImg, serviceTitle, serviceDescription }) => {
  return (
    <div className='flex items-center bg-primary rounded-2xl shadow-lg w-[360px] h-[100px] sm:w-[460px] sm:h-[110px] md:w-[560px] md:h-[120px] lg:w-[660px] lg:h-[130px] xl:w-[760px] xl:h-[140px]'>
      <div className=''>
        <img src={serviceImg}
        className='rounded-2xl w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] xl:w-[140px] xl:h-[140px] 2xl:w-[150px] 2xl:h-[150px]'
        />
      </div>
      <div className='flex flex-col justify-center p-2'>
        <div>
            <h2 className='text-start text-#FF6B00 font-input font-bold text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]'>{serviceTitle}</h2>
        </div>
        <div>
            <h2 className='text-start text-dark-blue font-default font-semibold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>{serviceDescription}</h2>
        </div>
      </div>
    </div>
  )
}

export default ServicesListingCardComponent
