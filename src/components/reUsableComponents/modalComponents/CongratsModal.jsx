/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CongratsModal.js
import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";

Modal.setAppElement("#root");

const CongratsModal = ({
  isOpen,
  onRequestClose,
  img,
  title,
  message,
  buttonConfig,
  link,
  icon,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="modal-content relative z-50 outline-none"
      overlayClassName="modal-overlay fixed inset-0 z-40 flex items-center justify-center backdrop-blur-lg bg-black-500/60"
    >
      <div className="bg-primary rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 text-center flex flex-col items-center justify-center space-y-4 max-w-sm sm:max-w-md mx-auto w-full">
        <div className="flex justify-items-end ">
        <div className=" mr-6">
          {img && (
            <img
              src={img}
              className="w-50 h-40 sm:w-40 sm:h-40 md:w-60 md:h-50 lg:w-80 lg:h-60"
            />
            
          )}
          </div>
          <div className="ml-6">{icon}</div>
        </div>
        <h2 className="text-lg font-bold font-default text-#202244 sm:text-xl md:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-center font-input text-#545454 sm:text-lg md:text-xl">
          {message}
        </p>
        <Link className="underline text-#167F71 font-default font-semibold text-[16px]">
          {link}
        </Link>
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
