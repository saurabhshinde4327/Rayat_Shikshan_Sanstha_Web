'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Header />
<section className="w-full h-[120px] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold uppercase">
               Contact
              </h3>

              <nav className="text-sm text-gray-600">
                <ol className="inline-flex">
                  <li>
                    <Link href="/" className="text-[#7A0726] hover:underline">
                      Home
                    </Link>
                    <span className="mx-2">/</span>
                  </li>
                  <li className="text-gray-500">
                  Contact
                  </li>
                </ol>
              </nav>
            </div>
          </section>

      {/* ===== TOP BAR (IMAGE STYLE) ===== */}
      

      {/* ===== CONTENT SECTION ===== */}
      <motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="w-full bg-[#F7F7F7] py-8 font-['Poppins']"
>
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-[18px] md:text-[19px] text-gray-800">

    {/* ===== HEAD OFFICE ===== */}
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-[22px] md:text-[24px] font-semibold text-[#7A0019] mb-5">
        Head Office
      </h2>

      <div className="space-y-4 leading-relaxed">
        <p className="flex gap-3">
          <MapPin size={22} />
          <span>
            Rayat Shikshan Sanstha, Satara <br />
            Karmaveer Samadhi Parisar, <br />
            Rajpath Road, Satara
          </span>
        </p>

        <p className="flex gap-3">
          <Phone size={20} />
          <span>
            (02162) 234566, 233857, 232444, <br />
            228566, 234857
          </span>
        </p>

        <p className="flex gap-3 text-blue-600 font-medium">
          <Mail size={20} />
          secretary@rayatshikshan.edu
        </p>
      </div>
    </div>

    {/* ===== REGIONAL OFFICES ===== */}
    <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-[22px] md:text-[24px] font-semibold text-[#7A0019] mb-6">
        Regional Offices
      </h2>

      <div className="space-y-7 leading-relaxed">
        <div>
          <h3 className="font-bold text-[18px] md:text-[19px]">
            Central Region
          </h3>
          <p>
            Administrative Building, <br />
            3rd Floor, Satara
          </p>
          <p>Phone: (02162) 234279</p>
          <p className="text-blue-600 font-medium">
            inspector1.central@gmail.com
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[18px] md:text-[19px]">
            Southern Region
          </h3>
          <p>Sangli</p>
          <p>
            Phone: (0233) 2330992 <br />
            Fax: 2333376
          </p>
          <p className="text-blue-600 font-medium">
            southern@rayatshikshan.edu
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[18px] md:text-[19px]">
            Northern Region
          </h3>
          <p>Ahmednagar</p>
          <p>
            Phone: (0241) 2323236 <br />
            Fax: 2328218
          </p>
          <p className="text-blue-600 font-medium">
            northern@rayatshikshan.edu
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[18px] md:text-[19px]">
            Western Region
          </h3>
          <p>Aundhgaon, Pune</p>
          <p>
            Phone: (020) 25888703 <br />
            Fax: 25890866
          </p>
          <p className="text-blue-600 font-medium">
            rayatwest@gmail.com
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[18px] md:text-[19px]">
            Raigad Region
          </h3>
          <p>Kamothe, Panvel</p>
          <p className="text-blue-600 font-medium">
            raigad@rayatshikshan.edu
          </p>
        </div>
      </div>
    </div>

  </div>
</motion.section>


      <Footer />
    </>
  );
}
