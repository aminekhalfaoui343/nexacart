
"use client";

import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

import { useCart } from "@/components/provider/CartProvider";
import ProductCard from "@/components/ui/ProductCard";

export default function WishlistPage() {
  const { wishlistItems } = useCart();

  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <div className="mx-auto max-w-[1440px] px-6 py-12">

        {/* Page Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100">
              <Heart size={22} className="text-[#F04D9A]" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-[#171725]">
                My Wishlist
              </h1>
              <p className="text-sm text-[#77778B]">
                Your favorite products, all in one place.
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm font-medium text-[#77778B]">
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "product" : "products"} saved
          </p>
        </div>

        {/* Wishlist Products */}
        {wishlistItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlistItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/shop"
                className="rounded-xl border border-[#6C4CF1] px-6 py-3 text-sm font-semibold text-[#6C4CF1] transition-colors hover:bg-[#6C4CF1] hover:text-white"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          /* Empty Wishlist */
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9D9E8] bg-white px-6 py-20 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-pink-50">
              <Heart size={36} className="text-[#F04D9A]" />
            </div>

            <h2 className="mb-2 text-xl font-bold text-[#171725]">
              Your wishlist is empty
            </h2>

            <p className="mb-7 max-w-md text-sm leading-6 text-[#77778B]">
              You haven't saved any products yet. Explore our collection
              and add your favorite products to your wishlist.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6C4CF1] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5939DF]"
            >
              <ShoppingBag size={18} />
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
