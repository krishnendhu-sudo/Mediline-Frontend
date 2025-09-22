import React from "react";

export default function Examination() {
  const rows = [
    "ORBIT",
    "LIDS AND ADNEXA",
    "CONJUNCTIVA",
    "SCLERA",
    "CORNEA",
    "ANTERIOR CHAMBER",
    "PUPIL",
    "IRIS",
    "LENS",
    "IOP",
    "FUNDUS",
    "EOM",
    "DUCT",
    "OTHER FINDINGS",
    "BP",
    "FBS",
    "PPBS",
    "HBA1C",
    "Nutrition Health", // special row
    "Axial Length", // special row
  ];

  return (
    <div>
      <div className="max-w-8xl mx-auto p-6 space-y-6">
        {/* Title */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl md:text-3xl font-bold text-[#14416D] bg-[#CBDCEB] rounded-full px-4 py-2">
            Examination
          </h2>

          <div className="flex flex-wrap gap-3">
            {["OD", "OS", "OU", "NORMAL"].map((btn, i) => (
              <button
                key={i}
                className="px-6 py-2 text-2xl rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-[#CBDCEB] p-6 rounded-xl overflow-x-auto">
          <table className="w-full border-collapse text-center min-w-[600px]">
            <thead>
              <tr>
                <th className="w-1/3 h-61px text-center p-3"></th>
                <th className="bg-[#6D94C5] text-[32px]  py-2 px-6 rounded-t font-bold">
                  OD
                </th>
                <th className="w-6"  aria-hidden="true"></th>
                <th className="bg-[#6D94C5] text-[32px]  py-2 px-6 rounded-t font-bold">
                  OS
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) =>
                row === "Nutrition Health" ? (
                  // Nutrition Health row
                  <tr key={row}>
                    <td className="text-left text-3xl p-3">{row}</td>
                    <td className="p-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-left">
                          Height
                        </label>
                        <input
                          type="text"
                          className="w-full h-[44px] p-2 rounded-full bg-white text-black"
                        />
                      </div>
                    </td>
                    <td aria-hidden="true"></td>
                    <td className="p-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-left">
                          Weight
                        </label>
                        <input
                          type="text"
                          className="w-full h-[44px] p-2 rounded-full bg-white text-black"
                        />
                      </div>
                    </td>
                  </tr>
                ) : row === "Axial Length" ? (
                  // Axial Length row
                  <tr key={row}>
                    <td className="text-left text-3xl p-3">{row}</td>
                    <td className="p-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-left">
                          RE
                        </label>
                        <input
                          type="text"
                          className="w-full h-[44px] p-2 rounded-full bg-white text-black"
                        />
                      </div>
                    </td>
                    <td aria-hidden="true"></td>
                    <td className="p-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-left">
                          LE
                        </label>
                        <input
                          type="text"
                          className="w-full h-[44px] p-2 rounded-full bg-white text-black"
                        />
                      </div>
                    </td>
                  </tr>
                ) : (
                  // Normal rows
                  <tr key={row}>
                    <td className="text-left text-3xl p-3">{row}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="w-full h-[44px] p-2 rounded-full bg-white text-black"
                      />
                    </td>
                    <td aria-hidden="true"></td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="w-full h-[44px] p-2 rounded-full bg-white text-black"
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
