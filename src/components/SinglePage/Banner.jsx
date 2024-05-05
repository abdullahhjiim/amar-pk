import React from "react";

const Banner = ({ cssClass, title, description }) => {
  return (
    <div className={`${cssClass} text-white py-8 text-center`}>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-lg">{description}</p>
    </div>
  );
};

export default Banner;
