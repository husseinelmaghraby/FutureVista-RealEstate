import hero1 from '../assets/hero1.jpg.jpeg';
import hero2 from '../assets/hero2.jpg.jpeg';
import hero3 from '../assets/hero3.jpg.jpeg';
import hero4 from '../assets/hero4.jpg.jpeg';

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

const img = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const heroSlides: HeroSlide[] = [
  {
    id: 's1',
    title: 'Mercedes-Benz Places Binghatti City',
    subtitle: 'Where automotive legend meets architectural mastery in the heart of Business Bay.',
    price: 'AED 1.2M Starting From',
    paymentPlan: '70 / 30 % Payment Plan',
    location: 'Business Bay, Dubai',
    image: hero1,
    tag: 'Off-Plan Launch',
  },
  {
    id: 's2',
    title: 'Bugatti Residences by Binghatti',
    subtitle: 'Curated hyper-luxury living with bespoke interiors and signature car elevator.',
    price: 'AED 4.5M Starting From',
    paymentPlan: '60 / 40 % Payment Plan',
    location: 'Business Bay, Dubai',
    image: hero2,
    tag: 'Hyper-Luxury',
  },
  {
    id: 's3',
    title: 'Aurora Tower at Dubai Marina',
    subtitle: 'Waterfront skyline living with private beach access and infinity pool.',
    price: 'AED 890K Starting From',
    paymentPlan: 'Post-Handover 50 / 50',
    location: 'Dubai Marina',
    image: hero3,
    tag: 'Waterfront',
  },
  {
    id: 's4',
    title: 'The Oasis Villas by Emaar',
    subtitle: 'Gated community of standalone villas surrounded by lush green wadis.',
    price: 'AED 3.8M Starting From',
    paymentPlan: '40 / 60 % Payment Plan',
    location: 'Dubailand',
    image: hero4,
    tag: 'Family Living',
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
    baths: 2,
    size: 376,
    paymentPlan: 'EOI: 70,000 AED / Resale after 24%',
    handover: 'Q3/2029',
    image: wowImg1,
    gallery: [wowImg1, wowImg2, wowImg3, wowImg4, wowImg5, wowImg6],
    featured: true,
    view: 'Community & Skyline View',
    refNo: 'FV-WOW01',
    completionDate: 'Q3/2029',
    listedTime: 'Just now',
    eligibility: 'Freehold - Ownership for All Nationalities',
    floors: 'Tower 1 - G+5P+15C+A+22+R',
    description:
      'The WOW Tower by Mr. Eight Development is a brand-new residential launch located in Dubailand Residence Complex. Featuring high-end luxury apartments, semi-furnished units with premium kitchen appliances, and freehold ownership.',
    availableUnits: [
      'Studio (748,000 – 833,000 AED)',
      '1 BR (1,124,000 – 1,424,000 AED)',
      '2 BR (1,901,000 – 2,421,000 AED)',
      'Office (3,041,850 – 6,568,800 AED)',
      'Retail (12,442,500 – 34,701,450 AED)',
    ],
    paymentPlans: [
      'Expression of Interest (EOI): 70,000 AED',
      'Resale Allowed After 24% Payment',
    ],
    amenities: [
      'Luxurious Semi-Furnished Apartments',
      'Fully Fitted Kitchen Appliances',
      'Service Charge: 25.00 AED/ft²',
      'Retail & Office Spaces',
      'Modern High-Rise Facilities',
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
    baths: 2,
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
      '2 Bedrooms',
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
  {
    id: 'p1',
    title: 'Mercedes-Benz Places Binghatti City',
    developer: 'Binghatti',
    price: 1200000,
    priceLabel: 'AED 1.2M',
    type: 'Apartment',
    category: 'projects',
    status: 'Off-plan',
    location: 'Business Bay',
    area: 'Business Bay, Dubai',
    beds: 1,
    baths: 2,
    size: 720,
    paymentPlan: '70 / 30',
    handover: 'Q4 2027',
    image: img('1545324877-3b1c4d3e8e1e'),
    gallery: [img('1545324877-3b1c4d3e8e1e'), img('1502672023488-70e25813eb80')],
    featured: true,
    view: 'Skyline',
    refNo: 'FV-P1001',
    completionDate: 'Q4 2027',
    listedTime: '2 days ago',
    description:
      'Mercedes-Benz Places Binghatti City is an iconic off-plan tower in Business Bay blending automotive design language with architectural sophistication. The residence features smart-home integration, premium finishes, and access to a private members-style clubhouse.',
    images: [
      img('1545324877-3b1c4d3e8e1e'),
      img('1502672023488-70e25813eb80'),
      img('1512920252759-c0ebe1fc0b1e'),
      img('1600585154340-be6161a8a0ee'),
      img('1600566753190-7f343a4e2e3e'),
    ],
  },
  {
    id: 'p2',
    title: 'Bugatti Residences Penthouse',
    developer: 'Binghatti',
    price: 18500000,
    priceLabel: 'AED 18.5M',
    type: 'Penthouse',
    category: 'buy',
    status: 'Off-plan',
    location: 'Business Bay',
    area: 'Business Bay, Dubai',
    beds: 4,
    baths: 5,
    size: 6200,
    paymentPlan: '60 / 40',
    handover: 'Q2 2026',
    image: img('1600585154340-be6161a8a0ee'),
    gallery: [img('1600585154340-be6161a8a0ee'), img('1600566753190-7f343a4e2e3e')],
    featured: true,
    luxe: true,
    view: 'Burj Khalifa',
    refNo: 'FV-P1002',
    completionDate: 'Q2 2026',
    listedTime: '5 hours ago',
    description:
      'A hyper-luxury penthouse at Bugatti Residences featuring bespoke interiors, a private car elevator, and panoramic views of the Dubai Canal and Burj Khalifa.',
    images: [
      img('1600585154340-be6161a8a0ee'),
      img('1600566753190-7f343a4e2e3e'),
      img('1600585154526-9d3a8b5e1e1e'),
      img('1600595849228-3d6d6c5c1e1e'),
    ],
  },
  {
    id: 'p3',
    title: 'Aurora Tower 1-Bed Waterfront',
    developer: 'Aurora Developments',
    price: 890000,
    priceLabel: 'AED 890K',
    type: 'Apartment',
    category: 'projects',
    status: 'Off-plan',
    location: 'Dubai Marina',
    area: 'Dubai Marina',
    beds: 1,
    baths: 1,
    size: 540,
    paymentPlan: '50 / 50 Post-Handover',
    handover: 'Q1 2027',
    image: img('1512920252759-c0ebe1fc0b1e'),
    gallery: [img('1512920252759-c0ebe1fc0b1e'), img('1502672260906-1ffe76761e3e')],
    view: 'Marina',
    refNo: 'FV-P1003',
    completionDate: 'Q1 2027',
    listedTime: '1 day ago',
    description:
      'Aurora Tower offers waterfront skyline living at Dubai Marina with private beach access, infinity pool, and contemporary 1-bedroom residences designed for modern lifestyles.',
    images: [
      img('1512920252759-c0ebe1fc0b1e'),
      img('1502672260906-1ffe76761e3e'),
      img('1502672023488-70e25813eb80'),
    ],
  },
  {
    id: 'p4',
    title: 'The Oasis 4-Bed Villa',
    developer: 'Emaar',
    price: 3800000,
    priceLabel: 'AED 3.8M',
    type: 'Villa',
    category: 'buy',
    status: 'Off-plan',
    location: 'Dubailand',
    area: 'The Oasis, Dubailand',
    beds: 4,
    baths: 5,
    size: 3200,
    paymentPlan: '40 / 60',
    handover: 'Q3 2027',
    image: img('1564013799919-ab6000fcec6c'),
    gallery: [img('1564013799919-ab6000fcec6c'), img('1600595849228-3d6d6c5c1e1e')],
    featured: true,
    view: 'Garden',
    refNo: 'FV-P1004',
    completionDate: 'Q3 2027',
    listedTime: '3 days ago',
    description:
      'The Oasis by Emaar is a gated community of standalone villas surrounded by lush green wadis, offering a serene family lifestyle minutes from the city.',
    images: [
      img('1564013799919-ab6000fcec6c'),
      img('1600595849228-3d6d6c5c1e1e'),
      img('1600585154340-be6161a8a0ee'),
    ],
  },
  {
    id: 'p5',
    title: 'Marina Gate 2-Bed for Rent',
    developer: 'Select Group',
    price: 95000,
    priceLabel: 'AED 95K / yr',
    type: 'Apartment',
    category: 'rent',
    status: 'Ready',
    location: 'Dubai Marina',
    area: 'Dubai Marina',
    beds: 2,
    baths: 2,
    size: 1100,
    paymentPlan: 'Yearly',
    handover: 'Ready Now',
    image: img('1502672260906-1ffe76761e3b'),
    gallery: [img('1502672260906-1ffe76761e3b'), img('1512920252759-c0ebe1fc0b1e')],
    view: 'Marina',
    refNo: 'FV-P1005',
    completionDate: 'Ready',
    listedTime: '6 hours ago',
    description:
      'Marina Gate is a landmark residential tower offering a 2-bedroom apartment with full marina views, premium amenities, and direct access to the Marina promenade.',
    images: [
      img('1502672260906-1ffe76761e3b'),
      img('1512920252759-c0ebe1fc0b1e'),
      img('1502672023488-70e25813eb80'),
    ],
  },
  {
    id: 'p6',
    title: 'Downtown Address Penthouse',
    developer: 'Emaar',
    price: 12000000,
    priceLabel: 'AED 12M',
    type: 'Penthouse',
    category: 'buy',
    status: 'Ready',
    location: 'Downtown Dubai',
    area: 'Downtown Dubai',
    beds: 3,
    baths: 4,
    size: 4100,
    paymentPlan: 'Cash / Mortgage',
    handover: 'Ready',
    image: img('1600585154526-9d3a8b5e1e1e'),
    gallery: [img('1600585154526-9d3a8b5e1e1e'), img('1600566753190-7f343a4e2e3e')],
    featured: true,
    luxe: true,
    view: 'Burj Khalifa',
    refNo: 'FV-P1006',
    completionDate: 'Ready',
    listedTime: '1 week ago',
    description:
      'A signature Downtown Address penthouse offering uninterrupted views of Burj Khalifa and the Dubai Fountain, with private elevator access and hotel-grade services.',
    images: [
      img('1600585154526-9d3a8b5e1e1e'),
      img('1600566753190-7f343a4e2e3e'),
      img('1600585154340-be6161a8a0ee'),
      img('1600595849228-3d6d6c5c1e1e'),
    ],
  },
  {
    id: 'p7',
    title: 'JLT Commercial Office Floor',
    developer: 'DMCC',
    price: 4500000,
    priceLabel: 'AED 4.5M',
    type: 'Commercial',
    category: 'buy',
    status: 'Ready',
    location: 'Jumeirah Lakes Towers',
    area: 'JLT, Dubai',
    beds: 0,
    baths: 2,
    size: 2400,
    paymentPlan: 'Cash',
    handover: 'Ready',
    image: img('1497366216548-37526070297c'),
    gallery: [img('1497366216548-37526070297c')],
    view: 'Lake',
    refNo: 'FV-P1007',
    completionDate: 'Ready',
    listedTime: '4 days ago',
    description:
      'A Grade-A commercial office floor in JLT with open-plan layout, raised flooring, and panoramic lake views, ideal for regional HQs.',
    images: [
      img('1497366216548-37526070297c'),
      img('1497366812724-759c0d48e9df'),
      img('1497366216548-37526070297c'),
    ],
  },
  {
    id: 'p8',
    title: 'Palm Crescent 5-Bed Signature Villa',
    developer: 'Nakheel',
    price: 24000000,
    priceLabel: 'AED 24M',
    type: 'Villa',
    category: 'buy',
    status: 'Ready',
    location: 'Palm Jumeirah',
    area: 'Palm Jumeirah',
    beds: 5,
    baths: 6,
    size: 7800,
    paymentPlan: 'Cash',
    handover: 'Ready',
    image: img('1600585154340-be6161a8a0ee'),
    gallery: [img('1600585154340-be6161a8a0ee'), img('1600566753190-7f343a4e2e3e')],
    featured: true,
    luxe: true,
    view: 'Sea',
    refNo: 'FV-P1008',
    completionDate: 'Ready',
    listedTime: '2 weeks ago',
    description:
      'A signature 5-bedroom villa on Palm Crescent with private beach, infinity pool, and uninterrupted sea views. Designed by an award-winning interior studio.',
    images: [
      img('1600585154340-be6161a8a0ee'),
      img('1600566753190-7f343a4e2e3e'),
      img('1600585154526-9d3a8b5e1e1e'),
      img('1600595849228-3d6d6c5c1e1e'),
    ],
  },
  {
    id: 'p9',
    title: 'Creek Beach 1-Bed Off-Plan',
    developer: 'Emaar',
    price: 720000,
    priceLabel: 'AED 720K',
    type: 'Apartment',
    category: 'projects',
    status: 'Off-plan',
    location: 'Dubai Creek Harbour',
    area: 'Dubai Creek Harbour',
    beds: 1,
    baths: 1,
    size: 480,
    paymentPlan: '70 / 30',
    handover: 'Q2 2028',
    image: img('1512920252759-c0ebe1fc0b1e'),
    gallery: [img('1512920252759-c0ebe1fc0b1e')],
    view: 'Creek',
    refNo: 'FV-P1009',
    completionDate: 'Q2 2028',
    listedTime: '1 day ago',
    description:
      'Creek Beach by Emaar offers beachfront off-plan living at Dubai Creek Harbour with a 70/30 payment plan and direct access to the Creek promenade.',
    images: [
      img('1512920252759-c0ebe1fc0b1e'),
      img('1502672023488-70e25813eb80'),
      img('1502672260906-1ffe76761e3e'),
    ],
  },
  {
    id: 'p10',
    title: 'Bluewaters Bay 3-Bed Rent',
    developer: 'Meraas',
    price: 185000,
    priceLabel: 'AED 185K / yr',
    type: 'Apartment',
    category: 'rent',
    status: 'Ready',
    location: 'Bluewaters Island',
    area: 'Bluewaters Island',
    beds: 3,
    baths: 3,
    size: 1800,
    paymentPlan: 'Yearly',
    handover: 'Ready Now',
    image: img('1502672023488-70e25813eb80'),
    gallery: [img('1502672023488-70e25813eb80')],
    view: 'Sea',
    refNo: 'FV-P1010',
    completionDate: 'Ready',
    listedTime: '3 hours ago',
    description:
      'A 3-bedroom apartment on Bluewaters Island with sweeping sea and Ain Dubai views, fully fitted and available for annual rent.',
    images: [
      img('1502672023488-70e25813eb80'),
      img('1512920252759-c0ebe1fc0b1e'),
      img('1502672260906-1ffe76761e3e'),
    ],
  },
  {
    id: 'p11',
    title: 'District One Mansion',
    developer: 'Meydan',
    price: 32000000,
    priceLabel: 'AED 32M',
    type: 'Villa',
    category: 'buy',
    status: 'Ready',
    location: 'Meydan City',
    area: 'Meydan City',
    beds: 6,
    baths: 7,
    size: 9500,
    paymentPlan: 'Cash',
    handover: 'Ready',
    image: img('1600566753190-7f343a4e2e3e'),
    gallery: [img('1600566753190-7f343a4e2e3e')],
    luxe: true,
    view: 'Lagoon',
    refNo: 'FV-P1011',
    completionDate: 'Ready',
    listedTime: '5 days ago',
    description:
      'A District One mansion offering crystalline lagoon views, private pool, home cinema, and a 6-bedroom layout designed for ultra-luxury family living.',
    images: [
      img('1600566753190-7f343a4e2e3e'),
      img('1600585154340-be6161a8a0ee'),
      img('1600595849228-3d6d6c5c1e1e'),
    ],
  },
  {
    id: 'p12',
    title: 'Business Bay Studio for Rent',
    developer: 'Select Group',
    price: 52000,
    priceLabel: 'AED 52K / yr',
    type: 'Apartment',
    category: 'rent',
    status: 'Ready',
    location: 'Business Bay',
    area: 'Business Bay, Dubai',
    beds: 0,
    baths: 1,
    size: 380,
    paymentPlan: 'Yearly',
    handover: 'Ready Now',
    image: img('1493809842364-78cea17dee48'),
    gallery: [img('1493809842364-78cea17dee48')],
    view: 'City',
    refNo: 'FV-P1012',
    completionDate: 'Ready',
    listedTime: '12 hours ago',
    description:
      'A compact studio in Business Bay ideal for young professionals, with access to a pool, gym, and 24/7 concierge. Available for annual rent.',
    images: [
      img('1493809842364-78cea17dee48'),
      img('1497366216548-37526070297c'),
    ],
  },
  {
    id: 'p13',
    title: 'Jumeirah Village Triangle Townhouse',
    developer: 'Nakheel',
    price: 2100000,
    priceLabel: 'AED 2.1M',
    type: 'Townhouse',
    category: 'buy',
    status: 'Ready',
    location: 'Jumeirah Village',
    area: 'JVC, Dubai',
    beds: 3,
    baths: 3,
    size: 1900,
    paymentPlan: 'Cash / Mortgage',
    handover: 'Ready',
    image: img('1564013799919-ab6000fcec6c'),
    gallery: [img('1564013799919-ab6000fcec6c')],
    view: 'Community',
    refNo: 'FV-P1013',
    completionDate: 'Ready',
    listedTime: '2 days ago',
    description:
      'A 3-bedroom townhouse in Jumeirah Village Triangle with a private garden, rooftop terrace, and modern open-plan interiors. Ready to move in.',
    images: [
      img('1564013799919-ab6000fcec6c'),
      img('1600595849228-3d6d6c5c1e1e'),
    ],
  },
  {
    id: 'p14',
    title: 'Sobha Hartland 2-Bed Off-Plan',
    developer: 'Sobha',
    price: 1650000,
    priceLabel: 'AED 1.65M',
    type: 'Apartment',
    category: 'projects',
    status: 'Off-plan',
    location: 'Mohammed Bin Rashid City',
    area: 'MBR City',
    beds: 2,
    baths: 2,
    size: 980,
    paymentPlan: '50 / 50',
    handover: 'Q4 2026',
    image: img('1545324877-3b1c4d3e8e1e'),
    gallery: [img('1545324877-3b1c4d3e8e1e')],
    view: 'Lagoon',
    refNo: 'FV-P1014',
    completionDate: 'Q4 2026',
    listedTime: '4 hours ago',
    description:
      'Sobha Hartland offers a 2-bedroom off-plan residence with lagoon views, lush landscaping, and a 50/50 payment plan in the heart of MBR City.',
    images: [
      img('1545324877-3b1c4d3e8e1e'),
      img('1502672023488-70e25813eb80'),
      img('1512920252759-c0ebe1fc0b1e'),
    ],
  },
];

export const locations = [
  'All Locations',
  'Al Mamzar',
  'Business Bay',
  'Downtown Dubai',
  'Dubai Marina',
  'Palm Jumeirah',
  'Dubailand',
  'Jumeirah Village',
  'Bluewaters Island',
  'Dubai Creek Harbour',
  'Meydan City',
  'JLT',
];

export const propertyTypes: ('All Types' | PropertyType)[] = [
  'All Types',
  'Apartment',
  'Villa',
  'Penthouse',
  'Townhouse',
  'Commercial',
  'Luxe',
];

export const bedroomOptions = ['Any', 'Studio', '1', '2', '3', '4', '5+'];

export const formatPrice = (n: number) => {
  if (n >= 1_000_000) return `AED ${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 2)}M`;
  if (n >= 1_000) return `AED ${(n / 1_000).toFixed(0)}K`;
  return `AED ${n.toLocaleString()}`;
};