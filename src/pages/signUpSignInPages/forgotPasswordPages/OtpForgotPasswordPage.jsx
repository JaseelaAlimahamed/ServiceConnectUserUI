import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 


import OTPComponent from "../../../components/user/sigInSignUpComponents/OTPComponent";
import ModalComponent from "../../../components/reUsableComponents/ModalComponent"; 
import ReusableModal from "../../../components/reUsableComponents/ReModal";
import image from '../../../assets/image.png'



const OtpForgotPasswordPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle OTP submission
  const handleOnSubmit = async (otpValue) => {
    try {
      console.log("Received OTP:", otpValue);
      setIsLoading(true); // Set loading state
      await verifyOTP(otpValue); // Simulate OTP verification
    } catch (error) {
      console.error("Error during OTP submission:", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };

  // Dummy async function to simulate OTP verification instead of api call
  const verifyOTP = async (otpValue) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        if (otpValue === "1234") {
          setIsModalOpen(true); // Show modal if OTP is correct
          resolve("OTP verified successfully");

          // Redirect to services page after a delay
          setTimeout(() => {
            navigate("/home");
          }, 5000);
        } else {
          reject("Invalid OTP");
        }
      }, 2000);
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('token', "dfsgtrfgh");
    navigate("/fill-your-profile");
  };

  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center">
      {/* OTPComponent handles the OTP submission */}
      <OTPComponent handleOnSubmit={handleOnSubmit} />

      {isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={handleCloseModal} // Close modal
          width="400px"
          height="h-fit"
        >
          <ReusableModal
            isLoading={isLoading}
            imageSrc={image}
            heading="Congratulations!"
            contentLines={["Your Password is Updated"]}
            redirectMessage="You will be redirected to the Home Page in a few seconds."
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default OtpForgotPasswordPage;
