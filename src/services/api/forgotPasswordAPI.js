import axiosInstance from "../../axios/axios";

export const ForgotPasswordRequest = async (emailOrPhone) => {
  try {
    const response = await axiosInstance.post(
      "customer/password-forgot/",
      { email_or_phone: emailOrPhone },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
