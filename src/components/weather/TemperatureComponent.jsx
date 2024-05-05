import { getTemperatureData } from "@/lib/weather-info";
import Image from "next/image";

const TemperatureComponent = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTemperatureData(lat, lon);

  return (
    <div className="p-8">
      <h6 className="text-2xl text-black font-bold">Current Temperature</h6>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Image
          className="max-w-20"
          src="/icon_tempareture.png"
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 className="text-xl font-bold">{temp}°C</h3>

        <span className="text-sm">Feels Like {feels_like}°C</span>
      </div>
    </div>
  );
};

export default TemperatureComponent;
