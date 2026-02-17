'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const articles = [
  { title: "Inspector Office, Central Region, Satara", image: "/images/m1.jpeg" },
  { title: "Inspector Office, Northern Region, Ahmednagar", image: "/images/m5.jpeg" },
  { title: "Inspector Office, Southern Region, Sangli", image: "/images/m3.jpeg" },
  { title: "Inspector Office, Western Region, Pune", image: "/images/m2.jpeg" },
  { title: "Inspector Office, Raigad Region, Raigad", image: "/images/m4.jpeg" },
];

export default function Region() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-[45vh]">

      <h1 className="text-4xl font-bold text-center mb-5 text-gray-900">
        Regional Offices
      </h1>

      {/* Header Line */}
      <div className="flex items-center justify-center w-full mb-5">
        <hr className="border border-gray-600 w-1/4" />
        <Image src="/images/logohr.png" alt="logo" width={60} height={50} className="mx-4" />
        <hr className="border border-gray-600 w-1/4" />
      </div>

      {/* ✅ ALL IMAGES IN ONE LINE */}
      <div className="flex overflow-x-auto gap-6 w-full max-w-6xl pb-4 no-scrollbar">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-lg overflow-hidden cursor-pointer shadow-md min-w-[270px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedArticle(article)}
          >
            <Image
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover brightness-75"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-lg font-bold text-center">{article.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Popup (Modal) */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-md bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg p-6 relative bg-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-56 object-cover"
                width={600}
                height={400}
              />
              <h2 className="text-xl text-teal-900 font-bold mt-4 text-center">
                {selectedArticle.title}
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
