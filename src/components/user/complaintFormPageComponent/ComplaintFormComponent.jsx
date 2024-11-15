import React, { useState } from 'react';
import ButtonComponent from '../../reUsableComponents/ButtonComponent';
import ComplaintForm from './ComplaintForm';
import ProviderDetailsComponent from './ProviderDetailsComponent';
import BookingDetailsComponent from './BookingDetailsComponent';

function ComplaintFormComponent({ BookingDetails, ServiceProvider, InvoiceDetails }) {
  const [apiMessage, setApiMessage] = useState('');
  const [apiError, setApiError] = useState(false);

  const ServiceOnclick = () => {
    console.log("Service status button clicked");
  };

  const PaymentOnClick = () => {
    console.log("Payment status button clicked");
  };

  const handleSubmit = (message, isError) => {
    setApiMessage(message);
    setApiError(isError);
  };

  return (
    <div className="min-h-screen bg-gray-300 p-6 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto my-0 md:my-10 rounded-lg">
      {/* Provider Details */}
      <ProviderDetailsComponent ServiceProvider={ServiceProvider} />

      {/* Booking Details */}
      <BookingDetailsComponent BookingDetails={BookingDetails} InvoiceDetails={InvoiceDetails} />

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-3 space-y-3 md:space-y-0 md:space-x-3">
        <ButtonComponent label={"Service Status"} btnWidth="w-full md:w-1/3" btnHeight="h-12" onClick={ServiceOnclick} />
        <ButtonComponent label={"Payment Status"} btnWidth="w-full md:w-1/3" btnHeight="h-12" onClick={PaymentOnClick} />
      </div>

      {/* Success/Error Message */}
      {apiMessage && (
        <div className={`p-4 mb-4 text-sm rounded-lg ${apiError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {apiMessage}
        </div>
      )}

      {/* Complaint Form */}
      <ComplaintForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ComplaintFormComponent;
