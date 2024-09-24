/* eslint-disable no-unused-vars */
import React from 'react';
import FormComponent from '../../reUsableComponents/FormComponent';
import GoogleLoginButton from '../../reUsableComponents/signInSignUpReusableComponents/GoogleButtonComponent';

const SignUpUser = () => {

  const fieldConfigs = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      required: true,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm your password',
      required: true,
    },
  ];


  const buttonConfig = {
    label: 'Register',
    type: 'submit',
    btnWidth: '99%',
    btnHeight: '46px',
  };

  const inputConfig = {
    inputWidth: '100%',
    inputHeight: '46px',
  };


  const apiEndpoint = async (values) => {
    console.log('Form submitted with values:', values);

  }
  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center">
      <div className="bg-light-gray shadow-lg p-4 max-w-xl w-full  md:max-w-lg sm:h-full lg:max-w-xl lg:p-0 xl:max-w-lg xl:p-4">


        <div className="flex justify-center ">
          <div className="w-auto h-14 flex items-center justify-center">
            <img src="/Icon.svg" alt="Profile" className="mr-2" />
            <span className="font-bold  text-lg sm:text-xl lg:text-2xl text-font-default whitespace-nowrap">
              Service Connect
            </span>
          </div>
        </div>

        <div className="flex flex-col bg-light-gray p-0 sm:p-4 rounded-lg  w-full mt-8">
          <h2 className="font-default font-bold text-dark-gray text-xl sm:text-2xl mb-0 text-left">Getting Started.!</h2>


          <div className="flex justify-center mt-0">

            <FormComponent
              fieldConfigs={fieldConfigs}
              buttonConfig={buttonConfig}
              inputConfig={inputConfig}
              apiEndpoint={apiEndpoint}
            />

          </div>
          {/* <GoogleLoginButton /> */}

          <GoogleLoginButton />

        </div>
      </div>
    </div>


  );
};

export default SignUpUser;
