import axios from "./axios.js";

export const airportApi = {
  
  getAll: async () => {
    const response = await axios.get('/airport');
    return response.data;
  },

  create: async (airportData) => {
    const response = await axios.post('/airport', airportData);
    return response.data;
  },

  update: async (id, airportData) => {
    const response = await axios.put(`/airport/${id}`, airportData);
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`/airport/${id}`);
    return response.data;
  }
}; 