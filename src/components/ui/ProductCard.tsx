"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, ShoppingCart, Star } from "lucide-react";

import { useCart } from "@/components/provider/CartProvider";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  layout?: "grid" | "list";
};

export default function ProductCard({
  product,
  layout = "grid",
}: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();

  const isList = layout === "list";
  const wishlisted = isWishlisted(product.id);

  return (
    <article
      className={`group flex min-w-0 overflow-hidden rounded-2xl border border-[#E9E9F1] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isList ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      {/* Product Image */}
      <div
        className={`relative shrink-0 overflow-hidden ${product.imageColor} ${
          isList
            ? "h-48 sm:h-auto sm:w-56"
            : "h-44 sm:h-52 lg:h-48 xl:h-56"
        }`}
      >
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#6C4CF1] shadow-sm sm:left-4 sm:top-4 sm:text-[11px]">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label={
            wishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          aria-pressed={wishlisted}
          onClick={() => toggleWishlist(product)}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#77778B] shadow-sm transition-colors hover:text-[#F04D9A] sm:right-4 sm:top-4"
        >
          <Heart
            size={18}
            fill={wishlisted ? "#F04D9A" : "none"}
            className={wishlisted ? "text-[#F04D9A]" : ""}
          />
        </button>

        <Link
          href={`/product/${product.id}`}
          aria-label={`View ${product.name}`}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes={
              isList
                ? "(max-width: 640px) 100vw, 224px"
                : "(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 25vw"
            }
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-110 sm:p-5"
          />
        </Link>
      </div>

      {/* Product Information */}
      <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4">
        <p className="text-[10px] font-medium text-[#77778B] sm:text-xs">
          {product.brand} · {product.category}
        </p>

        <Link
          href={`/product/${product.id}`}
          className="mt-2 break-words text-sm font-semibold text-[#171725] transition-colors hover:text-[#6C4CF1] sm:text-base"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="mt-3 flex flex-wrap items-center gap-1">
          <Star size={14} fill="#FF9D36" className="shrink-0 text-[#FF9D36]" />

          <span className="text-xs font-semibold text-[#171725]">
            {product.rating}
          </span>

          <span className="text-[10px] text-[#77778B] sm:text-xs">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price and Stock */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-base font-bold text-[#171725] sm:text-lg">
              ${product.price.toFixed(2)}
            </span>

            {product.originalPrice && (
              <span className="text-[10px] text-[#77778B] line-through sm:text-xs">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold sm:text-xs ${
              product.inStock
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => addToCart(product)}
          className="mt-4 flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-[#6C4CF1] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#5739DC] disabled:cursor-not-allowed disabled:bg-gray-300 sm:text-sm"
        >
          <ShoppingCart size={16} />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>

        {/* View Details */}
        <Link
          href={`/product/${product.id}`}
          className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold text-[#77778B] transition-colors hover:text-[#6C4CF1]"
        >
          View details
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}