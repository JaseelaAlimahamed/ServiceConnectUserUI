import axios from "../../api/axios"


export const fillProfile = async (token, data) => {
  try {
    const response = await axios.put('/customer/profile/', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const updatedUser = response.data.user; 
    console.log(updatedUser)
    return response.data
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export default fillProfile;
