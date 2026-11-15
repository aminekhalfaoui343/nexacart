
import Link from "next/link";

type CategoryCardProps = {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
  color: string;
};

export default function CategoryCard({
  name,
  description,
  href,
  icon: Icon,
  color,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full min-h-[155px] flex-col items-center justify-center rounded-2xl border border-[#E9E9F1] bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#6C4CF1]/30 hover:shadow-lg sm:min-h-[175px] sm:p-5 lg:p-4 xl:p-6"
    >
      {/* Category Icon */}
      <div
        className={`mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:mb-4 sm:h-14 sm:w-14 sm:rounded-2xl ${color} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon
          size={26}
          strokeWidth={1.8}
          className="sm:hidden"
        />
        <Icon
          size={30}
          strokeWidth={1.8}
          className="hidden sm:block"
        />
      </div>

      {/* Category Name */}
      <h3 className="text-sm font-semibold leading-5 text-[#171725] transition-colors group-hover:text-[#6C4CF1] sm:text-base">
        {name}
      </h3>

      {/* Category Description */}
      <p className="mt-1 text-[11px] leading-4 text-[#77778B] sm:text-xs">
        {description}
      </p>
    </Link>
  );
}
