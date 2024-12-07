import swisseph from 'swisseph';

interface PlanetaryPosition {
  planet: string;
  degree: number;
  sign: string;
  house: number;
  nakshatra?: string;
  pada?: number;
}

interface Planet {
  id: number;
  name: string;
  degree: number;
}

const PLANETS = [
  { id: swisseph.SE_SUN, name: 'Sun' },
  { id: swisseph.SE_MOON, name: 'Moon' },
  { id: swisseph.SE_MARS, name: 'Mars' },
  { id: swisseph.SE_MERCURY, name: 'Mercury' },
  { id: swisseph.SE_JUPITER, name: 'Jupiter' },
  { id: swisseph.SE_VENUS, name: 'Venus' },
  { id: swisseph.SE_SATURN, name: 'Saturn' }
];

const SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini',
  'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya',
  'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha',
  'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha',
  'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

function getJulianDate(date: Date, time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  const utcDate = new Date(date);
  utcDate.setHours(hours, minutes);
  
  const year = utcDate.getUTCFullYear();
  const month = utcDate.getUTCMonth() + 1;
  const day = utcDate.getUTCDate();
  const hour = utcDate.getUTCHours() + utcDate.getUTCMinutes() / 60;

  return swisseph.swe_julday(year, month, day, hour, swisseph.SE_GREG_CAL);
}

function getLagna(julianDate: number, lat: number, lng: number): number {
  const flags = swisseph.SEFLG_SIDEREAL | swisseph.SEFLG_NONUT;
  const ascendant = swisseph.swe_calc_ut(julianDate, swisseph.SE_ASC, flags);
  return ascendant[0];
}

function getPlanetaryPositions(julianDate: number): Planet[] {
  const flags = swisseph.SEFLG_SIDEREAL | swisseph.SEFLG_NONUT;
  
  return PLANETS.map(planet => {
    const position = swisseph.swe_calc_ut(julianDate, planet.id, flags);
    return {
      id: planet.id,
      name: planet.name,
      degree: position[0]
    };
  });
}

function getHousePosition(degree: number, lagna: number): number {
  const houseDifference = degree - lagna;
  const normalizedDifference = houseDifference >= 0 ? houseDifference : houseDifference + 360;
  return Math.floor(normalizedDifference / 30) + 1;
}

function getNakshatra(degree: number): { nakshatra: string; pada: number } {
  const totalDegree = degree % 360;
  const nakshatraIndex = Math.floor((totalDegree * 27) / 360);
  const pada = Math.floor(((totalDegree * 27) % 360) / (360 / 27 / 4)) + 1;
  
  return {
    nakshatra: NAKSHATRAS[nakshatraIndex],
    pada
  };
}

function getDarakaraka(positions: Planet[]): Planet {
  // Sort planets by degree in descending order
  const sortedPlanets = [...positions].sort((a, b) => b.degree - a.degree);
  // Darakaraka is the planet with the second-highest degree
  return sortedPlanets[1];
}

export async function calculateDarakaraka(birthDetails: any): Promise<PlanetaryPosition> {
  const { date, time, location } = birthDetails;
  const julianDate = getJulianDate(date, time);
  const lagna = getLagna(julianDate, location.lat, location.lng);
  const planetaryPositions = getPlanetaryPositions(julianDate);
  const darakaraka = getDarakaraka(planetaryPositions);
  
  const signIndex = Math.floor(darakaraka.degree / 30);
  const housePosition = getHousePosition(darakaraka.degree, lagna);
  const { nakshatra, pada } = getNakshatra(darakaraka.degree);

  return {
    planet: darakaraka.name,
    degree: darakaraka.degree,
    sign: SIGNS[signIndex],
    house: housePosition,
    nakshatra,
    pada
  };
}

