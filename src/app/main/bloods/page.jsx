import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";

export const metadata = {
  title: "রক্ত  & রক্তদাতা  ",
  description: "আমার পাকুন্দিয়া বিস্তারিত ",
};

const bloods = [
  {
    id: 1,
    name: "রক্ত  A",
    url: "/main/bloods/1",
    location: "Location A",
  },
  {
    id: 2,
    name: "রক্ত  B",
    url: "/main/bloods/2",
    location: "Location B",
  },
  {
    id: 3,
    name: "রক্ত  C",
    url: "/main/bloods/3",
    location: "Location C",
  },
  {
    id: 4,
    name: "রক্ত  C",
    url: "/main/bloods/4",
    location: "Location C",
  },
  {
    id: 5,
    name: "রক্ত  C",
    url: "/main/bloods/5",
    location: "Location C",
  },
  {
    id: 6,
    name: "রক্ত  C",
    url: "/main/bloods/4",
    location: "Location C",
  },
  {
    id: 7,
    name: "রক্ত  C",
    url: "/main/bloods/5",
    location: "Location C",
  },
  {
    id: 8,
    name: "রক্ত  C",
    url: "/main/bloods/5",
    location: "Location C",
  },
];

const HospitalPage = () => {
  return (
    <div>
      <Banner
        title="রক্ত "
        description="রক্ত s of Pakundia"
        cssClass="bg-[#007a99]"
      />
      <SingleContent title="About bloods & Clinik">
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
        <h2 className="text-2xl font-semibold mb-4">Bloods Near You</h2>
        <ListCom listItems={bloods} />
      </div>
    </div>
  );
};

export default HospitalPage;
