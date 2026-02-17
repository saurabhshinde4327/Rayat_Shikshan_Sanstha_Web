"use client";
import { useState } from "react";

export default function UploadPDF() {
  const [title, setTitle] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !pdfFile) {
      setMessage("Please enter title and select a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("pdfFile", pdfFile);

    const res = await fetch("/api/upload-pdf", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message || data.error);
    setTitle("");
    setPdfFile(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Upload PDF</h1>
      {message && <p className="mb-4 text-red-600">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="PDF Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-800"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
