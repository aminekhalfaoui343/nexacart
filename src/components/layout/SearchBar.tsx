
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form
      role="search"
      className="flex h-11 w-full max-w-xl items-center rounded-full border border-[#E9E9F1] bg-[#F7F7FC] px-4 transition-all focus-within:border-[#6C4CF1] focus-within:ring-2 focus-within:ring-[#6C4CF1]/10"
    >
      <Search size={19} className="shrink-0 text-[#77778B]" />

      <input
        type="search"
        name="q"
        placeholder="Search for products, brands..."
        aria-label="Search products"
        className="ml-3 min-w-0 flex-1 bg-transparent text-sm text-[#171725] outline-none placeholder:text-[#77778B]"
      />

      <button
        type="submit"
        aria-label="Submit search"
        className="ml-2 rounded-full bg-[#6C4CF1] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#5739dc]"
      >
        Search
      </button>
    </form>
  );
}
