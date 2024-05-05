import { englishToBanglaDigits } from "@/helpers/utility";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-2">
      <div className="container mx-auto px-4 flex justify-between items-center h-12">
        <p className="text-sm font-semibold">
          &copy; {englishToBanglaDigits(new Date().getFullYear())} &nbsp; আমার
          পাকুন্দিয়া । আসুন সবাই মিলে একসাথে ভাল থাকি ।।
        </p>

        <div className="flex space-x-6">
          <a href="#" className="rounded-full ring-1 ring-blue-700 p-1">
            <FaFacebookF className="w-4 h-4 text-blue-700" />
          </a>
          <a href="#" className="rounded-full ring-1 ring-red-500 p-1">
            <FaYoutube className="w-4 h-4 text-red-500" />
          </a>
          <a href="#" className="rounded-full ring-1 ring-blue-400 p-1">
            <FaLinkedinIn className="w-4 h-4 text-blue-400" />
          </a>
          <a href="#" className="rounded-full ring-1 ring-blue-900 p-1">
            <FaTwitter className="w-4 h-4 text-blue-900" />
          </a>
          <a href="#" className="rounded-full ring-1 ring-pink-700 p-1">
            <FaInstagram className="w-4 h-4 text-pink-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
