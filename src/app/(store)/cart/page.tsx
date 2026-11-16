
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Heart,
} from "lucide-react";

import { useCart } from "@/components/provider/CartProvider";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export default function CartPage() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <div className="mx-auto max-w-[1440px] px-6 py-12">

        {/* Page Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
              <ShoppingCart size={22} className="text-[#6C4CF1]" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-[#171725]">
                Shopping Cart
              </h1>
              <p className="text-sm text-[#77778B]">
                Review your products before checkout.
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm font-medium text-[#77778B]">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px]">

            {/* Cart Products */}
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-white px-6 py-4">
                <h2 className="font-bold text-[#171725]">
                  Your Products
                </h2>

                <button
                  onClick={clearCart}
                  className="text-sm font-medium text-red-500 transition-colors hover:text-red-700"
                >
                  Clear Cart
                </button>
              </div>

              {cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-5 rounded-xl border border-[#E9E9F1] bg-white p-5 sm:flex-row sm:items-center"
                >
                  {/* Product Image */}
                  <Link
                    href={`/product/${product.id}`}
                    className={`relative flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl sm:w-32 ${product.imageColor}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain p-3"
                    />
                  </Link>

                  {/* Product Information */}
                  <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="mb-1 text-xs font-medium text-[#77778B]">
                        {product.brand}
                      </p>

                      <Link
                        href={`/product/${product.id}`}
                        className="font-bold text-[#171725] transition-colors hover:text-[#6C4CF1]"
                      >
                        {product.name}
                      </Link>

                      <p className="mt-2 text-sm font-semibold text-[#6C4CF1]">
                        {formatPrice(product.price)}
                      </p>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                      <div className="flex items-center rounded-lg border border-[#E9E9F1]">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          aria-label={`Decrease ${product.name} quantity`}
                          className="p-2 text-[#77778B] transition-colors hover:text-[#6C4CF1]"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="min-w-8 text-center text-sm font-semibold text-[#171725]">
                          {quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          aria-label={`Increase ${product.name} quantity`}
                          className="p-2 text-[#77778B] transition-colors hover:text-[#6C4CF1]"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="min-w-24 text-right">
                        <p className="font-bold text-[#171725]">
                          {formatPrice(product.price * quantity)}
                        </p>

                        <button
                          onClick={() => removeFromCart(product.id)}
                          aria-label={`Remove ${product.name} from cart`}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-red-500 transition-colors hover:text-red-700"
                        >
                          <Trash2 size={13} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-[#6C4CF1] transition-colors hover:text-[#5939DF]"
              >
                <ShoppingBag size={17} />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <aside className="rounded-xl border border-[#E9E9F1] bg-white p-6 lg:sticky lg:top-24">
              <h2 className="mb-6 text-lg font-bold text-[#171725]">
                Order Summary
              </h2>

              <div className="space-y-4 border-b border-[#E9E9F1] pb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-[#77778B]">
                    Subtotal ({cartCount} items)
                  </span>
                  <span className="font-semibold text-[#171725]">
                    {formatPrice(cartTotal)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#77778B]">Shipping</span>
                  <span className="text-[#77778B]">
                    Calculated at checkout
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#77778B]">Discount</span>
                  <span className="text-[#77778B]">$0.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-5">
                <span className="font-bold text-[#171725]">
                  Subtotal
                </span>
                <span className="text-xl font-extrabold text-[#6C4CF1]">
                  {formatPrice(cartTotal)}
                </span>
              </div>

              <button
                type="button"
                disabled
                className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-[#6C4CF1] px-5 py-4 text-sm font-bold text-white opacity-60"
              >
                Proceed to Checkout
                <ArrowRight size={17} />
              </button>

              <p className="mt-3 text-center text-xs text-[#77778B]">
                Checkout will be available in a future phase.
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-lg bg-purple-50 p-4">
                <Heart size={20} className="shrink-0 text-[#6C4CF1]" />
                <p className="text-xs leading-5 text-[#77778B]">
                  Your cart is saved automatically on this device.
                </p>
              </div>
            </aside>
          </div>
        ) : (
          /* Empty Cart */
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9D9E8] bg-white px-6 py-20 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-purple-50">
              <ShoppingCart size={36} className="text-[#6C4CF1]" />
            </div>

            <h2 className="mb-2 text-xl font-bold text-[#171725]">
              Your cart is empty
            </h2>

            <p className="mb-7 max-w-md text-sm leading-6 text-[#77778B]">
              Looks like you haven't added anything yet.
              Discover our products and find something you love.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6C4CF1] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5939DF]"
            >
              <ShoppingBag size={18} />
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
