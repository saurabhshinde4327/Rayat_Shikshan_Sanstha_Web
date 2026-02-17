"use client";
import React from "react";

const naacAccreditationTable = () => {
  const data = [
    { sr: "१", college: "यशवंतराव चव्हाण इन्स्टिट्यूट ऑफ सायन्स, सातारा.", grade: "A++" },
    { sr: "२", college: "दहिवडी कॉलेज दहिवडी, जि. सातारा.", grade: "A++" },
    { sr: "३", college: "धनंजयराव गाडगीळ वाणिज्य महाविद्यालय, सातारा.", grade: "A++" },
    { sr: "४", college: "डी.पी. भोसले कॉलेज कोरेगाव, जि. सातारा.", grade: "A++" },
    { sr: "५", college: "बळवंत कॉलेज विटा जि. सांगली", grade: "A++" },
    { sr: "६", college: "डॉ.पतंगराव कदम महाविद्यालय, रामानंदनगर बुर्ली ता. पलूस जि. सांगली.", grade: "A++" },
    { sr: "७", college: "राजर्षी छत्रपती शाहू महाविद्यालय, कोल्हापूर.", grade: "A++" },
    { sr: "८", college: "दादा पाटील महाविद्यालय, कर्जत जि. अहमदनगर.", grade: "A++" },
    { sr: "९", college: "S.S.G.M. कॉलेज कोपरगाव, जि. अहमदनगर.", grade: "A++" },
    { sr: "१०", college: "महात्मा फुले महाविद्यालय, पिंपरी, पुणे.", grade: "A++" },
    { sr: "११", college: "कर्मवीर भाऊराव पाटील महाविद्यालय, वाशी, सेक्टर 15 नवी मुंबई, जि. ठाणे.", grade: "A++" },
    { sr: "१२", college: "छत्रपती शिवाजी महाविद्यालय, सातारा.", grade: "A+" },
    { sr: "१३", college: "सद्गुरू गाडगे महाराज महाविद्यालय, कराड जि. सातारा.", grade: "A+" },
    { sr: "१४", college: "कर्मवीर भाऊराव पाटील महाविद्यालय, पंढरपूर जि. सोलापूर.", grade: "A+" },
    { sr: "१५", college: "कला व वाणिज्य महाविद्यालय, माढा, जि. सोलापूर.", grade: "A+" },
    { sr: "१६", college: "लक्ष्मीबाई भाऊराव पाटील महिला महाविद्यालय, सोलापूर.", grade: "A+" },
    { sr: "१७", college: "आर.बी.नारायणराव बोरावके महाविद्यालय, श्रीरामपूर जि. अहमदनगर.", grade: "A+" },
    { sr: "१८", college: "महात्मा फुले कला, वाणिज्य व विज्ञान महाविद्यालय, पनवेल जि. रायगड.", grade: "A+" },
    { sr: "१९", college: "लोकनेते रामशेठ ठाकूर कला, विज्ञान व वाणिज्य महाविद्यालय, मोखाडा जि. पालघर.", grade: "A+" },
    { sr: "२०", college: "आझाद कॉलेज ऑफ एज्युकेशन, सातारा.", grade: "A" },
    { sr: "२१", college: "इस्माईलसाहेब मुल्ला लॉ कॉलेज, सातारा.", grade: "A" },
    { sr: "२२", college: "सावित्रीबाई फुले महिला महाविद्यालय, सातारा.", grade: "A" },
    { sr: "२३", college: "सी.डी. जैन कॉलेज ऑफ कॉमर्स, श्रीरामपूर जि. अहमदनगर.", grade: "A" },
    { sr: "२४", college: "महाराजा जिवाजीराव शिंदे महाविद्यालय, श्रीगोंदा, जि. अहिल्यानगर.", grade: "A" },
  { sr: "२५", college: "राधाबाई काळे महिला महाविद्यालय, अहमदनगर.", grade: "A" },
  { sr: "२६", college: "अण्णासाहेब आवटे महाविद्यालय, मंचर ता. आंबेगाव जि. पुणे.", grade: "A" },
  { sr: "२७", college: "एस. एम. जोशी कॉलेज, हडपसर, पुणे.", grade: "A" },
  { sr: "२८", college: "श्रीपतराव कदम महाविद्यालय, शिरवळ, जि. सातारा.", grade: "B++" },
  { sr: "२९", college: "कला व वाणिज्य महाविद्यालय, पुसेगाव जि. सातारा.", grade: "B++" },
  { sr: "३०", college: "कर्मवीर भाऊराव पाटील अभियांत्रिकी महाविद्यालय, सदर बाजार, सातारा.", grade: "B++" },
  { sr: "३१", college: "प्रा.डॉ.एन.डी.पाटील महाविद्यालय, कालावधी मलकापूर जिल्हा कोल्हापूर.", grade: "B++" },
  { sr: "३२", college: "S.S.B कॉलेज ऑफ एज्युकेशन, श्रीरामपूर जि. अहमदनगर.", grade: "B++" },
  { sr: "३३", college: "डॉ.बाबासाहेब आंबेडकर महाविद्यालय, औंधगाव, पुणे.", grade: "B++" },
  { sr: "३४", college: "शरदचंद्र पवार महाविद्यालय, लोणंद जि. सातारा.", grade: "B+" },
  { sr: "३५", college: "यशवंतराव चव्हाण महाविद्यालय, पाचवड जि. सातारा.", grade: "B+" },
  { sr: "३६", college: "श्री. रावसाहेब रामराव पाटील महाविद्यालय, सावळाज ता. खानापूर जि. सांगली.", grade: "B+" },
  { sr: "३७", college: "चंद्राबाई शांताप्पा शेंदुरे महाविद्यालय, हुपरी जिल्हा कोल्हापूर.", grade: "B+" },
  { sr: "३८", college: "आबासाहेब मराठे कला व नवीन वाणिज्य, विज्ञान महाविद्यालय, राजापूर जिल्हा रत्नागिरी.", grade: "B+" },
  { sr: "३९", college: "वीर वाजेकर कला, वाणिज्य व विज्ञान महाविद्यालय, फुंदे, ता. उरण.", grade: "B+" },
  { sr: "४०", college: "सौ.मंगलताई रामचंद्र जगताप महाविद्यालय, उंब्रज. जि. सातारा.", grade: "B" },
  { sr: "४१", college: "कर्मवीर भाऊराव पाटील इन्स्टिट्यूट ऑफ मॅनेजमेंट स्टडीज अँड रिसर्च, सातारा.", grade: "B" }
  ];

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        नॅक मानांकन 
      </h2>
      <table className="min-w-full border border-gray-300 text-m text-center bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#F5E6CA] text-black font-semibold">
            <th className="border border-gray-300 px-4 py-2">अ.नं.</th>
            <th className="border border-gray-300 px-4 py-2">कॉलेजचे नाव</th>
            <th className="border border-gray-300 px-4 py-2">नॅक ग्रेड </th>
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
              <td className="border border-gray-300 px-4 py-2">{row.sr}</td>
              <td className="border border-gray-300 px-4 py-2 text-left">{row.college}</td>
              <td className="border border-gray-300 px-4 py-2">{row.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default naacAccreditationTable;
