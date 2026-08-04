import type {
  AboutEachOtherEntry,
  AccommodationInfo,
  BankAccountInfo,
  FaqItem,
  GalleryImage,
  LoveStoryEvent,
  PhotoOrderItem,
  ScheduleItem,
  VenueDetail,
  WeddingColor,
  WeddingPartyMember,
  ZoomMeetingInfo,
} from "@/types";

export const couple = {
  brideName: "Banke",
  groomName: "Abel",
  brideFullName: "Adebanke Abigail Olatunde",
  groomFullName: "Abel Opeyemi Thomas",
  hashtag: "#LoveBOAT26",
  weddingDateISO: "2026-09-26T11:00:00",
  weddingDateDisplay: "September 26, 2026",
  tagline: "Our Forever Begins",
  heroImage: "/images/couple-hero.jpeg",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Details", href: "/details" },
  { label: "RSVP", href: "/details#rsvp" },
  { label: "Gallery", href: "/gallery#gallery" },
  { label: "Our Story", href: "/gallery#our-story" },
  { label: "Wedding Party", href: "/gallery#wedding-party" },
  { label: "FAQ", href: "/details#faq" },
];

export const loveStory: LoveStoryEvent[] = [
  {
    id: "first-date",
    title: "First Date",
    date: "August 2019",
    description:
      "Their first official date was a quiet evening spent talking for hours. Abel was so nervous he arrived thirty minutes early — Banke still teases him about it.",
    image: "/images/couple-candid-1.jpeg",
  },
  {
    id: "engagement",
    title: "Engagement",
    date: "March 2025",
    description:
      "Abel got down on one knee, and Banke said yes before he even finished the question. Friends and family gathered to celebrate the promise of forever.",
    image: "/images/couple-proposal.jpeg",
  },
  {
    id: "wedding-day",
    title: "Wedding Day",
    date: "September 26, 2026",
    description:
      "The day their forever officially begins — surrounded by the family and friends who have loved and supported them since the very beginning.",
    image: "/images/wedding-welcome-card.jpeg",
  },
];

export const aboutEachOther: AboutEachOtherEntry[] = [
  {
    from: "Abel",
    about: "Banke",
    text: "What I love most about Banke is her warmth — the way she makes everyone around her feel seen. She is my calm, my best friend, and my favorite person to build a life with.",
  },
  {
    from: "Banke",
    about: "Abel",
    text: "Abel's steadiness and quiet strength are what I fell in love with. He listens, he shows up, and he makes even the ordinary days feel worth celebrating.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/couple-hero.jpeg",
    alt: "Banke and Abel smiling together",
    category: "Candid",
    width: 1500,
    height: 2000,
  },
  {
    id: "g2",
    src: "/images/couple-candid-1.jpeg",
    alt: "A candid moment between Banke and Abel",
    category: "Candid",
    width: 1500,
    height: 2000,
  },
  {
    id: "g3",
    src: "/images/couple-traditional-1.jpeg",
    alt: "Banke and Abel dressed up together",
    category: "Traditional",
    width: 810,
    height: 1080,
  },
  {
    id: "g4",
    src: "/images/couple-traditional-2.jpeg",
    alt: "Banke and Abel in ankara outfits",
    category: "Traditional",
    width: 750,
    height: 1000,
  },
  {
    id: "g5",
    src: "/images/couple-traditional-3.jpeg",
    alt: "Banke and Abel in traditional attire",
    category: "Traditional",
    width: 756,
    height: 1000,
  },
  {
    id: "g6",
    src: "/images/couple-proposal.jpeg",
    alt: "The proposal moment, with 'Marry' balloons in the background",
    category: "Proposal",
    width: 810,
    height: 1080,
  },
];

export const event: VenueDetail = {
  heading: "Wedding Reception",
  name: "Femi Gbajabiamila Hall",
  date: "September 26, 2026",
  time: "11:00 AM",
  address: "Lagos State University (LASU), Badagry Expressway, Ojo, Lagos",
  dressCode: "Formal — White attire encouraged",
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
    "Shuttle service will run between partner hotels and the venue from 10:00 AM",
    "Ride-hailing apps (Uber/Bolt) are readily available throughout Lagos",
  ],
  airportInfo:
    "Murtala Muhammed International Airport (LOS) is approximately 1 hour from the venue via the Lagos-Badagry Expressway, traffic permitting.",
  travelTips: [
    "Lagos-Badagry Expressway traffic can be heavy — please plan to arrive at least 45 minutes early",
    "Light, breathable formalwear is recommended given the weather",
  ],
};

