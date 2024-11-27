import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlEnvolope } from "react-icons/sl";
import HeaderComponent from "./HeaderComponent";
import FormComponent from "../../reUsableComponents/FormComponent";

const ForgotPassword = () => {
  const [option, setOption] = useState(''); // State for email or SMS selection
  const navigate = useNavigate();

  const handleContinue = (formData) => {
    if (option === "email") {
      console.log("OTP sent to email:", formData.email);
    } else if (option === "sms") {
      console.log("OTP sent to phone number:", formData.phone);
    }
    navigate ('/otp-forgot-password')
   
  };

  // Define field configurations for FormComponent
  const fieldConfigs = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
      label: "Email",
      icon: <SlEnvolope />,
      required: option === "email", // Required only if email is selected
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Enter your Phone Number",
      label: "Phone Number",
      icon: <SlEnvolope />,
      required: option === "sms", // Required only if SMS is selected
    },
  ];

  const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "100%",
    btnHeight: "50px",
  };

  const inputConfig = {
    inputWidth: "100%",
    inputHeight: "40px",
  };

  return (
    <div className="bg-light-gray min-h-screen flex flex-col justify-between items-center">
      <div className="w-full">
        <HeaderComponent />
      </div>

      <div className="bg-light-gray mb-24 flex flex-col justify-center items-center">
        <div className="bg-light-gray shadow-lg p-10 w-full lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg">
          <p className="text-sm text-center mb-6">
            Enter your registered email or phone number to receive an OTP to reset your password.
          </p>

          {/* Email Option */}
          <div
            className={`bg-medium-gray text-white flex items-center justify-between p-4 mb-4 rounded-lg cursor-pointer ${option === 'email' && 'border-2 border-dark-gray'}`}
            onClick={() => setOption("email")}
          >
            <div className="flex items-center gap-2">
              <SlEnvolope />
              <p>Email</p>
            </div>
          </div>

          {/* SMS Option */}
          <div
            className={`bg-medium-gray text-white flex items-center justify-between p-4 mb-4 rounded-lg cursor-pointer ${option === 'sms' && 'border-2 border-dark-gray'}`}
            onClick={() => setOption("sms")}
          >
            <div className="flex items-center gap-2">
              <SlEnvolope />
              <p>Phone Number</p>
            </div>
          </div>

          {/* FormComponent for Email or Phone */}
          {option && (
            <FormComponent
              fieldConfigs={fieldConfigs.filter((field) => field.required)} // Show only required field (email or phone)
              buttonConfig={buttonConfig}
              inputConfig={inputConfig}
              apiEndpoint={handleContinue}
              heading={null}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
