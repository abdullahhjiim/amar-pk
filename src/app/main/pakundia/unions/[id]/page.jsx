import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";
import React from "react";

const bloodDetailsPage = ({ params }) => {
  const { id } = params;

  const blood = {
    id: id,
    name: "Union A",
    location: "Location A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla suscipit, maximus nunc vitae, rhoncus lacus. Sed vitae sapien ut orci suscipit accumsan.",
    bloods: [
      {
        id: 1,
        name: "Doner John Doe",
        location: "New York",
        url: "/main/doners/1",
      },
      {
        id: 2,
        name: "Doner Jane Smith",
        location: "Los Angeles",
        url: "/main/doners/2",
      },
      {
        id: 3,
        name: "Doner Michael Johnson",
        location: "Chicago",
        url: "/main/doners/3",
      },
      {
        id: 4,
        name: "Doner Emily Davis",
        location: "Houston",
        url: "/main/doners/4",
      },
      {
        id: 5,
        name: "Doner David Wilson",
        location: "Phoenix",
        url: "/main/doners/5",
      },
    ],
  };

  return (
    <div>
      <Banner
        title={blood.name}
        description={blood.location}
        cssClass="bg-[#007a99]"
      />
      <SingleContent title={`About  ${blood.name}`}>
        <p>{blood.description}</p>
      </SingleContent>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Blood Doner List</h2>
        <ListCom listItems={blood.bloods} />
      </div>
    </div>
  );
};

export default bloodDetailsPage;
