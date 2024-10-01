/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CongratsModal from '../../reUsableComponents/CongratsModal'

const CongratsModalUserForgotPassword = ({ isOpen, handleCloseModal }) => {
    const buttonConfig = {
        label: "Go Back",
        type: "button",
        btnWidth: "50%", // Dynamic button width
        btnHeight: "50px", // Dynamic button height
      };
      
      const modalConfig = {
        title: 'Congrats',
        message: 'Your profile has been successfully added',
        img: ""
      }
  return (
    <div>
      <CongratsModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      title={modalConfig.title}
      message={modalConfig.message}
      buttonConfig={buttonConfig}
      img={modalConfig.img}
      />
    </div>
  )
}

export default CongratsModalUserForgotPassword
