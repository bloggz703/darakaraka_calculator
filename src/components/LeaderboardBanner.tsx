import React from 'react';
import { Heart } from 'lucide-react';

export default function LeaderboardBanner() {
  return (
    <a 
      href="https://b43b4m18fq3n4q7qrfvu1ffd1k.hop.clickbank.net/?&traffic_source=google&traffic_type=organic&campaign=soul&creative=hoplink&ad=AD3"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[728px] h-[90px] mx-auto mb-8 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
    >
      <div className="w-full h-full flex items-center justify-center px-6 group-hover:scale-105 transition-transform duration-300">
        <Heart className="w-8 h-8 text-white mr-4 animate-pulse" />
        <div className="text-white">
          <p className="text-xl font-bold mb-1">
            Find Your Best Suited Life Partner with Ease
          </p>
          <p className="text-sm">
            & the Happy Marriage You Deserve! 
            <span className="ml-2 bg-white text-rose-600 px-3 py-1 rounded-full font-bold">
              Click Here Now!
            </span>
          </p>
        </div>
      </div>
    </a>
  );
}