"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaPlus,
  FaMinus,
  FaAdjust,
  FaMoon,
  FaSun,
  FaUnderline,
  FaFont,
  FaUndo,
  FaUniversalAccess,
} from "react-icons/fa";

export default function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [negativeContrast, setNegativeContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [lightBg, setLightBg] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  const toggleAudio = useRef(null);

  // Create audio only on browser
  useEffect(() => {
    toggleAudio.current = new Audio("/toggle-sound.mp3");
  }, []);

  useEffect(() => {
    document.body.style.fontSize = fontSize + "px";
    document.body.style.filter = grayscale ? "grayscale(100%)" : "none";
    document.body.style.backgroundColor = highContrast
      ? "#000"
      : negativeContrast
      ? "#222"
      : lightBg
      ? "#fdfdfd"
      : "";
    document.body.style.color = highContrast || negativeContrast ? "#fff" : "";
    document.body.style.fontFamily = readableFont ? "'Arial', sans-serif" : "";

    document.querySelectorAll("a").forEach((link) => {
      link.style.textDecoration = underlineLinks ? "underline" : "none";
    });
  }, [
    fontSize,
    highContrast,
    negativeContrast,
    grayscale,
    lightBg,
    underlineLinks,
    readableFont,
  ]);

  const playSound = () => {
    if (toggleAudio.current) toggleAudio.current.play();
  };

  const resetAll = () => {
    setFontSize(16);
    setHighContrast(false);
    setNegativeContrast(false);
    setGrayscale(false);
    setLightBg(false);
    setUnderlineLinks(false);
    setReadableFont(false);
    playSound();
  };

  const handleToggle = (setter, value = null) => {
    if (value !== null) setter(value);
    else setter((prev) => !prev);
    playSound();
  };

  return (
    <div
      className="
        fixed 
        right-0 
      top-[calc(50%-65px)]

        z-[9999]
        w-12 h-12 
        rounded-full flex items-center justify-center
      "
    >
     <button
  onClick={() => {
    setOpen(!open);
    playSound();
  }}
  className="bg-[#730624] text-white p-4 rounded-full shadow-3xl 
             hover:scale-110 transition-transform duration-300 
             border border-yellow-500 dark:border-yellow-400"
  title="Accessibility Tools"
>

        <FaUniversalAccess size={24} />
      </button>

      <div
        className={`absolute right-16 top-0 w-72 bg-white dark:bg-gray-900 shadow-2xl rounded-xl p-6 transition-all duration-500 overflow-hidden ${
          open
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <h2 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 text-[#730624]">
          Accessibility Tools
        </h2>

        <div className="flex flex-col gap-3">
          <button onClick={() => handleToggle(setFontSize, fontSize + 2)} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:text-[#730624]"><FaPlus /> Increase Text</button>
          <button onClick={() => handleToggle(setFontSize, Math.max(fontSize - 2, 12))} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:text-[#730624]"><FaMinus /> Decrease Text</button>
          <button onClick={() => handleToggle(setGrayscale)} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:text-[#730624]"><FaAdjust /> Grayscale</button>
          <button onClick={() => { handleToggle(setHighContrast, !highContrast); setNegativeContrast(false); }} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:text-[#730624]"><FaMoon /> High Contrast</button>
          <button onClick={() => { handleToggle(setNegativeContrast, !negativeContrast); setHighContrast(false); }} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:text-[#730624]"><FaSun /> Negative Contrast</button>
          <button onClick={() => handleToggle(setLightBg)} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:text-[#730624]"><FaSun /> Light Background</button>
          <button onClick={() => handleToggle(setUnderlineLinks)} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:text-[#730624]"><FaUnderline /> Links Underline</button>
          <button onClick={() => handleToggle(setReadableFont)} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:text-[#730624]"><FaFont /> Readable Font</button>
          <button onClick={resetAll} className="flex items-center gap-3 text-red-600 hover:text-red-800 p-2 rounded-lg font-semibold "><FaUndo /> Reset All</button>
        </div>
      </div>
    </div>
  );
}
