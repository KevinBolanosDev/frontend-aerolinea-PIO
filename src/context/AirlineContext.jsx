import React, { createContext, useContext, useState, useEffect } from 'react';
import { airlineApi } from '../api/airlineApi';

const AirlineContext = createContext();

export const AirlineProvider = ({ children }) => {
  const [airlines, setAirlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadAirlines = async () => {
    try {
      setLoading(true);
      const data = await airlineApi.getAll();
      setAirlines(data);
    } catch (error) {
      setError('Error al cargar aerolíneas');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createAirline = async (airlineData) => {
    try {
      setLoading(true);
      const newAirline = await airlineApi.create(airlineData);
      setAirlines(prev => [...prev, newAirline]);
      return newAirline;
    } catch (error) {
      setError('Error al crear aerolínea');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAirlines();
  }, []);

  return (
    <AirlineContext.Provider value={{
      airlines,
      loading,
      error,
      createAirline,
      loadAirlines
    }}>
      {children}
    </AirlineContext.Provider>
  );
};

export const useAirlines = () => useContext(AirlineContext);
