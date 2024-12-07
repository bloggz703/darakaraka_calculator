import React from 'react';
import { Calculator, Star, Book, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Darakaraka Calculator</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our Darakaraka Calculator is a powerful Vedic astrology tool designed to help you understand your career path and professional destiny through ancient astrological wisdom.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We've simplified complex Vedic calculations into an easy-to-use tool that provides instant insights into your professional tendencies and career potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Calculator, title: "Precise Calculations", desc: "Accurate planetary degree analysis" },
            { icon: Star, title: "Vedic Wisdom", desc: "Based on ancient astrology" },
            { icon: Book, title: "Career Insights", desc: "Professional path guidance" },
            { icon: Clock, title: "Instant Results", desc: "Quick and easy to use" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <item.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To make Vedic astrological wisdom accessible to everyone by providing accurate, easy-to-use tools for personal and professional guidance. We believe that understanding your Darakaraka can help you make better career decisions and align with your natural professional tendencies.
          </p>
        </div>
      </div>
    </div>
  );
}