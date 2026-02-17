"use client";

import { useState } from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com", color: "#3b5998" },
  { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com", color: "#1DA1F2" },
  { name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@rayatshikshansansthasatara", color: "#FF0000" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com", color: "#C13584" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com", color: "#0077B5" },
];

export default function SocialToolbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed right-0 top-[350px] z-[50] flex items-center"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex items-center bg-white rounded-l-full shadow-lg overflow-hidden p-1">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center text-white text-lg transition-all duration-700
              ${index !== 0 && !expanded ? "w-0 h-0 opacity-0 overflow-hidden" : "w-10 h-10"}  
              rounded-full
            `}
            style={{
              backgroundColor: link.color,
              marginLeft: index === 0 ? 0 : "4px",
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

