"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown,
  FaHome,
  FaInfoCircle,
  FaSitemap,
  FaBook,
  FaUsers,
  FaGlobe,
  FaDownload,
  FaGavel,
   FaUser    // ✅ new
} from "react-icons/fa";


import HeaderTop from "./HeaderTop";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const menuItems = [
    { title: "मुख्य पृष्ठ", href: "/", icon: <FaHome /> },
    {
      title: "आमच्याविषयी",
      icon: <FaInfoCircle />,
      submenu: [
        { title: "इतिहास", href: "/about" },
        { title: "ध्येय व उद्दिष्टे", href: "/aim" },
        { title: "पुरस्कार व सन्मान", href: "/table" },
        { title: "सामंजस्य करार", href: "/mou" },
      ],
    },
    { title: "व्यवस्थापन", href: "/management", icon: <FaUsers /> },
    // {
    //   title: "प्रकल्प",
    //   icon: <FaSitemap />,
    //   submenu: [
    //     { title: "रयत स्पर्धा परीक्षा", href: "/#" },
    //     { title: "शिष्यवृत्ती", href: "/#" },
    //     { title: "प्रवेश परीक्षा", href: "/#" },
    //     { title: "इतर प्रकल्प", href: "/#" },
    //   ],
    // },
    {
  title: "शाखा",
  icon: <FaSitemap />,
  submenu: [
    { title: "महाविद्यालयांची यादी", href: "/colleges" },
    { title: "माध्यमिक शाळा", href: "/schools" },
    { title: "प्राथमिक शाळा", href: "/primaryschool" },
    { title: "आश्रमशाळा", href: "/ashramshala" },
    { title: "अध्यापक प्रशिक्षण शाळा", href: "/teachertraining" },
    { title: "प्रशासकीय कार्यालये", href: "/offices" },
    {
      title: (
        <>
          रयत सायन्स इंन्होव्हेशन <br />
          अ‍ॅक्टिव्हिटी सेंटर
        </>
      ),
      href: "/rsiac",
    },
    {
      title: (
        <>
        रयत सेंटर फॉर इन्व्हेंशन,  <br />
          इनोव्हेशन अँड इन्क्यूबेशन
        </>
      ),
      href: "/ciii",
    },
  ],
},

    {
      title: "साध्यक्रम",
      icon: <FaBook />,
      submenu: [
        { title: "क्रीडा", href: "/achievementssports" },
        { title: "शैक्षणिक", href: "/research" },
      ],
    },
    { title: "निविदा", href: "/tender", icon: <FaGavel /> },
    { title: "डाउनलोड्स", href: "/downloads", icon: <FaDownload /> },
    { title: "ऑनलाईन माहिती", href: "/onlineinfo", icon: <FaGlobe /> },
    { title: "ई-पुस्तके", href: "/ebooks", icon: <FaDownload /> },
    { title: "द्रुत दुवे", href: "/quicklinks", icon: <FaDownload /> },
     { title: "जाहीर नोटीस", href: "/notice", icon: <FaDownload /> },
   { title: "लॉगिन", href: "/login", icon: < FaUser  /> }

  ];

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* TOP HEADER */}
      <HeaderTop onMenuClick={() => setMobileOpen(!mobileOpen)} />

      {/* NAVBAR */}
      <nav className="bg-[#730624] text-white">
        <div className="flex justify-center px-8 py-2">
          <ul className="hidden md:flex gap-6 text-[17px] font-semibold whitespace-nowrap">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.href || "#"}
                  className="flex items-center gap-2 hover:text-yellow-200"
                >
                  {item.icon}
                  {item.title}
                  {item.submenu && <FaChevronDown className="text-[12px]" />}
                </a>

                {item.submenu && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {item.submenu.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-[#f2f2f2] hover:text-[#730624]"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden bg-[#730624] px-4"
            >
              {menuItems.map((item, index) => (
                <div key={index}>
                  <div
  onClick={() => {
    if (item.submenu) {
      setOpenSubMenu(openSubMenu === index ? null : index);
    } else {
      window.location.href = item.href;
      setMobileOpen(false);
    }
  }}
  className="flex justify-between items-center py-3 border-b border-white/20 cursor-pointer"
>

                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.title}
                    </span>
                    {item.submenu && <FaChevronDown />}
                  </div>

                  {item.submenu && openSubMenu === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white/10 pl-5"
                    >
                      {item.submenu.map((sub, i) => (
                        <a
                          key={i}
                          href={sub.href}
                          className="block py-2 text-[14px] hover:text-yellow-300"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}


