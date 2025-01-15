import React from 'react';

const menuTables = [
  'aerolinea', 'aeropuerto', 'empleados', 'tarifa', 'vuelo',
  'tripulación de vuelo', 'mantenimiento', 'pasajeros', 'avión', 'reservas'
];

// Se exportan también las props para el sidebar dinamico
export default function Sidebar({ isOpen, setActiveTab, isSidebarOpen, toggleSidebar }) {

  return (
    <div className={`fixed pt-20 z-10 sm:overflow-y-auto shadow-2xl shadow-slate-600  left-0 top-0 h-full sm:w-[30%] text-white backdrop-blur-sm bg-slate-900 opacity-80 transition-transform rounded-xl duration-300 ease-in-out transform ${!isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-5">
        <h2 className="text-2xl font-bold pl-[30%] mb-4">Tablas</h2>
        <ul className='flex flex-col justify-end' >
          {menuTables.map((table) => (
            <li key={table} className="text-xl sm:text-2xl mb-1">
              <button
                onClick={() => setActiveTab(table)}
                className="w-[100%] sm:w-[70%] flex sm:mx-8 text-left py-1 pl-4 sm:py-2 my-1 rounded-lg hover:bg-cyan-800 transition-colors duration-200"
                >
                {table.charAt(0).toUpperCase() + table.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

