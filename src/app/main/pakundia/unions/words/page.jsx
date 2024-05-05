import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";

export const metadata = {
  title: "ওয়ার্ড  & ওয়ার্ডদাতা  ",
  description: "আমার পাকুন্দিয়া বিস্তারিত ",
};

const words = [
  {
    id: 1,
    name: "ওয়ার্ড  A",
    url: "/main/pakundia/unions/words/1",
    location: "Location A",
  },
  {
    id: 2,
    name: "ওয়ার্ড  B",
    url: "/main/pakundia/unions/words/2",
    location: "Location B",
  },
  {
    id: 3,
    name: "ওয়ার্ড  C",
    url: "/main/pakundia/unions/words/3",
    location: "Location C",
  },
  {
    id: 4,
    name: "ওয়ার্ড  C",
    url: "/main/pakundia/unions/words/4",
    location: "Location C",
  },
  {
    id: 5,
    name: "ওয়ার্ড  C",
    url: "/main/pakundia/unions/words/5",
    location: "Location C",
  },
  {
    id: 6,
    name: "ওয়ার্ড  C",
    url: "/main/pakundia/unions/words/4",
    location: "Location C",
  },
  {
    id: 7,
    name: "ওয়ার্ড  C",
    url: "/main/pakundia/unions/words/5",
    location: "Location C",
  },
  {
    id: 8,
    name: "ওয়ার্ড  C",
    url: "/main/pakundia/unions/words/5",
    location: "Location C",
  },
];

const Words = () => {
  return (
    <div>
      <Banner
        title="ওয়ার্ড "
        description="ওয়ার্ড s of Pakundia"
        cssClass="bg-[#007a99]"
      />
      <SingleContent title="About ওয়ার্ড  & Clinik">
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
        <h2 className="text-2xl font-semibold mb-4">Words Near You</h2>
        <ListCom listItems={words} />
      </div>
    </div>
  );
};

export default Words;
