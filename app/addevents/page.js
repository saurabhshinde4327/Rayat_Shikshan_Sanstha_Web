"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useRouter } from "next/navigation";

export default function AddEvents() {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || files.length === 0) {
      setMessage("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const response = await fetch("/api/addEvents", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setTitle("");
        setFiles([]);
        router.push("/manageevents"); // Redirect after adding
      }
    } catch (error) {
      setMessage("Error uploading event");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar setActiveSection={(section) => {
        // your routing logic here
      }} />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Add Recent Activity</h2>
            {message && <p className="text-red-600">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <label className="block text-gray-700">Upload Files</label>
                <input
                  type="file"
                  onChange={(e) => setFiles(e.target.files)}
                  className="w-full p-2 border rounded"
                  multiple
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-teal-900 text-white p-2 rounded w-full"
              >
                Upload Event
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
