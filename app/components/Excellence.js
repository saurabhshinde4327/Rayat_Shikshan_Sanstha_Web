"use client";
import React from "react";

const excellenceTable = () => {
  const data = [
  {
    sr: "१",
    description: "ए++ ग्रेड असलेल्या महाविद्यालयांची संख्या",
    number: "११",
  },
  {
    sr: "२",
    description: "ए+ ग्रेड असलेल्या महाविद्यालयांची संख्या",
    number: "८",
  },
  {
    sr: "३",
    description: "ए ग्रेड असलेल्या महाविद्यालयांची संख्या",
    number: "८",
  },
  {
    sr: "४",
    description: "बी++ ग्रेड असलेल्या महाविद्यालयांची संख्या",
    number: "६",
  },
  {
    sr: "५",
    description: "बी+ ग्रेड असलेल्या महाविद्यालयांची संख्या",
    number: "६",
  },
  {
    sr: "६",
    description: "बी ग्रेड असलेल्या महाविद्यालयांची संख्या",
    number: "२",
  },
  {
    sr: "७",
    description: "स्वायत्त महाविद्यालयांची संख्या",
    number: "७",
  },
  {
    sr: "८",
    description: "नॅक मान्यताप्राप्त महाविद्यालयांची संख्या",
    number: "२७",
  },
  {
    sr: "९",
    description: "सीपीई दर्जा असलेल्या महाविद्यालयांची संख्या",
    number: "५",
  },
  {
    sr: "१०",
    description: "डीएसटी आणि फिस्ट अनुदान प्राप्त करणाऱ्या महाविद्यालयांची संख्या",
    number: "११",
  },
  {
    sr: "११",
    description: "कम्युनिटी महाविद्यालयांची संख्या",
    number: "८",
  },
  {
    sr: "१२",
    description: "डीबीटी स्टार कॉलेज अनुदान प्राप्त करणाऱ्या महाविद्यालयांची संख्या",
    number: "३",
  },
  {
    sr: "१३",
    description: "सर्वोत्तम महाविद्यालये",
    number: "१४",
  },
  {
    sr: "१४",
    description: "अग्रणी महाविद्यालये",
    number: "१३",
  },
];


  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
       उत्कृष्टता		
      </h2>
      <table className="min-w-full border border-black text-m text-center bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#F5E6CA] text-black font-semibold">
            <th className="border border-black px-4 py-2">अ.नं.</th>
            <th className="border border-black px-4 py-2">वर्णन</th>
            <th className="border border-black px-4 py-2">संख्या </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-yellow-100 transition`}
            >
              <td className="border border-black px-4 py-2">{row.sr}</td>
              <td className="border border-black px-4 py-2 text-left">
                {row.description}
              </td>
              <td className="border border-black px-4 py-2">{row.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default excellenceTable;
