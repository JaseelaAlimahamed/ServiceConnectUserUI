import axios from '../../axios/axios';

export const ongoingServices = async () => {

  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`customer/service-requests/ongoing/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};
