import {
  Laptop,
  Smartphone,
  Headphones,
  Gamepad2,
  Watch,
  Camera,
} from "lucide-react";

export const categories = [
  {
    id: 1,
    name: "Laptops",
    description: "Power for every task",
    href: "/shop?category=laptops",
    icon: Laptop,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 2,
    name: "Smartphones",
    description: "Stay connected",
    href: "/shop?category=smartphones",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    name: "Audio",
    description: "Experience every sound",
    href: "/shop?category=audio",
    icon: Headphones,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 4,
    name: "Gaming",
    description: "Level up your game",
    href: "/shop?category=gaming",
    icon: Gamepad2,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 5,
    name: "Smart Watches",
    description: "Technology on your wrist",
    href: "/shop?category=smart-watches",
    icon: Watch,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 6,
    name: "Cameras",
    description: "Capture every moment",
    href: "/shop?category=cameras",
    icon: Camera,
    color: "bg-yellow-100 text-yellow-600",
  },
];