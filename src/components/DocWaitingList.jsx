import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function DoctorWaitingList() {
  // Card Data
  const cards = [
    { count: 1, label: "READY TO SEE", color: "bg-red-300" },
    { count: 0, label: "AT AR ROOM", color: "bg-blue-300" },
    { count: 0, label: "DILATATION", color: "bg-yellow-300" },
    { count: 0, label: "RE REFRACTION", color: "bg-cyan-300" },
    { count: 0, label: "COUNSELLING", color: "bg-purple-300" },
    { count: 0, label: "CONSULTED", color: "bg-pink-300" },
  ];

  // Table Headers
  const tableHeaders = [
    "OP Number",
    "Patient name",
    "Age",
    "Sex",
    "In Time",
    "Token Number",
    "Waiting Time",
    "Type",
    "Fee",
    "Scheme",
    "Category",
    "Patient Remarks",
  ];

  // Patient Data
  const patients = [
    {
      opNumber: "LVSERD2025/I96615",
      name: "SACHIN",
      age: "55 YEARS",
      sex: "M",
      inTime: "11:28:24",
      token: 2,
      waiting: "0h:32m",
      type: "NEW",
      fee: "300.00",
      scheme: "GENERAL",
      category: "CONSULTATION",
      remarks: "",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="w-full max-w-6xl p-8">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
          DOCTOR / Waiting List
        </h2>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} rounded-lg p-6 flex justify-between items-center shadow-md`}
            >
              <div>
                <p className="text-4xl font-bold text-black">{item.count}</p>
                <p className="text-lg font-semibold">{item.label}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>
          ))}
        </div>

        {/* Doctor Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white text-sm">
                {tableHeaders.map((head, i) => (
                  <th key={i} className="px-4 py-2 text-left">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {patients.map((p, i) => (
                <tr key={i} className="bg-green-600 text-white text-sm">
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
      </div>
    </div>
  );
}
