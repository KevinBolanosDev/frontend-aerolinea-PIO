import React from "react";
import { AirportProvider } from "./AirportContext.jsx";
import { AirlineProvider } from "./AirlineContext.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import { AirplaneProvider } from "./AirplaneContext.jsx";
// Importa otros contextos aquí
// import { AnotherProvider } from './AnotherContext';

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AirlineProvider>
        <AirportProvider>
          <AirplaneProvider>
            {/* Envuelve otros contextos aquí */}
            {children}
          </AirplaneProvider>
        </AirportProvider>
      </AirlineProvider>
    </AuthProvider>
  );
};

export default AppProvider;
