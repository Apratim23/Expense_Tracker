// src/services/api.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Replace with your backend URL
  withCredentials: true, // To handle cookies for JWT authentication
});

// Optional: Add a request interceptor to include the token in headers if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
/*import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (userDetails) => api.post('/auth/register', userDetails);

export default api;*/
