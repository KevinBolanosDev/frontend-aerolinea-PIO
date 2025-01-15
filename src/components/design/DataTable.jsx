import React from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

export default function DataTable({ data, onDelete, onEdit, idField, successModal, setSuccessModal }) {
  if (!data || data.length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  console.log(data);
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto scrollbar-none h-[31rem]">
      <table className="min-w-max bg-zinc-900">
        <thead>
          <tr className="bg-slate-500 border-2 uppercase text-sm leading-normal">
            {headers.map((header, id) => (
              <th key={id} className="py-3 px-6 text-left">
                {header}
              </th>
            ))}
            <th className="py-3 px-6 text-left"></th>
          </tr>
        </thead>
        <tbody className="hover:text-neutral-300 text-white text-sm font-light">
          {data.map((row, index) => (
            <tr
              key={row[idField]}
              className="border-2 border-gray-200 hover:bg-slate-400"
            >
              {headers.map((header, cellIndex) => (
                <td
                  key={cellIndex}
                  className="py-3 px-6 text-left whitespace-nowrap"
                >
                  {typeof row[header] === "object" && row[header] !== null
                  ? JSON.stringify(row[header])
                : row[header]
                }
                </td>
              ))}
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <UpdateButton item={row} idField={idField} onEdit={onEdit}  successModal={successModal} setSuccessModal={setSuccessModal} />
                <DeleteButton item={row} idField={idField} onDelete={onDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
