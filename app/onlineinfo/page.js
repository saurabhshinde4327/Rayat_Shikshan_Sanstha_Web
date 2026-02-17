"use client";
import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export default function OnlineInfo() {
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/ai-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, formData }),
    });
    if (res.ok) {
      alert("✅ डेटा सेव्ह झाला");
      setFormData({});
      setFormType(null);
    }
  };

  return (
    <div className="bg-white dark:bg-white text-gray-800 dark:text-gray-800 min-h-screen">
      <Header />

      {/* Banner Section */}
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0] dark:from-[#f6eee0] dark:via-white dark:to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] dark:text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            ऑनलाईन माहिती
          </h3>

          <nav className="text-sm md:text-base text-gray-600 dark:text-gray-600" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-[#7A0726] dark:text-[#7A0726] hover:underline">
                  मुख्य पृष्ठ
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center text-gray-500 dark:text-gray-500">
                ऑनलाईन माहिती
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        <div className="text-center mt-8">
          <h2 className="text-xl font-semibold text-black dark:text-black">
            शाखा माहिती ऑनलाईन प्रणाली पोर्टल
          </h2>
          <a
            href="http://115.124.97.204/RAYATSATARA/pgeMain.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-[#6F152D] hover:bg-[#5c1224] text-white dark:text-white rounded-md transition"
          >
            पोर्टल पहा
          </a>
        </div>

        {/* AI Info Section */}
        <div className="mt-10 text-center">
          <Link href="/ai-info" className="inline-block bg-[#EEC727] hover:bg-blue-400 text-black dark:text-black px-6 py-2 rounded shadow-md transition">
            AI Info
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
