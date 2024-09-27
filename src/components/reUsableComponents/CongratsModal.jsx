/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CongratsModal.js
import React from "react";
import Modal from "react-modal";
import ButtonComponent from "./ButtonComponent";

Modal.setAppElement("#root");

const CongratsModal = ({
  isOpen,
  onRequestClose,
  img,
  title,
  message,
  buttonConfig,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
       className="modal-content relative z-50 outline-none"
      overlayClassName="modal-overlay fixed inset-0 z-40 flex items-center justify-center backdrop-blur-lg bg-black-500/60"
    >
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 text-center flex flex-col items-center justify-center space-y-4 max-w-sm sm:max-w-md mx-auto w-full">
        {img && <img src={img}
        className="w-50 h-40 sm:w-40 sm:h-40 md:w-60 md:h-50 lg:w-80 lg:h-60"
        />}
        <h2 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">{title}</h2>
        <p className="mt-2 text-gray-600 sm:text-lg md:text-xl">{message}</p>
        <ButtonComponent
          label={buttonConfig.label}
          type={buttonConfig.type}
          btnWidth={buttonConfig.btnWidth}
          btnHeight={buttonConfig.btnHeight}
         onClick={onRequestClose}
        />
      </div>
    </Modal>
  );
};

export default CongratsModal;
