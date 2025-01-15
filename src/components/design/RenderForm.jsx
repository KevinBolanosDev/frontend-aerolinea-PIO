// Import Forms
import AirlineFormPage from "../../pages/AirlineForm.jsx";
import AirportForm from "../../pages/AirportForm.jsx";
import EmployeesForm from "../../pages/EmployeesForm.jsx";
import FeeForm from "../../pages/FeeForm.jsx";
import FlightForm from "../../pages/FlightForm.jsx";
import FlightCrewForm from "../../pages/FlightCrewForm.jsx";
import MaintenanceForm from "../../pages/MaintenanceForm.jsx";
import PassengerForm from "../../pages/PassengerForm.jsx";
import AirplaneFormPage from "../../pages/AirplaneForm.jsx";
import ReservationForm from "../../pages/ReservationForm.jsx";

// Renderizamos cada formulario dinamicamente
export default function RenderForm({ addDataTable, activeTab }){
    switch (activeTab) {
      case "aerolinea":
        return (
          <AirlineFormPage onSubmit={(data) => addDataTable("aerolinea", data)} />
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
          <AirplaneFormPage onSubmit={(data) => addDataTable("avion", data)} />
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