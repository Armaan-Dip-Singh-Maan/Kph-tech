"use client";

export default function HelpButton() {
  return (
    <a
      href="#contact"
      aria-label="Help"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000] text-lg font-medium text-white shadow-lg transition hover:opacity-90"
    >
      ?
    </a>
  );
}
