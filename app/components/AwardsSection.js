"use client";
import { useMemo, useState, useEffect } from "react";
import { FaBell, FaRegNewspaper, FaDownload } from "react-icons/fa";
import ViewAllAwardsBox from "./ViewAllAwardsBox";
import { useRouter } from "next/navigation";

const TABS = [
  { key: "Circulars", label: "परिपत्रके" },
  { key: "News", label: "नोटीस" },
];


export default function AwardsPremiumUltra() {
  const [tab, setTab] = useState(TABS[0].key);
  const [circulars, setCirculars] = useState([]);
  const [news, setNews] = useState([]);
  const router = useRouter();

  // 🔥 Force Download Function
 const handleDownload = (fileUrl, filename) => {
  if (!fileUrl) {
    alert("File not available");
    return;
  }

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = filename || "file.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



  // 🔥 Fetch Circulars & News
  useEffect(() => {
    async function fetchCirculars() {
  try {
    const res = await fetch("/api/getNews");
    const data = await res.json();
    setCirculars(Array.isArray(data) ? data : data.data || []);
  } catch (err) {
    console.error("Circulars API Error:", err);
    setCirculars([]);
  }
}

async function fetchNews() {
  try {
    const res = await fetch("/api/getNotices");
    const data = await res.json();
    setNews(Array.isArray(data) ? data : data.data || []);
  } catch (err) {
    console.error("News API Error:", err);
    setNews([]);
  }
}


    fetchCirculars();
    fetchNews();
  }, []);

  const items = useMemo(() => (tab === "Circulars" ? circulars : news), [tab, circulars, news]);

  return (
    <section className="relative py-10 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-6">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            
            {/* Heading */}
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1f1f1f]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D3632C] to-[#8A0B36]">
                परिपत्रके व नोटीस
              </span>
            </h2>

            {/* Tabs */}
            <div className="flex items-center justify-between mt-4">

              {/* Tab Buttons */}
              <div className="flex gap-6">
  {TABS.map((t) => (
    <button
      key={t.key}
      onClick={() => setTab(t.key)}
      className={`relative text-lg px-4 py-2 font-bold transition ${
        tab === t.key
          ? "text-[#8A0B36]"
          : "text-gray-600 hover:text-[#8A0B36]"
      }`}
    >
      {t.label}
      {tab === t.key && (
        <span className="absolute -bottom-1 left-0 right-0 w-full h-[3px] bg-gradient-to-r from-[#D3632C] to-[#8A0B36] rounded-full"></span>
      )}
    </button>
  ))}
</div>


              {/* ⭐ VIEW ALL BUTTON HERE */}
              <button
  onClick={() =>
    router.push(tab === "Circulars" ? "/circulars" : "/news")
  }
  className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white shadow-md hover:scale-105 transition"
>
  अधिक माहितीसाठी →
</button>

            </div>

            {/* AUTO SCROLL LIST */}
           <div className="mt-6 rounded-2xl p-[3px] bg-[#F2F4F6] shadow-xl">

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6">
                <div className="h-100 overflow-hidden scroll-wrapper">
                  <div className="scroll-content space-y-4">

                    {[...items, ...items].map((item, i) => (
                      <div
  key={i}
  className="flex items-center gap-4 px-5 py-3 bg-white/50 border border-white/30 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
>

                        {/* Icon */}
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white">
                          {tab === "Circulars" ? <FaBell /> : <FaRegNewspaper />}
                        </div>

                        {/* Title */}
                        <div className="flex-1 text-gray-800 font-semibold cursor-pointer hover:text-[#8A0B36] transition">
                          {item.title}
                        </div>

                        {/* NEW Icon */}
                        {item.news_icon ? (
                          <span className="text-[#8A0B36] text-xs font-bold mr-2">🆕</span>
                        ) : null}

                        {/* DOWNLOAD */}
                       <FaDownload
  className="text-[#8A0B36] hover:text-[#D3632C] text-xl cursor-pointer"
  title="Download File"
onClick={() => handleDownload(item.file_path, item.title + ".pdf")}

/>

                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              .scroll-wrapper:hover .scroll-content {
                animation-play-state: paused;
              }
              .scroll-content {
                animation: verticalScroll 70s linear infinite;
              }
              @keyframes verticalScroll {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
            `}</style>

          </div>

          <div className="relative">
            <ViewAllAwardsBox />
          </div>

        </div>
      </div>
    </section>
  );
}
