/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import CongratsModal from "../../reUsableComponents/modalComponents/CongratsModal";
import PaymentMethodsComponents from "./PaymentMethodsComponents";

const PaymentMethodsWithModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const buttonConfig = {
    label: "E - Receipt",
    type: "button",
    btnWidth: "50%", // Dynamic button width
    btnHeight: "50px", // Dynamic button height
  };

  const modalConfig = {
    title: "Congratulations",
    message: "Your Payment is successfully. Purchase a New Course",
    img: "https://t3.ftcdn.net/jpg/00/98/85/78/360_F_98857800_xtq6QJtDQdDlvYR5VYh3U2FPij7kOgMC.jpg",
    link: "Watch the Course",
  };

  useEffect(() => {
    console.log("Modal open state changed:", isModalOpen);
  }, [isModalOpen]);

  const handleButtonClick = () => {
    if (selectedPaymentMethod) { // Only open modal if a payment method is selected
      setIsModalOpen(true);
    } else {
      alert('Please select a payment method before proceeding.'); // Alert the user
    }
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
      setSelectedPaymentMethod={setSelectedPaymentMethod}
      />
      
      {isModalOpen && (
        <CongratsModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          title={modalConfig.title}
          message={modalConfig.message}
          link={modalConfig.link}
          img={modalConfig.img}
          buttonConfig={buttonConfig}
          icon={
            <IoCloseOutline
              size={20}
              onClick={handleCloseModal}
              className="text-#1D1B20 cursor-pointer"
            />
          }
        />
      )}
    </div>
  );
};

export default PaymentMethodsWithModalComponent;
