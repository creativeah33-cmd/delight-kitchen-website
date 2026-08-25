import type { MenuItem } from "./types";

// ────────────────────────────────────────────────────────────────────────────
// Real menu items transcribed from the Grubbio + Uber Eats menu.
//
// Pricing comes from the live Uber Eats listing (4.5★, 500+).
// ────────────────────────────────────────────────────────────────────────────

export const MENU: MenuItem[] = [
  // ───────── SOURDOUGH & BRUNCH ─────────
  {
    id: "sourdough-classic",
    name: "Eggs Anyway on Toast",
    price: 9.1,
    description:
      "Two free-range eggs — poached, fried or scrambled — on toasted sourdough. The honest one.",
    category: "breakfast",
    tags: ["v", "best"],
    image: "/images/dishes/sourdough-classic.jpg",
  },
  {
    id: "sourdough-avocado",
    name: "Sourdough Avocado (Option 1)",
    price: 12.9,
    description:
      "Smashed avocado on sourdough with two poached eggs and grilled cherry tomatoes. Our most-ordered plate.",
    category: "breakfast",
    tags: ["v", "best", "popular"],
    image: "/images/dishes/sourdough-avocado.jpg",
  },
  {
    id: "sourdough-feta",
    name: "Sourdough Avocado (Option 2)",
    price: 12.9,
    description:
      "Smashed avocado on sourdough with feta, pesto and sun-dried tomatoes. The Mediterranean move.",
    category: "breakfast",
    tags: ["v"],
    image: "/images/dishes/sourdough-feta.jpg",
  },
  {
    id: "turkish-delight",
    name: "Turkish Delight Brunch",
    price: 14.5,
    description:
      "Two eggs your way, halal beef sausage, grilled halloumi, tomato, cucumber, olives, warm pide and honey with cream. Our namesake.",
    category: "breakfast",
    tags: ["halal", "best"],
    image: "/images/dishes/turkish-delight.jpg",
  },
  {
    id: "turkish-eggs",
    name: "Turkish Eggs",
    price: 12.0,
    description:
      "Soft poached eggs over garlicky yoghurt, drizzled with chilli butter and herbs. Served with warm pide.",
    category: "breakfast",
    tags: ["v", "spicy", "popular"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    id: "full-english",
    name: "Full English (Halal)",
    price: 16.9,
    description:
      "Two free-range eggs, halal beef sausage, streaky bacon, beans, hash brown, mushrooms, grilled tomato, sourdough. The 96%-rated one.",
    category: "breakfast",
    tags: ["halal", "best", "popular"],
    image: "/images/dishes/full-english.jpg",
  },
  {
    id: "egg-royale",
    name: "Egg Royale",
    price: 13.5,
    description:
      "Toasted English muffin, smoked salmon, free-range poached eggs and our hollandaise.",
    category: "breakfast",
    tags: ["best"],
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=800&q=80",
  },
  {
    id: "healthy-breakfast",
    name: "Healthy Breakfast",
    price: 15.5,
    description:
      "Poached eggs, smashed avocado, smoked salmon, grilled halloumi, spinach and sourdough.",
    category: "breakfast",
    tags: ["best"],
    image: "/images/dishes/healthy-breakfast.jpg",
  },
  {
    id: "egg-florentine",
    name: "Egg Florentine",
    price: 14.9,
    description:
      "Toasted muffin, wilted spinach, poached eggs, hollandaise. Vegetarian and lovely.",
    category: "breakfast",
    tags: ["v"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: "egg-benedict",
    name: "Egg Benedict",
    price: 12.5,
    description:
      "Toasted muffin, halal ham, poached eggs, hollandaise. The classic, done right.",
    category: "breakfast",
    tags: ["halal"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
  },
  {
    id: "menemen",
    name: "Menemen",
    price: 12.0,
    description:
      "Turkish scrambled eggs cooked with tomatoes, peppers and onion. Served with warm pide. Veggie-friendly.",
    category: "breakfast",
    tags: ["v", "spicy"],
    image: "https://images.unsplash.com/photo-1495474472207-40f47efd1ba3?w=800&q=80",
  },
  {
    id: "vegan-brunch",
    name: "Vegan Brunch",
    price: 11.0,
    description:
      "Smashed avo, grilled tomato, hash brown, baked beans, vegan sausage, spinach and sourdough. (Our most-praised vegan plate.)",
    category: "breakfast",
    tags: ["vgn", "best", "popular"],
    image: "/images/dishes/vegan-brunch.jpg",
  },
  {
    id: "organic-porridge",
    name: "Organic Oat Porridge",
    price: 10.5,
    description:
      "Berries, honey, banana, or peanut butter and pistachio. Choice of milk — oat, almond or whole.",
    category: "breakfast",
    tags: ["v"],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80",
  },
  {
    id: "muesli-bowl",
    name: "Organic Muesli Bowl",
    price: 8.5,
    description:
      "House organic muesli, Greek yoghurt, seasonal fruit, a drizzle of honey. The lighter one.",
    category: "breakfast",
    tags: ["v"],
    image: "/images/dishes/muesli-bowl.jpg",
  },

  // ───────── PANCAKE KITCHEN ─────────
  {
    id: "delight-in-london",
    name: "Delight In London",
    price: 14.9,
    description:
      "Our signature — vanilla pancakes, smoked streaky bacon, free-range eggs, maple and a whisper of berry compote. The plate that put us on the map.",
    category: "pancakes",
    tags: ["best", "popular", "new"],
    image: "/images/dishes/delight-in-london.jpg",
  },
  {
    id: "four-layered",
    name: "4 Layered Pancake",
    price: 13.9,
    description:
      "Four layers of fluffy vanilla pancake, mixed berries, mascarpone, organic maple syrup. The Instagram one.",
    category: "pancakes",
    tags: ["v", "best", "popular"],
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  },
  {
    id: "american-dream",
    name: "American Dream",
    price: 13.9,
    description:
      "Three pancakes, fried eggs, streaky bacon, Cumberland sausage, baked beans. The big morning.",
    category: "pancakes",
    tags: ["popular"],
    image: "/images/dishes/american-dream.jpg",
  },
  {
    id: "french-toast",
    name: "French Toast",
    price: 12.0,
    description:
      "Thick-cut brioche, cinnamon custard, seasonal berries, maple syrup.",
    category: "pancakes",
    tags: ["v"],
    image: "/images/dishes/french-toast.jpg",
  },
  {
    id: "poached-breaky",
    name: "Poached Breaky",
    price: 14.4,
    description:
      "Three poached eggs, streaky bacon, smashed avocado, halloumi, grilled tomato on sourdough.",
    category: "pancakes",
    tags: ["popular"],
    image: "/images/dishes/poached-breaky.jpg",
  },
  {
    id: "kids-pancakes",
    name: "Kids Pancakes",
    price: 7.5,
    description:
      "Two small pancakes, berries, a drizzle of chocolate or maple. Made for small humans.",
    category: "pancakes",
    tags: ["v"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
  },

  // ───────── FROM THE GRILL ─────────
  {
    id: "chicken-shish",
    name: "Chicken Shish",
    price: 14.5,
    description:
      "Halal chicken shish, grilled with peppers and onion, rice, salad and garlic sauce.",
    category: "mains",
    tags: ["halal", "best"],
    image: "/images/dishes/chicken-shish.jpg",
  },
  {
    id: "lamb-shish",
    name: "Lamb Shish",
    price: 15.0,
    description:
      "Halal lamb shish, grilled with peppers and onion, rice, salad and yoghurt sauce.",
    category: "mains",
    tags: ["halal"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops",
    price: 16.0,
    description:
      "Three halal lamb chops, grilled, with rice, chips, salad and our pepper sauce.",
    category: "mains",
    tags: ["halal", "best"],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80",
  },
  {
    id: "rib-eye",
    name: "Grilled Rib-Eye Steak",
    price: 19.9,
    description:
      "8oz halal rib-eye, hand-cut chips, grilled tomato, peppercorn butter.",
    category: "mains",
    tags: ["halal"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  },
  {
    id: "sea-bass",
    name: "Grilled Sea Bass Fillet",
    price: 15.0,
    description:
      "Day-boat sea bass, lemon, samphire, hand-cut chips, our tartare sauce.",
    category: "mains",
    tags: ["best"],
    image: "/images/dishes/sea-bass.jpg",
  },
  {
    id: "salmon-fillet",
    name: "Grilled Salmon Fillet",
    price: 15.0,
    description:
      "Scottish salmon, lemon-butter, seasonal greens, new potatoes.",
    category: "mains",
    tags: ["best"],
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  },
  {
    id: "chicken-escalope",
    name: "Chicken Escalope",
    price: 12.8,
    description:
      "Crispy halal chicken escalope, hand-cut chips, house salad, lemon.",
    category: "mains",
    tags: ["halal"],
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=800&q=80",
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    price: 10.5,
    description:
      "Slow-cooked halal chicken, warm spices, basmati rice, warm pide.",
    category: "mains",
    tags: ["halal", "spicy"],
    image: "/images/dishes/chicken-curry.jpg",
  },
  {
    id: "mediterranean-breeze",
    name: "Mediterranean Breeze Salad",
    price: 12.0,
    description:
      "Rocket, sun-dried tomato, olives, feta, cucumber, lemon, mint. A whole holiday on a plate.",
    category: "mains",
    tags: ["v", "best"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: "smoked-salmon-salad",
    name: "Smoked Salmon & Avocado",
    price: 14.5,
    description:
      "Smoked salmon, smashed avocado, rocket, capers, lemon, toasted seeds.",
    category: "mains",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
  },
  {
    id: "chicken-caesar",
    name: "Chicken Caesar Salad",
    price: 12.8,
    description:
      "Halal chicken, baby gem, parmesan, anchovy dressing, sourdough croutons.",
    category: "mains",
    tags: ["halal"],
    image: "https://images.unsplash.com/photo-1495474472207-40f47efd1ba3?w=800&q=80",
  },
  {
    id: "halloumi-wrap",
    name: "Halloumi, Avocado & Hummus Wrap",
    price: 12.3,
    description:
      "Grilled halloumi, smashed avocado, hummus, rocket, sun-dried tomato in a soft wrap.",
    category: "mains",
    tags: ["v", "popular"],
    image: "/images/dishes/halloumi-wrap.jpg",
  },
  {
    id: "pesto-penne",
    name: "Chicken Pesto Penne",
    price: 10.5,
    description:
      "Halal chicken, basil pesto, cherry tomatoes, parmesan, penne.",
    category: "mains",
    tags: ["halal"],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80",
  },
  {
    id: "meat-lasagne",
    name: "Meat Lasagne",
    price: 10.5,
    description:
      "Slow-cooked halal beef ragù, béchamel, mozzarella. Comfort on a plate.",
    category: "mains",
    tags: ["halal"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  },
  {
    id: "veg-lasagne",
    name: "Vegetarian Lasagne",
    price: 9.9,
    description:
      "Roasted vegetables, spinach, ricotta, béchamel, mozzarella. Veggie comfort.",
    category: "mains",
    tags: ["v"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },

  // ───────── COFFEE & MILKSHAKES ─────────
  {
    id: "flat-white",
    name: "Flat White",
    price: 3.0,
    description: "Double ristretto, steamed whole milk. Smooth, soft, daily.",
    category: "drinks",
    tags: ["v", "popular"],
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 3.0,
    description: "Equal parts espresso, steamed milk and foam. Always with a little heart.",
    category: "drinks",
    tags: ["v"],
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=800&q=80",
  },
  {
    id: "turkish-coffee",
    name: "Turkish Coffee",
    price: 2.7,
    description: "Finely ground, slow-brewed, served with a glass of water and a Turkish delight.",
    category: "drinks",
    tags: ["v", "popular"],
    image: "/images/dishes/turkish-coffee.png",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    price: 3.4,
    description: "Ceremonial-grade matcha, steamed oat or whole milk, served short.",
    category: "drinks",
    tags: ["v"],
    image: "/images/dishes/matcha-latte.jpg",
  },
  {
    id: "oreo-shake",
    name: "Oreo Milkshake",
    price: 4.8,
    description: "Vanilla ice cream, Oreo, milk, whipped cream, a whole Oreo on top.",
    category: "drinks",
    tags: ["v", "popular"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
  },
  {
    id: "kinder-shake",
    name: "Kinder Bueno Shake",
    price: 4.8,
    description: "Vanilla ice cream, Kinder Bueno, milk, Nutella drizzle, Bueno on top.",
    category: "drinks",
    tags: ["v", "popular"],
    image: "https://images.unsplash.com/photo-1495474472207-40f47efd1ba3?w=800&q=80",
  },
  {
    id: "ferrero-shake",
    name: "Ferrero Rocher Shake",
    price: 4.8,
    description: "Vanilla ice cream, Ferrero Rocher, milk, hazelnut, gold dust on top.",
    category: "drinks",
    tags: ["v"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
  {
    id: "tropical-smoothie",
    name: "Tropical Crush Smoothie",
    price: 4.4,
    description: "Mango, passionfruit, pineapple, banana, yoghurt. Cold, thick, summery.",
    category: "drinks",
    tags: ["v", "popular"],
    image: "/images/dishes/tropical-smoothie.jpg",
  },

  // ───────── BUILD YOUR BREAKFAST (extras) ─────────
  {
    id: "poached-egg",
    name: "Free-range Poached Egg",
    price: 3.3,
    description: "One free-range poached egg. Add to anything.",
    category: "sides",
    tags: ["v"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  },
  {
    id: "two-scrambled",
    name: "Two Scrambled Eggs",
    price: 2.8,
    description: "Two free-range scrambled eggs, soft and buttery.",
    category: "sides",
    tags: ["v"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    id: "halal-sausage",
    name: "Halal Beef Sausage",
    price: 3.3,
    description: "One halal-certified beef sausage.",
    category: "sides",
    tags: ["halal"],
    image: "/images/dishes/halal-sausage.jpg",
  },
  {
    id: "cumberland",
    name: "Cumberland Sausage",
    price: 3.3,
    description: "One traditional Cumberland pork sausage.",
    category: "sides",
    tags: [],
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=800&q=80",
  },
  {
    id: "halloumi",
    name: "Grilled Halloumi",
    price: 3.3,
    description: "A couple of slices of grilled halloumi.",
    category: "sides",
    tags: ["v"],
    image: "/images/dishes/halloumi.jpg",
  },
  {
    id: "hash-brown",
    name: "Hash Brown",
    price: 2.5,
    description: "Crispy golden hash brown. The best one.",
    category: "sides",
    tags: ["v", "vgn"],
    image: "/images/dishes/hash-brown.jpg",
  },
];
