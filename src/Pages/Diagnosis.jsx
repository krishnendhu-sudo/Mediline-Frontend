import React, { useState } from "react";
// import FollowUp from "../components/FollowUp";

export default function Diagnosis() {
  const [selected, setSelected] = useState({});

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
    setSelected((prev) => ({
      ...prev,
      [`${index}-${eye}`]: !prev[`${index}-${eye}`],
    }));
  };

  return (
    <div className="w-8xl m-10  mx-auto p-6">
      <h2 className="text-2xl ml-20 font-bold mb-4 uppercase">
        Diagnosis (Selection Table)
      </h2>

      {/* Table */}
      <div className=" overflow-hidden">
        {/* Header */}
        <div className="grid m-6 grid-cols-3 gap-6 text-center">
          <div className="flex mr-16 justify-center">
            <div className="px-8 py-2 font-semibold rounded-full bg-[#6D94C5]  w-fit">
              DIAGNOSIS
            </div>
          </div>
          <div className="flex justify-center">
            <div className="px-8 py-2 font-semibold rounded-full bg-[#6D94C5]  w-fit">
              RIGHT
            </div>
          </div>
          <div className="flex justify-center">
            <div className="px-8 py-2 font-semibold rounded-full bg-[#6D94C5]  w-fit">
              LEFT
            </div>
          </div>
        </div>

        {/* Rows */}
        {diagnoses.map((diag, i) => (
          <div key={i} className="grid grid-cols-3  text-sm">
            <div className="p-3 ml-28 text-xl ">{diag}</div>
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

      <div className="m-5 ">
        <h1 className="text-2xl font-bold mb-3">SELECTED DIAGNOSIS</h1>
        <div className="rounded-lg bg-[#CBDCEB] p-6 w-full">
          <div>
            <div className=" rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="font-semibold text-xl">Selected Eye</h2>
                  <input
                    type="text"
                    placeholder="CATARACT - MATURE"
                    className="w-full bg-white rounded-full px-3 py-2 mt-1"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">Selected Eye</h2>
                  <input
                    type="text"
                    placeholder="RE"
                    className="w-full bg-white rounded-full px-3 py-2 mt-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>

      <div className="m-5 ">
        <h1 className="text-2xl font-bold mb-3">HISTORY OF DIAGNOSIS</h1>
        <div className="rounded-lg bg-[#CBDCEB] p-6 w-full">
          <div>
            <div className=" rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="font-semibold text-xl">Selected Eye</h2>
                  <input
                    type="text"
                    placeholder="No data available in table"
                    className="w-full bg-white rounded-full px-3 py-2 mt-1"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">Selected Eye</h2>
                  <input
                    type="text"
                    placeholder="RE"
                    className="w-full bg-white rounded-full px-3 py-2 mt-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-8xl">
            <h1 className="font-semibold mb-5 text-2xl">DOCTOR COMMENTS</h1>
            <p className="mb-5" >LE</p>
            <input type="text"
                className="h-[159px] w-full bg-[#CBDCEB] rounded-2xl"
            />
        </div>
        <div>
            <p className="mb-5 mt-5">RE</p>
            <input type="text"
            className="h-[159px] w-full bg-[#CBDCEB] rounded-2xl"
             />
        </div>


        
      </div>


    </div>
  );
}
