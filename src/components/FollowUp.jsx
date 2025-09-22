import React from "react";

const FollowUp = () => {
  return (
       <div>
       {/* Heading */}
        <h1 className="text-2xl font-bold text-start m-6">FOLLOW UP</h1>
    <div className="flex justify-center  w-8xl items-center py-10">
      
      <div className="w-full bg-[#CBDCEB] p-6">
      

       {/* Next Visit Info */}
<div className="grid grid-cols-4 gap-4  text-xl text-start mb-6">
  {/* Headings */}
  <h3 className="font-semibold">NEXT VISIT</h3>
  <h3 className="font-semibold">DATE</h3>
  <h3 className="font-semibold col-span-2">USAGE A DAY</h3>

  {/* Inputs */}
  <input
    type="text"
    placeholder="Please Select"
    className="bg-white rounded px-2 py-1 w-full h-[53px] "
  />
  <input
    type="date"
    className="bg-white text-gray-500 rounded px-2 py-1 w-full h-[53px]"
  />
  <input
    type="text"
    placeholder="Usage per day"
    className="bg-white rounded px-2 py-1 w-full h-[53px] col-span-2"
  />
</div>


        {/* Transfer Section */}
       <div className="mb-6">
  <div className="flex flex-wrap text-xl gap-4">
    {/* Label */}
    <p className="font-medium mt-1">Transfer To:</p>

    {/* Outside checkbox + input */}
    <div className="flex items-center gap-2">
      <input type="checkbox" className="w-8 h-4" />
      <p>Outside</p>
      <input
        type="text"
        placeholder="Enter details"
        className="bg-white rounded px-2 py-1 w-[560px] h-[53px]"
      />
    </div>

    {/* Options with styled checkboxes */}
    {["Dilatation", "Re refraction", "High risk patient", "File Close"].map(
      (label, idx) => (
        <label
          key={idx}
          className="flex items-center gap-2 px-3 py-2 text-sm rounded-full bg-[#48D56D] text-white font-medium shadow cursor-pointer hover:bg-green-600 transition"
        >
          <input type="checkbox" className="w-4 h-4 accent-white" />
          <span>{label}</span>
        </label>
      )
    )}
  </div>
</div>


      {/* Remarks Section */}
<div className="mb-6 text-xl flex gap-6">
  <div className="flex-1">
    <h2 className="font-semibold">Additional Remarks</h2>
    <input
      type="text"
      className="w-full h-[143px] bg-white rounded px-3 py-2 mt-1"
    
    />
  </div>
  <div className="flex-1">
    <h2 className="font-semibold">High Risk Remarks</h2>
    <input
      type="text"
      className="w-full bg-white h-[143px] rounded px-3 py-2 mt-1"
      
    />
  </div>
</div>


        {/* Action Buttons */}
        <div className="flex justify-end gap-6">
          <button className="px-6 py-2 rounded-full bg-[#48D56D]  ">
            Load
          </button>
          <button className="px-6 py-2 rounded-full bg-[#48D56D]  ">
            Save
          </button>
          <button className="px-6 py-2 rounded-full bg-[#48D56D]  ">
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FollowUp;