const INTERPRETATIONS = {
  Sun: {
    career: "Leadership roles, government positions, or administrative work. You have natural authority and excel in positions of power.",
    aspects: {
      Jupiter: "Enhanced leadership abilities and success in administrative roles.",
      Saturn: "Strong discipline and organizational skills in professional life.",
      Mars: "Executive abilities and drive for achievement.",
      Venus: "Diplomatic leadership and success in creative fields.",
      Mercury: "Excellent communication skills in leadership positions.",
      Moon: "Strong public influence and emotional intelligence in leadership."
    }
  },
  Moon: {
    career: "Public service, healthcare, hospitality, or emotional counseling. You have strong intuition and emotional intelligence.",
    aspects: {
      Jupiter: "Success in counseling and public service roles.",
      Saturn: "Deep emotional wisdom and patience in professional life.",
      Mars: "Strong emotional drive and protective instincts.",
      Venus: "Artistic talents and emotional creativity.",
      Mercury: "Excellent communication of emotions and ideas.",
      Sun: "Leadership in emotional or public service roles."
    }
  },
  Mars: {
    career: "Technical fields, military, sports, or engineering. You have strong drive and technical abilities.",
    aspects: {
      Jupiter: "Success in competitive fields and strategic planning.",
      Saturn: "Technical precision and disciplined action.",
      Moon: "Emotional courage and protective instincts.",
      Venus: "Creative use of energy and artistic talents.",
      Mercury: "Technical communication and analytical skills.",
      Sun: "Leadership in technical or competitive fields."
    }
  },
  Mercury: {
    career: "Communication, writing, teaching, or analytical work. You excel in intellectual pursuits.",
    aspects: {
      Jupiter: "Success in education and communication fields.",
      Saturn: "Deep analytical abilities and structured thinking.",
      Mars: "Quick thinking and technical communication skills.",
      Venus: "Artistic communication and creative writing abilities.",
      Moon: "Intuitive communication and emotional intelligence.",
      Sun: "Leadership in intellectual or communication fields."
    }
  },
  Jupiter: {
    career: "Teaching, counseling, law, or spiritual work. You excel in advisory and guidance roles.",
    aspects: {
      Saturn: "Wisdom in professional decisions and long-term planning.",
      Mars: "Dynamic teaching abilities and inspirational leadership.",
      Venus: "Success in creative education and artistic guidance.",
      Mercury: "Excellence in teaching and knowledge transmission.",
      Moon: "Emotional wisdom and counseling abilities.",
      Sun: "Natural leadership in educational or spiritual roles."
    }
  },
  Venus: {
    career: "Arts, entertainment, luxury goods, or relationship counseling. You excel in beauty and harmony-related fields.",
    aspects: {
      Jupiter: "Success in creative and artistic pursuits.",
      Saturn: "Disciplined approach to arts and relationships.",
      Mars: "Dynamic creativity and artistic passion.",
      Mercury: "Artistic communication and creative expression.",
      Moon: "Emotional creativity and artistic intuition.",
      Sun: "Leadership in creative or artistic fields."
    }
  },
  Saturn: {
    career: "Management, real estate, research, or traditional fields. You excel in structured and disciplined work.",
    aspects: {
      Jupiter: "Success through patience and systematic approach.",
      Mars: "Disciplined action and technical expertise.",
      Venus: "Structured creativity and artistic discipline.",
      Mercury: "Deep analytical thinking and research abilities.",
      Moon: "Emotional discipline and practical wisdom.",
      Sun: "Leadership through experience and discipline."
    }
  }
};

export function interpretDarakaraka(position: PlanetaryPosition) {
  const planetInterpretation = INTERPRETATIONS[position.planet as keyof typeof INTERPRETATIONS];
  
  // Get aspects (simplified for example - in real implementation, calculate actual aspects)
  const aspects = Object.entries(planetInterpretation.aspects)
    .filter((_, index) => index < 2) // Just take first two aspects for example
    .map(([planet, interpretation]) => ({
      planet,
      aspect: ['Conjunction', 'Trine', 'Square', 'Opposition'][Math.floor(Math.random() * 4)],
      interpretation
    }));

  return {
    planet: position.planet,
    sign: position.sign,
    house: position.house,
    nakshatra: position.nakshatra,
    pada: position.pada,
    interpretation: planetInterpretation.career,
    aspects
  };
}