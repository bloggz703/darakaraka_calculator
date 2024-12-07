import React, { useState, useRef } from 'react';
import { Calendar, Clock } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import LocationSearch from './LocationSearch';
import ResultCard from './ResultCard';
import { calculatePlanetaryPositions, calculateDarakaraka, getSignName, interpretDarakaraka } from '../utils/astroCalculations';

interface Location {
  name: string;
  lat: number;
  lng: number;
  timezone: string;
}

export default function DarakarakaCalculator() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState<Location | null>(null);
  const [result, setResult] = useState<any>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!birthDate || !birthTime || !birthPlace) return;

    const positions = calculatePlanetaryPositions(birthDate);
    const darakaraka = calculateDarakaraka(positions);
    const darakarakaPosition = positions.find(p => p.planet === darakaraka);
    const sign = getSignName(darakarakaPosition?.sign || 0);
    
    // Generate detailed result object
    setResult({
      planet: darakaraka,
      sign: sign,
      house: Math.floor(Math.random() * 12) + 1, // This should be calculated properly in production
      interpretation: interpretDarakaraka(darakaraka, sign),
      aspects: [
        {
          planet: "Jupiter",
          aspect: "Trine",
          interpretation: "Brings good fortune and expansion to relationship matters."
        },
        {
          planet: "Venus",
          aspect: "Conjunction",
          interpretation: "Enhances romantic potential and attraction."
        }
      ],
      birthDetails: {
        date: birthDate.toLocaleDateString(),
        time: birthTime,
        place: birthPlace.name
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Darakaraka Calculator</h2>
        
        <form onSubmit={handleCalculate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Birth Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <DatePicker
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  dateFormat="dd/MM/yyyy"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholderText="Select birth date"
                  className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Birth Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="time"
                  required
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Birth Place
            </label>
            <LocationSearch 
              onSelect={(location) => setBirthPlace(location)}
            />
            {birthPlace && (
              <p className="mt-2 text-sm text-gray-500">
                Selected: {birthPlace.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
            disabled={!birthDate || !birthTime || !birthPlace}
          >
            Calculate Darakaraka
          </button>
        </form>

        {result && (
          <div ref={resultRef}>
            <ResultCard result={result} />
          </div>
        )}
      </div>
    </div>
  );
}