export type DrinkCategory = 'espresso' | 'cappuccino' | 'filtrados' | 'drinks_autorais';

export interface SensoryNotes {
  aroma: string[];
  notes: string[];
  acidity: 'Baixa' | 'Média-Alta' | 'Acentuada' | 'Balanceada' | 'Brilhante';
  body: 'Leve' | 'Médio' | 'Cremoso' | 'Aveludado' | 'Veludoso e Denso';
  sweetness: 'Natural Alto' | 'Caramelizada' | 'Floral' | 'Achocolatada';
}

export interface Drink {
  id: string;
  name: string;
  subtitle: string;
  category: DrinkCategory;
  categoryLabel: string;
  description: string;
  beanOrigin: string;
  extractionMethod: string;
  temperature: 'Quente' | 'Gelado' | 'Ambiente';
  prepTime: string;
  image: string;
  sensory: SensoryNotes;
  highlights: string[];
}

export interface EventCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capacityText: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  clientName: string;
  category: 'feiras' | 'corporativo' | 'congressos' | 'social' | 'drinks';
  categoryLabel: string;
  capacityCategory: 'small' | 'medium' | 'large'; // small: <100, medium: 100-500, large: 500+
  extractionType: 'espresso' | 'filtrados' | 'drinks';
  year: string;
  guestCount: number;
  coffeesServed: number;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  extractionMethodsUsed: string[];
  testimonialQuote?: string;
  clientRole?: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  quote: string;
  image: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  companyLogo?: string;
  avatar: string;
  text: string;
  eventType: string;
  rating: number;
  year: string;
}

export interface QuoteFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  eventType: string;
  guestCount: number;
  eventDate: string;
  durationHours: number;
  location: string;
  selectedDrinks: string[];
  notes: string;
}
