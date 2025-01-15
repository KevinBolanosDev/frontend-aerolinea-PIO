import { useState } from "react";

export default function UpdateButton({ item, onEdit }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleUpdate = async () => {
    if (item) {
      try {
        const result = await onEdit(item);
        setModalOpen(false);
        if (result) {
          setSuccessModal(true);
          // Ocultar el mensaje de éxito después de 3 segundos
          setTimeout(() => setSuccessModal(false), 3000);
        }
      } catch (error) {
        console.error("Error al actualizar el registro:", error);
      }
    } else {
      console.error("Item no válido:", item);
    }
  };

  return (
    <>
      {/* Botón principal para abrir el modal */}
      <button
        onClick={() => setModalOpen(true)}
        className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-1 px-2 rounded mr-2"
      >
        Editar
      </button>

      {/* Modal de actualización */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-slate-900 p-6 rounded-md w-96 text-center">
            <h2 className="text-lg font-semibold mb-4">
              ¿Deseas actualizar este registro?
            </h2>
            <div className="flex justify-around">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      )}

          {/* Modal de éxito Nota: pendiente revisar el modal de confirmación */}
          {successModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-green-500 text-white p-4 rounded-md w-96 text-center">
            <h2 className="text-lg font-semibold">
              Registro actualizado exitosamente
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
