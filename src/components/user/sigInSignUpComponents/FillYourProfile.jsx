import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import FormComponent from "../../reUsableComponents/FormComponent";
import ModalComponent from "../../reUsableComponents/ModalComponent";
import ReusableModal from "../../reUsableComponents/ReModal";

import fillProfile from "../../../services/userFillProfile/fillProfile";
import images from "../../../assets/image.png";

const FillYourProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({}); // State to hold form data

  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  // console.log(token)

  // Fetch profile data on component load
  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     if (!token) {
  //       console.error("Token is missing");
  //       return;
  //     }
  //     try {
  //       const profileData = await fillProfile(token);
  //       setFormData(profileData);
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //       setErrorMessage("Failed to load profile data.");
  //     }
  //   };

  //   fetchProfileData();
  // }, [token]);

  const getApiEndpoint = async (submittedData) => {
    try {
      if (!token) {
        console.error("Token is missing");
        return;
      }
      setIsLoading(true);
      const response = await fillProfile(token, submittedData, setIsModalOpen , navigate);
      console.log("API Response:", response);
     
        setIsModalOpen(true);
        setTimeout(() => {
          navigate("/home");
        }, 5000);
      
    } catch (error) {
      console.error("Error handling form data:", error);
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const headingtext = "Fill Your Profile";
  const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "w-full",
    btnHeight: "50px",
    hasIcon: true,
  };

  const inputConfig = {
    inputWidth: "100%",
    inputHeight: "48px",
  };

  const fieldConfigs = [
    { name: "full_name", label: "Full Name", placeholder: "Enter your full name", type: "text", required: true },
    { name: "address", label: "Address", placeholder: "Enter your address", type: "text", required: true },
    { name: "date_of_birth", label: "Date of Birth", placeholder: "Enter your date of birth", type: "date", required: true },
    { name: "email", label: "Email", placeholder: "Enter your email", type: "email", required: true },
    { name: "phone_number", label: "Mobile", placeholder: "Enter your mobile number", type: "tel", required: true },
    { name: "gender", label: "Gender", placeholder: "Enter your gender", type: "text", required: false },
    { name: "housename", label: "House Name", placeholder: "Enter your house name", type: "text", required: true },
    { name: "landmark", label: "Landmark", placeholder: "Enter landmark", type: "text", required: true },
    { name: "pin_code", label: "Pincode", placeholder: "Enter your pincode", type: "text", required: true },
    { name: "district", label: "District", placeholder: "Enter your district", type: "text", required: true },
    { name: "state", label: "State", placeholder: "Enter your state", type: "text", required: true },
  ];

  return (
    <div className="min-h-screen bg-dark-gray flex items-center justify-center">
      <FormComponent
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        inputConfig={inputConfig}
        apiEndpoint={getApiEndpoint}
        heading={headingtext}
        profile={true}
        initialValues={formData} // Pass initial form data to pre-fill form fields
      />

      {isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          width="400px"
          height="h-fit"
        >
          <ReusableModal
            isLoading={isLoading}
            imageSrc={images}
            heading="Congratulations!"
            contentLines={["Your account is ready to use.", errorMessage]}
            redirectMessage="You will be redirected to the Home Page in a few seconds."
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default FillYourProfile;
