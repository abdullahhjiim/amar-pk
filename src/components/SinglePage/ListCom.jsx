import React from "react";
import SingleCard from "./SingleCard";

const ListCom = ({ listItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {listItems.map((item) => (
        <SingleCard
          key={item.id}
          name={item.name}
          location={item.location}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default ListCom;
