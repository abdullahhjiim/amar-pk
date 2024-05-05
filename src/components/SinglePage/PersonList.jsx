import React from "react";

const PersonList = ({ persons }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Persons</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-gray-600">{person.specialization}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
