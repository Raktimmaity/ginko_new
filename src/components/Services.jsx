import React from "react";
import bgImage from "../assets/img/event_bg.png"; // Make sure this image exists in your assets
import { Check } from "lucide-react";

const Services = () => {
  return (
    <section
      id="events"
      className="relative bg-gray-900 text-white py-16 px-4 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative container mx-auto max-w-5xl z-10">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Services <span className="text-white">Offered</span>
        </h2>

        <div className="rounded-lg shadow-lg bg-gray-800 bg-opacity-90 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-6 list-none">
              {[
                "Home Delivery",
                "Nightlife",
                "Smoking Area",
                "Indoor Seating",
                "Gin Bar",
                "Takeaway Available",
                "Serves Cocktails",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-4 bg-gray-700 hover:bg-yellow-400 hover:text-black transition rounded-lg p-4 cursor-pointer shadow-md"
                >
                  <Check className="bg-green-600 text-white rounded-full p-1 w-6 h-6 flex-shrink-0" />
                  <span className="text-lg font-medium">{service}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-6 list-none">
              {[
                "Dance Floor",
                "Table Reservation Recommended",
                "Live Music",
                "Full Bar Available",
                "Resto Bar",
                "Wifi",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-4 bg-gray-700 hover:bg-yellow-400 hover:text-black transition rounded-lg p-4 cursor-pointer shadow-md"
                >
                  <Check className="bg-green-600 text-white rounded-full p-1 w-6 h-6 flex-shrink-0" />
                  <span className="text-lg font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
