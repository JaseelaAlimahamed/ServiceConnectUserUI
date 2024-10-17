/* eslint-disable no-unused-vars */
import React from 'react'
import { SlEarphones } from "react-icons/sl";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUsComponent = () => {
  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div
      onClick={() => handleCall('1234567890')}
      className='flex items-center justify-start pl-6 md:pl-6 lg:pl-8 xl:pl-10 gap-6 cursor-pointer rounded-2xl shadow-md w-[353px] md:w-[393px] lg:w-[433px] xl:w-[483px] h-[71px] bg-#FBFBFB'>
        <SlEarphones
        className='w-[23px] h-[24px]'
        />
        <div className='font-medium text-lg'>Customer Services</div>
      </div>
      <div
      onClick={() => handleClick('https://wa.me/2348145436447')}
      className='flex items-center justify-start pl-6 md:pl-6 lg:pl-8 xl:pl-10 gap-6 cursor-pointer rounded-2xl shadow-md w-[353px] md:w-[393px] lg:w-[433px] xl:w-[483px] h-[71px] bg-#FBFBFB'>
        <FaWhatsapp
        className='w-[23px] h-[24px]'
        />
        <div className='font-medium text-lg'>Whatsapp</div>
      </div>
      <div
      onClick={() => handleClick('https://www.facebook.com')}
      className='flex items-center justify-start pl-6 md:pl-6 lg:pl-8 xl:pl-10 gap-6 cursor-pointer rounded-2xl shadow-md w-[353px] md:w-[393px] lg:w-[433px] xl:w-[483px] h-[71px] bg-#FBFBFB'>
        <FaFacebook
        className='w-[23px] h-[24px]'
        />
        <div className='font-medium text-lg'>Facebook</div>
      </div>
      <div
      onClick={() => handleClick('https://twitter.com')}
      className='flex items-center justify-start pl-6 md:pl-6 lg:pl-8 xl:pl-10 gap-6 cursor-pointer rounded-2xl shadow-md w-[353px] md:w-[393px] lg:w-[433px] xl:w-[483px] h-[71px] bg-#FBFBFB'>
        <FaTwitter
        className='w-[23px] h-[24px]'
        />
        <div className='font-medium text-lg'>Twitter</div>
      </div>
      <div
      onClick={() => handleClick('https://www.instagram.com')}
      className='flex items-center justify-start pl-6 md:pl-6 lg:pl-8 xl:pl-10 gap-6 cursor-pointer rounded-2xl shadow-md w-[353px] md:w-[393px] lg:w-[433px] xl:w-[483px] h-[71px] bg-#FBFBFB'>
        <FaInstagram
        className='w-[23px] h-[24px]'
        />
        <div className='font-medium text-lg'>Instagram</div>
      </div>
    </div>
  )
}

export default ContactUsComponent
