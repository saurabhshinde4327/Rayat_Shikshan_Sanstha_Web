import Footer from "../components/Footer";
import Link from "next/link";
import Header from "../components/Header";

const quickLinks = [
  // {
  //   name: "कर्मवीर विद्याप्रबोधिनी",
  //   url: "https://maharashtra.gov.in/",
  // },
  {
    name: "एमएससीईआरटी",
    url: "https://www.maa.ac.in/",
  },
  {
    name: "एनसीईआरटी",
    url: "https://ncert.nic.in/",
  },
  {
    name: "रयत ग्रंथालय नेटवर्क (कोहा)",
    url: "https://opac.rayatlibrarynetwork.org/",
  },
  {
    name: "शाखा माहिती प्रणाली",
    url: "http://115.124.97.204/RAYATSATARA/pgeMain.aspx",
  },
];

export default function QuickLinks() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      <section className="w-full h-[120px] relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#7A0726] text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            द्रुत दुवे
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
                द्रुत दुवे
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Links */}
      <div className="container mx-auto px-4 py-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickLinks.map((link, index) => (
            <li
              key={index}
              className="bg-white shadow-lg p-4 rounded-lg hover:bg-yellow-100 transition"
            >
              <Link
                href={link.url}
                target="_blank"
                className="text-blue-600 font-bold hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
