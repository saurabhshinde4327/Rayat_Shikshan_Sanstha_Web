"use client";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function History() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Sections */}
      <HeaderSection />
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[100px]">
        <Image
          src="/images/academics-banner.jpg"
          alt="Academics"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg">
            HISTORY
          </h3>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-teal-900 text-white py-3">
        <div className="container mx-auto flex justify-center space-x-2 text-sm">
          <Link href="/" className="flex items-center space-x-1 hover:text-yellow-400">
            <span>🏠</span>
            <span>Home</span>
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-yellow-400">HISTORY</span>
        </div>
      </div>

      {/* Main Content with text left + image right */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Rayat Shikshan Sanstha
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            A premier institution of education like the Rayat Shikshan Sanstha, known and honoured far and wide,
            not only at the national level but at the global level too, needs no introduction. The institution
            itself is regarded as a noble mission, a noble cause, so earnestly and so endearingly pursued by its
            founder-father, Karmaveer Bhaurao Patil, the educator of educators, and his legendary wife,
            Sou. Laxmibai Patil, with her exemplary sacrifices made to turn the mission into a reality.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            The founder of the institution, late Dr. Karamaveer Bhaurao Patil, was a man of the masses who devoted
            all his mind and heart to the cause of their education. He had an incisive understanding of the social
            ills that beset his times and fully realized the dire need of the spread of education.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            Throughout his life he tried to translate this belief into reality. He was the champion of the poor,
            the weak, the dispossessed and left no stone unturned for their upliftment.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            He realised that the social ills could be remedied through the education of the masses alone and laid
            the foundation of the Rayat Shikshan Sanstha by opening a Boarding House at Kale (Tal-Karad,
            Dist-Satara) in 1919. Soon, however, in 1924 he shifted the headquarters of his educational institution
            to Satara.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/karmveer.jpg"
            width={350}
            height={300}
            alt="Karmaveer Bhaurao Patil"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Extra Image Below Content */}
      <div className="container mx-auto px-6 pb-16">
        <div className="flex justify-center">
          <Image
            src="/images/ofc.jpeg"   // 👉 इथे तुझा हव्या त्या image चा path टाक
            width={800}
            height={500}
            alt="Additional Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
