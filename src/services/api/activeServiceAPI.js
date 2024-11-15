import axiosInstance from "../../axios/axios";

export const fetchServiceRequest = async (id) => {
  const token = localStorage.getItem('auth');
  try {
    const response = await axiosInstance.get(`/customer/service-requests/${id}`, {
      headers: {
        'Authorization': token,
      },
    });
    return response.data.service_request;
  } catch (error) {
    throw new Error("Failed to fetch service details");
  }
};
