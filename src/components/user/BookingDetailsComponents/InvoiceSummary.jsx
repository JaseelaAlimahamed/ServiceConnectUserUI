import React from 'react';

const InvoiceSummary = () => {
  return (
    <div className="bg-primary shadow-lg rounded-3xl p-4 mt-6">
        <label className="block text-secondary font-semibold text-sm mb-2 md:text-base">Appointment</label>

      {/* Date and Time in Separate Grey Cards */}
      <div className="flex justify-center items-center mb-4">
        <div className="bg-lighter-gray shadow-xl rounded-lg p-2 mr-2 text-center">
          <span className="text-secondary text-base md:text-sm">Jun 10, 2024</span>
        </div>
        <div className="bg-lighter-gray shadow-xl rounded-lg p-2 text-center">
          <span className="text-secondary text-base md:text-sm">9:41 AM</span>
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
              {/* Reduced margin-bottom for the line */}
              <td colSpan="5" className="border-b-2 border-secondary mb-0"></td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-medium-blue">
              <td>1</td>
              <td>Bulb Change</td>
              <td>1</td>
              <td>300</td>
              <td>300</td>
            </tr>
            {/* Line Above Grand Total */}
            <tr>
              <td colSpan="5" className="border-b-2 border-secondary mb-1"></td>
            </tr>
            {/* Grand Total Row */}
            <tr className="text-medium-blue font-bold">
              <td colSpan="4" className="text-left">Grand Total</td>
              <td>300</td> 
            </tr>
          </tbody>
        </table>
      </div>

      {/* Additional Info */}
      <p className="text-medium-blue text-xs md:text-sm mb-2">Terms and conditions</p>
      <p className="text-medium-blue text-xs md:text-sm mb-4">Valid up to 1 month</p>

      {/* Additional Requirements */}
      <div className="flex items-center mb-2">
        <div className="flex items-center justify-center w-6 h-6 bg-light-red rounded-full mr-2">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        <span className="text-light-red text-xs md:text-sm">Additional Requirements</span>
      </div>
      <p className="text-medium-blue text-xs md:text-sm">Provide Ladder</p>
      <p className="text-medium-blue text-xs md:text-sm">Bulb should be provided</p>
    </div>
  );
};

export default InvoiceSummary;