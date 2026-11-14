
export default function AnnouncementBar() {
  return (
    <div className="flex min-h-9 w-full items-center justify-center bg-[#171725] px-3 py-2 text-center text-[10px] leading-5 text-white sm:px-4 sm:text-xs">
      <p className="flex flex-wrap items-center justify-center gap-x-2">
        <span>Free delivery over $99</span>
        <span className="text-white/50">·</span>
        <span>2-year warranty on all laptops</span>
        <span className="text-white/50">·</span>
        <span className="font-semibold">
          Autumn Tech Sale: up to 30% off
        </span>
      </p>
    </div>
  );
}
