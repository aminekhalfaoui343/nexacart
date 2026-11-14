
"use client";

import Link from "next/link";
import {
  UserRound,
  Heart,
  ShoppingCart,
} from "lucide-react";

import SearchBar from "./SearchBar";
import { useCart } from "@/components/provider/CartProvider";

export default function Header() {
  const { cartCount, wishlistItems } = useCart();

  const headerActions = [
    {
      label: "Account",
      href: "/login",
      icon: UserRound,
      count: 0,
    },
    {
      label: "Wishlist",
      href: "/wishlist",
      icon: Heart,
      count: wishlistItems.length,
    },
    {
      label: "Cart",
      href: "/cart",
      icon: ShoppingCart,
      count: cartCount,
    },
  ];

  return (
    <header className="border-b border-[#E9E9F1] bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-4 gap-y-4 px-4 py-4 sm:px-6 lg:flex-nowrap lg:gap-8 lg:py-5">

        {/* Brand */}
        <Link
          href="/"
          className="order-1 text-xl font-extrabold tracking-tight sm:text-2xl"
        >
          <span className="text-[#6C4CF1]">Nexa</span>
          <span className="text-[#F04D9A]">Cart</span>
        </Link>

        {/* User Actions */}
        <div className="order-2 flex shrink-0 items-center gap-3 sm:gap-6 lg:order-3">
          {headerActions.map(({ label, href, icon: Icon, count }) => (
            <Link
              key={label}
              href={href}
              aria-label={count > 0 ? `${label}, ${count} items` : label}
              className="group flex flex-col items-center gap-1 text-[#77778B] transition-colors hover:text-[#6C4CF1]"
            >
              <span className="relative">
                <Icon size={21} strokeWidth={1.8} />

                {count > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#F04D9A] px-1 text-[10px] font-bold text-white">
                    {count}
                  </span>
                )}
              </span>

              <span className="text-[11px] font-medium sm:text-xs">
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="order-3 w-full lg:order-2 lg:flex-1 lg:max-w-xl">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
