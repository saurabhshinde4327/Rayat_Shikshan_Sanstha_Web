"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useRouter } from "next/navigation";

export default function AdminMagazine() {
  const router = useRouter();
  const [month, setMonth] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdfFile || !coverFile) {
      alert("Please select both PDF and Cover Image!");
      return;
    }

    const formData = new FormData();
    formData.append("month", month);
    formData.append("pdf", pdfFile);
    formData.append("cover", coverFile);

    try {
      const res = await fetch("/api/magazine", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message || "Uploaded successfully!");

      setMonth("");
      setPdfFile(null);
      setCoverFile(null);

      // Optional: redirect to magazine list page after upload
      // router.push("/magazine"); 
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed!");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Page content */}
        <div className="p-6">
          <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4">Upload New Magazine</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="font-medium">Title</label>
              <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="Title"
                className="p-2 border rounded"
                required
              />

              <label className="font-medium">Upload PDF</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setPdfFile(e.target.files[0])}
                className="p-2 border rounded"
                required
              />

              <label className="font-medium">Upload Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCoverFile(e.target.files[0])}
                className="p-2 border rounded"
                required
              />

              <button
                type="submit"
                className="bg-teal-700 text-white py-2 rounded hover:bg-teal-800"
              >
                Upload Magazine
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
