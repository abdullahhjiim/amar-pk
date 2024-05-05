"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHospitalAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import health_pk from "../../../src/assets/img/pk_image/health_pk.png";
import Card from "../common/Card";

const Health = () => {
  const router = useRouter();
  const handleClick = (url) => {
    router.push(url);
  };

  return (
    <section className="our_purpose_section">
      <Card>
        <div className="px-8 py-16 flex justify-between gap-32">
          <div className="w-full">
            <motion.h1
              initial={{ y: -100 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              className="text-5xl mb-4 font-semibold"
            >
              স্বাস্থ্য,
            </motion.h1>
            <motion.p
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              className="mb-8"
            >
              স্বাস্থ্য ই সকল সুখের মূল,সুখী হওয়ার উপায়গুলোর মধ্যে অন্যতম প্রধান
              একটি হল নিজের স্বাস্থ্যের সঠিক খেয়াল রাখা।স্বাস্থ্য ভাল না থাকলে
              কোনোকিছুতেই সুখী হওয়া সম্ভব নয়।আপনি যখন অসুস্থবোধ করেন তখন নিয়মিত
              চেক আপ করুন ডাক্তারের নিয়মিত পরামর্শ নিন।অসুস্থ হয়ে পড়লে সোশাল
              মিডিয়ার সাহায্য নিতে পারেন।তাই পাকুন্দিয়া কখন কোথায় কোন রোগের
              ডাক্তার পাওয়া যায় তা জানা একান্ত জরুরী, আমাদের এই ওয়েবসাইটের
              মাধ্যমে সহজেই তা পাওয়া সম্ভব।
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.button
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                href="#"
                className="primary-btn"
                onClick={() => handleClick("/main/hospitals")}
              >
                <FaHospitalAlt className="w-5 h-5 mr-3" />
                হসপিটাল & ক্লিনিক
              </motion.button>
              <motion.button
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 2 } }}
                href="#"
                className="primary-btn"
                onClick={() => handleClick("/main/doctors")}
              >
                <FaUserDoctor className="w-5 h-5 mr-3" />
                ডাক্তার
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            className="w-full"
          >
            <Image src={health_pk} alt="image" height={500} width={500} />
          </motion.div>
        </div>
      </Card>
    </section>
  );
};

export default Health;
