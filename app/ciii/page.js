"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CIIITabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);


  const tabs = [
    "रयत CIII ",
    "यशवंतराव चव्हाण CIII – सातारा",
    "लक्ष्मीबाई भाऊराव पाटील – हडपसर",
    "RCIIF – खारघर",
  ];

  // Images for each tab (store in public/images/)
  const tabImages = {
    0: ["/images/c3.jpeg", "/images/c4.jpeg", "/images/c5.jpeg", "/images/c6.jpeg", "/images/c3.jpeg","/images/c4.jpeg"],
    // 1: ["/images/y1.jpg", "/images/y2.jpg"],
    // 2: ["/images/l1.jpg", "/images/l2.jpg"],
    // 3: ["/images/r1.jpg", "/images/r2.jpg"],
  };

  return (
    <>
      <Header />
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            रयत सेंटर फॉर इन्व्हेंशन, इनोव्हेशन अँड इन्क्यूबेशन (CIII)
          </h3> 
      
          <nav className="text-sm md:text-base text-gray-600" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-[#7A0726] hover:underline">
                  मुख्य पृष्ठ
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center text-gray-500">
                रयत सेंटर फॉर इन्व्हेंशन, इनोव्हेशन अँड इन्क्यूबेशन (CIII)
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-full font-semibold transition
                ${activeTab === index
                  ? "bg-[#8A0B36] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-white shadow-md rounded-xl p-6 text-gray-800 leading-relaxed text-[15px]">

          {/* TAB 1 */}
          {activeTab === 0 && (
            <>
              <h2 className="text-[25px] font-bold text-[#8A0B36] mb-3">
                रयत सेंटर फॉर इन्व्हेंशन, इनोव्हेशन अँड इन्क्यूबेशन (CIII)
              </h2>
              <p className="text-[20px]">
                कर्मवीर भाऊराव पाटील यांनी स्थापन केलेल्या रयत शिक्षण संस्थेने,
भारत सरकारच्या विज्ञान आणि तंत्रज्ञान विभागाद्वारे समर्थित अग्रगण्य तंत्रज्ञान व्यवसाय इनक्यूबेटर असलेल्या पुणे विद्यापीठाच्या विज्ञान आणि तंत्रज्ञान पार्क (सायटेक पार्क) आणि सुप्रसिद्ध जागतिक
अभियांत्रिकी सेवा प्रदाता असलेल्या टाटा टेक्नॉलॉजीज लिमिटेड यांच्या भागीदारीत, एका अत्याधुनिक सुसज्ज सुविधेत ;कौशल्य प्रशिक्षण, रोजगार वाढ, संशोधन आणि विकास, नवकल्पना आणि इनक्यूबेशन द्वारे उद्योजक परिसंस्था विकसित करण्यासाठी
बहुआयामी दृष्टिकोन वापरून रयत CIII (सेंटर फॉर इन्व्हेंशन,
इनोव्हेशन अँड इन्क्यूबेशन) ची स्थापना केली आहे.
              </p>

              <p className="mt-3 text-[20px] font-bold">
                येथे कौशल्य प्रशिक्षण, रोजगार निर्मिती, संशोधन, नवकल्पना
                आणि इनक्यूबेशन यांच्या माध्यमातून उद्योजक परिसंस्था
                विकसित केली जाते.
              </p>

              {/* Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
  {tabImages[0].map((img, index) => (
    <div
      key={index}
      className="rounded-lg overflow-hidden shadow cursor-pointer"
      onClick={() => setSelectedImage(img)}
    >
      <img
        src={img}
        alt={`CIII Image ${index + 1}`}
        className="w-full h-56 object-cover hover:scale-105 transition duration-300"
      />
    </div>
  ))}
</div>

            </>
          )}

          {/* TAB 2 */}
          {activeTab === 1 && (
            <>
              <h2 className="text-[25px] font-bold text-[#8A0B36] mb-3">
                यशवंतराव चव्हाण विज्ञान संस्था – CIII, सातारा
              </h2>
              <p className="text-[20px]">
              यशवंतराव चव्हाण विज्ञान संस्था, सेंटर फॉर इन्व्हेंशन, इनोव्हेशन अँड इन्क्यूबेशन (CIII), सातारा येथे आपले स्वागत आहे, हे एक प्रमुख स्टार्ट-अप इनक्यूबेशन केंद्र आहे जे नवकल्पनांना चालना देण्यासाठी
              आणि उद्योजक उपक्रमांना पाठिंबा देण्यासाठी समर्पित आहे. भाऊराव पाटील संशोधन प्रतिष्ठान (KBPRF) च्या आश्रयाखाली कार्यरत असलेले CIII, विज्ञान आणि तंत्रज्ञान पार्क (विज्ञान आणि तंत्रज्ञान विभाग, भारत सरकार) आणि रयत शिक्षण संस्था यांनी
              संयुक्तपणे स्थापन केलेला एक अनोखा उपक्रम आहे.
              </p>

              <p className="mt-3 text-[20px]">
                CIII मध्ये, आमचे प्राथमिक ध्येय आमच्या प्रदेशात नवकल्पनांचे संगोपन करणे, उद्योजकतेला पाठिंबा देणे आणि औद्योगिक विकासाला चालना देणे हे आहे. आम्ही स्टार्ट-अप्स आणि नवोन्मेषकांना
               वाढण्यासाठी, भरभराटीसाठी आणि यशस्वी होण्यासाठी अनुकूल वातावरण प्रदान करण्यास वचनबद्ध आहोत. नाविन्यपूर्ण कल्पना आणि यशस्वी व्यवसाय यांच्यातील दरी कमी करणारी एक मजबूत परिसंस्था तयार करणे हे आमचे ध्येय आहे.
              </p>

               <p className="mt-3 text-[20px]">
                CIII हे केवळ एक इनक्यूबेशन केंद्र नाही; ते प्रादेशिक औद्योगिक विकासासाठी एक उत्प्रेरक आहे. नाविन्यपूर्ण स्टार्ट-अप्सना पाठिंबा देऊन, आम्ही रोजगार निर्मिती, आर्थिक वाढ आणि आमच्या समाजाच्या सर्वांगीण विकासात योगदान देतो. शाश्वत आणि
               विस्तारण्यायोग्य उपायांवर आमचा भर आहे, ज्यामुळे आमचा प्रभाव महत्त्वपूर्ण आणि चिरस्थायी राहील याची खात्री होते.
              </p>

              {/* Images */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {tabImages[1].map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow">
                    <img
                      src={img}
                      alt={`Yashwantrao Image ${index + 1}`}
                      className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div> */}
            </>
          )}

          {/* TAB 3 */}
          {activeTab === 2 && (
            <>
              <h2 className="text-[25px] font-bold text-[#8A0B36] mb-3">
                लक्ष्मीबाई भाऊराव पाटील इनोव्हेशन फाउंडेशन सेंटर – हडपसर
              </h2>
              <p className="text-[20px]">
               सेंटर फॉर इन्व्हेंशन, इनोव्हेशन, अँड इन्क्यूबेशन (CIII), हडपसर, पुणे, जे आता लक्ष्मीबाई भाऊराव पाटील इनोव्हेशन फाउंडेशन म्हणून ओळखले जाते, याची स्थापना २०१७ साली झाली आणि ही
               एक ना-नफा संस्था (कलम-८ कंपनी) आहे, जी रयत शिक्षण संस्था आणि पुणे विद्यापीठाच्या विज्ञान आणि तंत्रज्ञान पार्क (सायटेक पार्क) यांच्यातील प्रतिष्ठित भागीदारीमुळे साकार झालेल्या सहयोगी
               उत्कृष्टतेचा पुरावा म्हणून उभी आहे.
              </p>

              <p className="mt-3 text-[20px]">
                CIII, हडपसर हे पुणे, हडपसरमधील नाविन्याचे प्रतीक आहे आणि त्याची स्थापना शिक्षण आणि उद्योग यांच्यात दुवा निर्माण करण्यासाठी करण्यात आली आहे.
                हे प्रादेशिक तसेच राष्ट्रीय आर्थिक विकासासाठी उत्प्रेरक म्हणून काम करते. त्याची आधुनिक सुविधा उदयोन्मुख उद्योजक, स्टार्टअप्स, तसेच पदवीधर विद्यार्थ्यांना (म्हणजे विज्ञान, अभियांत्रिकी, आरोग्यसेवा,
                उत्पादन, वित्त, रोबोटिक्स आणि इतर क्षेत्रे इत्यादी) उद्योजकतेची संस्कृती जोपासण्यासाठी आणि सक्षम करण्यासाठी आणि तंत्रज्ञान स्टार्टअप्सच्या वाढीसाठी अनुकूल वातावरण प्रदान करण्यासाठी सज्ज आहे..
              </p>

              {/* Images */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {tabImages[2].map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow">
                    <img
                      src={img}
                      alt={`LBP Image ${index + 1}`}
                      className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div> */}
            </>
          )}

          {/* TAB 4 */}
          {activeTab === 3 && (
            <>
              <h2 className="text-[25px] font-bold text-[#8A0B36] mb-3">
                रयत सेंटेनरी इनोव्हेशन अँड इन्क्युबेशन फाउंडेशन (RCIIF, खारघर)
              </h2>
              <p className="text-[20px]">
                रयत सेंटेनरी इनोव्हेशन अँड इन्क्युबेशन फाउंडेशन (RCIIF, खारघर) ही एक ना-नफा तत्त्वावर चालणारी कलम ८ अंतर्गत नोंदणीकृत कंपनी आहे, जी संपूर्ण भारतातील विद्यार्थी आणि व्यावसायिकांच्या स्वतंत्र संशोधनाची पूर्तता करते.
                सेंटर फॉर इन्व्हेंशन, इनोव्हेशन अँड इन्क्युबेशन (CIII), खारघर हे पुणे येथील सायन्स अँड टेक्नॉलॉजी पार्क आणि टाटा टेक्नॉलॉजीज यांनी उभारलेल्या अशा चार केंद्रांपैकी एक आहे, ज्याचा उद्देश अभियंत्यांना
               उच्च-स्तरीय सुविधा आणि सहाय्य प्रदान करणे, उद्योजकतेच्या भावनेला प्रोत्साहन देणे आणि तंत्रज्ञान स्टार्टअप्सना पाठिंबा देणे हा आहे.
              </p>

              <p className="mt-3 text-[20px]">
                खारघर येथील सेंटर फॉर इन्व्हेंशन, इनोव्हेशन अँड इन्क्युबेशन (CIII) हे तीन संस्थांद्वारे प्रत्यक्षात आणले गेले आहे, त्यापैकी टाटा टेक्नॉलॉजीज हार्डवेअर, सॉफ्टवेअर आणि प्रशिक्षणासाठी अनुभवी प्राध्यापकांच्या
स्वरूपात सहाय्य प्रदान करेल. दुसरीकडे, सायन्स अँड टेक्नॉलॉजी पार्क (TP) स्टार्टअप्सना पाठिंबा देण्याचे आणि उच्च-स्तरीय कौशल्य
प्रशिक्षण देण्याचे कौशल्य घेऊन आले आहे. रायत समूह ही १०० वर्षे जुनी शैक्षणिक संस्था आहे, ज्याचे महाराष्ट्रात ७५० पेक्षा जास्त महाविद्यालये, शाळा, वसतिगृहे, आश्रमशाळा आणि संलग्न युनिट्सचे
सर्वात मोठे जाळे आहे. CIII ची स्थापना दोन उद्दिष्टांसह करण्यात आली आहे.
              </p>

              <p className="mt-3 text-[20px]">
              पहिले म्हणजे चांगल्या नोकरीच्या संधी निर्माण करण्यासाठी उच्च-स्तरीय कौशल्य प्रशिक्षण प्रदान करणे आणि दुसरे म्हणजे तंत्रज्ञानाचे प्रशिक्षण घेतलेल्या तरुणांना त्यांचे स्टार्टअप सुरू
करण्यास प्रवृत्त करणे आणि या प्रक्रियेत नोकरी निर्माण करणारे बनवणे.
              </p>

              {/* Images */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {tabImages[3].map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow">
                    <img
                      src={img}
                      alt={`RCIIF Image ${index + 1}`}
                      className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div> */}
            </>
          )}

        </div>
        {selectedImage && (
  <div
  className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
  onClick={() => setSelectedImage(null)}
>

    <div
      className="relative max-w-5xl w-full p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-white text-3xl font-bold"
        onClick={() => setSelectedImage(null)}
      >
        &times;
      </button>

      <img
        src={selectedImage}
        alt="Preview"
        className="w-full max-h-[90vh] object-contain rounded-lg"
      />
    </div>
  </div>
)}

      </div>
      <Footer />
    </>
  );
}
