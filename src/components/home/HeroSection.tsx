
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1440px] overflow-hidden px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-24">
      <div className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#6C4CF1] via-[#5964F5] to-[#2878F0] px-5 py-10 text-white sm:rounded-[28px] sm:px-10 sm:py-14 md:px-12 lg:min-h-[440px] lg:grid-cols-2 lg:gap-12 lg:rounded-[32px] lg:px-16 lg:py-14">

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        {/* Text content */}
        <div className="relative z-10 min-w-0 max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[#FF9D36] px-4 py-2 text-xs font-semibold text-[#171725]">
            New arrival
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Upgrade Your
            <br />
            Tech. Upgrade
            <br />
            Your Life.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/85 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
            Discover the latest electronics, smart devices and accessories.
            Everything you need to stay ahead of the technology curve.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold !text-[#171725] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 sm:w-auto"
            >
              Shop Now
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/shop"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-[#6C4CF1]/40 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5739DC] sm:w-auto"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Product visual */}
        <div className="relative z-10 flex min-h-[200px] items-center justify-center sm:min-h-[280px] lg:min-h-[320px]">
          <div className="absolute h-48 w-48 rounded-full bg-white/15 blur-2xl sm:h-64 sm:w-64" />

          <Image
            src="/images/Écosystème Apple aux reflets néon.png"
            alt="Featured NexaCart electronics"
            width={650}
            height={500}
            priority
            className="relative h-auto w-full max-w-[350px] rounded-2xl object-contain drop-shadow-2xl sm:max-w-[500px] lg:max-w-[550px]"
          />
        </div>
      </div>
    </section>
  );
}
