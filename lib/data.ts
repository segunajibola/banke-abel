import type {
  AccommodationInfo,
  BankAccountInfo,
  FaqItem,
  GalleryImage,
  LoveStoryEvent,
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
  {
    id: "g1",
    src: "https://picsum.photos/seed/bankeabel-g1/800/1000",
    alt: "Engagement portrait of Banke and Abel",
    category: "Engagement",
    width: 800,
    height: 1000,
  },
  {
    id: "g2",
    src: "https://picsum.photos/seed/bankeabel-g2/900/700",
    alt: "Banke and Abel laughing together",
    category: "Engagement",
    width: 900,
    height: 700,
  },
  {
    id: "g3",
    src: "https://picsum.photos/seed/bankeabel-g3/800/1100",
    alt: "Banke and Abel on a trip to Zanzibar",
    category: "Travel",
    width: 800,
    height: 1100,
  },
  {
    id: "g4",
    src: "https://picsum.photos/seed/bankeabel-g4/900/650",
    alt: "Sunset over the water during travels",
    category: "Travel",
    width: 900,
    height: 650,
  },
  {
    id: "g5",
    src: "https://picsum.photos/seed/bankeabel-g5/800/1000",
    alt: "The proposal moment on the beach",
    category: "Proposal",
    width: 800,
    height: 1000,
  },
  {
    id: "g6",
    src: "https://picsum.photos/seed/bankeabel-g6/900/900",
    alt: "Close up of the engagement ring",
    category: "Proposal",
    width: 900,
    height: 900,
  },
  {
    id: "g7",
    src: "https://picsum.photos/seed/bankeabel-g7/800/1050",
    alt: "Family gathering celebrating the couple",
    category: "Family",
    width: 800,
    height: 1050,
  },
  {
    id: "g8",
    src: "https://picsum.photos/seed/bankeabel-g8/900/700",
    alt: "Both families meeting for the first time",
    category: "Family",
    width: 900,
    height: 700,
  },
  {
    id: "g9",
    src: "https://picsum.photos/seed/bankeabel-g9/800/1000",
    alt: "Banke and Abel walking hand in hand",
    category: "Engagement",
    width: 800,
    height: 1000,
  },
  {
    id: "g10",
    src: "https://picsum.photos/seed/bankeabel-g10/900/1200",
    alt: "A quiet moment during their travels",
    category: "Travel",
    width: 900,
    height: 1200,
  },
  {
    id: "g11",
    src: "https://picsum.photos/seed/bankeabel-g11/800/950",
    alt: "Abel down on one knee",
    category: "Proposal",
    width: 800,
    height: 950,
  },
  {
    id: "g12",
    src: "https://picsum.photos/seed/bankeabel-g12/900/700",
    alt: "Extended family portrait",
    category: "Family",
    width: 900,
    height: 700,
  },
];

export const ceremony: VenueDetail = {
  heading: "Ceremony",
  name: "Femi Gbajabiamila Hall",
  date: "December 12, 2026",
  time: "3:00 PM",
  address: "Lagos State University (LASU), Badagry Expressway, Ojo, Lagos",
  dressCode: "Formal — White attire encouraged",
  parking: "Free on-campus parking available near the hall entrance",
  mapsUrl:
    "https://maps.google.com/?q=Femi+Gbajabiamila+Hall+Lagos+State+University+Ojo+Lagos",
};

export const reception: VenueDetail = {
  heading: "Reception",
  name: "Femi Gbajabiamila Hall",
  time: "5:00 PM",
  address: "Lagos State University (LASU), Badagry Expressway, Ojo, Lagos",
  parking: "Free on-campus parking available near the hall entrance",
  mapsUrl:
    "https://maps.google.com/?q=Femi+Gbajabiamila+Hall+Lagos+State+University+Ojo+Lagos",
};

export const accommodation: AccommodationInfo = {
  hotels: [
    {
      name: "Light House Guest Inn",
      distance: "On LASU road, Km 23 Badagry Expressway — 5 min from venue",
      priceRange: "$",
    },
    {
      name: "Regional International Hotels",
      distance: "22 Isashi Road, off Iyana-Isashi bus stop — 10 min from venue",
      priceRange: "$",
    },
    {
      name: "Starjen International Hotel",
      distance:
        "Km 21 Lagos-Badagry Expressway, Doyin bus stop, Okokomaiko — 15 min from venue",
      priceRange: "$$",
    },
    {
      name: "Ausken Royal Hotel",
      distance: "16 Oba Daoudu Street, Ojo — 15 min from venue",
      priceRange: "$$",
    },
  ],
  transportation: [
    "Shuttle service will run between partner hotels and the venue from 2:00 PM",
    "Ride-hailing apps (Uber/Bolt) are readily available throughout Lagos",
  ],
  airportInfo:
    "Murtala Muhammed International Airport (LOS) is approximately 1 hour from the venue via the Lagos-Badagry Expressway, traffic permitting.",
  travelTips: [
    "Lagos-Badagry Expressway traffic can be heavy — please plan to arrive at least 45 minutes early",
    "Light, breathable formalwear is recommended given the weather",
  ],
};

