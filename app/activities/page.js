"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function AllActivitiesPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch("/api/getEvents", { cache: "no-store" });
        const data = await res.json();
        setActivities(data);
      } catch (err) {
        console.log("Error fetching activities:", err);
      }
    };
    fetchActivities();
  }, []);

  return (
    <>
      <Header />

      <section className="w-full py-16 bg-white">
        <h1 className="text-center text-4xl font-serif font-bold text-[#7A0026] mb-12">
          सर्व कार्यक्रम / उपक्रम
        </h1>

        {/* FLEX LAYOUT */}
        <div className="flex flex-wrap justify-center gap-10 max-w-[1600px] mx-auto px-4">
          {activities.map((item) => (
            <div
              key={item.id}
              className="w-[320px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              {/* IMAGE 1 */}
              {item.file_path?.[0] && (
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src={item.file_path[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}

              {/* IMAGE 2 + TITLE */}
              {item.file_path?.[1] && (
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src={item.file_path[1]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60">
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
