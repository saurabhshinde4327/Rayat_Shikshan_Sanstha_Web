"use client";

import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

export default function TendersPage() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await fetch("/api/getTenders");
        const data = await res.json();
        setTenders(data.tenders);
      } catch (error) {
        console.error("Error fetching tenders:", error);
      }
    };
    fetchTenders();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Header />


      <section className="w-full h-[120px] relative">
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
    <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
ई-निविदा नोटीस
    </h3> 

    <nav className="text-sm md:text-base text-gray-600" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-[#7A0726] hover:underline">
            मुख्य पृष्ठ
          </Link>
          <span className="mx-2">/</span>
        </li>
        <li className="flex items-center text-gray-500">
         ई-निविदा नोटीस
        </li>
      </ol>
    </nav>
  </div>
</section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          
        </h2>

        <p className="text-lg text-gray-700 text-justify mb-8">
रयत शिक्षण संस्थेच्या शाखा १६ जिल्ह्यांमध्ये पसरलेल्या आहेत, त्यापैकी १५ महाराष्ट्रात
आणि १ कर्नाटकात आहे. संस्थेचे मुख्य कार्यालय सातारा येथे आहे. ०५ विभागीय कार्यालये
०५ वेगवेगळ्या जिल्ह्यांमध्ये आहेत. १. मध्य विभाग, सातारा, २. उत्तर विभाग,
अहिल्यानगर, ३. दक्षिण विभाग, सांगली, ४. पश्चिम विभाग, पुणे, ५. रायगड विभाग,
पनवेल.        </p>

        {/* ONLINE TENDERS LINK */}
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          ई-निविदा संकेतस्थळ -{" "}
          <a
            href="https://edumart.sets.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
           https://edumart.sets.co.in
          </a>
        </h3>

        <p className="text-lg text-gray-700 text-justify">
संस्थेच्या शाखांना आवश्यक असलेले साहित्य निविदा पद्धतीने खरेदी केले जाते आणि दर
कराराद्वारे डीलर्सची निवड केली जाते. यासाठी, ऑनलाइन ई-निविदा प्रक्रिया राबविली जाते.
संस्थेचे सर्व ई-निविदा वेळोवेळी           <a
            href="https://edumart.sets.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
           https://edumart.sets.co.in
          </a>
          <strong>&nbsp; या संकेतस्थळावर प्रकाशित केले
जातात.</strong>.
        </p>
        <br />

        {/* OFFLINE TENDERS TABLE */}
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">इतर निविदा (ऑफलाईन)</h3>
        <p>
५ लाखांपेक्षा कमी खर्च असलेल्या सर्व निविदा वर्तमानपत्रात जाहिरात देऊन ऑफलाइन
प्रकाशित केल्या जातात. अशा सर्व निविदा संस्थेच्या संकेतस्थळावर डाउनलोड करण्यासाठी
खाली दिलेल्या आहेत.        </p>
        <br />
        <div className="overflow-x-auto shadow border border-gray-300 rounded-lg mb-12">
          <table className="w-full table-auto text-left text-gray-800">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 border">अ. क्र.</th>
                <th className="px-4 py-3 border">निविदेचे नाव</th>
                <th className="px-4 py-3 border">दिनांक</th>
                <th className="px-4 py-3 border">निविदा दस्तऐवज पहा</th>
              </tr>
            </thead>
            <tbody>
              {tenders.length > 0 ? (
                tenders.map((tender, index) => (
                  <tr key={tender.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{tender.title}</td>
                    <td className="px-4 py-2 border">
                      {new Date(tender.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-2 border">
                      <div className="flex space-x-2">
                        <Link
                          href={`/viewTender/${tender.id}`}
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          तपशील पहा
                        </Link>
                        <a
                          href={tender.file_path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline hover:text-green-800"
                        >
                          डाउनलोड करा
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-6">
                    No tenders available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}