export const weddingColors: WeddingColor[] = [
  { name: "White", hex: "#FFFFFF" },
  // { name: "Sage Green", hex: "#9CAF88" },
  // { name: "Gold", hex: "#C9A34E" },
  // { name: "Ivory", hex: "#FFFEF6" },
];

export const bridalParty: WeddingPartyMember[] = [
  {
    id: "bride",
    name: "Adebanke Olatunde",
    role: "Bride",
    message: "Finally marrying my best friend.",
    image: "https://picsum.photos/seed/bankeabel-bride/600/700",
  },
  {
    id: "bm1",
    name: "Adetola Olatunde",
    role: "Bride's Maid",
  },
  {
    id: "bm2",
    name: "Fadeshayo Olatunde",
    role: "Bride's Maid",
  },
  {
    id: "bm3",
    name: "Onyinye Olaitan",
    role: "Bride's Maid",
  },
  {
    id: "bm4",
    name: "Eleana Oweazim",
    role: "Bride's Maid",
  },
  {
    id: "bm5",
    name: "Sukanmi Ogunbode",
    role: "Bride's Maid",
  },
];

export const asoEbi: WeddingPartyMember[] = [
  {
    id: "ae1",
    name: "Adesope Olatunde",
    role: "Chief Bride's Maid",
  },
  {
    id: "ae2",
    name: "Adetutu Olatunde",
    role: "Aso Ebi",
  },
  {
    id: "ae3",
    name: "Loveth Ativie",
    role: "Aso Ebi",
  },
  {
    id: "ae4",
    name: "Ajovi Ighariemu",
    role: "Aso Ebi",
  },
  {
    id: "ae5",
    name: "Eniola Orogbo",
    role: "Aso Ebi",
  },
  {
    id: "ae6",
    name: "Funmi Olufisoye",
    role: "Aso Ebi",
  },
  {
    id: "ae7",
    name: "Favor Oshadare",
    role: "Aso Ebi",
  },
  {
    id: "ae8",
    name: "Ayomide Tella",
    role: "Aso Ebi",
  },
];

export const groomParty: WeddingPartyMember[] = [
  {
    id: "groom",
    name: "Abel Okafor",
    role: "Groom",
    message: "Every love story is beautiful, but ours is my favorite.",
    image: "https://picsum.photos/seed/bankeabel-groom/600/700",
  },
  {
    id: "gm1",
    name: "Godstime Oigiangbe",
    role: "Best Man",
  },
  {
    id: "gm2",
    name: "Godspower Olaonipekun",
    role: "Groomsman",
  },
];

export const schedule: ScheduleItem[] = [
  {
    time: "12:00 PM",
    title: "Guests Arrive",
    description: "Please be seated by 12:30 PM",
  },
  { time: "1:00 PM", title: "Ceremony Begins" },
  {
    time: "3:00 PM",
    title: "Photography",
    description: "Family and wedding party portraits",
  },
  {
    time: "2:30 PM",
    title: "Reception",
    description: "The cocktail hour begins",
  },
  {
    time: "4:00 PM",
    title: "Dance",
    description: "First dance followed by open floor",
  },
  { time: "5:30 PM", title: "Farewell, but party continues" },
];

export const faqs: FaqItem[] = [
  {
    question: "What is the dress code?",
    answer:
      "We'd love to see our wedding color — white — represented, though it is not required. Come as you feel most comfortable, and please dress for the weather.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Plus ones are welcome for guests whose invitation specifically indicates so. Please check your invitation or reach out to us directly if you're unsure.",
  },
  {
    question: "Where should I park?",
    answer:
      "Free parking is available on campus near the Femi Gbajabiamila Hall entrance.",
  },
  {
    question: "Are children invited?",
    answer: "We love to see your little ones, please come with them.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Please arrive by 12:00 PM to be seated before the ceremony begins at 1:00 PM. Given Lagos traffic, we recommend leaving with plenty of buffer time.",
  },
];

export const giftAccount: BankAccountInfo = {
  bankName: "OPAY",
  accountNumber: "9124951952",
  accountName: "Abel Opeyemi Thomas",
};

export const contactInfo = {
  plannerName: "Amara Events Co.",
  plannerContact: "planner@bankeandabel.com",
  phone: "+234 801 234 5678",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "X", href: "https://x.com" },
  ],
};
