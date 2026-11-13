
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";

import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  layout?: "grid" | "list";
};

export default function ProductCard({
  product,
  layout = "grid",
}: ProductCardProps) {
  const isList = layout === "list";

  return (
    <Link
      href={`/product/${product.id}`}
      className={`group overflow-hidden rounded-2xl border border-[#E9E9F1] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isList ? "flex flex-col sm:flex-row" : "block"
      }`}
    >
      <div
        className={`relative overflow-hidden ${product.imageColor} ${
          isList ? "h-56 sm:h-auto sm:w-56 sm:shrink-0" : "h-56"
        }`}
      >
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#6C4CF1] shadow-sm">
            {product.badge}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={
            isList
              ? "(max-width: 640px) 100vw, 224px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-contain p-5 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-[#77778B]">
          {product.brand} · {product.category}
        </p>

        <h3 className="mt-2 font-semibold text-[#171725] transition-colors group-hover:text-[#6C4CF1]">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-1">
          <Star size={15} fill="#FF9D36" className="text-[#FF9D36]" />
          <span className="text-xs font-semibold text-[#171725]">
            {product.rating}
          </span>
          <span className="text-xs text-[#77778B]">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
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

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              product.inStock
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1EDFF] text-[#6C4CF1] transition-colors group-hover:bg-[#6C4CF1] group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}
