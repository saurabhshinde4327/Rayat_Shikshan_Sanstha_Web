  "use client";

  import React from "react";
  import Image from "next/image";
  import Link from "next/link";
  import Footer from "../components/Footer";
  import Header from "../components/Header";

  export default function StyledSchoolTable() {
    const branches = [
    { id: "१", name: "कराड, कराड, केशवराव पवार प्राथमिक इंग्रजी माध्यम शाळा", region: "मध्य विभाग" },
    { id: "२", name: "कांदिवली, सह्याद्रीनगर, सह्याद्रीनगर, कांदिवली, न्यू इंग्लिश स्कूल प्रथमिक विभाग", region: "रायगड विभाग" },
    { id: "३", name: "वाशी, वाशी, मॉडर्न स्कूल, के.जी.ई.एन.जी.", region: "रायगड विभाग" },
    { id: "४", name: "वाशी, वाशी, आधुनिक प्राथमिक शाळा, इंजी", region: "मध्य विभाग" },
    { id: "५", name: "गोंदवले खुर्द, गोंदवले खुर्द, गोपाळ कृष्ण विद्यालय", region: "रायगड विभाग" },
    { id: "६", name: "रुकडी, रुकडी, कर्मवीर भाऊराव पाटील प्रथमिक विद्यामंडी", region: "दक्षिण विभाग" },
    { id: "७", name: "सातारा, सातारा, आर बी काळे जीवन शिक्षण मंदिर", region: "मध्य विभाग" },
    { id: "८", name: "सातारा, सातारा, जिजामाता प्रॅक्टिसिंग स्कूल", region: "मध्य विभाग" },
    { id: "९", name: "सातारा, सातारा, अण्णासाहेब कल्याणी विद्यालय बालकमंदिर", region: "मध्य विभाग" },
    { id: "१०", name:"सातारा, सातारा, सावित्रीबाई फुले बालकमंदिर", region: "मध्य विभाग" },
    { id: "११", name:"विद्यानगर, विद्यानगर-सैदापूर, एस जी एम प्रथमिक विद्यामंदिर", region: "मध्य विभाग" },
    { id: "१२", name: "सोलापूर, सोलापूर, रावजी सखाराम प्रथमिक शाळा", region: "मध्य विभाग" },
    { id: "१३", name: "कुंभोज, कुंभोज, लक्ष्मीबाई भाहुराव पाटील बालक मंदिर", region: "दक्षिण विभाग" },
    { id: "१४", name: "औंधगाव, औंधगाव, पुणे, श्रीमंत जिवाजीराव बालक मंदिर", region: "पश्चिम विभाग" },
    { id: "१५", name: "शिरूर, शिरूर, न्यू इंग्लिश स्कूल, के जी ईएनजी मेड", region: "पश्चिम विभाग" },
    { id: "१६", name: "शिरूर, शिरूर, प्राथमिक शाळा, ENG MED", region: "पश्चिम विभाग" },
    { id: "१७", name: "हडपसर पी, हडपसर, साधना प्रथमिक विद्यामंदिर", region: "पश्चिम विभाग" },
    { id: "१८", name: "हडपसर पुणे 28, हडपसर, स्वर्गीय सौ.ल.भ.शिलीमकर बालकमंदिर मार मेड", region: "पश्चिम विभाग" },
    { id: "१९", name: "मंचर, मंचर, महात्मा गांधी विद्यालय, बलवडी", region: "पश्चिम विभाग" },
    { id: "२०", name: "औंधगाव, औंधगाव, प्रथमिक विद्यामंदिर", region: "पश्चिम विभाग" },
    { id: "२१", name: "कारंजा, कारंजा, प्राथमिक शाळा", region: "रायगड विभाग" },
    { id: "२२", name: "वाशी, वाशी, मॉडर्न स्कूल के जी, मराठी माध्यम", region: "रायगड विभाग" },
    { id: "२३", name: "वाशी, वाशी, मॉडर्न स्कूल, मराठी माध्यम", region: "रायगड विभाग" },
    { id: "२४", name: "गौतमनगर, गौतमनगर, श्री छ. संभाजी प्रथमिक विद्यालय", region: "उत्तर विभाग" },
    { id: "२५", name: "कोपरगाव, कोपरगाव, पदम मेहता प्रथमिक कन्या विद्यालय", region: "उत्तर विभाग" },
    { id: "२६", name: "कोपरगाव, कोपरगाव, कर्मवीर भाऊराव पाटील प्रथमिक विद्यामंदिर", region: "उत्तर विभाग" },
    { id: "२७", name: "अहमदनगर, अहमदनगर, सौ लक्ष्मीबाई भाऊराव पाटीलविद्यामंदिर प्रिल", region: "उत्तर विभाग" },
    { id: "२८", name: "बीड, कंकालेश्वर प्रथमिक विद्यामंदिर", region: "उत्तर विभाग" },
    { id: "२९", name: "श्रीरामपूर, श्रीरामपूर, कै. एस. के. सोमय्या प्रथमिक विद्यामंदिर", region: "उत्तर विभाग" },
    { id: "३०", name: "कारंजा, कारंजा, के जी ईएनजी मेड", region: "रायगड विभाग" },
    { id: "३१", name: "कांदिवली सह्याद्रीनगर, सह्याद्रीनगर, कांदिवली, न्यू इंग्लिश स्कूल बालवाडी विभाग", region: "रायगड विभाग" },
    { id: "३२", name: "चारकोप, चारकोप, कांदिवली, ज्ञानवर्धिनी विद्यालय प्रथमिक विभाग", region: "रायगड विभाग" },
    { id: "३३", name: "चारकोप, चारकोप, कांदिवली, ज्ञानवर्धिनी विद्यालय बालवाडी", region: "रायगड विभाग" },
    { id: "३४", name: "मंचर, मंचर, प्रथमिक विद्यामंदिर", region: "पश्चिम विभाग" },
    { id: "३५", name: "हडपसर पुणे 28, हडपसर, पुणे -28, साधना इंग्रजी माध्यम प्राथमिक शाळा", region: "पश्चिम विभाग" },
    { id: "३६", name: "नेर्ले, नेर्ले, कर्मवीर भाऊराव पाटील प्रथमिक विद्यालय", region: "दक्षिण विभाग" },
    { id: "३७", name: "विंचूर, विंचूर, कर्मव्वर भाऊराव पाटील प्रथमिक विद्यालय", region: "उत्तर विभाग" },
    { id: "३८", name: "सातारा, सातारा, अण्णासाहेब कल्याणी प्रथमिक विभाग शिबिर", region: "मध्य विभाग" },
    { id: "३९", name: "वडगाव, वडगाव मावळ, प्रथमिक विद्यामंदिर", region: "पश्चिम विभाग" },
  ];

    return (
      <>
        {/* ===== FORCE LIGHT MODE ===== */}
        <div className="bg-white text-gray-800 dark:bg-white dark:text-gray-800 min-h-screen">

          <Header />

          {/* ===== Page Header ===== */}
          <section className="w-full h-[120px] relative bg-[#f6eee0]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
                प्राथमिक विद्यालये
              </h3>

              <nav className="text-sm text-gray-600">
                <ol className="inline-flex">
                  <li>
                    <Link href="/" className="text-[#7A0726] hover:underline">
                      मुख्य पृष्ठ
                    </Link>
                    <span className="mx-2">/</span>
                  </li>
                  <li className="text-gray-500">प्राथमिक विद्यालये</li>
                </ol>
              </nav>
            </div>
          </section>

          {/* ===== Table Section ===== */}
          <div className="w-[95%] max-w-6xl mx-auto mt-8 mb-10 p-4 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border border-gray-300 text-sm sm:text-base bg-white">
                <thead className="bg-[#F5E6CA]">
                  <tr>
                    <th className="border p-2">अ.नं.</th>
                    <th className="border p-2">शाखेचे नाव</th>
                    <th className="border p-2">विभाग</th>
                  </tr>
                </thead>

                <tbody>
                  {branches.map((b) => (
                    <tr
                      key={b.id}
                      className="odd:bg-[#F9FAFB] even:bg-white text-gray-800"
                    >
                      <td className="border p-2 text-center">{b.id}</td>
                      <td className="border p-2">{b.name}</td>
                      <td className="border p-2">{b.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Footer />

        </div>
      </>
    );
  }
