import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://api.syntechticsolutions.com.ng',
  headers: {
    'Content-Type': 'application/json',     
  },
});
Api.interceptors.request.use(
  (config) => {
      const token = sessionStorage.getItem('token'); 
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

