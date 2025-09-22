import React from "react";

export default function Visual() {
  return (
    <div>
      <div className="max-w-8xl mx-auto p-4 md:p-6 space-y-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold  bg-[#CBDCEB] rounded-full px-4 py-2 inline-block">
          Visual Acuity
        </h2>

        {/* Table Section */}
        <div className="bg-[#CBDCEB] p-4 md:p-6 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* OD Section */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <label className="flex items-center gap-2 text-2xl sm:text-base">
                  <input type="checkbox" />
                  None
                </label>
                <h3 className="bg-[#6D94C5] h-[61px] text-[32px] font-semibold  w-full sm:max-w-[400px] md:max-w-[547px]  sm:h-[61px] text-lg sm:text-2xl text-center py-2 rounded">
                  OD
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-collapse text-center min-w-[350px]">
                  <thead>
                    <tr className="text-lg ">
                      <th className="p-2 text-left"></th>
                      <th className="p-2 text-left">Distance</th>
                      <th className="p-2">Near</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Unaided", "With Existing Glass"].map((row, i) => (
                      <tr key={`od-${row}-${i}`}>
                        <td className="text-left p-3 sm:p-5 text-lg pr-2">{row}</td>
                        {Array(2)
                          .fill("")
                          .map((_, j) => (
                            <td key={j} className="px-2">
                              <input
                                type="text"
                                className="w-full h-[40px] sm:h-[44px] p-1 rounded-full bg-white text-black"
                              />
                            </td>
                          ))}
                      </tr>
                    ))}

                    <tr>
                      <td className="text-left text-lg pl-5">With PH</td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full h-[40px] sm:h-[44px] p-2 sm:p-4 rounded-full bg-white text-black"
                        />
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* OS Section */}
            <div>
              <h3 className="bg-[#6D94C5] ml-30 font-semibold w-full h-[61px] sm:max-w-[400px] md:max-w-[547px]  sm:h-[61px]  text-lg sm:text-2xl text-center font-[32px] py-2 rounded mb-2 mx-auto">
                OS
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-collapse text-center min-w-[350px]">
                  <thead>
                    <tr className="text-lg">
                      <th className="p-2 text-left"></th>
                      <th className="p-2 text-left">Distance</th>
                      <th className="p-2">Near</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Unaided", "With Existing Glass"].map((row, i) => (
                      <tr key={`os-${row}-${i}`}>
                        <td className="text-left text-lg p-3 sm:p-5 pr-2">{row}</td>
                        {Array(2)
                          .fill("")
                          .map((_, j) => (
                            <td key={j} className="px-2">
                              <input
                                type="text"
                                className="w-full h-[40px] sm:h-[44px] p-1 rounded-full bg-white text-black"
                              />
                            </td>
                          ))}
                      </tr>
                    ))}

                    <tr>
                      <td className="text-left text-lg pl-5">With PH</td>
                      <td className="px-2">
                        <input
                          type="text"
                          className="w-full h-[40px] sm:h-[44px] p-1 rounded-full bg-white text-black"
                        />
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Tonometry Section */}
          <div>
            <h2 className="text-3xl sm:text-xl font-semibold mt-10 sm:mt-20 text-gray-800 mb-2">Tonometry</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr>
                    <th className="p-2 text-left w-16"></th>
                    {["NCT", "GAT", "CCT"].map((type) => (
                      <th key={type} className="p-2 text-[32px] text-center font-semibold text-gray-800">
                        {type}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {["OD", "OS"].map((eye) => (
                    <tr key={eye}>
                      <td className="p-2 text-[32px] font-medium text-gray-700 text-center">{eye}</td>
                      {["NCT", "GAT", "CCT"].map((type) => (
                        <td key={type} className="p-2">
                          <input
                            className="w-full bg-white rounded-xl px-2 py-2 sm:py-3"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Color Vision & NCT Machine Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Color Vision */}
            <div>
              <h3 className="text-left py-2 text-3xl sm:text-xl font-bold mb-4">Color Vision</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-center min-w-[300px]">
                  <tbody>
                    <tr>
                      <td className="text-left text-[32px] p-2">OS</td>
                      <td className="p-2">
                        <input className="w-full bg-white rounded-xl px-2 py-2" />
                      </td>
                      <td className="p-2">
                        <input className="w-full bg-white rounded-xl px-2 py-2" />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left text-[32px] p-2">OD</td>
                      <td className="p-2">
                        <input className="w-full bg-white rounded-xl px-2 py-2" />
                      </td>
                      <td className="p-2">
                        <input className="w-full bg-white rounded-xl px-2 py-2" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* NCT Machine */}
            <div>
              <h3 className="text-left py-2 text-3xl sm:text-xl font-bold mb-4">NCT Machine</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-center min-w-[300px] border-collapse">
                  <tbody>
                    <tr>
                      <td className="text-left text-[32px] p-2">NCT Machine</td>
                      <td className="p-2">
                        <input className="w-full bg-white rounded-xl px-2 py-2 sm:py-3" />
                      </td>
                      <td className="p-2">
                        <label className="flex items-center text-2xl gap-2 justify-center">
                          <input type="checkbox" />
                          None
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left text-[32px] p-2">CS</td>
                      <td className="p-2">
                        <input placeholder="OS" className="w-full bg-white rounded-xl px-2 py-2" />
                      </td>
                      <td className="p-2">
                        <input placeholder="OD" className="w-full bg-white rounded-xl px-2 py-2" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
