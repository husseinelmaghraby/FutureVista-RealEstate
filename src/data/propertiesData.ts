import companyLogo from '../assets/logofuture.png';
import joudImg1 from '../assets/First Projects.jpeg';
import joudImg2 from '../assets/First Projects 2 .jpeg';

// استيراد صور المشروع الثاني (The WOW Tower)
import wowImg1 from '../assets/SecondProject1.webp';
import wowImg2 from '../assets/SecondProject2.webp';
import wowImg3 from '../assets/SecondProject3.webp';
import wowImg4 from '../assets/SecondProject4.webp';
import wowImg5 from '../assets/SecondProject5.webp';
import wowImg6 from '../assets/SecondProject6.webp';

// استيراد صور المشروع الثالث (Eywa Way of Water)
import eywaImg1 from '../assets/Project3-1.webp';
import eywaImg2 from '../assets/Project3-2.webp';
import eywaImg3 from '../assets/Project3-3.webp';
import eywaImg4 from '../assets/Project3-4.webp';
import eywaImg5 from '../assets/Project3-5.webp';
import eywaImg6 from '../assets/Project3-6.webp';
import eywaImg7 from '../assets/Project3-7.webp';

// استيراد صور المشروع الرابع (Al Mamsha Souks)
import mamshaImg1 from '../assets/Project4-1.webp';
import mamshaImg2 from '../assets/Project4-2.webp';
import mamshaImg3 from '../assets/Project4-3.webp';
import mamshaImg4 from '../assets/Project4-4.webp';
import mamshaImg5 from '../assets/Project4-5.webp';
import mamshaImg6 from '../assets/Project4-6.webp';
import mamshaImg7 from '../assets/Project4-7.webp';
import mamshaImg8 from '../assets/Project4-8.webp';

// استيراد صور المشروع الخامس (Binghatti Cullinan)
import cullinanImg1 from '../assets/Projects5-1.webp';
import cullinanImg2 from '../assets/Projects5-2.webp';
import cullinanImg3 from '../assets/Projects5-3.webp';
import cullinanImg4 from '../assets/Projects5-4.webp';
import cullinanImg5 from '../assets/Projects5-5.webp';
import cullinanImg6 from '../assets/Projects5-6.webp';
import cullinanImg7 from '../assets/Projects5-7.webp';
import cullinanImg8 from '../assets/Projects5-8.webp';

// استيراد صور المشروع السادس (Enta Mina)
import entaImg1 from '../assets/Projects6-1.webp';
import entaImg2 from '../assets/Projects6-2.webp';
import entaImg3 from '../assets/Projects6-3.webp';
import entaImg4 from '../assets/Projects6-4.webp';
import entaImg5 from '../assets/Projects6-5.webp';
import entaImg6 from '../assets/Projects6-6.webp';
import entaImg7 from '../assets/Projects6-7.webp';
import entaImg8 from '../assets/Projects6-8.webp';
import entaImg9 from '../assets/Projects6-9.webp';

// استيراد صور المشروع السابع (D Villas)
import dvillasImg1 from '../assets/Projects7-1.webp';
import dvillasImg2 from '../assets/Projects7-2.webp';
import dvillasImg3 from '../assets/Projects7-3.webp';
import dvillasImg4 from '../assets/Projects7-4.webp';
import dvillasImg5 from '../assets/Projects7-5.webp';
import dvillasImg6 from '../assets/Projects7-6.webp';

// استيراد صور المشروع الثامن (Palace Villas Ostra)
import ostraImg1 from '../assets/Projects8-1.webp';
import ostraImg2 from '../assets/Projects8-2.webp';
import ostraImg3 from '../assets/Projects8-3.webp';
import ostraImg4 from '../assets/Projects8-4.webp';
import ostraImg5 from '../assets/Projects8-5.webp';
import ostraImg6 from '../assets/Projects8-6.webp';
import ostraImg7 from '../assets/Projects8-7.webp';
import ostraImg8 from '../assets/Projects8-8.webp';
import ostraImg9 from '../assets/Projects8-9.webp';
import ostraImg10 from '../assets/Projects8-10.webp';

// استيراد صور المشروع التاسع (Samara)
import samaraImg1 from '../assets/Projects9-1.webp';
import samaraImg2 from '../assets/Projects9-2.webp';
import samaraImg3 from '../assets/Projects9-3.webp';
import samaraImg4 from '../assets/Projects9-4.webp';
import samaraImg5 from '../assets/Projects9-5.webp';

