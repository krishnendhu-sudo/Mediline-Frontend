import React from "react";

export default function Retinoscopy() {
  const headings = ["RE", "LE", "RE", "LE"];

  return (
    <div className="space-y-4">
      {/* Top Tabs */}
      <div className="flex text-3xl gap-3 mb-4 flex-wrap">
        <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full font-bold">
          RETINOSCOPY
        </h1>
        <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full text-gray-500 font-bold">
          GONIOSCOPY
        </h1>
      </div>

      {/* Main Container */}
      <div className="p-6 bg-[#CBDCEB] rounded-xl">
        {/* Top group headings */}
        <div className="grid grid-cols-4 mb-2">
          <h2 className="col-span-2 font-semibold text-2xl text-left">
            UNDILATED
          </h2>
          <h2 className="col-span-2 font-semibold text-2xl text-left">
            DILATED
          </h2>
        </div>

        {/* Column Headings */}
        <div className="grid grid-cols-4 text-[28px] md:text-[32px] gap-4 md:gap-6 mb-4">
          {headings.map((heading, i) => (
            <h3
              key={i}
              className="bg-[#7DA0CC] text-white text-center py-2 rounded-lg font-bold"
            >
              {heading}
            </h3>
          ))}
        </div>

        {/* Inputs under each heading */}
        <div className="grid grid-cols-4 gap-4 md:gap-6">
          {headings.map((_, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Value"
                className="w-full text-xl md:text-2xl h-10 px-2 rounded bg-white"
              />
              <input
                type="text"
                placeholder="Axis"
                className="w-full text-xl md:text-2xl h-10 px-2 rounded bg-white"
              />
              <input
                type="text"
                placeholder="Value"
                className="w-full text-xl md:text-2xl h-10 px-2 rounded bg-white"
              />
              <input
                type="text"
                placeholder="Axis"
                className="w-full text-xl md:text-2xl h-10 px-2 rounded bg-white"
              />
            </div>
          ))}
        </div>

        {/* Extra Input Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <input
            type="text"
            placeholder="DILATED RETINOSCOPY REMARKS"
            className="w-full text-xl md:text-2xl h-28 px-2 bg-white rounded"
          />
          <input
            type="text"
            placeholder="MEDICATION HISTORY"
            className="w-full text-xl md:text-2xl h-28 px-2 bg-white rounded"
          />
        </div>
      </div>
    </div>
  );
}
