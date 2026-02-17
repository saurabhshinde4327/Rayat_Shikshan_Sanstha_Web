"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AshramshalaTable() {
  const schools = [
    {
      id: 1,
      name: "राजर्षी छ.शाहू महाराज प्राथमिक आणि माध्यमिक आश्रमशाळा, आडोशी",
      head: "श्री.भोसले अरुण वसंत (प्रभारी)",
      district: "ठाणे",
      address: "आडाशी, ता. मोखाडा, जि. ठाणे",
      courses: "पहिली ते दहावी",
    },
    {
      id: 2,
      name: "महात्मा जोतिबा फुले प्राथमिक आणि माध्यमिक आश्रमशाळा",
      head: "श्री.कापसे सुभाष रघुनाथ ",
      district: "ठाणे",
      address: "आसे, ता. मोखाडा, जि. ठाणे",
      courses: "पहिली ते दहावी",
    },
    {
      id: 3,
      name: "महर्षी विठ्ठल रामजी शिंदे प्राथमिक आणि माध्यमिक आश्रमशाळा, मोखाडा",
      head: "श्री.शेळके अर्जुन लक्ष्मण",
      district: "ठाणे",
      address: "मोखाडा, ता. मोखाडा, जि. ठाणे",
      courses: "पहिली ते दहावी",
    },
    {
      id: 4,
      name: "क्रांतीज्योती सावित्रीबाई फुले प्राथमिक आणि माध्यमिक आश्रमशाळा, चांभारशेत",
      head: "श्री शिंदे विलास हरिबा (प्रभारी)",
      district: "ठाणे",
      address: "चांभारशेत, ता. जव्हार, जि. ठाणे",
      courses: "पहिली ते दहावी",
    },
    {
      id: 5,
      name: "प्राथमिक व माध्यमिक आश्रमशाळा, वावर",
      head: "श्री.लहारे हनमंत महादू ",
      district: "ठाणे",
      address: "वावर, ता. जव्हार, जि. ठाणे",
      courses: "पहिली ते दहावी",
    },
    {
      id: 6,
      name: "प्राथमिक आणि माध्यमिक आश्रमशाळा, नर्मदानगर",
      head: "श्री.भोईटे संजय व्यंकटेश ",
      district: "नंदुरबार",
      address: "नर्मदानगर, ता. तळोदा, जि. नंदुरबार",
      courses: "पहिली ते दहावी",
    },
    {
      id: 7,
      name: "कर्मवीर भाऊराव पाटील प्राथमिक व माध्यमिक आश्रमशाळा",
      head: "श्री. मालव धनंजय",
      district: "अहमदनगर",
      address: "पिंपळदरी, ता. अकोले, जि. अहमदनगर",
      courses: "पहिली ते दहावी",
    },
    {
      id: 8,
      name: "डॉ. बाबासाहेब आंबेडकर प्राथमिक आणि माध्यमिक आश्रमशाळा, खरशेत",
      head: "सौ.निकुंभ उर्मिला सुनिल ",
      district: "नाशिक",
      address: "खरशेत, ता. त्र्यंबकेश्वर, जि. नाशिक",
      courses: "पहिली ते दहावी",
    },
  ];

  const toMarathiNumber = (num) =>
    num.toString().replace(/\d/g, (d) => "०१२३४५६७८९"[d]);

  return (
    <>
      {/* ===== FORCE LIGHT THEME ===== */}
      <div className="bg-white text-gray-800 dark:bg-white dark:text-gray-800 min-h-screen">

        <Header />

        {/* PAGE HEADER */}
        <section className="w-full h-[120px] relative bg-[#f6eee0]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
              आश्रमशाळा
            </h3>

            <nav className="text-sm md:text-base text-gray-600">
              <ol className="inline-flex">
                <li>
                  <Link href="/" className="text-[#7A0726] hover:underline">
                    मुख्य पृष्ठ
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-500">आश्रमशाळा</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* TABLE SECTION */}
        <div className="bg-white px-6 pt-6 pb-10 flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="bg-white shadow-lg rounded-xl overflow-auto border border-gray-300">
              <table className="w-full border-collapse text-sm md:text-base bg-white">
                <thead className="bg-[#F5E6CA]">
                  <tr>
                    <th className="px-4 py-3 border border-gray-700">अ. नं.</th>
                    <th className="px-4 py-3 border border-gray-700">आश्रमशाळेचे नाव</th>
                    <th className="px-4 py-3 border border-gray-700">मुख्याध्यापक</th>
                    <th className="px-4 py-3 border border-gray-700">जिल्हा</th>
                    <th className="px-4 py-3 border border-gray-700">पत्ता</th>
                    <th className="px-4 py-3 border border-gray-700">अभ्यासक्रम</th>
                  </tr>
                </thead>

                <tbody>
                  {schools.map((school, index) => (
                    <tr
                      key={school.id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-blue-50`}
                    >
                      <td className="px-4 py-3 border border-gray-700 text-center">
                        {toMarathiNumber(school.id)}
                      </td>
                      <td className="px-4 py-3 border border-gray-700">{school.name}</td>
                      <td className="px-4 py-3 border border-gray-700">{school.head}</td>
                      <td className="px-4 py-3 border border-gray-700">{school.district}</td>
                      <td className="px-4 py-3 border border-gray-700">{school.address}</td>
                      <td className="px-4 py-3 border border-gray-700">{school.courses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  );
}

