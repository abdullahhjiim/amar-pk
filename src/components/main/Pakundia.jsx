"use client";
import { englishToBanglaDigits } from "@/helpers/utility";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiDetail } from "react-icons/bi";
import pakundia_pk from "../../../src/assets/img/pk_image/pakundia_pk.png";
import Card from "../common/Card";

const Pakundia = () => {
  const router = useRouter();
  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <section className="our_purpose_section">
      <Card>
        <div className="px-8 py-16 flex justify-between items-center gap-32">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            className="w-full"
          >
            <Image src={pakundia_pk} alt="image" height={500} width={500} />
          </motion.div>
          <div className="w-full">
            <motion.h1
              initial={{ y: -100 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              className="text-5xl mb-4 font-semibold"
            >
              পাকুন্দিয়া{" "}
              <span className="text-blue-500">
                {" "}
                {englishToBanglaDigits(2326)},
              </span>
            </motion.h1>
            <motion.p
              initial={{ x: 100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              className="mb-8"
            >
              পাকুন্দিয়ার দিগন্ত বিস্তৃত সবুজের সমারোহ সম্পর্কে বিস্তারিত তত্ত্ব
              সবার জানা প্রয়োজন,নদ-নদী,পাক-পাখালির সমারোহে বিমোহিত
              পাকুন্দিয়া,ইতিহাস ঐতিহ্য নিয়ে ভরপুর সুন্দর এ ভূমি।এটি বাংলাদেশের
              ঢাকা বিভাগের কিশোরগঞ্জ জেলার অন্তর্গত একটি উপজেলা।এর আয়তন ১৮০.৫২
              বর্গকিলোমিটার (৬৯.৭০)বর্গমাইল। এটি ১৯২২ সালে একটি থানা হিসেবে গঠিত
              হয়।১৯৮৩ সালের সেপ্টেম্বর মাসের ১৪ তারিখে উপজেলায় রুপান্তরিত হয়।
            </motion.p>
            <motion.button
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              className="primary-btn"
              onClick={() => handleClick("/main/pakundia")}
            >
              <BiDetail className="w-6 h-6 mr-3" />
              পাকুন্দিয়া
            </motion.button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Pakundia;
