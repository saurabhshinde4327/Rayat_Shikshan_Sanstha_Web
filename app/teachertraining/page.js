"use client";

import Footer from "../components/Footer";
import Link from "next/link";
import Header from "../components/Header";

export default function TeacherTrainingSchool() {
  const schools = [
    {
      id: "१",
      school: "सातारा, महात्मा फुले अध्यापक विद्यालय",
      principal: "-",
      atPost: "सातारा",
      taluka: "सातारा",
      district: "सातारा",
      stdCode: "२१६२",
      phone: "२३९२८३",
    },
    {
      id: "२",
      school: "सातारा, जिजामाता अधिपिका विद्यालय",
      principal: "पाटील मंगल श्रीधर",
      atPost: "सातारा",
      taluka: "सातारा",
      district: "सातारा",
      stdCode: "२१६२",
      phone: "२३८१३३",
    },
    {
      id: "३",
      school: "कुसूर, पांडुरंग देसाई अध्यापक विद्यालय",
      principal: "कांबळे बाळू मुकुंद",
      atPost: "कुसुर",
      taluka: "कराड",
      district: "सातारा",
      stdCode: "२१६४",
      phone: "२५०२६१",
    },
    {
      id: "४",
      school: "आष्टा, लठ्ठे अधिपाक विद्यालय",
      principal: "वंजारी बाबुराव शंकर",
      atPost: "आष्टा",
      taluka: "वाळवा",
      district: "सांगली",
      stdCode: "२३४२",
      phone: "२४३३४१",
    },
    {
      id: "५",
      school: "माहुली, विठ्ठलराव देशमुख अध्यापक विद्यालय",
      principal: "गोडे गोरक्षनाथ कोंडाजी",
      atPost: "माहुली",
      taluka: "खानापूर",
      district: "सांगली",
      stdCode: "२३४७",
      phone: "२६४०३४",
    },
    {
      id: "६",
      school: "रुकडी, श्री.छ.छ. शाहू अध्यापक विद्यालय",
      principal: "डोंगरे उत्तम बंडू",
      atPost: "रुकडी",
      taluka: "हातकणंगले",
      district: "कोल्हापूर",
      stdCode: "२३०",
      phone: "२५८५५३२",
    },
    {
      id: "७",
      school: "जामगाव, महाराजा माधवराव शिंदे ज्युनिअर कॉलेज ऑफ एज्युकेशन",
      principal: "जगदाळे सोपान सखाराम",
      atPost: "जामगाव",
      taluka: "पारनर",
      district: "अ.नगर",
      stdCode: "२४८८",
      phone: "२७३२२५",
    },
  ];

  return (
    <>
      {/* ===== FORCE LIGHT THEME ===== */}
      <div className="bg-white text-gray-800 dark:bg-white dark:text-gray-800 min-h-screen">

        <Header />

        {/* PAGE HEADER */}
        <section className="w-full h-[120px] relative bg-[#f6eee0]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
              अध्यापक विद्यालये
            </h3>

            <nav className="text-sm text-gray-600">
              <ol className="inline-flex">
                <li>
                  <Link href="/" className="text-[#7A0726] hover:underline">
                    मुख्य पृष्ठ
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-500">अध्यापक विद्यालये</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* TABLE SECTION */}
        <div className="bg-white p-6 flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-white shadow-lg rounded-xl overflow-auto border border-gray-300">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead className="bg-[#F5E6CA]">
                  <tr>
                    <th className="border border-black px-3 py-2">अ.क्र.</th>
                    <th className="border border-black px-3 py-2">शाळा</th>
                    <th className="border border-black px-3 py-2">प्राचार्य</th>
                    <th className="border border-black px-3 py-2">पोस्ट</th>
                    <th className="border border-black px-3 py-2">तालुका</th>
                    <th className="border border-black px-3 py-2">जिल्हा</th>
                    <th className="border border-black px-3 py-2">एसटीडी कोड</th>
                    <th className="border border-black px-3 py-2">फोन</th>
                  </tr>
                </thead>

                <tbody>
                  {schools.map((s, i) => (
                    <tr
                      key={s.id}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="border border-black px-3 py-2 text-center">{s.id}</td>
                      <td className="border border-black px-3 py-2">{s.school}</td>
                      <td className="border border-black px-3 py-2">{s.principal}</td>
                      <td className="border border-black px-3 py-2">{s.atPost}</td>
                      <td className="border border-black px-3 py-2">{s.taluka}</td>
                      <td className="border border-black px-3 py-2">{s.district}</td>
                      <td className="border border-black px-3 py-2 text-center">{s.stdCode}</td>
                      <td className="border border-black px-3 py-2 text-center">{s.phone}</td>
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
