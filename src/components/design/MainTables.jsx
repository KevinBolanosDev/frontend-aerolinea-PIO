import React from "react";
import RenderForm from "./RenderForm";

const MainContent = ({ activeTab, addDataTable }) => {
  return (
    <div className="pt-8 sm:pt-[5rem] h-screen bg-slate-900 mx-auto sm:grid-cols-1 gap-4">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-3xl mx-auto font-bold mt-6">
          Formulario {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h2>
      </div>
      <RenderForm activeTab={activeTab} addDataTable={addDataTable} />
    </div>
  );
};

export default MainContent;
