import React, { useState } from "react";
import { getCurrentLocation } from '../../../services/geolocationService'; // Adjust the path as per your project structure

const LocationModal = () => {
  const [isModalOpen, setModalOpen] = useState(true); // Modal open state
  const [locationData, setLocationData] = useState(null); // Store location data
  const [error, setError] = useState(null); // Store error message

  const handleAllowLocation = async () => {
    try {
      const location = await getCurrentLocation(); // Retrieve current location
      setLocationData(location); // Store retrieved location data
      console.log("Location Data:", location);
      closeModal(); // Close modal after retrieving location
    } catch (error) {
      setError(error.message);
      console.error("Error retrieving location:", error.message);
    }
  };

  const closeModal = () => {
    setModalOpen(false); // Close modal
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 px-7 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-3xl shadow-xl p-6 w-96 relative h-60">

            {/* Close button */}
            {/* <button
              onClick={closeModal}
              className="relative top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              &#x2715;
            </button> */}

            {/* Modal Content */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Allow Location</h2>
              <button
                onClick={handleAllowLocation}
                className="bg-black text-white font-bold py-2 px-6 rounded-full mb-6 shadow-md hover:bg-gray-800 transition"
              >
                Allow
              </button>

              {/* Show location or error message */}
              {locationData && (
                <div className="text-green-500 mt-4">
                  Location retrieved: {JSON.stringify(locationData)}
                </div>
              )}
              {error && (
                <div className="text-red-500 mt-4">
                  Error: {error}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationModal;