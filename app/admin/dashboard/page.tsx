import Link from "next/link";
import LogoutButton from "./LogoutButton";

const sections = [
  { name: "Hero", href: "/admin/edit/hero" },
  { name: "Value proposition", href: "/admin/edit/value-prop" },
  { name: "Growth", href: "/admin/edit/growth" },
  { name: "Services", href: "/admin/edit/services" },
  { name: "Why choose us", href: "/admin/edit/features" },
  { name: "Partners", href: "/admin/edit/partners" },
  { name: "Contact", href: "/admin/edit/contact" },
  { name: "Footer", href: "/admin/edit/footer" },
  { name: "Nav links", href: "/admin/edit/nav" },
];

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Content dashboard</h1>
        <div className="flex gap-4">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6F2EDD] hover:underline"
          >
            View site
          </a>
          <LogoutButton />
        </div>
      </div>
      <ul className="space-y-2">
        {sections.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block rounded-lg bg-white px-4 py-3 shadow-sm transition hover:bg-gray-50"
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
