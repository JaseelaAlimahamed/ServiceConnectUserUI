import axiosInstance from "../../axios/axiosInstance.js";

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get('/customer/categories');
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data; // Assuming response data is in the correct format
  } catch (error) {
    if (error.response) {
      // Server responded with a status outside the 2xx range
      console.error('Error fetching categories:', error.response.data.message || error.response.statusText);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received when fetching categories:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Error setting up request to fetch categories:', error.message);
    }
    throw error; // Rethrow the error for the caller
  }
};

export const fetchSubCategories = async (categoryId) => {
  try {
    const response = await axiosInstance.get(`/customer/categories/${categoryId}/subcategories/`);
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status outside the 2xx range
      console.error('Error fetching subcategories:', error.response.data.message || error.response.statusText);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received when fetching subcategories:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Error setting up request to fetch subcategories:', error.message);
    }
    throw error; // Rethrow the error for the caller
  }
};
