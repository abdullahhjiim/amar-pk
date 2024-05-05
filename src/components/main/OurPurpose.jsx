"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TfiComments } from "react-icons/tfi";
import blood from "../../../src/assets/img/gif/blood.gif";
import business from "../../../src/assets/img/gif/business.gif";
import buy_sell from "../../../src/assets/img/gif/buy_sell.gif";
import education from "../../../src/assets/img/gif/education.gif";
import health from "../../../src/assets/img/gif/health.gif";
import holy_quran from "../../../src/assets/img/gif/holy_quran.gif";
import matrimonial from "../../../src/assets/img/gif/matrimonial.gif";
import news from "../../../src/assets/img/gif/news.gif";
import pakundia_pk from "../../../src/assets/img/gif/pk.gif";
import AnimateModal from "../common/AnimateModal";
import Card from "../common/Card";

const OurPurpose = ({ sectionRef }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (url) => {
    router.push(url);
  };

  return (
    <section ref={sectionRef} className="our_purpose_section" id="our_purpose">
      <Card>
        <div className="px-8 py-16 flex justify-between gap-32 items-center">
          <div className="w-full">
            <motion.h1
              initial={{ y: -100 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              className="text-5xl mb-4 font-semibold"
            >
              আমাদের <span className="text-blue-500"> উদ্দেশ্য,</span>
            </motion.h1>
            <motion.p
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              className="mb-8"
            >
              আল্লাহ যাকে সাহায্য করেন তাকে পরাজিত করার মতো কোনো শক্তি নেই। আর
              আল্লাহ যাকে অপদস্থ করেন তাকে সাহায্য করার কেউ নেই। পবিত্র কোরআনে
              ইরশাদ হয়েছে, ‘আল্লাহ তোমাদের সাহায্য করলে তোমাদের ওপর জয়ী হওয়ার
              কেউ থাকবে না।আল্লাহ যাকে সাহায্য করেন তাকে পরাজিত করার মতো কোনো
              শক্তি নেই। আর আল্লাহ যাকে অপদস্থ করেন তাকে সাহায্য করার কেউ নেই।
              পবিত্র কোরআনে ইরশাদ হয়েছে, ‘আল্লাহ তোমাদের সাহায্য করলে তোমাদের
              ওপর জয়ী হওয়ার কেউ থাকবে না।
            </motion.p>

            <motion.button
              initial={{ y: 80 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              className="primary-btn"
              onClick={() => setIsOpen(true)}
            >
              <TfiComments className="w-5 h-5 mr-3" />
              অভিযোগ & পরামর্শ
            </motion.button>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-3 gap-4 text-sm font-semibold">
              <motion.div
                initial={{ y: -80 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                className="flex shadow-lg rounded-full gap-4 border-2 border-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/pakundia")}
              >
                <Image
                  src={pakundia_pk}
                  alt="pakundia image"
                  height={40}
                  width={40}
                />
                <p>পাকুন্দিয়া তথ্য</p>
              </motion.div>

              <motion.div
                initial={{ y: -60 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                className="flex shadow-lg rounded-full gap-4 border-2 border-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/hospitals")}
              >
                <Image
                  src={health}
                  alt="pakundia image"
                  height={40}
                  width={40}
                />
                <p>স্বাস্থ্য-সেবা পরিচর্যা</p>
              </motion.div>

              <motion.div
                initial={{ y: -40 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                className="flex shadow-lg rounded-full gap-4 border-2 border-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/pakundia")}
              >
                <Image
                  src={education}
                  alt="pakundia image"
                  height={40}
                  width={40}
                />
                <p>আমাদের শিক্ষা </p>
              </motion.div>

              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0, transition: { duration: 1 } }}
                className="flex shadow-lg rounded-full gap-4 border-2 border-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/bloods")}
              >
                <Image
                  src={blood}
                  alt="pakundia image"
                  height={40}
                  width={40}
                />
                <p>রক্তদান জীবন বাঁচান</p>
              </motion.div>

              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0, transition: { duration: 1 } }}
                className="flex shadow-lg rounded-full gap-4 border-2 border-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/business")}
              >
                <Image
                  src={business}
                  alt="pakundia image"
                  height={40}
                  width={40}
                />
                <p> ব্যবসাহিক যোগাযোগ </p>
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0, transition: { duration: 1 } }}
                className="flex shadow-lg rounded-full gap-4 border-2 border-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/online")}
              >
                <Image
                  src={buy_sell}
                  alt="pakundia image"
                  height={40}
                  width={40}
                />
                <p>অনলাইন সেবাসমুহ</p>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                className="flex shadow-lg rounded-full gap-4 border-2 border-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/matrimonial")}
              >
                <Image
                  src={matrimonial}
                  alt="pakundia image"
                  height={40}
                  width={40}
                />
                <p>পাত্র পাত্রী চাই</p>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                className="flex  shadow-lg rounded-full gap-4 border-2 border-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/news")}
              >
                <Image src={news} alt="pakundia image" height={40} width={40} />
                <p> প্রজ্ঞাপন সংবাদ</p>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                className="flex shadow-lg rounded-full gap-4 border-2 border-gray-100  px-4 py-2 cursor-pointer"
                onClick={() => handleClick("/main/islamic")}
              >
                <Image
                  src={holy_quran}
                  alt="pakundia image"
                  height={40}
                  width={40}
                />
                <p>
                  ইসলামিক <br /> ধারণা
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
      <AnimateModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default OurPurpose;
