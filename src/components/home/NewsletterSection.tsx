
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#EEE9FF] px-5 py-8 sm:rounded-3xl sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:px-10">
        <div className="min-w-0">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-[#171725] sm:text-2xl">
            Get 10% off your first order
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-[#77778B] sm:text-sm">
            Join the NexaCart newsletter for deals and launches.
          </p>
        </div>

        <form className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[420px]">
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            aria-label="Your email address"
            autoComplete="email"
            required
            className="h-11 min-w-0 w-full flex-1 rounded-full border border-[#E9E9F1] bg-white px-5 text-sm text-[#171725] outline-none transition-all placeholder:text-[#9999A8] focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/10"
          />

          <button
            type="button"
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6C4CF1] to-[#2878F0] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
          >
            Subscribe
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
