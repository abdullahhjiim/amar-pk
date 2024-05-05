import React from "react";

const OnlineServicePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Banner */}
      <div className="bg-blue-500 py-4 text-white text-center">
        <h1 className="text-3xl font-semibold">Online Services</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Product Sell Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Product Sell</h2>
          <p className="text-gray-800">
            Browse our wide range of products available for purchase.
          </p>
          {/* Add product sell content here */}
        </div>

        {/* Ad Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Advertisement</h2>
          <p className="text-gray-800">
            Promote your business or services with our advertising solutions.
          </p>
          {/* Add advertisement content here */}
        </div>

        {/* Rental Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Rental</h2>
          <p className="text-gray-800">
            Rent various items or properties through our platform.
          </p>
          {/* Add rental content here */}
        </div>

        {/* Other Services Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Other Services</h2>
          <p className="text-gray-800">
            Explore our other services such as job listings, event management,
            and more.
          </p>
          {/* Add other services content here */}
        </div>
      </div>
    </div>
  );
};

export default OnlineServicePage;
