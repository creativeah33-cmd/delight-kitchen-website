export type DietaryTag = "v" | "veg" | "vgn" | "halal" | "gf" | "spicy" | "new" | "best" | "popular";

export type CategoryId = "breakfast" | "pancakes" | "mains" | "drinks" | "sides";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: CategoryId;
  tags: DietaryTag[];
  image: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  blurb: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  source: string;
  text: string;
}

export interface Hours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}
