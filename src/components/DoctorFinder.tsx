import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { leicesterDoctors } from '../data/doctors';
import type { Doctor } from '../types/doctor';

export default function DoctorFinder() {
  const [postcode, setPostcode] = useState('');
  const [results, setResults] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulated API call - replace with actual API integration
    setTimeout(() => {
      setResults(leicesterDoctors);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg" id="doctor-finder">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Find NHS & Private Doctors in Leicester</h2>
        <p className="text-gray-600 mb-6">Search our comprehensive database of Leicester doctors by entering your postcode.</p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-lg mb-3">How to Find a Doctor in Leicester:</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Enter your Leicester postcode (e.g., LE1 7RH)</li>
            <li>View doctors sorted by distance from your location</li>
            <li>Check availability and contact details</li>
            <li>Call directly or book an appointment online</li>
          </ol>
        </div>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-3">
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                placeholder="Enter Leicester postcode"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                pattern="[A-Za-z]{1,2}[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}"
                title="Please enter a valid UK postcode"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2 font-medium"
              disabled={loading}
            >
              <Search className="w-5 h-5" />
              {loading ? 'Searching...' : 'Find Doctors'}
            </button>
          </div>
        </form>

        {results.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Doctors Near Your Location</h3>
            {results.map((doctor) => (
              <div key={doctor.id} className="border rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.address}, {doctor.postcode}</p>
                    <p className="text-sm text-blue-600 mt-1">{doctor.distance} miles from your location</p>
                    <div className="mt-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${doctor.nhs ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                        {doctor.nhs ? 'NHS Practice' : 'Private Practice'}
                      </span>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ml-2 ${
                        doctor.availability.includes('Accepting') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {doctor.availability}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-500 mb-2">{'★'.repeat(Math.floor(doctor.rating))}{'☆'.repeat(5-Math.floor(doctor.rating))}</div>
                    <a 
                      href={`tel:${doctor.phone}`} 
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      {doctor.phone}
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}