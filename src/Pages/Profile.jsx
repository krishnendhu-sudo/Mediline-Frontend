import React from 'react'
import Proimg from "../assets/Proimg.png"

const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Profile Box */}
      <div className="bg-[#6D94C5] w-[427px] max-w-full h-auto p-6 rounded-2xl flex flex-col items-center justify-center text-center">
        
        {/* Profile Image */}
        <div className="w-40 h-40 mb-4">
          <img 
            src={Proimg} 
            alt="Profile" 
            className="w-full h-full object-cover bg-white rounded-full shadow-md"
          />
        </div>

        {/* Profile Info */}
        <h1 className="text-2xl font-bold ">Sachin</h1>
        <p className="text-lg  mb-2">55 years</p>
        <h3 className="text-md font-semibold text-white mb-6">
          GENERAL CONSULTATION
        </h3>

        {/* Buttons / Options */}
        <div className="space-y-4 w-full">
          <p className="bg-white  font-bold py-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100">
            START CONSULTATION
          </p>
          <p className="bg-white font-bold py-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100">
            DEMOGRAPHICS
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
