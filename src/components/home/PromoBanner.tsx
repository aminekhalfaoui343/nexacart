
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-10">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#171725] px-8 py-10 text-white sm:px-12 lg:flex-row lg:items-center">
        {/* Promotional content */}
        <div>
          <span className="inline-flex rounded-full bg-[#F04D9A] px-3 py-1 text-[11px] font-semibold text-[#171725]">
            Limited time
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Gaming week: up to 30% off
          </h2>

          <p className="mt-2 text-sm text-white/70">
            Consoles, controllers and headsets, until Sunday.
          </p>
        </div>

        {/* Call to action */}
        <Link
          href="/shop?category=gaming"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#FF9D36] px-7 py-3 text-sm font-semibold text-[#171725] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffad52] hover:shadow-lg"
        >
          Shop gaming
        </Link>
      </div>
    </section>
  );
}
