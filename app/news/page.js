"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const newsPerPage = 15;

  // 🔽 Fetch NEWS
  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/getNotices");
        const data = await res.json();
        setNews(Array.isArray(data) ? data : data.data || []);
      } catch (err) {
        console.error("News API error", err);
      }
    }
    fetchNews();
  }, []);

  // 🔽 Filter
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔽 Pagination
  const indexOfLast = currentPage * newsPerPage;
  const indexOfFirst = indexOfLast - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
            News
          </h3>

          <nav className="text-sm text-gray-600">
            <Link href="/" className="text-[#7A0726] hover:underline">
              Home
            </Link>{" "}
            / News
          </nav>
        </div>
      </section>

      {/* Search */}
      <div className="container mx-auto py-6 px-6">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search news"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-md shadow w-full max-w-md"
          />
        </div>

        {/* Table (Circulars Style) */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-2">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-[#f5e6ca] text-black">
                <th className="border px-4 py-2 text-left">Sr. No</th>
                <th className="border px-4 py-2 text-left">Title</th>
                <th className="border px-4 py-2 text-center">Download</th>
              </tr>
            </thead>

            <tbody>
              {currentNews.length > 0 ? (
                currentNews.map((item, index) => (
                  <tr
                    key={item.id || index}
                    className="border-b hover:bg-gray-100"
                  >
                    {/* Sr No */}
                    <td className="border px-4 py-2">
                      {indexOfFirst + index + 1}
                    </td>

                    {/* Title */}
                    <td className="border px-4 py-2">
                      {item.title}
                      {item.news_icon && (
                        <span className="ml-2 text-xs text-[#8A0B36] font-bold">
                          🆕
                        </span>
                      )}
                    </td>

                    {/* Download */}
                    <td className="border px-4 py-2 text-center">
                      {item.file_path ? (
                        <a
                          href={item.file_path}
                          download
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          📥 Download
                        </a>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-600">
                    No news found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === page
                      ? "bg-[#610416] text-white"
                      : "bg-white border-gray-400 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
