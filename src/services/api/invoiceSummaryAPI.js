// src/api/InvoiceAPI.js
import axiosInstance from '../../axios/axios';

export const fetchInvoiceDetails = async (id) => {
  const token = localStorage.getItem('auth');
  try {
    const response = await axiosInstance.get(`/customer/service-requests/${id}`, {
      headers: {
        'Authorization': token, 
      },
    });
    return response.data.invoice;
  } catch (error) {
    throw new Error('Failed to fetch invoice details');
  }
};
