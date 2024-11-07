import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormComponent from "../../reUsableComponents/FormComponent";
import HeaderComponent from "./HeaderComponent";
import { resetPassword } from "../../../services/api/resetPasswordAPI";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { uidb64, token } = useParams();
  
  const apiEndpoint = async (values) => {
    setIsLoading(true);
    try {
      if (values.new_password !== values.confirm_password) {
        throw new Error("Passwords do not match");
      }

      const response = await resetPassword(uidb64, token, values.new_password, values.confirm_password);

      if (response.status === 200) {
        alert("Password reset successful!");
        navigate("/sign-in");
      }
    } catch (error) {
      let errorMessage = error.message || "Failed to reset password. Please try again.";
      alert(errorMessage);
      console.error("Password reset error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const fieldConfigs = [
    {
      name: "new_password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
    {
      name: "confirm_password",
      type: "password",
      placeholder: "Confirm password",
      required: true,
    },
  ];

  const buttonConfig = {
    label: isLoading ? "Processing..." : "Continue",
    type: "submit",
    btnWidth: "99%",
    btnHeight: "46px",
    disabled: isLoading,
  };

  const inputConfig = {
    inputWidth: "100%",
    inputHeight: "46px",
  };

  if (!uidb64 || !token) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col items-center justify-between">
        <div className="w-full">
          <HeaderComponent />
        </div>
        <div className="bg-light-gray mb-24 shadow-lg p-4 max-w-xl w-full md:max-w-lg sm:h-full lg:max-w-xl lg:p-0 xl:max-w-lg xl:p-4">
          <div className="flex flex-col bg-light-gray p-0 sm:p-8 rounded-lg w-full mt-8">
            <h4 className="font-input font-bold text-dark-gray px-6 text-sm lg:text-sm md:text-sm sm:text-lg my-1 text-left">
              Invalid Password Reset Link
            </h4>
            <p className="text-dark-gray px-6 text-sm">
              Please request a new password reset link.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-light-gray flex flex-col items-center justify-between">
        <div className="w-full">
          <HeaderComponent />
        </div>
        <div className="bg-light-gray mb-24 shadow-lg p-4 max-w-xl w-full md:max-w-lg sm:h-full lg:max-w-xl lg:p-0 xl:max-w-lg xl:p-4">
          <div className="flex flex-col bg-light-gray p-0 sm:p-8 rounded-lg w-full mt-8">
            <h4 className="font-input font-bold text-dark-gray px-6 text-sm lg:text-sm md:text-sm sm:text-lg my-1 text-left">
              Create Your New Password
            </h4>

            <div className="flex justify-center mt-0">
              <FormComponent
                fieldConfigs={fieldConfigs}
                buttonConfig={buttonConfig}
                inputConfig={inputConfig}
                apiEndpoint={apiEndpoint}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
