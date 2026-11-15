
import Link from "next/link";

const footerGroups = [
  {
    title: "Shop",
    links: [
      { label: "Laptops", href: "/shop?category=laptops" },
      { label: "Phones", href: "/shop?category=smartphones" },
      { label: "Audio", href: "/shop?category=audio" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Warranty", href: "/warranty" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#171725] text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-10 px-4 py-10 sm:gap-x-8 sm:px-6 sm:py-12 lg:grid-cols-4 lg:gap-10 lg:px-12">
        {/* Brand */}
        <div className="col-span-2 min-w-0 lg:col-span-1">
          <Link
            href="/"
            className="inline-block text-xl font-extrabold tracking-tight transition-colors hover:text-[#FF9D36]"
          >
            NexaCart
          </Link>

          <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/65 sm:text-sm">
            Modern electronics, delivered.
          </p>
        </div>

        {/* Navigation Groups */}
        {footerGroups.map((group) => (
          <div key={group.title} className="min-w-0">
            <h3 className="mb-4 text-sm font-bold text-white">
              {group.title}
            </h3>

            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/65 transition-colors duration-200 hover:text-white sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-4 py-5 text-center sm:px-6 lg:px-12">
          <p className="text-[11px] text-white/45 sm:text-xs">
            © {new Date().getFullYear()} NexaCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
