import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";
import React from "react";

const marketDetailsPage = ({ params }) => {
  const { id } = params;

  const market = {
    id: id,
    name: "Market A",
    location: "Location A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla suscipit, maximus nunc vitae, rhoncus lacus. Sed vitae sapien ut orci suscipit accumsan.",
    markets: [
      {
        id: 1,
        name: "Doner John Doe",
        location: "New York",
        url: "/main/business/markets/shops/1",
      },
      {
        id: 2,
        name: "Doner Jane Smith",
        location: "Los Angeles",
        url: "/main/business/markets/shops/2",
      },
      {
        id: 3,
        name: "Doner Michael Johnson",
        location: "Chicago",
        url: "/main/business/markets/shops/3",
      },
      {
        id: 4,
        name: "Doner Emily Davis",
        location: "Houston",
        url: "/main/business/markets/shops/4",
      },
      {
        id: 5,
        name: "Doner David Wilson",
        location: "Phoenix",
        url: "/main/business/markets/shops/5",
      },
    ],
  };

  return (
    <div>
      <Banner
        title={market.name}
        description={market.location}
        cssClass="bg-[#007a99]"
      />
      <SingleContent title={`About  ${market.name}`}>
        <p>{market.description}</p>
      </SingleContent>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">market Doner List</h2>
        <ListCom listItems={market.markets} />
      </div>
    </div>
  );
};

export default marketDetailsPage;
