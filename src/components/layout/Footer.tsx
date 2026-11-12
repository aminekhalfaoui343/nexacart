
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
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-10 px-6 py-10 sm:grid-cols-4 sm:gap-8">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-1">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight"
          >
            NexaCart
          </Link>

          <p className="mt-2 text-sm text-white/65">
            Modern electronics, delivered.
          </p>
        </div>

        {/* Navigation Groups */}
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-bold text-white">
              {group.title}
            </h3>

            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
