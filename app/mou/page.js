"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header"; // path adjust if needed
import Footer from "../components/Footer";

export default function EqualOpportunityCell() {
  // Helper function to convert English numbers to Marathi
  const toMarathiNumber = (num) => {
    const marathiDigits = ['०','१','२','३','४','५','६','७','८','९'];
    return String(num)
      .split('')
      .map(d => marathiDigits[d] ?? d)
      .join('');
  };

  const rows = [
    {
      sr: 1,
      name: "टाटा कन्सल्टन्सी सर्व्हिसेस लिमिटेड (TCS) आणि रयत शिक्षण संस्था",
      purpose: "रयत शिक्षण संस्थेतून पदवीधर होणाऱ्या विद्यार्थ्यांची रोजगारक्षमता सुधारण्यासाठी प्रशिक्षण सेवा प्रदान करणे",
      date: "१८-०२-२०१५",
    },
    {
      sr: 2,
      name: "लुपिन लिमिटेड आणि रयत शिक्षण संस्था",
      purpose: "रयत शिक्षण संस्थेतील १२वी (विज्ञान) उत्तीर्ण विद्यार्थ्यांना उद्योग-केंद्रित दर्जेदार शिक्षण आणि नोकरीच्या संधी उपलब्ध करून देणे",
      date: "१५-०५-२०१५",
    },
    {
      sr: 3,
      name: "रयत शिक्षण संस्था आणि टाटा बिझनेस सपोर्ट सर्व्हिसेस लिमिटेड",
      purpose: "'कमवा आणि शिका' योजनेद्वारे तात्पुरत्या नोकरीच्या संधी निर्माण करणे आणि शैक्षणिक प्रयत्नांना पाठिंबा देणे",
      date: "०४-१२-२०१५",
    },
    {
      sr: 4,
      name: "चोन्नम नॅशनल युनिव्हर्सिटी, दक्षिण कोरिया आणि रयत शिक्षण संस्था",
      purpose: "शैक्षणिक कार्यक्रमांवर सहकार्य",
      date: "१०-०३-२०१५",
    },
    {
      sr: 5,
      name: "SNS फाउंडेशन आणि रयत शिक्षण संस्था",
      purpose: "शालेय शिक्षणाच्या गुणवत्तेत सुधारणा करण्यासाठी",
      date: "०९-०२-२०१६",
    },
    {
      sr: 6,
      name: "टाटा इन्स्टिट्यूट ऑफ सोशल सायन्सेस, मुंबई आणि कर्मवीर भाऊराव पाटील महाविद्यालय, वाशी",
      purpose: "राष्ट्रीय विद्यापीठ विद्यार्थी कौशल्य विकास कार्यक्रम (NUSSD)",
      date: "२०१५",
    },
    {
      sr: 7,
      name: "RGSTC, HBCSE आणि रयत शिक्षण संस्था",
      purpose: "महाराष्ट्रातील शाळांमध्ये विज्ञान आणि नवोपक्रम कृती केंद्रांसाठी (SIAC) सहाय्य",
      date: "२४-०२-२०१६",
    },
    {
      sr: 8,
      name: "BVG इंडिया लिमिटेड पुणे आणि रयत शिक्षण संस्था",
      purpose: "उद्योग-केंद्रित दर्जेदार शिक्षण आणि नोकरीच्या संधी उपलब्ध करून देणे",
      date: "२२-०५-२०१७",
    },
    {
      sr: 9,
      name: "रयत शिक्षण संस्था आणि YCMOU आणि BVG इंडिया लिमिटेड",
      purpose: "पदवी, पदविका आणि प्रमाणपत्रांसाठी अभ्यासक्रम आखणे आणि निर्धारित करणे",
      date: "०४-०८-२०१७",
    },
    {
      sr: 10,
      name: "MSSDS आणि रयत शिक्षण संस्था",
      purpose: "महाराष्ट्रातील तरुणांची रोजगारक्षमता वाढवण्यासाठी कौशल्य प्रशिक्षण",
      date: "१७-०२-२०१८",
    },
  ];

  return (
    <>
    <div className="min-h-screen w-full bg-[#f5f6f8]">

      {/* ================= HEADER ================= */}
      <Header title="ABOUT THE SANSTHA" subtitle="ABOUT SANSTHA" />

      {/* ================= PAGE TITLE ================= */}
      <section className="w-full h-[90px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <h3 className="text-[#7A0726] text-2xl md:text-3xl font-extrabold uppercase">
            सामंजस्य करार
          </h3>
          <nav className="text-sm text-gray-600">
            <ol className="inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-[#7A0726] hover:underline">मुख्य पृष्ठ</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-500">सामंजस्य करार</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ================= TABLE SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center py-6"
      >
        <div className="w-[82%] md:w-[78%] lg:w-[80%] bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F5E6CA]">
                <th className="p-3 font-bold text-gray-800 border border-black">अ.क्र.</th>
                <th className="p-3 font-bold text-gray-800 border border-black">शीर्षक</th>
                <th className="p-3 font-bold text-gray-800 border border-black">उद्देश</th>
                <th className="p-3 font-bold text-gray-800 border border-black">तारीख</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="bg-white">
                  <td className="p-3 border border-black text-gray-700">{toMarathiNumber(row.sr)}</td>
                  <td className="p-3 border border-black text-gray-700">{row.name}</td>
                  <td className="p-3 border border-black text-gray-700">{row.purpose}</td>
                  <td className="p-3 border border-black text-gray-700">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </motion.div>
    </div>
    <Footer />
    </>
  );
}
