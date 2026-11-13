
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";

import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const categories = [
  "All Products",
  "Laptops",
  "Smartphones",
  "Audio",
  "Gaming",
  "Accessories",
  "Smart Home",
];

const brands = ["Apple", "Samsung", "Sony", "Logitech", "Dell"];

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-12">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-[#77778B]">
        <Link href="/" className="transition-colors hover:text-[#6C4CF1]">
          Home
        </Link>
        <ChevronRight size={15} />
        <span className="font-medium text-[#171725]">Shop</span>
      </div>

      {/* Page heading */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold text-[#6C4CF1]">
          DISCOVER YOUR NEXT FAVORITE
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#171725] sm:text-4xl">
          Explore Our Products
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#77778B] sm:text-base">
          Discover the latest electronics, smart devices and accessories
          selected to upgrade your everyday life.
        </p>
      </div>

      {/* Category navigation */}
      <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              index === 0
                ? "bg-[#6C4CF1] text-white"
                : "border border-[#E9E9F1] bg-white text-[#77778B] hover:border-[#6C4CF1] hover:text-[#6C4CF1]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Catalog layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">

        {/* Filters sidebar */}
        <aside className="hidden lg:block">
          <div className="rounded-2xl border border-[#E9E9F1] bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-bold text-[#171725]">Filters</h2>
              <SlidersHorizontal size={18} className="text-[#6C4CF1]" />
            </div>

            {/* Categories */}
            <div className="border-b border-[#E9E9F1] pb-5">
              <h3 className="mb-4 font-semibold text-[#171725]">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.slice(1).map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-3 text-sm text-[#77778B]"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#6C4CF1]"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="border-b border-[#E9E9F1] py-5">
              <h3 className="mb-4 font-semibold text-[#171725]">Brands</h3>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-3 text-sm text-[#77778B]"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#6C4CF1]"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="border-b border-[#E9E9F1] py-5">
              <h3 className="mb-4 font-semibold text-[#171725]">
                Price Range
              </h3>
              <div className="flex items-center gap-2">
                <span className="rounded-lg border border-[#E9E9F1] px-3 py-2 text-sm text-[#77778B]">
                  $0
                </span>
                <span className="text-[#77778B]">-</span>
                <span className="rounded-lg border border-[#E9E9F1] px-3 py-2 text-sm text-[#77778B]">
                  $2000
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="pt-5">
              <h3 className="mb-4 font-semibold text-[#171725]">Rating</h3>
              {[4, 3, 2].map((rating) => (
                <label
                  key={rating}
                  className="mb-3 flex items-center gap-3 text-sm text-[#77778B]"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#6C4CF1]"
                  />
                  {rating}+ stars
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Products area */}
        <section>
          {/* Toolbar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#77778B]">
              Showing{" "}
              <span className="font-semibold text-[#171725]">
                {products.length}
              </span>{" "}
              products
            </p>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-[#E9E9F1] bg-white px-4 py-2.5 text-sm text-[#171725]">
                Sort by: Featured
                <ChevronDown size={16} />
              </button>

              <button
                aria-label="Grid view"
                className="rounded-lg bg-[#6C4CF1] p-2.5 text-white"
              >
                <Grid2X2 size={18} />
              </button>

              <button
                aria-label="List view"
                className="rounded-lg border border-[#E9E9F1] bg-white p-2.5 text-[#77778B]"
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <button className="rounded-lg border border-[#E9E9F1] bg-white px-4 py-2 text-sm text-[#77778B]">
              Previous
            </button>
            <button className="rounded-lg bg-[#6C4CF1] px-4 py-2 text-sm font-semibold text-white">
              1
            </button>
            <button className="rounded-lg border border-[#E9E9F1] bg-white px-4 py-2 text-sm text-[#77778B]">
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
