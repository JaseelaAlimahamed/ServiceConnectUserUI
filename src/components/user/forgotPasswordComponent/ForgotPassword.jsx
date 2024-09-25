import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import ButtonComponent from "../../reUsableComponents/ButtonComponent";
import { SlEnvolope } from "react-icons/sl";
import HeaderComponent from "./HeaderComponen";

const ForgotPassword = () => {

  const [option, setoption] = useState('');
  const [email,setEmail] = useState('defaultemail@example.com')
  const [phone,setPhone] = useState('9556060964')
  const navigate = useNavigate('');

  console.log(option)

  const buttonContinue = () => {
    if (option === "email") {
       console.log('OTP sent to email',email)
    } 
    else  (option === "sms") 
     {
       console.log("OTP sent to phone number",phone)
    } 
    navigate('/verifypassword')
  };

  return (
    <div className=" bg-light-gray min-h-screen flex flex-col justify-between items-center">
      <div className="w-full">
       <HeaderComponent/>
      </div>
      <div className="bg-light-gray  mb-24 flex flex-col justify-center items-center">
        <div className="bg-light-gray shadow-lg p-10 w-full lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg">
          <p className="text-sm text-center mb-6">
            Enter your registered email or phone number to recieve a OTP to reset your password
          </p>

          {/* Email Option */}
          <div
            className='bg-medium-gray text-white flex items-center justify-between p-4 mb-4 rounded-lg cursor-pointer'
            onClick={() => setoption("email")}
          > 
          <div className="flex items-center gap-2">
              <div  
              // className="border rounded-full w-8 h-8 flex items-center justify-center" 
              >
                <SlEnvolope/>
              </div>
              <div>
                <p className="text-sm">Email</p>
              </div>
            </div>
          </div>

          {/* SMS Option */}
          <div
            className='bg-medium-gray text-white flex items-center justify-between p-4 mb-4 rounded-lg cursor-pointer'
            onClick={() => setoption("sms")}
          >
            <div className="flex items-center gap-2">

              <div 
              // className="border rounded-full w-8 h-8 flex items-center justify-center"
              >
                <SlEnvolope/>
              </div>
              <div>
                <p className="text-sm">Phone Number</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <ButtonComponent  
              btnWidth="100%"
              label="Continue" 
              onClick={buttonContinue} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;