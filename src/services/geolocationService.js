// src/utils/geolocationService.js

const fetchLocationData = async (latitude, longitude) => {
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
  
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
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
            reject(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };
  
  export { getCurrentLocation };
  