// استيراد صور المشروع العاشر (Elwood Estates)
import elwoodImg1 from '../assets/Projects10-1.webp';
import elwoodImg2 from '../assets/Projects10-2.webp';
import elwoodImg3 from '../assets/Projects10-3.webp';
import elwoodImg4 from '../assets/Projects10-4.webp';
import elwoodImg5 from '../assets/Projects10-5.webp';
import elwoodImg6 from '../assets/Projects10-6.webp';
import elwoodImg7 from '../assets/Projects10-7.webp';
import elwoodImg8 from '../assets/Projects10-8.webp';
import elwoodImg9 from '../assets/Projects10-9.webp';
import elwoodImg10 from '../assets/Projects10-10.webp';
import elwoodImg11 from '../assets/Projects10-11.webp';
import elwoodImg12 from '../assets/Projects10-12.webp';
import elwoodImg13 from '../assets/Projects10-13.webp';
import elwoodImg14 from '../assets/Projects10-14.webp';
import elwoodImg15 from '../assets/Projects10-15.webp';

export type PropertyType = 'Apartment' | 'Villa' | 'Penthouse' | 'Townhouse' | 'Commercial' | 'Luxe';
export type ListingCategory = string | string[];
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
  tags?: string[];
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
  {
    id: 'enta-mina',
    title: 'ENTA MINA',
    subtitle: 'A contemporary waterfront space focused on a calm rhythm of life in Mina Al Arab.',
    price: 'AED 1.721M Starting From',
    paymentPlan: 'Resale allowed after 30%',
    location: 'Mina Al Arab, Ras Al Khaimah',
    image: entaImg1,
    tag: 'New Launch',
  },
];

