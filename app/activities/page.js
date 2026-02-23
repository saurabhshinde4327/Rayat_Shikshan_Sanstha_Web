"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function AllActivitiesPage() {
  const [selectedImage, setSelectedImage] = useState(null);
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

  // Flatten all images for the gallery lightbox
  const galleryImages = activities.flatMap((item) =>
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
    e?.stopPropagation(); // Optional chaining in case called manually without event
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <Header />

      <section className="w-full py-16 bg-white">
        <h1 className="text-center text-4xl font-serif font-bold text-[#7A0026] mb-12">
          सर्व कार्यक्रम / उपक्रम
        </h1>

        {/* GRID FIXED */}
        <div
          className="grid gap-10 max-w-[1600px] mx-auto px-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {activities.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              {/* IMAGE 1 */}
              {item.file_path?.[0] && (
                <div
                  className="relative h-[180px] overflow-hidden cursor-pointer"
                  onClick={() => openGallery(item.file_path[0])}
                >
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
                <div
                  className="relative h-[180px] overflow-hidden cursor-pointer"
                  onClick={() => openGallery(item.file_path[1])}
                >
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
              &times;
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
                >
                  &#10094;
                </button>

                {/* Next Button */}
                <button
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/60 p-2 md:p-3 rounded-full transition-all z-[60] backdrop-blur-[2px]"
                  onClick={handleNext}
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
    </>
  );
}
