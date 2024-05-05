"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiDonateBlood } from "react-icons/bi";
import blood_pk from "../../../src/assets/img/pk_image/blood_pk.png";
import Card from "../common/Card";

const Blood = () => {
  const router = useRouter();
  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <section className="our_purpose_section">
      <Card>
        <div className="px-8 py-16 flex justify-between items-center gap-32">
          <div className="w-full">
            <motion.h1
              initial={{ y: -100 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              className="text-5xl mb-4 font-semibold"
            >
              রক্তদান,
            </motion.h1>
            <motion.p
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              className="mb-8"
            >
              স্বেচ্ছায় করি রক্তদান <br /> হাসবে রোগী বাঁচবে প্রাণ.. <br />
              চরম পরিস্থিতির সময় এক ব্যাগ রক্ত কারও হাতে তুলে দেওয়ার পর সে
              মানুষটির চোখে মুখে যে কৃতজ্ঞতা আর পরিতৃপ্তির ছাপ দেখা যায়, তা
              অকৃত্রিম। সামান্য পরিমাণে রক্তদানের মাধ্যমে একটি জীবন বাঁচানো
              নিঃসন্দেহে মহৎ কাজ। নিয়মিত রক্তদান করা একটি ভালো অভ্যাস। তাই
              স্বেচ্ছায় রক্তদান করা বা রক্তদানে এগিয়ে আসা আমাদের সকলের মহান
              পবিত্র কর্তব্য।
            </motion.p>
            <div className="flex gap-2 items-center">
              <motion.button
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                className="primary-btn"
                onClick={() => handleClick("/main/bloods")}
              >
                <BiDonateBlood className="h-5 w-5 mr-3" />
                রক্ত খুঁজুন
              </motion.button>
              <motion.button
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 2 } }}
                className="primary-btn"
                onClick={() => handleClick("/main/doners")}
              >
                <BiDonateBlood className="h-5 w-5 mr-3" />
                রক্ত দাতার তালিকা
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            className="w-full"
          >
            <Image src={blood_pk} alt="image" height={500} width={500} />
          </motion.div>
        </div>
      </Card>
    </section>
  );
};

export default Blood;
