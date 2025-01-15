import axios from "./axios.js";

export const airlineApi = {
  
  getAll: async () => {
    const response = await axios.get('/airline');
    return response.data;
  },

  create: async (airlineData) => {
    const response = await axios.post('/airline', airlineData);
    return response.data;
  },

  update: async (id, airlineData) => {
    const response = await axios.put(`/airline/${id}`, airlineData);
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`/airline/${id}`);
    return response.data;
  },

  search: async () => {
    const response = await axios.get(`/airline/`);
    return response.data;
  }
};