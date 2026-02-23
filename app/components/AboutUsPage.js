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

  // Flatten all images for the gallery lightbox
  const galleryImages = limitedActivities.flatMap((item) =>
    (item.file_path || []).map((img) => ({
      src: img,
      title: item.title,
    }))
  );

  const openGallery = (imgSrc) => {
    const index = galleryImages.findIndex((img) => img.src === imgSrc);
    if (index !== -1) setSelectedImage(index);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
                onClick={() => openGallery(item.file_path[0])}
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
                onClick={() => openGallery(item.file_path[1])}
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
      {selectedImage !== null && galleryImages[selectedImage] && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl z-[60] hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>

          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] md:h-[80vh] group rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-contain"
              />

              {/* Previous Button */}
              <button
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/60 p-2 md:p-3 rounded-full transition-all z-[60] backdrop-blur-[2px]"
                onClick={handlePrev}
                aria-label="Previous Image"
              >
                &#10094;
              </button>

              {/* Next Button */}
              <button
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/60 p-2 md:p-3 rounded-full transition-all z-[60] backdrop-blur-[2px]"
                onClick={handleNext}
                aria-label="Next Image"
              >
                &#10095;
              </button>
            </div>

            {/* Title Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl md:text-2xl font-serif font-bold tracking-wide">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Image {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
