import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ import for navigation
import patient from "../assets/patient.jpg";
import Subima from "../assets/subima.png";
import ArReading from "../components/ArReading";
// import Visual from "../components/Visual";
import Visual from "../components/visual";
import Examination from "../components/Examination";
import Pog from "../components/Pog";
import Refraction from "../components/Refraction";
import Retinoscopy from "../components/Retinoscopy";
import Ark from "../components/Ark";
import Cl from "../components/Cl";
import FollowUp from "../components/FollowUp";

// Icons
import { FiRefreshCw } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const PatientInfo = () => {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Map tabs to routes
  const tabs = [
    { label: "Readings", path: "/Reading" },
    { label: "Examination", path: "/ExaminationDoc" },
    { label: "Case History", path: "/CaseHistory" },
    { label: "Draw", path: "/Draw" },
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  // Reset all inputs
  const handleReset = () => {
    const form = document.querySelector("form");
    if (form) form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-8xl mx-auto p-6 space-y-6">
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

      {/* Tabs */}
      <div className="flex justify-start space-x-4">
        {tabs.map((tab) => (
          <p
            key={tab.label}
            onClick={() => navigate(tab.path)}
            className={`border px-8 py-2 rounded-full font-bold text-2xl cursor-pointer transition
              ${location.pathname === tab.path ? "bg-[#6D94C5] text-white" : "hover:bg-[#6D94C5] hover:text-white"}
            `}
          >
            {tab.label}
          </p>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {["Presenting Complaints","Past History","Systemic Illness","Personal History"].map((label, idx) => (
          <div
            key={idx}
            className="bg-[#CBDCEB] text-3xl h-[146px] flex items-center justify-center rounded-xl p-10 text-center font-semibold hover:bg-[#89b5db] cursor-pointer transition"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Sections */}
      <ArReading />
      <Visual />
      <Examination />
      <Pog />
      <Refraction />
      <Retinoscopy />
      <Ark />

      {/* Sub Tabs */}
      <div className="flex text-3xl gap-3 mb-4">
        <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full font-semibold">CL HISTORY</h1>
        <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full font-semibold">KEROMETRY</h1>
        <h1 className="px-4 py-2 bg-[#CBDCEB] rounded-full font-semibold">CL PRESCRIPTION</h1>
      </div>

        <div className="bg-[#D9E7F7] p-6 rounded-lg grid grid-cols-1 md:grid-cols-[1.6fr_1.2fr] gap-10 text-sm">
      {/* Left column */}
      <div className="space-y-4">
        {/* Using Contact Lens Since + Duration */}
        <div>
          <label className="block text-xl font-semibold mb-1">
            Using contact lens since
          </label>
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <input className="p-2 bg-white rounded w-full" />
            <input
              placeholder="Duration"
              className="p-2 bg-white rounded w-full"
            />
          </div>
        </div>

        {/* Name of the solution */}
        <div>
          <label className="block text-xl font-semibold mb-1">
            Name of the solution
          </label>
          <input className="p-2 bg-white rounded w-full" />
        </div>

        {/* Cleaning Contact Lens → CL + Case */}
        <div>
          <label className="block text-xl font-semibold mb-1">
            Cleaning contact lens
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xl font-semibold mb-1">CL</label>
              <input className="p-2 bg-white rounded w-full" />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-1">Case</label>
              <input className="p-2 bg-white rounded w-full" />
            </div>
          </div>
        </div>

        {/* Power of Contact Lens */}
        <div>
          <h4 className="font-semibold text-xl mb-2">Power of Contact Lens</h4>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-xl text-left"></th>
                  <th className="px-3 py-2">SPH</th>
                  <th className="px-3 py-2">CYL</th>
                  <th className="px-3 py-2">AXIS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 text-xl font-semibold">RE</td>
                  <td className="px-3 py-2">
                    <input className="p-2 bg-white rounded w-full" />
                  </td>
                  <td className="px-3 py-2">
                    <input className="p-2 bg-white rounded w-full" />
                  </td>
                  <td className="px-3 py-2">
                    <input className="p-2 bg-white rounded w-full" />
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xl font-semibold">LE</td>
                  <td className="px-3 py-2">
                    <input className="p-2 bg-white rounded w-full" />
                  </td>
                  <td className="px-3 py-2">
                    <input className="p-2 bg-white rounded w-full" />
                  </td>
                  <td className="px-3 py-2">
                    <input className="p-2 bg-white rounded w-full" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-4">
        {/* Usage per day */}
        <div>
          <label className="block text-xl font-semibold mb-1">
            Usage a day (hrs)
          </label>
          <input className="p-2 bg-white rounded w-full" />
        </div>

        {/* PPCL */}
        <div>
          <label className="block text-xl font-semibold mb-1">PPCL</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input className="p-2 bg-white rounded w-full" />
            <select className="p-2 bg-white rounded sm:w-32 w-full">
              <option className="bg-white text-xl">SELECT DURATION</option>
              <option>Weeks</option>
              <option>Months</option>
              <option>Years</option>
            </select>
          </div>
        </div>

        {/* Sleeping with CL */}
        <div>
          <label className="block text-xl font-semibold mb-2">
            Sleeping with contact lens
          </label>
          <div className="flex flex-col gap-4">
            <div className="flex gap-8">
              {/* Toggle 1 */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-6 bg-white rounded-full peer peer-checked:bg-gray-300 transition"></div>
                <div className="absolute left-1 w-5 h-5 bg-black rounded-full peer peer-checked:translate-x-6 transition"></div>
              </label>
              {/* Toggle 2 */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-6 bg-white rounded-full peer peer-checked:bg-gray-300 transition"></div>
                <div className="absolute left-1 w-5 h-5 bg-black rounded-full peer peer-checked:translate-x-6 transition"></div>
              </label>
            </div>

            {/* Hrs box */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-2 px-5 bg-white rounded w-32 text-center"
              />
              <span className="font-bold text-xl text-gray-800">hrs</span>
            </div>
          </div>
        </div>

        {/* CL last used */}
        <div>
          <label className="block text-xl font-semibold mb-1">
            CL last used
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input className="p-2 bg-white rounded w-full" />
            <select className="p-2 bg-white rounded sm:w-32 w-full">
              <option>SELECT DURATION</option>
              <option>Weeks ago</option>
              <option>Months ago</option>
            </select>
          </div>
        </div>

        {/* Any Problem with CL */}
        <div>
          <h4 className="font-semibold text-xl">Any Problem with CL</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <div>
              <label className="block text-xl mb-1">RE</label>
              <input className="p-2 bg-white rounded w-full" />
            </div>
            <div>
              <label className="block text-xl mb-1">LE</label>
              <input className="p-2 bg-white rounded w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Full width bottom section */}
      <div className="md:col-span-2 w-full space-y-6">
        {/* PLAN OF CARE */}
        <div className="flex flex-col w-full">
          <label className="text-xl font-semibold mb-2">PLAN OF CARE</label>
          <textarea
            className="w-full h-28 p-3 rounded-lg bg-white resize-none"
          />
        </div>

        {/* OPTOMETRIST NOTE */}
        <div className="flex flex-col w-full">
          <label className="text-xl font-semibold mb-2">OPTOMETRIST NOTE</label>
          <textarea
            className="w-full h-28 p-3 rounded-lg bg-white resize-none"
          />
        </div>
      </div>
    </div>
      <FollowUp />

      {/* Action Buttons */}
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

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-[900px] relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <img
              src={Subima}
              alt="Success"
              className="w-full h-auto mx-auto mb-4"
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default PatientInfo;
