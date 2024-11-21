import axiosInstance from "../../axios/axiosInstance";

export const fetchSubCategories = async (categoryId) => {
  try {
    const response = await axiosInstance.get(`/customer/categories/${categoryId}/subcategories/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
};
