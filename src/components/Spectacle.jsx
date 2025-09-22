import React from "react";

const Spectacle = () => {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold inline-block bg-[#CBDCEB] px-6 py-2 rounded-full mb-6">
        SPECTACLE & LENS DETAILS
      </h1>

      {/* Grid container for responsive layout */}
      <div className="grid grid-cols-1 gap-6 bg-[#CBDCEB] p-6 rounded-xl">
        {/* Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-lg mb-2">Features</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
          <div>
            <p className="text-lg mb-2">Lens Type</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
          <div>
            <p className="text-lg mb-2">Lens Material</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-lg mb-2">Lens Coating</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
          <div>
            <p className="text-lg mb-2">Lens Power (RE)</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
          <div>
            <p className="text-lg mb-2">Lens Power (LE)</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-lg mb-2">Cylinder (RE)</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
          <div>
            <p className="text-lg mb-2">Axis (RE)</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
          <div>
            <p className="text-lg mb-2">Axis (LE)</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
        </div>

        {/* Block 4 (Only 2 inputs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg mb-2">Addition (Near)</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
          <div>
            <p className="text-lg mb-2">Remarks</p>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spectacle;
