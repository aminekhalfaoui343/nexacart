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
      className="group flex flex-col items-center rounded-2xl border border-[#E9E9F1] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#6C4CF1]/30 hover:shadow-lg"
    >
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${color} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon size={30} strokeWidth={1.8} />
      </div>

      <h3 className="font-semibold text-[#171725] transition-colors group-hover:text-[#6C4CF1]">
        {name}
      </h3>

      <p className="mt-1 text-xs text-[#77778B]">
        {description}
      </p>
    </Link>
  );
}