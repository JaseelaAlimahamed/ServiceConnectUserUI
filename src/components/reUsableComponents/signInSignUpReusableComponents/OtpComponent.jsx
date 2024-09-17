import React, { useState, useRef } from "react";
import ButtonComponent from "../ButtonComponent"; // Adjust the import path as needed
import ResendOtpComponent from "./ResendOtpComponent";

const OTPComponent = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleInputChange = (value, index) => {
        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto-focus next input field
            if (value !== "" && index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleBackspace = () => {
        // Find the index of the last non-empty field
        const lastFilledIndex = otp.findIndex(val => val === "");

        // Determine the index to clear and focus
        const indexToClear = lastFilledIndex === -1 ? otp.length - 1 : lastFilledIndex - 1;

        if (indexToClear >= 0) {
            // Clear the field at indexToClear
            const newOtp = [...otp];
            newOtp[indexToClear] = "";
            setOtp(newOtp);

            // Focus on the previous field if it exists and is not empty
            const prevIndex = indexToClear - 1;
            if (prevIndex >= 0) {
                inputRefs.current[prevIndex].focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.every(val => val !== "")) {
            console.log("OTP submitted:", otp.join(""));
            // Submit to the server here
        } else {
            console.log("Please fill all OTP fields.");
        }
    };

    const handleButtonClick = (number) => {
        const emptyIndex = otp.indexOf("");
        if (emptyIndex !== -1) {
            handleInputChange(String(number), emptyIndex);
        }
    };

    return (
        <div className="min-h-screen bg-light-gray flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-light-gray shadow-lg p-4 max-w-xl w-full md:max-w-sm sm:h-full lg:max-w-sm lg:p-0 xl:max-w-sm xl:p-4"
            >
                <div className="flex justify-center space-x-3 mb-6">
                    {otp.map((_, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-center text-dark-gray text-xl bg-medium-gray rounded-md"
                            value={otp[index]}
                            onChange={(e) => handleInputChange(e.target.value, index)}
                            ref={el => inputRefs.current[index] = el}
                            required
                        />
                    ))}
                </div>
                
                <ResendOtpComponent/>

                <div className="flex justify-center  mb-4">

                    <ButtonComponent
                        label="Submit"
                        type="submit"
                        btnWidth="75%"
                        btnHeight="50px"
                    />
                </div>
             
                <div className="grid grid-cols-3 gap-0 mb-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                        <button
                            key={number}
                            type="button"
                            className="bg-light-gray px-2 py-2 text-xl hover:border-dark-gray font-semibold rounded-md"
                            onClick={() => handleButtonClick(number)}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        type="button"
                        className="bg-light-gray py-2 text-xl hover:border-dark-gray font-semibold rounded-md"
                        onClick={() => handleButtonClick("*")}
                    >
                        *
                    </button>
                    <button
                        type="button"
                        className="bg-light-gray py-2 text-xl hover:border-dark-gray font-semibold rounded-md"
                        onClick={() => handleButtonClick(0)}
                    >
                        0
                    </button>
                    <button
                        type="button"
                        className="bg-light-gray py-2 text-xl hover:border-dark-gray font-semibold rounded-md"
                        onClick={handleBackspace}
                    >
                        &larr;
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OTPComponent;
