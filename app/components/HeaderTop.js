"use client";

import Image from "next/image";
import Link from "next/link";
import { Yatra_One } from "next/font/google";

const yatra = Yatra_One({
  subsets: ["devanagari", "latin"],
  weight: "400",
});

export default function HeaderTop({ onMenuClick }) {
  return (
    <div className="bg-white w-full border-b">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left: Logo + Title */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div
            className="rounded-full p-2"
            style={{ boxShadow: "0 0 20px 6px #F1D7B0" }}
          >
            <Image
              src="/images/rayatlogo1.png"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          {/* Text */}
          <div className={`leading-tight ${yatra.className}`}>
            <h1 className="text-[50px] md:text-[56px] font-bold text-[#730624]">
              रयत शिक्षण संस्था
            </h1>
            <p className="text-[14px] md:text-[18px] text-gray-600 font-sans">
              “स्वावलंबी शिक्षण हेच आमचे ब्रीद” - कर्मवीर
            </p>
          </div>
        </div>

        {/* Right: HRMS */}
        <div className="hidden md:flex">
          <Link href="http://hrms.rayatshikshan.edu/">
            <button className="bg-[#730624] text-white px-4 py-2 rounded font-semibold">
              HRMS Login
            </button>
          </Link>
        </div>

<button
  onClick={onMenuClick}
  className="md:hidden text-[22px] text-black dark:text-black"
>
  ☰
</button>      </div>
    </div>
  );
}
