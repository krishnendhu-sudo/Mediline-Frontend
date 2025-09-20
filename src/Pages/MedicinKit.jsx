import React, { useState } from "react";

const MedicinKit = () => {
  const [selectedHeader, setSelectedHeader] = useState("Medicine"); // default selected
  const headers = ["Medicine", "Kit", "Special instruction"];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-8xl mx-auto">
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-bold mb-4">PRESCRIBE MEDICINE</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 w-full max-w-3xl">
        {headers.map((header) => (
          <div
            key={header}
            onClick={() => setSelectedHeader(header)}
            className={`flex-1 text-center px-4 py-2 cursor-pointer text-base md:text-xl font-semibold border rounded-full
              ${
                selectedHeader === header
                  ? "bg-[#6D94C5] text-white"
                  : "bg-white text-black"
              }
            `}
          >
            {header}
          </div>
        ))}
      </div>

      {/* Diagnosis & Table Section */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Diagnosis Section */}
          <div className="w-full md:w-1/3 p-4 rounded bg-[#CBDCEB]">
            <p className="font-semibold">
              ALLERGIC CONJUNCTIVITIS <br />
              ALLERGIC CONJUNCTIVITIS (1) <br />
              FEVER <br />
              FEVER KIT <br />
              HEADACHE <br />
              HEADACHE AGE (16-25YRS) <br />
              HEADACHE AGE (26-60YRS) <br />
              HEADACHE AGE (8-15YRS) <br />
              KIT NAME <br />
              TEST FAV <br />
              TEST KIT
            </p>
          </div>

          {/* Medicine Table + Buttons */}
          <div className="w-full md:w-2/3 overflow-x-auto">
            <div className="flex flex-col">
              {/* Table */}
              <table className="w-full rounded-lg">
                {/* Table Header */}
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-4 py-3">MEDICINE</th>
                    <th className="px-4 py-3">DOSAGE</th>
                    <th className="px-4 py-3">DURATION</th>
                    <th className="px-4 py-3">ROUTE</th>
                    <th className="px-4 py-3">ROUTE DESC</th>
                  </tr>
                </thead>

                {/* Table Body (5 rows) */}
                <tbody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="text-center">
                      <td className="px-4 py-3">COMBIPAT EYE DROPS</td>
                      <td className="px-4 py-3">2 TIMES PER DAY</td>
                      <td className="px-4 py-3">1 MONTH</td>
                      <td className="px-4 py-3">BOTH EYES</td>
                      <td className="px-4 py-3">BOTH EYES BOTH EYES</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              
            </div>
          </div>
        </div>
      </div>

      {/* Buttons (Right aligned) */}
              <div className="flex justify-end gap-4 mt-4">
                <button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600">
                  Print
                </button>
                <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600">
                  Close
                </button>
              </div>
    </div>
  );
};

export default MedicinKit;
