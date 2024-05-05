import Banner from "@/components/SinglePage/Banner";
import ListCom from "@/components/SinglePage/ListCom";
import SingleContent from "@/components/SinglePage/SingleContent";
import React from "react";

const HospitalDetailsPage = ({ params }) => {
  const { id } = params;

  const hospital = {
    id: id,
    name: "Hospital A",
    location: "Location A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla suscipit, maximus nunc vitae, rhoncus lacus. Sed vitae sapien ut orci suscipit accumsan.",
    doctors: [
      {
        id: 1,
        name: "Dr. John Doe",
        location: "New York",
        url: "/main/doctors/1",
      },
      {
        id: 2,
        name: "Dr. Jane Smith",
        location: "Los Angeles",
        url: "/main/doctors/2",
      },
      {
        id: 3,
        name: "Dr. Michael Johnson",
        location: "Chicago",
        url: "/main/doctors/3",
      },
      {
        id: 4,
        name: "Dr. Emily Davis",
        location: "Houston",
        url: "/main/doctors/4",
      },
      {
        id: 5,
        name: "Dr. David Wilson",
        location: "Phoenix",
        url: "/main/doctors/5",
      },
    ],
  };

  return (
    <div>
      <Banner
        title={hospital.name}
        description={hospital.location}
        cssClass="bg-[#007a99]"
      />
      <SingleContent title={`About  ${hospital.name}`}>
        <p>{hospital.description}</p>
      </SingleContent>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Doctor List</h2>
        <ListCom listItems={hospital.doctors} />
      </div>
    </div>
  );
};

export default HospitalDetailsPage;
