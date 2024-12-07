import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find NHS & Private Doctors in Leicester
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Search our comprehensive database of Leicester doctors. Compare NHS and private practices, check availability, and book appointments easily.
          </p>
          <a 
            href="#doctor-finder"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            <Search className="w-5 h-5" />
            Find Doctors Near You
          </a>
        </div>
      </div>
    </div>
  );
}