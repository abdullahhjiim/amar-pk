import Link from "next/link";
import React from "react";

const SingleCard = ({ name, location, url }) => {
  return (
    <Link href={url}>
      <div className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-200">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500">{location}</p>
      </div>
    </Link>
  );
};

export default SingleCard;
