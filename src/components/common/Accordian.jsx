"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md overflow-hidden mb-4">
      <button
        className="flex justify-between items-center w-full bg-gray-200 py-3 px-4 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-sm font-semibold">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="bg-gray-100 p-4">
          <p className="text-gray-800 text-sm">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
