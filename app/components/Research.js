import React from "react";

export default function Research() {
  return (
    <section className="container mx-auto py-12 px-4 text-gray-800">
      {/* ---------------- Header ---------------- */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        संस्थेतील संशोधन
      </h2>

      {/* ---------------- Description ---------------- */}
      <p className="text-lg text-justify mb-10">
        संस्थेचे प्रशासन आणि शिक्षक नेहमीच गुणात्मक तसेच संख्यात्मक बदलांना
        प्रोत्साहन देण्यासाठी सतर्क असतात. विद्यार्थ्यांची गुणवत्ता, शिक्षकांचा
        दर्जा आणि गुणवत्ता सुधारण्यासाठी संस्था वर्षातून दोनदा{" "}
        <span className="font-semibold">‘ट्रॅजेक्टोरी’</span> नावाचे संशोधन
        जर्नल प्रकाशित करते. प्राध्यापक या जर्नलमध्ये तसेच इतर राष्ट्रीय व
        आंतरराष्ट्रीय प्रकाशनांमध्ये संशोधन लेख सक्रियपणे सादर करतात. याशिवाय,
        अनेक शिक्षकांनी पाठ्यपुस्तके व संदर्भ साहित्यामध्ये महत्त्वपूर्ण योगदान
        दिले आहे.
      </p>

      {/* ---------------- Achievements Grid ---------------- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900">
            संशोधन कामगिरी
          </h3>
          <ul className="mt-2 list-disc list-inside">
            <li>
              <strong>२०४</strong> प्रमुख विद्यापीठांनी नियुक्त केलेले संशोधन
              शिक्षक
            </li>
            <li>
              <strong>३११</strong> पीएच.डी. पदवीधारक
            </li>
            <li>
              <strong>८२</strong> संशोधन मार्गदर्शक
            </li>
            <li>
              <strong>२६१</strong> एम.फिल पदवीधारक
            </li>
          </ul>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900">
            परिषद व जर्नल प्रकाशने
          </h3>
          <ul className="mt-2 list-disc list-inside">
            <li>
              <strong>२१७</strong> आंतरराष्ट्रीय परिषदेतील शोधनिबंध सादर
            </li>
            <li>
              <strong>४६१</strong> राष्ट्रीय परिषदेतील शोधनिबंध सादर
            </li>
            <li>
              <strong>१८९</strong> आंतरराष्ट्रीय जर्नल प्रकाशने
            </li>
            <li>
              <strong>१९२</strong> राष्ट्रीय जर्नल प्रकाशने
            </li>
          </ul>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900">
            आंतरराष्ट्रीय संशोधन जर्नल्समध्ये प्रकाशित संशोधन पत्रे
          </h3>
          <ul className="mt-2 list-disc list-inside">
            <li><strong>२०१९–२० :</strong> ३२३</li>
            <li><strong>२०२०–२१ :</strong> २६९</li>
            <li><strong>२०२१–२२ :</strong> ४०७</li>
            <li><strong>२०२२–२३ :</strong> ४५४</li>
            <li><strong>२०२३–२४ :</strong> ४६६</li>
            <li><strong>२०२४–२५ :</strong> ३३६</li>
            <li><strong>एकूण :</strong> २२५५</li>
          </ul>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900">
            राष्ट्रीय संशोधन जर्नल्समध्ये प्रकाशित संशोधन पत्रे
          </h3>
          <ul className="mt-2 list-disc list-inside">
            <li><strong>२०१९–२० :</strong> १७६</li>
            <li><strong>२०२०–२१ :</strong> २०४</li>
            <li><strong>२०२१–२२ :</strong> ३०४</li>
            <li><strong>२०२२–२३ :</strong> ४०८</li>
            <li><strong>२०२३–२४ :</strong> ४६६</li>
            <li><strong>२०२४–२५ :</strong> ४९६</li>
            <li><strong>एकूण :</strong> २०५४</li>
          </ul>
        </div>
      </div>

      {/* ---------------- Research Table ---------------- */}
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
        संशोधन सांख्यिकी
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-900 rounded-lg overflow-hidden">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3 text-left">क्रमांक</th>
              <th className="px-4 py-3 text-left">तपशील</th>
              <th className="px-4 py-3 text-left">संख्या</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3">१</td>
              <td className="px-4 py-3">मान्यताप्राप्त संशोधन केंद्रे</td>
              <td className="px-4 py-3">३३</td>
            </tr>
            <tr>
              <td className="px-4 py-3">२</td>
              <td className="px-4 py-3">
                मान्यताप्राप्त संशोधन शिक्षक (विद्यापीठ)
              </td>
              <td className="px-4 py-3">२०४</td>
            </tr>
            <tr>
              <td className="px-4 py-3">३</td>
              <td className="px-4 py-3">पीएच.डी. मार्गदर्शक</td>
              <td className="px-4 py-3">८२</td>
            </tr>
            <tr>
              <td className="px-4 py-3">४</td>
              <td className="px-4 py-3">पीएच.डी. प्रदान केलेले विद्यार्थी</td>
              <td className="px-4 py-3">३११</td>
            </tr>
            <tr>
              <td className="px-4 py-3">५</td>
              <td className="px-4 py-3">एम.फिल पदवीधारक</td>
              <td className="px-4 py-3">२६१</td>
            </tr>
            <tr>
              <td className="px-4 py-3">६</td>
              <td className="px-4 py-3">
                प्राध्यापकांनी प्रकाशित केलेली पुस्तके
              </td>
              <td className="px-4 py-3">८९</td>
            </tr>
            <tr>
              <td className="px-4 py-3">७</td>
              <td className="px-4 py-3">
                संशोधन प्रकल्प पूर्ण (किरकोळ + प्रमुख)
              </td>
              <td className="px-4 py-3">१३६</td>
            </tr>
            <tr>
              <td className="px-4 py-3">८</td>
              <td className="px-4 py-3">
                परिषद शोधनिबंध सादर (आंतरराष्ट्रीय)
              </td>
              <td className="px-4 py-3">२१७</td>
            </tr>
            <tr>
              <td className="px-4 py-3">९</td>
              <td className="px-4 py-3">
                परिषद शोधनिबंध सादर (राष्ट्रीय)
              </td>
              <td className="px-4 py-3">४६१</td>
            </tr>
            <tr>
              <td className="px-4 py-3">१०</td>
              <td className="px-4 py-3">
                जर्नल प्रकाशने (आंतरराष्ट्रीय)
              </td>
              <td className="px-4 py-3">१८९</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
