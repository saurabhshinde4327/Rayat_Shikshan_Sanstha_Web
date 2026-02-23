"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function AimsPage() {
  // Simple fade-in effect on mount
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
        el.classList.remove("opacity-0", "translate-y-4");
      }, index * 100);
    });
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-[#f8f9fa] font-sans">
        <Header />

        {/* ================= PAGE TITLE ================= */}
        <section className="w-full h-[120px] relative bg-[#f6eee0]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
              ध्येय आणि उद्दिष्टे
            </h3>

            <nav className="text-sm md:text-base text-gray-600">
              <ol className="inline-flex">
                <li>
                  <Link href="/" className="text-[#7A0726] hover:underline">
                    मुख्य पृष्ठ
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-500">ध्येय आणि उद्दिष्टे</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <div className="container mx-auto px-4 py-8 max-w-5xl">

          <div className="space-y-12">

            {/* 1. Main Objectives Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-[#7A0726] animate-fade-in opacity-0 translate-y-4 transition-all duration-700">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-2xl font-bold text-[#7A0726] mb-8 border-b pb-4 inline-block">
                  १. रयत शिक्षण संस्थेची प्रमुख उद्दिष्ट्ये
                </h2>

                <ul className="space-y-6">
                  {/* 1.A */}
                  <li className="flex gap-4 items-start group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-50 text-[#7A0726] font-bold rounded-full group-hover:bg-[#7A0726] group-hover:text-white transition-colors duration-300">
                      १.
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed pt-1 text-justify">
                      भारतातील उदयोन्मुख पिढीला आणि विशेष करून महाराष्ट्रातील
                      रहिवाशांना <span className="font-semibold text-[#7A0726]">उदात्त व व्यावसायिक शिक्षण</span> प्राथमिक ते विद्यापीठ
                      स्तरापर्यंत देणे. ज्यामध्ये सामाजिक, सांस्कृतिक, वैज्ञानिक, तांत्रिक,
                      शेती, व्यापार, औद्योगिक, शारीरिक प्रशिक्षण यांचा अंतर्भाव असेल.
                    </p>
                  </li>

                  {/* 1.B */}
                  <li className="flex gap-4 items-start group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-50 text-[#7A0726] font-bold rounded-full group-hover:bg-[#7A0726] group-hover:text-white transition-colors duration-300">
                      २.
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed pt-1 text-justify">
                      वरील हेतूसाठी योग्य शिक्षकांना प्रशिक्षण देणे.
                    </p>
                  </li>

                  {/* 1.C */}
                  <li className="flex gap-4 items-start group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-50 text-[#7A0726] font-bold rounded-full group-hover:bg-[#7A0726] group-hover:text-white transition-colors duration-300">
                      ३.
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed pt-1 text-justify">
                      गाव कामगारांना गावाच्या उन्नतीसाठी व ग्रामीण उद्योगासाठी प्रशिक्षित करणे.
                    </p>
                  </li>

                  {/* 1.D */}
                  <li className="flex gap-4 items-start group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-50 text-[#7A0726] font-bold rounded-full group-hover:bg-[#7A0726] group-hover:text-white transition-colors duration-300">
                      ४.
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed pt-1 text-justify">
                      संस्थेच्या ध्येय धोरणानुसार व परिस्थितीजन्य निर्णयानुसार मोफत ग्रंथालये,
                      वाचनालये, वसतिगृहे, निवासी व सर्वसाधारण शाळा, महाविद्यालये व
                      अन्य संस्था सुरू करणे.
                    </p>
                  </li>

                  {/* 1.E */}
                  <li className="flex gap-4 items-start group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-50 text-[#7A0726] font-bold rounded-full group-hover:bg-[#7A0726] group-hover:text-white transition-colors duration-300">
                      ५.
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed pt-1 text-justify">
                      वरील ध्येय धोरणाच्या अधीन राहून सर्व कायदेशीर बाबी व नियम करणे.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Earn and Learn Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[FFFFFF] text-black rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in opacity-0 translate-y-4 transition-all duration-700 transform hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    {/* Icon: Education/Self reliance */}
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-[#7A0726]">२. स्वावलंबन तत्त्व</h2>
                </div>
                <p className="text-lg leading-relaxed text-black text-justify">
                  स्वावलंबन तत्वातून रयत शिक्षण संस्था गरजूंना <span className="text-yellow-400 font-bold">"कमवा व शिका"</span> या
                  योजनेच्या माध्यमातून शैक्षणिक सुविधा पुरवेल. संस्थेचे कामकाज लिंग, धर्म,
                  प्रदेश, जात, वंश, वर्ण हे भेद न करता व शक्य तेथे शिक्षण फी न घेता
                  द्यावेत.
                </p>
              </div>

              {/* 3. Non-Political Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 animate-fade-in opacity-0 translate-y-4 transition-all duration-700 transform hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-100 rounded-lg text-gray-600">
                    {/* Icon: Policy/Shield */}
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#7A0726] uppercase tracking-wide">३. अराजकीय धोरण</h2>
                </div>
                <p className="text-lg leading-relaxed text-black text-justify">
                  संस्था <span className="font-semibold text-[#7A0726]">अराजकीय</span> असेल. व्यवस्थापन समिती सदस्य, आजीव सदस्य,
                  शिक्षक, नोकर हे राजकीय बाबींमध्ये सहभागी होणार नाहीत. संस्थेचे
                  विद्यार्थी राजकारणात सक्रिय सहभाग घेणार नाहीत ते त्यांच्या शिक्षणावर
                  निष्ठा ठेवतील.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
