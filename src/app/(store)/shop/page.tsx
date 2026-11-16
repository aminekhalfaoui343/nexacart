
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Grid2X2,
  List,
  SlidersHorizontal,
  X,
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

const brands = Array.from(
  new Set(products.map((product) => product.brand))
);

type SortOption = "featured" | "price-low" | "price-high" | "rating";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("2000");
  const [minimumRating, setMinimumRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" ||
        product.category === selectedCategory;

      const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);

      const matchesMinPrice =
        product.price >= (Number(minPrice) || 0);

      const matchesMaxPrice =
        maxPrice === "" || product.price <= Number(maxPrice);

      const matchesRating = product.rating >= minimumRating;

      const matchesStock = !inStockOnly || product.inStock;

      return (
        matchesCategory &&
        matchesBrand &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesRating &&
        matchesStock
      );
    });

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [
    selectedCategory,
    selectedBrands,
    minPrice,
    maxPrice,
    minimumRating,
    inStockOnly,
    sortBy,
  ]);

  function toggleBrand(brand: string) {
    setSelectedBrands((current) =>
      current.includes(brand)
        ? current.filter((item) => item !== brand)
        : [...current, brand]
    );
  }

  function resetFilters() {
    setSelectedCategory("All Products");
    setSelectedBrands([]);
    setMinPrice("0");
    setMaxPrice("2000");
    setMinimumRating(0);
    setInStockOnly(false);
    setSortBy("featured");
  }

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-12">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-[#77778B]">
        <Link href="/" className="hover:text-[#6C4CF1]">
          Home
        </Link>
        <ChevronRight size={15} />
        <span className="font-medium text-[#171725]">Shop</span>
      </div>

      {/* Heading */}
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

      {/* Category tabs */}
      <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              selectedCategory === category
                ? "bg-[#6C4CF1] text-white"
                : "border border-[#E9E9F1] bg-white text-[#77778B] hover:border-[#6C4CF1] hover:text-[#6C4CF1]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Catalog */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        {/* Filters */}
        <aside>
          <div className="rounded-2xl border border-[#E9E9F1] bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-[#6C4CF1]" />
                <h2 className="font-bold text-[#171725]">Filters</h2>
              </div>

              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-[#6C4CF1] hover:underline"
              >
                Clear all
              </button>
            </div>

            {/* Brand */}
            <div className="border-b border-[#E9E9F1] pb-5">
              <h3 className="mb-4 font-semibold text-[#171725]">Brands</h3>

              <div className="space-y-3">
                {brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex cursor-pointer items-center gap-3 text-sm text-[#77778B]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
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

              <div className="grid grid-cols-2 gap-3">
                <label className="text-xs text-[#77778B]">
                  Minimum
                  <input
                    type="number"
                    min="0"
                    value={minPrice}
                    onChange={(event) => setMinPrice(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#E9E9F1] px-3 py-2 text-sm text-[#171725] outline-none focus:border-[#6C4CF1]"
                  />
                </label>

                <label className="text-xs text-[#77778B]">
                  Maximum
                  <input
                    type="number"
                    min="0"
                    value={maxPrice}
                    onChange={(event) => setMaxPrice(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#E9E9F1] px-3 py-2 text-sm text-[#171725] outline-none focus:border-[#6C4CF1]"
                  />
                </label>
              </div>
            </div>

            {/* Rating */}
            <div className="border-b border-[#E9E9F1] py-5">
              <h3 className="mb-4 font-semibold text-[#171725]">Rating</h3>

              {[4, 3, 2].map((rating) => (
                <label
                  key={rating}
                  className="mb-3 flex cursor-pointer items-center gap-3 text-sm text-[#77778B]"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={minimumRating === rating}
                    onChange={() => setMinimumRating(rating)}
                    className="h-4 w-4 accent-[#6C4CF1]"
                  />
                  {rating}+ stars
                </label>
              ))}

              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#77778B]">
                <input
                  type="radio"
                  name="rating"
                  checked={minimumRating === 0}
                  onChange={() => setMinimumRating(0)}
                  className="h-4 w-4 accent-[#6C4CF1]"
                />
                Any rating
              </label>
            </div>

            {/* Availability */}
            <div className="pt-5">
              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#77778B]">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(event) => setInStockOnly(event.target.checked)}
                  className="h-4 w-4 accent-[#6C4CF1]"
                />
                In-stock products only
              </label>
            </div>
          </div>
        </aside>

        {/* Products */}
        <section>
          {/* Toolbar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#77778B]">
              Showing{" "}
              <span className="font-semibold text-[#171725]">
                {filteredProducts.length}
              </span>{" "}
              of {products.length} products
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <label className="sr-only" htmlFor="sort-products">
                Sort products
              </label>

              <div className="flex items-center rounded-lg border border-[#E9E9F1] bg-white px-3">
                <span className="text-sm text-[#77778B]">Sort:</span>
                <select
                  id="sort-products"
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value as SortOption)
                  }
                  className="cursor-pointer bg-transparent px-2 py-2.5 text-sm text-[#171725] outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              <button
                onClick={() => setView("grid")}
                aria-label="Grid view"
                aria-pressed={view === "grid"}
                className={`rounded-lg p-2.5 ${
                  view === "grid"
                    ? "bg-[#6C4CF1] text-white"
                    : "border border-[#E9E9F1] bg-white text-[#77778B]"
                }`}
              >
                <Grid2X2 size={18} />
              </button>

              <button
                onClick={() => setView("list")}
                aria-label="List view"
                aria-pressed={view === "list"}
                className={`rounded-lg p-2.5 ${
                  view === "list"
                    ? "bg-[#6C4CF1] text-white"
                    : "border border-[#E9E9F1] bg-white text-[#77778B]"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Active filters */}
          {(selectedBrands.length > 0 ||
            selectedCategory !== "All Products" ||
            minimumRating > 0 ||
            inStockOnly ||
            minPrice !== "0" ||
            maxPrice !== "2000") && (
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {selectedCategory !== "All Products" && (
                <span className="rounded-full bg-[#F1EDFF] px-3 py-1 text-xs text-[#6C4CF1]">
                  {selectedCategory}
                </span>
              )}

              {selectedBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => toggleBrand(brand)}
                  className="flex items-center gap-1 rounded-full bg-[#F1EDFF] px-3 py-1 text-xs text-[#6C4CF1]"
                >
                  {brand}
                  <X size={12} />
                </button>
              ))}

              {minimumRating > 0 && (
                <span className="rounded-full bg-[#F1EDFF] px-3 py-1 text-xs text-[#6C4CF1]">
                  {minimumRating}+ stars
                </span>
              )}

              {inStockOnly && (
                <span className="rounded-full bg-[#F1EDFF] px-3 py-1 text-xs text-[#6C4CF1]">
                  In stock
                </span>
              )}

              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-[#77778B] underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Product grid/list */}
          {filteredProducts.length > 0 ? (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                  : "flex flex-col gap-5"
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  layout={view}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#E9E9F1] bg-white px-6 py-16 text-center">
              <h3 className="text-lg font-bold text-[#171725]">
                No products found
              </h3>
              <p className="mt-2 text-sm text-[#77778B]">
                Try changing your filters to find what you are looking for.
              </p>
              <button
                onClick={resetFilters}
                className="mt-5 rounded-full bg-[#6C4CF1] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
