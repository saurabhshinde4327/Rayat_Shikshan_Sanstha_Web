"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PremiumCurtainSlider() {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  // 🔹 Fetch slider images from API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch("/api/getSliderImages");
        const data = await res.json();
        setSlides(data); // expects [{id, file_path}]
      } catch (err) {
        console.error("Failed to load slider images", err);
      }
    };

    fetchSlides();
  }, []);

  // 🔹 Auto slide
  useEffect(() => {
    if (slides.length === 0) return;

    const autoSlide = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [index, slides.length]);

  if (slides.length === 0) {
    return (
      <section className="h-[85vh] w-full flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading slider...</p>
      </section>
    );
  }

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      
      {/* CURRENT IMAGE */}
      <motion.div
        key={index}
        initial={{
          clipPath: "inset(0 40% 0 40%)",
          filter: "blur(15px)",
          scale: 1.2,
        }}
        animate={{
          clipPath: "inset(0 0% 0 0%)",
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={slides[index].file_path}
          alt="slider"
          fill
          priority
          className="object-cover brightness-90"
        />
      </motion.div>

      {/* CURTAIN GLASS EFFECT */}
      <motion.div
        key={"curtain-" + prevIndex}
        initial={{ width: "100%", opacity: 1 }}
        animate={{ width: "0%", opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 z-20 overflow-hidden"
      >
        <div className="absolute inset-0 backdrop-blur-3xl saturate-150">
          <Image
            src={slides[prevIndex]?.file_path}
            alt="previous"
            fill
            className="object-cover opacity-90"
          />
        </div>

        {/* Glass shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-20 mix-blend-overlay"></div>
      </motion.div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => {
              setPrevIndex(index);
              setIndex(i);
            }}
            whileHover={{ scale: 1.3 }}
            className={`h-2 w-6 rounded-full cursor-pointer transition-all backdrop-blur-md ${
              index === i
                ? "bg-white shadow-[0_0_10px_white]"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
