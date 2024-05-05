import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";

export const metadata = {
  title: "হসপিটাল এন্ড ক্লিনিক ",
  description: "আমার পাকুন্দিয়া বিস্তারিত ",
};

const hospitals = [
  {
    id: 1,
    name: "Hospital A",
    url: "/main/hospitals/1",
    location: "Location A",
  },
  {
    id: 2,
    name: "Hospital B",
    url: "/main/hospitals/2",
    location: "Location B",
  },
  {
    id: 3,
    name: "Hospital C",
    url: "/main/hospitals/3",
    location: "Location C",
  },
  {
    id: 4,
    name: "Hospital C",
    url: "/main/hospitals/4",
    location: "Location C",
  },
  {
    id: 5,
    name: "Hospital C",
    url: "/main/hospitals/5",
    location: "Location C",
  },
];

const HospitalPage = () => {
  return (
    <div>
      <Banner
        title="Hospital"
        description="Hospitals of Pakundia"
        cssClass="bg-[#007a99]"
      />
      <SingleContent title="About Hospitals & Clinik">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
          faucibus lacus ut lacinia. Nulla facilisi. Fusce tincidunt nulla ac
          ipsum maximus tincidunt. Duis varius diam at fringilla commodo. Nulla
          facilisi. Sed vitae feugiat ante. Nam ut nibh vitae risus laoreet
          efficitur. Curabitur bibendum tortor in nulla faucibus, nec interdum
          felis tincidunt. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
          faucibus lacus ut lacinia. Nulla facilisi. Fusce tincidunt nulla ac
          ipsum maximus tincidunt. Duis varius diam at fringilla commodo. Nulla
          facilisi. Sed vitae feugiat ante. Nam ut nibh vitae risus laoreet
          efficitur.
        </p>
      </SingleContent>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Hospitals Near You</h2>
        <ListCom listItems={hospitals} />
      </div>
    </div>
  );
};

export default HospitalPage;
