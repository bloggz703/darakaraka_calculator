import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import debounce from '../utils/debounce';

interface Location {
  name: string;
  lat: number;
  lng: number;
  timezone: string;
}

interface LocationSearchProps {
  onSelect: (location: Location) => void;
}

interface NominatimResult {
  place_id: number;
  lat: string;
  lon: string;
  display_name: string;
  type: string;
}

export default function LocationSearch({ onSelect }: LocationSearchProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  const searchLocations = async (input: string) => {
    if (input.length < 2) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          input
        )}&limit=5&addressdetails=1&featuretype=city`
      );
      
      if (!response.ok) throw new Error('Search failed');
      
      const results: NominatimResult[] = await response.json();
      
      const locations: Location[] = results.map(result => ({
        name: result.display_name,
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
        timezone: getTimezone(parseFloat(result.lat), parseFloat(result.lon))
      }));

      setSuggestions(locations);
    } catch (error) {
      console.error('Location search error:', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Get timezone based on coordinates
  const getTimezone = (lat: number, lng: number): string => {
    // This is a simplified version. In a production environment,
    // you would want to use a timezone API or library
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  // Debounce the search to avoid too many API calls
  const debouncedSearch = debounce(searchLocations, 300);

  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Start typing your birth place..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          autoComplete="off"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-500"></div>
          </div>
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((location, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              onClick={() => {
                onSelect(location);
                setQuery(location.name);
                setSuggestions([]);
              }}
            >
              <div className="font-medium">{location.name.split(',')[0]}</div>
              <div className="text-sm text-gray-500">{location.name.split(',').slice(1).join(',').trim()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}