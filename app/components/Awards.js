"use client";

import {
  FaBullhorn,
  FaUniversity,
  FaSchool,
  FaBuilding,
  FaHome,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnnouncementAwardsPage() {
  const [newsList, setNewsList] = useState([]);

  /* ================= MANUAL NEWS ================= */
  const manualNewsList = [
    // {
    //   title:
    //     "कर्मवीर विद्याप्रबोधिनीच्या वतीने छत्रपती शिवाजी कॉलेज, सातारा येथे 21 व 22 जानेवारी,2026 रोजी पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील राज्यस्तरीय महाविद्यालयीन वक्तृत्व स्पर्धेचे आयोजन",
    //   file_path:
    //     "/uploads/1767337089991-1767334480244-vaktrutwa_spardha.pdf",
    // },
    // {
    //   title: "जाहीर नोटीस 10-01-2026",
    //   file_path: "/notice",
    // },
  ];

  /* ================= FETCH API NEWS ================= */
  useEffect(() => {
    fetch("/api/getscrollingnews")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNewsList(data);
        }
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  /* ================= MERGE MANUAL + API ================= */
  const allNews = [...manualNewsList, ...newsList];

  /* ================= AWARDS ================= */
  const awards = [
    { year: "३४", title: ["प्राथमिक विद्यालये"], link: "/primaryschool", icon: FaSchool },
    { year: "४३४", title: ["माध्यमिक विद्यालये"], link: "/schools", icon: FaSchool },
    { year: "३३", title: ["इंग्रजी माध्यम विद्यालये"], link: "/#", icon: FaSchool },
    { year: "१९२", title: ["उच्च माध्यमिक विद्यालये"], link: "/#", icon: FaSchool },
    { year: "२६", title: ["कनिष्ठ महाविद्यालये"], link: "/#", icon: FaUniversity },
    { year: "४३", title: ["महाविद्यालये (महिला ०४)"], link: "/colleges", icon: FaUniversity },
    { year: "७५", title: ["एकूण वसतिगृहे"], link: "/#", icon: FaHome },
    { year: "०७", title: ["प्रशासकीय कार्यालये"], link: "/offices", icon: FaBuilding },
    {
      year: "४,१८,०७९",
      title: ["एकूण विद्यार्थी – मुले: २,१०,६९८ | मुली: २,०७,३८१"],
      link: "#",
      icon: FaUserGraduate,
    },
    {
      year: "११,६१७",
      title: ["एकूण सेवक – पुरुष: ७,५९३ | स्त्री: ४,०२४"],
      link: "#",
      icon: FaUsers,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]">

      {/* ================= ANNOUNCEMENT BAR ================= */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#590010] via-[#8A0B36] to-[#590010] py-2">
        <div className="flex items-center gap-4 pl-4">
          
          <div className="flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full">
            <FaBullhorn className="text-white" />
            <span className="text-white font-bold text-sm uppercase">
              सूचना
            </span>
          </div>

          <div className="overflow-hidden flex-1">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...allNews, ...allNews].map((news, idx) => (
                <Link
                  key={idx}
                  href={news.file_path || "#"}
                  target="_blank"
                  className="px-6 text-white font-semibold hover:underline"
                >
                  {news.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= LOOPING CARDS ================= */}
      <section className="w-full py-16 overflow-hidden">
        <div
          className="loop-wrapper"
          onMouseEnter={(e) => e.currentTarget.classList.add("paused")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("paused")}
        >
          <div className="loop-track">
            {[...awards, ...awards].map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={i} href={item.link} className="slide-card">
                  <Icon className="text-3xl text-[#8A0B36] mb-3" />
                  <div className="text-3xl font-bold text-[#8A0B36]">
                    {item.year}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-gray-800 text-center">
                    {item.title.map((t, idx) => (
                      <div key={idx}>{t}</div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CSS ================= */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        .loop-wrapper {
          width: 100vw;
          overflow: hidden;
        }

        .loop-track {
          display: flex;
          gap: 24px;
          width: max-content;
          padding-left: 24px;
          animation: loop-scroll 50s linear infinite;
        }

        .loop-wrapper.paused .loop-track {
          animation-play-state: paused;
        }

        @keyframes loop-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .slide-card {
          min-width: 240px;
          max-width: 240px;
          background: white;
          border-radius: 24px;
          padding: 24px;
          border: 1px solid #8A0B36;
          text-align: center;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .slide-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #590010, #8A0B36, #C2175B);
          transform: translate(-100%, -100%);
          transition: transform 0.6s ease;
          z-index: -1;
        }

        .slide-card:hover::before {
          transform: translate(0, 0);
        }

        .slide-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 18px 40px rgba(0,0,0,0.25);
        }

        .slide-card:hover * {
          color: white !important;
        }
      `}</style>
    </div>
  );
}
