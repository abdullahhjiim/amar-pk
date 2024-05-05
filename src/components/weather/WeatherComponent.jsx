import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";

const WeatherComponent = async ({ lat, lon }) => {
  const { main, description } = await getWeatherData(lat, lon);

  return (
    <div className="p-8">
      <h6 className="text-black font-bold text-2xl">Current Weather</h6>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Image
          className="max-w-20"
          src="/icon_rain.png"
          width={200}
          height={200}
          alt="rain icon"
        />
        <h3 className="text-lg font-semibold">{main}</h3>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
};

export default WeatherComponent;
