"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function RayatMagazine() {
  const scrollRef = useRef(null);
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const response = await fetch("/api/magazine");
        const data = await response.json();
        setMagazines(data);
      } catch (error) {
        console.error("Error fetching magazines:", error);
      }
    };
    fetchMagazines();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">RECENT MAGAZINES</h2>

          <Link href="/allmagazines">
            <button className="bg-[#0C3B39] text-white px-4 py-2 rounded-lg hover:opacity-80 transition duration-300">
              VIEW ALL
            </button>
          </Link>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x"
          >
            {magazines.length > 0 ? (
              magazines.map((item, idx) => (
                <div
                  key={idx}
                  className="snap-start flex-shrink-0 w-1/3 h-[320px] cursor-pointer"
                >
                  <a href={item.pdf_link} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={`${item.cover_link}?v=${Date.now()}`}
                        alt={item.month}
                        fill
                        unoptimized      // ✅ prevents Next.js caching
                        className="object-cover"
                      />

                      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-1">
                        {item.month}
                      </div>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center w-full">No magazines available.</p>
            )}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
