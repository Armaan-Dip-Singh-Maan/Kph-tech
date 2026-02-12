"use client";

import { useState, useEffect } from "react";

type SiteConfig = {
  contactHeadline?: string | null;
  contactDescription?: string | null;
  contactEmailLabel?: string | null;
  contactEmailAddress?: string | null;
} | undefined;

export default function ContactForm({ initial }: { initial?: SiteConfig }) {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [emailLabel, setEmailLabel] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initial) {
      setHeadline(initial.contactHeadline ?? "");
      setDescription(initial.contactDescription ?? "");
      setEmailLabel(initial.contactEmailLabel ?? "");
      setEmailAddress(initial.contactEmailAddress ?? "");
    }
  }, [initial]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactHeadline: headline,
          contactDescription: description,
          contactEmailLabel: emailLabel,
          contactEmailAddress: emailAddress,
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
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email label</label>
        <input
          value={emailLabel}
          onChange={(e) => setEmailLabel(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email address</label>
        <input
          type="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
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
