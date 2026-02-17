"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

const quickLinks = [
  {
    name: "जुनी यादी १३-११-२५",
    url: "https://rayatshikshan.edu/uploads/1763445980889-OLD%20YADI%2013-11-25%20(2).pdf",
  },
  {
    name: "कुटुंब कल्याण परिपत्रक २५–२६",
    url: "https://rayatshikshan.edu/uploads/1763098800269-kutumb%20kalyan%20paripatrak%2025-26.pdf",
  },
  {
    name: "कुटुंब कल्याण अर्ज नमुना",
    url: "https://rayatshikshan.edu/uploads/1763098784353-kutumb%20kalayan%20Application%20from.pdf",
  },
  {
    name: "कुटुंब कल्याण रक्कम मागणी अर्ज",
    url: "https://rayatshikshan.edu/uploads/1763098764240-kutumb%20kalayan%20Amount%20magani%20Arj.pdf",
  },
  {
    name: "नवी यादी १३-११-२५",
    url: "https://rayatshikshan.edu/uploads/1763098618273-NEW%20YADI%2013-11-25.pdf",
  },

   {
    name: "क्रीडांगण विकास अनुदान ठराव",
    url: "pdf/Krida Anudan Tharav 2020 (1).pdf",
  },
];

export default function QuickLinks() {
  return (
    <div className="bg-white dark:bg-white text-gray-800 dark:text-gray-800 min-h-screen">
      <Header />

      {/* PAGE HEADER */}
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0] dark:from-[#f6eee0] dark:via-white dark:to-[#f6eee0]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] dark:text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            डाउनलोड्स
          </h3>

          <nav className="text-sm md:text-base text-gray-600 dark:text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center">
              <li>
                <Link href="/" className="text-[#7A0726] dark:text-[#7A0726] hover:underline">
                  मुख्यपृष्ठ
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-gray-500 dark:text-gray-500">डाउनलोड्स</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickLinks.map((link, index) => (
            <li
              key={index}
              className="bg-white dark:bg-white shadow-lg p-4 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-100 transition"
            >
              <Link
                href={link.url}
                target="_blank"
                className="text-blue-700 dark:text-blue-700 font-semibold hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}
