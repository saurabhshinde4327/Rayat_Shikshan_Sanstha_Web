"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RecentActivitiesBox() {
  const [magazines, setMagazines] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch Magazines API
  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const res = await fetch("/api/getMagazine");
        if (!res.ok) throw new Error("Failed to fetch magazines");

        const data = await res.json();
        setMagazines(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMagazines();
  }, []);

  // 🔹 Infinite scroll
  const duplicatedMagazines = [...magazines, ...magazines];

  return (
    <>
      <aside className="hidden lg:flex flex-col w-[360px] gap-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
         <h2 className="text-3xl font-extrabold mb-2 text-[#1e1e1e] tracking-tight">
         रयत मासिक अंक
          </h2>
          <div className="w-20 h-[4px] rounded-full bg-gradient-to-r from-[#A30041] to-[#FF6F61]" />
        </motion.div>

        {/* Loading */}
        {loading && <p className="text-gray-600">Loading...</p>}

        {/* Error */}
        {error && <p className="text-red-600">{error}</p>}

        {/* Magazines Scroll */}
        {!loading && magazines.length > 0 && (
          <div
            className="relative max-h-[430px] overflow-hidden pr-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="animate-scroll-vertical"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {duplicatedMagazines.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => window.open(item.pdf_link, "_blank")}
                  className="flex flex-col gap-2 p-3 mb-4 bg-white/80 backdrop-blur-xl
                    rounded-2xl border border-gray-200 shadow-md hover:shadow-xl
                    cursor-pointer transition-all"
                >
                  {/* Cover Image */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden border shadow-lg">
                    <Image
                      src={item.cover_link}
                      alt={item.month}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Month / Title */}
                  <h3 className="text-gray-800 font-bold text-sm">
                    {item.month}
                  </h3>

                  {/* Hint */}
                  <p className="text-xs text-gray-500">
                    Click to open PDF →
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* View All Button */}
        <motion.a
          href="/allmagazines"
          whileHover={{ scale: 1.06 }}
          className="inline-flex items-center justify-center rounded-full
           bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white px-6 py-2.5
            text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
        >
           अधिक माहितीसाठी
        </motion.a>
      </aside>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          display: flex;
          flex-direction: column;
          animation: scroll-vertical 40s linear infinite;
        }
      `}</style>
    </>
  );
}

