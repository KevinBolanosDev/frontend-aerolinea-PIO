import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Design components
import Sidebar from "./components/design/Sidebar.jsx";
import Header from "./components/design/Navbar.jsx";
import MainContent from "./components/design/MainTables.jsx";
import Register from "./components/auth/Register.jsx";
import LoginPage from "./components/auth/Login.jsx"
// Context provider
import AppProvider from "./context/AppContext.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoutes.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState(""); // Estado de menu pestaña activa/inactiva
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado para el menu ocultar/mostrar
  // const [airlineData, setAirlineData] = useState([]);

  // Para agregar datos del formulario
  const addDataTable = (type, newData) => {
    setData((prevData) => ({
      ...prevData,
      [type]: [...prevData[type], newData],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
          <Route
            path="/tables"
            element={
              <div className="">
                <Header
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
                <MainContent
                  activeTab={activeTab}
                  addDataTable={addDataTable}
                  />
                <Sidebar
                  isOpen={isSidebarOpen}
                  setActiveTab={setActiveTab}
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                  />
              </div>
            }
            ></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
