import type { Doctor } from '../types/doctor';

export const leicesterDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Westcotes Health Centre',
    address: 'Fosse Road South',
    postcode: 'LE3 0LP',
    distance: 0.5,
    specialties: ['General Practice', 'Minor Surgery', 'Family Planning'],
    phone: '0116 295 3100',
    rating: 4.5,
    availability: 'Accepting new patients',
    nhs: true
  },
  {
    id: '2',
    name: 'Merlyn Vaz Health Centre',
    address: 'Spinney Hill Road',
    postcode: 'LE5 3GH',
    distance: 0.8,
    specialties: ['General Practice', 'Women\'s Health', 'Child Health'],
    phone: '0116 295 8750',
    rating: 4.8,
    availability: 'Limited availability',
    nhs: true
  },
  {
    id: '3',
    name: 'East Leicester Medical Practice',
    address: 'East Park Road',
    postcode: 'LE5 4QB',
    distance: 1.2,
    specialties: ['General Practice', 'Diabetes Care', 'Respiratory Medicine'],
    phone: '0116 273 1261',
    rating: 4.3,
    availability: 'Accepting new patients',
    nhs: true
  },
  {
    id: '4',
    name: 'Sayeed Medical Centre',
    address: 'Melton Road',
    postcode: 'LE4 6PN',
    distance: 1.5,
    specialties: ['General Practice', 'Travel Clinic', 'Vaccinations'],
    phone: '0116 266 6585',
    rating: 4.6,
    availability: 'Accepting new patients',
    nhs: true
  },
  {
    id: '5',
    name: 'Beaumont Lodge Medical Practice',
    address: 'Beaumont Leys Lane',
    postcode: 'LE4 2BB',
    distance: 1.7,
    specialties: ['General Practice', 'Mental Health', 'Elderly Care'],
    phone: '0116 235 0368',
    rating: 4.4,
    availability: 'Limited availability',
    nhs: true
  },
  {
    id: '6',
    name: 'Willowbrook Medical Centre',
    address: 'Thurmaston Lane',
    postcode: 'LE5 0TE',
    distance: 2.0,
    specialties: ['General Practice', 'Chronic Disease Management'],
    phone: '0116 246 1460',
    rating: 4.7,
    availability: 'Accepting new patients',
    nhs: true
  },
  {
    id: '7',
    name: 'Hockley Farm Medical Practice',
    address: 'Hockley Farm Road',
    postcode: 'LE3 1HN',
    distance: 2.3,
    specialties: ['General Practice', 'Minor Surgery', 'Family Planning'],
    phone: '0116 233 0249',
    rating: 4.5,
    availability: 'Limited availability',
    nhs: true
  },
  {
    id: '8',
    name: 'Nuffield Health Leicester Hospital',
    address: 'Scraptoft Lane',
    postcode: 'LE5 1HY',
    distance: 2.5,
    specialties: ['Private GP Services', 'Specialist Consultations', 'Diagnostic Services'],
    phone: '0116 276 9401',
    rating: 4.9,
    availability: 'Accepting new patients',
    nhs: false
  },
  {
    id: '9',
    name: 'Spire Leicester Hospital',
    address: 'Gartree Road',
    postcode: 'LE2 2FF',
    distance: 2.8,
    specialties: ['Private GP Services', 'Specialist Care', 'Surgery'],
    phone: '0116 265 3000',
    rating: 4.8,
    availability: 'Accepting new patients',
    nhs: false
  },
  {
    id: '10',
    name: 'Rushey Mead Health Centre',
    address: 'Rushey Mead',
    postcode: 'LE4 7ZY',
    distance: 3.0,
    specialties: ['General Practice', 'Child Health', 'Women\'s Health'],
    phone: '0116 266 1850',
    rating: 4.4,
    availability: 'Accepting new patients',
    nhs: true
  }
];