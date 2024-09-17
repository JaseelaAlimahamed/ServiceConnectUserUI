import React, { useState, useEffect } from "react";

const ResendOTPComponent = ({ onResend }) => {
  const [seconds, setSeconds] = useState(30);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // Start countdown
    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev === 1) {
          clearInterval(timer);
          setIsDisabled(false);
          return 30; // Reset countdown for next resend
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResend = () => {
    if (!isDisabled) {
      onResend(); // Call the resend function passed as a prop
      setIsDisabled(true);
      setSeconds(30); // Reset countdown
    }
  };

  return (
    <div className="flex pt-2 justify-center items-center space-x-2">
      <p className="text-dark-gray font-input text-sm mb-0">
        {isDisabled ? `Resend OTP in ${seconds}s` : "Didn't receive OTP?"}
      </p>
      <p
        onClick={handleResend}
        className={`cursor-pointer text-dark-gray font-input font-semibold text-sm ${
          isDisabled ? "opacity-50" : "hover:underline"
        }`}
      >
        Resend OTP
      </p>
    </div>
  );
};

export default ResendOTPComponent;
