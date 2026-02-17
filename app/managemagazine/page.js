"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Eye, Edit } from "lucide-react";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function ManageMagazine() {
  const router = useRouter();
  const [magazines, setMagazines] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editMonth, setEditMonth] = useState("");
  const [editFile, setEditFile] = useState(null);
  const [editPdfLink, setEditPdfLink] = useState("");

  // ✅ Fetch magazine data
  const fetchMagazines = async () => {
    try {
      const response = await fetch("/api/getMagazine");
      const data = await response.json();
      setMagazines(data);
    } catch (error) {
      console.error("Failed to fetch magazines:", error);
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  // ✅ Delete magazine
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This magazine will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`/api/deleteMagazine?id=${id}`, { method: "DELETE" });
        if (response.ok) {
          setMagazines(magazines.filter((mag) => mag.id !== id));
          Swal.fire("Deleted!", "The magazine has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete magazine.", "error");
        }
      } catch (error) {
        console.error("Error deleting magazine:", error);
        Swal.fire("Error", "Something went wrong!", "error");
      }
    }
  };

  // ✅ View PDF
  const handleViewFile = (filePath) => {
    window.open(filePath, "_blank");
  };

  // ✅ Start editing
  const startEditing = (mag) => {
    setEditingId(mag.id);
    setEditMonth(mag.month);
    setEditPdfLink(mag.pdf_link || "");
    setEditFile(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditMonth("");
    setEditPdfLink("");
    setEditFile(null);
  };

  // ✅ Update magazine
  const handleUpdate = async (id) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("month", editMonth);
      if (editFile) {
        formData.append("file", editFile);
      }

      const response = await fetch("/api/updateMagazine", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const updatedMag = await response.json();
        setMagazines(magazines.map((mag) => (mag.id === id ? updatedMag : mag)));
        Swal.fire("Updated!", "The magazine has been updated.", "success");
        cancelEditing();
      } else {
        Swal.fire("Error", "Failed to update magazine.", "error");
      }
    } catch (error) {
      console.error("Error updating magazine:", error);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        setActiveSection={(section) => {
          router.push(`/${section}`);
        }}
      />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Magazine List
            </h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Month</th>
                  <th className="border border-gray-300 px-4 py-2">PDF File</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {magazines.length > 0 ? (
                  magazines.map((mag) => (
                    <tr key={mag.id} className="text-center">
                      {/* Month cell */}
                      <td className="border border-gray-300 px-4 py-2">
                        {editingId === mag.id ? (
                          <input
                            type="text"
                            value={editMonth}
                            onChange={(e) => setEditMonth(e.target.value)}
                            className="w-full border border-gray-400 rounded px-2 py-1"
                          />
                        ) : (
                          mag.month
                        )}
                      </td>

                      {/* PDF File cell */}
                      <td className="border border-gray-300 px-4 py-2">
                        {editingId === mag.id ? (
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) => setEditFile(e.target.files[0])}
                            className="block w-full"
                          />
                        ) : mag.pdf_link ? (
                          <a
                            href={mag.pdf_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            View PDF
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>

                      {/* Actions */}
                      <td className="border border-gray-300 px-4 py-2 flex justify-center gap-4">
                        {editingId === mag.id ? (
                          <>
                            <button
                              onClick={() => handleUpdate(mag.id)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            {mag.pdf_link && (
                              <button
                                onClick={() => handleViewFile(mag.pdf_link)}
                                className="text-green-500 hover:text-green-700"
                              >
                                <Eye size={30} />
                              </button>
                            )}
                            <button
                              onClick={() => startEditing(mag)}
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <Edit size={30} />
                            </button>
                            <button
                              onClick={() => handleDelete(mag.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={30} />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-gray-500">
                      No magazines available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
