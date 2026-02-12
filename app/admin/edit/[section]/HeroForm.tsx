"use client";

import { useState, useEffect } from "react";

type SiteConfig = {
  heroHeadline?: string | null;
  heroSubtitle?: string | null;
  heroCtaText?: string | null;
  heroImageUrl?: string | null;
} | undefined;

export default function HeroForm({ initial }: { initial?: SiteConfig }) {
  const [headline, setHeadline] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [ctaText, setCtaText] = useState("");
  const [heroImageUrl, setHeroImageUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initial) {
      setHeadline(initial.heroHeadline ?? "");
      setSubtitle(initial.heroSubtitle ?? "");
      setCtaText(initial.heroCtaText ?? "");
      setHeroImageUrl(initial.heroImageUrl ?? "");
    }
  }, [initial]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroHeadline: headline,
          heroSubtitle: subtitle,
          heroCtaText: ctaText,
          heroImageUrl: heroImageUrl || null,
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
        <label className="block text-sm font-medium text-gray-700">Headline</label>
        <input
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Subtitle</label>
        <textarea
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">CTA button text</label>
        <input
          value={ctaText}
          onChange={(e) => setCtaText(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Hero image URL</label>
        <input
          value={heroImageUrl}
          onChange={(e) => setHeroImageUrl(e.target.value)}
          placeholder="/hero-banner.jpg"
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
