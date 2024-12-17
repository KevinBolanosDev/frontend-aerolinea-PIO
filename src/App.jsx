import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
// Design components
import DataTable from "./components/design/DataTable.jsx";
import Sidebar from "./components/design/Sidebar.jsx";
// import Home from "./components/design/Home.jsx";
// Menu
import menuOpen from "../img/icon-menu.svg";
import menuClose from "../img/icon-menu-close.svg";
import RenderForm from "./components/design/RenderForm.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState(''); // Estado de menu pestaña activa/inactiva
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado para el menu ocultar/mostrar
  // const [airlineData, setAirlineData] = useState([]);

  const [data, setData] = useState({
    aerolinea: [],
    aeropuerto: [],
    empleados: [],
    tarifa: [],
    vuelo: [],
    tripulacion_vuelo: [],
    mantenimiento: [],
    pasajeros: [],
    avion: [],
    reservas: [],
  });

  // Para agregar datos del formulario
  const addDataTable = (type, newData) => {
    setData((prevData) => ({
      ...prevData,
      [type]: [...prevData[type], newData],
    }));
  };

/*   const handleDataUpdate = (data) => {
    setAirlineData(data);
  } */

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div className="flex min-h-screen lg:justify-self-end p-3 w-screen mt-[rem] sm:mt-[]">
      <Sidebar isOpen={isSidebarOpen} setActiveTab={setActiveTab} />
      <div className={`flex items-center w-full`}>
        <div className="container bg-slate-900 opacity-70 mx-auto sm:w-[65%] p-2 sm:p-0">
          {/* Header menu */}
          <div className="flex mx-auto flex-col-reverse w-[100%] sm:w-[50%] sm:flex-row justify-between items-center mb-4">
            <h1 className="text-xl font-bold sm:text-4xl">
              Gestión Bases de Datos Aerolínea
            </h1>
            {!isSidebarOpen && (
              <button
                onClick={toggleSidebar}
                className="bg-blue-500 flex items-center justify-center gap-4 w-[100%] text-white text-xl my-4 px-4 rounded-b-lg hover:bg-blue-600 transition-colors duration-200 uppercase sm:w-64 sm:h-16"
              >
                <img className="h-3" src={menuOpen} alt="Open Menu" />
                Abrir Tablas
              </button>
            )}
            {isSidebarOpen && (
              <button
                className={"absolute w-20 mr-6 sm:w-48 flex flex-col items-center rounded-lg py-2 uppercase transition-colors duration-200 bg-blue-500 hover:bg-blue-600 end-0 sm:static top-6"}
                onClick={toggleSidebar}
              >
                <img src={menuClose} alt="Close Menu" />
                Cerrar
              </button>
            )}
          </div>
          {/* main formularios */}
          <div className={`grid mx-auto sm:grid-cols-1 gap-4`}>
            <div className="w-[100%] sm:w-[50%] mx-auto">
              <h2 className="text-2xl font-bold mb-2">
                Formulario de{" "}
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <RenderForm activeTab={activeTab} addDataTable={addDataTable} />
            </div>
            <div className="w-[100%] mx-auto sm:w-[50%]">
              <h2 className="text-2xl font-bold mb-2">
                Datos de {" "}
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <DataTable data={data[activeTab]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
