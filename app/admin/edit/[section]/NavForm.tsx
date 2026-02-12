"use client";

import { useState, useEffect } from "react";

type NavLink = { id: string; label: string; href: string };

export default function NavForm({ initial }: { initial: NavLink[] }) {
  const [links, setLinks] = useState<{ label: string; href: string }[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLinks(initial.map((l) => ({ label: l.label, href: l.href })));
  }, [initial]);

  function addRow() {
    setLinks((prev) => [...prev, { label: "", href: "#" }]);
  }
  function remove(i: number) {
    setLinks((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/nav", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ links }),
      });
      if (res.ok) setMessage("Saved.");
      else setMessage("Failed to save.");
    } catch {
      setMessage("Network error.");
    }
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow">
      {links.map((link, i) => (
        <div key={i} className="flex gap-2">
          <input
            value={link.label}
            onChange={(e) =>
              setLinks((prev) => {
                const n = [...prev];
                n[i] = { ...n[i], label: e.target.value };
                return n;
              })
            }
            placeholder="Label"
            className="flex-1 rounded border px-3 py-2"
          />
          <input
            value={link.href}
            onChange={(e) =>
              setLinks((prev) => {
                const n = [...prev];
                n[i] = { ...n[i], href: e.target.value };
                return n;
              })
            }
            placeholder="#section"
            className="flex-1 rounded border px-3 py-2"
          />
          <button type="button" onClick={() => remove(i)} className="text-red-600">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addRow} className="text-sm text-[#6F2EDD] hover:underline">
        + Add link
      </button>
      {message && <p className="text-sm text-gray-600">{message}</p>}
      <button
        type="submit"
        disabled={saving}
        className="mt-4 rounded bg-[#6F2EDD] px-4 py-2 text-white disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
