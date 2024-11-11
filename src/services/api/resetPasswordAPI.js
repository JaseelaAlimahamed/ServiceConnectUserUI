// src/services/passwordService.js

import axios from "../../axios/axios";

export const resetPassword = async (uidb64, token, newPassword, confirmPassword) => {
  const response = await axios.post(
    `customer/password-reset/${uidb64}/${token}/`,
    {
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
