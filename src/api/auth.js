import axios from "./axios.js";

export const authApi = {
  
  login: async (userData) => {
    const response = await axios.post('/auth/login', userData);
    return response.data;
  },

  register: async (userData) => {
    const response = await axios.post('/auth/register', userData);
    return response.data;
  },

  logout: async (userData) => {
    const response = await axios.post('/auth/logout', userData);
    return response.data;
  },

  profile: async () => {
    const response = await axios.get('/auth/verify');
    return response.data;
  },
};