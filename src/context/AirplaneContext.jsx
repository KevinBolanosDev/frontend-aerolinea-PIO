import React, { createContext, useContext, useState, useEffect } from 'react';
import { airplaneApi } from '../api/airplaneApi';

// Creamos el contexto global para el uso de la api
const AirplaneContext = createContext();

export const AirplaneProvider = ({ children }) => {
  const [airplanes, setAirplanes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadAirplane = async () => {
    try {
      setLoading(true);
      const data = await airplaneApi.getAll();
      setAirplanes(data);
    } catch (error) {
      setError('Error al cargar aviones');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createAirplane = async (airplaneData) => {
    try {
      setLoading(true);
      const newAirplane = await airplaneApi.create(airplaneData);
      setAirplanes(prev => [...prev, newAirplane]);
      return newAirplane;
    } catch (error) {
      setError('Error al crear aviones');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAirplane();
  }, []);

  return (
    <AirplaneContext.Provider value={{
      airplanes,
      loading,
      error,
      createAirplane,
      loadAirplane
    }}>
      {children}
    </AirplaneContext.Provider>
  );
};

export const useAirplanes = () => useContext(AirplaneContext);
