import React from "react";

export default function ArReading() {
  return (
    <div className="max-w-8xl mx-auto p-4 md:p-6 space-y-6">
      {/* Title */}
      <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold bg-[#CBDCEB] rounded-full px-4 py-2 inline-block">
        AR Readings
      </h2>

      {/* Tables Section */}
      <div className="bg-[#CBDCEB] p-4 md:p-6 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* OD Section */}
          <div className="w-full">
            <h3 className="bg-[#6D94C5] text-[32px] h-[61px] ml-32 text-center font-bold py-2 rounded mb-2 w-full sm:w-[540px] mx-auto">
              OD
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-center min-w-[400px]">
                <thead>
                  <tr className="text-xl font-light">
                    <th className="p-2 w-1/5 text-left"></th>
                    <th className="p-2 w-1/5">SPH</th>
                    <th className="p-2 w-1/5">CYL</th>
                    <th className="p-2 w-1/5">AXIS</th>
                    <th className="p-2 w-1/5">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {["DRY", "WET"].map((row, i) => (
                    <tr key={`od-${row}-${i}`}>
                      <td className="text-left p-2 text-xl">{row}</td>
                      {["SPH", "CYL", "AXIS", "STATUS"].map((_, j) => (
                        <td key={j} className="p-2">
                          <input
                            type="text"
                            className="w-full h-[40px] sm:h-[44px] p-1 rounded bg-white text-black"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="text-left text-xl pr-2">PACHY</td>
                    <td colSpan={4} className="p-2">
                      <input
                        type="text"
                        className="w-full h-[40px] sm:h-[44px] p-1 rounded bg-white text-black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* OS Section */}
          <div className="w-full">
            <h3 className="bg-[#6D94C5] ml-32 text-[32px] h-[61px] text-center font-bold py-2 rounded mb-2 w-full sm:w-[540px] mx-auto">
              OS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-center min-w-[400px]">
                <thead>
                  <tr className="text-xl font-light">
                    <th className="p-2 w-1/5 text-left"></th>
                    <th className="p-2 w-1/5">SPH</th>
                    <th className="p-2 w-1/5">CYL</th>
                    <th className="p-2 w-1/5">AXIS</th>
                    <th className="p-2 w-1/5">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 2 }).map((_, i) => (
                    <tr key={`os-row-${i}`}>
                      <td className="p-2"></td> {/* empty for alignment */}
                      {["SPH", "CYL", "AXIS", "STATUS"].map((_, j) => (
                        <td key={j} className="p-2">
                          <input
                            type="text"
                            className="w-full h-[40px] sm:h-[44px] p-1 rounded bg-white text-black"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-2"></td>
                    <td colSpan={4} className="p-2">
                      <input
                        type="text"
                        className="w-full h-[40px] sm:h-[44px] p-1 rounded bg-white text-black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
