"use client";

import { useEffect, useState, useMemo } from "react";
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

  // Group magazines year-wise
  const { groupedMagazines, sortedYears } = useMemo(() => {
    const grouped = magazines.reduce((acc, item) => {
      // If year field exists use it, otherwise extract from month
      const year =
        item.year ||
        (item.month ? item.month.toString().split(" ").pop() : "Unknown");

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(item);
      return acc;
    }, {});

    // Sort years descending (latest first)
    const years = Object.keys(grouped).sort((a, b) => b - a);

    return { groupedMagazines: grouped, sortedYears: years };
  }, [magazines]);

  const [selectedYear, setSelectedYear] = useState("All");

  // Filtered years based on selection
  const filteredYears = useMemo(() => {
    if (selectedYear === "All") return sortedYears;
    return sortedYears.filter((y) => y === selectedYear);
  }, [selectedYear, sortedYears]);

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
          <h1 className="text-4xl font-extrabold text-[#6D0520]">
            रयत मासिक
          </h1>
          <div className="mx-auto mt-4 w-28 h-[4px] rounded-full bg-gradient-to-r from-[#A30041] to-[#FF6F61]" />
        </motion.div>

        <div className="max-w-7xl mx-auto mb-8 flex justify-end">
          {/* Year Filter Dropdown - Positioned Top Right, No Sidebar */}
          {!loading && sortedYears.length > 0 && (
            <div className="relative inline-block w-48">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2.5 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A30041] focus:border-[#A30041] cursor-pointer font-medium transition-all hover:border-[#A30041]"
              >
                <option value="All">All Years</option>
                {sortedYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#A30041]">
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Content Wrapper */}
          {/* Loading */}
          {loading && (
            <p className="text-center text-gray-600 text-lg">Loading magazines...</p>
          )}

          {/* Error */}
          {error && (
            <p className="text-center text-red-600 bg-red-50 p-4 rounded-lg border border-red-200">
              {error}
            </p>
          )}

          {/* Year-wise Magazine Display */}
          {!loading && filteredYears.length > 0 && (
            <div className="space-y-12">
              {filteredYears.map((year) => (
                <div key={year} className="animate-fadeIn">
                  {/* Year Heading */}
                  <h2 className="text-2xl font-bold text-[#6D0520] mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-[#A30041] rounded-full"></span>
                    {year}
                  </h2>

                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupedMagazines[year].map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        onClick={() => window.open(item.pdf_link, "_blank")}
                        className="cursor-pointer group bg-white rounded-xl border border-gray-200
                            shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                      >
                        {/* Cover Image */}
                        <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                          {item.cover_link ? (
                            <Image
                              src={item.cover_link}
                              alt={item.month}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                              No Cover
                            </div>
                          )}

                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 group-hover:text-[#A30041] transition-colors">
                              {item.month}
                            </h3>
                          </div>
                          <div className="mt-4 flex items-center text-[#A30041] text-sm font-medium">
                            <span>Read PDF</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Data */}
          {!loading && filteredYears.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">
                No magazines found for the selected year.
              </p>
              <button
                onClick={() => setSelectedYear("All")}
                className="mt-4 text-[#A30041] font-medium hover:underline"
              >
                View all years
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
