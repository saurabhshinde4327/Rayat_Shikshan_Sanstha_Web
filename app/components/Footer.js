"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Fetch real visitor count from App Router API
  useEffect(() => {
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => {
        if (data?.total !== undefined) {
          setVisitorCount(data.total);
        }
      })
      .catch((err) => console.error("Visitor API Error:", err));
  }, []);

  return (
    <footer className="relative bg-[#670D22] text-white py-12 md:py-16 font-[Poppins] overflow-hidden">

      {/* Overlay & Top Line */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" />

      {/* Main Grid */}
      <div className="w-[90%] mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10 items-start">

        {/* LOGO + SOCIAL */}
        <div className="flex flex-col gap-4 text-base sm:text-lg">
          <Image
            src="/images/rayatlogo1.png"
            alt="Rayat Shikshan Sanstha Logo"
            width={120}
            height={80}
            priority
            className="self-start"
          />
          <div className="flex gap-3 mt-2">
            {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="p-2 rounded-full bg-white text-[#8A0B36] cursor-pointer shadow-md"
              >
                <Icon size={16} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="text-base sm:text-lg leading-relaxed text-white/80">
          <p>
            <span className="bodoni-title text-yellow-300 font-semibold">
              रयत शिक्षण संस्था
            </span>{" "}
            ही भारतातील सर्वात प्रतिष्ठित शैक्षणिक संस्थांपैकी एक आहे, जी १९१९ पासून
            मूल्याधारित दर्जेदार शिक्षण देत आहे.
          </p>
          <p className="text-white/70 mt-3 text-sm">
            कर्मवीर समाधी परिसर, राजपथ रोड, सातारा, महाराष्ट्र - ४१५००१
          </p>
        </div>

        {/* USEFUL LINKS */}
        <div className="text-base sm:text-lg">
          <h4 className="bodoni-title text-yellow-300 font-semibold mb-3">
            उपयुक्त दुवे
          </h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link
                href="https://gr.maharashtra.gov.in/"
                target="_blank"
                className="hover:text-yellow-300 transition"
              >
                शासन निर्णय
              </Link>
            </li>
            <li>
              <Link
                href="https://mahadbt.maharashtra.gov.in/login/login"
                target="_blank"
                className="hover:text-yellow-300 transition"
              >
                शिष्यवृत्ती
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">
                मुख्यपृष्ठ
              </Link>
            </li>
          </ul>
        </div>

        {/* IMPORTANT LINKS */}
        <div className="text-base sm:text-lg">
          <h4 className="bodoni-title text-yellow-300 font-semibold mb-3">
            महत्वाचे दुवे
          </h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link
                href="https://mahateacherrecruitment.org.in/"
                target="_blank"
                className="hover:text-yellow-300 transition"
              >
                पवित्र पोर्टल
              </Link>
            </li>
            <li>
              <Link
                href="https://mahadbt.maharashtra.gov.in/"
                target="_blank"
                className="hover:text-yellow-300 transition"
              >
                महाडीबीटी
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-base sm:text-lg space-y-2 text-white/80">
          <h4 className="bodoni-title text-yellow-300 font-semibold mb-3">
            संपर्क
          </h4>
          <p className="text-sm">📞 02162 233 857</p>
          <p className="text-sm">🌐 www.rayatshikshan.edu</p>
          <p className="text-sm">✉ secretary@rayatshikshan.edu</p>
        </div>

        {/* MAP & VISITOR COUNTER */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 mt-6 md:mt-0">
          <div className="overflow-hidden rounded-lg border border-yellow-400/30 h-[150px] w-full shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7602.5287313684275!2d73.99140539496516!3d17.68496725484691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239ef6aaaaaab%3A0xb8359627af43a6b2!2sRayat%20Shikshan%20Sanstha%2C%20Satara!5e0!3m2!1sen!2sin!4v1767591468323!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


          {/* VISITOR COUNTER */}
          <div className="mt-4 flex flex-col items-center">
            <span className="text-yellow-300 font-semibold text-sm mb-2">
              Visitors
            </span>
            <div className="inline-flex gap-[2px] bg-white p-1 rounded-md shadow-lg border border-gray-300">
              {visitorCount
                .toString()
                .padStart(8, "0")
                .split("")
                .map((digit, i) => {
                  const marathiDigit = [
                    "०","१","२","३","४","५","६","७","८","९"
                  ][digit];

                  return (
                    <div
                      key={i}
                      className="bg-[#4A2311] text-white w-7 h-9 flex items-center justify-center rounded font-mono text-lg font-bold"
                    >
                      {marathiDigit}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="w-[90%] mx-auto mt-12 relative z-10">
        <hr className="border-t border-white/20 mb-6" />
        <div className="text-center text-sm sm:text-base text-white/80">
          © 2025 रयत शिक्षण संस्था, सातारा |{" "}
          <span className="text-yellow-300">
            रयत शिक्षण संस्था, YCIS OIT, सातारा द्वारा संचालित
          </span>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  );
}
