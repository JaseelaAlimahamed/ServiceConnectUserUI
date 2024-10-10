import React, { useEffect } from 'react';
import CongratsModal from "../../reUsableComponents/CongratsModal";
import congrats_user_icon from '../../../assets/congrats_user_icon.svg';

function CongratsModalUser({ isOpen, onClose }) {
  const buttonConfig = {
    label: "Go Back",
    type: "button",
    btnWidth: "50%",
    btnHeight: "50px",
    onClick: onClose // Use the onClose function to trigger modal close and redirect
  };

  const modalConfig = {
    title: 'Congrats',
    message: 'Your profile has been successfully added',
    img: congrats_user_icon,
  };

  // Log the modal open/close state
  useEffect(() => {
    console.log(`Modal is ${isOpen ? "open" : "closed"}`);
  }, [isOpen]);

  return (
    <div>
      <CongratsModal
        isOpen={isOpen} // Pass the isOpen state to control visibility
        onRequestClose={onClose}  // Close the modal when requested
        title={modalConfig.title}
        message={modalConfig.message}
        img={modalConfig.img}
        buttonConfig={buttonConfig}
      />
    </div>
  );
}

export default CongratsModalUser;
