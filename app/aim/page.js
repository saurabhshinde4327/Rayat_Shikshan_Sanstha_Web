"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header"; // adjust path if needed
import Footer from "../components/Footer";

export default function AimsPage() {
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
            ध्येश व उद्दिष्ट
          </h3>
          <nav className="text-sm md:text-base text-gray-600">
            <ol className="inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-[#7A0726] hover:underline">
                  मुख्य पृष्ठ
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-500">ध्येश व उद्दिष्ट</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="bg-white text-gray-800 px-4 py-12">
        <div className="max-w-5xl mx-auto text-base">

          {/* Card Container */}
          <div
            className="
              bg-[#fcfafa]
              rounded-xl
              p-6
              shadow-2xl
              border-t border-l 
              border-r-4 border-b-4
              border-[#e2476c]
            "
          >
            <ol className="list-decimal ml-4 space-y-3 text-gray-700 text-[18px] text-justify">
            <li className="text-justify leading-relaxed">
                रयत शिक्षण संस्थेची उद्दिष्ट्ये आणि ध्येये खालीलप्रमाणे:<br />
                भारताच्या भावी पिढीला आणि विशेषतः महाराष्ट्राच्या रहिवाशांना,
पूर्व-प्राथमिक ते विद्यापीठ स्तरापर्यंत, सामाजिक, सांस्कृतिक, वैज्ञानिक,
तांत्रिक, वैद्यकीय, कायदेशीर, कृषी, वाणिज्य, औद्योगिक आणि
शारीरिक प्रशिक्षणाचा समावेश असलेले उदार आणि व्यावसायिक शिक्षण
देणे;
              </li>
             <li className="text-justify leading-relaxed">वरील उद्देशांसाठी योग्य शिक्षकांना प्रशिक्षण देणे;<br />
              गावांच्या आणि ग्रामीण उद्योगांच्या उन्नतीसाठी ग्रामसेवकांना प्रशिक्षण
देणे;<br />
 परिस्थितीनुसार संस्थेची उद्दिष्ट्ये आणि ध्येये साध्य करण्यास पूरक
ठरतील अशा मोफत ग्रंथालये आणि वाचनालये, वसतिगृहे, निवासी
आणि सामान्य शाळा, महाविद्यालये, स्वायत्त महाविद्यालये, विद्यापीठ,
संशोधन संस्था, दूरस्थ शिक्षण आणि शैक्षणिक प्रकल्प आणि इतर संस्था
उघडणे;</li>
            </ol>

            {/* Bottom Info Box */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100 shadow">
              <p className="text-gray-600 text-m leading-relaxed text-justify">
वरीलपैकी कोणतीही उद्दिष्ट्ये आणि ध्येये साध्य करण्यासाठी आनुषंगिक
किंवा पूरक असलेल्या सर्व कायदेशीर गोष्टी आणि कृती करणे;<br />
 रयत शिक्षण संस्था &#39;कमवा आणि शिका&#39; या तत्त्वावर &#39;शिकताना कमवा&#39;
या माध्यमातून गरिबांच्या शिक्षणासाठी सुविधा पुरवेल. संस्थेच्या
संस्थांचे संचालन अशा प्रकारे केले जाईल की, लिंग, प्रदेश, धर्म, जात,
पंथ किंवा वर्ग असा कोणताही भेदभाव केला जाणार नाही आणि
शक्यतोवर शिक्षण शुल्क माफ असेल. ही संस्था अराजकीय असेल.
संस्थेच्या व्यवस्थापन परिषदेचे सदस्य, आजीवन सदस्य, शिक्षक आणि
कर्मचारी संस्थेच्या संस्थांच्या परिसरात कोणत्याही राजकीय कार्यात
सहभागी होणार नाहीत. संस्थेतील विद्यार्थी राजकारणात सक्रिय भाग
घेणार नाहीत आणि आपले संपूर्ण लक्ष शिक्षण पुढे नेण्यावर केंद्रित
करतील.              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
    <Footer />
    </>
  );
}
