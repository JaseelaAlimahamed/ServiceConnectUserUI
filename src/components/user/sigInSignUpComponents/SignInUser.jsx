import React from 'react';
import FormComponent from '../../reUsableComponents/FormComponent'; // Importing the reusable FormComponent
import GoogleLoginButton from '../../reUsableComponents/signInSignUpReusableComponents/GoogleButtonComponent';

const SignInUser = () => {
  // Define the configurations for the fields in the form
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
  ];
  const forgotPassword = "true"
  // Configuration for the button component
  const buttonConfig = {
    label: 'Sign In',
    type: 'submit',
    btnWidth: '99%',
    btnHeight: '46px',
  };

  // Input configuration (e.g., width, height)
  const inputConfig = {
    inputWidth: '100%',
    inputHeight: '46px',
  };

  // Simulating an API endpoint function for form submission
  const apiEndpoint = async (values) => {
    console.log('Form submitted with values:', values);
    // You can replace this with the actual API call
  };

  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center">
      <div className="bg-light-gray shadow-lg p-4 max-w-xl w-full  md:max-w-lg sm:h-full lg:max-w-xl lg:p-0 xl:max-w-lg xl:p-4">

        {/* Profile Icon */}
        <div className="flex justify-center ">
          <div className="w-auto h-14 flex items-center justify-center">
            <img src="/Icon.svg" alt="Profile" className="mr-2" />
            <span className="font-bold  text-lg sm:text-xl lg:text-2xl text-font-default whitespace-nowrap">
              Service Connect
            </span>
          </div>
        </div>

        <div className="flex flex-col bg-light-gray p-0 sm:p-8 rounded-lg  w-full mt-8">
          <h2 className="font-default font-bold text-dark-gray text-xl sm:text-2xl mb-4 text-left">Let's Sign In...!</h2>
          <h4 className="font-input text-dark-gray text-sm lg:text-sm md:text-sm sm:text-lg my-1 text-left">
            Login to Your Account to Continue your Courses
          </h4>

          <div className="flex justify-center mt-0">
            {/* Form Component (no heading inside) */}
            <FormComponent
              fieldConfigs={fieldConfigs}
              buttonConfig={buttonConfig}
              inputConfig={inputConfig}
              apiEndpoint={apiEndpoint}
              forgotPassword
            />

          </div>

          <GoogleLoginButton />

        </div>
      </div>
    </div>


  );
};

export default SignInUser;
