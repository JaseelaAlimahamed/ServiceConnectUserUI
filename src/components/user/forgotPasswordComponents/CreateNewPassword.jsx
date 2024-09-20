import React from "react";
import HeaderComponent from "./HeaderComponent";
import FormComponent from "../../reUsableComponents/FormComponent";

const CreateNewPassword = () => {


  const fieldConfigs = [
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
     
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      required: true,
     
    },
  ];
  const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "99%",
    btnHeight: "46px",
  };
  const inputConfig = {
    inputWidth: "100%",
    inputHeight: "46px",
  };

  const apiEndpoint = async (values) => {
    console.log('Form submitted with values:', values);
};

  return (
    <div>
     
      <div className="min-h-screen bg-light-gray flex flex-col items-center justify-between">
        <div className="w-full">
        <HeaderComponent/>
        </div>
        <div className="bg-light-gray mb-24 shadow-lg p-4 max-w-xl w-full  md:max-w-lg sm:h-full lg:max-w-xl lg:p-0 xl:max-w-lg xl:p-4">
          <div className="flex flex-col bg-light-gray p-0 sm:p-8 rounded-lg  w-full mt-8">
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

