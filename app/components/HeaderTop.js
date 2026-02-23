"use client";

import Image from "next/image";
import Link from "next/link";
import { Yatra_One } from "next/font/google";

const yatraFont = Yatra_One({
  subsets: ["devanagari", "latin"],
  weight: "400",
});

export default function HeaderTop({ onMenuClick }) {
  return (
    <div className="w-full min-h-[150px] bg-white relative shadow-md">
      {/* Main Header Container */}
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 py-2 flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 md:gap-8">

        {/* Left Section: Logo 1 */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div
              className="bg-white rounded-full p-1 transition-transform duration-300 hover:scale-110"
              style={{ boxShadow: "0 0 20px 6px #F1D7B0" }}
            >
              <Image
                src="/images/rayatlogo1.png"
                alt="Rayat Shikshan Sanstha Logo"
                width={100}
                height={100}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-full"
              />
            </div>
          </Link>
        </div>

        {/* Center Section: Text */}
        <div
          className={`text-center px-2 order-3 lg:order-2 w-full lg:w-auto ${yatraFont.className}`}
        >
          <h1 className="text-[#730624] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-3 uppercase tracking-wide leading-tight drop-shadow-md">
            रयत शिक्षण संस्था
          </h1>

          <div className="flex items-center justify-center gap-3 mt-1 sm:mt-2 opacity-90 hover:opacity-100 transition-opacity duration-300">
            <span className="hidden sm:block h-[2px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#730624] rounded-full"></span>

            <p className="text-[#4a0417] text-xs sm:text-sm md:text-lg font-bold tracking-widest uppercase font-sans drop-shadow-sm">
              "स्वावलंबी शिक्षण हेच आमचे ब्रीद" - कर्मवीर
            </p>

            <span className="hidden sm:block h-[2px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#730624] rounded-full"></span>
          </div>
        </div>

        {/* Right Section: Logo 2 & Controls */}
        <div className="flex items-center gap-4 flex-shrink-0 order-2 lg:order-3">
          
          {/* Logo 2 (Same Shadow as Left) */}
          <div
            className="bg-white rounded-full p-1 transition-transform duration-300 hover:scale-110"
            style={{ boxShadow: "0 0 20px 6px #F1D7B0" }}
          >
            <Image
              src="/images/kbp.png"
              alt="Karyakarta Logo"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-full"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-col items-end gap-2">

            {/* HRMS Button (Desktop) */}
            <div className="hidden md:block absolute top-4 right-4 z-50 pt-9">
              <Link href="http://hrms.rayatshikshan.edu/" target="_blank">
                <button
                  className="
                    bg-[#730624] text-white
                    px-5 py-2 
                    rounded-lg
                    font-semibold text-sm
                    hover:bg-[#5a041c] hover:shadow-lg
                    transition-all duration-300
                  "
                >
                  HRMS
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 text-[#730624] hover:bg-red-50 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
