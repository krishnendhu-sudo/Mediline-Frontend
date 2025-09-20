import React from "react";

export default function Pog() {
  return (
    <div>
      <h2 className="text-2xl mb-6 md:text-3xl font-bold bg-[#CBDCEB] rounded-full px-6 py-2 inline-block">
        POG
      </h2>

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
                <tr className="text-sm font-light">
                  <th className="p-2 w-1/5 text-left"></th>
                  <th className="p-2 w-1/5" scope="col">
                    SPH
                  </th>
                  <th className="p-2 w-1/5" scope="col">
                    CYL
                  </th>
                  <th className="p-2 w-1/5" scope="col">
                    AXIS
                  </th>
                  <th className="p-2 w-1/5" scope="col">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {["POG1", "POG2"].map((row, i) => (
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
                <tr className="text-sm font-light">
                  <th className="p-2 w-1/5 text-left"></th>
                  <th className="p-2 w-1/5" scope="col">
                    SPH
                  </th>
                  <th className="p-2 w-1/5" scope="col">
                    CYL
                  </th>
                  <th className="p-2 w-1/5" scope="col">
                    AXIS
                  </th>
                  <th className="p-2 w-1/5" scope="col">
                    STATUS
                  </th>
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
              </tbody>
            </table>
          </div>
        </div>

          <div className="mt-4 w-8xl max-w-full">
  {/* Column Headings */}
  <div className="grid grid-cols-5 gap-2 mb-1 items-center font-semibold text-center">
    <div className="text-left"> </div> {/* Placeholder for row heading */}
    {["Type", "How Old", " ", "Done BY"].map((col) => (
      <div key={col}>{col}</div>
    ))}
  </div>

  {/* Rows with row headings */}
  {["POG1", "POG2"].map((rowLabel, rowIndex) => (
    <div key={rowIndex} className="grid grid-cols-5 gap-3 mb-1 items-start">
      {/* Row heading */}
      <div className="font-semibold text-left">{rowLabel}</div>

      {/* 4 input boxes */}
      {Array.from({ length: 4 }).map((_, colIndex) => (
        <input
          key={`${rowIndex}-${colIndex}`}
          type="text"
          placeholder={`Input`}
          className="w-full h-[44px] p-2 rounded bg-white border border-gray-300 text-black"
        />
      ))}
    </div>
  ))}
</div>



      </div>
    </div>
  );
}
