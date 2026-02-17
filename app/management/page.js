"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const designationOrder = [
  "अध्यक्ष ",
  "उपाध्यक्ष ",
  "पदाधिकारी ",
  "अधिकारी ",
  "मॅनेजिंग कौन्सिल",
  "विभागीय चेअरमन",
  "विभागीय अधिकारी",
  "सहाय्यक विभागीय अधिकारी",
];

export default function Organization() {
  const [managementData, setManagementData] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/addManagements");
        const data = await res.json();

        const managements = data.managements || [];
        setManagementData(managements);

        let designations = [
          ...new Set(managements.map((m) => m.designation)),
        ];

        designations.sort((a, b) => {
          const indexA = designationOrder.findIndex(
            (d) => d.trim().toLowerCase() === a.trim().toLowerCase()
          );
          const indexB = designationOrder.findIndex(
            (d) => d.trim().toLowerCase() === b.trim().toLowerCase()
          );
          if (indexA === -1 && indexB === -1) return 0;
          if (indexA === -1) return 1;
          if (indexB === -1) return -1;
          return indexA - indexB;
        });

        setTabs(designations);
        if (designations.length > 0) setActiveTab(designations[0]);
      } catch (error) {
        console.error("Error fetching managements:", error);
      }
    };

    fetchData();
  }, []);

  const filteredMembers = managementData.filter(
    (m) => m.designation === activeTab
  );

  return (
    <div className="bg-[#f9f7f2] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="w-full h-[120px] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
             व्यवस्थापन

            </h3>

            <nav className="text-sm text-gray-600">
              <ol className="inline-flex">
                <li>
                  <Link href="/" className="text-[#7A0726] hover:underline">
                    मुख्य पृष्ठ

                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-500">व्यवस्थापन
</li>
              </ol>
            </nav>
          </div>
        </section>

      {/* TABS */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 border-b border-gray-300 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-lg font-semibold border-b-2
                ${
                  activeTab === tab
                    ? "border-[#7A0026] text-[#7A0026]"
                    : "border-transparent text-gray-600 hover:text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ CARDS – FLEX CENTER */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {filteredMembers.map((member, index) => (
            <article
  key={index}
  className="w-[220px] h-[340px]
  bg-white rounded-xl overflow-hidden
  border border-[#e5dcc0]
  shadow-sm hover:shadow-lg
  transition-all duration-300"
>
  {/* IMAGE */}
  <div className="relative w-full h-[230px] bg-[#f3f3f3]">
  <Image
    src={member.file_url}
    alt={member.title}
    fill
    className="object-cover object-top"
  />
</div>


  {/* TEXT */}
  <div
  className="bg-gradient-to-b from-[#8b0028] to-[#5a001b]
             text-white text-center px-3 py-3
             h-[115px] flex flex-col justify-center"
>
  <p className="text-[14.5px] font-semibold leading-[1.4] tracking-wide">
    {member.title}
  </p>

  {member.sub_designation && (
    <p className="text-[12px] text-[#F3D28C] mt-1 leading-[1.3]">
      {member.sub_designation}
    </p>
  )}
</div>

</article>

          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
