"use client";
import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Resulttable from "../components/Resulttable";
import Result2 from "../components/Result2";
import Uniresult from "../components/Uniresult";
import Uniresult2 from "../components/Uniresult2";
import Excellence from "../components/Excellence";
import Research from "../components/Research";
import Nacc from "../components/Nacc";

import Link from "next/link";

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("result");

  return (
    <div className="min-h-screen bg-white dark:bg-white text-gray-800 dark:text-gray-800">
      
      <Header />

      {/* ===== Page Header ===== */}
      <section className="relative w-full h-[120px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0] dark:from-[#f6eee0] dark:via-white dark:to-[#f6eee0]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-[#7A0726] dark:text-[#7A0726]">
            शैक्षणिक
          </h3>

          <nav className="text-sm md:text-base text-gray-600 dark:text-gray-600">
            <ol className="inline-flex items-center">
              <li>
                <Link
                  href="/"
                  className="text-[#7A0726] dark:text-[#7A0726] hover:underline"
                >
                  मुख्य पृष्ठ
                </Link>
              </li>
              <span className="mx-2">/</span>
              <li>शैक्षणिक</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ===== Tabs ===== */}
      <div className="container mx-auto mt-8 px-4">
        <div className="flex justify-center mb-6 flex-wrap gap-3">

          <button
            onClick={() => setActiveTab("result")}
            className={
              activeTab === "result"
                ? "px-6 py-2 rounded-lg font-semibold bg-[#740625] text-white"
                : "px-6 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300"
            }
          >
            निकाल
          </button>

          <button
            onClick={() => setActiveTab("excellence")}
            className={
              activeTab === "excellence"
                ? "px-6 py-2 rounded-lg font-semibold bg-[#740625] text-white"
                : "px-6 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300"
            }
          >
            उत्कृष्टता
          </button>

          <button
            onClick={() => setActiveTab("nacc")}
            className={
              activeTab === "nacc"
                ? "px-6 py-2 rounded-lg font-semibold bg-[#740625] text-white"
                : "px-6 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300"
            }
          >
            नॅक मानांकन
          </button>

          <button
            onClick={() => setActiveTab("research")}
            className={
              activeTab === "research"
                ? "px-6 py-2 rounded-lg font-semibold bg-[#740625] text-white"
                : "px-6 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300"
            }
          >
            संशोधन
          </button>

        </div>

        {/* ===== Tab Content ===== */}
        <div className="mt-8">
          {activeTab === "result" && (
            <>
              <Resulttable />
              <Result2 />
              <Uniresult />
              <Uniresult2 />
            </>
          )}

          {activeTab === "excellence" && <Excellence />}
          {activeTab === "nacc" && <Nacc />}
          {activeTab === "research" && <Research />}
        </div>
      </div>

      <Footer />
    </div>
  );
}
