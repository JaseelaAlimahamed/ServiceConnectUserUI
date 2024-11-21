import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://learnbudsgvr.pythonanywhere.com', // Set the base URL here
});

export default axiosInstance;