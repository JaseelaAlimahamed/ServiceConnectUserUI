// api.js
import api from "../../axios/axios";

// Register Customer
export const registerCustomer = async (data) => {
  try {
    const response = await api.post('register/', data);
    return response.data;
  } catch (error) {
    console.error("Error registering customer:", error);
    throw error;
  }
};

// Verify OTP
export const verifyOTP = async (data) => {
  try {
    const response = await api.post('verify-otp/', data);
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

// Login Customer
export const loginCustomer = async (data) => {
  try {
    const response = await api.post('login/', data);
    return response.data;
  } catch (error) {
    console.error("Error logging in customer:", error);
    throw error;
  }
};

// Forgot Password
export const forgotPassword = async (data) => {
  try {
    const response = await api.post('password-forgot/', data);
    return response.data;
  } catch (error) {
    console.error("Error with forgot password:", error);
    throw error;
  }
};

// Reset Password
export const resetPassword = async (uidb64, token, data) => {
  try {
    const response = await api.post(`password-reset/${uidb64}/${token}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

// Get or Update Profile
export const getProfile = async (pk) => {
  try {
    const response = await api.get(`profile/${pk}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export const updateProfile = async (pk, data) => {
  try {
    const response = await api.put(`profile/${pk}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

export const partialUpdateProfile = async (pk, data) => {
  try {
    const response = await api.patch(`profile/${pk}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error partially updating profile:", error);
    throw error;
  }
};

// Get Category List
export const getCategoryList = async () => {
  try {
    const response = await api.get('categories/');
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Get Subcategory List by Category ID
export const getSubcategoryList = async (categoryId) => {
  try {
    const response = await api.get(`categories/${categoryId}/subcategories/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
};

// Get Service Providers by Subcategory ID
export const getServiceProviders = async (subcategoryId) => {
  try {
    const response = await api.get(`subcategories/${subcategoryId}/service-providers/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service providers:", error);
    throw error;
  }
};

// Get Service Provider Detail
export const getServiceProviderDetail = async (id) => {
  try {
    const response = await api.get(`service_provider/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service provider detail:", error);
    throw error;
  }
};

// Search Functionality
export const unifiedSearch = async (query) => {
  try {
    const response = await api.get('search/', { params: { q: query } });
    return response.data;
  } catch (error) {
    console.error("Error in unified search:", error);
    throw error;
  }
};

// Create Service Request
export const createServiceRequest = async (data) => {
  try {
    const response = await api.post('service-request/', data);
    return response.data;
  } catch (error) {
    console.error("Error creating service request:", error);
    throw error;
  }
};

// View User Request
export const viewUserRequest = async () => {
  try {
    const response = await api.get('view-request-user/');
    return response.data;
  } catch (error) {
    console.error("Error viewing user request:", error);
    throw error;
  }
};

// Get Service Request Invoice
export const getServiceRequestInvoice = async () => {
  try {
    const response = await api.get('service-request-invoice/');
    return response.data;
  } catch (error) {
    console.error("Error fetching service request invoice:", error);
    throw error;
  }
};
