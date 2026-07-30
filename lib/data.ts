import type {
  AccommodationInfo,
  FaqItem,
  GalleryImage,
  LoveStoryEvent,
  RegistryLink,
  ScheduleItem,
  VenueDetail,
  WeddingColor,
  WeddingPartyMember,
} from "@/types";

export const couple = {
  brideName: "Banke",
  groomName: "Abel",
  monogram: "B & A",
  weddingDateISO: "2026-09-25T00:00:00",
  weddingDateDisplay: "September 25, 2026",
  tagline: "Our Forever Begins",
  heroImage: "https://picsum.photos/seed/bankeabel-hero/1920/1080",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Wedding Details", href: "#details" },
  { label: "Wedding Party", href: "#wedding-party" },
  { label: "RSVP", href: "#rsvp" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const loveStory: LoveStoryEvent[] = [
  {
    id: "first-meeting",
    title: "First Meeting",
    date: "June 2019",
    description:
      "Banke and Abel met on a rainy Lagos afternoon at a mutual friend's birthday lunch. What began as small talk over jollof rice turned into hours of conversation neither of them wanted to end.",
    image: "https://picsum.photos/seed/bankeabel-meeting/800/1000",
  },
  {
    id: "first-date",
    title: "First Date",
    date: "August 2019",
    description:
      "Their first official date was a quiet evening at a rooftop restaurant overlooking the city lights. Abel was so nervous he arrived thirty minutes early — Banke still teases him about it.",
    image: "https://picsum.photos/seed/bankeabel-date/800/1000",
  },
  {
    id: "engagement",
    title: "Engagement",
    date: "March 2025",
    description:
      "On a golden-hour beach walk, Abel got down on one knee. Banke said yes before he even finished the question, and the waves became the first witnesses to their promise.",
    image: "https://picsum.photos/seed/bankeabel-engagement/800/1000",
  },
  {
    id: "wedding-day",
    title: "Wedding Day",
    date: "December 12, 2026",
    description:
      "The day their forever officially begins — surrounded by the family and friends who have loved and supported them since the very beginning.",
    image: "https://picsum.photos/seed/bankeabel-wedding/800/1000",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://picsum.photos/seed/bankeabel-g1/800/1000", alt: "Engagement portrait of Banke and Abel", category: "Engagement", width: 800, height: 1000 },
  { id: "g2", src: "https://picsum.photos/seed/bankeabel-g2/900/700", alt: "Banke and Abel laughing together", category: "Engagement", width: 900, height: 700 },
  { id: "g3", src: "https://picsum.photos/seed/bankeabel-g3/800/1100", alt: "Banke and Abel on a trip to Zanzibar", category: "Travel", width: 800, height: 1100 },
  { id: "g4", src: "https://picsum.photos/seed/bankeabel-g4/900/650", alt: "Sunset over the water during travels", category: "Travel", width: 900, height: 650 },
  { id: "g5", src: "https://picsum.photos/seed/bankeabel-g5/800/1000", alt: "The proposal moment on the beach", category: "Proposal", width: 800, height: 1000 },
  { id: "g6", src: "https://picsum.photos/seed/bankeabel-g6/900/900", alt: "Close up of the engagement ring", category: "Proposal", width: 900, height: 900 },
  { id: "g7", src: "https://picsum.photos/seed/bankeabel-g7/800/1050", alt: "Family gathering celebrating the couple", category: "Family", width: 800, height: 1050 },
  { id: "g8", src: "https://picsum.photos/seed/bankeabel-g8/900/700", alt: "Both families meeting for the first time", category: "Family", width: 900, height: 700 },
  { id: "g9", src: "https://picsum.photos/seed/bankeabel-g9/800/1000", alt: "Banke and Abel walking hand in hand", category: "Engagement", width: 800, height: 1000 },
  { id: "g10", src: "https://picsum.photos/seed/bankeabel-g10/900/1200", alt: "A quiet moment during their travels", category: "Travel", width: 900, height: 1200 },
  { id: "g11", src: "https://picsum.photos/seed/bankeabel-g11/800/950", alt: "Abel down on one knee", category: "Proposal", width: 800, height: 950 },
  { id: "g12", src: "https://picsum.photos/seed/bankeabel-g12/900/700", alt: "Extended family portrait", category: "Family", width: 900, height: 700 },
];

export const ceremony: VenueDetail = {
  heading: "Ceremony",
  name: "St. Augustine's Cathedral",
  date: "December 12, 2026",
  time: "3:00 PM",
  address: "14 Cathedral Road, Ikoyi, Lagos",
  dressCode: "Formal — Champagne, Sage Green & Gold encouraged",
  mapsUrl: "https://maps.google.com/?q=St+Augustine's+Cathedral+Ikoyi+Lagos",
};

export const reception: VenueDetail = {
  heading: "Reception",
  name: "The Grand Ivory Hall",
  time: "5:00 PM",
  address: "22 Ozumba Mbadiwe Avenue, Victoria Island, Lagos",
  parking: "Complimentary valet parking available at the main entrance",
  mapsUrl: "https://maps.google.com/?q=The+Grand+Ivory+Hall+Victoria+Island+Lagos",
};

export const accommodation: AccommodationInfo = {
  hotels: [
    { name: "Eko Hotel & Suites", distance: "5 min from venue", priceRange: "$$$" },
    { name: "The Wheatbaker", distance: "10 min from venue", priceRange: "$$$$" },
    { name: "Radisson Blu Anchorage", distance: "15 min from venue", priceRange: "$$" },
  ],
  transportation: [
    "Shuttle service will run between partner hotels and the venue from 2:00 PM",
    "Ride-hailing apps (Uber/Bolt) are readily available throughout Lagos",
  ],
  airportInfo: "Murtala Muhammed International Airport (LOS) is approximately 40 minutes from the venue.",
  travelTips: [
    "Lagos traffic can be heavy — please plan to arrive at least 45 minutes early",
    "Light, breathable formalwear is recommended given the weather",
  ],
};

export const weddingColors: WeddingColor[] = [
  { name: "Champagne", hex: "#F4E3C1" },
  { name: "Sage Green", hex: "#9CAF88" },
  { name: "Gold", hex: "#C9A34E" },
  { name: "Ivory", hex: "#FFFEF6" },
];

export const bridalParty: WeddingPartyMember[] = [
  { id: "bride", name: "Banke Adeyemi", role: "Bride", message: "Finally marrying my best friend.", image: "https://picsum.photos/seed/bankeabel-bride/600/700" },
  { id: "moh", name: "Tolu Fashola", role: "Maid of Honor", message: "I've watched this love story from the very first chapter.", image: "https://picsum.photos/seed/bankeabel-moh/600/700" },
  { id: "bm1", name: "Kemi Okonkwo", role: "Bridesmaid", image: "https://picsum.photos/seed/bankeabel-bm1/600/700" },
  { id: "bm2", name: "Ifeoma Nwosu", role: "Bridesmaid", image: "https://picsum.photos/seed/bankeabel-bm2/600/700" },
  { id: "jbm", name: "Zara Adeyemi", role: "Junior Bridesmaid", image: "https://picsum.photos/seed/bankeabel-jbm/600/700" },
];

export const groomParty: WeddingPartyMember[] = [
  { id: "groom", name: "Abel Okafor", role: "Groom", message: "Every love story is beautiful, but ours is my favorite.", image: "https://picsum.photos/seed/bankeabel-groom/600/700" },
  { id: "bestman", name: "Chidi Okafor", role: "Best Man", message: "My brother found his person — couldn't be happier for him.", image: "https://picsum.photos/seed/bankeabel-bestman/600/700" },
  { id: "gm1", name: "David Uche", role: "Groomsman", image: "https://picsum.photos/seed/bankeabel-gm1/600/700" },
  { id: "gm2", name: "Femi Alabi", role: "Groomsman", image: "https://picsum.photos/seed/bankeabel-gm2/600/700" },
  { id: "rb", name: "Michael Okafor", role: "Ring Bearer", image: "https://picsum.photos/seed/bankeabel-rb/600/700" },
  { id: "usher", name: "Emeka Chukwu", role: "Usher", image: "https://picsum.photos/seed/bankeabel-usher/600/700" },
];

export const schedule: ScheduleItem[] = [
  { time: "2:00 PM", title: "Guests Arrive", description: "Please be seated by 2:45 PM" },
  { time: "2:30 PM", title: "Ceremony Begins" },
  { time: "3:30 PM", title: "Photography", description: "Family and wedding party portraits" },
  { time: "5:00 PM", title: "Reception", description: "Cocktail hour begins" },
  { time: "7:00 PM", title: "Dinner" },
  { time: "8:00 PM", title: "Dance", description: "First dance followed by open floor" },
  { time: "10:30 PM", title: "Farewell" },
];

export const faqs: FaqItem[] = [
  { question: "What is the dress code?", answer: "Formal attire is requested. We'd love to see our wedding colors — champagne, sage green, gold, and ivory — represented, though it is not required." },
  { question: "Can I bring a plus one?", answer: "Plus ones are welcome for guests whose invitation specifically indicates so. Please check your invitation or reach out to us directly if you're unsure." },
  { question: "Where should I park?", answer: "Complimentary valet parking is available at The Grand Ivory Hall entrance. Self-parking is also available in the adjacent lot." },
  { question: "Are children invited?", answer: "We love your little ones, but our celebration is an adults-only affair, with the exception of our wedding party's children. We appreciate you arranging childcare for the evening." },
  { question: "What time should I arrive?", answer: "Please arrive by 2:45 PM to be seated before the ceremony begins at 3:00 PM. Given Lagos traffic, we recommend leaving with plenty of buffer time." },
];

export const registryLinks: RegistryLink[] = [
  { label: "Amazon Registry", description: "Browse our curated list of home essentials", href: "https://www.amazon.com/wedding/registry" },
  { label: "Cash Gift", description: "Contribute directly via bank transfer or mobile money", href: "#contact" },
  { label: "Honeymoon Fund", description: "Help us create memories on our first trip as newlyweds", href: "#contact" },
  { label: "House Fund", description: "Support us as we build our first home together", href: "#contact" },
];

export const contactInfo = {
  plannerName: "Amara Events Co.",
  plannerContact: "planner@bankeandabel.com",
  brideContact: "banke@bankeandabel.com",
  groomContact: "abel@bankeandabel.com",
  email: "hello@bankeandabel.com",
  phone: "+234 801 234 5678",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "X", href: "https://x.com" },
  ],
};
