import React from "react";

const Details = () => {
  return (
    <div className="p-6 space-y-12">
      {/* DIAGNOSIS */}
      <div>
        <h1 className="text-2xl font-bold text-blue-700 mb-3">DIAGNOSIS</h1>
        <div className="border rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="font-semibold">Diagnosis</h2>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="Enter diagnosis"
              />
            </div>
            <div>
              <h2 className="font-semibold">Selected Eye</h2>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="Enter selected eye"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PROCEDURE */}
      <div>
        <h1 className="text-2xl font-bold text-green-700 mb-3">PROCEDURE</h1>
        <div className="border rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h2 className="font-semibold">Procedure</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <h2 className="font-semibold">Amount</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <h2 className="font-semibold">Eye</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* OT COUNSELLING */}
      <div>
        <h1 className="text-2xl font-bold text-purple-700 mb-3">OT COUNSELLING</h1>
        <div className="border rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="font-semibold">Surgery Name</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <h2 className="font-semibold">Selected Eye</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* TREATMENT */}
      <div>
        <h1 className="text-2xl font-bold text-red-700 mb-3">TREATMENT</h1>
        <div className="border rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h2 className="font-semibold">Medicine</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <h2 className="font-semibold">Dosage</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <h2 className="font-semibold">Duration</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <h2 className="font-semibold">Route</h2>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
