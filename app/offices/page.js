"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AdministrativeOffices() {
  const offices = [
    {
      id: 1,
      office: " मध्यवर्ती कार्यालय रयत शिक्षण संस्था सातारा",
      region: "हेड ऑफिस",
      address: "कर्मवीर समाधी परिसर, राजपथ रोड, सातारा",
      phone: "(०२१६२)२३४५६६",
      fax: "-",
      email: "-",
    },
    {
      id: 2,
      office: "विभागीय कार्यालय, मध्य विभाग रयत शिक्षण संस्था,",
      region: "मध्य विभाग",
      address:
        "विभागीय कार्यालय, मध्य विभाग रयत शिक्षण संस्था, प्रशासकीय इमारत, तिसरा मजला, सातारा",
      phone: "(०२१६२)२३४२७९",
      fax: "-",
      email: "inspector1.central@gmail.com",
    },
    {
      id: 3,
      office: "विभागीय कार्यालय, दक्षिण विभाग",
      region: "दक्षिण विभाग",
      address: "विभागीय कार्यालय, दक्षिण विभाग सांगली",
      phone: "(०२३३)२३३०९९२",
      fax: "२३३३३७६",
      email: "southern@rayatshikshan.edu",
    },
    {
      id: 4,
      office: "विभागीय कार्यालय, उत्तर विभाग",
      region: "उत्तर विभाग",
      address: "विभागीय कार्यालय, उत्तर विभाग अहमदनगर",
      phone: "(०२४१)२३२३२३६",
      fax: "२३२८२१८",
      email: "northern@rayatshikshan.edu",
    },
    {
      id: 5,
      office: "विभागीय कार्यालय, पश्चिम विभाग",
      region: "पश्चिम विभाग",
      address: "विभागीय कार्यालय, पश्चिम विभाग औंधगाव",
      phone: "(०२०)२५८८८७०३",
      fax: "२५८९०८६६",
      email: "rayatwest@gmail.com",
    },
    {
      id: 6,
      office: "विभागीय कार्यालय, रायगड विभाग",
      region: "रायगड विभाग",
      address: "विभागीय कार्यालय, रायगड विभाग कामोठे, पनवेल",
      phone: "-",
      fax: "-",
      email: "raigad@rayatshikshan.edu",
    },
    {
      id: 7,
      office: "ऑडिट विभाग",
      region: "मध्य विभाग",
      address:
        "रयत शिक्षण संस्था, प्रशासकीय इमारत, तिसरा मजला, सातारा",
      phone: "(०२१६२)२३४२७९",
      fax: "-",
      email: "audit@rayatshikshan.edu",
    },
  ];

  return (
    <>
      {/* ===== FORCE LIGHT THEME ===== */}
      <div className="bg-white text-gray-800 dark:bg-white dark:text-gray-800 min-h-screen">

        <Header />

        {/* PAGE HEADER */}
        <section className="w-full h-[120px] relative bg-[#f6eee0]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
              प्रशासकीय कार्यालये
            </h3>

            <nav className="text-sm text-gray-600">
              <ol className="inline-flex">
                <li>
                  <Link href="/" className="text-[#7A0726] hover:underline">
                    मुख्य पृष्ठ
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-500">प्रशासकीय कार्यालये</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* TABLE SECTION */}
        <div className="bg-white px-6 py-6 flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="bg-white shadow-lg rounded-xl overflow-auto border border-gray-300">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead className="bg-[#F5E6CA]">
                  <tr>
                    <th className="border border-black px-3 py-2">अ.क्र.</th>
                    <th className="border border-black px-3 py-2">कार्यालयाचे नाव</th>
                    <th className="border border-black px-3 py-2">विभाग</th>
                    <th className="border border-black px-3 py-2">पत्ता</th>
                    <th className="border border-black px-3 py-2">फोन</th>
                    <th className="border border-black px-3 py-2">फॅक्स</th>
                    <th className="border border-black px-3 py-2">ईमेल</th>
                  </tr>
                </thead>

                <tbody>
                  {offices.map((o, i) => (
                    <tr
                      key={o.id}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="border border-black px-3 py-2 text-center">
                        {o.id}
                      </td>
                      <td className="border border-black px-3 py-2 font-medium">
                        {o.office}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {o.region}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {o.address}
                      </td>
                      <td className="border border-black px-3 py-2 text-center">
                        {o.phone}
                      </td>
                      <td className="border border-black px-3 py-2 text-center">
                        {o.fax}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {o.email !== "-" ? (
                          <a
                            href={`mailto:${o.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {o.email}
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
