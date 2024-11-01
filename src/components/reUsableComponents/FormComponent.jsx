/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import * as Yup from "yup";
import ButtonComponent from "./ButtonComponent";
import InputFieldComponent from "./InputFieldComponent";

const FormComponent = ({
  fieldConfigs,
  buttonConfig,
  inputConfig,
  apiEndpoint,
  heading,
  profile,
  handleButtonClick,
  onSubmit,
  forgotPassword,
}) => {
  const [formData, setFormData] = useState({});
  const [profileImage, setProfileImage] = useState(null); // State to hold selected profile image
  const [previewImage, setPreviewImage] = useState(null); // State for image preview
  // Set initial form values based on fieldConfigs
  useEffect(() => {
    const initialFormData = fieldConfigs.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
    setFormData(initialFormData);
  }, [fieldConfigs]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      let finalValues;

      if (profile) {
        // Object for fill in profile
        finalValues = {
          user: {
            full_name: values.full_name,
            address: values.address,
            housename: values.housename,
            landmark: values.landmark,
            pin_code: values.pin_code,
            district: Number(values.district),
            state: Number(values.state),
            email: values.email,
            phone_number: values.phone_number,
          },
          profile_image: profileImage ? profileImage : null,
          date_of_birth: values.date_of_birth || null,
          gender: values.gender || "",
          accepted_terms: true,
        };

        await apiEndpoint(finalValues);

      } else {

        // Object for login
        finalValues = {
          ...values,
        };

        await apiEndpoint(finalValues);

        resetForm();
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setSubmitting(false); // Stop submitting state
    }
  };

  // Yup validation schema
  const validationSchema = Yup.object(
    fieldConfigs.reduce((schema, field) => {
      if (
        field.placeholder.toLowerCase().includes("password") &&
        field.name !== "confirmPassword"
      ) {
        schema[field.name] = Yup.string()
          .required(`${field.label} is required`)
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@])(?=.*\d)[A-Za-z\d@]{8,}$/,
            "Password must contain at least 8 characters, including uppercase, lowercase, number, and @"
          );
      } else if (field.name === "confirmPassword") {
        schema[field.name] = Yup.string()
          .required("Confirm password is required")
          .oneOf([Yup.ref("password"), null], "Passwords must match");
      } else if (field.placeholder.toLowerCase().includes("email")) {
        schema[field.name] = Yup.string()
        .required(`${field.label} is required`)
        .test(
          "email-or-phone",
          "Must be a valid email or phone number",
          (value) =>
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) || // Email pattern
          /^\+[1-9]{1}[0-9]{1,3}[0-9]{7,12}$/.test(value)    // Phone pattern (E.164 format)
        );
      } else if (field.required) {
        schema[field.name] = Yup.string().required(
          `${field.label} is required`
        );
      }
      return schema;
    }, {})
  );

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
   
      setProfileImage(file.name); // Update profileImage state with selected file
      setPreviewImage(URL.createObjectURL(file)); // Generate preview URL for the image
    }
  };

  return (
    <div className="bg-light-gray p-6 max-w-xl w-full md:max-w-lg lg:max-w-lg lg:p-4 xl:max-w-md xl:p-4">
      {heading && (
        <div className="bg-dark-gray p-4  w-full mx-auto">
          <h2 className="text-white font-heading text-center text-lg font-bold">
            {heading}
          </h2>
        </div>
      )}

      {profile && (
        <div className="flex justify-center mt-4">
          <div className="w-24 h-26 rounded-full bg-medium-gray flex items-center justify-center relative">
            {previewImage ? (
              <img src={previewImage} alt="Profile Preview" className="w-24 h-28 rounded-full" />
            ) : (
              <img src="/profileImage.svg" alt="Profile" className="w-24 h-24" />
            )}
            <input
              type="file"
              className="opacity-0 absolute w-24 h-24 cursor-pointer"
              onChange={handleProfileImageChange}
              accept="image/*" // Restrict file input to image types
            />
          </div>
        </div>
      )}

      <Formik
        initialValues={formData} // Set initial values from state
        validationSchema={validationSchema} // Apply Yup validation schema
        enableReinitialize={true} // Allow reinitialization of values
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="space-y-4 mt-4">
            {fieldConfigs.map((field) => (
              <InputFieldComponent
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={values[field.name]}
                error={errors[field.name]}
                touched={touched[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                inputWidth={inputConfig.inputWidth}
                inputHeight={inputConfig.inputHeight}
              />
            ))}

            {forgotPassword && (
              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-dark-gray hover:underline hover:text-black"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            <div className="mt-2">
              <ButtonComponent
                label={buttonConfig.label}
                type={buttonConfig.type}
                disabled={isSubmitting}
                btnWidth={buttonConfig.btnWidth}
                btnHeight={buttonConfig.btnHeight}
                hasIcon={buttonConfig.hasIcon}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent 
