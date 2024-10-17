import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";

const securityOption = [
  { id: 1, label: "Remember Me" },
  { id: 2, label: "Biometric ID" },
  { id: 3, label: "Face ID" },
];
const SecurityComponent = () => {
      const [securityOptions, setSecurityOptions] = useState(
        Array(securityOption.length).fill(false));
      const [pinChange, setPinChange] = useState(false);
      const [passwordChange, setPasswordChange] = useState(false);
      const [googleAuthenticator,setGoogleAuthenticator] =useState(false)
      console.log(securityOptions)
      
      const handleToggle = (index) => {
        setSecurityOptions((currentState) => {
          const newState = [...currentState];
          newState[index] = !newState[index];
          return newState;
        });
      };

      const handleChangePin = () => {
        setPinChange(true);
        console.log("PIN changed");
      };
    
    
      const handleChangePassword = () => {
        setPasswordChange(true);
      
        console.log("Password changed");
      };

      const handleGoogleAuthenticator =()=>{
        setGoogleAuthenticator(true);
        console.log("opened google Authenticator")
      }
    
      return (
        <div className="bg-primary h-screen w-full px-4 sm:px-6 md:px-8 lg:px-16">
          {securityOption.map((option, index) => (
            <div
              key={index}
              className="bg-primary h-16 flex items-center justify-between 
              p-4 sm:p-6 mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg
              hover:outline-none focus:outline-none"
            >
              <h2 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium">
                {option.label}
              </h2>
              <button
                onClick={() => handleToggle(index)}
                className={`${
                  securityOptions[index] ? "bg-light-gray" : "bg-light-gray"
                } border-solid border-2 border-light-gray rounded-full w-12 h-7 md:w-14 md:h-8 lg:w-14 lg:h-8
                flex items-center transition duration-300 ease-in-out focus:outline-none hover:border-light-gray`}
              >
                <div
                  className={`transform ${
                    securityOptions[index] ? "translate-x-6" : "translate-x-0"
                  } bg-dark-gray w-5 h-5 md:w-6 md:h-6 rounded-full shadow-md transition duration-300 ease-in-out`}
                ></div>
              </button>
            </div>
          ))}
    
          <div
            className="bg-primary h-16 flex items-center justify-between 
            p-4 sm:p-6 mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg
            hover:outline-none focus:outline-none"
          >
            <h2 className="flex w-full items-center justify-between text-sm sm:text-md md:text-lg lg:text-xl font-medium"
            onClick={handleGoogleAuthenticator}
            >
              Google Authenticator
              <GoChevronRight className="w-6 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            </h2>
          </div>
    
          <div className="flex flex-col gap-6 items-center mt-80 w-full">
            <button className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] h-14 text-black rounded-full font-medium bg-primary border border-light-gray shadow-[0px_4px_4px_0px_#00000070] text-sm sm:text-md md:text-lg lg:text-xl"
            onClick={handleChangePin}
            >
              Change PIN
            </button>
            <button className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] h-14 text-white rounded-full font-medium bg-dark-gray shadow-[0px_4px_4px_0px_#00000070] text-sm sm:text-md md:text-lg lg:text-xl"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </div>
      );
    };

export default SecurityComponent
