import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import OTPComponent from "../../components/user/sigInSignUpComponents/OTPComponent";
import ModalComponent from "../../components/reUsableComponents/ModalComponent"; 
import AllowLocationComponent from "../../components/user/sigInSignUpComponents/locationComponents/AllowLocationComponent";
import { verifyOTP } from "../../services/UserLoginApis/register";

const OTPPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

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


    const handleCloseModal = () => {
        setIsModalOpen(false);
        localStorage.setItem('token',"dfsgtrfgh");
        navigate("/fill-your-profile");
    };

    return (
        <div>
        
            <div className="min-h-screen bg-light-gray flex items-center justify-center">

                {/* OTPComponent handles the OTP submission */}
                <OTPComponent handleOnSubmit={handleOnSubmit} />

                {/* Modal that opens after OTP submission */}
                {isModalOpen && (
                    <ModalComponent
                        isOpen={isModalOpen}
                        onClose={handleCloseModal} // Update onClose to use the new function
                        width="w-fit"
                        height="h-fit"
                    >
                        {/* AllowLocationComponent is responsible for location access */}
                        <AllowLocationComponent />
                    </ModalComponent>
                )}
            </div>
        </div>
    );
};

export default OTPPage;
