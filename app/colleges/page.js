"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CollegeNamePage() {
 const members = [
    { id: "१", name: "छत्रपती शिवाजी महाविद्यालय, सातारा", website: "https://csc.ac.in/" },
    { id: "२", name: "सद्गुरू गाडगे महाराज महाविद्यालय, कराड, जि. सातारा", website: "https://www.sgm.edu.in/" },
    { id: "३", name: "आझाद कॉलेज ऑफ एज्युकेशन, सातारा", website: "https://www.azadcollegesatara.in/" },
    { id: "४", name: "यशवंतराव चव्हाण इन्स्टिट्यूट ऑफ सायन्स, सातारा", website: "https://ycis.ac.in/" },
    { id: "५", name: "दहिवडी कॉलेज, दहिवडी, जि. सातारा", website: "https://www.dahiwadicollege.in/" },
    { id: "६", name: "इस्माईलसाहेब मुल्ला लॉ कॉलेज, सातारा", website: "https://imlc.ac.in/" },
    { id: "७", name: "धनंजयराव गाडगीळ महाविद्यालय, सातारा", website: "https://www.dgccsatara.edu.in/" },
    { id: "८", name: "श्रीपतराव कदम महाविद्यालय, शिरवळ, जि. सातारा", website: "https://skmshirwal.in/" },
    { id: "९", name: "डी. पी. भोसले महाविद्यालय, कोरेगाव, जि. सातारा", website: "https://dpbck.ac.in/" },
    { id: "१०", name: "शरदचंद्र पवार महाविद्यालय, लोणंद, जि. सातारा", website: "http://www.spmlonand.ac.in/" },
    { id: "११", name: "सावित्रीबाई फुले महिला महाविद्यालय, सातारा", website: "https://www.spmmedu.in/" },
    { id: "१२", name: "सौ. मंगलताई रामचंद्र जगताप महाविद्यालय, उंब्रज, जि. सातारा", website: "https://www.mrjmu.ac.in/" },
    { id: "१३", name: "यशवंतराव चव्हाण महाविद्यालय, पंचवड, जि. सातारा", website: "https://www.ycmpachwad.ac.in/" },
    { id: "१४", name: "कला व वाणिज्य महाविद्यालय, पुसेगाव, जि. सातारा", website: "https://accp.ac.in/" },
    { id: "१५", name: "कर्मवीर भाऊराव पाटील अभियांत्रिकी महाविद्यालय, सातारा", website: "https://www.kbpcoes.edu.in/" },
    { id: "१६", name: "कर्मवीर भाऊराव पाटील पॉलिटेक्निक, वरये, सातारा", website: "http://www.kbppoly.edu.in/" },
    { id: "१७", name: "कर्मवीर भाऊराव पाटील IMSR, वरये, सातारा", website: "https://www.kbpimsr.ac.in/" },
    { id: "१८", name: "कर्मवीर भाऊराव पाटील महाविद्यालय, पंढरपूर", website: "https://www.kbpm.ac.in/" },
    { id: "१९", name: "कला आणि वाणिज्य महाविद्यालय, मेधा", website: "#" },
    { id: "२०", name: "लक्ष्मीबाई भाऊराव पाटील महिला महाविद्यालय, सोलापूर", website: "#" },
    { id: "२१", name: "बळवंत कॉलेज, विटा, जि. सांगली", website: "https://www.balwantcollege.edu.in/" },
    { id: "२२", name: "पतंगराव कदम महाविद्यालय, सांगली", website: "https://dpkmr.edu.in/" },
    { id: "२३", name: "रावसाहेब रामराव पाटील महाविद्यालय, सांगली", website: "https://rrpatilcollege.com/" },
    { id: "२४", name: "राजर्षी छत्रपती शाहू महाविद्यालय, कोल्हापूर", website: "https://www.rcsc.ac.in/" },
    { id: "२५", name: "चंद्राबाई शांताप्पा शेंदुरे महाविद्यालय, कोल्हापूर", website: "https://csscollegehpr.edu.in/" },
    { id: "२६", name: "एन. डी. पाटील महाविद्यालय, कोल्हापूर", website: "https://ndpmmalkapur.com/" },
    { id: "२७", name: "आबासाहेब मराठे महाविद्यालय, रत्नागिरी", website: "https://amcrajapur.ac.in/" },
    { id: "२८", name: "आर. बी. एन. बोरावके महाविद्यालय, अहमदनगर", website: "https://www.rbnbcollege.com/" },
    { id: "२९", name: "सी. डी. जैन महाविद्यालय, अहमदनगर", website: "https://cdjcollege.com/" },
    { id: "३०", name: "दादा पाटील महाविद्यालय, कर्जत", website: "https://dpcollege.in/" },
    { id: "३१", name: "एसएसजीएम महाविद्यालय, कोपरगाव", website: "https://www.ssgmcollege.org/" },
    { id: "३२", name: "केबीपी महाविद्यालय, वाशी, नवी मुंबई", website: "https://www.kbpcollegevashi.edu.in/" },
    { id: "३३", name: "स्वामी सहजानंद भारती महाविद्यालय, अहमदनगर", website: "https://ssbcollege.com/" },
    { id: "३४", name: "महाराजा जिवाजीराव शिंदे महाविद्यालय, अहमदनगर", website: "http://www.mjsshrigonda.com/" },
    { id: "३५", name: "राधाबाई काळे महिला महाविद्यालय, अहमदनगर", website: "https://www.rkmmanr.org/" },
    { id: "३६", name: "अण्णासाहेब आवटे महाविद्यालय, पुणे", website: "https://aacmanchar.edu.in/" },
    { id: "३७", name: "महात्मा फुले महाविद्यालय, पिंपरी", website: "https://www.mpcollegepimpri.edu.in/" },
    { id: "३८", name: "डॉ. बाबासाहेब आंबेडकर महाविद्यालय, पुणे", website: "https://dbacap.edu.in/" },
    { id: "३९", name: "एस. एम. जोशी महाविद्यालय, पुणे", website: "https://www.smjoshicollege.edu.in/" },
    { id: "४०", name: "महात्मा फुले महाविद्यालय, पनवेल", website: "https://mpasccollege.edu.in/" },
    { id: "४१", name: "वीर वाजेकर महाविद्यालय, रायगड", website: "https://www.veervajekarascc.edu.in/" },
    { id: "४२", name: "लोकनेते रामशेठ ठाकूर महाविद्यालय, पालघर", website: "https://www.asccmokhada.co.in/" },
    { id: "४३", name: "रयत इन्स्टिट्यूट ऑफ रिसर्च अँड डेव्हलपमेंट, सातारा", website: "https://rsiac.edu.in/" },
  ];

  const itemsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(members.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = members.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Header />

      {/* ===== FORCE LIGHT MODE WRAPPER ===== */}
      <div className="bg-white text-gray-700 dark:bg-white dark:text-gray-700">

        {/* ===== Page Header ===== */}
        <section className="w-full h-[120px] relative bg-[#f6eee0]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
              महाविद्यालये
            </h3>

            <nav className="text-sm md:text-base text-gray-600">
              <ol className="inline-flex">
                <li>
                  <Link href="/" className="text-[#7A0726] hover:underline">
                    मुख्य पृष्ठ
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-500">महाविद्यालये</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* ===== Table Section ===== */}
        <div className="min-h-screen p-6 flex flex-col items-center bg-white">
          <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
            <table className="w-full border-collapse">
              <thead className="bg-[#F5E6CA]">
                <tr>
                  <th className="border px-4 py-3">अ.नं.</th>
                  <th className="border px-4 py-3">महाविद्यालयाचे नाव</th>
                  <th className="border px-4 py-3">वेबसाईट</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((item, index) => (
                  <tr
                    key={`${item.id}-${index}`}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border px-4 py-3 text-center">{item.id}</td>
                    <td className="border px-4 py-3">{item.name}</td>
                    <td className="border px-4 py-3 text-center">
                      {item.website && item.website !== "#" ? (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          भेट द्या
                        </a>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== Pagination ===== */}
          <div className="flex gap-2 mt-6 flex-wrap justify-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-full border transition
                  ${
                    currentPage === index + 1
                      ? "bg-[#BF294C] text-white"
                      : "text-[#BF294C] border-[#BF294C]"
                  }
                  hover:bg-[#D3632C] hover:text-white`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
