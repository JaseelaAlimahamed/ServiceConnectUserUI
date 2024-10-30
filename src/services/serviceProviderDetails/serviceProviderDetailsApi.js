import axiosInstance from "../../axios/axiosInstance"

export const fetchServiceProviderDetails = async() =>
{

    try {
         const response = await axiosInstance.get("/customer/service_provider/2")
         if (response.status !== 200) {
            throw new Error('Failed to fetch Service Provider Details');
          }
         return response.data
    } catch (error) {
        console.error('Error fetching Service Provider Details:', error);
        throw error;
    }
}

export default fetchServiceProviderDetails