import React from "react";

export default function Retinoscopy() {
  const headings = ["RE", "LE", "RE", "LE"];

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <h1 className="px-4 py-2 bg-[#CBDCEB]  rounded-full  font-bold">RETINOSCOPY</h1>
        <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full text-gray-500 font-bold">GONIOSCOPY</h1>
      
      </div>
    
    <div className="p-6 bg-[#CBDCEB] rounded-xl">
      {/* Column Headings */}
      <div className="grid grid-cols-4 gap-6 mb-4">
        {headings.map((heading, i) => (
          <h3
            key={i}
            className="bg-[#7DA0CC] text-white text-center py-2 rounded-lg font-bold"
          >
            {heading}
          </h3>
        ))}
      </div>

      {/* 2x2 Inputs under each heading */}
      <div className="grid grid-cols-4 gap-6">
        {headings.map((_, i) => (
          <div key={i} className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Value"
              className="w-full h-10 px-2 rounded bg-white"
            />
            <input
              type="text"
              placeholder="Axis"
              className="w-full h-10 px-2 rounded bg-white"
            />
            <input
              type="text"
              placeholder="Value"
              className="w-full h-10 px-2 rounded bg-white"
            />
            <input
              type="text"
              placeholder="Axis"
              className="w-full h-10 px-2 rounded bg-white"
            />
          </div>
        ))}
      </div>

      {/* Extra Input Boxes under headings (2 spanning inputs) */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        <input
          type="text"
          placeholder="DILATED RETINOSCOPY REMARKS"
          className="w-full h-27 px-2 bg-white"
        />
        <input
          type="text"
          placeholder="MEDICATION HISTORY"
          className="w-full h-27 px-2 bg-white"
        />
      </div>
    </div>
    </div>
  );
}
