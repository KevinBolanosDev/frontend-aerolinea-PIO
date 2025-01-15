import axios from "./axios.js";

export const airplaneApi = {
  
  getAll: async () => {
    const response = await axios.get('/airplane');
    return response.data;
  },

  create: async (airplaneData) => {
    const response = await axios.post('/airplane', airplaneData);
    return response.data;
  },

  update: async (id, airplaneData) => {
    const response = await axios.put(`/airplane/${id}`, airplaneData);
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`/airplane/${id}`);
    return response.data;
  }
}; 