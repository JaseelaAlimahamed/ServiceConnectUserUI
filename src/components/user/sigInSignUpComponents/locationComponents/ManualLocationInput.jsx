import React from "react";

const ManualLocationInput = ({ manualLocation, setManualLocation }) => {
  return (
    <div className="text-center">
      {/* Input Field Heading */}
      <h3 className="text-lg font-semibold mb-2">Manually Enter Location (optional)</h3>

      {/* Input Field for Manual Location Entry */}
      <input
        type="text"
        value={manualLocation}
        onChange={(e) => setManualLocation(e.target.value)}
        placeholder="Enter place name (optional)"
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
    </div>
  );
};

export default ManualLocationInput;