import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";

export const metadata = {
  title: "স্কুল & কলেজ ",
  description: "আমার পাকুন্দিয়া বিস্তারিত ",
};

const institutes = [
  {
    id: 1,
    name: "স্কুল  A",
    url: "/main/institutes/1",
    location: "Location A",
  },
  {
    id: 2,
    name: "স্কুল  B",
    url: "/main/institutes/2",
    location: "Location B",
  },
  {
    id: 3,
    name: "স্কুল  C",
    url: "/main/institutes/3",
    location: "Location C",
  },
  {
    id: 4,
    name: "স্কুল  C",
    url: "/main/institutes/4",
    location: "Location C",
  },
  {
    id: 5,
    name: "স্কুল  C",
    url: "/main/institutes/5",
    location: "Location C",
  },
];

const HospitalPage = () => {
  return (
    <div>
      <Banner
        title="স্কুল "
        description="স্কুল s of Pakundia"
        cssClass="bg-[#007a99]"
      />
      <SingleContent title="About institutes & Clinik">
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
        <h2 className="text-2xl font-semibold mb-4">institutes Near You</h2>
        <ListCom listItems={institutes} />
      </div>
    </div>
  );
};

export default HospitalPage;
