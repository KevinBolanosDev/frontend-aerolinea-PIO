import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ isSidebarOpen, toggleSidebar }) {
  // Context
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Eliminar la cookie del token
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    logout();
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-2xl shadow-slate-700 z-50 p-4 border-b border-white/40">
      <div className="max-w-screen px-6">
        {/* Contenedor de botones */}
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* Cuando isSidebarOpen es true, aparece el boton cerrar tablas y desaparece el de cerrar sesion */}
          {isSidebarOpen ? (
            <>
              <button
                onClick={toggleSidebar}
                className="w-full sm:w-40 bg-cyan-600/90 text-white text-lg py-2 px-4 rounded-lg font-bold hover:bg-cyan-900 transition-colors duration-200 uppercase backdrop-blur-sm"
              >
                Abrir tablas
              </button>
              <button
                onClick={handleLogout}
                className="w-full sm:w-40 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg duration-200 uppercase backdrop-blur-sm"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <button
              onClick={toggleSidebar}
              className="w-full sm:w-44 bg-cyan-600/90 text-white text-lg py-2 px-4 rounded-lg hover:bg-cyan-900 transition-colors duration-200 uppercase backdrop-blur-sm font-bold"
            >
              Cerrar tablas
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
