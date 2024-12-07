import React from 'react';
import DarakarakaCalculator from '../components/DarakarakaCalculator';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="space-y-12 py-8">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Darakaraka Calculator: Find Your Relationship Significator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Discover your Darakaraka planet and understand its influence on your relationships through Vedic astrology.
        </p>
        
        <DarakarakaCalculator />
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Understanding Your Darakaraka</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            The Darakaraka is a unique planetary significator in Vedic astrology that reveals important insights about your relationships and potential life partner.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">How It Works</h3>
              <ul className="space-y-2">
                <li>Enter your birth details accurately</li>
                <li>Our calculator determines planetary positions</li>
                <li>Identifies your unique Darakaraka</li>
                <li>Provides personalized interpretation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
              <ul className="space-y-2">
                <li>Your relationship significator planet</li>
                <li>Partner qualities to look for</li>
                <li>Relationship strengths</li>
                <li>Areas for growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}