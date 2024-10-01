/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CongratsModal from '../../reUsableComponents/CongratsModal'
import congrats_forgot_password_icon from '../../../assets/congrats_forgot_password_icon.svg'

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
        img: congrats_forgot_password_icon
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
