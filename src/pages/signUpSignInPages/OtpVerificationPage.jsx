/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import OTPComponent from '../../components/reUsableComponents/signInSignUpReusableComponents/OtpComponent'
import LocationModalOtp from '../../components/user/sigInSignUpComponents/LocationModalOtp'

function OtpVerificationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    // console.log("Modal open state changed:", isModalOpen);
  }, [isModalOpen]);

  const handleOtpSubmit = async (otp) => {
    try {
      // Simulate an API call with form data
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, data: otp }), 1000);
      });

      console.log("Response:", response);

      if (response.success) {
        setIsModalOpen(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
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
        <OTPComponent
        handleOnSubmit={handleOtpSubmit}
        />
        {isModalOpen && <LocationModalOtp
        isOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        />}
    </div>
  )
}

export default OtpVerificationPage