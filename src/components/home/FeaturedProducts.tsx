import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16">
      {/* Section Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold text-[#6C4CF1]">
            HANDPICKED FOR YOU
          </p>

          <h2 className="text-2xl font-bold text-[#171725] sm:text-3xl">
            Featured Products
          </h2>

          <p className="mt-2 text-sm text-[#77778B]">
            Discover our most popular tech products.
          </p>
        </div>

        <Link
          href="/shop"
          className="hidden items-center gap-2 text-sm font-semibold text-[#6C4CF1] transition-colors hover:text-[#5739DC] sm:flex"
        >
          View All
          <ArrowRight size={17} />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mobile View All Link */}
      <div className="mt-6 flex justify-center sm:hidden">
        <Link
          href="/shop"
          className="flex items-center gap-2 text-sm font-semibold text-[#6C4CF1]"
        >
          View All Products
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}