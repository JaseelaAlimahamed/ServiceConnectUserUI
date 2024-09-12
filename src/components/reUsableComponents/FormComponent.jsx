import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from './InputFieldComponent';
import ButtonComponent from './ButtonComponent';

const FormComponent = ({ fieldConfigs, buttonConfig, inputConfig, apiEndpoint ,heading}) => {
  const [formData, setFormData] = useState({});

 
  useEffect(() => {
    const initialFormData = fieldConfigs.reduce((acc, field) => {
      acc[field.name] = ''; 
      return acc;
    }, {});
    setFormData(initialFormData); 
  }, [fieldConfigs]);

 
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      
      await apiEndpoint(values);
      resetForm(); 
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setSubmitting(false); 
    }
  };

  
  const validationSchema = Yup.object(
    fieldConfigs.reduce((schema, field) => {
      if (field.required) {
        schema[field.name] = Yup.string().required(`${field.label} is required`);
      }
      return schema;
    }, {})
  );


  return (
   <div className="min-h-screen bg-dark-gray flex items-center justify-center">
  <div className="bg-light-gray shadow-lg p-8 max-w-lg w-full md:max-w-md lg:max-w-sm lg:p-6 xl:max-w-xs xl:p-4">
   
    <div className="bg-dark-gray p-4 rounded-t-lg w-full mx-auto">
      <h2 className="text-white font-heading text-center text-2xl font-bold">{heading}</h2>
    </div>

    <div className="flex justify-center mt-4">
      <div className="w-24 h-24 rounded-full bg-medium-gray flex items-center justify-center">
        <img src="/profileImage.svg" alt="Profile" />
        <input type="file" className="opacity-0 absolute w-24 h-24" />
      </div>
    </div>

    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
        <Form className="space-y-4 mt-4">
          {fieldConfigs.map((field) => (
            <InputField
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

          <ButtonComponent
            label={buttonConfig.label}
            type={buttonConfig.type}
            disabled={isSubmitting}
            btnWidth={buttonConfig.btnWidth}
            btnHeight={buttonConfig.btnHeight}
          />
        </Form>
      )}
    </Formik>
  </div>
</div>


  );
};

export default FormComponent;
