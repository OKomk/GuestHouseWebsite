import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-background dark:bg-dark-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Our Location
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Rajendra Apartment, Scheme No 1, Shastri Path, Nashik Road, Nashik -
            422101
            <br />
            (Near Badshah Cold Drinks)
          </p>
        </div>
        <div className="mt-10 h-96 w-full rounded-lg overflow-hidden shadow-lg">
          {/* Simple iframe to OpenStreetMap for Nashik Road area */}
          <iframe
            title="Location Map"
            className="w-full h-full border-0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.7729%2C19.9279%2C73.8729%2C20.0279&amp;layer=mapnik&amp;marker=19.9779%2C73.8229"
          />
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://www.openstreetmap.org/#map=14/19.951605,73.839286"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-background dark:text-dark-background bg-primary dark:bg-dark-primary hover:bg-secondary dark:hover:bg-dark-secondary mr-3"
          >
            View Larger Map
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Rajendra+Apartment,+Scheme+No+1,+Shastri+Path,+Nashik+Road,+Nashik+422101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-background dark:text-dark-background bg-primary dark:bg-dark-primary hover:bg-secondary dark:hover:bg-dark-secondary"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
