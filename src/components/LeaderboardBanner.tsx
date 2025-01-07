import React from 'react';

export default function LeaderboardBanner() {
  return (
    <div className="mx-4 md:mx-auto max-w-4xl mb-8">
      <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-red-900 via-red-800 to-amber-900">
        <a 
          href="https://kwanlunar.gumroad.com/l/thesecretpowerofdarakaraka"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 md:p-8"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-amber-200 font-serif">
              Calculated your Darakaraka?
            </h2>
            <p className="text-lg md:text-xl mb-6 text-amber-100/90">
              Dive deeper and unlock its secrets! Discover the true power with this must-read ebook—yours now for just <span className="text-xl md:text-2xl font-bold">₹349!</span>
            </p>
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-red-900 font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg text-lg">
              Get the Ebook Now!
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}