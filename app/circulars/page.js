"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

function CircularsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [circulars, setCirculars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedVibhag, setSelectedVibhag] = useState(""); // New state for Vibhag filter

  const circularsPerPage = 15;

  useEffect(() => {
    async function fetchCirculars() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        setCirculars(data);
      } catch (error) {
        console.error("Failed to fetch circulars", error);
      }
    }
    fetchCirculars();
  }, []);

  const sortedCirculars = [...circulars].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Extract unique regions for the dropdown
  const uniqueVibhags = [...new Set(circulars.map(c => c.region_name).filter(Boolean))];

  const filteredCirculars = sortedCirculars.filter((circular) => {
    const circularDate = new Date(circular.date);
    const year = circularDate.getFullYear().toString();
    const title = circular.title.toLowerCase();
    const region = (circular.region_name || "").toLowerCase();
    const circularNo = (circular.circulat_no || "").toLowerCase(); // Search by circular no
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      title.includes(search) ||
      year.includes(search) ||
      region.includes(search) ||
      circularNo.includes(search);

    const matchesFromDate = fromDate
      ? circularDate >= new Date(fromDate)
      : true;

    const matchesToDate = toDate
      ? circularDate <= new Date(toDate)
      : true;

    const matchesVibhag = selectedVibhag
      ? region === selectedVibhag.toLowerCase()
      : true;

    return matchesSearch && matchesFromDate && matchesToDate && matchesVibhag;
  });


  const indexOfLastCircular = currentPage * circularsPerPage;
  const indexOfFirstCircular = indexOfLastCircular - circularsPerPage;
  const currentCirculars = filteredCirculars.slice(indexOfFirstCircular, indexOfLastCircular);

  const totalPages = Math.ceil(filteredCirculars.length / circularsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            परिपत्रके
          </h3>

          <nav className="text-sm md:text-base text-gray-600" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-[#7A0726] hover:underline">
                  मुख्य पृष्ठ
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center text-gray-500">
                परिपत्रके
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Search and Filters */}
      <div className="container mx-auto py-4 px-6">

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by keyword / year / region"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-md shadow-md w-full md:w-72"
          />

          {/* Vibhag Filter */}
          <select
            value={selectedVibhag}
            onChange={(e) => {
              setSelectedVibhag(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-md shadow-md w-full md:w-48"
          >
            <option value="">विभाग</option>
            {uniqueVibhags.map((vibhag, index) => (
              <option key={index} value={vibhag}>
                {vibhag}
              </option>
            ))}
          </select>

          {/* From Date */}
          <input
            type="date"
            value={fromDate}
            onChange={(e) => {
              setFromDate(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-md shadow-md"
          />

          {/* To Date */}
          <input
            type="date"
            value={toDate}
            onChange={(e) => {
              setToDate(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-md shadow-md"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#f5e6ca] text-black">
                <th className="border border-gray-300 px-4 py-2 text-left">अ.नं.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">विभाग</th>
                <th className="border border-gray-300 px-4 py-2 text-left">परिपत्रक क्र.</th> {/* New Column */}
                <th className="border border-gray-300 px-4 py-2 text-left">शीर्षक</th>
                <th className="border border-gray-300 px-4 py-2 text-left">दिनांक</th>
                <th className="border border-gray-300 px-4 py-2 text-left">डाउनलोड करा</th>
              </tr>
            </thead>
            <tbody>
              {currentCirculars.length > 0 ? (
                currentCirculars.map((circular, index) => (
                  <tr key={circular.id} className="border-b hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">
                      {indexOfFirstCircular + index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {circular.region_name || "-"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {circular.circulat_no || "-"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {circular.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(circular.date).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a
                        href={circular.file_path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        👁️पहा
                      </a>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-600 py-4">
                    No circulars found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 rounded-md border ${currentPage === pageNum
                    ? "bg-[#610416] text-white"
                    : "bg-white text-teal-900 border-teal-900 hover:bg-teal-100"
                    }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default function Circulars() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CircularsContent />
    </Suspense>
  );
}
