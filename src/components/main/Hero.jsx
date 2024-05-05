import Image from "next/image";
import { PiListStarThin } from "react-icons/pi";
import heroimage from "../../../public/hero.webp";

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero_section">
      <div className="container mx-auto flex justify-center items-center gap-4 p-16">
        <div className="w-full flex justify-end">
          <Image src={heroimage} alt="Amar pakundia hero image" height={400} />
        </div>
        <div className="w-full flex flex-start">
          <div className="content">
            <h1 className="text-5xl mb-6">
              আমার পাকুন্দিয়াতে <br /> স্বাগতম,
            </h1>
            <p className="text-xl font-semibold mb-4">
              নিজে ভাল থাকি, অন্যকে ভাল রাখি সবাই মিলে <br /> একসাথে ভাল থাকি ।
            </p>
            <p className="mb-8">
              আপনার দিনটি শুভ হোক,
              <span className="font-semibold text-red-700 ml-2">
                চলুন শুরু করা যাক ?
              </span>
            </p>
            {/* <Link
              href="#"
              className="px-8 py-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-md text-white"
            >
              <PiListStarThin /> শুরু করি
            </Link> */}

            <button
              href="#our_purpose"
              className="primary-btn"
              onClick={scrollToSection}
            >
              <PiListStarThin className="w-6 h-6 mr-2" />
              শুরু করি
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
