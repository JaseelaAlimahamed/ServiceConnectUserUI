import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPComponent from "../../components/reUsableComponents/signInSignUpReusableComponents/OtpComponent";
import ModalComponent from "../../components/reUsableComponents/ModalComponent";
import AllowLocationComponent from "../../components/user/sigInSignUpComponents/locationComponents/AllowLocationComponent";

const OTPPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle OTP submission
  const handleOnSubmit = async (otpValue) => {
    try {
      console.log("Received OTP:", otpValue);
      await verifyOTP(otpValue);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error during OTP submission:", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };

  // Dummy async function to simulate OTP verification
  const verifyOTP = async (otpValue) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otpValue === "1234") {
          resolve("OTP verified successfully");
        } else {
          reject("Invalid OTP");
        }
      }, 1000);
    });
  };

  // Function to handle modal close and navigation
  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("token", "dfsgtrfgh"); // Store token in localStorage
    navigate("/fill-your-profile"); // Redirect to the profile setup page
  };

  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center">
      {/* OTPComponent handles the OTP submission */}
      <OTPComponent handleOnSubmit={handleOnSubmit} />

      {/* Modal that opens after OTP submission */}
      {isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          width="w-fit"
          height="h-fit"
        >
          {/* AllowLocationComponent is responsible for location access */}
          <AllowLocationComponent />
        </ModalComponent>
      )}
    </div>
  );
};

export default OTPPage;
