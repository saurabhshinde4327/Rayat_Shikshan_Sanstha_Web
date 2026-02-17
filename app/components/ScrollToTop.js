"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
  onClick={scrollTop}
  className="
    fixed bottom-20 right-5 z-50
    bg-[#FFDF21] hover:bg-[#E6C400]
    text-black p-3 rounded-full
    shadow-lg
    ring-2 ring-[#730624]
    hover:ring-[#730624]
    hover:ring-4
    transition-all duration-300
    hover:scale-110
  "
  aria-label="Scroll to Top"
>
  <FaArrowUp size={18} />
</button>

      )}
    </>
  );
}
