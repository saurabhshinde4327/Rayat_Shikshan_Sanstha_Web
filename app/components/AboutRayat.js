'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';
import SchoolsTable from '../components/SchoolsTable';
import Image from 'next/image';

const AboutRayat = () => {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
  const [regions, setRegions] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [loadingSchools, setLoadingSchools] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [loadingColleges, setLoadingColleges] = useState(false);

  // Fetch regions
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

  // Fetch schools by region
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

  // Fetch colleges on click
  const openCollegeModal = async () => {
    setIsCollegeModalOpen(true);
    setLoadingColleges(true);
    try {
      const response = await axios.get('/api/colleges');
      if (response.data) setColleges(response.data);
    } catch (error) {
      console.error('Error fetching colleges:', error);
    } finally {
      setLoadingColleges(false);
    }
  };

  return (
    <div className="w-full relative bg-white text-black">
      
      <section className="bg-white py-12 px-4 text-black">
        <div className="max-w-5xl mx-auto border p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-center text-lg md:text-xl font-semibold text-red-700 mb-6">
            Rayat Shikshan Sanstha, Satara (Management)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center text-black">

            {/* Left Buttons */}
            <div className="space-y-3">
              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100 text-black"
                onClick={openCollegeModal}>
                Senior Colleges (42)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100 text-black"
                onClick={() => setIsSchoolModalOpen(true)}>
                Secondary Schools (453)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100 text-black">
                Teachers Training Colleges (07)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100 text-black">
                Primary Schools (67)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100 text-black">
                Pre-Primary Schools (54)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100 text-black">
                Hostels (83)
              </button>
            </div>

            {/* Center Image */}
            <div className="flex flex-col items-center justify-center border border-teal-400 p-6 rounded-lg bg-white">
              <Image
                src="/images/ofc.jpeg"
                alt="Rayat Office"
                width={350}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="mt-4 font-semibold text-black">
                Rayat Shikshan Sanstha, Satara
              </p>
            </div>

            {/* Right Buttons */}
            <div className="space-y-3 text-black">
              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100">
                Administrative Offices (07)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100">
                Ashram Schools (08)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100">
                ITIs (03)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100">
                Other Branches (11)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100">
                RIRD (01)
              </button>

              <button className="border border-teal-400 w-full px-4 py-3 rounded-lg font-semibold hover:bg-teal-100">
                Total (736)
              </button>
            </div>
          </div>

          <br />

          <p className="border border-teal-400 text-center px-4 py-3 rounded-lg font-semibold text-black">
            A Family of <span className="text-blue-700">12,442</span> Staff and{' '}
            <span className="text-red-700">4,34,252</span> Students | Working in 15 Districts of Maharashtra and 1 District of Karnataka.
          </p>
        </div>
      </section>

      {/* School Modal */}
      {isSchoolModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[60%] max-h-[80vh] overflow-y-auto text-center relative text-black">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
              onClick={() => {
                setIsSchoolModalOpen(false);
                setSchools([]);
                setSelectedRegion('');
              }}
            >
              <X size={24} />
            </button>

            <h3 className="text-lg font-semibold mb-4 text-black">Select a Region</h3>

            <select
              className="w-full px-4 py-2 border rounded-lg mb-4 text-black"
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

            {selectedRegion && (
              <>
                <h3 className="text-lg font-semibold mt-4 text-black">
                  Schools in Selected Region
                </h3>
                {loadingSchools ? (
                  <p>Loading...</p>
                ) : (
                  <SchoolsTable schools={schools} />
                )}
              </>
            )}

            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setIsSchoolModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* College Modal */}
      {isCollegeModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white text-black w-[90%] md:w-[60%] max-h-[80vh] overflow-y-auto p-6 rounded-lg relative shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600"
              onClick={() => setIsCollegeModalOpen(false)}
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-center text-black">
              Senior Colleges
            </h3>

            {loadingColleges ? (
              <p className="text-center">Loading...</p>
            ) : (
              <ul className="text-left space-y-3">
                {colleges.map((college) => (
                  <li
                    key={college.id}
                    className="border-b pb-2 flex justify-between items-center text-black"
                  >
                    <span className="font-medium">{college.name}</span>
                    {college.website ? (
                      <button
                        onClick={() => window.open(college.website, '_blank')}
                        className="ml-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                      >
                        View
                      </button>
                    ) : (
                      <span className="text-gray-500 ml-2">No website available</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutRayat;
