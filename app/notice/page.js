import Footer from "../components/Footer";
import Link from "next/link";
import Header from "../components/Header";

const noticePdfs = [
  {
    sr: 1,
    title: "जाहीर नोटीस",
    pdf: "/pdf/Advt.pdf",
  },
  {
    sr: 2,
    title: "दि.१३/०९/२०२१ रोजी झालेल्या Consent Terms",
    pdf: "/pdf/Consent Terms.pdf",
  },
  {
    sr: 3,
    title: "दि.१३/०९/२०२१ रोजी मा.उच्च न्यायालयाचे आदेश",
    pdf: "/pdf/Consent Terms and Court Order_13.09.2021.pdf",
  },
  {
    sr: 4,
    title: "दि.०४/१२/२०२५ रोजीचे मा.उच्च न्यायालयाचे आदेश",
    pdf: "/pdf/hightourt.pdf",
  },
  {
    sr: 5,
    title:
      "दि.२२/१२/२०२५ रोजीचे माजी न्यायमूर्ती श्री. राजेश केतकर साहेब यांचे बैठकीतील आदेश",
    pdf: "/pdf/22.12.2025 - MoM - Smt Jayashree Shivaji Jakate vs. SoM.pdf",
  },
  {
    sr: 6,
    title: "सेवाज्येष्ठता यादी",
    pdf: "/pdf/combined Senioritly list 1626.pdf",
  },
];

export default function QuickLinks() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            जाहीर नोटीस
          </h3>

          <nav className="text-sm md:text-base text-gray-600">
            <ol className="list-none inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-[#7A0726] hover:underline">
                  मुख्य पृष्ठ
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-500">जाहीर नोटीस</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Notice Text */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-50 border-l-4 border-[#7A0726] p-6 rounded-lg shadow">
          <p className="text-gray-800 leading-relaxed text-justify">
            याचिका कर.१६७७५/२०२३ मधील दि.०४/१२/२०२५ रोजीचे मा.उच्च न्यायालयाचे
            आदेश व दि.२२/१२/२०२५ रोजीचे मुंबई उच्च न्यायालयाचे माजी न्यायमूर्ती
            श्री. राजेश केतकर साहेब यांचे बैठकीतील निर्देशानुसार प्रस्तुत जाहीर
            नोटीस देण्यात येत आहे.
          </p>
        </div>

        {/* PDF List */}
        <div className="mt-8">
          {/* <h4 className="text-2xl font-bold text-[#7A0726] mb-4">
            संबंधित कागदपत्रे (PDF)
          </h4> */}

          <ul className="space-y-4">
            {noticePdfs.map((item) => (
              <li
                key={item.sr}
                className="flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow-md p-4 rounded-lg hover:bg-yellow-100 transition"
              >
                <span className="font-semibold text-gray-800">
                  {item.sr}. {item.title}
                </span>

                <Link
                  href={item.pdf}
                  target="_blank"
                  className="mt-2 md:mt-0 text-blue-600 font-bold hover:underline"
                >
                  PDF पाहा / Download
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
