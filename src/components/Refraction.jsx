import React from "react";

export default function Refraction() {
  return (
    <div className="max-w-8xl">
      <div className="max-w-8xl mx-auto h p-6 space-y-6">
        {/* Title */}
        <div className="flex gap-3 mb-4">
          <h1 className="px-4 py-2 bg-[#CBDCEB]  rounded-full  font-bold">
            REFRACTION
          </h1>
        </div>

        {/* Table Section */}
        <div className="bg-[#CBDCEB] h-[501px] p-6 rounded-xl">
          <div className="grid grid-cols-2 gap-6">
            {/* OD Section */}
            <div>
              <h3 className="bg-[#6D94C5] h-[61px] text-white text-center font-bold py-2 rounded mb-2">
                OD
              </h3>
              <table className="w-full table-fixed border-collapse text-center">
                <thead>
                  <tr className="text-sm gap-10 p-10 font-light">
                    <th className=" p-2 w-1/5 text-left"></th>
                    <th className="p-2 w-1/5">VA</th>
                    <th className="p-2 w-1/5">SPH</th>
                    <th className="p-2 w-1/5">CYL</th>
                    <th className="p-2 w-1/5">AXIS</th>
                  </tr>
                </thead>
                <tbody>
                  {["DIST", "NEAR", "IPD"].map((row, i) => (
                    <tr key={`od-${row}-${i}`}>
                      <td className="text-left p-5 font-semibold pr-2">{row}</td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full h-[44px] p-1 rounded bg-white text-black"
                        />
                      </td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full h-[44px] p-1 rounded bg-white text-black"
                        />
                      </td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full p-1 h-[44px] rounded bg-white text-black"
                        />
                      </td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full p-1 h-[44px] rounded bg-white text-black"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* OS Section */}
            <div>
              <h3 className="bg-[#6D94C5] h-[61px] text-white text-center font-bold py-2 rounded mb-2">
                OS
              </h3>
              <table className="w-full table-fixed border-collapse text-center">
                <thead>
                  <tr className="text-sm gap-10 p-10 font-light">
                    <th className=" p-2 w-1/5 text-left"></th>
                    <th className="p-2 w-1/5">VA</th>
                    <th className="p-2 w-1/5">SPH</th>
                    <th className="p-2 w-1/5">CYL</th>
                    <th className="p-2 w-1/5">AXIS</th>
                  </tr>
                </thead>
                <tbody>
                  {["DIST", "NEAR", "IPD"].map((row, i) => (
                    <tr key={`os-${row}-${i}`}>
                      <td className="text-left p-5 font-semibold pr-2">{row}</td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full h-[44px] p-1 rounded bg-white text-black"
                        />
                      </td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full h-[44px] p-1 rounded bg-white text-black"
                        />
                      </td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full p-1 h-[44px] rounded bg-white text-black"
                        />
                      </td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full p-1 h-[44px] rounded bg-white text-black"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
