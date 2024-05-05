import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";

export const metadata = {
  title: "ইউনিয়ন  & ইউনিয়নদাতা  ",
  description: "আমার পাকুন্দিয়া বিস্তারিত ",
};

const unions = [
  {
    id: 1,
    name: "ইউনিয়ন  A",
    url: "/main/pakundia/unions/1",
    location: "Location A",
  },
  {
    id: 2,
    name: "ইউনিয়ন  B",
    url: "/main/pakundia/unions/2",
    location: "Location B",
  },
  {
    id: 3,
    name: "ইউনিয়ন  C",
    url: "/main/pakundia/unions/3",
    location: "Location C",
  },
  {
    id: 4,
    name: "ইউনিয়ন  C",
    url: "/main/pakundia/unions/4",
    location: "Location C",
  },
  {
    id: 5,
    name: "ইউনিয়ন  C",
    url: "/main/pakundia/unions/5",
    location: "Location C",
  },
  {
    id: 6,
    name: "ইউনিয়ন  C",
    url: "/main/pakundia/unions/4",
    location: "Location C",
  },
  {
    id: 7,
    name: "ইউনিয়ন  C",
    url: "/main/pakundia/unions/5",
    location: "Location C",
  },
  {
    id: 8,
    name: "ইউনিয়ন  C",
    url: "/main/pakundia/unions/5",
    location: "Location C",
  },
];

const Unions = () => {
  return (
    <div>
      <Banner
        title="ইউনিয়ন "
        description="ইউনিয়ন s of Pakundia"
        cssClass="bg-[#007a99]"
      />
      <SingleContent title="About ইউনিয়ন  & Clinik">
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
        <h2 className="text-2xl font-semibold mb-4">unions Near You</h2>
        <ListCom listItems={unions} />
      </div>
    </div>
  );
};

export default Unions;
