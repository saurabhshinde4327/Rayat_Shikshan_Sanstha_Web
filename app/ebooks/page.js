"use client";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export default function Ebooks() {
  const [ebooks, setEbooks] = useState([]);
  const [types, setTypes] = useState([]);
  const [activeType, setActiveType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getEbooks");
      const data = await res.json();

      setEbooks(data.ebooks || []);

      const uniqueTypes = [...new Set(data.ebooks.map((e) => e.type))];
      setTypes(uniqueTypes);

      if (uniqueTypes.length > 0) {
        setActiveType(uniqueTypes[0]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero Banner */}
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            ई-पुस्तके
          </h3>

          <nav className="text-sm md:text-base text-gray-600" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-[#7A0726] hover:underline">
                  मुख्य पृष्ठ
                </Link>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li className="flex items-center text-gray-500">
                ई-पुस्तके
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Tabs */}
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap justify-center gap-3 border-b border-gray-300 pb-3">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold border-b-4 ${
                activeType === type
                  ? "border-[#EEC625] text-[#7A0726]"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Table Content */}
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-m font-semibold w-80">
                  Title
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-m font-semibold w-32">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {ebooks
                .filter((ebook) => ebook.type === activeType)
                .map((ebook, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      {ebook.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a
                        href={ebook.file_path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-black font-semibold text-sm px-4 py-2 rounded hover:bg-gray-200"
                      >
                        View / Download
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
