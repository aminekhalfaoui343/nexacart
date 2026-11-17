
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const categories = [
  {
    name: "Laptops",
    slug: "laptops",
    description: "Laptops and computing devices.",
  },
  {
    name: "Smartphones",
    slug: "smartphones",
    description: "Smartphones and mobile devices.",
  },
  {
    name: "Audio",
    slug: "audio",
    description: "Headphones and audio equipment.",
  },
  {
    name: "Gaming",
    slug: "gaming",
    description: "Gaming accessories and equipment.",
  },
  {
    name: "Smart Home",
    slug: "smart-home",
    description: "Smart home devices and accessories.",
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Electronics accessories and peripherals.",
  },
];

const products = [
  {
    name: "Nova Pro 14 Laptop",
    slug: "nova-pro-14-laptop",
    description: "A powerful and versatile laptop for everyday productivity.",
    brand: "NovaTech",
    sku: "NOVA-PRO-14",
    price: 1099,
    originalPrice: 1299,
    rating: 4.9,
    reviewsCount: 128,
    badge: "Best Seller",
    imageUrl: "/images/products/nova-pro-14.webp",
    stock: 1,
    categorySlug: "laptops",
  },
  {
    name: "Pulse X Smartphone",
    slug: "pulse-x-smartphone",
    description: "A modern smartphone designed for performance and everyday use.",
    brand: "Pulse",
    sku: "PULSE-X",
    price: 899,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 96,
    badge: "New Arrival",
    imageUrl: "/images/products/pulse-x.webp",
    stock: 1,
    categorySlug: "smartphones",
  },
  {
    name: "AirWave ANC Headphones",
    slug: "airwave-anc-headphones",
    description: "Wireless headphones with active noise cancellation.",
    brand: "AirWave",
    sku: "AIRWAVE-ANC",
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    reviewsCount: 214,
    badge: "Popular",
    imageUrl: "/images/products/airwave-anc.webp",
    stock: 1,
    categorySlug: "audio",
  },
  {
    name: "Vortex Wireless Controller",
    slug: "vortex-wireless-controller",
    description: "A wireless controller for an enhanced gaming experience.",
    brand: "Vortex",
    sku: "VORTEX-WC",
    price: 69,
    originalPrice: 89,
    rating: 4.7,
    reviewsCount: 83,
    badge: "Sale",
    imageUrl: "/images/products/vortex-controller.webp",
    stock: 0,
    categorySlug: "gaming",
  },
];

async function main() {
  console.log("Starting NexaCart database seeding...");

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
      },
      create: category,
    });
  }

  console.log("Categories seeded successfully.");

  for (const product of products) {
    const { categorySlug, ...productData } = product;

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        ...productData,
        category: {
          connect: { slug: categorySlug },
        },
      },
      create: {
        ...productData,
        category: {
          connect: { slug: categorySlug },
        },
      },
    });
  }

  console.log("Products seeded successfully.");
  console.log("NexaCart database seeding completed!");
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
