import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlEnvolope } from "react-icons/sl";
import HeaderComponent from "./HeaderComponent";
import FormComponent from "../../reUsableComponents/FormComponent";
import { ForgotPasswordRequest } from "../../../services/api/forgotPasswordAPI";

const ForgotPassword = () => {
  const [option, setOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (formData) => {
    setIsLoading(true);
    try {
      const emailOrPhone = option === "email" ? formData.email : formData.phone;

      const response = await ForgotPasswordRequest(emailOrPhone);

      if (response) {
        localStorage.setItem("resetPasswordIdentifier", emailOrPhone);
        alert("OTP sent successfully!");
        navigate("/otp-forgot-password");
      }
    } catch (error) {
      let errorMessage = "Failed to send link. Please try again.";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;

        if (error.response.status === 404) {
          errorMessage = `No account found with this ${option === "email" ? "email" : "phone number"}`;
        }
      }
      alert(errorMessage);
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fieldConfigs = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
      label: "Email",
      icon: <SlEnvolope />,
      required: option === "email",
      validation: {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      },
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Enter your Phone Number",
      label: "Phone Number",
      icon: <SlEnvolope />,
      required: option === "sms",
      validation: {
        pattern: {
          value: /^\+[1-9]\d{1,14}$/,
          message: "Please enter phone number in international format (e.g., +918086512345)",
        },
      },
    },
  ];

  const buttonConfig = {
    label: isLoading ? "Sending..." : "Continue",
    type: "submit",
    btnWidth: "100%",
    btnHeight: "50px",
    disabled: isLoading,
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
            Enter your registered email or phone number to receive an OTP to reset
            your password.
          </p>

          {/* Email Option */}
          <div
            className={`bg-medium-gray text-white flex items-center justify-between p-4 mb-4 rounded-lg cursor-pointer ${
              option === "email" && "border-2 border-dark-gray"
            }`}
            onClick={() => setOption("email")}
          >
            <div className="flex items-center gap-2">
              <SlEnvolope />
              <p>Email</p>
            </div>
          </div>

          {/* SMS Option */}
          <div
            className={`bg-medium-gray text-white flex items-center justify-between p-4 mb-4 rounded-lg cursor-pointer ${
              option === "sms" && "border-2 border-dark-gray"
            }`}
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
              fieldConfigs={fieldConfigs.filter((field) => field.required)}
              buttonConfig={buttonConfig}
              inputConfig={inputConfig}
              apiEndpoint={handleForgotPassword}
              heading={null}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
