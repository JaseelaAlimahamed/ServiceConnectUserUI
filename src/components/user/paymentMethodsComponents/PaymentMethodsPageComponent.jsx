/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PaymentMethodsComponents from './PaymentMethodsComponents'
import CongratsModal from '../../reUsableComponents/CongratsModal'
import { IoCloseOutline } from "react-icons/io5";

const PaymentMethodsPageComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const buttonConfig = {
      label: "E - Receipt",
      type: "button",
      btnWidth: "50%", // Dynamic button width
      btnHeight: "50px", // Dynamic button height
    };
    
    const modalConfig = {
      title: 'Congratulations',
      message: 'Your Payment is successfully. Purchase a New Course',
      img: "https://t3.ftcdn.net/jpg/00/98/85/78/360_F_98857800_xtq6QJtDQdDlvYR5VYh3U2FPij7kOgMC.jpg",
      link: "Watch the Course",
    }

    useEffect(() => {
        console.log("Modal open state changed:", isModalOpen)
    },[isModalOpen])

    const handleButtonClick = () => {
      setIsModalOpen(true);  // Open the congrats modal on button click
    };
    const handleCloseModal = () => {
      console.log("inside handleclose");
      setIsModalOpen(false);
      console.log("Modal state after closing:", isModalOpen);
    };
    console.log("Modal state:", isModalOpen);
  return (
    <div>
      <PaymentMethodsComponents
      handleButtonClick={handleButtonClick}
      />
      {isModalOpen && <CongratsModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      title={modalConfig.title}
      message={modalConfig.message}
      link={modalConfig.link}
      img={modalConfig.img}
      buttonConfig={buttonConfig}
      icon={<IoCloseOutline
      size={35}
      onClick={handleCloseModal}
      className='text-#1D1B20 cursor-pointer'
      />}
      />}

    </div>
  )
}

export default PaymentMethodsPageComponent
