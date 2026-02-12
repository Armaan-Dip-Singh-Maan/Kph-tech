"use client";

import { useState, useEffect } from "react";

type SiteConfig = {
  growthParagraph?: string | null;
  growthImageUrl?: string | null;
} | undefined;

export default function GrowthForm({ initial }: { initial?: SiteConfig }) {
  const [paragraph, setParagraph] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initial) {
      setParagraph(initial.growthParagraph ?? "");
      setImageUrl(initial.growthImageUrl ?? "");
    }
  }, [initial]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/growth", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          growthParagraph: paragraph,
          growthImageUrl: imageUrl || null,
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
        <label className="block text-sm font-medium text-gray-700">Paragraph (use "accelerates your business growth" for bold)</label>
        <textarea
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Section image URL</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="/section-2-growth.png"
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
