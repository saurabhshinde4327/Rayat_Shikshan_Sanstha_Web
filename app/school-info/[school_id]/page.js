"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaUserTie, FaChalkboardTeacher, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUniversity, FaUserGraduate, FaTrophy, FaBuilding, FaBookOpen, FaSchool, FaFilePdf } from "react-icons/fa";

// Logo with fallback when image missing so layout stays correct
function HeaderLogo({ src, alt }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32 bg-white rounded-full shadow-2xl border-4 border-yellow-400 flex items-center justify-center overflow-hidden flex-shrink-0">
      {!errored ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="128px"
          className="object-contain p-3"
          priority
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="text-gray-300 flex items-center justify-center p-2" title={alt}>
          <FaSchool className="w-12 h-12 md:w-14 md:h-14" />
        </span>
      )}
    </div>
  );
}

export default function SchoolProfile() {
  const { school_id } = useParams();
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Edit mode states (keeping minimal logic for now, focus on View)
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  // State for form fields (to support edit mode if needed)
  const [formState, setFormState] = useState({});
  const [pdfUploading, setPdfUploading] = useState(false);

  const fetchData = useCallback(async (noCache = false) => {
    try {
      const url = noCache
        ? `/api/schoolinfo?school_id=${school_id}&_t=${Date.now()}`
        : `/api/schoolinfo?school_id=${school_id}`;
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSchoolInfo(data);
      setFormState(data);
      if (typeof data.student_std_division === "string") {
        try {
          setFormState((prev) => ({ ...prev, student_std_division: JSON.parse(data.student_std_division) }));
        } catch (_) {}
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [school_id]);

  useEffect(() => {
    if (school_id) fetchData();
  }, [school_id, fetchData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

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
        setFormState((prev) => ({ ...prev, mahiti_pustikka: data.filePath }));
        setMessage("PDF uploaded. Click Save to update.");
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
    setMessage("");
    try {
      const payload = {
        school_id,
        principal_name: formState.principal_name ?? null,
        vice_principal_name: formState.vice_principal_name ?? null,
        contact: formState.contact ?? null,
        email: formState.email ?? null,
        address: formState.address ?? null,
        motto: formState.motto ?? null,
        established: formState.established ?? null,
        affiliation: formState.affiliation ?? null,
        student_count: formState.student_count ?? null,
        facilities: formState.facilities ?? null,
        achievements: formState.achievements ?? null,
        student_std_division: formState.student_std_division ?? null,
        medium: formState.medium ?? null,
        scholarship_result: formState.scholarship_result ?? null,
        ssc_result: formState.ssc_result ?? null,
        hsc_result: formState.hsc_result ?? null,
        mahiti_pustikka: formState.mahiti_pustikka ?? null,
      };
      const response = await fetch("/api/addSchoolInfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setMessage("Saved successfully! Page updated.");
        setEditMode(false);
        await fetchData(true);
      } else {
        setMessage(data?.error || "Failed to save.");
      }
    } catch (error) {
      setMessage("Error saving. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-900"></div>
      </div>
    );
  }

  if (!schoolInfo) {
    return <div className="text-center py-20 text-gray-500">School information not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-[#0a192f] via-[#182e53] to-[#1f4068]
 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

  {/* Left Logo */}
          <div className="hidden md:flex items-center justify-center w-28 md:w-32 flex-shrink-0">
            <HeaderLogo src="/images/rayatlogo1.png" alt="Rayat Shikshan Sanstha" />
          </div>

          {/* Center School Info */}
          <div className="text-center flex-1 min-w-0 px-2">
    <h1 className="text-3xl  md:text-5xl font-extrabold tracking-tight mb-3 drop-shadow-lg">
      <span className="text-lg text-yellow-300 md:text-xl font-semibold block mb-0.5">Rayat Shikshan Sanstha's</span>
      {schoolInfo.school_name || "School Name"}
    </h1>

    <p className="text-yellow-300 text-lg italic flex items-center justify-center gap-2">
      <FaBookOpen /> "{schoolInfo.motto || "Education through self-help is our motto"}"
    </p>

    <div className="mt-4">
      <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-semibold shadow-md">
        Established {schoolInfo.established || "N/A"}
      </span>
    </div>
  </div>

          {/* Right Logo */}
          <div className="hidden md:flex items-center justify-center w-28 md:w-32 flex-shrink-0">
            <HeaderLogo src="/images/kbp.png" alt="KBP" />
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-8">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px]">

          {/* Edit Toggle (Hidden for general users usually, but keeping as requested) */}
          {/* <div className="flex justify-end p-4">
            <button
              onClick={() => setEditMode(!editMode)}
              className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
            >
              {editMode ? "Cancel Edit" : "Edit Info"}
            </button>
          </div> */}

          {editMode ? (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit School Information</h2>
              {message && <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded-lg">{message}</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="principal_name" label="Principal Name" value={formState.principal_name} onChange={handleInputChange} />
                  <Input name="vice_principal_name" label="Vice Principal Name" value={formState.vice_principal_name} onChange={handleInputChange} />
                  <Input name="contact" label="Contact No" value={formState.contact} onChange={handleInputChange} />
                  <Input name="email" label="Email" value={formState.email} onChange={handleInputChange} />
                  <Input name="address" label="Address" value={formState.address} onChange={handleInputChange} />
                  <Input name="motto" label="Motto" value={formState.motto} onChange={handleInputChange} />
                  <Input name="established" label="Established Year" value={formState.established} onChange={handleInputChange} />
                  <Input name="student_count" label="Student Count" value={formState.student_count} onChange={handleInputChange} />
                  <Input name="affiliation" label="Affiliation / Teachers" value={formState.affiliation} onChange={handleInputChange} />
                  <Input name="medium" label="Medium" value={formState.medium} onChange={handleInputChange} />
                  <Input name="scholarship_result" label="Scholarship Result" value={formState.scholarship_result} onChange={handleInputChange} />
                  <Input name="ssc_result" label="SSC Result" value={formState.ssc_result} onChange={handleInputChange} />
                  <Input name="hsc_result" label="HSC Result" value={formState.hsc_result} onChange={handleInputChange} />
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <TextArea name="facilities" label="Facilities" value={formState.facilities} onChange={handleInputChange} />
                  <TextArea name="achievements" label="Achievements" value={formState.achievements} onChange={handleInputChange} />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mahiti Pustikka (PDF)</label>
                    <input
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handlePdfChange}
                      disabled={pdfUploading}
                      className="w-full p-3 border border-gray-300 rounded-lg file:mr-3 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700"
                    />
                    {pdfUploading && <p className="text-sm text-gray-500 mt-1">Uploading…</p>}
                    {formState.mahiti_pustikka && <p className="text-sm text-green-600 mt-1">PDF attached. Save to apply.</p>}
                  </div>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Save Changes</button>
              </form>
            </div>
          ) : (
            <div className="p-0">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50/50">
                <StatItem label="Total Students" value={schoolInfo.student_count} icon={<FaUserGraduate className="text-blue-500" />} />
                <StatItem label="Medium" value={schoolInfo.medium} icon={<FaBookOpen className="text-green-500" />} />
                <StatItem label="Teachers/Affiliation" value={schoolInfo.affiliation} icon={<FaChalkboardTeacher className="text-purple-500" />} />
                <StatItem label="Established" value={schoolInfo.established} icon={<FaUniversity className="text-orange-500" />} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Left Column: Management & Contact */}
                <div className="space-y-8">
                  <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 transform transition hover:-translate-y-1 duration-300">
                    <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <FaUserTie /> Administration
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-full shadow-sm text-blue-600"><FaUserTie /></div>
                        <div>
                          <p className="text-sm text-gray-500">Principal</p>
                          <p className="font-semibold text-gray-800">{schoolInfo.principal_name || "—"}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-full shadow-sm text-blue-600"><FaUserTie /></div>
                        <div>
                          <p className="text-sm text-gray-500">Vice Principal</p>
                          <p className="font-semibold text-gray-800">{schoolInfo.vice_principal_name || "—"}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FaPhoneAlt className="text-gray-600" /> Contact Details
                    </h3>
                    <div className="space-y-3">
                      <p className="flex items-center gap-3 text-gray-700">
                        <FaPhoneAlt className="text-blue-500 text-sm" /> {schoolInfo.contact}
                      </p>
                      <p className="flex items-center gap-3 text-gray-700">
                        <FaEnvelope className="text-blue-500 text-sm" /> {schoolInfo.email}
                      </p>
                      <p className="flex items-start gap-3 text-gray-700">
                        <FaMapMarkerAlt className="text-blue-500 text-sm mt-1" /> {schoolInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Middle Column: Facilities & Achievements */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Academic Results Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ResultCard title="SSC Result" value={schoolInfo.ssc_result} color="bg-green-50 text-green-700 border-green-200" />
                    <ResultCard title="HSC Result" value={schoolInfo.hsc_result} color="bg-purple-50 text-purple-700 border-purple-200" />
                    <ResultCard title="Scholarship" value={schoolInfo.scholarship_result} color="bg-yellow-50 text-yellow-700 border-yellow-200" />
                  </div>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b pb-2 mb-4">
                      <FaBuilding className="text-blue-600" /> Facilities
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      {schoolInfo.facilities || "No specific facilities listed."}
                    </p>
                  </div>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b pb-2 mb-4">
                      <FaTrophy className="text-yellow-500" /> Achievements
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      {schoolInfo.achievements || "No specific achievements listed."}
                    </p>
                  </div>

                  {schoolInfo.mahiti_pustikka && (
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b pb-2 mb-4">
                        <FaFilePdf className="text-red-500" /> Mahiti Pustikka
                      </h3>
                      <a
                        href={schoolInfo.mahiti_pustikka}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded-xl hover:bg-red-100 transition-colors font-medium"
                      >
                        <FaFilePdf /> View / Download PDF
                      </a>
                    </div>
                  )}

                </div>
              </div>

              {/* Student Distribution Table */}
              {schoolInfo.student_std_division && (
                <div className="p-8 border-t border-gray-100 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FaUserGraduate /> Student Class Distribution
                  </h3>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {(() => {
                      let data = [];
                      try {
                        data = typeof schoolInfo.student_std_division === 'string'
                          ? JSON.parse(schoolInfo.student_std_division)
                          : schoolInfo.student_std_division;
                      } catch (e) {
                        console.error("JSON parse error", e);
                      }

                      if (!Array.isArray(data) || data.length === 0) {
                        return <div className="p-4 text-center text-gray-500">No student distribution data available.</div>;
                      }

                      return (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Standard</th>
                                <th className="px-6 py-4 font-semibold">Division</th>
                                <th className="px-6 py-4 font-semibold text-right">Student Count</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {data.map((row, idx) => (
                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                  <td className="px-6 py-4 text-gray-800 font-medium">{row.std}</td>
                                  <td className="px-6 py-4 text-gray-600">{row.division}</td>
                                  <td className="px-6 py-4 text-gray-800 text-right font-semibold">{row.count}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function StatItem({ label, value, icon }) {
  if (value === undefined || value === null || value === "") return null;
  return (
    <div className="p-6 text-center group hover:bg-white transition-colors">
      <div className="text-2xl mb-2 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
      <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{label}</div>
      <div className="text-lg font-bold text-gray-800 mt-1">{value}</div>
    </div>
  );
}

function ResultCard({ title, value, color }) {
  if (!value) return null;
  return (
    <div className={`p-4 rounded-xl border ${color} shadow-sm`}>
      <p className="text-xs uppercase tracking-wider font-bold opacity-70 mb-1">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
      />
    </div>
  );
}

function TextArea({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none min-h-[120px]"
      />
    </div>
  );
}
