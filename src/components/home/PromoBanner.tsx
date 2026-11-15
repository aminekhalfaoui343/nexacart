import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#171725] px-5 py-8 text-white sm:rounded-3xl sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:px-12 lg:py-12">
        {/* Promotional Content */}
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-[#F04D9A] px-3 py-1 text-[10px] font-semibold text-[#171725] sm:text-[11px]">
            Limited time
          </span>

          <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Gaming week: up to 30% off
          </h2>

          <p className="mt-3 text-xs leading-relaxed text-white/70 sm:text-sm">
            Consoles, controllers and headsets, until Sunday.
          </p>
        </div>

        {/* Call to Action */}
        <Link
          href="/shop?category=gaming"
          className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF9D36] px-7 py-3 text-sm font-semibold text-[#171725] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffad52] hover:shadow-lg sm:w-auto"
        >
          Shop gaming
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}