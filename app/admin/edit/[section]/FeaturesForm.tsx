"use client";

import { useState, useEffect } from "react";

type Feature = { id: string; title: string; description: string; icon: string; side: string; iconBg: string; iconColor: string };

const ICONS = ["pricing", "team", "expertise", "delivery", "e2e", "cloud"];

export default function FeaturesForm({ initial }: { initial: Feature[] }) {
  const [features, setFeatures] = useState<{ title: string; description: string; icon: string; side: string; iconBg: string; iconColor: string }[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setFeatures(
      initial.map((f) => ({
        title: f.title,
        description: f.description,
        icon: f.icon,
        side: f.side,
        iconBg: f.iconBg,
        iconColor: f.iconColor,
      }))
    );
  }, [initial]);

  function addRow() {
    setFeatures((prev) => [
      ...prev,
      { title: "", description: "", icon: "e2e", side: "left", iconBg: "#D5E7FA", iconColor: "#42A5F5" },
    ]);
  }
  function remove(i: number) {
    setFeatures((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/features", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
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
      {features.map((f, i) => (
        <div key={i} className="rounded border p-4">
          <input
            value={f.title}
            onChange={(e) =>
              setFeatures((prev) => {
                const n = [...prev];
                n[i] = { ...n[i], title: e.target.value };
                return n;
              })
            }
            placeholder="Title"
            className="mb-2 w-full rounded border px-3 py-2"
          />
          <textarea
            value={f.description}
            onChange={(e) =>
              setFeatures((prev) => {
                const n = [...prev];
                n[i] = { ...n[i], description: e.target.value };
                return n;
              })
            }
            placeholder="Description"
            rows={2}
            className="mb-2 w-full rounded border px-3 py-2 text-sm"
          />
          <div className="flex gap-2 flex-wrap">
            <select
              value={f.icon}
              onChange={(e) =>
                setFeatures((prev) => {
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
            <select
              value={f.side}
              onChange={(e) =>
                setFeatures((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], side: e.target.value };
                  return n;
                })
              }
              className="rounded border px-2 py-1 text-sm"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
            <input
              value={f.iconBg}
              onChange={(e) =>
                setFeatures((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], iconBg: e.target.value };
                  return n;
                })
              }
              placeholder="Icon bg #hex"
              className="w-24 rounded border px-2 py-1 text-sm"
            />
            <input
              value={f.iconColor}
              onChange={(e) =>
                setFeatures((prev) => {
                  const n = [...prev];
                  n[i] = { ...n[i], iconColor: e.target.value };
                  return n;
                })
              }
              placeholder="Icon color #hex"
              className="w-24 rounded border px-2 py-1 text-sm"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" onClick={addRow} className="text-sm text-[#6F2EDD] hover:underline">
        + Add feature
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
