"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import volunteer_pk from "../../../src/assets/img/pk_image/volunteer_pk.png";
import Card from "../common/Card";

const Volunteer = () => {
  return (
    <section className="our_purpose_section">
      <Card>
        <div className="p-8 flex justify-between gap-32">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            className="w-full"
          >
            <Image src={volunteer_pk} alt="image" height={500} width={500} />
          </motion.div>
          <div className="w-full">
            <motion.h2
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              className="text-5xl mb-4 font-semibold"
            >
              সেচ্ছাসেবিতা,
            </motion.h2>
            <motion.p
              initial={{ x: 100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              className="mb-8"
            >
              মানুষের পাশে মানুষ দাঁড়াবে, <br /> মানুষের দিকে দুহাত বাড়াবে …
              <br />
              শুধু নিজের জন্য বেঁচে থাকাই বেঁচে থাকা নয়, অসহায় মানুষের চোখের
              পানি মুছে দিয়ে বেঁচে থাকার নামই জীবন। আপনি সবাইকে সাহায্য করতে
              পারবেন না, তবে কিছু মানুষকে তো পারবেনই । আর একজন দুজনকে সাহায্য
              করলে হয়তো দুনিয়া বদলে যাবে না, তবে মনে রাখবেন, ঐ দু-একজনের জীবন
              বদলে যেতে পারে । আর এভাবেই কিছু কিছু করেই সবাইকেই সাহায্য করা হয়ে
              যাবে ।
            </motion.p>
            {/* <Link
              href="#"
              className="px-8 py-2 bg-gradient-to-tr from-red-500 to-pink-500 rounded-md text-white"
            >
              হসপিটাল & ক্লিনিক
            </Link>
            <Link
              href="#"
              className="ml-4 px-8 py-2 bg-gradient-to-tr from-red-500 to-pink-500 rounded-md text-white"
            >
              ডাক্তার
            </Link> */}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Volunteer;
