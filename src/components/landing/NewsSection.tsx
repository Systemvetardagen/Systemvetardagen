import React from "react";
import { NavLink } from "react-router-dom";

export const HighlightSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-8 my-12 md:mt-0">
      {/* <div className="flex flex-col p-4 gap-4 md:flex-row md:items-center border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src="/images/nod.webp"
          alt="Systemvetardagen"
          className="h-40 object-cover rounded-2xl"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-2">
            Systemvetardagen 2026: Av studenter, för studenter!
          </h2>
          <p className="text-gray-500 text-sm mb-2">
            Vi är otroligt glada att kunna berätta att Systemvetardagen är
            tillbaka! Från första dagen i det här projektet har vi lagt
            stor...
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium text-sm hover:underline"
          >
            Läs mer
          </a>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NavLink
          to="/visit-info"
          className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="relative h-48 md:h-56">
            <img
              src="/images/crowded-from-above.webp"
              alt="Visitor Information"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-40 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-95 px-5 py-3 rounded-lg shadow-lg text-center transform group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Visitor Information
                </h3>
                <p className="text-xs text-gray-600">Plan your visit</p>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink
          to="/about"
          className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="relative h-48 md:h-56">
            <img
              src="/images/auditorium-seats.webp"
              alt="About Systemvetardagen"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-40 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-95 px-5 py-3 rounded-lg shadow-lg text-center transform group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  About Us
                </h3>
                <p className="text-xs text-gray-600">
                  Learn more about the event
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
