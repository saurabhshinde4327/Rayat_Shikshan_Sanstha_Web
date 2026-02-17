"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

export default function GalleryEvents() {
  return (
    <section className="w-full px-4 md:px-16 py-12 bg-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-serif font-bold mb-5 tracking-wide"
        style={{ color: "#7A0026" }}
      >
        व्हिडीओ गॅलरी
      </motion.h2>

      {/* Crown Divider */}
      <div className="flex justify-center items-center mt-5 gap-3">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
        <FaCrown className="text-[#D8B267] text-xl" />
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
      </div>

      {/* Layout */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

        {/* LEFT */}
        <div className="space-y-5">
          <GalleryCard video="https://www.youtube.com/embed/dUCvK-Dc380" />
          <GalleryCard video="https://www.youtube.com/embed/KAqoYE0YDMM" />
        </div>

        {/* CENTER BIG VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl shadow-md h-[500px] py-12"
        >
          <iframe
            src="https://www.youtube.com/embed/Cnm3pRzYoko"
            className="w-full h-full rounded-2xl py-8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* RIGHT */}
        <div className="space-y-5">
          <GalleryCard video="https://www.youtube.com/embed/5IcCZdwAiZM" />
          <GalleryCard video="https://www.youtube.com/embed/7xhcAsJkLCY" />
        </div>

      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
  <a 
    href="https://www.youtube.com/@rayatshikshansansthasatara" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <motion.button
      whileHover={{ scale: 1.08 }}
      className="rounded-full bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white px-6 py-2.5 text-sm font-semibold shadow-lg"
    >
       अधिक माहितीसाठी
    </motion.button>
  </a>
</div>

    </section>
  );
}

function GalleryCard({ video }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl shadow-md h-[280px]"
    >
      <iframe
        src={video}
        className="w-full h-full rounded-2xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  );
}

