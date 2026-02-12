"use client";

import { useState, useEffect } from "react";

type Service = { id: string; title: string; gradientFrom: string; gradientTo: string; icon: string; image?: string };

const ICONS = ["marketing", "design", "webmobile", "cloud", "migration", "infrastructure", "security", "enterprise"];

export default function ServicesForm({ initial }: { initial: Service[] }) {
  const [services, setServices] = useState<{ title: string; gradientFrom: string; gradientTo: string; icon: string; imageUrl: string }[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setServices(
      initial.map((s) => ({
        title: s.title,
        gradientFrom: s.gradientFrom,
        gradientTo: s.gradientTo,
        icon: s.icon,
        imageUrl: s.image ?? "",
      }))
    );
  }, [initial]);

  function addRow() {
    setServices((prev) => [
      ...prev,
      { title: "", gradientFrom: "#5f72ee", gradientTo: "#6c5ce7", icon: "cloud", imageUrl: "" },
    ]);
  }
  function remove(i: number) {
    setServices((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/services", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          services: services.map((s) => ({ ...s, imageUrl: s.imageUrl || null })),
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
      {services.map((s, i) => (
        <div key={i} className="rounded border p-4">
          <input
            value={s.title}
            onChange={(e) =>
              setServices((prev) => {
                const n = [...prev];
                n[i] = { ...n[i], title: e.target.value };
                return n;
              })
            }
            placeholder="Service title"
            className="mb-2 w-full rounded border px-3 py-2"
          />
          <div className="flex gap-2 flex-wrap">
            <input
              value={s.gradientFrom}
              onChange={(e) =>
                setServices((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], gradientFrom: e.target.value };
                  return n;
                })
              }
              placeholder="#color"
              className="w-24 rounded border px-2 py-1 text-sm"
            />
            <input
              value={s.gradientTo}
              onChange={(e) =>
                setServices((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], gradientTo: e.target.value };
                  return n;
                })
              }
              placeholder="#color"
              className="w-24 rounded border px-2 py-1 text-sm"
            />
            <select
              value={s.icon}
              onChange={(e) =>
                setServices((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], icon: e.target.value };
                  return n;
                })
              }
              className="rounded border px-2 py-1 text-sm"
            >
              {ICONS.map((icon) => (
                <option key={icon} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
            <input
              value={s.imageUrl}
              onChange={(e) =>
                setServices((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], imageUrl: e.target.value };
                  return n;
                })
              }
              placeholder="Image URL"
              className="min-w-[120px] flex-1 rounded border px-2 py-1 text-sm"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" onClick={addRow} className="text-sm text-[#6F2EDD] hover:underline">
        + Add service
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
