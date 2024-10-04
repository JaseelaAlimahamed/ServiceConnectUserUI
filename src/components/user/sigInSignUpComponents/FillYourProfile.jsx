
import React, { useEffect, useState } from "react";

import FormComponent from "../../reUsableComponents/FormComponent";
import CongratsModal from "../../reUsableComponents/modalComponents/CongratsModal";

const getApiEndpoint = async (formData) => {
  console.log("api endpoint called")
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // edit
    console.log("Form Data:", formData);
    return { success: true, data: formData };
  } catch (error) {
    console.error("Error handling form data:", error);
    return { success: false, error: error.message };
  }
};

const getApiEndpoints = async (formData) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // delete
    console.log("Form Data:", formData);
    return { success: true, data: formData };
  } catch (error) {
    console.error("Error handling form data:", error);
    return { success: false, error: error.message };
  }
};
const profile = true;
const headingtext = "Fill Your Profile";
const buttonConfig = {
  label: "Continue",
  type: "submit",
  btnWidth: "100%", // Dynamic button width
  btnHeight: "50px", // Dynamic button height
};

const inputConfig = {
  inputWidth: "100%", // Dynamic input width
  inputHeight: "48px", // Dynamic input height
};

const modalConfig = {
  title: "Congratulations",
  message: "Your Payment is successfully. Purchase a New Course",
  img: "https://t3.ftcdn.net/jpg/00/98/85/78/360_F_98857800_xtq6QJtDQdDlvYR5VYh3U2FPij7kOgMC.jpg",
};

const fieldConfigs = [
  {
    name: "fullname",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    required: true,
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter your address",
    type: "text",
    required: true,
  },
  {
    name: "dob",
    label: "Date of Birth",
    placeholder: "Enter your date of birth",
    type: "date",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    required: true,
  },
  {
    name: "mobile",
    label: "Mobile",
    placeholder: "Enter your mobile number",
    type: "tel",
    required: true,
  },
  {
    name: "gender",
    label: "Gender",
    placeholder: "Enter your gender",
    type: "text",
    required: false,
  },
  {
    name: "housename",
    label: "House Name",
    placeholder: "Enter your house name",
    type: "text",
    required: true,
  },
  {
    name: "landmark",
    label: "Landmark",
    placeholder: "Enter landmark",
    type: "text",
    required: true,
  },
  {
    name: "pincode",
    label: "Pincode",
    placeholder: "Enter your pincode",
    type: "text",
    required: true,
  },
  {
    name: "district",
    label: "District",
    placeholder: "Enter your district",
    type: "text",
    required: true,
  },
  {
    name: "state",
    label: "State",
    placeholder: "Enter your state",
    type: "text",
    required: true,
  },
];

const FillYourProfile = ({ handleSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Modal open state changed:", isModalOpen);
  }, [isModalOpen]);

  const handleButtonClick = () => {
    setIsModalOpen(true); // Open the congrats modal on button click
  };
  const handleCloseModal = () => {
    console.log("inside handleclose");
    setIsModalOpen(false);
    console.log("Modal state after closing:", isModalOpen);
  };
  console.log("Modal state:", isModalOpen);
  const onSubmit = (values) => {
    console.log("Form Submitted with values:", values);
    handleSubmit(values); // Pass JSON data instead of FormData
  };
  return (
    <div className="min-h-screen bg-dark-gray flex items-center justify-center">
      <FormComponent
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        inputConfig={inputConfig}
        apiEndpoint={getApiEndpoint}
        getApiEndpoints={getApiEndpoints}
        heading={headingtext}
        profile
        handleButtonClick={handleButtonClick}
      />
      {isModalOpen && (
        <CongratsModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          title={modalConfig.title}
          message={modalConfig.message}
          img={modalConfig.img}
          buttonConfig={buttonConfig}
        />
      )}
        heading={headingtext}
        profile
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FillYourProfile;
