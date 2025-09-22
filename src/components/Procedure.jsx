import React, { useState } from "react";
import subimg from "../assets/subima.png";

export default function Procedure({ onClose }) {
  const [selected, setSelected] = useState({});
  const [procedure, setProcedure] = useState("");
  const [history, setHistory] = useState("");
  const [doctorComments, setDoctorComments] = useState({ LE: "", RE: "" });

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

  const discounts = [0, 0, 0, 0, 0, 100, 100, 100, 100, 100];
  const amounts = [10.0, 10.0, 10.0, 10.0, 10.0, 100.0, 10.0, 10.0, 25.0, 10.0];

  const [showPopup, setShowPopup] = useState(false);

  const toggleCheck = (eye, index) => {
    setSelected((prev) => ({
      ...prev,
      [`${index}-${eye}`]: !prev[`${index}-${eye}`],
    }));
  };

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const handleReset = () => {
    setSelected({});
    setProcedure("");
    setHistory("");
    setDoctorComments({ LE: "", RE: "" });
  };

  return (
    <div className="bg-white w-full rounded-2xl shadow-lg p-6 overflow-y-auto max-h-[90vh] relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
      >
        ✕
      </button>

      {/* ================= PROCEDURE TABLE ================= */}
      <h2 className="text-2xl ml-2 font-bold mb-4 uppercase">
        Diagnosis (Selection Table)
      </h2>

      <div className="overflow-hidden">
        <div className="grid m-6 grid-cols-5 gap-6 text-center">
          {["DIAGNOSIS", "AMOUNT", "DISCOUNT", "RIGHT", "LEFT"].map((header, i) => (
            <div key={i} className="flex justify-center">
              <div className="px-8 py-2 font-semibold rounded-full bg-[#6D94C5] w-fit">
                {header}
              </div>
            </div>
          ))}
        </div>

        {diagnoses.map((diag, i) => (
          <div key={i} className="grid grid-cols-5 text-sm items-center">
            <div className="p-3 ml-10 text-lg">{diag}</div>
            <div className="p-3 flex justify-center text-lg font-medium">{amounts[i]}</div>
            <div className="p-3 flex justify-center text-lg font-medium">{discounts[i]}</div>
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
          </div>
        ))}
      </div>

      {/* Selected Procedure */}
      <div className="p-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">SELECTED PROCEDURE</h1>
          <input
            type="text"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            placeholder="Search..."
            className="border rounded-full px-3 py-2 w-64"
          />
        </div>

        <div className="bg-[#CBDCEB] p-10 rounded-2xl">
          <div className="grid grid-cols-4 text-2xl text-center mb-6">
            <p>PROCEDURE</p>
            <p>AMOUNT</p>
            <p>DISCOUNT</p>
            <p>EYE</p>
          </div>
          <div className="flex justify-center pb-8">
            <input
              type="text"
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              placeholder="Enter procedure details"
              className="w-3/4 bg-white rounded-full px-4 py-2 shadow"
            />
          </div>
        </div>
      </div>

      {/* Procedure History */}
      <div className="p-6 w-full">
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
          <div className="grid grid-cols-4 text-2xl text-center mb-6">
            <p>PROCEDURE</p>
            <p>AMOUNT</p>
            <p>DISCOUNT</p>
            <p>EYE</p>
          </div>
          <div className="flex justify-center pb-8">
            <input
              type="text"
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              placeholder="Enter procedure details"
              className="w-3/4 bg-white rounded-full px-4 py-2 shadow"
            />
          </div>
        </div>
      </div>

      {/* Doctor Comments */}
      <div className="mt-5 w-8xl">
        <h1 className="font-semibold mb-5 text-2xl">DOCTOR COMMENTS</h1>
        <p className="mb-5">LE</p>
        <input
          type="text"
          value={doctorComments.LE}
          onChange={(e) =>
            setDoctorComments({ ...doctorComments, LE: e.target.value })
          }
          className="h-[159px] w-full bg-[#CBDCEB] rounded-2xl mb-5"
        />
        <p className="mb-5">RE</p>
        <input
          type="text"
          value={doctorComments.RE}
          onChange={(e) =>
            setDoctorComments({ ...doctorComments, RE: e.target.value })
          }
          className="h-[159px] w-full bg-[#CBDCEB] rounded-2xl"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-6 py-2 rounded-full"
        >
          Reset
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-6 py-2 rounded-full"
        >
          Submit
        </button>
      </div>

      {/* Popup (from Submit) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <img src={subimg} alt="Success" className="mx-auto mb-4" />
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
