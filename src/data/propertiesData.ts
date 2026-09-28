import joudImg1 from '../assets/First Projects.jpeg';
import joudImg2 from '../assets/First Projects 2 .jpeg';

// استيراد صور المشروع الثاني (The WOW Tower)
import wowImg1 from '../assets/SecondProject1.webp';
import wowImg2 from '../assets/SecondProject2.webp';
import wowImg3 from '../assets/SecondProject3.webp';
import wowImg4 from '../assets/SecondProject4.webp';
import wowImg5 from '../assets/SecondProject5.webp';
import wowImg6 from '../assets/SecondProject6.webp';

export type PropertyType = 'Apartment' | 'Villa' | 'Penthouse' | 'Townhouse' | 'Commercial' | 'Luxe';
export type ListingCategory = 'buy' | 'rent' | 'projects' | 'commercial';
export type Status = 'Off-plan' | 'Ready';

export interface Property {
  id: string;
  title: string;
  developer: string;
  price: number;
  priceLabel: string;
  type: PropertyType;
  category: ListingCategory;
  status: Status;
  location: string;
  area: string;
  beds: number;
  baths: number;
  size: number; // sqft
  paymentPlan: string;
  handover: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  luxe?: boolean;
  view: string;
  refNo: string;
  completionDate: string;
  listedTime: string;
  description: string;
  images: string[];
  amenities?: string[];
  availableUnits?: string[];
  paymentPlans?: string[];
  eligibility?: string;
  floors?: string;
  serviceCharge?: string;
  furnishing?: string;
  eoi?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  paymentPlan: string;
  location: string;
  image: string;
  tag: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 's1',
    title: 'THE WOW TOWER',
    subtitle: 'A modern mixed-use complex by Mr. Eight Development with captivating wave-like architecture.',
    price: 'AED 1.901M Starting From',
    paymentPlan: 'EOI: 70,000 AED',
    location: 'Dubailand Residence Complex',
    image: wowImg1,
    tag: 'New Launch',
  },
  {
    id: 's2',
    title: 'JOUD TOWER',
    subtitle: 'Exclusive twin-tower luxury residences in Al Mamzar featuring 55 floors of oceanfront living.',
    price: 'AED 1.325M Starting From',
    paymentPlan: '10% Down Payment / 1% Monthly',
    location: 'Al Mamzar, Sharjah',
    image: joudImg1,
    tag: 'Off-Plan',
  },
];

