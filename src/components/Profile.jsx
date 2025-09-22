import React from "react";
import { useNavigate } from "react-router-dom"; 
import { X } from "lucide-react";
import Proimg from "../assets/Proimg.png";

const Profile = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#6D94C5] w-[427px] max-w-full h-auto p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-white hover:text-gray-200"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Profile Image */}
      <div className="w-40 h-40 mb-4">
        <img 
          src={Proimg} 
          alt="Profile" 
          className="w-full h-full object-cover bg-white rounded-full shadow-md"
        />
      </div>

      {/* Profile Info */}
      <h1 className="text-2xl font-bold text-white">Sachin</h1>
      <p className="text-lg text-white mb-2">55 years</p>
      <h3 className="text-md font-semibold text-white mb-6">
        GENERAL CONSULTATION
      </h3>

      {/* Buttons / Options */}
      <div className="space-y-4 w-full">
        {/* Start Consultation Button */}
        <p
          onClick={() => navigate("/Reading")}
          className="bg-white font-bold py-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100"
        >
          START CONSULTATION
        </p>

        {/* Demographics Button */}
        <p className="bg-white font-bold py-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100">
          DEMOGRAPHICS
        </p>
      </div>
    </div>
  );
};

export default Profile;
