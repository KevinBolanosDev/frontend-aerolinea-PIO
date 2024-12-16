import React, { useState } from "react";
import AirlineForm from "./components/AirlineForm.jsx";
import AirportForm from "./components/AirportForm.jsx";
import EmployeesForm from "./components//EmployeesForm.jsx";
import FeeForm from "./components/FeeForm.jsx";
import FlightForm from "./components/FlightForm.jsx";
import FlightCrewForm from "./components/FlightCrewForm.jsx";
import MaintenanceForm from "./components/MaintenanceForm.jsx";
import PassengerForm from "./components/PassengerForm.jsx";
import AirplaneForm from "./components/AirPlaneForm.jsx";
import ReservationForm from "./components//ReservationForm.jsx";
import DataTable from "../../../../DataTable.jsx";
import Sidebar from "../../../../Sidebar.jsx";
import menuOpen from "../public/img/icon-menu.svg";
import menuClose from "../public/img/icon-menu-close.svg";

export default function App() {
  const [activeTab, setActiveTab] = useState("aerolinea"); // Estado de menu pestaña activa/inactiva
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado para el menu oculto/mostrar
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

  // Renderizamos cada formulario dinamicamente
  const renderForm = () => {
    switch (activeTab) {
      case "aerolinea":
        return (
          <AirlineForm onSubmit={(data) => addDataTable("aerolinea", data)} />
        );
      case "aeropuerto":
        return (
          <AirportForm onSubmit={(data) => addDataTable("aeropuerto", data)} />
        );
      case "empleados":
        return (
          <EmployeesForm onSubmit={(data) => addDataTable("empleados", data)} />
        );
      case "tarifa":
        return <FeeForm onSubmit={(data) => addDataTable("tarifa", data)} />;
      case "vuelo":
        return <FlightForm onSubmit={(data) => addDataTable("vuelo", data)} />;
      case "tripulación de vuelo":
        return (
          <FlightCrewForm
            onSubmit={(data) => addDataTable("tripulacion_vuelo", data)}
          />
        );
      case "mantenimiento":
        return (
          <MaintenanceForm
            onSubmit={(data) => addDataTable("mantenimiento", data)}
          />
        );
      case "pasajeros":
        return (
          <PassengerForm onSubmit={(data) => addDataTable("pasajeros", data)} />
        );
      case "avión":
        return (
          <AirplaneForm onSubmit={(data) => addDataTable("avion", data)} />
        );
      case "reservas":
        return (
          <ReservationForm
            onSubmit={(data) => addDataTable("reservas", data)}
          />
        );
      default:
        return null;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen lg:justify-self-end p-3 w-screen mt-[rem] border-4 sm:mt-[]">
      <Sidebar isOpen={isSidebarOpen} setActiveTab={setActiveTab} />
      <div className={`flex items-center w-full`}>
        <div className="container border-2 bg-slate-900 opacity-70 mx-auto sm:w-[65%] p-2 sm:p-0">
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
                className={"absolute end-0 sm:static  top-6"}
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
              {renderForm()}
            </div>
            <div className="w-[100%] mx-auto sm:w-[50%]">
              <h2 className="text-2xl font-bold mb-2">
                Datos de{" "}
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
