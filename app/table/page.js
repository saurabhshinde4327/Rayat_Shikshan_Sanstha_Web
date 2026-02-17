"use client";

import Link from "next/link";
import Header from "../components/Header"; // adjust path if needed
import Footer from "../components/Footer";

export default function HistoryPage() {

  // Helper function to convert English numbers to Marathi
  const toMarathiNumber = (num) => {
    const marathiDigits = ['०','१','२','३','४','५','६','७','८','९'];
    return String(num).split('').map(d => marathiDigits[d] ?? d).join('');
  }

  const awardsData = [
    { sr: 1, name: "डॉ. बाबासाहेब आंबेडकर शासनाचा पुरस्कार. भारताचे ", year: "१९९४" },
    { sr: 2, name: "दलित मित्र पुरस्कार राज्य सरकार ", year: "१९९४" },
    { sr: 3, name: "राजर्षी शाहू पुरस्कार राजर्षी छ. शाहू मेमोरियल ट्रस्ट, कोल्हापूर ", year: "१९९८" },
    { sr: 4, name: "आदर्श शिक्षण संस्था पुरस्कार महाराष्ट्र सरकार", year: "२००१" },
    { sr: 5, name: "श्री संत गाडगे महाराज सेवा पुरस्कार श्री संत गाडगे महाराज मिशन, मुंबई ", year: "२००२" },
    { sr: 6, name: "शिक्षण महर्षी डॉ. पंजाबराव उपाख्य भाऊसाहेब देशमुख स्मृती पुरस्कार यशवंतराव चव्हाण महाराष्ट्र मुक्त विद्यापीठ, नाशिक", year: "२००३" },
    { sr: 7, name: "एक्सलन्स इन एज्युकेशन अवॉर्ड-2011 डॉ. डी.वाय. पाटील प्रतिष्ठान, नवी मुंबई ", year: "२०११" },
    { sr: 8, name: "महाराष्ट्र शासनातर्फे शाहू, फुले, आंबेडकर पुरस्कार ", year: "२०१३" },
    { sr: 9, name: "महाराष्ट्र फाउंडेशन (अमेरिका आणि साधना ट्रस्ट) तर्फे 9 जीवनगौरव पुरस्कार", year: "२०१४" },
    { sr: 10, name: "कृतीसमिती, शिवाजी विद्यापीठ, कोल्हापूर तर्फे १० वटवृक्ष शिव-पुरस्कार", year: "२०१५" },
    { sr: 11, name: "सातारा भूषण पुरस्कार आर.एन. गोडबोले ट्रस्ट, सातारा ", year: "२०१६" },
    { sr: 12, name: "पुणे महानगरपालिकेतर्फे 12 भारतरत्न मौलाना अबुल कलाम आझाद पुरस्कार", year: "२०१६" },
    { sr: 13, name: "प्राचार्य आर.के. शिवाजी विद्यापीठ, कोल्हापूर तर्फे कणबरकर पुरस्कार ", year: "२०१७" },
    { sr: 14, name: "कर्मयोगी पुरस्कार प्रा. डॉ.पी.बी. पाटील, सोशल फोरम ट्रस्ट, सांगली ", year: "२०१८" },
    { sr: 15, name: "राष्ट्रीय बंधुता साहित्य परिषद, पुणे तर्फे १५ कर्मवीर भुराव पाटील क्रांतीदूत पुरस्कार", year: "२०१९" },
  ];

  return (
     <>
    <div className="min-h-screen w-full bg-[#f5f6f8]">

      {/* ================= HEADER ================= */}
      <Header title="ABOUT THE SANSTHA" subtitle="ABOUT SANSTHA" />

      {/* ================= PAGE TITLE ================= */}
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
            पुरस्कार व सन्मान
          </h3>
          <nav className="text-sm md:text-base text-gray-600">
            <ol className="inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-[#7A0726] hover:underline">
                  होम
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-500">पुरस्कार व सन्मान</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ================= AWARDS & HONORS ================= */}
      <section className="pt-4 pb-12 flex flex-col items-center bg-gray-50">
        <div className="w-full max-w-6xl px-4 bg-white shadow-xl  rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse border border-black">
            <thead>
              <tr className="bg-[#F5E6CA] border border-black">
                <th className="p-3 font-bold text-gray-800 border border-black">
                  क्र. सं.
                </th>
                <th className="p-3 font-bold text-gray-800 border border-black">
                  पुरस्कार व सन्मान
                </th>
                <th className="p-3 font-bold text-gray-800 border border-black">
                  वर्ष
                </th>
              </tr>
            </thead>
            <tbody>
              {awardsData.map((row, index) => (
                <tr key={index} className="bg-white border border-black">
                  <td className="p-3 text-gray-700 border border-black">
                    {toMarathiNumber(row.sr)}
                  </td>
                  <td className="p-3 text-gray-700 border border-black">
                    {row.name}
                  </td>
                  <td className="p-3 text-gray-700 border border-black">
                    {row.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <Footer />
   </>
  );
}
