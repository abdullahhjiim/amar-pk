import Banner from '@/components/SinglePage/Banner';
import ListCom from '@/components/SinglePage/ListCom';
import SingleContent from '@/components/SinglePage/SingleContent';
import React from 'react';

const doctors = [
    { id: 1, name: "Dr. John Doe", location: "New York", url: "/main/doctors/1" },
    { id: 2, name: "Dr. Jane Smith", location: "Los Angeles", url: "/main/doctors/2" },
    { id: 3, name: "Dr. Michael Johnson", location: "Chicago", url: "/main/doctors/3" },
    { id: 4, name: "Dr. Emily Davis", location: "Houston", url: "/main/doctors/4" },
    { id: 5, name: "Dr. David Wilson", location: "Phoenix", url: "/main/doctors/5" },
    { id: 6, name: "Dr. Jessica Martinez", location: "Philadelphia", url: "/main/doctors/6" },
    { id: 7, name: "Dr. William Anderson", location: "San Antonio", url: "/main/doctors/7" },
    { id: 8, name: "Dr. Olivia Taylor", location: "San Diego", url: "/main/doctors/8" },
    { id: 9, name: "Dr. Ethan Thomas", location: "Dallas", url: "/main/doctors/9" },
    { id: 10, name: "Dr. Sophia Hernandez", location: "San Francisco", url: "/main/doctors/10" },
    { id: 11, name: "Dr. Benjamin Adams", location: "Austin", url: "/main/doctors/11" },
    { id: 12, name: "Dr. Mia Garcia", location: "Seattle", url: "/main/doctors/12" },
    { id: 13, name: "Dr. James Brown", location: "Charlotte", url: "/main/doctors/13" },
    { id: 14, name: "Dr. Lily Rodriguez", location: "Denver", url: "/main/doctors/14" },
    { id: 15, name: "Dr. Logan Martinez", location: "Washington", url: "/main/doctors/15" },
    { id: 16, name: "Dr. Ava Wilson", location: "Boston", url: "/main/doctors/16" },
    { id: 17, name: "Dr. Noah Thomas", location: "Nashville", url: "/main/doctors/17" },
    { id: 18, name: "Dr. Emma Clark", location: "Las Vegas", url: "/main/doctors/18" },
    { id: 19, name: "Dr. Jacob Baker", location: "Miami", url: "/main/doctors/19" },
    { id: 20, name: "Dr. Mia Foster", location: "Atlanta", url: "/main/doctors/20" },
    // Add more doctors as needed
  ];
  
  
const DoctorListPage = () => {
  return (
    <div>
      <Banner title="Doctors" description="Doctos of pakundia" cssClass="bg-[#007a99]" />
      <SingleContent title="About Our Doctors">
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
        <h2 className="text-2xl font-semibold mb-4">Doctors Near You</h2>
        <ListCom listItems={doctors} />
      </div>
    </div>
  );
};

export default DoctorListPage;
