// address.js
import axios from 'axios';

// Set up the base URL for axios
const api = axios.create({
  baseURL: 'https://www.googlwapis.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
