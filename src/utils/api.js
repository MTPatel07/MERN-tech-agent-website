import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: () => api.get('/contact'),
};

// Internship API
export const internshipAPI = {
  apply: (data) => api.post('/internship/apply', data),
  getAll: () => api.get('/internship/applications'),
};

// Reviews API
export const reviewsAPI = {
  getAll: () => api.get('/reviews'),
  getFeatured: () => api.get('/reviews/featured'),
  addReview: (data) => api.post('/reviews', data),
};

export default api;
