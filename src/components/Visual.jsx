import React from "react";

export default function Visual() {
  return (
    <div>
      <div className="max-w-8xl mx-auto p-6 space-y-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#14416D]  bg-[#CBDCEB] rounded-full px-4 py-2 inline-block">
 Visual Acuity
</h2>
        {/* Table Section */}
        <div className="bg-[#CBDCEB] h-[1014px] p-6 rounded-xl">
          <div className="grid grid-cols-2 gap-6">
            {/* OD Section */}
            <div>
              <h3 className="bg-[#6D94C5] h-[61px] text-white text-2xl text-center font-bold py-2 rounded mb-2">
                OD
              </h3>
              <table className="w-full table-fixed border-collapse text-center">
                <thead>
                  <tr className="text-sm font-light">
                    <th className="p-2 w-1/5 text-left">None</th>
                    <th className="p-2 w-1/5 text-left">Distance</th>
                    <th className="p-2 w-1/5">Near</th>
                  
                    
                  </tr>
                </thead>
                <tbody>
                  {["Unaided","With Existing Glass"].map((row, i) => (
                    <tr key={`od-${row}-${i}`}>
                      <td className="text-left p-5 font-semibold pr-2">{row}</td>
                      {Array(2)
                        .fill("")
                        .map((_, j) => (
                          <td key={j} className="px-2">
                            <input
                              type="text"
                              className="w-full h-[44px] p-1 rounded-full bg-white text-black"
                            />
                          </td>
                        ))}
                    </tr>
                  ))}

                 {/* with PH */}
                  <tr>
                    <td className="text-left font-semibold pl-5">With PH</td>
                    <td colSpan={1} className="px-2">
                      <input
                        type="text"
                        className="w-full h-[44px] p-4 rounded-full bg-white text-black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* OS Section */}
            <div>
              <h3 className="bg-[#6D94C5] h-[61px] text-white text-2xl text-center font-bold py-2 rounded mb-2">
                OS
              </h3>
              <table className="w-full table-fixed border-collapse text-center">
                <thead>
                  <tr className="text-sm font-light">
                    <th className="p-2 w-1/5 text-left">None</th>
                    <th className="p-2 w-1/5 text-left">Distance</th>
                    <th className="p-2 w-1/5">Near</th>
                  </tr>
                </thead>
                <tbody>
                  {["Unaided", "With Existin Glass"].map((row, i) => (
                    <tr key={`os-${row}-${i}`}>
                      <td className="text-left p-5 font-semibold pr-2">{row}</td>
                      {Array(2)
                        .fill("")
                        .map((_, j) => (
                          <td key={j} className="px-2">
                            <input
                              type="text"
                              className="w-full h-[44px] p-1 rounded-full bg-white text-black"
                            />
                          </td>
                        ))}
                    </tr>
                  ))}

                  {/* With PH */}
                  <tr>
                    <td className="text-left font-semibold pl-5">With PH</td>
                    <td colSpan={1} className="px-2">
                      <input
                        type="text"
                        className="w-full h-[44px] p-1 rounded-full bg-white text-black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

           {/* Tonometry Section */}
      
      <div>
  <h2 className="text-xl font-bold mt-20 text-gray-800 mb-2">Tonometry</h2>
  <div className="overflow-x-auto">
    <table className="w-full">
      {/* Column Headings */}
      <thead>
        <tr>
          <th className="p-2 text-left w-16"></th>
          {["NCT", "GAT", "CCT"].map((type) => (
            <th key={type} className="p-2 text-center font-semibold text-gray-800">
              {type}
            </th>
          ))}
        </tr>
      </thead>

      {/* Row Headings (OD / OS) */}
      <tbody>
        {["OD", "OS"].map((eye) => (
          <tr key={eye}>
            <td className="p-2 font-medium text-gray-700 text-center">{eye}</td>
            {["NCT", "GAT", "CCT"].map((type) => (
              <td key={type} className="p-2">
                <input
                  placeholder=""
                  className="w-full bg-white rounded-xl px-2 py-3"
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
<div>
  <h2 className="text-2xl mt-5 font-bold text-gray-800 mb-4">Examination</h2>

  <div>
    <div className="grid grid-cols-2 gap-8">
      {/* ---------- COLOR VISION ---------- */}
      <div>
        <h3 className="  text-left py-2 text-xl font-bold mb-4">
          Color Vision
        </h3>

        <table className="w-full text-center ">
          
          <tbody>
            <tr>
              <td className="text-left font-semibold p-2">OS</td>
              
              <td className="p-2">
                <input className="w-full bg-white rounded-xl px-2 py-2" />
              </td>
              <td className="p-2">
                <input className="w-full bg-white rounded-xl px-2 py-2" />
              </td>
            </tr>
           <tr>
              <td className="text-left font-semibold p-2">OD</td>
              
              <td className="p-2">
                <input className="w-full bg-white rounded-xl px-1 py-2" />
              </td>
              <td className="p-2">
                <input className="w-full bg-white rounded-xl px-3 py-2" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* ---------- NCT MACHINE ---------- */}
      <div>
        <h3 className= " text-left py-2 text-xl font-bold mb-4">
          NCT Machine
        </h3>

        <table className="w-full text-center border-collapse">
          <tbody>
            {/* NCT Machine Row */}
            <tr>
              <td className="text-left font-semibold p-2">NCT Machine</td>
              <td className="p-2">
                <input
                  className="w-full bg-white rounded-xl px-2 py-3"
                />
              </td>
              <td className="p-2">
                <label className="flex items-center gap-2 justify-center">
                  <input type="checkbox" />
                  None
                </label>
              </td>
            </tr>

            {/* CS Row */}
            <tr>
              <td className="text-left font-semibold p-2">CS</td>
             <td className="p-2">
                <input 
                placeholder="OS"
                className="w-full bg-white rounded-xl px-1 py-2" />
              </td>
              <td className="p-2">
                <input
                placeholder="OD" className="w-full bg-white rounded-xl px-3 py-2" />
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

     
    </div>
  );
}
