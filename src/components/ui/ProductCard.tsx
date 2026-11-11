import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";

import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#E9E9F1] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Product Image Placeholder */}
      <div
        className={`relative flex h-56 items-center justify-center ${product.imageColor}`}
      >
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#6C4CF1] shadow-sm">
            {product.badge}
          </span>
        )}

        <Icon
          size={100}
          strokeWidth={1.2}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Information */}
      <div className="p-4">
        <p className="text-xs font-medium text-[#77778B]">
          {product.category}
        </p>

        <h3 className="mt-2 truncate font-semibold text-[#171725] transition-colors group-hover:text-[#6C4CF1]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          <Star
            size={15}
            fill="#FF9D36"
            className="text-[#FF9D36]"
          />

          <span className="text-xs font-semibold text-[#171725]">
            {product.rating}
          </span>

          <span className="text-xs text-[#77778B]">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#171725]">
              ${product.price.toFixed(2)}
            </span>

            {product.originalPrice && (
              <span className="text-xs text-[#77778B] line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1EDFF] text-[#6C4CF1] transition-colors group-hover:bg-[#6C4CF1] group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}