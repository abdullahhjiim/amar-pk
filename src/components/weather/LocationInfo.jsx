import { getLocationData } from "@/lib/location-info";

const LocationInfo = async ({ lat, lon }) => {
  const locationInfo = await getLocationData(lat, lon);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-black lg:text-4xl 2xl:text-[40px]">
        {locationInfo?.city}
      </h1>
      <p className="text-lg text-[#C4C4C4] lg:text-xl">
        {locationInfo?.principalSubdivision} | {locationInfo?.countryName}
      </p>
      <div className="flex items-center gap-2 text-xs text-red-500 font-semibold lg:text-sm">
        <span>{new Date().toLocaleTimeString()}</span>{" "}
        <span>{new Date().toDateString()}</span>
      </div>
    </div>
  );
};

export default LocationInfo;
