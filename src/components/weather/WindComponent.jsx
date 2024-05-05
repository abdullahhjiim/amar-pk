import { getWindData } from "@/lib/weather-info";
import Image from "next/image";

const WindComponent = async ({ lat, lon }) => {
  const { speed, deg } = await getWindData(lat, lon);

  return (
    <div className="p-8">
      <h6 className="text-2xl font-bold text-black">Wind</h6>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          className="max-w-20"
          src="/icon_wind.png"
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 className="text-lg font-bold">{speed} meter/sec</h3>
        <span className="text-sm">{deg} degrees</span>
      </div>
    </div>
  );
};

export default WindComponent;
