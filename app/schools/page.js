'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import SchoolsTable from '../components/SchoolsTable';
import Link from 'next/link';

export default function SchoolsPage() {
  const [regions, setRegions] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [loadingSchools, setLoadingSchools] = useState(false);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get('/api/regions');
        if (response.data) setRegions(response.data);
      } catch (error) {
        console.error('Error fetching regions:', error);
      }
    };
    fetchRegions();
  }, []);

  const fetchSchools = async (regionId) => {
    if (!regionId) return;
    setLoadingSchools(true);
    try {
      const response = await axios.get(`/api/schools?region_id=${regionId}`);
      if (response.data) setSchools(response.data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    } finally {
      setLoadingSchools(false);
    }
  };

  return (
    <>
      {/* ===== FORCE LIGHT MODE ===== */}
      <div className="bg-white text-gray-800 dark:bg-white dark:text-gray-800 min-h-screen">

        <Header />

        {/* PAGE HEADER */}
        <section className="w-full h-[120px] relative bg-[#f6eee0]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
              माध्यमिक शाळा
            </h3>

            <nav className="text-sm md:text-base text-gray-600">
              <ol className="inline-flex">
                <li>
                  <Link href="/" className="text-[#7A0726] hover:underline">
                    मुख्य पृष्ठ
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-500">माध्यमिक शाळा</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto p-6 bg-white">
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-lg text-gray-800">
              Select Region:
            </label>

            <select
              className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7A0726]"
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                fetchSchools(e.target.value);
              }}
            >
              <option value="">-- Select a Region --</option>
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>

          {selectedRegion && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Schools in Selected Region
              </h2>

              {loadingSchools ? (
                <p className="text-gray-600">Loading schools...</p>
              ) : (
                <SchoolsTable schools={schools} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
