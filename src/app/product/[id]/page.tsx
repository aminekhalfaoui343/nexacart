
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  ShoppingCart,
  Heart,
  Star,
  Minus,
  Plus,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import { products } from "@/data/products";
import { useCart } from "@/components/provider/CartProvider";
import ProductCard from "@/components/ui/ProductCard";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const productId = Number(params.id);

  const product = products.find((item) => item.id === productId);

  const [quantity, setQuantity] = useState(1);

  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useCart();

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F7F7FC] px-6 text-center">
        <h1 className="mb-3 text-3xl font-extrabold text-[#171725]">
          Product not found
        </h1>

        <p className="mb-7 text-sm text-[#77778B]">
          The product you're looking for doesn't exist or is no longer available.
        </p>

        <Link
          href="/shop"
          className="rounded-xl bg-[#6C4CF1] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5939DF]"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <div className="mx-auto max-w-[1440px] px-6 py-10">

        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#77778B]">
          <Link href="/" className="hover:text-[#6C4CF1]">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#6C4CF1]">
            Shop
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="font-semibold text-[#171725]">
            {product.name}
          </span>
        </div>

        {/* Back to Shop */}
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6C4CF1] hover:text-[#5939DF]"
        >
          <ArrowLeft size={17} />
          Back to Shop
        </Link>

        {/* Product Information */}
        <div className="grid grid-cols-1 gap-10 rounded-2xl border border-[#E9E9F1] bg-white p-6 md:p-10 lg:grid-cols-2">

          {/* Product Image */}
          <div
            className={`relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-2xl sm:min-h-[480px] ${product.imageColor}`}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              priority
              className="h-full max-h-[480px] w-full object-contain p-8"
            />

            {product.badge && (
              <span className="absolute left-5 top-5 rounded-full bg-[#6C4CF1] px-4 py-2 text-xs font-bold text-white">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#6C4CF1]">
              {product.brand}
            </p>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#171725] md:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center gap-1 text-[#FF9D36]">
                <Star size={18} fill="currentColor" />
                <span className="font-bold text-[#171725]">
                  {product.rating}
                </span>
              </div>

              <span className="text-sm text-[#77778B]">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-extrabold text-[#6C4CF1]">
                {formatPrice(product.price)}
              </span>

              {product.originalPrice && (
                <>
                  <span className="text-lg text-[#9999AA] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>

                  <span className="rounded-lg bg-pink-50 px-3 py-1 text-xs font-bold text-[#F04D9A]">
                    Save{" "}
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    %
                  </span>
                </>
              )}
            </div>

            <div className="mb-6 h-px bg-[#E9E9F1]" />

            {/* Description */}
            <div className="mb-7">
              <h2 className="mb-2 font-bold text-[#171725]">
                Product Overview
              </h2>

              <p className="text-sm leading-7 text-[#77778B]">
                Discover the {product.name} from {product.brand}.
                Explore this product in our {product.category.toLowerCase()}{" "}
                collection and add it to your NexaCart shopping experience.
              </p>
            </div>

            {/* Availability */}
            <div className="mb-7 flex items-center gap-2">
              {product.inStock ? (
                <>
                  <CheckCircle2 size={18} className="text-green-600" />
                  <span className="text-sm font-semibold text-green-700">
                    In Stock
                  </span>
                </>
              ) : (
                <>
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="text-sm font-semibold text-red-600">
                    Out of Stock
                  </span>
                </>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="mb-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-xl border border-[#E9E9F1]">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  disabled={quantity <= 1 || !product.inStock}
                  aria-label="Decrease quantity"
                  className="p-3 text-[#77778B] hover:text-[#6C4CF1] disabled:opacity-40"
                >
                  <Minus size={17} />
                </button>

                <span className="min-w-10 text-center font-semibold text-[#171725]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  disabled={!product.inStock}
                  aria-label="Increase quantity"
                  className="p-3 text-[#77778B] hover:text-[#6C4CF1] disabled:opacity-40"
                >
                  <Plus size={17} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#6C4CF1] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#5939DF] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>

            {/* Wishlist */}
            <button
              type="button"
              onClick={() => toggleWishlist(product)}
              className={`flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-colors ${
                wishlisted
                  ? "border-[#F04D9A] bg-pink-50 text-[#F04D9A]"
                  : "border-[#E9E9F1] text-[#77778B] hover:border-[#F04D9A] hover:text-[#F04D9A]"
              }`}
            >
              <Heart
                size={18}
                fill={wishlisted ? "currentColor" : "none"}
              />
              {wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#6C4CF1]">
                You may also like
              </p>

              <h2 className="text-2xl font-extrabold text-[#171725]">
                Related Products
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
