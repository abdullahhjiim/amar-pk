import Banner from '@/components/SinglePage/Banner';
import ListCom from '@/components/SinglePage/ListCom';
import SingleContent from '@/components/SinglePage/SingleContent';
import React from 'react';

const teachers = [
    { id: 1, name: "Phd. John Doe", location: "New York", url: "/main/teachers/1" },
    { id: 2, name: "Phd. Jane Smith", location: "Los Angeles", url: "/main/teachers/2" },
    { id: 3, name: "Phd. Michael Johnson", location: "Chicago", url: "/main/teachers/3" },
    { id: 4, name: "Phd. Emily Davis", location: "Houston", url: "/main/teachers/4" },
    { id: 5, name: "Phd. David Wilson", location: "Phoenix", url: "/main/teachers/5" },
    { id: 6, name: "Phd. Jessica Martinez", location: "Philadelphia", url: "/main/teachers/6" },
    { id: 7, name: "Phd. William Anderson", location: "San Antonio", url: "/main/teachers/7" },
    { id: 8, name: "Phd. Olivia Taylor", location: "San Diego", url: "/main/teachers/8" },
    { id: 9, name: "Phd. Ethan Thomas", location: "Dallas", url: "/main/teachers/9" },
    { id: 10, name: "Phd. Sophia Hernandez", location: "San Francisco", url: "/main/teachers/10" },
    { id: 11, name: "Phd. Benjamin Adams", location: "Austin", url: "/main/teachers/11" },
    { id: 12, name: "Phd. Mia Garcia", location: "Seattle", url: "/main/teachers/12" },
    { id: 13, name: "Phd. James Brown", location: "Charlotte", url: "/main/teachers/13" },
    { id: 14, name: "Phd. Lily Rodriguez", location: "Denver", url: "/main/teachers/14" },
    { id: 15, name: "Phd. Logan Martinez", location: "Washington", url: "/main/teachers/15" },
    { id: 16, name: "Phd. Ava Wilson", location: "Boston", url: "/main/teachers/16" },
    { id: 17, name: "Phd. Noah Thomas", location: "Nashville", url: "/main/teachers/17" },
    { id: 18, name: "Phd. Emma Clark", location: "Las Vegas", url: "/main/teachers/18" },
    { id: 19, name: "Phd. Jacob Baker", location: "Miami", url: "/main/teachers/19" },
    { id: 20, name: "Phd. Mia Foster", location: "Atlanta", url: "/main/teachers/20" },
  ];
  
  
const DoctorListPage = () => {
  return (
    <div>
      <Banner title="teachers" description="Doctos of pakundia" cssClass="bg-[#007a99]" />
      <SingleContent title="About Our teachers">
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
        <h2 className="text-2xl font-semibold mb-4">Teachers Near You</h2>
        <ListCom listItems={teachers} />
      </div>
    </div>
  );
};

export default DoctorListPage;
