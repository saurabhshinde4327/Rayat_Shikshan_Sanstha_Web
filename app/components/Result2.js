"use client";
import React from "react";

const hscResultTable = () => {
  const data = [
  {
    sr: "१",
    schools: "हायस्कूल संलग्न कनिष्ठ महाविद्यालये (१९४)",
    appeared: "२२७७१",
    passed: "२१६१६",
    boardResult: "९४.९२",
  },
  {
    sr: "2",
    schools: "वरिष्ठ महाविद्यालय संलग्न कनिष्ठ महाविद्यालये (२६)",
    appeared: "१६६५२",
    passed: "१५५७१",
    boardResult: "९३.५०",
  },
  {
    sr: "3",
    schools: "आश्रमशाळा संलग्न कनिष्ठ महाविद्यालये (४)",
    appeared: "३६४",
    passed: "३२९",
    boardResult: "९०.३८",
  },
  {
    sr: "4",
    schools: "एकूण (२२४)",
    appeared: "३९७८७",
    passed: "३७५१६",
    boardResult: "९४.२९",
  },
];


  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        एच.एस.सी. बोर्ड परीक्षेचा निकाल: फेब्रुवारी/मार्च २०२४						
      </h2>
      <table className="min-w-full border border-black text-m text-center bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#F5E6CA] text-black font-semibold">
            <th className="border border-black px-4 py-2">अ. क्र.</th>
            <th className="border border-black px-4 py-2">उच्च माध्यमिक शाळा</th>
            <th className="border border-black px-4 py-2">परीक्षेला बसलेले विद्यार्थी</th>
            <th className="border border-black px-4 py-2">उत्तीर्ण विद्यार्थी</th>
           <th className="border border-black px-4 py-2"> निकाल (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover: transition`}
            >
             <td className="border border-black px-4 py-2">{row.sr}</td>
              <td className="border border-black px-4 py-2">{row.schools}</td>
              <td className="border border-black px-4 py-2">{row.appeared}</td>
              <td className="border border-black px-4 py-2">{row.passed}</td>
              <td className="border border-black px-4 py-2">{row.boardResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    
  );
};

export default hscResultTable;
