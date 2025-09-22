import React from "react";

const ClinicalFindings = () => {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold inline-block bg-[#CBDCEB] px-6 py-2 rounded-lg">
        CLINICAL FINDINGS
      </h1>

      <div className="bg-[#CBDCEB] p-7 mt-4 rounded-2xl">
        {/* Conditions in one line */}
        <div className="flex flex-wrap gap-4">
          <label className="flex px-6 py-2 bg-[#6D94C5] text-lg rounded-full items-center gap-2">
            <input type="checkbox" /> Diabetes
          </label>
          <label className="flex px-6 py-2 bg-[#6D94C5] text-lg rounded-full items-center gap-2">
            <input type="checkbox" /> Blood Pressure
          </label>
          <label className="flex px-6 py-2 bg-[#6D94C5] text-lg rounded-full items-center gap-2">
            <input type="checkbox" /> Cholesterol
          </label>
          <label className="flex px-6 py-2 bg-[#6D94C5] text-lg rounded-full items-center gap-2">
            <input type="checkbox" /> Thyroid
          </label>
          <label className="flex px-6 py-2 bg-[#6D94C5] text-lg rounded-full items-center gap-2">
            <input type="checkbox" /> Heart Disease
          </label>
          <label className="flex px-6 py-2 bg-[#6D94C5] text-lg rounded-full items-center gap-2">
            <input type="checkbox" /> Allergies
          </label>
        </div>

        {/* Suggestions and Remarks side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <p className="text-xl mb-2">Suggestions</p>
            <input
              type="text"
              className="w-full h-[74px] mb-6 bg-white rounded-2xl p-3 focus:outline-none border border-gray-300"
            />
          </div>
          <div>
            <p className="text-xl mb-2">Remarks</p>
            <input
              type="text"
              className="w-full h-[74px] mb-6 bg-white rounded-2xl p-3 focus:outline-none border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalFindings;
