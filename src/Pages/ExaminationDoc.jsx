import React, { useState } from "react";
import patient from "../assets/patient.jpg";
import Subima from "../assets/subima.png";
import { Link } from "react-router-dom";
import Examination from "../components/Examination";
import FollowUp from "../components/FollowUp";
import Details from "../components/Details";

// Icons
import { FiRefreshCw } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const PatientInfo = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleReset = () => {
    const form = document.querySelector("form");
    if (form) form.reset();
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
            <p><span className="font-bold">Name:</span> SACHIN</p>
            <p><span className="font-bold">Age:</span> 55 YEARS</p>
            <p><span className="font-bold">Gender:</span> Male</p>
            <p><span className="font-bold">MR Number:</span> 196615</p>
            <p><span className="font-bold">Visit Date:</span> 2025-08-28</p>
            <p><span className="font-bold">Visit Type:</span> NEW GUEST | GENERAL CONSULTATION</p>
            <p><span className="font-bold">Doctor:</span> DOCTOR</p>
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

        {/* Navigation Buttons */}
        <div className="flex justify-start space-x-4">
          <Link
            to="/reading"
            className="border px-8 py-2 rounded-full font-bold text-2xl hover:bg-[#6D94C5] hover:text-white transition"
          >
            Readings
          </Link>
          <Link
            to="/examinationDoc"
            className="border px-8 py-2 rounded-full font-bold text-2xl hover:bg-[#6D94C5] hover:text-white transition"
          >
            Examination
          </Link>
          <Link
            to="/CaseHistory"
            className="border px-8 py-2 rounded-full font-bold text-2xl hover:bg-[#6D94C5] hover:text-white transition"
          >
            Case History
          </Link>
          <Link
            to="/Draw"
            className="border px-8 py-2 rounded-full font-bold text-2xl hover:bg-[#6D94C5] hover:text-white transition"
          >
            Draw
          </Link>
        </div>

          <Examination/>

          <Details/>



        <FollowUp/>

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
