
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
    <section className="mx-auto w-full max-w-[1440px] px-6 py-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(23,23,37,0.05)]"
          >
            <h3 className="text-sm font-bold text-[#171725]">
              {benefit.title}
            </h3>

            <p className="mt-1 text-sm leading-5 text-[#77778B]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
