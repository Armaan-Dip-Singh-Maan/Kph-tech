"use client";

import { useState, useEffect } from "react";

type SiteConfig = {
  partnersHeadline?: string | null;
  partnersSectionTitle?: string | null;
} | undefined;

type Partner = { id: string; name: string; description?: string | null; logoType: string; accentColor?: string | null };

export default function PartnersForm({
  initialConfig,
  partners,
}: {
  initialConfig?: SiteConfig;
  partners: Partner[];
}) {
  const [headline, setHeadline] = useState("");
  const [sectionTitle, setSectionTitle] = useState("");
  const [partnersList, setPartnersList] = useState<{ name: string; description: string; logoType: string; accentColor: string }[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setHeadline(initialConfig?.partnersHeadline ?? "");
    setSectionTitle(initialConfig?.partnersSectionTitle ?? "Our Global Partners");
    setPartnersList(
      partners.map((p) => ({
        name: p.name,
        description: p.description ?? "",
        logoType: p.logoType,
        accentColor: p.accentColor ?? "#E64A19",
      }))
    );
  }, [initialConfig, partners]);

  function addRow() {
    setPartnersList((prev) => [...prev, { name: "", description: "", logoType: "placeholder", accentColor: "#E64A19" }]);
  }
  function remove(i: number) {
    setPartnersList((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/partners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          partnersHeadline: headline,
          partnersSectionTitle: sectionTitle,
          partners: partnersList,
        }),
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
      <div>
        <label className="block text-sm font-medium text-gray-700">Headline (24/7 line)</label>
        <input value={headline} onChange={(e) => setHeadline(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Section title</label>
        <input value={sectionTitle} onChange={(e) => setSectionTitle(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      {partnersList.map((p, i) => (
        <div key={i} className="rounded border p-4">
          <input
            value={p.name}
            onChange={(e) =>
              setPartnersList((prev) => {
                const n = [...prev];
                n[i] = { ...n[i], name: e.target.value };
                return n;
              })
            }
            placeholder="Partner name"
            className="mb-2 w-full rounded border px-3 py-2"
          />
          <textarea
            value={p.description}
            onChange={(e) =>
              setPartnersList((prev) => {
                const n = [...prev];
                n[i] = { ...n[i], description: e.target.value };
                return n;
              })
            }
            placeholder="Description"
            rows={2}
            className="mb-2 w-full rounded border px-3 py-2 text-sm"
          />
          <div className="flex gap-2">
            <select
              value={p.logoType}
              onChange={(e) =>
                setPartnersList((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], logoType: e.target.value };
                  return n;
                })
              }
              className="rounded border px-2 py-1 text-sm"
            >
              <option value="techconnect">Tech Connect</option>
              <option value="placeholder">Placeholder</option>
            </select>
            <input
              value={p.accentColor}
              onChange={(e) =>
                setPartnersList((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], accentColor: e.target.value };
                  return n;
                })
              }
              placeholder="#hex"
              className="w-24 rounded border px-2 py-1 text-sm"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" onClick={addRow} className="text-sm text-[#6F2EDD] hover:underline">
        + Add partner
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
