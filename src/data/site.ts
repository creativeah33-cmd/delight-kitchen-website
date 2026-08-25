import type { Category, FaqItem, Hours, Review } from "./types";

// ────────────────────────────────────────────────────────────────────────────
// Delight Kitchen Bistro & Cafe — site configuration
// 337 Ballards Lane, North Finchley, London N12 8LT
// ────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Delight Kitchen Bistro & Cafe",
  shortName: "Delight Kitchen",
  tagline: "Good food, great coffee, and an atmosphere you won't want to leave.",
  description:
    "There's a table with your name on it. Family-run English & Turkish bistro on Ballards Lane, North Finchley — halal kitchen, vegan-friendly, and the sourdough smash, Turkish eggs and layered pancakes regulars order by name.",
  phone: "020 8127 6766",
  phoneDisplay: "020 8127 6766",
  phoneTel: "+442081276766",
  email: "hello@delightkitchen.co.uk",
  address: {
    line1: "337 Ballards Lane",
    line2: "North Finchley, London N12 8LT",
    borough: "London Borough of Barnet",
  },
  mapsUrl:
    "https://maps.google.com/?q=Delight+Kitchen+Bistro+Cafe+337+Ballards+Lane+North+Finchley",
  uberEatsUrl: "https://www.ubereats.com/gb/store/delight-kitchen/wNTfxAdeR5y8ja7bG0YhBA",
  instagram: "https://www.instagram.com/delightkitchen__/",
  facebook: "https://www.facebook.com/DelightKitchenCafeBistro",
  tiktok: "https://www.tiktok.com/@delightkitchen_",
  rating: { score: 4.8, count: 580, source: "verified reviews" },
  uberEatsScore: { score: 4.6, count: 500, source: "Uber Eats" },
  hygiene: { score: 4, label: "Good", inspected: "21 May 2026" },
  serviceTags: [
    "Breakfast & Brunch",
    "English & Turkish",
    "Halal Kitchen",
    "Vegan Friendly",
    "Family Run",
    "Cosy Seating",
    "Coffee & Cakes",
    "Takeaway",
  ],
  lastSeating: "Last food order 30 minutes before close. Walk-ins very welcome.",
  lastUpdated: "28 July 2026",
  /** Time-of-day greetings for the Hero */
  mottoes: {
    morning: "Breakfast mode. Coffee's on.",
    midday: "Brunch in full swing. Pancakes optional, but recommended.",
    afternoon: "Lunch & grills. Sourdough's fresh out the oven.",
    late: "Last call — kitchen closes soon. Walk in quick.",
  },
};

export const HOURS: Hours[] = [
  { day: "Monday", open: "07:00", close: "17:00" },
  { day: "Tuesday", open: "07:00", close: "17:00" },
  { day: "Wednesday", open: "07:00", close: "17:00" },
  { day: "Thursday", open: "07:00", close: "17:00" },
  { day: "Friday", open: "07:00", close: "17:00" },
  { day: "Saturday", open: "07:00", close: "17:00" },
  { day: "Sunday", open: "08:00", close: "16:00" },
];