export const zoomMeeting: ZoomMeetingInfo = {
  note: "Can't make it in person? Livestream details will be shared here closer to the wedding day — check back soon.",
};

export const weddingColors: WeddingColor[] = [
  { name: "White", hex: "#FFFFFF" },
];

export const bridalParty: WeddingPartyMember[] = [
  {
    id: "bride",
    name: "Adebanke Abigail Olatunde",
    role: "Bride",
    message: "Finally marrying my best friend.",
  },
  { id: "bm1", name: "Adetola Olatunde", role: "Bride's Maid" },
  { id: "bm2", name: "Fadeshayo Olatunde", role: "Bride's Maid" },
  { id: "bm3", name: "Onyinye Olaitan", role: "Bride's Maid" },
  { id: "bm4", name: "Eleana Oweazim", role: "Bride's Maid" },
  { id: "bm5", name: "Sukanmi Ogunbode", role: "Bride's Maid" },
];

export const asoEbi: WeddingPartyMember[] = [
  { id: "ae1", name: "Adesope Olatunde", role: "Chief Bride's Maid" },
  { id: "ae2", name: "Adetutu Olatunde", role: "Aso Ebi" },
  { id: "ae3", name: "Loveth Ativie", role: "Aso Ebi" },
  { id: "ae4", name: "Ajovi Ighariemu", role: "Aso Ebi" },
  { id: "ae5", name: "Eniola Orogbo", role: "Aso Ebi" },
  { id: "ae6", name: "Funmi Olufisoye", role: "Aso Ebi" },
  { id: "ae7", name: "Favor Oshadare", role: "Aso Ebi" },
  { id: "ae8", name: "Ayomide Tella", role: "Aso Ebi" },
];

export const groomParty: WeddingPartyMember[] = [
  {
    id: "groom",
    name: "Abel Opeyemi Thomas",
    role: "Groom",
    message: "Every love story is beautiful, but ours is my favorite.",
  },
  { id: "gm1", name: "Godstime Oigiangbe", role: "Groomsman" },
  { id: "gm2", name: "Godspower Olaonipekun", role: "Groomsman" },
  { id: "gm3", name: "Ayomide Deika", role: "Groomsman" },
  { id: "gm4", name: "Gabriel Ukoh", role: "Groomsman" },
];

export const schedule: ScheduleItem[] = [
  {
    time: "10:30 AM",
    title: "Guests Arrive",
    description: "Please be seated by 10:45 AM",
  },
  { time: "11:00 AM", title: "Reception Begins" },
  {
    time: "12:30 PM",
    title: "Photography",
    description: "Family and wedding party portraits",
  },
  { time: "1:00 PM", title: "Lunch & Cocktail Hour" },
  {
    time: "2:30 PM",
    title: "Dance",
    description: "First dance followed by open floor",
  },
  { time: "4:00 PM", title: "Farewell, but party continues" },
];

export const photoOrder: PhotoOrderItem[] = [
  { order: 1, title: "Bride & Groom" },
  { order: 2, title: "Immediate Families" },
  { order: 3, title: "Groomsmen & Groom" },
  { order: 4, title: "Bridal Train & Bride" },
  { order: 5, title: "Extended Family" },
  { order: 6, title: "Friends & Colleagues" },
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
      "Please arrive by 10:30 AM to be seated before the reception begins at 11:00 AM. Given Lagos traffic, we recommend leaving with plenty of buffer time.",
  },
];

export const giftAccounts: BankAccountInfo[] = [
  {
    bankName: "OPAY",
    accountNumber: "9124951952",
    accountName: "Abel Opeyemi Thomas",
  },
  {
    bankName: "GTB",
    accountNumber: "0520388324",
    accountName: "Adebanke Olatunde Abigail",
  },
];

export const appreciation =
  "Thank you for being part of our journey. Your presence, love, and support mean the world to us as we begin this new chapter together.";

export const thankYouNote =
  "To our family and friends — thank you for every prayer, every word of encouragement, and every way you've shown us love along the way. We are endlessly grateful to have you with us as we start our forever. With all our love, Banke & Abel.";
