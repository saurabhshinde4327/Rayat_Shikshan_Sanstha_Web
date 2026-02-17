'use client';

import { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function FeedbackPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = { name, email, message, department };

    try {
      const response = await fetch('/api/submitFeedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        alert('Thank you for your feedback!');
        setName('');
        setEmail('');
        setMessage('');
        setDepartment('');
      } else {
        alert('There was an issue submitting your feedback.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an issue submitting your feedback.');
    }
  };

  const departments = [
    "Establishment",
    "Higher Education",
    "Secondary Education",
    "Junior College",
    "Leagal",
    "Property/Land/Agriculture",
    "Audit",
    "Account",
    "Record",
    "Karmaveer Vidya Prabhodhini",
    "IT",
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />

       <section className="w-full h-[120px] relative">
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
    <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
Feedback Form
    </h3> 

    <nav className="text-sm md:text-base text-gray-600" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-[#7A0726] hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
        </li>
        <li className="flex items-center text-gray-500">
        Feedback Form
        </li>
      </ol>
    </nav>
  </div>
</section>
        

        

        {/* Feedback Form */}
        <div className="flex-grow flex items-center justify-center p-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-t-4 border-[#8A0B36]">
            <h2 className="text-2xl font-extrabold text-center mb-6 text-[#590010]">
              Feedback Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8A0B36]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8A0B36]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8A0B36]"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                >
                  <option value="" disabled>Select your department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8A0B36]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#921740]
                           hover:opacity-90 text-white font-semibold py-2 rounded-lg transition duration-300"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
