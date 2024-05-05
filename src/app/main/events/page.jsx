import React from "react";

const EventsPage = () => {
  const events = [];

  return (
    <div className="bg-gray-100">
      {/* Banner */}
      <div className="bg-blue-500 py-4 text-white text-center">
        <h1 className="text-3xl font-semibold">Events</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Recent Events */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Running Events</h2>
          {events.length > 0 ? (
            <div>{/* Render recent events here */}</div>
          ) : (
            <p className="text-gray-800">No events available at the moment.</p>
          )}
        </div>

        {/* Related Parts */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcomming Parts</h2>
          {/* Add related parts content here */}
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
          {/* Add content here */}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
