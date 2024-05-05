"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUniversity } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import education from "../../../src/assets/img/pk_image/education_pk.png";
import Card from "../common/Card";

const Education = () => {
  const router = useRouter();
  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <section className="our_purpose_section">
      <Card>
        <div className="px-8 py-16 flex justify-between gap-32">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            className="w-full"
          >
            <Image src={education} alt="image" height={500} width={500} />
          </motion.div>
          <div className="w-full">
            <motion.h1
              initial={{ y: -100 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              className="text-5xl mb-4 font-semibold"
            >
              শিক্ষা,
            </motion.h1>
            <motion.p
              initial={{ x: 100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              className="mb-8"
            >
              শিক্ষা প্রক্রিয়ায় কোন ব্যাক্তির অন্তর্নিহিত গুণাবলির পূর্ণ বিকাশের
              জন্য উৎসাহ দেওয়া হয় এবং সমাজের একজন উৎপাদনশীল সদস্য হিসেবে
              প্রতিষ্ঠা লাভের জন্য যে সকল দক্ষতা প্রয়োজন সেগুলো অর্জনে সহায়তা
              করা হয়। তাই বেরিয়ে আসুন সীমিত ভাবনা থেকে পৃথিবী অপেক্ষা করছে আপনার
              আলোয় আলোকিত হতে।শিক্ষা ক্ষেত্রে আমাদের জীবনে যাদের অবদান রয়েছে
              তাদের সম্পর্কে সকলে জানা প্রয়োজন।
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.button
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                href="#"
                className="primary-btn"
                onClick={() => handleClick("/main/institutes")}
              >
                <FaUniversity className="h-5 w-5 mr-3" />
                স্কুল & কলেজ
              </motion.button>
              <motion.button
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 2 } }}
                href="#"
                className="primary-btn"
                onClick={() => handleClick("/main/teachers")}
              >
                <GiTeacher className="w-5 h-5 mr-3" />
                শিক্ষক
              </motion.button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Education;
