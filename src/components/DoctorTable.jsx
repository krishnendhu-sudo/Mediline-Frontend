import React from "react";

export default function DoctorTable({ headers, patients }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-[1920px] max-w-full border-collapse">
        <thead>
          <tr className="bg-[#000000C2] text-white text-sm">
            {headers.map((head, i) => (
              <th key={i} className="px-4 py-2 text-left">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients.map((p, i) => (
            <tr key={i} className="bg-[#0B9C73] text-white text-sm">
              <td className="px-4 py-2">{p.opNumber}</td>
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.age}</td>
              <td className="px-4 py-2">{p.sex}</td>
              <td className="px-4 py-2">{p.inTime}</td>
              <td className="px-4 py-2">{p.token}</td>
              <td className="px-4 py-2">{p.waiting}</td>
              <td className="px-4 py-2">{p.type}</td>
              <td className="px-4 py-2">{p.fee}</td>
              <td className="px-4 py-2">{p.scheme}</td>
              <td className="px-4 py-2">{p.category}</td>
              <td className="px-4 py-2">{p.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
