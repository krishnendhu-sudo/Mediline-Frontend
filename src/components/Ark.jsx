import React from "react";

export default function Ark() {
  return (
    <div>

    {/* Tabs */}
      <div className="flex gap-3 mb-4">
        <h1 className="px-4 py-2 bg-[#CBDCEB]  rounded-full  font-bold">ARK / MANUAL K</h1>
        <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full text-gray-500 font-bold">TOP K</h1>
        <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full text-gray-500 font-bold">OPTICAL K</h1>
      </div>
    <div className="max-w-8xl mx-auto p-6 bg-[#CBDCEB] rounded-lg shadow-md">
      

      {/* Toggle ARK / Manual K */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-semibold">ARK</span>
        <div className="relative w-12 h-6 bg-green-500 rounded-full cursor-pointer">
          <div className="absolute left-6 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
        </div>
        <span className="font-semibold">Manual K</span>
      </div>

      {/* OD / OS Section */}
        <div className="grid grid-cols-2 gap-6 mb-6">
  {/* OD Section */}
  <div className=" border-gray-400 rounded-lg overflow-hidden">
    <h3 className="bg-[#4D6C9D] text-white text-center py-2 font-bold">OD</h3>

    <div className="p-4">
      {/* First Row */}
      <div className="grid grid-cols-5 gap-2 text-sm">
        <div>
          <label className="block text-xs text-gray-700 mb-1">K1</label>
          <input className="p-2 rounded-2xl bg-[#FFFFFFE0]  w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">R1</label>
          <input className="p-2  rounded-2xl bg-[#FFFFFFE0] w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">AXIS</label>
          <input className="p-2 rounded-2xl bg-[#FFFFFFE0] w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">AXL</label>
          <input className="p-2  rounded-2xl bg-[#FFFFFFE0] w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">PCIOL</label>
          <input className="p-2  rounded-2xl bg-[#FFFFFFE0] w-full" />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-5 gap-2 mt-2 text-sm">
        <div>
          <label className="block text-xs text-gray-700 mb-1">K1</label>
          <input className="p-2  rounded-2xl bg-[#FFFFFFE0] w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">R1</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">AXIS</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">AXL</label>
          <input className="p-2 rounded-2xl bg-[#FFFFFFE0] w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">PCIOL</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
      </div>
    </div>
  </div>

  {/* OS Section */}
  <div className="  rounded-2xl overflow-hidden">
    <h3 className="bg-[#4D6C9D] text-white text-center py-2 font-bold">OS</h3>

    <div className="p-4">
      {/* First Row */}
      <div className="grid grid-cols-5 gap-2 text-sm">
        <div>
          <label className="block text-xs text-gray-700 mb-1">K1</label>
          <input className="p-2 bg-[#FFFFFFE0]  rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">R1</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">AXIS</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">AXL</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">PCIOL</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-5 gap-2 mt-2 text-sm">
        <div>
          <label className="block text-xs text-gray-700 mb-1">K1</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">R1</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">AXIS</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">AXL</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
          
        </div>
        <div>
          <label className="block text-xs text-gray-700 mb-1">PCIOL</label>
          <input className="p-2 bg-[#FFFFFFE0] rounded-2xl w-full" />
        </div>
      </div>
    </div>
  </div>
</div>

         
     
    </div>
    </div>
  );
}
