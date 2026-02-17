"use client";

import Footer from "../components/Footer";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Recruitment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recruitmentData, setRecruitmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    async function fetchRecruitments() {
      try {
        const res = await fetch("/api/getRecruitment");
        const data = await res.json();
        setRecruitmentData(data);
      } catch (error) {
        console.error("Failed to fetch recruitment data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecruitments();
  }, []);

  const filteredData = searchTerm
    ? recruitmentData.filter((item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : recruitmentData;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const getFileUrl = (file_path) => file_path ? `/uploads/${file_path.split('/').pop()}` : null;

  return (
    <div className="bg-white min-h-screen">
  
  
      <Header />
  

      <section className="w-full h-[120px] relative">
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
    <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
RECRUITMENTS
    </h3> 

    <nav className="text-sm md:text-base text-gray-600" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-[#7A0726] hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
        </li>
        <li className="flex items-center text-gray-500">
         RECRUITMENTS
        </li>
      </ol>
    </nav>
  </div>
</section>

      {/* Search */}
      <div className="container mx-auto px-4 py-4">
        <input
          type="text"
          placeholder="Search Recruitments..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        />
      </div>

      {/* Recruitment Cards */}
      <div className="container mx-auto px-4 py-6">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : paginatedData.length === 0 ? (
          <div className="text-center text-gray-500">No recruitment opportunities found.</div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedData.map((item, index) => {
                const fileUrl = item.file_path ? getFileUrl(item.file_path) : null;
                const externalUrl = item.external_link || null;

                return (
                  <div key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-l-4 border-[#EEC625]">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 mb-3">{item.date ? new Date(item.date).toLocaleDateString() : ""}</p>

                    {fileUrl && (
                      <Link href={fileUrl} target="_blank" className="mt-3 inline-block px-4 py-2 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0] text-[#8A0B36] font-semibold rounded-md hover:bg-[#dc7b9b] transition mr-2">
                        View Details →
                      </Link>
                    )}
                    {externalUrl && (
                      <Link href={externalUrl} target="_blank" className="mt-3 inline-block px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-500 transition">
                        Visit Link →
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
