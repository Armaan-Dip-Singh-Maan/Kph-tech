"use client";

import { useEffect, useState } from "react";

export default function ContactStickyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    const partners = document.getElementById("partners");
    if (!hero || !partners) return;

    let pastHero = false;
    let partnersInView = false;

    const updateVisible = () => {
      setVisible(pastHero && !partnersInView);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        pastHero = !entry.isIntersecting;
        updateVisible();
      },
      { threshold: 0 }
    );

    const partnersObserver = new IntersectionObserver(
      ([entry]) => {
        partnersInView = entry.isIntersecting;
        updateVisible();
      },
      { threshold: 0 }
    );

    heroObserver.observe(hero);
    partnersObserver.observe(partners);
    return () => {
      heroObserver.disconnect();
      partnersObserver.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      aria-label="Contact us"
      className="fixed right-0 top-1/2 z-40 -translate-y-1/2 flex min-h-[140px] items-center justify-center py-8 pl-3 pr-2 rounded-l-lg border border-[#5E5BFF]/40 bg-[#5E5BFF] text-white shadow-lg transition hover:opacity-95 hover:bg-[#4f4ce6]"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      <span className="text-sm font-semibold tracking-widest uppercase">
        Contact us
      </span>
    </a>
  );
}
