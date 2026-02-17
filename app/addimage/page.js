"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import Image from "next/image";

export default function AddImage() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const router = useRouter();

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/getSliderImages");
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Please select an image!" });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/uploadImage", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({ icon: "success", title: "Uploaded!", text: data.message });
      setFile(null);
      fetchImages(); // 🔹 immediately refresh the slider images
    } else {
      Swal.fire({ icon: "error", title: "Upload Failed", text: data.message || "Something went wrong!" });
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirmDelete.isConfirmed) return;

    const response = await fetch(`/api/deleteImage?id=${id}`, { method: "DELETE" });

    if (response.ok) {
      setImages(images.filter((img) => img.id !== id));
      Swal.fire({ icon: "success", title: "Deleted!", text: "The image has been removed." });
    } else {
      Swal.fire({ icon: "error", title: "Deletion Failed", text: "Failed to delete the image." });
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar setActiveSection={(section) => router.push(`/${section.toLowerCase()}`)} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8">
          <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Add Image</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button type="submit" className="bg-teal-900 text-white p-2 rounded w-full">
                Upload Image
              </button>
            </form>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Uploaded Images</h2>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img) => (
                <div key={img.id} className="relative group">
                  <Image
                    src={`${img.file_path}?v=${new Date().getTime()}`}
                    alt="Slider"
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover rounded"
                    unoptimized
                  />
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
