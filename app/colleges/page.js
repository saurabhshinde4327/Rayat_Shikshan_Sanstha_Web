"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CollegeNamePage() {

  // ---------------- DATA ----------------
  const members = [

    // 1️⃣ कर्मवीर भाऊराव पाटील विद्यापीठ, सातारा
    { id: "१", name: "छत्रपती शिवाजी कॉलेज, सातारा", website: "https://csc.ac.in/", university: "कर्मवीर भाऊराव पाटील विद्यापीठ, सातारा" },
    { id: "२", name: "यशवंतराव चव्हाण इन्स्टि. ऑफ सायन्स, सातारा", website: "https://ycis.ac.in/", university: "कर्मवीर भाऊराव पाटील विद्यापीठ, सातारा" },
    { id: "३", name: "धनंजयराव गाडगीळ वाणिज्य महाविद्यालय, सातारा", website: "https://www.dgccsatara.edu.in/", university: "कर्मवीर भाऊराव पाटील विद्यापीठ, सातारा" },

    // 2️⃣ शिवाजी विद्यापीठ, कोल्हापूर
    { id: "१", name: "सदगुरु गाडगे महराज कॉलेज, कराड", website: "https://www.sgm.edu.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "२", name: "आझाद कॉलेज ऑफ एज्युकेशन, सातारा", website: "https://www.azadcollegesatara.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "३", name: "दहिवडी कॉलेज, दहिवडी", website: "https://www.dahiwadicollege.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "४", name: "इस्माईलसाहेब मुल्ला लॉ कॉलेज, सातारा", website: "https://imlc.ac.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "५", name: "श्रीपतराव कदम महाविद्यालय, शिरवळ", website: "https://skmshirwal.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "६", name: "डी.पी भोसले कॉलेज, कोरेगाव", website: "https://dpbck.ac.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "७", name: "शरदचंद्र पवार महाविद्यालय, लोणंद", website: "http://www.spmlonand.ac.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "८", name: "सावित्रीबाई फुले महिला महाविद्यालय, सातारा", website: "https://www.spmmedu.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "९", name: "सौ. मंगलताई रामचंद्र जगताप महाविद्यालय, उंब्रज", website: "https://www.mrjmu.ac.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "१०", name: "यशवंतराव चव्हाण महाविद्यालय, पाचवड", website: "https://www.ycmpachwad.ac.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "११", name: "कला व वाणिज्य महाविद्यालय, पुसेगाव", website: "https://accp.ac.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "१२", name: "बळवंत कॉलेज, विटा", website: "https://www-balwantcollege-edu-in.translate.goog/?_x_tr_sl=en&_x_tr_tl=mr&_x_tr_hl=mr&_x_tr_pto=tc", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "१३", name: "डॉ.पतंगराव कदम महाविद्यालय, रामानंदनगर बुर्ली", website: "https://dpkmr.edu.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "१४", name: "श्री.रावसाहेब रामराव पाटील महाविद्यालय, सावळज", website: "https://rrpatilcollege.com/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "१५", name: "राजर्षि छत्रपती शाहू कॉलेज, कोल्हापूर", website: "https://www.rcsc.ac.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "१६", name: "चंद्राबाई शांताप्पा शेंडूरे कॉलेज, हुपरी", website: "csscollegehpr-edu-in.", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
    { id: "१७", name: "प्रा.डॉ.एन. डी. पाटील महाविद्यालय, पेरीड मलकापूर", website: "https://ndpmmalkapur-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=mr&_x_tr_hl=mr&_x_tr_pto=tc", university: "शिवाजी विद्यापीठ, कोल्हापूर" },

    // 3️⃣ पुण्यश्लोक अहिल्यादेवी होळकर सोलापूर विद्यापीठ, सोलापूर
    { id: "१", name: "कर्मवीर भाऊराव पाटील महाविद्यालय, पंढरपूर", website: "https://www.kbpm.ac.in/", university: "पुण्यश्लोक अहिल्यादेवी होळकर सोलापूर विद्यापीठ, सोलापूर" },
    { id: "२", name: "कला व वाणिज्य महाविद्यालय, माढा", website: "https://www.accmadha.in/", university: "पुण्यश्लोक अहिल्यादेवी होळकर सोलापूर विद्यापीठ, सोलापूर" },
    { id: "३", name: "लक्ष्मीबाई भाऊराव पाटील महिला महाविद्यालय, सोलापूर", website: "#", university: "पुण्यश्लोक अहिल्यादेवी होळकर सोलापूर विद्यापीठ, सोलापूर" },

    // 4️⃣ सावित्रीबाई फुले पुणे विद्यापीठ, पुणे
    { id: "१", name: "रा.ब. नारायणराव बोरावके कॉलेज, श्रीरामपूर", website: "https://www.rbnbcollege.com/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "२", name: "सी.डी. जैन कॉलेज ऑफ कॉमर्स, श्रीरामपूर", website: "https://cdjcollege.com/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "३", name: "दादा पाटील महाविद्यालय, कर्जत", website: "https://dpcollege.in/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "४", name: "एस.एस.जी.एम. कॉलेज, कोपरगाव", website: "https://www.ssgmcollege.org/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "५", name: "एस.एस.बी कॉलेज ऑफ एज्युकेशन, श्रीरामपूर", website: "https://ssbcollege.com/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "६", name: "महाराजा जिवाजीराव शिंदे महाविद्यालय, श्रीगोंदा", website: "http://www.mjsshrigonda.com/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "७", name: "राधाबाई काळे महिला महाविद्यालय, अहिल्यानगर", website: "https://www.rkmmanr.org/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "८", name: "अण्णासाहेब आवटे कॉलेज, मंचर", website: "https://aacmanchar.edu.in/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "९", name: "महात्मा फुले महाविद्यालय, पिंपरी", website: "https://www.mpcollegepimpri.edu.in/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "१०", name: "डॉ. बाबासाहेब आंबेडकर महाविद्यालय, औंधगाव, पुणे", website: "https://dbacap.edu.in/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },
    { id: "११", name: "एस. एम. जोशी महाविद्यालय, हडपसर, पुणे", website: "https://www.smjoshicollege.edu.in/", university: "सावित्रीबाई फुले पुणे विद्यापीठ, पुणे" },

    // 5️⃣ मुंबई विद्यापीठ, मुंबई
    { id: "१", name: "महात्मा फुले कला वाणिज्य व विज्ञान महाविद्यालय, पनवेल", website: "https://mpasccollege.edu.in/", university: "मुंबई विद्यापीठ, मुंबई" },
    { id: "२", name: "वीर वाजेकर कला, वाणिज्य व विज्ञान महाविद्यालय, फुंडे", website: "https://www.veervajekarascc.edu.in/", university: "मुंबई विद्यापीठ, मुंबई" },
    { id: "३", name: "कर्मवीर भाऊराव पाटील महाविद्यालय, वाशी, नवी मुंबई", website: "https://www.kbpcollegevashi.edu.in/", university: "मुंबई विद्यापीठ, मुंबई" },
    { id: "४", name: "लोकनेते रामशेठ ठाकूर कला विज्ञान व वाणिज्य महाविद्यालय, मोखाडा", website: "https://www.asccmokhada.co.in/", university: "मुंबई विद्यापीठ, मुंबई" },
    { id: "५", name: "आबासाहेब मराठे आर्ट्स अॅन्ड न्यू कॉमर्स, सायन्स कॉलेज, राजापूर", website: "https://amcrajapur.ac.in/", university: "मुंबई विद्यापीठ, मुंबई" },

    // 6️⃣ डॉ.बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ, लोणेरे
    { id: "१", name: "कर्मवीर भाऊराव पाटील कॉलेज ऑफ इंजिनिअरिंग, सातारा", website: "https://www.kbpcoes.edu.in/", university: "डॉ.बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ, लोणेरे" },

    // 7️⃣ महाराष्ट्र राज्य तंत्र शिक्षण मंडळ, मुंबई
    { id: "१", name: "कर्मवीर भाऊराव पाटील तंत्रनिकेतन, वर्ये, सातारा", website: "http://www.kbppoly.edu.in/", university: "महाराष्ट्र राज्य तंत्र शिक्षण मंडळ, मुंबई" },

    // 8️⃣ IMSR - शिवाजी विद्यापीठ, कोल्हापूर (IMSR)
    { id: "१", name: "कर्मवीर भाऊराव पाटील इन्स्टिट्यूट मॅनेजमेंट स्टडीज अॅन्ड रिसर्च, सातारा", website: "https://www.kbpimsr.ac.in/", university: "शिवाजी विद्यापीठ, कोल्हापूर" },
  ];

  const itemsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterUniversity, setFilterUniversity] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // -------- UNIVERSITY OPTIONS --------
  const universityOptions = useMemo(() => {
    const set = new Set();
    members.forEach((m) => set.add(m.university));
    return ["All", ...Array.from(set)];
  }, []);

  // -------- FILTER + SORT --------
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    let list = members.filter((m) =>
      m.name.toLowerCase().includes(q)
    );

    if (filterUniversity !== "All") {
      list = list.filter((m) => m.university === filterUniversity);
    }

    list.sort((a, b) => {
      if (sortBy === "name")
        return a.name.localeCompare(b.name, "mr");

      return a.university.localeCompare(b.university, "mr");
    });

    return list;
  }, [searchQuery, filterUniversity, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterUniversity, sortBy]);

  // ---------- UI ----------
  return (
    <>
      <Header />

      <div className="bg-white text-gray-700">
        <section className="w-full h-[120px] bg-[#f6eee0] flex flex-col items-center justify-center">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
            महाविद्यालये
          </h3>

          <nav className="text-sm md:text-base text-gray-600 mt-2">
            <Link href="/" className="text-[#7A0726] hover:underline">
              मुख्य पृष्ठ
            </Link>{" "}
            / महाविद्यालये
          </nav>
        </section>

        <div className="min-h-screen p-6 flex flex-col items-center">
          <div className="w-full max-w-5xl mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="flex-1">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="शोधा: महाविद्यालयाचे नाव"
                className="w-full md:w-80 px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="flex gap-3 items-center">
              <select
                value={filterUniversity}
                onChange={(e) => setFilterUniversity(e.target.value)}
                className="px-3 py-2 border rounded-lg bg-white"
              >
                {universityOptions.map((u) => (
                  <option key={u} value={u}>
                    {u === "All" ? "सर्व विद्यापीठे" : u}
                  </option>
                ))}
              </select>

              {/* <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg bg-white"
              >
                <option value="name">नामानुसार</option>
                <option value="university">युनिव्हर्सिटीनुसार</option>
              </select> */}
            </div>
          </div>

          {/* TABLE */}
          <div className="w-full max-w-5xl shadow-lg rounded-xl overflow-hidden border text-lg md:text-md font-medium">
            <table className="w-full border-collapse ">
              <thead className="bg-[#F5E6CA]">
                <tr>
                  <th className="border px-4 py-3">अ.नं.</th>
                  <th className="border px-4 py-3">महाविद्यालयाचे नाव</th>
                  <th className="border px-4 py-3">वेबसाईट</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-100 transition-colors"}>
                    <td className="border px-4 py-3 text-center font-bold text-[#7A0726]">
                      {startIndex + index + 1}
                    </td>
                    <td className="border px-4 py-3">{item.name}</td>
                    <td className="border px-4 py-3 text-center">
                      {item.website === "#" ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <a href={item.website} target="_blank" className="text-blue-600 underline">
                          भेट द्या
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex gap-2 mt-6 flex-wrap justify-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-full border ${currentPage === index + 1
                    ? "bg-[#BF294C] text-white"
                    : "text-[#BF294C] border-[#BF294C]"
                  }`}
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
