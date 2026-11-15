const benefits = [
  {
    title: "Fast delivery",
    description:
      "Free shipping on orders over $99, tracked end to end.",
  },
  {
    title: "Real warranty",
    description:
      "Up to 2 years of coverage on laptops and phones.",
  },
  {
    title: "Secure payment",
    description:
      "Encrypted checkout with all major cards.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex h-full flex-col justify-center rounded-xl bg-white p-5 shadow-[0_4px_18px_rgba(23,23,37,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(23,23,37,0.08)] sm:p-6"
          >
            <h3 className="text-sm font-bold text-[#171725] sm:text-base">
              {benefit.title}
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-[#77778B] sm:text-sm sm:leading-5">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}