export const properties: Property[] = [
  {
    id: 'wow-tower',
    title: 'THE WOW TOWER',
    developer: 'Mr. Eight Development',
    price: 748000,
    priceLabel: 'AED 748k',
    type: 'Apartment',
    category: ['buy', 'projects'],
    status: 'Off-plan',
    location: 'Dubailand',
    area: 'Dubailand Residence Complex',
    beds: 0,
    baths: 1, // 1 BR = 1 Baths
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
    category: ['buy', 'projects'],
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
  {
    id: 'eywa-way-of-water',
    title: 'EYWA WAY OF WATER',
    developer: 'R.evolution',
    price: 9707652,
    priceLabel: 'AED 9.7M Starting From',
    type: 'Apartment',
    category: ['buy', 'projects'],
    status: 'Off-plan',
    location: 'Business Bay',
    area: 'Business Bay, Dubai',
    beds: 2,
    baths: 3,
    size: 2150,
    paymentPlan: 'Resale allowed after 40%',
    handover: 'Q3/2028',
    image: eywaImg1,
    gallery: [eywaImg1, eywaImg2, eywaImg3, eywaImg4, eywaImg5, eywaImg6, eywaImg7],
    featured: true,
    luxe: true,
    tags: ['signature'],
    view: 'Water & Skyline View',
    refNo: 'FV-EYWA01',
    completionDate: 'Q3/2028',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    floors: 'Building 1 - B+G+3P+24',
    serviceCharge: '35.00 AED/ft²',
    furnishing: 'Semi Furnished',
    description:
      'Eywa Way of Water is a residential complex by R.evolution. A modern premium-class building with 65 residences, including 3 duplexes and 1 penthouse, embodies the philosophy of “Wild Luxury,” where nature and technology create a harmonious living space.\n\nThe architecture of Eywa Way of Water is inspired by natural forms and the pursuit of harmony with the environment. Smooth lines, greenery, and natural textures shape the look of a living, breathing building.\n\nThe complex offers apartments with 2-5 bedrooms. The concept resembles a tree, where every detail — from light to panoramic glazing — fills the space with air and natural energy.\n\nInteriors are designed with a focus on quality and sustainability: durable, non-toxic materials, marble and parquet flooring, natural textures, and soft tones create an atmosphere of refined comfort.\n\nResidents of Eywa Way of Water have access to premium amenities: a spa and fitness center with a yoga studio, various types of saunas and a Japanese bath, swimming and infinity pools, a tea house, library, music lounge, children’s area, open-air cinema with a waterfall, and concierge services.',
    availableUnits: [
      '2 BR (from 9,707,652 AED) - 2,150 sq.ft.',
      '3 BR (from 31,905,317 AED) - 4,785 sq.ft.',
      '4 BR (from 37,661,508 AED) - 5,693 sq.ft.',
      '5 BR (from 80,012,051 AED) - 10,027 sq.ft.',
    ],
    paymentPlans: [
      'Resale allowed after 40%',
      'Completion: Q3/2028',
    ],
    amenities: [
      'Spa & fitness center with yoga studio',
      'Various types of saunas & Japanese bath',
      'Swimming & infinity pools',
      'Tea house, library & music lounge',
      'Children’s area & open-air cinema with waterfall',
      'Concierge services',
    ],
    images: [eywaImg1, eywaImg2, eywaImg3, eywaImg4, eywaImg5, eywaImg6, eywaImg7],
  },
  {
    id: 'al-mamsha-souks',
    title: 'AL MAMSHA SOUKS',
    developer: 'Alef',
    price: 729000,
    priceLabel: 'AED 729k Starting From',
    type: 'Apartment',
    category: ['buy', 'projects'],
    status: 'Ready',
    location: 'Sharjah',
    area: 'Al Mamsha, Sharjah',
    beds: 1,
    baths: 2,
    size: 720,
    paymentPlan: 'Ready to Move / Modern Community',
    handover: 'Ready',
    image: mamshaImg1,
    gallery: [mamshaImg1, mamshaImg2, mamshaImg3, mamshaImg4, mamshaImg5, mamshaImg6, mamshaImg7, mamshaImg8],
    featured: true,
    view: 'Community & Greenery View',
    refNo: 'FV-MAMSHA01',
    completionDate: 'Ready',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    floors: '33 Buildings (G + 7 to 9 Floors)',
    serviceCharge: '10.00 AED/ft²',
    furnishing: 'Semi Furnished',
    description:
      'Al Mamsha Souks is the first phase of the Al Mamsha residential project from the developer Alef in the heart of Sharjah. The project is inspired by the architecture of the old bazaars in the Emirate of Sharjah and is designed with the latest technology in accordance with the requirements of environmental protection, which enhances human health and well-being through the use of shaded footpaths in harmony with the architecture.\n\nThe complex includes 33 buildings, consisting of ground floors and 7-9 residential floors. The exterior of the buildings is characterized by a modern and elegant design, organically integrated into the landscape, complemented by beautiful greenery and water elements, creating a calm and refreshing atmosphere. The project includes studios and apartments with 1-3 bedrooms, as well as commercial premises.\n\nResidents have access to a state-of-the-art gym and swimming pool, as well as a lively shopping area. Strategically located: just 2 minutes to University City of Sharjah, 4 minutes to Sheikh Mohammad Bin Zayed Road, 5 minutes to Sharjah School\'s Complex, 06 Mall and Sharjah International Airport, and 15 minutes to Dubai International Airport.',
    availableUnits: [
      'Studio (549,000 – 659,000 AED) - 401 sq.ft.',
      '1 BR (729,000 – 1,078,800 AED)',
      '2 BR (1,639,000 – 1,639,000 AED)',
    ],
    paymentPlans: [
      'Resale allowed after 35%',
      'Status: Ready',
    ],
    amenities: [
      'State-of-the-art gym & swimming pool',
      'Lively shopping area & retail souks',
      'Shaded footpaths & environmental landscape',
      'Water elements & beautiful greenery',
      'Strategic location near University City & Airports',
    ],
    images: [mamshaImg1, mamshaImg2, mamshaImg3, mamshaImg4, mamshaImg5, mamshaImg6, mamshaImg7, mamshaImg8],
  },
  {
    id: 'binghatti-cullinan',
    title: 'BINGHATTI CULLINAN',
    developer: 'Binghatti Developers',
    price: 1399999,
    priceLabel: 'AED 1.4M Starting From',
    type: 'Apartment',
    category: ['buy', 'projects'],
    status: 'Off-plan',
    location: 'Al Jaddaf, Dubai',
    area: 'Al Jaddaf, Dubai',
    beds: 1,
    baths: 2,
    size: 677,
    paymentPlan: 'Flexible Payment Plan',
    handover: 'Q3/2027',
    image: cullinanImg1,
    gallery: [cullinanImg1, cullinanImg2, cullinanImg3, cullinanImg4, cullinanImg5, cullinanImg6, cullinanImg7, cullinanImg8],
    featured: true,
    view: 'Community & City Skyline View',
    refNo: 'FV-CULLINAN01',
    completionDate: 'Q3/2027',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    floors: 'B + G + 4P + 14 Floors + Roof',
    serviceCharge: '16.00 AED/ft²',
    furnishing: 'Semi Furnished with Kitchen Appliances',
    description:
      'Binghatti Cullinan is a luxurious multifunctional project by Binghatti, located in the Al Jaddaf community. The complex includes a basement level, a ground level, four podium levels, fourteen residential floors, and a roof. The collection includes studios and one-, two-, and three-bedroom apartments, as well as commercial spaces.\n\nThe architecture of the complex is designed in Binghatti’s signature style: clean lines and strict geometric forms create a recognizable silhouette that blends harmoniously with the surrounding landscape. The interiors are executed in a contemporary style using high-quality materials.\n\nResidents have access to a wide range of amenities, including a swimming pool, a fully equipped gym, a sports court, and relaxation areas. Strategically located: just 5 minutes to Wasl Club, 8 minutes to Wafi Mall, and 10 minutes to Festival City Center, The Dubai Mall, DXB Airport, and the Museum of the Future.',
    availableUnits: [
      '1 BR (1,399,999 – 1,688,200 AED) - from 677 sq.ft.',
      'Studios, 2 & 3 Bedrooms Available',
      'Commercial Spaces Available',
    ],
    paymentPlans: [
      'Resale allowed after 40%',
      'Handover: Q3/2027',
    ],
    amenities: [
      'Swimming pool & fully equipped gym',
      'Sports court & social areas',
      'Signature Binghatti architecture & contemporary interiors',
      'Prime location near Downtown & DXB Airport',
    ],
    images: [cullinanImg1, cullinanImg2, cullinanImg3, cullinanImg4, cullinanImg5, cullinanImg6, cullinanImg7, cullinanImg8],
  },
  {
    id: 'enta-mina',
    title: 'ENTA MINA',
    developer: 'RAK Properties',
    price: 1721000,
    priceLabel: 'AED 1.7M Starting From',
    type: 'Apartment',
    category: ['buy', 'projects'],
    status: 'Off-plan',
    location: 'Mina Al Arab, Ras Al Khaimah',
    area: 'Mina Al Arab, Hayat Island',
    beds: 1,
    baths: 2, // مظبوطة (حمامين لـ 1 غرفة)
    size: 751,
    paymentPlan: 'Flexible Payment Plan',
    handover: 'Q1/2028',
    image: entaImg1,
    gallery: [entaImg1, entaImg2, entaImg3, entaImg4, entaImg5, entaImg6, entaImg7, entaImg8, entaImg9],
    featured: true,
    view: 'Waterfront & Coastal View',
    refNo: 'FV-ENTA01',
    completionDate: 'Q1/2028',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    floors: 'Building 1 - G + 3P + 18 Floors',
    serviceCharge: '17.00 AED/ft²',
    furnishing: 'Fully Furnished',
    description:
      'ENTA MINA is a residential complex by RAK Properties, located in Mina Al Arab on Hayat Island. The project is designed as a contemporary waterfront space focused on a calm rhythm of life and the atmosphere of a private coastal community.\n\nThe complex consists of a ground level, three podium levels, and eighteen residential floors with apartments. ENTA’s architecture combines tactile textures, a warm palette, and clean lines, creating a distinctive appearance overlooking the waterfront. The project’s spaces create a sense of privacy while maintaining a connection to the area’s urban infrastructure and dynamic surroundings.\n\nThe complex features a collection of studios, one-bedroom, and two-bedroom apartments. Interiors are designed in a contemporary minimalist aesthetic with thoughtful proportions, functional layouts, and soft natural tones that create an atmosphere of calm and everyday comfort.\n\nResidents have access to a swimming pool with lounge areas, a fitness centre, a library, a yoga studio, infrared saunas, barbecue areas, and an open-air cinema. The infrastructure is designed to balance work, relaxation, and a slower-paced waterfront lifestyle. The location provides direct access to Hayat Island and the Ras Al Khaimah coastline, located 16 minutes from Wynn Resort on Al Marjan Island.',
    availableUnits: [
      '1 BR (1,721,000 – 2,034,000 AED) - from 751 sq.ft.',
      '2 BR (2,655,000 – 2,870,000 AED) - up to 1,418 sq.ft.',
      'Studios Available',
    ],
    paymentPlans: [
      'Resale allowed after 30%',
      'Completion: Q1/2028',
    ],
    amenities: [
      'Swimming pool with lounge areas',
      'Fitness centre, yoga studio & infrared saunas',
      'Library & open-air cinema',
      'Barbecue areas & private coastal community atmosphere',
      '16 minutes from Wynn Resort on Al Marjan Island',
    ],
    images: [entaImg1, entaImg2, entaImg3, entaImg4, entaImg5, entaImg6, entaImg7, entaImg8, entaImg9],
  },
  {
    id: 'd-villas',
    title: 'D VILLAS',
    developer: 'DarGlobal',
    price: 7296289,
    priceLabel: 'AED 7.3M Starting From',
    type: 'Villa',
    category: ['buy', 'projects'],
    status: 'Off-plan',
    location: 'Jumeirah Golf Estates',
    area: 'Jumeirah Golf Estates, Dubai',
    beds: 4,
    baths: 5,
    size: 3218,
    paymentPlan: 'Resale allowed after 30%',
    handover: 'Q4/2029',
    image: dvillasImg1,
    gallery: [dvillasImg1, dvillasImg2, dvillasImg3, dvillasImg4, dvillasImg5, dvillasImg6],
    featured: true,
    luxe: true,
    tags: ['mansions'],
    view: 'Golf Estate & Community View',
    refNo: 'FV-DVILLAS01',
    completionDate: 'Q4/2029',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    serviceCharge: '5.00 AED/ft²',
    furnishing: 'Semi Furnished with Kitchen Appliances',
    description:
      'D Villas is a unique complex of villas from the developer DarGlobal, which offers an unsurpassed combination of refined luxury and serene tranquility. Set amidst the lush scenery of Dubai\'s Jumeirah Golf Estates, this complex is designed for those who appreciate a lifestyle filled with beautiful things.\n\nAvailable for sale are 4 to 5-bedroom villas that reflect a sophisticated architectural design that embodies the visionary essence of DarGlobal. Each villa is a testament to refined taste, with unique profiles and elegant finishes that highlight its surroundings. These residences are designed to blend in with their surroundings, creating a timeless aesthetic.\n\nResidents of D Villas have access to a large number of amenities, including a wide range of services at Jumeirah Golf Estates, a dog park, a children\'s park for bicycles and scooters, a meditation and yoga park, a clubhouse with a swimming pool, tennis court and basketball court, and much more.\n\nThe convenient location of the complex allows you to get to Dubai Hills Mall in 10 minutes, Palm Jumeirah in 20 minutes, Downtown Dubai in 25 minutes.',
    availableUnits: [
      '4 BR (7,296,289 – 8,008,400 AED)',
      '5 BR (8,696,350 – 10,310,180 AED)',
    ],
    paymentPlans: [
      'Resale allowed after 30%',
      'Completion: Q4/2029',
    ],
    amenities: [
      'Wide range of Jumeirah Golf Estates services',
      'Clubhouse with swimming pool',
      'Tennis & basketball courts',
      'Dog park & children\'s park for bicycles and scooters',
      'Meditation & yoga park',
      '10 min to Dubai Hills Mall, 25 min to Downtown Dubai',
    ],
    images: [dvillasImg1, dvillasImg2, dvillasImg3, dvillasImg4, dvillasImg5, dvillasImg6],
  },
  {
    id: 'palace-villas-ostra',
    title: 'PALACE VILLAS OSTRA',
    developer: 'Emaar Properties',
    price: 17600000,
    priceLabel: 'AED 17.6M Starting From',
    type: 'Villa',
    category: ['buy', 'projects'],
    status: 'Off-plan',
    location: 'The Oasis',
    area: 'The Oasis, Dubai',
    beds: 5,
    baths: 6,
    size: 7922,
    paymentPlan: 'Resale allowed after 50%',
    handover: 'Q3/2029',
    image: ostraImg1,
    gallery: [ostraImg1, ostraImg2, ostraImg3, ostraImg4, ostraImg5, ostraImg6, ostraImg7, ostraImg8, ostraImg9, ostraImg10],
    featured: true,
    luxe: true,
    tags: ['mansions'],
    view: 'Lagoon & Waterscape View',
    refNo: 'FV-OSTRA01',
    completionDate: 'Q3/2029',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    serviceCharge: '3.00 AED/ft²',
    furnishing: 'Semi Furnished with Kitchen Appliances',
    description:
      'Palace Villas – Ostra is an exclusive residential development by Emaar Properties, located in the prestigious The Oasis district. The project features branded villas with 4, 5, and 6 bedrooms, offering a high level of privacy and comfort.\n\nThe architecture is inspired by natural elements: glass facades reflect the surrounding waterscapes, while natural stone harmonizes with the environment. Panoramic windows fill the homes with natural light, creating a sense of openness and space. The interiors are designed in calm, neutral tones with an emphasis on natural textures. Thoughtful layouts, high-quality finishes, and exquisite details create an atmosphere of luxury and comfort.\n\nResidents of the complex enjoy world-class amenities, including an artificial lagoon with beaches, jogging and cycling tracks, sports courts, fitness and spa centers, a clubhouse, parks, and recreational areas. The community also features retail outlets, restaurants, and educational institutions.\n\nThe location ensures convenient access to Dubai’s key areas. Dubai Hills Estate and Dubai Hills Mall are approximately 20 minutes away, Dubai Marina can be reached in about 28 minutes, while Downtown and Dubai Mall are around 35 minutes away. Al Maktoum International Airport is just an 18-minute drive.',
    availableUnits: [
      '5 BR (17,600,000 – 24,700,000 AED) - 7,922 – 10,394 sq.ft.',
      '4 & 6 Bedroom Villas Available',
    ],
    paymentPlans: [
      'Resale allowed after 50%',
      'Completion: Q3/2029',
    ],
    amenities: [
      'Artificial lagoon with beaches',
      'Jogging & cycling tracks',
      'Sports courts, fitness & spa centers',
      'Clubhouse, parks & recreational areas',
      'Retail outlets, restaurants & educational institutions',
      '18 min to Al Maktoum International Airport',
    ],
    images: [ostraImg1, ostraImg2, ostraImg3, ostraImg4, ostraImg5, ostraImg6, ostraImg7, ostraImg8, ostraImg9, ostraImg10],
  },
    {
    id: 'samara',
    title: 'SAMARA',
    developer: 'Emaar Properties',
    price: 9519888,
    priceLabel: 'AED 9.5M Starting From',
    type: 'Villa',
    category: ['buy'],
    status: 'Ready',
    location: 'Wadi Al Safa 7',
    area: 'Wadi Al Safa 7, Dubai',
    beds: 5,
    baths: 6,
    size: 3970,
    paymentPlan: 'Ready to Move / Family Community',
    handover: 'Ready',
    image: samaraImg1,
    gallery: [samaraImg1, samaraImg2, samaraImg3, samaraImg4, samaraImg5],
    featured: true,
    view: 'Parks & Landscaped Community View',
    refNo: 'FV-SAMARA01',
    completionDate: 'Ready',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    serviceCharge: '3.00 AED/ft²',
    furnishing: 'Semi Furnished with Kitchen Appliances',
    description:
      'Samara is a villa residential community by Emaar Properties, located in a green district of Dubai and offering a calm environment for family living away from the city’s fast pace. The project combines privacy, natural surroundings, and convenient connectivity to key areas of the city.\n\nThe community is surrounded by landscaped parks and shaded walkways. The project comprises a collection of low-rise homes with private plots, gardens, and outdoor terraces, creating a seamless connection between indoor spaces and nature.\n\nThe architectural character is defined by gently sloped terracotta-tiled roofs, expressive eaves, and elegant wrought-iron details that highlight the Mediterranean identity of the development. Interiors reinterpret modern Spanish aesthetics through a warm color palette and refined finishes.\n\nSamara offers villas with three, four, and five bedrooms, designed to support comfortable family-oriented living.\n\nResidents have access to a private residents’ club with a modern gym, a swimming pool, a beauty salon, and spa areas. The community is further enhanced by parks, children’s play areas, cycling paths, squash and tennis courts, a football field, barbecue areas, and a restaurant, creating a complete lifestyle environment immersed in nature.',
    availableUnits: [
      '5 BR (9,519,888 – 9,532,888 AED) - 3,970 sq.ft.',
      '3 & 4 Bedroom Villas Available',
    ],
    paymentPlans: [
      'Status: Ready',
    ],
    amenities: [
      'Private residents’ club with gym, pool & spa areas',
      'Beauty salon & restaurant',
      'Parks, children’s play areas & cycling paths',
      'Squash & tennis courts, football field',
      'Barbecue areas & shaded walkways',
    ],
    images: [samaraImg1, samaraImg2, samaraImg3, samaraImg4, samaraImg5],
  },
    {
    id: 'elwood-estates-phase-1',
    title: 'ELWOOD ESTATES PHASE 1',
    developer: 'Sobha Realty',
    price: 9915280,
    priceLabel: 'AED 9.9M Starting From',
    type: 'Villa',
    category: ['buy', 'projects'],
    status: 'Off-plan',
    location: 'Sobha Elwood',
    area: 'Sobha Elwood, The Valley, Dubai',
    beds: 4,
    baths: 5,
    size: 4958,
    paymentPlan: 'Resale allowed after 50%',
    handover: 'Q2/2028',
    image: elwoodImg1,
    gallery: [elwoodImg1, elwoodImg2, elwoodImg3, elwoodImg4, elwoodImg5, elwoodImg6, elwoodImg7, elwoodImg8, elwoodImg9, elwoodImg10, elwoodImg11, elwoodImg12, elwoodImg13, elwoodImg14, elwoodImg15],
    featured: true,
    luxe: true,
    tags: ['mansions'],
    view: 'Greenery & Lagoon View',
    refNo: 'FV-ELWOOD01',
    completionDate: 'Q2/2028',
    listedTime: 'Just now',
    eligibility: 'Freehold (تملك حر لجميع الجنسيات)',
    serviceCharge: '5.00 AED/ft²',
    furnishing: 'Semi Furnished with Kitchen Appliances',
    description:
      'Elwood Estates Phase 1 is a premium villa community by Sobha, located in The Valley. Surrounded by lush greenery, the development offers a serene and comfortable lifestyle for those who value privacy and harmony with nature.\n\nThe project features luxurious villas with four to six bedrooms. The design is executed in a modern style using marble and wood, while elegant geometric forms and neutral tones seamlessly complement the natural surroundings. Large windows and spacious balconies provide panoramic views, creating a smooth transition between the interiors and the outdoor space.\n\nFor residents’ comfort, Elwood Estates Phase 1 offers four basketball courts, two clubhouses, scenic parks with walking paths, a lagoon, and a baobab park. Children can enjoy a dedicated playground, and there is also a school within the community.\n\nThe community is set in a convenient and dynamic part of the city: just five minutes from Dubai Rugby Sevens, eight minutes from Dubai Outlet Mall, and twenty minutes from Downtown Dubai. The trip to Dubai International Airport takes around twenty-five minutes, while Al Maktoum International Airport is approximately thirty minutes away, ensuring excellent mobility in any direction.',
    availableUnits: [
      'Villas (9,915,280 – 14,386,180 AED)',
      '4 to 6 Bedrooms - 4,957 – 7,193 sq.ft.',
    ],
    paymentPlans: [
      'Resale allowed after 50%',
      'Completion: Q2/2028',
    ],
    amenities: [
      'Four basketball courts & two clubhouses',
      'Scenic parks with walking paths',
      'Lagoon & baobab park',
      'Children’s playground',
      'School within the community',
      '25 min to Dubai International Airport',
    ],
    images: [elwoodImg1, elwoodImg2, elwoodImg3, elwoodImg4, elwoodImg5, elwoodImg6, elwoodImg7, elwoodImg8, elwoodImg9, elwoodImg10, elwoodImg11, elwoodImg12, elwoodImg13, elwoodImg14, elwoodImg15],
  },
 ];

export const locations = [
  'All Locations',
  'Al Mamzar',
  'Dubailand',
  'Sharjah',
  'Business Bay, Dubai',
  'Al Jaddaf, Dubai',
  'Mina Al Arab, Ras Al Khaimah',
];

export const propertyTypes: ('All Types' | PropertyType)[] = [
  'All Types',
  'Apartment',
];

export const bedroomOptions = ['Any', '1', '2', '3'];

export const formatPrice = (n: number) => {
  if (n >= 1_000_000) return `AED ${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 2)}M`;
  if (n >= 1_000) return `AED ${(n / 1_000).toFixed(0)}K`;
  return `AED ${n.toLocaleString()}`;
};