import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5000', 
});

export const setAuthToken = (token, userId) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token); 
    if (userId) {
      localStorage.setItem('userId', userId); 
    }
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); 
  }
};


export const getServices = async () => {
  try {
    const response = await apiClient.get('/api/service/service');
    return response.data;
  } catch (error) {
    console.error("Failed to load services:", error);
    throw error;
  }
};
