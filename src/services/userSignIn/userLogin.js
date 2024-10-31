import axios from "../../api/axios";
import { login } from "../../redux/authSlice";



export const userLogin = async (emailorphone, password, dispatch) => {
  const LOGIN_URL = '/customer/login/';

  const payload = {email_or_phone: emailorphone, password: password}

  try {
    const response = await axios.post(LOGIN_URL, payload);
    const token = response.data.access;

    console.log("Login Success")
    dispatch(login({ token }));
    return token;

  } catch (error) {
    console.error(error.response?.data || "Login Failed", error.message);
    throw new Error("Invalid email or password!"); 
  }
};
