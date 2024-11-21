import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvoiceSummary = ({ invoice }) => {
  const navigate = useNavigate();
  // Destructure the necessary properties from the invoice object
  const {
    appointment_date,
    quantity,
    price,
    total_amount,
    additional_requirements,
  } = invoice;

  // Format the appointment date and time
  const formattedDate = new Date(appointment_date).toLocaleDateString('en-US', { timeZone: 'UTC' });
  const formattedTime = new Date(appointment_date).toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    timeZone: 'UTC', 
    hour12: false // Set to true if you prefer 12-hour format
  });

  // Function to handle click on Terms and Conditions
  const handleTermsClick = () => {
    navigate('/terms-conditions'); 
  };

  return (
    <div className="bg-primary shadow-lg rounded-3xl p-4 mt-6">
      <label className="block text-secondary font-semibold text-sm mb-2 md:text-base">Appointment</label>

      {/* Date and Time in Separate Grey Cards */}
      <div className="flex justify-center items-center mb-4">
        <div className="bg-lighter-gray shadow-xl rounded-lg p-2 mr-2 text-center">
          <span className="text-secondary text-base md:text-sm">{formattedDate}</span>
        </div>
        <div className="bg-lighter-gray shadow-xl rounded-lg p-2 text-center">
          <span className="text-secondary text-base md:text-sm">{formattedTime}</span>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-xs md:text-sm">
          <thead>
            <tr className="text-medium-blue">
              <th className="text-left py-2">Sl.no</th>
              <th className="text-left py-2">Description</th>
              <th className="text-left py-2">Qty</th>
              <th className="text-left py-2">Price</th>
              <th className="text-left py-2">Total</th>
            </tr>
            <tr>
              <td colSpan="5" className="border-b-2 border-secondary mb-0"></td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-medium-blue">
              <td>1</td>
              <td>Service Charge</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{total_amount}</td>
            </tr>
            {/* Line Above Grand Total */}
            <tr>
              <td colSpan="5" className="border-b-2 border-secondary mb-1"></td>
            </tr>
            {/* Grand Total Row */}
            <tr className="text-medium-blue font-bold">
              <td colSpan="4" className="text-left">Grand Total</td>
              <td>{total_amount}</td> 
            </tr>
          </tbody>
        </table>
      </div>

      {/* Additional Info */}
      <p className="text-medium-blue text-xs md:text-sm mb-2" onClick={handleTermsClick} style={{ cursor: 'pointer' }}>Terms and conditions</p>
      <p className="text-medium-blue text-xs md:text-sm mb-4">Valid up to 1 month</p>

      {/* Additional Requirements */}
      <div className="flex items-center mb-2">
        <div className="flex items-center justify-center w-6 h-6 bg-light-red rounded-full mr-2">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        <span className="text-light-red text-xs md:text-sm">Additional Requirements</span>
      </div>
      <p className="text-medium-blue text-xs md:text-sm">{additional_requirements}</p>
    </div>
  );
};

export default InvoiceSummary;