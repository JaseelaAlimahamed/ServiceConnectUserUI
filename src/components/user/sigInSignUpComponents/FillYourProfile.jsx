<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate


import FormComponent from "../../reUsableComponents/FormComponent";
import ModalComponent from "../../reUsableComponents/ModalComponent";
import ReusableModal from "../../reUsableComponents/ReModal";

import images from "../../../assets/image.png"


const FillYourProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for the modal
  const [image, setImage] = useState(''); // State for the modal image
  const navigate = useNavigate(); // Initialize navigate for redirection


  // Simulate API call and handle form submission
  const getApiEndpoint = async (formData) => {
    try {
      console.log('Form Data:', formData);

      setIsLoading(true); // Start loading

      setTimeout(() => {
        setIsLoading(false); // Stop loading
        setIsModalOpen(true); // Open the ModalComponent

        // Navigate to homepage after 5 seconds
        setTimeout(() => {
          navigate("/home");
        }, 5000);
      }, 2000);

      return { success: true, data: formData };
    } catch (error) {
      console.error('Error handling form data:', error);
      return { success: false, error: error.message };
    }

  };

  const handleCloseModal = () => {
    console.log("Closing modal and redirecting to homepage...");
    setIsModalOpen(false); // Close the modal
    navigate('/'); // Redirect to the homepage
  };


  // useEffect to log modal open/close state
  useEffect(() => {
    if (isModalOpen) {
      console.log("Modal is now open");
    } else {
      console.log("Modal is now closed");
    }
  }, [isModalOpen]); // This will log whenever `isModalOpen` changes

  const headingtext = "Fill Your Profile";
  const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "w-full", // Dynamic button width
    btnHeight: "50px",
    hasIcon:true // Dynamic button height
  };

  const inputConfig = {
    inputWidth: "100%", // Dynamic input width
    inputHeight: "48px", // Dynamic input height

  };

  const fieldConfigs = [
    { name: "fullname", label: "Full Name", placeholder: "Enter your full name", type: "text", required: true },
    { name: "address", label: "Address", placeholder: "Enter your address", type: "text", required: true },
    { name: "dob", label: "Date of Birth", placeholder: "Enter your date of birth", type: "date", required: true },
    { name: "email", label: "Email", placeholder: "Enter your email", type: "email", required: true },
    { name: "mobile", label: "Mobile", placeholder: "Enter your mobile number", type: "tel", required: true },
    { name: "gender", label: "Gender", placeholder: "Enter your gender", type: "text", required: false },
    { name: "housename", label: "House Name", placeholder: "Enter your house name", type: "text", required: true },
    { name: "landmark", label: "Landmark", placeholder: "Enter landmark", type: "text", required: true },
    { name: "pincode", label: "Pincode", placeholder: "Enter your pincode", type: "text", required: true },
    { name: "district", label: "District", placeholder: "Enter your district", type: "text", required: true },
    { name: "state", label: "State", placeholder: "Enter your state", type: "text", required: true },
  ];

  return (
    <div className="min-h-screen bg-dark-gray flex items-center justify-center">
      <FormComponent
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        inputConfig={inputConfig}
        apiEndpoint={getApiEndpoint} // Call the API endpoint
       heading={headingtext}
        profile={true}
      />

      {isModalOpen && (
        <ModalComponent 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} // Close modal on button click
          width="400px" // Set desired width
          height="h-fit" // Set desired height
        >
          <ReusableModal
            isLoading={isLoading}
            imageSrc={images} // Pass the image source if needed
            heading="Congratulations!"
            contentLines={["Your account is ready to use."]}
            redirectMessage="You will be redirected to the Home Page in a few seconds."
          />
        </ModalComponent>
      )}
    </div>
  );
=======
import React from 'react';

import FormComponent from '../../reUsableComponents/FormComponent';

const getApiEndpoint = async (formData) => {


    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
// edit
        console.log('Form Data:', formData);
        return { success: true, data: formData };

    } catch (error) {
        console.error('Error handling form data:', error);
        return { success: false, error: error.message };
    }

};


const getApiEndpoints = async (formData) => {


    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
// delete
        console.log('Form Data:', formData);
        return { success: true, data: formData };

    } catch (error) {
        console.error('Error handling form data:', error);
        return { success: false, error: error.message };
    }

};
const profile =true
const headingtext = "Fill Your Profile"
const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "100%",  // Dynamic button width
    btnHeight: "50px",  // Dynamic button height
};

const inputConfig = {
    inputWidth: "100%",  // Dynamic input width
    inputHeight: "48px",  // Dynamic input height
};

const fieldConfigs = [
    { name: 'fullname', label: 'Full Name', placeholder: 'Enter your full name', type: 'text', required: true },
    { name: 'address', label: 'Address', placeholder: 'Enter your address', type: 'text', required: true },
    { name: 'dob', label: 'Date of Birth', placeholder: 'Enter your date of birth', type: 'date', required: true },
    { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true },
    { name: 'mobile', label: 'Mobile', placeholder: 'Enter your mobile number', type: 'tel', required: true },
    { name: 'gender', label: 'Gender', placeholder: 'Enter your gender', type: 'text', required: false },
    { name: 'housename', label: 'House Name', placeholder: 'Enter your house name', type: 'text', required: true },
    { name: 'landmark', label: 'Landmark', placeholder: 'Enter landmark', type: 'text', required: true },
    { name: 'pincode', label: 'Pincode', placeholder: 'Enter your pincode', type: 'text', required: true },
    { name: 'district', label: 'District', placeholder: 'Enter your district', type: 'text', required: true },
    { name: 'state', label: 'State', placeholder: 'Enter your state', type: 'text', required: true },
];

const FillYourProfile = () => {
    return (
        
<div className="min-h-screen bg-dark-gray  flex items-center justify-center">
            <FormComponent
                fieldConfigs={fieldConfigs}
                buttonConfig={buttonConfig}
                inputConfig={inputConfig}
                apiEndpoint={getApiEndpoint}
                getApiEndpoints ={getApiEndpoints}
                heading={headingtext}
                profile
            />

        </div>
    );
>>>>>>> main
};

export default FillYourProfile;
