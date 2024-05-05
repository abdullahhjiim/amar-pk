/* eslint-disable jsx-a11y/alt-text */

import AQIComponent from "../components/weather/AQIComponent";
import LocationInfo from "../components/weather/LocationInfo";
import TemperatureComponent from "../components/weather/TemperatureComponent";
import WeatherComponent from "../components/weather/WeatherComponent";
import WindComponent from "../components/weather/WindComponent";

const lat = process.env.PK_LAT;
const lon = process.env.PK_LON;

export default function Home() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/village_image.webp')` }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center gap-4 mt-32">
          {/* First row */}
          <div className="flex justify-center items-center bg-white rounded-lg shadow-md">
            <LocationInfo lat={lat} lon={lon} />
          </div>
          <div className="flex justify-center items-center bg-white rounded-lg shadow-md">
            <AQIComponent lat={lat} lon={lon} />
          </div>          
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center bg-white rounded-lg shadow-md mt-4">
            <WeatherComponent lat={lat} lon={lon} />
            </div>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-md mt-4">
              <WindComponent lat={lat} lon={lon} />
            </div>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-md mt-4">
              <TemperatureComponent lat={lat} lon={lon} />
            </div>
          </div>
      </div>
    </div>
  );
}
