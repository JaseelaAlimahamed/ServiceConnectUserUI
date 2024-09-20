/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CongratsModalUser from "../../components/user/sigInSignUpComponents/CongratsModalUser";
import FillYourProfile from "../../components/user/sigInSignUpComponents/FillYourProfile";

function AddProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    // console.log("Modal open state changed:", isModalOpen);
  }, [isModalOpen]);

  const handleFormSubmit = async (formData) => {
    try {
      // Simulate an API call with form data
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, data: formData }), 1000);
      });

      console.log("Response:", response);

      if (response.success) {
        setIsModalOpen(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const handleCloseModal = () => {
    console.log("inside handleclose");
    setIsModalOpen(false);
    console.log("Modal state after closing:", isModalOpen);
  };
  console.log("Modal state:", isModalOpen);

  return (
    <div>
      <FillYourProfile handleSubmit={handleFormSubmit} />

      {isModalOpen && (
        <CongratsModalUser
          isOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default AddProfilePage;
