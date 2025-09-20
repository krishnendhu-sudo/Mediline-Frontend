import React from "react";

export default function ArReading() {
  return (
    <div>
      <div className="max-w-8xl mx-auto p-6 space-y-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold bg-[#CBDCEB] rounded-full px-4 py-2 inline-block">
          AR Readings
        </h2>

        {/* Main Content: Tables + Action Buttons */}
        <div className="bg-[#CBDCEB] p-6 rounded-xl">
          {/* Tables Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* OD Section */}
            <div className="w-full">
              <h3 className="bg-[#6D94C5] text-white text-center font-bold py-2 rounded ml-36 mb-2 w-[540px] mx-auto">
                OD
              </h3>
              <table className="w-full table-fixed border-collapse text-center">
                <thead>
                  <tr className="text-sm font-light">
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
                          className="w-full h-[44px] p-1 rounded bg-white text-black"
                        />
                      </td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full h-[44px] p-1 rounded bg-white text-black"
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="text-left font-semibold pr-2">PACHY</td>
                    <td colSpan={4} className="px-2">
                      <input
                        type="text"
                        className="w-full h-[44px] p-1 rounded bg-white text-black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* OS Section */}
            <div className="w-full">
              <h3 className="bg-[#6D94C5] text-white text-center font-bold py-2 rounded mb-2 ml-36 w-[540px] mx-auto">
                OS
              </h3>
              <table className="w-full table-fixed border-collapse text-center">
                <thead>
                  <tr className="text-sm font-light">
                    <th className="p-2 w-1/5 text-left"></th>
                    <th className="p-2 w-1/5">SPH</th>
                    <th className="p-2 w-1/5">CYL</th>
                    <th className="p-2 w-1/5">AXIS</th>
                    <th className="p-2 w-1/5">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {["DRY", "WET"].map((row, i) => (
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
                          className="w-full h-[44px] p-1 rounded bg-white text-black"
                        />
                      </td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full h-[44px] p-1 rounded bg-white text-black"
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="text-left font-semibold pr-2">PACHY</td>
                    <td colSpan={4} className="px-2">
                      <input
                        type="text"
                        className="w-full h-[44px] p-1 rounded bg-white text-black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-between mt-6 items-start">
  {/* Left Side - 3 buttons (2 on top, 1 below) */}
  <div className="grid ml-36 grid-cols-2 gap-3">
    <button className="flex items-center gap-2 px-3 text-sm rounded-full bg-[#48D56D] text-white font-medium shadow hover:bg-green-600 transition w-62 h-8">
      <input type="checkbox" className="w-4 h-4 rounded-full accent-white flex-shrink-0" />
      <span className="text-left">Cyclo Refraction Please</span>
    </button>
    <button className="flex items-center gap-2 px-3 text-sm rounded-full bg-[#48D56D] text-white font-medium shadow hover:bg-green-600 transition w-62 h-8">
      <input type="checkbox" className="w-4 h-4 rounded-full accent-white flex-shrink-0" />
      <span className="text-left">Atropine Refraction Please</span>
    </button>
    <button className="flex items-center gap-2 px-3 text-sm rounded-full bg-[#48D56D] text-white font-medium shadow hover:bg-green-600 transition w-62 h-8">
      <input type="checkbox" className="w-4 h-4 rounded-full accent-white flex-shrink-0" />
      <span className="text-left">Wet AR Please</span>
    </button>
  </div>

  {/* Right Side - 2 buttons (same size, single row) */}
  <div className="grid mr-8 grid-cols-2 gap-3">
    <button className="flex items-center gap-2 px-3 text-sm rounded-full bg-[#48D56D] text-white font-medium shadow hover:bg-green-600 transition w-62 h-8">
      <input type="checkbox" className="w-4 h-4 rounded-full accent-white flex-shrink-0" />
      <span className="text-left">Refraction Next Visit Please</span>
    </button>
    <button className="flex items-center gap-2 px-3 text-sm rounded-full bg-[#48D56D] text-white font-medium shadow hover:bg-green-600 transition w-62 h-8">
      <input type="checkbox" className="w-4 h-4 rounded-full accent-white flex-shrink-0" />
      <span className="text-left">PMT Please</span>
    </button>
  </div>
</div>


        </div>
      </div>
    </div>
  );
}
