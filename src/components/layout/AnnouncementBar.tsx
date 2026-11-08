
export default function AnnouncementBar() {
  return (
    <div className="flex h-9 w-full items-center justify-center bg-[#171725] px-4 text-center text-[11px] text-white sm:text-xs">
      <p>
        Free delivery over $99
        <span className="mx-2 text-white/50">·</span>
        2-year warranty on all laptops
        <span className="mx-2 text-white/50">·</span>
        <span className="font-semibold">
          Autumn Tech Sale: up to 30% off
        </span>
      </p>
    </div>
  );
}
