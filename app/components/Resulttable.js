"use client";
import React from "react";

const ResultTable = () => {
   const data = [
  {
    sr: "१",
    region: "मध्य विभाग",
    schools: "१३३",
    appeared: "१०८७३",
    passed: "१०६०५",
    regionResult: "९७.५४",
    boardResult: "कोल्हापूर (९७.४५%), पुणे (९६.४४%)",
  },
  {
    sr: "2",
    region: "दक्षिण विभाग",
    schools: "८६",
    appeared: "६६२९",
    passed: "६४६३",
    regionResult: "९७.५",
    boardResult: "कोल्हापूर (९७.४५%), कोकण (९१.१०%), बेळगाव (७३.४०%)",
  },
  {
    sr: "3",
    region: "उत्तर विभाग",
    schools: "१२६ (३ आश्रम शाळा)",
    appeared: "१४३५८",
    passed: "१३७१७",
    regionResult: "९५.५४",
    boardResult: "पुणे (९६.४४%), नाशिक (९५.२८%), औरंगाबाद (९५.१९%)",
  },
  {
    sr: "4",
    region: "पश्चिम विभाग",
    schools: "७०",
    appeared: "८४९५",
    passed: "८२८९",
    regionResult: "९७.५८",
    boardResult: "पुणे (९६.४४%)",
  },
  {
    sr: "5",
    region: "रायगड विभाग",
    schools: "४० (५ आश्रम शाळा)",
    appeared: "३३९३",
    passed: "३२३८",
    regionResult: "९५.४३",
    boardResult: "मुंबई (९५.८३%)",
  },
  {
    sr: "6",
    region: "एकूण",
    schools: "४५५ (८ आश्रम शाळा)",
    appeared: "४३७४८",
    passed: "४२३१२",
    regionResult: "सरासरी (९६.७१)",
    boardResult: "सरासरी (७१.२३%)",
  },
];


  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
       एसएससी बोर्ड परीक्षेचा निकाल: मार्च २०२४					
      </h2>
      <table className="min-w-full border border-gray-300 text-m text-center bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#F5E6CA] text-black font-semibold">
            <th className="border border-black px-4 py-2">अ. क्र.</th>
            <th className="border border-gray-300 px-4 py-2">विभाग </th>
            <th className="border border-gray-300 px-4 py-2">माध्यमिक शाळांची संख्या</th>
            <th className="border border-gray-300 px-4 py-2">परीक्षेस बसलेले विद्यार्थी</th>
            <th className="border border-gray-300 px-4 py-2">उत्तीर्ण विद्यार्थी</th>
            <th className="border border-gray-300 px-4 py-2">विभागाचा निकाल (%)</th>
            <th className="border border-gray-300 px-4 py-2">बोर्डाचा निकाल (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg- transition`}
            >
              <td className="border border-black px-4 py-2">{row.sr}</td>
              <td className="border border-gray-300 px-4 py-2">{row.region}</td>
              <td className="border border-gray-300 px-4 py-2">{row.schools}</td>
              <td className="border border-gray-300 px-4 py-2">{row.appeared}</td>
              <td className="border border-gray-300 px-4 py-2">{row.passed}</td>
              <td className="border border-gray-300 px-4 py-2">{row.regionResult}</td>
              <td className="border border-gray-300 px-4 py-2">{row.boardResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    
  );
};

export default ResultTable;
