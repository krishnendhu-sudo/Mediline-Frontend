import React, { useState } from "react";
import DoctorCards from "../components/DoctorCards";
import DoctorTable from "../components/DoctorTable";

export default function DoctorWaitingList() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { count: 1, label: "READY TO SEE", color: "bg-[#D8434F9E]" },
    { count: 0, label: "AT AR ROOM", color: "bg-[#0A62B96B]" },
    { count: 0, label: "DILATATION", color: "bg-[#EFB2319E]" },
    { count: 0, label: "RE REFRACTION", color: "bg-[#15868A9E]" },
    { count: 0, label: "COUNSELLING", color: "bg-[#642D489E]" },
    { count: 0, label: "CONSULTED", color: "bg-[#DD135D9E]" },
  ];

  const tableHeaders = [
    "OP Number",
    "Patient name",
    "Age",
    "Sex",
    "In Time",
    "Token Number",
    "Waiting Time",
    "Type",
    "Fee",
    "Scheme",
    "Category",
    "Patient Remarks",
  ];

  const patients = [
    {
      opNumber: "LVSERD2025/I96615",
      name: "SACHIN",
      age: "55 YEARS",
      sex: "M",
      inTime: "11:28:24",
      token: 2,
      waiting: "0h:32m",
      type: "NEW",
      fee: "300.00",
      scheme: "GENERAL",
      category: "CONSULTATION",
      remarks: "",
    },
  ];

  const handleCardClick = (label) => {
    if (label === "READY TO SEE") {
      setSelectedCard(label);
    } else {
      setSelectedCard(null);
    }
  };

  return (
    <div className="w-full flex flex-col items-start py-10">
      <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
        DOCTOR / Waiting List
      </h2>

      {/* Cards Section: smaller width */}
      <div className="w-full max-w-7xl px-8"> 
        <DoctorCards
          cards={cards}
          onCardClick={handleCardClick}
          selectedCard={selectedCard}
        />
      </div>

      {/* Doctor Table: full width */}
      {selectedCard === "READY TO SEE" && (
        <div className="w-full px-8 mt-6">
          <DoctorTable headers={tableHeaders} patients={patients} />
        </div>
      )}
    </div>
  );
}
