
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Laptops", href: "/shop?category=laptops" },
  { label: "Smartphones", href: "/shop?category=smartphones" },
  { label: "Audio", href: "/shop?category=audio" },
  { label: "Gaming", href: "/shop?category=gaming" },
  { label: "Accessories", href: "/shop?category=accessories" },
];

export default function MainNavigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="border-b border-[#E9E9F1] bg-white"
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-6 overflow-x-auto scroll-smooth px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-8 sm:px-6">
        {navigationLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="shrink-0 whitespace-nowrap text-sm font-medium text-[#77778B] transition-colors hover:text-[#6C4CF1]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
