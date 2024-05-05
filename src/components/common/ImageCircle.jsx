import Image from "next/image";
import React from "react";

const ImageCircle = ({ imageUrl }) => {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 ring-2 ring-pink-500">
      <Image
        className="w-full h-full object-cover -mr-8"
        src={imageUrl}
        alt="Circular"
      />
    </div>
  );
};

export default ImageCircle;
