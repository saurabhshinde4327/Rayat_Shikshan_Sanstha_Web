"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useRouter } from "next/navigation";

export default function AddRecruitment() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [link, setLink] = useState(""); 
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !date || (!file && !link)) {
      setMessage("Title, Date and either File or Link is required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    if (file) formData.append("file", file);
    if (link) formData.append("link", link);

    const response = await fetch("/api/addRecruitment", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.ok) {
      setTitle("");
      setDate("");
      setFile(null);
      setLink("");
      router.push("/managerecruitment");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar setActiveSection={(section) => {
        if (section === "addrecruitmentNews") router.push("/addrecruitment");
        else if (section === "managerecruitmentNews") router.push("/managerecruitment");
      }} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8">
          <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Add Recruitments</h2>
            {message && <p className="text-red-600">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label className="block text-gray-700">Date</label>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label className="block text-gray-700">Upload File (optional)</label>
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700">Add Link (optional)</label>
                <input type="url" value={link} onChange={(e)=>setLink(e.target.value)} placeholder="https://example.com/recruitment.pdf" className="w-full p-2 border rounded" />
              </div>
              <button type="submit" className="bg-teal-900 text-white p-2 rounded w-full">Upload Recruitment</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
