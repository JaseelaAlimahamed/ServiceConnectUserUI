/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Modal from 'react-modal';
import ButtonComponent from '../ButtonComponent';

Modal.setAppElement('#root');

const LocationModal = ({
  title,
  description,
  buttonConfig,
  isOpen, // Controls the modal visibility
  onRequestClose, // To close the modal
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="modal-overlay fixed inset-0 z-40 flex items-center justify-center backdrop-blur-lg bg-black-500/60"
    >
      <div className='border-none rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 text-center flex flex-col items-center justify-center space-y-4 max-w-md mx-auto w-full'>
        <h2 className='text-lg font-bold font-heading text-#1D1F2A sm:text-xl md:text-2xl'>{title}</h2>
        <p className='mt-2 text-#1E1E1E font-default sm:text-lg md:text-xl'>{description}</p>
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

export default LocationModal;

