//categoriesApi.js
import axiosInstance from "../../axios/axiosInstance.js";

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get('/customer/categories');
    if (response.status !== 200) {
      throw new Error('Failed to fetch categories');
    }
    return response.data; // Assuming response data is in the correct format
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Rethrow error for handling by the caller
  }
};