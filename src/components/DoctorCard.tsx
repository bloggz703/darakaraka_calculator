import React from 'react';

interface DoctorProps {
  name: string;
  specialty: string;
  image: string;
  qualifications: string;
}

export default function DoctorCard({ name, specialty, image, qualifications }: DoctorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-600 font-medium mt-1">{specialty}</p>
        <p className="text-gray-600 text-sm mt-2">{qualifications}</p>
      </div>
    </div>
  );
}