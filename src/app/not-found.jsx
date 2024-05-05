"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBackward } from "react-icons/fa";
import notFound from "../assets/img/not-found.webp";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Image
          src={notFound}
          alt="404 Not Found"
          className="mx-auto mb-8"
          height={200}
          width={200}
        />
        <h1 className="text-3xl font-semibold mb-4">
          {" "}
          পেইজ টি খুঁজে পাওয়া যাচ্ছে না !!{" "}
        </h1>
        <p className="text-gray-800 mb-2">
          আমার অনেক বেশি ই সরি যে, আপনি যেই পেইজটি খুঁজতে চাচ্ছেন সেইটি পাওয়া
          যাচ্ছে না, দয়া করে আবার চেষ্টা করবেন কি ??
        </p>
        <p className="text-sm font-semibold mb-4">
          অনেক ধন্যবাদ স্যার, আপনার দিন টি শুভ হোক ।{" "}
        </p>
        <div className="w-full flex justify-center">
          <button className="primary-btn" onClick={() => router.push("/main")}>
            <FaBackward className="w-5 h-5 mr-3 " />
            হোম এ ফিরে যান
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
