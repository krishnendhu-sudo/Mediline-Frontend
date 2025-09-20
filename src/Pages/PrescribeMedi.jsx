import React, { useState } from "react";
import { Search, Edit, Trash2 } from "lucide-react";

const PrescribeMedi = () => {
  const [selectedHeader, setSelectedHeader] = useState("");
  const [category, setCategory] = useState("");
  const [dosage, setDosage] = useState("");
  const [search, setSearch] = useState("");
  const [itemName, setItemName] = useState("");

  const headers = ["Medicine", "Kit", "Special instruction"];
  const categories = [
    "ALL",
    "NSAID",
    "ANTI BACTERIAL",
    "VITAMINS",
    "GLAUCOMA",
    "LUBRICANT",
    "ANTIOXIDANT",
  ];
  const dosages = [
    "2 TIME TILL ONE BOTTLE",
    "3 TIMES LIFE LONG",
    "3-2-0",
    "3 TIMES ONE TEASPOON",
    "2-2-0",
    "1-1-0",
    "NIGHT ONE TUBE",
  ];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-8xl mx-auto">
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-bold">PRESCRIBE MEDICINE</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 w-full max-w-3xl">
        {headers.map((header) => (
          <div
            key={header}
            onClick={() => setSelectedHeader(header)}
            className={`flex-1 text-center px-4 py-2 cursor-pointer text-base md:text-xl font-semibold border rounded-full
              ${
                selectedHeader === header
                  ? "bg-[#6D94C5] text-white"
                  : "bg-white text-black"
              }
            `}
          >
            {header}
          </div>
        ))}
      </div>

      {/* Inputs Section */}
      <div className=" p-4 md:p-6 rounded-2xl space-y-6">
        {/* Row 1 */}
        <div className="flex flex-wrap gap-4">
          {/* Category */}
          <div className="flex-1 min-w-[150px]">
            <p className="font-semibold mb-1">CATEGORY</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white rounded-full px-3 py-2"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div className="flex-1 min-w-[150px] relative">
            <p className="font-semibold mb-1">SEARCH</p>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full bg-white rounded-full px-10 py-2"
            />
            <Search className="absolute right-3 top-9 md:top-1/2 transform -translate-y-1/2" size={18} />
          </div>

          {/* Item Name */}
          <div className="flex-1 min-w-[150px]">
            <p className="font-semibold mb-1">ITEM NAME</p>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full bg-white rounded-full px-3 py-2"
            />
          </div>

          {/* Dosage */}
          <div className="flex-1 min-w-[150px]">
            <p className="font-semibold mb-1">DOSAGE</p>
            <select
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="w-full bg-white rounded-full px-3 py-2"
            >
              {dosages.map((dose) => (
                <option key={dose} value={dose}>
                  {dose}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-4">
          {["FREQUENCY", "DURATION", "ROUTE", "QUANTITY"].map((label) => (
            <div key={label} className="flex-1 min-w-[150px]">
              <p className="font-semibold mb-1">{label}</p>
              <input
                type="text"
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full bg-white rounded-full px-3 py-2"
              />
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap gap-4">
          {["START DATE", "END DATE"].map((label) => (
            <div key={label} className="flex-1 min-w-[150px]">
              <p className="font-semibold mb-1">{label}</p>
              <input
                type="date"
                className="w-full bg-white rounded-full px-3 py-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4 space-x-4">
        <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 text-sm md:text-base">
          Add
        </button>
        <button className="bg-red-500 text-white px-4 md:px-6 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 text-sm md:text-base">
          Cancel
        </button>
      </div>

      {/* Table (Responsive) */}
      <div className="p-10 overflow-x-auto">
        <table className="w-full rounded-lg text-sm md:text-base">
          {/* Head */}
          <thead className="bg-black text-white">
            <tr>
              {[
                "MEDICINE",
                "DOSAGE",
                "DURATION",
                "QUANTITY",
                "ROUTE",
                "START DATE",
                "END DATE",
              ].map((head) => (
                <th key={head} className="px-4 py-2">
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            <tr className="text-center align-top">
              <td className="px-4 py-2 ">MOXIGRAM LX EYE DROPS3</td>
              <td className="px-4 py-2 ">MOXIGRAM LX EYE DROPS3</td>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2 ">1</td>
              <td className="px-4 py-2 ">LEFT EYE</td>
              <td className="px-4 py-2 ">28/08/2025</td>
              <td className="px-4 py-2">
                <div>28/08/2025</div>
                <div className="flex justify-center gap-3 mt-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Line with Actions */}
      <div className="flex justify-between items-center border-t pt-3">
        <p className="font-semibold text-2xl">HISTORY OF MEDICINE PRESCRIPTIONS:</p>
        <div className="flex gap-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-gray-500 text-sm md:text-base">
            Close
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 text-sm md:text-base">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrescribeMedi;
