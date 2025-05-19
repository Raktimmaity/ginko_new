import React from "react";
import bgImage from "../assets/img/event_bg.png"; // Make sure this image exists in your assets
import { Check } from 'lucide-react';

const Services = () => {
  return (
    <>
      <section
        id="events"
        className="bg-gray-900 text-white py-16 px-4 relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 mix-blend-multiply bg-gray-500"></div>

        {/* Content */}
        <div className="relative container mx-auto max-w-4xl z-10">
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
            Services <span className="text-white">Offered</span>
          </h2>
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4 list-none">
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Home Delivery</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Nightlife</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Smoking Area</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Indoor Seating</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Gin Bar</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Takeaway Available</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Serves Cocktails</li>
              </ul>
              <ul className="space-y-4 list-none">
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Dance Floor</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Table Reservation Recommended</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Live Music</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Full Bar Available</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Resto Bar</li>
                <li><Check className="inline text-white bg-green-600 rounded-full p-1"/> Wifi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
