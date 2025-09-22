import React from "react";

export default function Refraction() {
  return (
    <div className="max-w-8xl mx-auto p-4 md:p-6">
      {/* Title */}
      <div className="flex justify-start mb-6">
        <h1 className="px-4 py-2 bg-[#CBDCEB] text-3xl md:text-3xl rounded-full font-bold">
          REFRACTION
        </h1>
      </div>

      {/* Table Section */}
      <div className="bg-[#CBDCEB] h-auto p-10 md:p-6 rounded-xl">
        <div className="flex flex-col md:flex-row md:gap-6">
          {/* OD Section */}
          <div className="flex-1  mb-6 md:mb-0">
            <h3 className="bg-[#6D94C5] w-[513px] ml-34 h-[61px] text-[32px] md:text-3xl text-center font-bold py-2 rounded mb-2">
              OD
            </h3>
            <table className="w-full table-fixed border-collapse text-center">
              <thead>
                <tr className="text-xl md:text-[20px] font-light">
                  <th className="p-2 text-left"></th>
                  <th className="p-2">VA</th>
                  <th className="p-2">SPH</th>
                  <th className="p-2">CYL</th>
                  <th className="p-2">AXIS</th>
                </tr>
              </thead>
              <tbody>
                {["DIST", "NEAR", "IPD"].map((row, i) => (
                  <tr key={`od-${row}-${i}`}>
                    <td className="text-left text-2xl md:text-2xl p-2 font-semibold">{row}</td>
                    {Array.from({ length: 4 }).map((_, j) => (
                      <td key={j} className="p-1">
                        <input
                          type="text"
                          className="w-full h-10 md:h-11 p-1 rounded bg-white text-black"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

           
          </div>

          {/* OS Section */}
          <div className="flex-1">
            <h3 className="bg-[#6D94C5] h-[61px] text-[32px] md:text-3xl text-center font-bold py-2 rounded mb-2 w-[513px] ml-34">
              OS
            </h3>
            <table className="w-full table-fixed border-collapse text-center">
              <thead>
                <tr className="text-xl md:text-[20px] font-light">
                  <th className="p-2 text-left"></th>
                  <th className="p-2">VA</th>
                  <th className="p-2">SPH</th>
                  <th className="p-2">CYL</th>
                  <th className="p-2">AXIS</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 3 }).map((_, i) => (
                  <tr key={`os-row-${i}`}>
                    <td className="p-1"></td> 
                    {Array.from({ length: 4 }).map((_, j) => (
                      <td key={j} className="p-1">
                        <input
                          type="text"
                          className="w-full h-10 md:h-11 p-1 rounded bg-white text-black"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

         {/* Checkbox below OD table */}
            <div className="flex text-xl p-8 ml-30 items-center mt-2">
              <input type="checkbox" id="odCheckbox" className="mr-2" />
              <label htmlFor="odCheckbox" className="text-black font-medium">
                Copy RE Values To LE
              </label>
            </div>
      </div>
    </div>
  );
}
