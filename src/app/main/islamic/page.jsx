import Accordion from "@/components/common/Accordian";
import React from "react";

const IslamicStudyPage = () => {
  const islamicQuestions = [
    {
      id: 1,
      title: "রমজান কি?",
      content:
        "রমজান হল ইসলামিক লুনার ক্যালেন্ডারের নবম মাস। এটি পৃথিবীর মুসলিমদের জন্য একটি উপবাস, প্রার্থনা, প্রতিফলন এবং সম্প্রদায়ের মাস।",
    },
    {
      id: 2,
      title: "ইসলামের পাঁচটি স্তম্ভ কী?",
      content:
        "ইসলামের পাঁচটি স্তম্ভ হল প্রতিষ্ঠান (ঈমান), প্রার্থনা (সালাত), চারিত্রিক কর্ম (যাকাত), পূর্ববর্তী (রমজানে উপবাস করা) এবং হজ্জ (মক্কা হজ্জ পালন)।",
    },
    {
      id: 3,
      title: "হজের গুরুত্ব কী?",
      content:
        "হজ্জ সালানা ইসলামের পবিত্র শহর মক্কা, সৌদি আরবের প্রত্যাবর্তনমূলক ইসলামিক উপবাস। এটি ইসলামের পাঁচটি স্তম্ভের পরে পবিত্র দ্বারপ্রস্তুতি হিসাবে গণ্য হয়। হজ্জ নবী ইব্রাহিম (আলাইহিসসালাম) এবং তার পরিবারের কর্মকাণ্ড ও বিস্ময়ে",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Full-width Banner */}
      <div className="bg-blue-500 py-4 text-white text-center">
        <h1 className="text-3xl font-semibold">Islamic Study</h1>
      </div>

      <div className="container mx-auto px-4 py-8 flex">
        {/* Content Section */}
        <div className="w-2/3 pr-8">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lacinia sapien ac lacus malesuada... Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est ea laborum illo ipsa nobis
              fugiat libero eveniet. Quam, laudantium quae. Eum, dolores
              incidunt debitis alias, magnam sit placeat optio aut odit magni,
              provident delectus dolorum. Iure sint repellendus molestiae animi
              nemo,
            </p>
          </div>

          {/* Accordion Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 w-full">
            <h2 className="text-xl font-semibold mb-4">Accordion Section</h2>
            {islamicQuestions.map((item, i) => {
              return (
                <Accordion key={i} title={item.title} content={item.content} />
              );
            })}
          </div>
        </div>

        {/* Useful Links */}
        <div className="w-1/3">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul className="list-disc list-inside">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Link 2
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicStudyPage;
