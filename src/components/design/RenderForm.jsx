// Import Forms
import AirlineFormPage from "../../pages/AirlineForm.jsx";
import AirportForm from "../AirportForm.jsx";
import EmployeesForm from "..//EmployeesForm.jsx";
import FeeForm from "../FeeForm.jsx";
import FlightForm from "../FlightForm.jsx";
import FlightCrewForm from "../FlightCrewForm.jsx";
import MaintenanceForm from "../MaintenanceForm.jsx";
import PassengerForm from "../PassengerForm.jsx";
import AirplaneForm from "../AirPlaneForm.jsx";
import ReservationForm from "..//ReservationForm.jsx";

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