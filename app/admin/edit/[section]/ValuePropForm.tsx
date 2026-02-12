"use client";

import { useState, useEffect } from "react";

type SiteConfig = {
  valuePropText?: string | null;
  valuePropHighlight?: string | null;
  valuePropSuffix?: string | null;
} | undefined;

export default function ValuePropForm({ initial }: { initial?: SiteConfig }) {
  const [text, setText] = useState("");
  const [highlight, setHighlight] = useState("");
  const [suffix, setSuffix] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initial) {
      setText(initial.valuePropText ?? "");
      setHighlight(initial.valuePropHighlight ?? "");
      setSuffix(initial.valuePropSuffix ?? "");
    }
  }, [initial]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/value-prop", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          valuePropText: text,
          valuePropHighlight: highlight,
          valuePropSuffix: suffix,
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
        <label className="block text-sm font-medium text-gray-700">Text before highlight</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Highlighted phrase</label>
        <input
          value={highlight}
          onChange={(e) => setHighlight(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Text after highlight</label>
        <input
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      {message && <p className="text-sm text-gray-600">{message}</p>}
      <button
        type="submit"
        disabled={saving}
        className="rounded bg-[#6F2EDD] px-4 py-2 text-white disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
