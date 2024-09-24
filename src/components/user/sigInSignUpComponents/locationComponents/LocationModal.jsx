import React, { useState } from "react";
import ManualLocationInput from "./ManualLocationInput"; // Import the ManualLocationInput component

const LocationModal = () => {
  const [isModalOpen, setModalOpen] = useState(true); // Modal open state
  const [locationData, setLocationData] = useState(null); // Store location data
  const [manualLocation, setManualLocation] = useState(''); // Store manual input location
  const [error, setError] = useState(null); // Store error message

  // Function to fetch geolocation based on place name using Nominatim
  const fetchGeoLocationByPlace = async (place) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json&limit=1`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch geolocation for the entered place.');
      }
      const data = await response.json();
      if (data.length === 0) {
        throw new Error('No geolocation found for the entered place.');
      }
      return {
        latitude: data[0].lat,
        longitude: data[0].lon,
        display_name: data[0].display_name,
      };
    } catch (error) {
      console.error('Error fetching geolocation for place:', error);
      throw error;
    }
  };

  // Function to get the current location using Geolocation API
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
            });
          },
          (error) => {
            reject(new Error('Failed to retrieve current location.'));
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  // Function to fetch City, State, and Country using reverse geocoding with latitude and longitude
  const fetchCityStateCountry = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch city, state, and country.');
      }
      const data = await response.json();
      return {
        city: data.address.city || data.address.town || data.address.village || 'Unknown',
        state: data.address.state || 'Unknown',
        country: data.address.country || 'Unknown',
        display_name: data.display_name || 'Unknown Location',
      };
    } catch (error) {
      console.error('Error fetching city, state, and country:', error);
      throw error;
    }
  };

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