import React from "react";

export default function Pog() {
  return (
    <div>
      <h2 className="text-3xl mb-6 md:text-3xl font-bold bg-[#CBDCEB] rounded-full px-6 py-2 inline-block">
        POG
      </h2>

      {/* Outer Container */}
      <div className="bg-[#CBDCEB] h-[531px] p-4 md:p-6 rounded-xl space-y-6 overflow-x-auto">
        {/* OD + OS Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* OD */}
          <div className="w-full">
            <h3 className="bg-[#6D94C5] ml-30 w-full max-w-[580px] h-[61px] mx-auto text-3xl text-center font-bold py-2 rounded mb-2">
              OD
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-center min-w-[400px]">
                <thead>
                  <tr className="text-[20px] font-light">
                    <th className="w-[15%] text-left"></th>
                    <th className="w-[20%]">SPH</th>
                    <th className="w-[20%]">CYL</th>
                    <th className="w-[20%]">AXIS</th>
                    <th className="w-[25%]">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {["POG1", "POG2"].map((row) => (
                    <tr key={row}>
                      <td className="text-left text-2xl p-3 font-semibold">{row}</td>
                      {Array.from({ length: 4 }).map((_, i) => (
                        <td key={i} className="px-2">
                          <input
                            type="text"
                            className="w-full h-[44px] p-2 rounded bg-white border border-gray-300 text-black"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* OS */}
          <div className="w-full">
            <h3 className="bg-[#6D94C5] text-3xl w-full ml-30 max-w-[580px] h-[61px] mx-auto text-center font-bold py-2 rounded mb-2">
              OS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-center min-w-[400px]">
                <thead>
                  <tr className="text-[20px] font-light">
                    <th className="w-[15%] text-left"></th>
                    <th className="w-[20%]">SPH</th>
                    <th className="w-[20%]">CYL</th>
                    <th className="w-[20%]">AXIS</th>
                    <th className="w-[25%]">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {["DRY", "WET"].map((row) => (
                    <tr key={row}>
                      <td className="text-left text-2xl p-3 font-semibold">{row}</td>
                      {Array.from({ length: 4 }).map((_, i) => (
                        <td key={i} className="px-2">
                          <input
                            type="text"
                            className="w-full h-[44px] p-2 rounded bg-white border border-gray-300 text-black"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Extra Table aligned with OD/OS */}
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse text-center min-w-[400px]">
            <thead>
              <tr>
                <th className="w-[15%] text-left"></th>
                <th className="rounded-full mb-2">Type</th>
                <th className="w-[20%]">How Old</th>
                <th className="w-[20%]"></th>
                <th className="w-[25%]">Done By</th>
              </tr>
            </thead>
            <tbody>
              {["POG1", "POG2"].map((row) => (
                <tr key={row}>
                  <td className="text-left text-2xl font-semibold p-3">{row}</td>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <td key={i} className="px-2">
                      <input
                        type="text"
                        className="w-full h-[44px] p-2 rounded bg-white border border-gray-300 text-black"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
