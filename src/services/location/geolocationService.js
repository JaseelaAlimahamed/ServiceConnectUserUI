// Function to fetch geolocation based on place name using Nominatim

export const fetchGeoLocationByPlace = async (place) => {
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
  export const getCurrentLocation = () => {
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
  export const fetchCityStateCountry = async (latitude, longitude) => {
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