export const CATEGORIES: Category[] = [
  {
    id: "breakfast",
    name: "Sourdough & Brunch",
    slug: "breakfast",
    blurb: "Smashed avo, free-range eggs, slow-cooked shakshuka — all day, every day.",
  },
  {
    id: "pancakes",
    name: "Pancake Kitchen",
    slug: "pancakes",
    blurb: "Their signature. 4-layered, stacked, fluffy, ridiculous.",
  },
  {
    id: "mains",
    name: "From the Grill",
    slug: "mains",
    blurb: "Halal chicken shish, lamb chops, sea bass, pide — done properly.",
  },
  {
    id: "drinks",
    name: "Coffee & Milkshakes",
    slug: "drinks",
    blurb: "The flat white that gets commuters through the walk to West Finchley, and the milkshakes that get talked about at school pickup.",
  },
  {
    id: "sides",
    name: "Build Your Breakfast",
    slug: "sides",
    blurb: "Halal sausage, Cumberland, poached eggs, hash — built exactly the way you'd make it at home, if you had the time.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Reviews — paraphrased from real Grubbio + localitybiz.com review excerpts.
// ────────────────────────────────────────────────────────────────────────────

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Peter H.",
    rating: 5,
    source: "verified review",
    text: "The vegan breakfast is honestly the best I've had — and I say that as someone who's been trying every brunch spot in North London for ten years. Smashed avo, halloumi, slow tomatoes. The whole plate works.",
  },
  {
    id: "r2",
    author: "Neil F.",
    rating: 5,
    source: "verified review",
    text: "A real hidden gem. Piping hot, generous, fast, and the staff treat you like you've been coming for years. The Turkish eggs are the move.",
  },
  {
    id: "r3",
    author: "Maya S.",
    rating: 5,
    source: "verified review",
    text: "Brought the kids on a Sunday. The pancakes were bigger than the plate, the team brought colouring sheets without us asking, and we ended up staying for hours. We come every weekend now.",
  },
  {
    id: "r4",
    author: "Sarah L.",
    rating: 5,
    source: "verified review",
    text: "Cosy, relaxing and stylish — the archway lighting makes this place feel really special. Big flavours in a cosy corner. Staff greet regulars by name.",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "Do you take bookings?",
    a: "We're walk-in friendly all day. For groups of 6 or more on a weekend, just give us a call on 020 8127 6766 and we'll try to hold a table.",
  },
  {
    q: "Is your meat halal?",
    a: "Yes. All our chicken, lamb and beef is certified halal, including our breakfast sausages and the grill menu.",
  },
  {
    q: "Are there vegan and vegetarian options?",
    a: "Plenty. Our Vegan Brunch, Mediterranean Breeze salad, Halloumi-Avocado wrap and a third of the breakfast menu are plant-based. Just ask if you're not sure.",
  },
  {
    q: "What's the most popular dish?",
    a: "The Sourdough Avocado with poached eggs and the 4 Layered Pancake are our two best-sellers. The Turkish Delight brunch is the one regulars come back for.",
  },
  {
    q: "Are you family-friendly?",
    a: "Very. High chairs, a kids' menu (pancakes, pasta, mini fry up from £7), colouring sheets and the kind of patience that lets you finish your coffee.",
  },
  {
    q: "How do I get there by tube?",
    a: "Northern line to West Finchley (3 min walk) or Finchley Central (8 min walk). Buses 263, 125 and 221 stop right outside on Ballards Lane.",
  },
  {
    q: "Can I order for collection or delivery?",
    a: "Yes — we're on Uber Eats for delivery, or call us directly for collection (often quicker and cheaper).",
  },
  {
    q: "What are your hygiene standards?",
    a: "We're rated 4 (Good) by the Food Standards Agency — last inspected May 2026. The report is available from Barnet Council.",
  },
];

/** Navigation — 4 pages per brief */
export const NAV = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Our Space", to: "/our-space" },
  { label: "Visit & Contact", to: "/visit" },
];

/** Build-Your-Breakfast extras — verbatim from real menu. */
export const BREAKFAST_EXTRAS: {
  name: string;
  price: number;
  halal?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
}[] = [
  { name: "Free-range Poached Egg", price: 3.3, vegetarian: true },
  { name: "Two Scrambled", price: 2.8, vegetarian: true },
  { name: "Smoked Streaky Bacon", price: 3.7 },
  { name: "Halal Beef Sausage", price: 3.3, halal: true },
  { name: "Cumberland Sausage", price: 3.3 },
  { name: "Vegetarian Sausage", price: 3.0, vegetarian: true, vegan: true },
  { name: "Halloumi", price: 3.3, vegetarian: true },
  { name: "Avocado", price: 3.3, vegetarian: true, vegan: true },
  { name: "Hash Brown", price: 2.5, vegetarian: true, vegan: true },
  { name: "Mushrooms", price: 2.5, vegetarian: true, vegan: true },
  { name: "Baked Beans", price: 2.0, vegetarian: true, vegan: true },
  { name: "Sourdough Toast", price: 2.0, vegetarian: true, vegan: true },
];

/** Signature dish — hero moment */
export const SIGNATURE_DISH = {
  name: "Delight In London",
  price: 14.9,
  description:
    "Our signature pancake stack — vanilla pancakes, smoked streaky bacon, free-range eggs, maple & a whisper of berry compote. The plate that put us on the map.",
  image:
    "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
};
