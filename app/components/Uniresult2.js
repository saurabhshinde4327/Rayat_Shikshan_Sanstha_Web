"use client";
import React from "react";

const pgResultTable = () => {
  const data = [
   
  {
    sr: "१",
    degree: "एम.ए.",
    appeared: "११६२",
    passed: "१०८७",
    percentage: "९३.५५",
  },
  {
    sr: "२",
    degree: "एम.कॉम.",
    appeared: "१०७५",
    passed: "९०२",
    percentage: "८३.९१",
  },
  {
    sr: "३",
    degree: "एम.एस्सी.",
    appeared: "१७५०",
    passed: "१४५८",
    percentage: "८३.३१",
  },
  {
    sr: "४",
    degree: "एम.बी.ए.",
    appeared: "७४",
    passed: "६४",
    percentage: "८६.४९",
  },
];

    
  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
       विद्यापीठ निकाल (पदव्युत्तर) एप्रिल/मे २०२४				
      </h2>
      <table className="min-w-full border border-black text-m text-center bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#F5E6CA] text-black font-semibold">
            <th className="border border-black px-4 py-2">अ. क्र.</th>
            <th className="border border-black px-4 py-2">पदवी</th>
            <th className="border border-black px-4 py-2">परीक्षेस बसलेले विद्यार्थी  </th>
            <th className="border border-black px-4 py-2">उत्तीर्ण झालेले विद्यार्थी</th>
            <th className="border border-black px-4 py-2">टक्केवारी % </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover: transition`}
            >
              <td className="border border-black px-4 py-2">{row.sr}</td>
              <td className="border border-black px-4 py-2">{row.degree}</td>
              <td className="border border-black px-4 py-2">{row.appeared}</td>
              <td className="border border-black px-4 py-2">{row.passed}</td>
              <td className="border border-black px-4 py-2">{row.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default pgResultTable;
