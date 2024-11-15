import axios from "../../axios/axios";

export const resetPassword = async (email_or_phone,newPassword, confirmPassword) => {
  const response = await axios.post(
    `customer/password-reset/`,
    {
      email_or_phone:email_or_phone,
      new_password: newPassword,
      confirm_password: confirmPassword,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
