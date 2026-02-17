"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCrown, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ActivitiesGrid() {
  const [activities, setActivities] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

  const HOME_LIMIT = 8;

  // Fetch data
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

  const limitedActivities = activities.slice(0, HOME_LIMIT);

  return (
    <section className="w-full py-12 flex flex-col items-center bg-[#f6eee0] overflow-hidden">
      
      {/* HEADING */}
      <h2 className="text-center text-4xl font-serif font-bold mb-6 text-[#7A0026]">
        कार्यक्रम / उपक्रम
      </h2>

      {/* DIVIDER */}
      <div className="flex items-center gap-3 mb-10">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
        <FaCrown className="text-[#D8B267] text-xl" />
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
        {limitedActivities.map((item) => (
          <div
            key={item.id}
            className="w-[360px] rounded-3xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE 1 */}
            {item.file_path?.[0] && (
              <div
                className="relative h-[170px] w-full cursor-pointer"
                onClick={() => setSelectedImage(item.file_path[0])}
              >
                <Image
                  src={item.file_path[0]}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* IMAGE 2 */}
            {item.file_path?.[1] && (
              <div
                className="relative h-[170px] w-full cursor-pointer"
                onClick={() => setSelectedImage(item.file_path[1])}
              >
                <Image
                  src={item.file_path[1]}
                  alt={item.title}
                  fill
                  className="object-cover"
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

      {/* VIEW ALL BUTTON */}
      {activities.length > HOME_LIMIT && (
        <div className="mt-14">
          <button
            onClick={() => router.push("/activities")}
            className="px-10 py-3 rounded-full bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            अधिक माहितीसाठी
          </button>
        </div>
      )}

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-3 right-3 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
