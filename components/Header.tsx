"use client";

type NavLink = { id: string; label: string; href: string };

const defaultNavLinks: NavLink[] = [
  { id: "1", label: "Services", href: "#services" },
  { id: "2", label: "About Us", href: "#about" },
  { id: "3", label: "Contact Us", href: "#contact" },
];

export default function Header({ navLinks = defaultNavLinks }: { navLinks?: NavLink[] }) {
  const scrollTo = (href: string) => {
    const id = href.startsWith("#") ? href.slice(1) : href;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (href.startsWith("#")) window.location.hash = href;
  };

  return (
    <header className="top-0 z-50 h-25 w-full overflow-hidden bg-[#FFFFFF] px-6 md:px-12 lg:px-14">
      <div className="mx-auto flex h-full max-w-7xl flex-wrap items-center justify-between gap-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="-ml-8 flex h-full items-center overflow-hidden md:-ml-10 lg:-ml-10"
        >
          <img
            src="/assets/Logo.png"
            alt="KPH Tech"
            width={240}
            height={100}
            className="h-20 w-auto max-h-20 object-contain md:h-25 md:max-h-[8rem]"
            fetchPriority="high"
          />
        </a>
        <nav className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="text-sm font-normal text-[#000000] transition hover:opacity-80 md:text-base"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
