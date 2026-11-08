
import Link from "next/link";
import {
  UserRound,
  Heart,
  ShoppingCart,
} from "lucide-react";
import SearchBar from "./SearchBar";

const headerActions = [
  {
    label: "Account",
    href: "/login",
    icon: UserRound,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: ShoppingCart,
  },
];

export default function Header() {
  return (
    <header className="border-b border-[#E9E9F1] bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-5 lg:flex-row lg:gap-8">
        {/* Brand */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight text-[#171725]"
        >
          Nexa<span className="text-[#6C4CF1]">Cart</span>
          <span className="text-[#FF9D36]">.</span>
        </Link>

        {/* Search */}
        <div className="w-full flex-1 lg:max-w-xl">
          <SearchBar />
        </div>

        {/* User Actions */}
        <div className="flex shrink-0 items-center gap-6">
          {headerActions.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="group flex flex-col items-center gap-1 text-[#77778B] transition-colors hover:text-[#6C4CF1]"
            >
              <Icon size={21} strokeWidth={1.8} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
