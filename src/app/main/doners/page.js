import Banner from '@/components/SinglePage/Banner';
import ListCom from '@/components/SinglePage/ListCom';
import SingleContent from '@/components/SinglePage/SingleContent';
import React from 'react';

const doners = [
    { id: 1, name: "John Doe", location: "New York", url: "/main/doners/1" },
    { id: 2, name: "Jane Smith", location: "Los Angeles", url: "/main/doners/2" },
    { id: 3, name: "Michael Johnson", location: "Chicago", url: "/main/doners/3" },
    { id: 4, name: "Emily Davis", location: "Houston", url: "/main/doners/4" },
    { id: 5, name: "David Wilson", location: "Phoenix", url: "/main/doners/5" },
    { id: 6, name: "Jessica Martinez", location: "Philadelphia", url: "/main/doners/6" },
    { id: 7, name: "William Anderson", location: "San Antonio", url: "/main/doners/7" },
    { id: 8, name: "Olivia Taylor", location: "San Diego", url: "/main/doners/8" },
    { id: 9, name: "Ethan Thomas", location: "Dallas", url: "/main/doners/9" },
    { id: 10, name: "Sophia Hernandez", location: "San Francisco", url: "/main/doners/10" },
    { id: 11, name: "Benjamin Adams", location: "Austin", url: "/main/doners/11" },
    { id: 12, name: "Mia Garcia", location: "Seattle", url: "/main/doners/12" },
    { id: 13, name: "James Brown", location: "Charlotte", url: "/main/doners/13" },
    { id: 14, name: "Lily Rodriguez", location: "Denver", url: "/main/doners/14" },
    { id: 15, name: "Logan Martinez", location: "Washington", url: "/main/doners/15" },
    { id: 16, name: "Ava Wilson", location: "Boston", url: "/main/doners/16" },
    { id: 17, name: "Noah Thomas", location: "Nashville", url: "/main/doners/17" },
    { id: 18, name: "Emma Clark", location: "Las Vegas", url: "/main/doners/18" },
    { id: 19, name: "Jacob Baker", location: "Miami", url: "/main/doners/19" },
    { id: 20, name: "Mia Foster", location: "Atlanta", url: "/main/doners/20" },
  ];
  
  
const DoctorListPage = () => {
  return (
    <div>
      <Banner title="doners" description="Doners of pakundia" cssClass="bg-[#007a99]" />
      <SingleContent title="About Our doners">
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
        <h2 className="text-2xl font-semibold mb-4">Blood Doner Near You</h2>
        <ListCom listItems={doners} />
      </div>
    </div>
  );
};

export default DoctorListPage;
