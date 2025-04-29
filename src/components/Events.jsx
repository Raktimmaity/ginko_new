import React from 'react';
import bgImage from '../assets/img/event_bg.png'; // Make sure this image exists in your assets

const Events = () => {
  return (
    <section
      id="events"
      className="bg-gray-900 text-white py-16 px-4 relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 mix-blend-multiply bg-gray-400"></div>

      {/* Content */}
      <div className="relative container mx-auto max-w-4xl z-10">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          Upcoming <span className="text-white">Events</span>
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Live DJ Night</h3>
            <p className="text-gray-300">Friday, May 3 — 9 PM Onwards</p>
            <p className="text-gray-400">
              Join us for an electrifying night with DJ Sonic spinning the best of EDM and house.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Cocktail Tasting</h3>
            <p className="text-gray-300">Wednesday, May 8 — 7 PM</p>
            <p className="text-gray-500">
              Sample our signature mixes and learn the art of bartending from our pros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
