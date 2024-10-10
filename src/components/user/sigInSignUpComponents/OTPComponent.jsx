/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import ButtonComponent from "../../reUsableComponents/ButtonComponent"; // Adjust the import path as needed
import ResendOtpComponent from "./ResendOtpComponent";

const OTPComponent = ({ handleOnSubmit }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    // Function to handle OTP input change
    const handleInputChange = (value, index) => {
        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input field when input is entered
            if (value !== "" && index < 3) {
                inputRefs.current[index + 1].focus();
            }

            // Move to the previous input field when cleared
            if (value === "" && index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.every((val) => val !== "")) {
            const otpValue = otp.join("");
            handleOnSubmit(otpValue);
            console.log("OTP submitted:", otpValue);
        } else {
            console.log("Please fill all OTP fields.");
        }
    };

    return (
        <div className="bg-light-gray p-4 max-w-xl w-full  md:max-w-lg sm:h-full lg:max-w-xl lg:p-0 xl:max-w-lg xl:p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-light-gray shadow-lg p-4 max-w-xl w-full md:max-w-sm sm:h-full lg:max-w-sm lg:p-0 xl:max-w-sm xl:p-4"
            >
                <div className="flex justify-center space-x-3 mb-6">
                    {otp.map((_, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="number"
                            maxLength="1"
                            className="w-12 h-12 text-center text-dark-gray text-xl bg-medium-gray rounded-md"
                            value={otp[index]}
                            onChange={(e) => handleInputChange(e.target.value, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            required
                            onKeyDown={(e) => {
                                if (e.key === "e" || e.key === "-" || e.key === "+") {
                                    e.preventDefault();
                                }
                            }} // Prevents non-numeric characters like "e" and negative/positive signs
                        />
                    ))}
                </div>

                <ResendOtpComponent />

                <div className="flex justify-center mb-4">
                    <ButtonComponent
                        label="Submit"
                        type="submit"
                        btnWidth= 'w-3/4'
                        btnHeight= '46px'
                    />
                </div>
            </form>
        </div>
    );
};

export default OTPComponent;
