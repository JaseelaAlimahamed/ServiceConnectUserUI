import React, { useState } from "react";
import ManualLocationInput from "./ManualLocationInput"; 
import {
  fetchGeoLocationByPlace,
  getCurrentLocation,
  fetchCityStateCountry,
} from "../../../../services/location/geolocationService"; 

const LocationModal = () => {
  const [isModalOpen, setModalOpen] = useState(true); 
  const [locationData, setLocationData] = useState(null); 
  const [manualLocation, setManualLocation] = useState(''); 
  const [error, setError] = useState(null); 

  // Handle the Allow button click
  const handleAllowLocation = async () => {
    try {
      let location = null;

      // If the input field is not empty, fetch geolocation based on the place entered
      if (manualLocation) {
        location = await fetchGeoLocationByPlace(manualLocation);
      } else {
        // If the input field is empty, fetch the user's current location
        const currentLocation = await getCurrentLocation();
        const cityStateCountry = await fetchCityStateCountry(currentLocation.latitude, currentLocation.longitude);

        // Combine the latitude, longitude, and city/state/country info
        location = {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          ...cityStateCountry,
        };
      }

      setLocationData(location);
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
          <div className="bg-white rounded-3xl shadow-xl p-6 w-96 relative h-80">
            {/* Modal Content */}
            <div className="text-center">
              {/* Heading */}
              <h2 className="text-2xl font-bold mb-6">Allow Location</h2>

              {/* Allow Button */}
              <button
                onClick={handleAllowLocation}
                className="bg-black text-white font-bold py-2 px-6 rounded-full mb-6 shadow-md hover:bg-gray-800 transition"
              >
                Allow
              </button>

              {/* Render the ManualLocationInput component */}
              <ManualLocationInput
                manualLocation={manualLocation}
                setManualLocation={setManualLocation}
              />

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