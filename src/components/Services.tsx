import React from 'react';
import { Stethoscope, Heart, Brain, Activity } from 'lucide-react';

const services = [
  { icon: Stethoscope, title: "General Practice", desc: "Comprehensive primary care services" },
  { icon: Heart, title: "Cardiology", desc: "Expert heart health management" },
  { icon: Brain, title: "Neurology", desc: "Specialized neurological care" },
  { icon: Activity, title: "Diagnostics", desc: "Advanced medical testing" }
];

export default function Services() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition duration-300">
              <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}