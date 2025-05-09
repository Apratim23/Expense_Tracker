// src/services/api.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://your-backend-api-url.com/api', // Replace with your backend URL
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
