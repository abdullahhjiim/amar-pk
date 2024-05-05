"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../public/amarpakundia.png";
import SearchCm from "../main/SearchCm";

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/main");
  };
  return (
    <section className="header_section bg-gray-200 sticky top-0">
      <nav className="flex justify-self-center items-center container mx-auto">
        <div
          className="logo w-full flex items-center gap-2 p-4 cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src={logo}
            alt="amar pakundia logo image"
            height={40}
            width={40}
            className="rounded-lg"
          />
          <p className="font-semibold text-sm">
            আমার <br /> পাকুন্দিয়া{" "}
          </p>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <SearchCm />
        </div>
        <div className="menu w-full">
          <ul className="flex items-center justify-end gap-6 font-semibold">
            <li>
              <Link href="/main/news"> সংবাদ পাকুন্দিয়া </Link>
            </li>
            <li>
              <Link href="/main/events"> ইভেন্ট </Link>
            </li>
            <li>
              <Link href="/main/offers"> অফার </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
