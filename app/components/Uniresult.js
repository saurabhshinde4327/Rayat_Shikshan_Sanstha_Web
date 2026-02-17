"use client";
import React from "react";

const ugResultTable = () => {
  const data = [
  {
    sr: "१",
    schools: "बी.ए.",
    appeared: "३४८७",
    passed: "२८८१",
    boardResult: "८२.६२",
  },
  {
    sr: "२",
    schools: "बी.कॉम.",
    appeared: "६९७३",
    passed: "६०१५",
    boardResult: "८६.२६",
  },
  {
    sr: "३",
    schools: "बी.एस्सी.",
    appeared: "२९२८",
    passed: "२३१५",
    boardResult: "७९.०६",
  },
  {
    sr: "४",
    schools: "बी.एड.",
    appeared: "१३४",
    passed: "१३४",
    boardResult: "१००",
  },
  {
    sr: "५",
    schools: "बी.सी.ए.",
    appeared: "८५७",
    passed: "७६०",
    boardResult: "८८.६८",
  },
  {
    sr: "६",
    schools: "कायदा",
    appeared: "२९९",
    passed: "२०३",
    boardResult: "६७.८९",
  },
  {
    sr: "७",
    schools: "बी.सी.एस.",
    appeared: "७०९",
    passed: "६२०",
    boardResult: "८७.४५",
  },
  {
    sr: "८",
    schools: "बी.बी.ए.",
    appeared: "२४१",
    passed: "१७२",
    boardResult: "७१.३७",
  },
  {
    sr: "९",
    schools:
      "ई.सी.एस., आय.टी., बी.कॉम. आयटी, बी.कॉम. (ए अँड एफ), बी.कॉम. (बी अँड आय), बी.एम.एस., बायोटेक, अॅनिमेशन सायन्स, फॉरेन्सिक सायन्स, नॅनो सायन्स, डी.एल.एल., फूड प्रोसेसिंग अँड पॅकेजिंग, बी.कॉम. बी.एम., अ‍ॅडव्हान्स डिप्लोमा इन वेब डिझायनिंग",
    appeared: "१८७६",
    passed: "१७७४",
    boardResult: "९४.५६",
  },
  {
    sr: "१०",
    schools: "पदवी",
    appeared: "२९२",
    passed: "२५१",
    boardResult: "८५.९६",
  },
  {
    sr: "११",
    schools: "डिप्लोमा",
    appeared: "२३८",
    passed: "२०४",
    boardResult: "८५.७१",
  },

    {
        sr:"",
      schools: "एकूण 		",
     appeared: "१८०३४",
passed: "१५३२९",
boardResult: "८५.००",

    },
    
    
  ];

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        विद्यापीठ निकाल (पदवीधर) एप्रिल/मे २०२४													
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

export default ugResultTable;
