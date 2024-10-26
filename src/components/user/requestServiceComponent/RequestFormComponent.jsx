import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonComponent from "../../reUsableComponents/ButtonComponent";
import ImageUploadComponent from "./ImageUploadComponent";
import AvailabilityComponent from "./AvailabilityComponent";

// Validation schema using Yup
const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    fromDate: Yup.string().required("From Date is required"),
    fromTime: Yup.string().required("From Time is required"),
    toDate: Yup.string().required("To Date is required"),
    toTime: Yup.string().required("To Time is required"),
});

const ServiceRequestForm = ({ onSubmitForm }) => {
    const initialValues = {
        title: "",
        description: "",
        images: [],
        fromDate: "",
        fromTime: "",
        toDate: "",
        toTime: "",
    };

    // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Call the parent callback function and pass the form data
    onSubmitForm(values);
    setSubmitting(false); // To reset the form state
  };

    return (
        <div className="">
            {/* Formik Form */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form>
                        {/* Title Field */}
                        <div className="mb-4">
                            <div className="bg-white h-14 pl-4 pt-2 rounded-md shadow-md">
                                <p className="text-xs text-gray-500">Title</p>
                                <Field
                                    type="text"
                                    name="title"
                                    placeholder=""
                                    className="w-full placeholder-gray-500 text-base text-gray-500 border-none rounded-lg focus:outline-none"
                                />
                            </div>
                            <ErrorMessage
                                name="title"
                                component="div"
                                className="text-red-500 text-xs mt-1"
                            />
                        </div>

                        {/* Description Field */}
                        <div className="mb-4">
                            <div className="bg-white pl-4 pt-2 rounded-md shadow-md">
                                <p className="text-xs text-gray-500">Description</p>
                                <Field
                                    as="textarea"
                                    name="description"
                                    placeholder=""
                                    className="w-full placeholder-gray-500 text-base text-gray-500 border-none rounded-lg focus:outline-none"
                                />
                            </div>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="text-red-500 text-xs mt-1"
                            />
                        </div>

                        {/* Image Upload Section */}
                        <ImageUploadComponent setFieldValue={setFieldValue} />

                        {/* Availability Section */}
                      <AvailabilityComponent/>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <ButtonComponent
                                btnWidth={"w-full"}
                                btnHeight={"3rem"}
                                label={"Confirm"}
                                disabled={isSubmitting}
                                type={"submit"}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ServiceRequestForm;
