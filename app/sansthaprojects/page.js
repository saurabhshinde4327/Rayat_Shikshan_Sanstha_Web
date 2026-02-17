"use client";
import { useState } from "react";
import HeaderSection from "../components/HeaderSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const projects = [
  "Artificial Intelligence (AI) Education",
  "School Cluster",
  "Rayat Gurukul Project",
  "Competitive Examination Project",
  "Eklavya Puraskar",
  "Skilling Programme",
  "Psychometric Test",
  "Rayat Vidnyan Project",
  "Inspire Award",
  "School level Science Exhibition",
  "Atal Tinkering",
  "Kumbhoj Training Centre-Workshop",
  "DEEPER, NEET, JEE, MHT-CET Entrance Exam Guidance",
  "IISER WORKSHOP",
  "Computer Education",
  "Scholarship for std 5th & 8th",
  "Quality Enhancement of Education",
  "Parents Meeting",
  "Remedial learning Process",
  "Micro/Macro Analysis of Marks",
  "Student Enrolment Fair (प्रवेशोत्सव)",
  "NMMS Examination",
  "Karmaveer Vidya Prabodhini Examination",
  "Rayat Talent Search",
  "Rayat Olampiyad",
  "Elocution Competition",
  "Quiz Competition",
  "Short Term Courses",
  "Kala Academy",
  "Krida Academy",
  "Pre-recruitment Training",
  "Career Guidance & Counselling Project",
  "Mini Science Centre",
  "FAALI Project (Agriculture Project)",
  "Green Campus Project",
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 15;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderSection />
      <Header />
      <Navbar />

      {/* Projects Section */}
      <section className="container mx-auto my-12 max-w-6xl p-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 uppercase">
            Projects
          </h2>
          <p className="text-gray-600 mt-2">
            A showcase of initiatives by Rayat Shikshan Sanstha
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-teal-500 text-white rounded-full font-bold">
                {indexOfFirstProject + index + 1}
              </div>
              <div className="text-gray-800 font-medium">{project}</div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-300 disabled:text-gray-600"
          >
            Prev
          </button>
          <span className="text-gray-700 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-300 disabled:text-gray-600"
          >
            Next
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
