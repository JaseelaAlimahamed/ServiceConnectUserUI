import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation
import ButtonComponent from '../../reUsableComponents/ButtonComponent';

// Yup validation schema
const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  media: Yup.mixed().nullable(),
});

function ComplaintForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        media: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form className="mt-6 rounded-lg">
          {/* Title Field */}
          <div className="mb-4 bg-white py-2 px-4 shadow-xl border-2 border-gray-500 rounded-lg">
            <label className="block text-gray-700 mb-2  text-sm" htmlFor="title">
              Title
            </label>
            <Field
              type="text"
              name="title"
              id="title"
              className="w-full text-base"
              placeholder="Enter the title"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          {/* Description Field */}
          <div className="mb-4 bg-white py-2 px-4 shadow-xl border-2 border-gray-500 rounded-lg">
            <label className="block text-gray-700 mb-2 text-sm" htmlFor="description">
              Description
            </label>
            <Field
              as="textarea"
              name="description"
              id="description"
              className="w-full"
              placeholder="Enter the description"
              rows="4"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          {/* File Input */}
          <div className="mb-4 bg-white py-2 px-4 shadow-xl border border-gray-300 rounded-lg relative">
            <input
              type="text"
              placeholder="Upload Images or Videos"
              className="w-full p-2  pr-10"
              readOnly
            />
            <input
              type="file"
              id="media"
              onChange={(event) => setFieldValue('media', event.target.files[0])}
              accept="image/*,video/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <span className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_8952_2264)">
                  <path d="M20 4V16H8V4H20ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM11.5 11.67L13.19 13.93L15.67 10.83L19 15H9L11.5 11.67ZM2 6V20C2 21.1 2.9 22 4 22H18V20H4V6H2Z" fill="#4B4B4B" />
                </g>
                <defs>
                  <clipPath id="clip0_8952_2264">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </span>
          </div>



          {/* Submit Button */}
          <ButtonComponent
            btnWidth={"w-full"}
            btnHeight={"h-14"}
            btnColor='bg-red-900'
            label={"Confirm"}
            type={"submit"}
          />
        </Form>
      )}
    </Formik>
  );
}

export default ComplaintForm;
