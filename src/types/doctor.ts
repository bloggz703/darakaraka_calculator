export interface Doctor {
  id: string;
  name: string;
  address: string;
  postcode: string;
  distance: number;
  specialties: string[];
  phone: string;
  rating: number;
  availability: string;
  nhs: boolean;
}