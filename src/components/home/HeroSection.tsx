import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1440px] overflow-hidden px-6 py-16 lg:px-12 lg:py-24">
      <div className="relative grid min-h-[440px] items-center gap-12 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#6C4CF1] via-[#5964F5] to-[#2878F0] px-8 py-14 text-white md:px-14 lg:grid-cols-2 lg:px-16">

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        {/* Text content */}
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[#FF9D36] px-4 py-2 text-xs font-semibold text-[#171725]">
            New arrival
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Upgrade Your
            <br />
            Tech. Upgrade
            <br />
            Your Life.
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-white/85 sm:text-lg">
            Discover the latest electronics, smart devices and accessories.
            Everything you need to stay ahead of the technology curve.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold !text-[#171725] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:!text-[#171725]"
            >
              Shop Now
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[#6C4CF1] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5739DC] hover:text-white hover:-translate-y-0.5"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Product visual */}
        <div className="relative z-10 flex min-h-[260px] items-center justify-center">
          <div className="absolute h-64 w-64 rounded-full bg-white/15 blur-2xl" />

          <Image
            src="/images/Écosystème Apple aux reflets néon.png"
            alt="Featured NexaCart electronics"
            width={650}
            height={500}
            priority
            className="relative h-auto w-full max-w-[550px] object-contain drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
