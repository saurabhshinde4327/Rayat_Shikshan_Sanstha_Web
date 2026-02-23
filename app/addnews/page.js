"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useRouter } from "next/navigation";

export default function AddNews() {
  const [region, setRegion] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [circulatNo, setCirculatNo] = useState(""); // <-- NEW STATE
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!region || !title || !date || !file || !circulatNo) {
      setMessage("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("region", region);
    formData.append("title", title);
    formData.append("date", date);
    formData.append("file", file);
    formData.append("circulat_no", circulatNo); // <-- ADD THIS

    const response = await fetch("/api/addNews", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.ok) {
      setRegion("");
      setTitle("");
      setDate("");
      setFile(null);
      setCirculatNo("");
      router.push("/managenews");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar setActiveSection={() => {}} />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8">
          <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Add News</h2>
            {message && <p className="text-red-600">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-gray-700">Region Name</label>
                <input
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Circular No</label>
                <input
                  type="text"
                  value={circulatNo}
                  onChange={(e) => setCirculatNo(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter circular number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Upload File</label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-teal-900 text-white p-2 rounded w-full"
              >
                Upload News
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
