"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ApprovalsPage() {
  const approvals = [
    { text: "Artificial Intelligence (AI) Education", color: "bg-[#FFE1BA]" },
    { text: "School Cluster", color: "bg-[#FFE1BA]" },
    { text: "Rayat Gurukul Project", color: "bg-[#FFE1BA]" },
    { text: "Competitive Examination Project", color: "bg-[#FFE1BA]" },
    { text: "Eklavya Puraskar", color: "bg-[#FFE1BA]" },
    { text: "Skilling Programme", color: "bg-[#FFE1BA]" },
    { text: "Psychometric Test", color: "bg-[#FFE1BA]" },
    { text: "Rayat Vidnyan Project", color: "bg-[#FFE1BA]" },
    { text: "Inspire Award", color: "bg-[#FFE1BA]" },
    { text: "School level Science Exhibition", color: "bg-[#FFE1BA]" },
    { text: "Atal Tinkering", color: "bg-[#FFE1BA]" },
    { text: "Kumbhoj Training Centre-Workshop", color: "bg-[#FFE1BA]" },
    { text: "DEEPER, NEET, JEE, MHT-CET Entrance Exam Guidance", color: "bg-[#FFE1BA]" },
    { text: "AIISER WORKSHOP", color: "bg-[#FFE1BA]" },
    { text: "Computer Education", color: "bg-[#FFE1BA]" },
    { text: "Scholarship for std 5th & 8th", color: "bg-[#FFE1BA]" },
    { text: "Quality Enhancement of Education", color: "bg-[#FFE1BA]" },
    { text: "Parents Meeting", color: "bg-[#FFE1BA]" },
    { text: "Remedial learning Process", color: "bg-[#FFE1BA]" },
    { text: "Micro/Macro Analysis of Marks", color: "bg-[#FFE1BA]" },
    { text: "Student Enrolment Fair (प्रवेशोत्सव)", color: "bg-[#FFE1BA]" },
    { text: "NMMS Examination NMMS Examination", color: "bg-[#FFE1BA]" },
    { text: "Karmaveer Vidya Prabodhini Examination", color: "bg-[#FFE1BA]" },
    { text: "Rayat Talent Search", color: "bg-[#FFE1BA]" },
    { text: "Rayat Olampiyad ", color: "bg-[#FFE1BA]" },
    { text: "Elocution Competition", color: "bg-[#FFE1BA]" },
    { text: "Quiz Competition", color: "bg-[#FFE1BA]" },
    { text: "Short Term Courses", color: "bg-[#FFE1BA]" },
    { text: "Kala Academy", color: "bg-[#FFE1BA]" },
    { text: "Krida Academy", color: "bg-[#FFE1BA]" },
    { text: "Pre-recruitment Training", color: "bg-[#FFE1BA]" },
    { text: "Career Guidance & Counselling Project", color: "bg-[#FFE1BA]" },
    { text: "Mini Science Centre", color: "bg-[#FFE1BA]" },
    { text: "FAALI Project (Agriculture Project)", color: "bg-[#FFE1BA]" },
    { text: "Green Campus Project", color: "bg-[#FFE1BA]" },
  ];

  const ITEMS_PER_PAGE = 9;
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedItems = approvals.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(approvals.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-[55vh] w-full bg-[#f7f9fc] px-4 py-6 flex flex-col items-center">
      
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#903c53] text-white text-xl font-semibold px-10 py-4 rounded-l-3xl rounded-b-3xl shadow-lg"
      >
        Projects
      </motion.div>

      {/* GRID */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {selectedItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, borderColor: "#1e2024ff" }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`${item.color} px-2 py-2 rounded-lg shadow-md text-center font-medium text-xs tracking-wide border-2 border-transparent transition-all duration-300 h-[80px] flex items-center justify-center`}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-6 py-2 rounded-lg text-white font-semibold text-sm
            ${page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-[#557AC7] hover:bg-[#3b5ea6]"}`}
        >
          Previous
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-6 py-2 rounded-lg text-white font-semibold text-sm
            ${page === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-[#557AC7] hover:bg-[#3b5ea6]"}`}
        >
          Next
        </button>
      </div>

      <p className="mt-2 text-gray-700 text-sm font-semibold">
        Page {page} of {totalPages}
      </p>
    </div>
  );
}
