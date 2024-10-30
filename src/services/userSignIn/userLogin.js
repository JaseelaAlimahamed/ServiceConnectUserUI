import axios from "../../api/axios";
import { login } from "../../redux/authSlice";



export const userLogin = async (emailorphone, password, dispatch, navigate, setLoginMessage) => {
  const LOGIN_URL = '/customer/login/';

  const payload = {email_or_phone: emailorphone, password: password}

  try {
    const response = await axios.post(LOGIN_URL, payload);
    const token = response.data.access;

    console.log("Login Success")
    setLoginMessage("Logged In Successfully!")
    dispatch(login({ token }));
    navigate("/home");

  } catch (error) {
    console.error(error.response?.data || "Login Failed", error.message);
    setLoginMessage("Invalid email or password!")
  }
};
