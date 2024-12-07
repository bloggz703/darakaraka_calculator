// Astronomical constants and calculations
const AYANAMSA_2000 = 23.856 + 0.017; // Lahiri ayanamsa for year 2000

interface PlanetaryPosition {
  planet: string;
  longitude: number;
  sign: number;
  degree: number;
}

const PLANETS = [
  'Sun', 'Moon', 'Mars', 'Mercury', 
  'Jupiter', 'Venus', 'Saturn'
];

const SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// Mean daily motions of planets (degrees per day)
const MEAN_DAILY_MOTION = {
  Sun: 0.9856,
  Moon: 13.1764,
  Mars: 0.5242,
  Mercury: 1.3375,
  Jupiter: 0.0831,
  Venus: 1.6021,
  Saturn: 0.0334
};

export function calculatePlanetaryPositions(date: Date): PlanetaryPosition[] {
  const j2000 = new Date('2000-01-01T12:00:00Z');
  const daysSinceJ2000 = (date.getTime() - j2000.getTime()) / (1000 * 60 * 60 * 24);

  return PLANETS.map(planet => {
    // Calculate approximate longitude based on mean motion
    let longitude = (MEAN_DAILY_MOTION[planet] * daysSinceJ2000) % 360;
    if (longitude < 0) longitude += 360;

    // Apply Lahiri ayanamsa correction
    longitude -= AYANAMSA_2000;
    if (longitude < 0) longitude += 360;

    const sign = Math.floor(longitude / 30);
    const degree = longitude % 30;

    return {
      planet,
      longitude,
      sign,
      degree
    };
  });
}

export function calculateDarakaraka(positions: PlanetaryPosition[]): string {
  // Sort planets by degree in descending order
  const sortedPlanets = [...positions].sort((a, b) => b.degree - a.degree);
  
  // Darakaraka is the planet with the lowest degree
  const darakaraka = sortedPlanets[sortedPlanets.length - 1];
  
  return darakaraka.planet;
}

export function getSignName(signIndex: number): string {
  return SIGNS[signIndex];
}

export function interpretDarakaraka(planet: string, sign: string): string {
  const interpretations = {
    Sun: "Your partner may have leadership qualities and a strong personality. Look for someone confident and self-assured.",
    Moon: "You're drawn to emotionally nurturing partners. Seek someone who understands your emotional needs.",
    Mars: "Energy and drive attract you. Your ideal partner might be ambitious and action-oriented.",
    Mercury: "Communication is key in your relationships. Look for an intellectual connection.",
    Jupiter: "Wisdom and growth matter most. Your partner should support your personal development.",
    Venus: "Harmony and beauty are important. Seek someone who appreciates art and romance.",
    Saturn: "You value commitment and stability. Look for a responsible and reliable partner."
  };

  return interpretations[planet] || "Interpretation not available";
}