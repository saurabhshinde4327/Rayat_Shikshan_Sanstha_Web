"use client";

import Image from "next/image";
import { FaCrown } from "react-icons/fa";

const members = [
  { id: 1, name: "मा. शरदराव गोविंदराव पवार", role: " अध्यक्ष, रयत शिक्षण संस्था", img: "/images/12.png" },
  { id: 2, name: " मा. चंद्रकांत नारायण दळवी IAS(Retd.)", role: "चेअरमन, रयत शिक्षण संस्था", img: "/images/chairman1.jpg" },
{ id: 3, name: " डॉ. अनिल आप्पासाहेब पाटील", role: "संघटक, रयत शिक्षण संस्था ", img: "/images/Dr.Anil Patil.png" },
  { id: 4, name: " मा. ऍड. भगीरथ निवृत्ती शिंदे", role: "व्हा. चेअरमन, रयत शिक्षण संस्था", img: "/images/vice.png" },
  { id: 5, name: "मा. विकास देशमुख IAS (Retd.)", role: "सचिव, रयत शिक्षण संस्था", img: "/images/sec1.png" },
];

export default function Management() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0] py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#7A0026] tracking-wide">
            आमचे नेतृत्व
          </h2>
          {/* <h3 className="text-2xl font-serif font-medium text-gray-700 mt-3">
            रयत शिक्षण संस्था
          </h3> */}

          {/* Gold Line + Crown */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
            <FaCrown className="text-[#D8B267] text-xl drop-shadow-md" />
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {members.map((m) => (
            <article
              key={m.id}
              className="relative overflow-hidden bg-white/40 backdrop-blur-xl
              border border-[#e1d6b2] rounded-2xl
              shadow-[0_4px_20px_rgba(0,0,0,0.15)]
              transition-all duration-700
              hover:-translate-y-4 hover:shadow-[0_10px_35px_rgba(0,0,0,0.25)]
              hover:border-[#D8B267] group"
            >
              {/* Top Crown */}
              {/* <div className="absolute right-2 top-2 bg-white/60 rounded-full p-1 shadow-md z-10">
                <FaCrown className="text-[#c29a42] text-sm" />
              </div> */}

              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-2xl bg-[#faf8f3]">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="bg-gradient-to-b from-[#7A0026] to-[#57001b] text-white text-center px-4 py-6 space-y-2">
                <p className="font-semibold text-sm md:text-base tracking-wide leading-relaxed">
                  {m.name}
                </p>

                <p className="text-xs md:text-sm text-[#D8B267] uppercase font-medium leading-relaxed">
                  {m.role}
                </p>
              </div>

              {/* Bottom Gold Reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#D8B26740] to-transparent blur-xl" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
