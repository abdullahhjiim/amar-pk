import React from "react";

const Card = ({ children }) => {
  return (
    <div className="container mx-auto rounded-lg overflow-hidden my-32">
      {children}
    </div>
  );
};

export default Card;
