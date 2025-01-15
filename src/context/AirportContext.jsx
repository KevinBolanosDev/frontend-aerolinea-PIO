import React, { createContext, useContext, useState, useEffect } from 'react';
import { airportApi } from '../api/airportApi';

// Creamos el contexto global para el uso de la api
const AirportContext = createContext();

export const AirportProvider = ({ children }) => {
  const [airport, setAirport] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadAirport = async () => {
    try {
      setLoading(true);
      const data = await airportApi.getAll();
      setAirport(data);
    } catch (error) {
      setError('Error al cargar aeropuertos');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createAirport = async (airportData) => {
    try {
      setLoading(true);
      const newAirport = await airportApi.create(airportData);
      setAirport(prev => [...prev, newAirport]);
      return newAirport;
    } catch (error) {
      setError('Error al crear el aeropuerto');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAirport();
  }, []);

  return (
    <AirportContext.Provider value={{
      airport,
      loading,
      error,
      createAirport,
      loadAirport
    }}>
      {children}
    </AirportContext.Provider>
  );
};

export const useAirport = () => useContext(AirportContext);
