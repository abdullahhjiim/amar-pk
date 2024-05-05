import Link from "next/link";

const AQIComponent = () => {
  return (
    <div className="px-12 py-8">
      <h6 className="text-2xl font-bold mb-4">পাকুন্দিয়া পরিবার</h6>

      <ul className="flex flex-col gap-2">
        <li className="flex gap-2">
          <div className="">
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
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <Link href="/main" target="_blank">
            আমার পাকুন্দিয়া
          </Link>
        </li>
        <li className="flex gap-2">
          <div className="">
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
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="">PK - Event</div>
        </li>
        <li className="flex gap-2">
          <div className="">
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
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <a href="https://e-b-frontend-pakhitiya.vercel.app" target="_blank">
            টিয়াপাখি
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AQIComponent;
