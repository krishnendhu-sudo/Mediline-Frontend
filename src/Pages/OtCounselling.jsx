import React, { useState } from "react";
import { Check, RefreshCcw } from "lucide-react";
import subima from "../assets/subima.png";

export default function Diagnosis() {
  const [selected, setSelected] = useState({});
  const [history, setHistory] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const diagnoses = [
    "CATARACT - MATURE",
    "GLAUCOMA - OPEN ANGLE",
    "GLAUCOMA - ANGLECLOSURE",
    "STRABISMUS",
    "STRABISMUS – ESOTROPIA",
    "STRABISMUS – EXOTROPIA",
    "NEO VASCULARIZATION OF IRIS",
    "STRABISMUS – ACS",
    "STRABISMUS – IDS",
    "STRABISMUS – ICS",
  ];

  const toggleCheck = (eye, index) => {
    if (eye === "both") {
      setSelected((prev) => {
        const isChecked = !(prev[`${index}-right`] && prev[`${index}-left`]);
        return {
          ...prev,
          [`${index}-right`]: isChecked,
          [`${index}-left`]: isChecked,
        };
      });
    } else {
      setSelected((prev) => ({
        ...prev,
        [`${index}-${eye}`]: !prev[`${index}-${eye}`],
      }));
    }
  };

  // Submit function → show popup
  const handleSubmit = () => {
    setShowPopup(true);
  };

  // Reset function → clear inputs and selections
  const handleReset = () => {
    setSelected({});
    setHistory("");
  };

  return (
    <div className="w-8xl m-10 mx-auto p-6">
      {/* OT Counselling Table */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl ml-20 font-bold">OT COUNSELLING</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-3 py-2 w-64"
        />
      </div>

      <div className="overflow-hidden">
        {/* Header */}
        <div className="grid m-6 grid-cols-4 gap-6 text-center">
          {["DIAGNOSIS", "RIGHT", "LEFT", "BOTH"].map((header, i) => (
            <div key={i} className="flex justify-center">
              <div className="px-8 py-2 font-semibold rounded-full bg-[#6D94C5] w-fit">
                {header}
              </div>
            </div>
          ))}
        </div>

        {/* Rows */}
        {diagnoses.map((diag, i) => (
          <div key={i} className="grid grid-cols-4 text-sm items-center">
            <div className="p-3 ml-8 text-lg">{diag}</div>

            <div className="p-3 flex justify-center">
              <input
                type="checkbox"
                checked={selected[`${i}-right`] || false}
                onChange={() => toggleCheck("right", i)}
                className="w-5 h-5 accent-green-600"
              />
            </div>

            <div className="p-3 flex justify-center">
              <input
                type="checkbox"
                checked={selected[`${i}-left`] || false}
                onChange={() => toggleCheck("left", i)}
                className="w-5 h-5 accent-green-600"
              />
            </div>

            <div className="p-3 flex justify-center">
              <input
                type="checkbox"
                checked={
                  (selected[`${i}-right`] && selected[`${i}-left`]) || false
                }
                onChange={() => toggleCheck("both", i)}
                className="w-5 h-5 accent-green-600"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Procedure History */}
      <div className="p-6 w-full mr-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">PROCEDURE HISTORY</h1>
          <input
            type="text"
            value={history}
            onChange={(e) => setHistory(e.target.value)}
            placeholder="Search..."
            className="border rounded-full px-3 py-2 w-64"
          />
        </div>

        <div className="bg-[#CBDCEB] p-10 rounded-2xl">
          <div className="grid grid-cols-2 text-2xl mb-6">
            <p className="text-start">PROCEDURE</p>
            <p className="text-end">EYE</p>
          </div>
          <div className="flex justify-center pb-8">
            <input
              type="text"
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              placeholder="Enter procedure details"
              className="w-3/4 md:w-7xl bg-white rounded-full px-4 py-2 shadow"
            />
          </div>
        </div>
      </div>

      {/* Submit & Reset Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-red-700 text-white px-6 py-2 rounded-full"
        >
          <RefreshCcw size={18} /> Reset
        </button>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full"
        >
          <Check size={18} /> Submit
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <img
              src={subima}
              alt="Success"
              className="mx-auto mb-4"
            />
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-red-500 font-bold"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
