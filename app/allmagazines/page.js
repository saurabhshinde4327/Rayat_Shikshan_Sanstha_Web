"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AllMagazinePage() {
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all magazines
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

  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-white px-6 py-14">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto mb-12 text-center"
        >
          <h1 className="text-4xl md:text-4xl font-extrabold text-[#6D0520]">
            रयत मासिक
          </h1>
         
          <div className="mx-auto mt-4 w-28 h-[4px] rounded-full bg-gradient-to-r from-[#A30041] to-[#FF6F61]" />
        </motion.div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-600">Loading magazines...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {/* Magazine Grid */}
        {!loading && magazines.length > 0 && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {magazines.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(item.pdf_link, "_blank")}
                className="cursor-pointer bg-white rounded-2xl border border-gray-200
                  shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Cover */}
                <div className="relative w-full h-56">
                  <Image
                    src={item.cover_link}
                    alt={item.month}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-sm mb-1">
                    {item.month}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Click to open PDF →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No data */}
        {!loading && magazines.length === 0 && (
          <p className="text-center text-gray-500">
            No magazines available.
          </p>
        )}
      </section>

      <Footer />
    </>
  );
}
