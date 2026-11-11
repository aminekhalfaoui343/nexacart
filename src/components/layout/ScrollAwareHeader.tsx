
"use client";

import { useEffect, useState } from "react";

import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import MainNavigation from "./MainNavigation";

export default function ScrollAwareHeader() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;

      // Always show the announcement at the top of the page.
      if (currentScrollY < 40) {
        setShowAnnouncement(true);
      } else if (difference > 6) {
        // Scrolling down: hide announcement.
        setShowAnnouncement(false);
      } else if (difference < -6) {
        // Scrolling up: show announcement.
        setShowAnnouncement(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div
        aria-hidden={!showAnnouncement}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          showAnnouncement
            ? "max-h-9 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <AnnouncementBar />
      </div>

      <Header />
      <MainNavigation />
    </div>
  );
}