export const properties: Property[] = [
  {
    id: 'wow-tower',
    title: 'THE WOW TOWER',
    developer: 'Mr. Eight Development',
    price: 1901000,
    priceLabel: 'AED 1.901M',
    type: 'Apartment',
    category: 'projects',
    status: 'Off-plan',
    location: 'Dubailand',
    area: 'Dubailand Residence Complex',
    beds: 2,
    baths: 3, // 2 BR = 3 Baths
    size: 376,
    paymentPlan: 'EOI: 70,000 AED / Launch Date Announced Later',
    handover: 'Q3/2029',
    image: wowImg1,
    gallery: [wowImg1, wowImg2, wowImg3, wowImg4, wowImg5, wowImg6],
    featured: true,
    view: 'Community & Urban Landscape',
    refNo: 'FV-WOW01',
    completionDate: 'Q3/2029',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    floors: 'Tower 1 - G+5P+15C+A+22+R',
    serviceCharge: '25.00 AED/ft²',
    furnishing: 'Lux, Semi Furnished with Bosch Kitchen Appliances',
    eoi: '70,000 AED',
    description:
      'The WOW Tower is a modern mixed-use complex by Mr. Eight Development, located in Dubai Land Residence Complex, Dubai. The architecture of the tower is captivating. Its bold, wave-like façade creates an appearance that is both powerful and refined. Smooth lines soften the building’s mass, infusing it with movement and rhythm, making it a graceful and contemporary accent within the urban landscape. The project seamlessly combines premium residential properties, business functions, and everyday conveniences.\n\nThe building comprises a ground floor, five podium levels used for parking, fifteen floors of commercial spaces intended for offices and professional activities, one floor dedicated to an exclusive lounge for office employees, as well as twenty-two residential floors with apartments and a rooftop featuring various leisure areas. The project offers studios and apartments with one and two bedrooms, along with commercial premises. A key feature of all residences is the fully equipped kitchen fitted with built-in appliances from the German brand Bosch. The luxurious interiors are complemented by large panoramic windows. Residents have access to a variety of amenities, including a swimming pool, a gym, and many others. The convenient location ensures quick access to key city destinations, making it an attractive choice for both living and conducting business.',
    availableUnits: [
      'Studio (748,000 – 833,000 AED)',
      '1 BR (1,124,000 – 1,424,000 AED) - 2 Baths',
      '2 BR (1,901,000 – 2,421,000 AED) - 3 Baths',
      'Office (3,041,850 – 6,568,800 AED)',
      'Retail (12,442,500 – 34,701,450 AED)',
    ],
    paymentPlans: [
      'Expression of Interest (EOI): 70,000 AED',
      'The launch date will be announced later',
    ],
    amenities: [
      'Built-in Bosch German Kitchen Appliances',
      'Swimming Pool & Gym Facilities',
      '5 Podium Parking Levels',
      '15 Commercial Office Floors & Exclusive Lounge',
      'Rooftop Leisure Areas & Panoramic Windows',
    ],
    images: [wowImg1, wowImg2, wowImg3, wowImg4, wowImg5, wowImg6],
  },
  {
    id: 'joud-tower',
    title: 'JOUD TOWER',
    developer: 'Joud Developments',
    price: 1325000,
    priceLabel: 'AED 1.325M',
    type: 'Apartment',
    category: 'projects',
    status: 'Off-plan',
    location: 'Al Mamzar',
    area: 'Al Mamzar, Sharjah',
    beds: 2,
    baths: 3, // 2 BR = 3 Baths
    size: 1541,
    paymentPlan: '10% Down Payment / 1% Monthly',
    handover: 'Off-plan',
    image: joudImg1,
    gallery: [joudImg1, joudImg2],
    featured: true,
    view: 'Al Mamzar View',
    refNo: 'FV-JOUD01',
    completionDate: 'Off-plan',
    listedTime: 'Just now',
    eligibility: 'FOR ALL ARAB NATIONALITIES ONLY',
    floors: '55 Floors (B + G + 6P + 48) - Twin Towers (A/B)',
    description:
      'Joud Tower is located in Al Mamzar, Sharjah. A twin-tower development (A/B) featuring 55 floors and 572 residential units with various layouts ranging from 2 Bedrooms up to 5 Bedroom Penthouses. Available exclusively FOR ALL ARAB NATIONALITIES ONLY.',
    availableUnits: [
      '2 Bedrooms - 3 Baths',
      '3 Bedrooms',
      '4 Bedrooms',
      '3/4 Bedrooms + Garden',
      '4 Bedroom Duplex (Joud Villa)',
      '5 Bedroom (Penthouse)',
    ],
    paymentPlans: [
      '10% Down payment and 1% Monthly',
      '40% During construction and 60% (cash/mortgage) on handover',
      '10% Down payment and 90% during construction',
    ],
    amenities: [
      'Swimming pool + Kids pool',
      '2 Gyms + Steam room + Sauna (men/women)',
      'Padel court',
      'Jogging track',
      'Multipurpose hall',
      'Café',
      'Nursery',
      'Kids play area',
      'Prayer room (men/women)',
    ],
    images: [joudImg1, joudImg2],
  },
];

export const locations = [
  'All Locations',
  'Al Mamzar',
  'Dubailand',
];

export const propertyTypes: ('All Types' | PropertyType)[] = [
  'All Types',
  'Apartment',
];

export const bedroomOptions = ['Any', '2'];

export const formatPrice = (n: number) => {
  if (n >= 1_000_000) return `AED ${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 2)}M`;
  if (n >= 1_000) return `AED ${(n / 1_000).toFixed(0)}K`;
  return `AED ${n.toLocaleString()}`;
};