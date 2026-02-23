"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SidebarSchool from "../components/SidebarSchool";
import SchoolTopbar from "../components/SchoolTopbar";

export default function ManageSchoolInfo() {
  const router = useRouter();
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Editable fields
  const [principalName, setPrincipalName] = useState("");
  const [vicePrincipalName, setVicePrincipalName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [motto, setMotto] = useState("");
  const [established, setEstablished] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [studentCount, setStudentCount] = useState("");
  const [facilities, setFacilities] = useState("");
  const [achievements, setAchievements] = useState("");
  const [medium, setMedium] = useState("");
  const [scholarshipResult, setScholarshipResult] = useState("");
  const [sscResult, setSscResult] = useState("");
  const [hscResult, setHscResult] = useState("");
  const [studentStdDivision, setStudentStdDivision] = useState([]);
  const [std, setStd] = useState("");
  const [division, setDivision] = useState("");
  const [stdCount, setStdCount] = useState("");
  const [mahitiPustikka, setMahitiPustikka] = useState("");
  const [pdfUploading, setPdfUploading] = useState(false);

  useEffect(() => {
    const fetchSchoolInfo = async () => {
      const school_id = localStorage.getItem("school_id");
      if (!school_id) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`/api/schoolinfo?school_id=${school_id}`);
        if (!response.ok) throw new Error("Failed to fetch school info");
        const info = await response.json();
        setSchoolInfo(info);
        if (info) {
          setPrincipalName(info.principal_name || "");
          setVicePrincipalName(info.vice_principal_name || "");
          setContact(info.contact || "");
          setEmail(info.email || "");
          setAddress(info.address || "");
          setMotto(info.motto || "");
          setEstablished(info.established || "");
          setAffiliation(info.affiliation || "");
          setStudentCount(info.student_count || "");
          setFacilities(info.facilities || "");
          setAchievements(info.achievements || "");
          setMedium(info.medium || "");
          setScholarshipResult(info.scholarship_result || "");
          setSscResult(info.ssc_result || "");
          setHscResult(info.hsc_result || "");
          setStudentStdDivision(info.student_std_division ? JSON.parse(info.student_std_division) : []);
          setMahitiPustikka(info.mahiti_pustikka || "");
        }
      } catch (error) {
        console.error("Error fetching school info:", error);
        setSchoolInfo(null);
      } finally {
        setLoading(false);
      }
    };
    fetchSchoolInfo();
  }, []);

  const handlePdfChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.name.toLowerCase().endsWith(".pdf")) {
      setMessage("Please select a PDF file.");
      return;
    }
    setPdfUploading(true);
    setMessage("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/uploadSchoolInfoPdf", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.filePath) {
        setMahitiPustikka(data.filePath);
        setMessage("PDF uploaded. Click Update to save.");
      } else {
        setMessage(data?.error || "PDF upload failed.");
      }
    } catch (err) {
      setMessage("PDF upload failed.");
    } finally {
      setPdfUploading(false);
      e.target.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const school_id = localStorage.getItem("school_id");
    if (!school_id) {
      setMessage("Error: Invalid school ID. Please log in again.");
      return;
    }
    try {
      const response = await fetch("/api/addSchoolInfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          school_id,
          principalName,
          vicePrincipalName,
          contact,
          email,
          address,
          motto,
          established,
          affiliation,
          studentCount,
          facilities,
          achievements,
          studentStdDivision,
          medium,
          scholarshipResult,
          sscResult,
          hscResult,
          mahiti_pustikka: mahitiPustikka ? mahitiPustikka : (schoolInfo?.mahiti_pustikka || null),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Information updated successfully!");
        setIsEditing(false);
        const res = await fetch(`/api/schoolinfo?school_id=${school_id}`);
        if (res.ok) {
          const info = await res.json();
          setMahitiPustikka(info.mahiti_pustikka || "");
        }
      } else {
        setMessage(data.error || "Failed to update information.");
      }
    } catch (error) {
      setMessage("Error updating information. Please try again.");
    }
  };

  const handleNavigation = (section) => {
    const routes = {
      addEvent: "/adddocuments",
      manageEvents: "/managedocuments",
      addSchoolInfo: "/addschoolinfo",
      manageSchoolInfo: "/manageschoolinfo",
      addSchoolNew: "/addschoolnews",
      manageSchoolNew: "/manageschoolnews",
      addRecentsActivity: "/addschoolactivity",
      manageRecentsActivities: "/manageschoolactivity",
      addRecentEvents: "/addschoolevents",
      manageRecentEvents: "/manageschoolevents",
    };
    router.push(routes[section] || "/");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarSchool setActiveSection={handleNavigation} />
      <div className="flex-1 flex flex-col">
        <SchoolTopbar />
        <main className="flex-1 p-4 overflow-hidden">
          <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 rounded shadow max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Manage School Information</h2>
            {message && <p className="text-green-700 mb-4 text-center">{message}</p>}
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : !schoolInfo ? (
              <p className="text-gray-500">No school information available for your account.</p>
            ) : !isEditing ? (
              <div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <p><strong>Principal:</strong> {principalName}</p>
                  <p><strong>Vice Principal:</strong> {vicePrincipalName}</p>
                  <p><strong>Contact:</strong> {contact}</p>
                  <p><strong>Email:</strong> {email}</p>
                  <p><strong>Address:</strong> {address}</p>
                  <p><strong>Motto:</strong> {motto}</p>
                  <p><strong>Established:</strong> {established}</p>
                  <p><strong>Total Teachers:</strong> {affiliation}</p>
                  <p><strong>Total Students:</strong> {studentCount}</p>
                  <p><strong>Medium:</strong> {medium}</p>
                  <p><strong>Facilities:</strong> {facilities}</p>
                  <p><strong>Achievements:</strong> {achievements}</p>
                  <p><strong>Scholarship Result:</strong> {scholarshipResult}</p>
                  <p><strong>SSC Result:</strong> {sscResult}</p>
                  <p><strong>HSC Result:</strong> {hscResult}</p>
                </div>

                {mahitiPustikka && (
                  <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="font-bold text-teal-900">Mahiti Pustikka (Prospectus)</p>
                      <p className="text-xs text-teal-700">Currently uploaded & active</p>
                    </div>
                    <a
                      href={mahitiPustikka}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition"
                    >
                      View Current PDF
                    </a>
                  </div>
                )}
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Std/Division wise Student Count</h4>
                  <ul className="list-disc pl-5">
                    {studentStdDivision.map((row, idx) => (
                      <li key={idx}>{row.std} - {row.division}: {row.count} students</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-teal-800 text-white mt-6 p-2 rounded w-full" onClick={() => setIsEditing(true)}>
                  Edit Information
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Principal Name" value={principalName} onChange={setPrincipalName} required />
                  <Input label="Vice Principal Name" value={vicePrincipalName} onChange={setVicePrincipalName} required />
                  <Input label="Contact" value={contact} onChange={setContact} required />
                  <Input label="Email" value={email} onChange={setEmail} type="email" required />
                  <Input label="Address" value={address} onChange={setAddress} required />
                  <Input label="Motto" value={motto} onChange={setMotto} />
                  <Input label="Established" value={established} onChange={setEstablished} />
                  <Input label="Total Teachers" value={affiliation} onChange={setAffiliation} />
                  <Input label="Total Students" value={studentCount} onChange={setStudentCount} type="number" required />
                  <div>
                    <label className="block text-gray-700 mb-1">Medium</label>
                    <select value={medium} onChange={e => setMedium(e.target.value)} className="w-full p-2 border rounded" required>
                      <option value="">Select Medium</option>
                      <option value="English">English</option>
                      <option value="Semi English">Semi English</option>
                      <option value="Marathi">Marathi</option>
                    </select>
                  </div>
                </div>

                {/* Std/division section */}
                <div className="border p-3 rounded mb-2 bg-gray-50">
                  <div className="font-semibold mb-2">Edit Std/Division wise Student Count</div>
                  <div className="flex flex-col sm:flex-row gap-2 mb-2">
                    <input type="text" placeholder="Std" value={std} onChange={e => setStd(e.target.value)} className="border p-1 rounded w-full sm:w-1/4" />
                    <input type="text" placeholder="Division" value={division} onChange={e => setDivision(e.target.value)} className="border p-1 rounded w-full sm:w-1/4" />
                    <input type="number" placeholder="Count" value={stdCount} onChange={e => setStdCount(e.target.value)} className="border p-1 rounded w-full sm:w-1/4" />
                    <button type="button" className="bg-teal-700 text-white px-3 rounded" onClick={() => {
                      if (std && division && stdCount) {
                        setStudentStdDivision([...studentStdDivision, { std, division, count: Number(stdCount) }]);
                        setStd(""); setDivision(""); setStdCount("");
                      }
                    }}>Add</button>
                  </div>
                  {studentStdDivision.length > 0 && (
                    <table className="w-full text-sm border">
                      <thead><tr><th className="border px-2">Std</th><th className="border px-2">Division</th><th className="border px-2">Count</th><th className="border px-2">Remove</th></tr></thead>
                      <tbody>
                        {studentStdDivision.map((row, idx) => (
                          <tr key={idx}>
                            <td className="border px-2">{row.std}</td>
                            <td className="border px-2">{row.division}</td>
                            <td className="border px-2">{row.count}</td>
                            <td className="border px-2"><button type="button" className="text-red-600" onClick={() => setStudentStdDivision(studentStdDivision.filter((_, i) => i !== idx))}>Remove</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Textarea label="Facilities" value={facilities} onChange={setFacilities} required />
                  <Textarea label="Achievements" value={achievements} onChange={setAchievements} required />
                  <Input label="Scholarship Result" value={scholarshipResult} onChange={setScholarshipResult} />
                  <Input label="SSC Result" value={sscResult} onChange={setSscResult} />
                  <Input label="HSC Result (If Junior college attached)" value={hscResult} onChange={setHscResult} />
                </div>

                <div>
                  <div className="flex justify-between items-end mb-1">
                    <label className="block text-gray-700">Mahiti Pustikka (Prospectus PDF)</label>
                    {mahitiPustikka && (
                      <a
                        href={mahitiPustikka}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-teal-600 underline hover:text-teal-800"
                      >
                        View Current PDF
                      </a>
                    )}
                  </div>
                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handlePdfChange}
                    disabled={pdfUploading}
                    className="w-full p-2 border rounded file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:bg-teal-50 file:text-teal-700 font-medium"
                  />
                  {pdfUploading && <p className="text-sm text-gray-500 mt-1 animate-pulse">Uploading…</p>}
                  {message.includes("PDF uploaded") && <p className="text-sm text-green-600 mt-1">New PDF uploaded. Click Update to save permanently.</p>}
                </div>

                <div className="flex justify-between gap-2 mt-4">
                  <button type="submit" className="bg-teal-900 text-white p-2 rounded w-full">Update</button>
                  <button type="button" className="bg-gray-400 text-white p-2 rounded w-full" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

// Input Component
function Input({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded"
        required={required}
      />
    </div>
  );
}

// Textarea Component
function Textarea({ label, value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded min-h-[80px]"
        required={required}
      />
    </div>
  );
}
