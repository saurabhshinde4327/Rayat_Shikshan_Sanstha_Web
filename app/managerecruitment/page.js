"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Eye, Link as LinkIcon } from "lucide-react";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function ManageRecruitment() {
  const router = useRouter();
  const [recruitmentList, setRecruitmentList] = useState([]);

  const fetchRecruitment = async () => {
    try {
      const response = await fetch("/api/getRecruitment");
      const data = await response.json();
      setRecruitmentList(data);
    } catch (error) {
      console.error("Failed to fetch recruitment data:", error);
    }
  };

  useEffect(() => {
    fetchRecruitment();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This recruitment will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`/api/deleteRec?id=${id}`, { method: "DELETE" });
        if (response.ok) {
          setRecruitmentList(recruitmentList.filter(item => item.id !== id));
          Swal.fire("Deleted!", "The recruitment has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete recruitment.", "error");
        }
      } catch (error) {
        console.error("Error deleting recruitment:", error);
        Swal.fire("Error", "Something went wrong!", "error");
      }
    }
  };

  const handleViewFile = (filePath) => {
    window.open(`/uploads/${filePath.split('/').pop()}`, "_blank");
  };

  const handleViewLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        setActiveSection={(section) => {
          if (section === "addrecruitmentNews") router.push("/addrecruitment");
          else if (section === "managerecruitmentNews") router.push("/managerecruitment");
        }}
      />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recruitment List</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recruitmentList.length > 0 ? (
                  recruitmentList.map((item) => (
                    <tr key={item.id} className="text-center">
                      <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                      <td className="border border-gray-300 px-4 py-2 flex justify-center gap-4">
                        {/* Uploaded file */}
                        {item.file_path && (
                          <button
                            onClick={() => handleViewFile(item.file_path)}
                            className="text-green-500 hover:text-green-700"
                            title="View File"
                          >
                            <Eye size={30} />
                          </button>
                        )}

                        {/* External link */}
                        {item.external_link && (
                          <button
                            onClick={() => handleViewLink(item.external_link)}
                            className="text-blue-500 hover:text-blue-700"
                            title="Visit Link"
                          >
                            <LinkIcon size={30} />
                          </button>
                        )}

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Delete"
                        >
                          <Trash2 size={30} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center py-4 text-gray-500">
                      No recruitment available.
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
