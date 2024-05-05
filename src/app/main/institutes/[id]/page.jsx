import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";
import React from "react";

const InstituteDetailsPage = ({ params }) => {
  const { id } = params;

  const institute = {
    id: id,
    name: "Institute A",
    location: "Location A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla suscipit, maximus nunc vitae, rhoncus lacus. Sed vitae sapien ut orci suscipit accumsan.",
    teachers: [
      {
        id: 1,
        name: "Phd. John Doe",
        location: "New York",
        url: "/main/teachers/1",
      },
      {
        id: 2,
        name: "Phd. Jane Smith",
        location: "Los Angeles",
        url: "/main/teachers/2",
      },
      {
        id: 3,
        name: "Phd. Michael Johnson",
        location: "Chicago",
        url: "/main/teachers/3",
      },
      {
        id: 4,
        name: "Phd. Emily Davis",
        location: "Houston",
        url: "/main/teachers/4",
      },
      {
        id: 5,
        name: "Phd. David Wilson",
        location: "Phoenix",
        url: "/main/teachers/5",
      },
    ],
  };

  return (
    <div>
      <Banner
        title={institute.name}
        description={institute.location}
        cssClass="bg-[#007a99]"
      />
      <SingleContent title={`About  ${institute.name}`}>
        <p>{institute.description}</p>
      </SingleContent>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Teacher List</h2>
        <ListCom listItems={institute.teachers} />
      </div>
    </div>
  );
};

export default InstituteDetailsPage;
