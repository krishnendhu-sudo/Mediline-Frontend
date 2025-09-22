// import React from "react";
 import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const Cl = () => {

  return (
    <div>
      {/* Sub Tabs */}
      <div className="flex text-3xl gap-3 mb-4">
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

      {/* CL HISTORY FORM */}
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
              <input placeholder="Duration" className="p-2 bg-white rounded w-full" />
            </div>
          </div>

          {/* Name of the solution */}
          <div>
            <label className="block text-xl font-semibold mb-1">Name of the solution</label>
            <input className="p-2 bg-white rounded w-full" />
          </div>

          {/* Cleaning Contact Lens → CL + Case */}
          <div>
            <label className="block text-xl font-semibold mb-1">Cleaning contact lens</label>
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
                    <td className="px-3 py-2"><input className="p-2 bg-white rounded w-full" /></td>
                    <td className="px-3 py-2"><input className="p-2 bg-white rounded w-full" /></td>
                    <td className="px-3 py-2"><input className="p-2 bg-white rounded w-full" /></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-xl font-semibold">LE</td>
                    <td className="px-3 py-2"><input className="p-2 bg-white rounded w-full" /></td>
                    <td className="px-3 py-2"><input className="p-2 bg-white rounded w-full" /></td>
                    <td className="px-3 py-2"><input className="p-2 bg-white rounded w-full" /></td>
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
            <label className="block text-xl font-semibold mb-1">Usage a day (hrs)</label>
            <input className="p-2 bg-white rounded w-full" />
          </div>

          {/* PPCL */}
          <div>
            <label className="block text-xl font-semibold mb-1">PPCL</label>
            <div className="flex gap-2">
              <input className="p-2 bg-white rounded w-full" />
              <select className="p-2 bg-white rounded w-32">
                <option className="bg-white text-xl">SELECT DURATION</option>
                <option>Weeks</option>
                <option>Months</option>
                <option>Years</option>
              </select>
            </div>
          </div>

          {/* Sleeping with CL */}
          <div>
            <label className="block text-xl font-semibold mb-2">Sleeping with contact lens</label>
            <div className="flex items-center justify-between">
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
                  <div className="absolute left-1  w-5 h-5 bg-black rounded-full peer peer-checked:translate-x-6 transition"></div>
                </label>
              </div>

              {/* Hrs box */}
              <div className="flex items-center gap-2">
                <input type="number" className="p-2 px-5 bg-white rounded w-32 text-center" />
                <span className="font-bold text-xl text-white">hrs</span>
              </div>
            </div>
          </div>

          {/* CL last used */}
          <div>
            <label className="block text-xl font-semibold mb-1">CL last used</label>
            <div className="flex gap-2">
              <input className="p-2 bg-white rounded w-full" />
              <select className="p-2 bg-white rounded w-32">
                <option>SELECT DURATION</option>
                <option>Weeks ago</option>
                <option>Months ago</option>
              </select>
            </div>
          </div>

          {/* Any Problem with CL */}
          <div>
            <h4 className="font-semibold text-xl">Any Problem with CL</h4>
            <div className="grid grid-cols-2 gap-2 mt-2">
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
      </div>
 

    </div>
  );
};

export default Cl;
