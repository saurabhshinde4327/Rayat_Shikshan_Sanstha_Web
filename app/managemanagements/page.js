"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Eye, Edit } from "lucide-react";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function ManageManagements() {
  const router = useRouter();
  const [managementList, setManagementList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const entriesPerPage = 15;

  const fetchManagements = async () => {
    const res = await fetch("/api/getManagements");
    const data = await res.json();
    setManagementList(data);
  };

  useEffect(() => {
    fetchManagements();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This entry will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
    });

    if (result.isConfirmed) {
      await fetch(`/api/deleteManagement?id=${id}`, { method: "DELETE" });
      fetchManagements();
      Swal.fire("Deleted!", "Entry removed.", "success");
    }
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  const handleUpdate = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("id", editData.id);
  formData.append("title", editData.title);
  formData.append("designation", editData.designation); // ✅ ADD THIS
  formData.append("sub_designation", editData.sub_designation);

  if (editData.file) {
    formData.append("file", editData.file);
  }

  const res = await fetch("/api/updateManagement", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    Swal.fire("Updated!", "Data updated successfully", "success");
    setShowModal(false);
    fetchManagements();
  } else {
    const err = await res.text();
    console.error(err);
    Swal.fire("Error", "Update failed", "error");
  }
};


  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = managementList.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(managementList.length / entriesPerPage);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Management List</h2>

            <table className="w-full border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Sub Designation</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentEntries.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="border p-2">{item.title}</td>
                    <td className="border p-2">{item.sub_designation}</td>
                    <td className="border p-2 flex justify-center gap-3">
                      <a href={item.file_url} target="_blank">
                        <Eye className="text-green-600" />
                      </a>
                      <button onClick={() => handleEdit(item)}>
                        <Edit className="text-blue-600" />
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        <Trash2 className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-4 gap-4">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Prev
              </button>
              <span>{currentPage} / {totalPages}</span>
              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* EDIT MODAL */}
{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <form
      onSubmit={handleUpdate}
      className="bg-white p-6 rounded w-[400px]"
    >
      <h3 className="text-xl font-semibold mb-4">Edit Management</h3>

      <input
        type="text"
        value={editData.title}
        onChange={(e) => setEditData({ ...editData, title: e.target.value })}
        className="w-full border p-2 mb-3"
        placeholder="Title"
      />

      <input
        type="text"
        value={editData.designation || ""}
        onChange={(e) =>
          setEditData({ ...editData, designation: e.target.value })
        }
        className="w-full border p-2 mb-3"
        placeholder="Designation"
      />

      <input
        type="text"
        value={editData.sub_designation}
        onChange={(e) =>
          setEditData({ ...editData, sub_designation: e.target.value })
        }
        className="w-full border p-2 mb-3"
        placeholder="Sub Designation"
      />

      <input
        type="file"
        onChange={(e) =>
          setEditData({ ...editData, file: e.target.files[0] })
        }
        className="mb-3"
      />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Update
        </button>
      </div>
    </form>
  </div>
)}

    </div>
  );
}
