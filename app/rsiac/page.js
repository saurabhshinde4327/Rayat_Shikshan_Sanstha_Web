"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const images = [
  "/images/r1.jpg",
  "/images/r2.jpg",
  "/images/r3.jpg",
  "/images/r4.jpg",
  "/images/r5.jpg",
  "/images/r6.jpg",
  "/images/r7.jpg",
  "/images/r8.jpg",
  "/images/r9.jpg",
];

export default function RayatCenter() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Header />

      {/* HERO / BREADCRUMB */}
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase text-center">
           रयत सायन्स इंन्होव्हेशन अ‍ॅक्टिव्हिटी सेंटर 
          </h3>

          <nav className="text-sm text-gray-600">
            <ol className="inline-flex">
              <li>
                <Link href="/" className="text-[#7A0726] hover:underline">
                मुख्य पृष्ठ
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-500">रयत सायन्स इंन्होव्हेशन अ‍ॅक्टिव्हिटीसेंटर 
</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="w-full py-12 px-6 lg:px-20 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight mt-3 text-black">
              रयत सायन्स इंन्होव्हेशन अ‍ॅक्टिव्हिटी सेंटर 

            </h1>

            <p className="text-gray-700 mt-4 leading-relaxed text-lg text-justify">
             रयत सायन्स इंन्होव्हेशन अ‍ॅक्टिव्हिटी सेंटर : रयत शिक्षण संस्थेचे अध्यक्ष, माननीय शरद पवार आणि सुप्रसिद्ध शास्त्रज्ञ, माननीय डॉ. अनिल काकोडकर यांच्या शुभहस्ते १४ फेब्रुवारी २०२० रोजी उद्घाटन झालेले रयत विज्ञान आणि नवोपक्रम कृती केंद्र हे सातारा शहरामधील एक अद्वितीय, अनौपचारिक विज्ञान शिक्षण केंद्र आहे. विद्यार्थ्यांमध्ये वैज्ञानिक दृष्टिकोन रुजवणे आणि सातारा जिल्ह्याच्या ग्रामीण भागात विज्ञानाचा प्रसार करणे हे या केंद्राचे उद्दिष्ट आहे. विद्यार्थ्यांना विज्ञानातील नाविन्यपूर्ण उपक्रम हाती घेण्यासाठी प्रोत्साहित करण्याच्या आणि प्रेरणा देण्यासाठी राजीव गांधी विज्ञान आणि तंत्रज्ञान आयोग (RGSTC) आणि नेहरू विज्ञान केंद्र (NSCM) यांच्या भक्कम पाठिंब्याने हे केंद्र सुरू करण्यात आले आहे. सातारा येथील रयत विज्ञान आणि नवोपक्रम कृती केंद्र अंदाजे ५५० चौरस मीटर परिसरात पसरलेले आहे, ज्यामध्ये एक नवोपक्रम कृती कक्ष, मनोरंजक विज्ञान कक्ष, तात्पुरते प्रदर्शन दालन, २०१९ च्या नोबेल पारितोषिकांवरील आणि मानसिक आरोग्यावरील प्रदर्शन, रोलिंग बॉल शिल्पकला आणि एक खुले विज्ञान उद्यान यांचा समावेश आहे.

<br />
 १. विज्ञान आणि तंत्रज्ञानातील प्रतिभेचे संगोपन करण्यासाठी वैज्ञानिक संस्कृतीला चालना देणे आणि वैज्ञानिक दृष्टिकोन रुजवणे, तसेच सर्वांगीण विकासात बदलाचे माध्यम म्हणून विज्ञानाचे तंत्रज्ञानात रूपांतर करण्यासाठी वैज्ञानिक शाखांमध्ये संशोधन करणे.
२. जागतिक दर्जाचे विज्ञान केंद्र विकसित करणे, त्याची मालकी घेणे आणि चालवणे, ज्यामध्ये प्रदर्शने, संग्रहालये आणि शैक्षणिक मनोरंजनाचा समावेश असेल आणि जे विज्ञानाचा प्रसार करणारी एक प्रमुख संस्था म्हणून कार्य करेल व समाजाच्या कल्याणासाठी आधुनिक दळणवळण तंत्रज्ञानाच्या क्षमतेचा उपयोग करेल.
३. प्रदर्शने, परिसंवाद, लोकप्रिय व्याख्याने, विज्ञान शिबिरे आणि इतर विविध कार्यक्रमांचे आयोजन करून विद्यार्थी आणि सामान्य माणसाच्या फायद्यासाठी शहरे, शहरी आणि ग्रामीण भागात विज्ञान आणि तंत्रज्ञानाचा प्रसार करणे.

            </p>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(src)}
                className="cursor-pointer bg-white rounded-xl shadow p-2 flex items-center justify-center
                hover:shadow-xl transition-all border border-[#903c53] h-[130px]"
              >
                <img
                  src={src}
                  alt={`RSIAC Image ${index + 1}`}
                  className="object-cover h-full w-full rounded-xl"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl p-3 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black"
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
