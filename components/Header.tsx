"use client";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFFFF] px-6 py-4 md:px-12 md:py-5 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="flex items-center gap-0.5">
          <span className="text-xl font-bold text-[#6F2EDD] md:text-2xl">KPH</span>
          <span className="text-xl font-normal text-[#333333] md:text-2xl">Tech</span>
        </a>
        <nav className="flex items-center gap-5 sm:gap-8 md:gap-10">
          <button
            type="button"
            onClick={() => scrollTo("services")}
            className="text-sm font-normal text-[#333333] transition hover:opacity-80 md:text-base"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="text-sm font-normal text-[#333333] transition hover:opacity-80 md:text-base"
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="text-sm font-normal text-[#333333] transition hover:opacity-80 md:text-base"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
