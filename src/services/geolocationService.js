// src/services/locationService.js

export const fetchLocationData = async (latitude, longitude) => {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Failed to fetch location data');
      }
      const data = await response.json();
      return {
          latitude: latitude,
          longitude: longitude,
          city: data.city,
          state: data.principalSubdivision,
          country: data.countryName,
      };
  } catch (error) {
      console.error('Error fetching location data:', error);
      throw error;
  }
};

// src/services/locationService.js

export const fetchCoordinatesFromPlace = async (place) => {
  const apiKey = "AIzaSyAR2fo9JIH2bfm8KmiZym2UAD60OblT4tw"; // Make sure to replace this with your actual API key
  const url = `https://api.example.com/geocode?address=${encodeURIComponent(place)}&key=${apiKey}`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error("Failed to fetch coordinates for the place");
      }
      const data = await response.json();

      // Assuming the API returns an array of results
      if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          return { latitude: lat, longitude: lng };
      } else {
          throw new Error("No results found for the given place");
      }
  } catch (error) {
      console.error("Error fetching coordinates from place:", error);
      throw error; // Rethrow error to be handled by the caller
  }
};


export const getCurrentLocation = async () => {
  try {
      if (navigator.geolocation) {
          return new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(
                  async (position) => {
                      const { latitude, longitude } = position.coords;
                      try {
                          const locationData = await fetchLocationData(latitude, longitude);
                          resolve(locationData);
                      } catch (error) {
                          reject(error);
                      }
                  },
                  (error) => {
                      reject(new Error(`Error fetching location: ${error.message}`));
                  }
              );
          });
      } else {
          throw new Error("Geolocation is not supported by your browser.");
      }
  } catch (error) {
      console.error(error.message);
      throw error;
  }
};
