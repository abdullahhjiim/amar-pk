"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BsMicrosoftTeams } from "react-icons/bs";
import antara from "../../assets/img/antara.jpeg";
import weyou from "../../assets/img/weyou.jpeg";
import you from "../../assets/img/you.webp";
import Card from "../common/Card";
import ImageCircle from "../common/ImageCircle";

const We = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/main/joinus");
  };
  return (
    <section className="our_purpose_section">
      <Card>
        <div className="p-8 flex justify-between gap-32">
          <div className="w-full">
            <motion.h1
              initial={{ y: -80 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              className="text-5xl mb-4 font-semibold"
            >
              আমরা,
            </motion.h1>
            <motion.p
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              className="mb-4"
            >
              যেদিন আপনি পৃথিবীতে এসেছিলেন সেদিন আপনি একাই কেঁদেছিলেন । আর আপনার
              আগমনে সবাই হেসেছিল আনন্দে 🥳। ইচ্ছা এবং শক্তি দুটি মিলেই
              ইচ্ছাশক্তি । এই ইচ্ছাশক্তি যদি প্রবল হয় এবং উদ্দেশ্য হয় শুভ কোন
              প্রতিবন্ধকতাই তাকে প্রতিহত করতে পারে না , প্রতিনিয়ত চেষ্টায়
              প্রতিষ্ঠিত হয় প্রতিটি ইচ্ছে । এই ইচ্ছেশক্তির দ্বারা জগতে এমন কিছু
              কাজ করে যান, যাতে আপনি হাসতে হাসতে মরতে পারেন এবং আপনার মরণে সবাই
              শোকে আকুল হয়ে কাঁদে ।
            </motion.p>
            <motion.p
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: 1.5 } }}
              className="mb-8"
            >
              আপনি চাইলে আমাদের সাথে যুক্ত হইতে পারেন !!!{" "}
            </motion.p>
            <motion.button
              initial={{ x: 100 }}
              whileInView={{ x: 0, transition: { duration: 2 } }}
              className="primary-btn"
              onClick={handleClick}
            >
              <BsMicrosoftTeams className="w-5 h-5 mr-3" />
              আমাদের সাথে যুক্ত হোন
            </motion.button>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-7 gap-4">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19,
              ].map((item, index) => {
                return (
                  <motion.div
                    initial={{ x: 100 }}
                    whileInView={{
                      x: 0,
                      transition: { duration: 0.3 * (index + 1) },
                    }}
                    className=""
                    key={item}
                  >
                    <ImageCircle imageUrl={antara} />
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ x: 100 }}
                whileInView={{
                  x: 0,
                  transition: { duration: 0.3 * (20 + 1) },
                }}
                className=""
                key={"you"}
              >
                <ImageCircle imageUrl={you} />
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                whileInView={{
                  x: 0,
                  transition: { duration: 0.3 * (21 + 1) },
                }}
                className=""
                key={"you"}
              >
                <ImageCircle imageUrl={weyou} />
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default We;
