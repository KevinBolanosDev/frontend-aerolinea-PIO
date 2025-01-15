import React, { createContext, useContext, useState, useEffect } from "react";
import { airlineApi } from "../api/airlineApi";

// Creamos el contexto global para el uso de la api
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
      setError("Error al cargar aerolíneas");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createAirline = async (airlineData) => {
    try {
      setLoading(true);
      const newAirline = await airlineApi.create(airlineData);
      setAirlines((prev) => [...prev, newAirline]);
      return newAirline;
    } catch (error) {
      setError("Error al crear aerolínea");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteAirline = async (id) => {
    try {
      setLoading(true);
      await airlineApi.delete(id);
      setAirlines((prev) => prev.filter((airline) => airline.id !== id));
    } catch (error) {
      setError("Error al eliminar aerolínea");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateAirline = async (id, airlineData) => {
    try {
      setLoading(true);
      const updatedAirline = await airlineApi.update(id, airlineData);
      setAirlines((prev) =>
        prev.map((airline) => (airline.id === id ? updatedAirline : airline))
      );
      return updatedAirline;
    } catch (error) {
      setError("Error al actualizar aerolínea");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const searchAirlines = (query) => {
    if (!query) return airlines; // Retorna todas las aerolíneas si no hay consulta
    return airlines.filter(
      (airline) =>
        airline.nombre.toLowerCase().includes(query.toLowerCase()) ||
        airline.pais_origen.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    loadAirlines();
  }, []);

  return (
    <AirlineContext.Provider
      value={{
        airlines,
        loading,
        error,
        createAirline,
        deleteAirline,
        updateAirline,
        loadAirlines,
        searchAirlines,
      }}
    >
      {children}
    </AirlineContext.Provider>
  );
};

export const useAirlines = () => useContext(AirlineContext);
