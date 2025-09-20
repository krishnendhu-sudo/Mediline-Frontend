import React, { useState } from "react";
import patient from "../assets/patient.jpg";
import ArReading from "../components/ArReading";
import Visual from "../components/Visual";
import Examination from "../components/Examination";
import Pog from "../components/Pog";
import Refraction from "../components/Refraction";
import Retinoscopy from "../components/Retinoscopy";
import Ark from "../components/Ark";
import Cl from "../components/Cl";
import Subima from "../assets/subima.png";
import FollowUp from "../components/FollowUp";

// Icons
import { FiRefreshCw } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const PatientInfo = () => {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 sec
  };

  // ✅ Handle reset
  const handleReset = () => {
    const form = document.querySelector("form");
    if (form) form.reset(); // reset all inputs
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-8xl mx-auto p-6 space-y-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-3xl font-bold text-[#14416D]">
          Patient Information
        </h2>

        {/* Patient Card */}
        <div className="bg-[#CBDCEB] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Details */}
          <div className="space-y-2 font-medium text-2xl w-full md:w-2/3">
            <p>
              <span className="font-bold">Name:</span> SACHIN
            </p>
            <p>
              <span className="font-bold">Age:</span> 55 YEARS
            </p>
            <p>
              <span className="font-bold">Gender:</span> Male
            </p>
            <p>
              <span className="font-bold">MR Number:</span> 196615
            </p>
            <p>
              <span className="font-bold">Visit Date:</span> 2025-08-28
            </p>
            <p>
              <span className="font-bold">Visit Type:</span> NEW GUEST | GENERAL
              CONSULTATION
            </p>
            <p>
              <span className="font-bold">Doctor:</span> DOCTOR
            </p>
          </div>

          {/* Right - Image */}
          <div className="flex-shrink-0">
            <img
              src={patient}
              alt="Patient"
              className="w-[208px] h-[210px] object-cover rounded-lg shadow"
            />
          </div>
        </div>

        <div className="flex justify-start space-x-4">
          <p className="border px-8 py-2 rounded-full font-bold text-2xl cursor-pointer hover:bg-[#6D94C5] hover:text-white transition">
            Readings
          </p>
          <p className="border px-8 py-2 rounded-full font-bold text-2xl cursor-pointer hover:bg-[#6D94C5] hover:text-white transition">
            Examination
          </p>
          <p className="border px-8 py-2 rounded-full text-2xl font-bold cursor-pointer hover:bg-[#6D94C5] hover:text-white transition">
            Case History
          </p>
          <p className="border px-8 py-2 rounded-full text-2xl font-bold  cursor-pointer hover:bg-[#6D94C5] hover:text-white transition">
            Draw
          </p>
        </div>

        {/* Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Presenting Complaints",
            "Past History",
            "Systemic Illness",
            "Personal History",
          ].map((label, idx) => (
            <div
              key={idx}
              className="bg-[#CBDCEB] w-[314px] h-[146px] flex items-center justify-center rounded-xl p-10 text-center font-semibold  hover:bg-[#89b5db] cursor-pointer transition"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Sections */}
        <ArReading />
        <Visual />
        {/* <Examination /> */}
        <Pog />
        <Refraction />
        <Retinoscopy />
        <Ark />
        {/* <Cl /> */}


        
        <FollowUp/>


        {/* Sub Tabs */}
        <div className="flex gap-3 mb-4">
          <h1 className="px-4 py-2 bg-[#CBDCEB] t rounded-full font-semibold">
            CL HISTORY
          </h1>
          <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full font-semibold">
            KEROMETRY
          </h1>
          <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full font-semibold">
            CL PRESCRIPTION
          </h1>
        </div>


        {/* ✅ Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg"
          >
            RESET <FiRefreshCw className="w-5 h-5" />
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg"
          >
            SUBMIT <FaCheckCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Popup message */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[900px]">
              {/* Success Image */}
              <img
                src={Subima}
                alt="Success"
                className="w-[626px] h-[443px] mx-auto mb-4"
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default PatientInfo;
