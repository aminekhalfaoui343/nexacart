
import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-16">
      {/* Section Heading */}
      <div className="mb-6 sm:mb-8">
        <p className="mb-2 text-xs font-semibold tracking-wide text-[#6C4CF1] sm:text-sm">
          EXPLORE OUR COLLECTION
        </p>

        <h2 className="text-2xl font-bold text-[#171725] sm:text-3xl">
          Shop by Category
        </h2>

        <p className="mt-2 max-w-lg text-sm leading-6 text-[#77778B]">
          Find the perfect technology for your everyday needs.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            description={category.description}
            href={category.href}
            icon={category.icon}
            color={category.color}
          />
        ))}
      </div>
    </section>
  );
}
