"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function About() {
  const containerRef = useRef(null);

  // Simple "animate on scroll" effect using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* ===== Hero / Title Section ===== */}
      <section className="w-full h-[120px] relative bg-[#f6eee0]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
              इतिहास
            </h3>

            <nav className="text-sm md:text-base text-gray-600">
              <ol className="inline-flex">
                <li>
                  <Link href="/" className="text-[#7A0726] hover:underline">
                    मुख्य पृष्ठ
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-500">इतिहास</li>
              </ol>
            </nav>
          </div>
        </section>

      {/* ===== Main Content ===== */}
      <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
        <div className="container mx-auto px-6 py-10 md:py-18 max-w-6xl">

          {/* ===== History Section (Full Width Card) ===== */}
          <section className="mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#7A0726]">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-10 bg-[#7A0726] rounded-full"></div>
                  <h2 className="text-[#7A0726] font-bold text-3xl md:text-3xl uppercase tracking-tight">
                    रयत शिक्षण संस्थेचा इतिहास
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none text-blackleading-loose text-justify space-y-6">
                  <p>
                    महाराष्ट्राच्या शैक्षणिक व सामाजिक इतिहासात <span className="font-semibold text-[#7A0726]">रयत शिक्षण संस्थेचे</span> स्थान अनन्यसाधारण आणि प्रेरणादायी आहे. पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील यांनी ४ ऑक्टोबर १९१९ रोजी काले येथे संस्थेची स्थापना केली. ग्रामीण भागातील शेतकरी, शेतमजूर, कामगार आणि वंचित समाज घटकांतील मुलांना शिक्षणाची संधी मिळावी, हा त्यामागील मुख्य उद्देश होता, <span className="italic">“कमवा आणि शिका” (Earn and Learn)</span> ही संकल्पना प्रत्यक्षात आणून शिक्षण सर्वसामान्यांच्या दारी नेण्याचे महान कार्य कर्मवीरांनी केले.
                  </p>
                  <p>
                    सुरुवातीच्या काळात आर्थिक साधनांची कमतरता, सामाजिक विरोध आणि जातीय अडथळे असूनही कर्मवीर भाऊराव पाटील यांनी जिद्दीने कार्य चालू ठेवले. त्यांनी विद्यार्थ्यांना श्रमाच्या माध्यमातून शिक्षणाची संधी दिली. विद्यार्थी शेतात, वसतिगृहात किंवा इतर कामांमध्ये श्रम करून स्वतःच्या शिक्षणाचा खर्च भागवत असत. या प्रयोगामुळे शिक्षणात स्वावलंबन, श्रमसंस्कार आणि सामाजिक समता यांचा संगम घडून आला.
                  </p>
                  <p>
                    रयत शिक्षण संस्थेने ग्रामीण समाजजीवनात शिक्षणाचा व्यापक प्रसार केला. प्राथमिक शिक्षणापासून महाविद्यालयांपर्यंत विविध स्तरांवरील शैक्षणिक संस्था उभारून शिक्षणाचा विस्तार केला. विशेषतः मुलींच्या शिक्षणासाठी स्वतंत्र शाळा व वसतिगृहे सुरू करून स्त्रीशिक्षणाला चालना दिली. सामाजिक समतेचा पुरस्कार करताना सर्व जातीधर्मांतील विद्यार्थ्यांना समान संधी देण्याची परंपरा संस्थेने जोपासली.
                  </p>
                  <p>
                    स्वातंत्र्योत्तर काळात संस्थेने उच्च शिक्षण क्षेत्रातही पाऊल टाकले. कला, वाणिज्य, विज्ञान, अभियांत्रिकी, कृषी कायदा, व्यवस्थापन, शिक्षण अशा विविध शाखांमध्ये महाविद्यालये सुरू करून ग्रामीण युवकांना उच्च शिक्षणाची दारे खुली केली. आधुनिक तंत्रज्ञानाचा वापर, संशोधनाला प्रोत्साहन, तसेच स्पर्धा परीक्षा मार्गदर्शन केंद्रे सुरू करून विद्यार्थ्यांना व्यापक संधी उपलब्ध करून दिल्या आहेत.
                  </p>
                  <p className="font-medium bg-red-50 p-4 rounded-lg border-l-4 border-[#7A0726] italic">
                    "शिक्षण हे समाज परिवर्तनाचे एकमेव साधन आहे हे जाणून पद्मभूषण डॉ.कर्मवीर भाऊराव पाटील यांनी रयत शिक्षण संस्था स्थापन करण्याची घोषणा केली."
                  </p>
                  <p>
                    १९२४ मध्ये संस्थेचे सातारा येथे स्थलांतर करण्यात आले. एक हरिजन विद्यार्थी घेऊन अण्णांनी वसतिगृह सुरू केले. पुढे रयत शिक्षण संस्थेच्या शिक्षण कार्यास त्यांनी वाहून घेतले. स्थानिक लोकांच्या गरजेतून आणि रयत शिक्षण संस्थेच्या सहकार्यातून कर्मवीरांच्या प्रेरणेने शिक्षण प्रसाराचे कार्य संख्यात्मकदृष्ट्या आणि गुणात्मकदृष्ट्या ही गेली १०६ वर्षे सातत्याने वृद्धिंगत होत आले आहे. १९१९ साली लावलेल्या ज्ञानरोपट्याचे आज एका प्रचंड वटवृक्षात रूपांतर झाले आहे.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Founder Section (Alternating Left) ===== */}
          <section className="flex flex-col md:flex-row items-center gap-12 mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
            {/* Image Side */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#7A0726] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/kbp.png"
                    alt="Dr. Karmaveer Bhaurao Patil"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-44 h-44 bg-yellow-400 rounded-full -z-10 opacity-20 blur-2xl"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-2/3">
              <h3 className="text-xl text-[#7A0726] font-bold uppercase mb-2 tracking-widest">
                संस्थापक
              </h3>
              <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील
              </h2>
              <div className="w-24 h-1.5 bg-[#7A0726] mb-8 rounded-full"></div>

              <div className="prose prose-lg text-black leading-relaxed space-y-5 text-justify">
                <p>
                  महाराष्ट्राच्या ग्रामीण भागात राहणाऱ्या बहुजन समाजाच्या अभ्युदयासाठी एका सेवावृत्ती आणि मानवतावादी दृष्टिकोनातून काम करणारी रयत शिक्षण संस्था भारतातील एक आदर्श आणि अग्रगण्य शिक्षण संस्था आहे. वटवृक्षासारखा विस्तार असणाऱ्या या संस्थेने औपचारिक आणि अनौपचारिक शिक्षणासंदर्भात दिलेले योगदान अनन्यसाधारण असेच आहे.
                </p>
                <p>
                  आधुनिक शिक्षण भगीरथ असा ज्यांचा सार्थ गौरव केला जातो, त्या <span className="font-semibold text-[#7A0726]">पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील</span> हे महात्मा ज्योतिबा फुले, राजर्षी शाहू महाराज, महर्षी विठ्ठल रामजी शिंदे, संत गाडगे महाराज, डॉ. बाबासाहेब आंबेडकर या थोर परंपरेतील एक कृतिशील समाजसुधारक, निर्भिड सत्यशोधक व शिक्षणतज्ञ आहेत.
                </p>
                <p>
                  आपल्या शैक्षणिक कार्याच्या माध्यमातून त्यांनी समाजातील गोरगरीब, वंचित, उपेक्षित, अज्ञानी समाज बांधवांसाठी ज्ञानाच्या नव्या प्रकाश वाटा निर्माण केल्या. कर्मवीर भाऊराव पाटील यांच्या कार्याची सर्वात महत्त्वाचे दोन वैशिष्ट्ये म्हणजे त्यांनी समाजातील सर्व जाती धर्माच्या विद्यार्थ्यांना एकाच वसतिगृहाची स्थापना करून खऱ्या अर्थाने समताधिष्ठित समाज व्यवस्थेचा कृतीशील पाया घातला.
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
                  "स्वावलंबन आणि समप्रतिष्ठा हे दोन मूलमंत्र समोर ठेवले पाहिजे याची जाणीव कर्मवीर भाऊराव पाटील यांनी आपल्या प्रत्यक्ष कृतीतून करून दिली."
                </blockquote>
                <p>
                  वसतिगृहयुक्त शिक्षण आणि कमवा व शिका योजना या मूल विचारावर शिक्षण संस्थेची उभारणी करून कर्मवीरांनी प्राथमिक शिक्षणापासून ते विद्यापीठीय शिक्षणापर्यंतची शिक्षण व्यवस्था निर्माण करण्याचा अविश्रांत प्रयत्न केला आहे.
                </p>
              </div>
            </div>
          </section>



          {/* ===== Laxmibai Section (Alternating Right) ===== */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
            {/* Image Side */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#7A0726] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/Laxmibai.jpg"
                    alt="Laxmibai Patil"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-300 rounded-full -z-10 opacity-20 blur-2xl"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-2/3">
              {/* <h3 className="text-xl text-[#7A0726] font-bold uppercase mb-2 tracking-widest md:text-right">
                प्रेरणास्थान
              </h3> */}
              <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-tight md:text-right">
                सौ. लक्ष्मीबाई पाटील
              </h2>
              <div className="w-24 h-1.5 bg-[#7A0726] mb-8 rounded-full md:ml-auto"></div>

              <div className="prose prose-lg text-black leading-relaxed space-y-5 text-justify">
                <p>
                  कर्मवीर भाऊराव पाटील उर्फ ​​अण्णा आणि त्यागाची मूर्ती असलेल्या त्यांच्या पत्नी <span className="font-semibold text-[#7A0726]">सौ. लक्ष्मीबाई पाटील उर्फ ​​वहिनी</span> यांनी बोर्डिंग हाऊसचा खर्च भागवण्यासाठी आपले पवित्र मंगळसूत्रसुद्धा, एक-एक करून सर्व सोन्याचे दागिने दिले होते.
                </p>
                <p>
                  वहिनींचा जन्म जरी एका सनातनी आणि पारंपरिक कुटुंबात झाला असला तरी, त्यांनी वेगवेगळ्या जातींच्या मुलांची स्वतःच्या मुलांप्रमाणे काळजी घेतली. स्वयंसेवी शाळांमधील शिक्षक आणि संस्थेचे आजीवन सदस्य अत्यंत कमी पगारावर, आणि काही वेळा तर पगाराशिवायही काम करत होते. अशा प्रकारे कर्मवीर भाऊरावांनी आजीवन सदस्यांचा एक तेजस्वी आणि आदर्श संघ आणि कार्यकर्त्यांचे एक विशाल जाळे तयार केले.
                </p>
                <p>
                  त्यांच्या कार्याचे अद्वितीय मूल्य ओळखून, पुणे विद्यापीठाने त्यांना डी.लिट. पदवीने आणि भारत सरकारने पद्मभूषण पुरस्काराने सन्मानित केले. कर्मवीर भाऊराव पाटील यांचे उत्तुंग व्यक्तिमत्त्व, उदात्त आदर्श, पारदर्शक चारित्र्य, साधे जीवन, असामान्य त्याग आणि संततुल्य जीवन यांचा महाराष्ट्रातील जनतेवर दृढ आणि संस्कारक्षम प्रभाव पडला.
                </p>
              </div>
            </div>
          </section>


        </div>
      </div>

      <Footer />
    </>
  );
}
