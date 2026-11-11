import {
  Laptop,
  Smartphone,
  Headphones,
  Watch,
} from "lucide-react";

import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Air M3",
    category: "Laptops",
    price: 1099,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    icon: Laptop,
    imageColor: "bg-purple-50 text-purple-500",
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    category: "Smartphones",
    price: 999,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 96,
    badge: "New Arrival",
    icon: Smartphone,
    imageColor: "bg-blue-50 text-blue-500",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 349,
    originalPrice: 399,
    rating: 4.9,
    reviews: 214,
    icon: Headphones,
    imageColor: "bg-pink-50 text-pink-500",
  },
  {
    id: 4,
    name: "Apple Watch Series 10",
    category: "Smart Watches",
    price: 399,
    rating: 4.7,
    reviews: 83,
    badge: "Popular",
    icon: Watch,
    imageColor: "bg-orange-50 text-orange-500",
  },
];