
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-8">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#EEE9FF] px-8 py-9 sm:px-10 lg:flex-row lg:items-center">
        {/* Newsletter Text */}
        <div>
          <h2 className="text-xl font-bold tracking-tight text-[#171725] sm:text-2xl">
            Get 10% off your first order
          </h2>

          <p className="mt-2 text-sm text-[#77778B]">
            Join the NexaCart newsletter for deals and launches.
          </p>
        </div>

        {/* Subscription Form */}
        <form className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            aria-label="Your email address"
            required
            className="h-11 min-w-0 flex-1 rounded-full border border-[#E9E9F1] bg-white px-5 text-sm text-[#171725] outline-none transition-all placeholder:text-[#9999A8] focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/10 lg:w-[300px]"
          />

          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6C4CF1] to-[#2878F0] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Subscribe
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
