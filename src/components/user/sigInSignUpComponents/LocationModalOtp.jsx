/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import LocationModal from "../../reUsableComponents/LocationModal";

const LocationModalOtp = ({ isOpen, handleCloseModal }) => {
  const buttonConfig = {
    label: "Go Back",
    type: "button",
    btnWidth: "100%", // Dynamic button width
    btnHeight: "50px", // Dynamic button height
  };
  const modalConfig = {
    title: "Allow Location",
  };
  return (
    <div>
      <LocationModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        title={modalConfig.title}
        buttonConfig={buttonConfig}
      />
    </div>
  );
};

export default LocationModalOtp;
