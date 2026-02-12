"use client";

import { useState, useEffect } from "react";

type SiteConfig = {
  footerDescription?: string | null;
  footerCopyright?: string | null;
  privacyUrl?: string | null;
  termsUrl?: string | null;
  cookieUrl?: string | null;
} | undefined;

type FooterLink = { id: string; label: string; href: string };
type SocialLink = { id: string; platform: string; url: string };

export default function FooterForm({
  initialConfig,
  footer,
  socialLinks,
}: {
  initialConfig?: SiteConfig;
  footer: { description: string; copyright: string; privacyUrl: string; termsUrl: string; cookieUrl: string; services: FooterLink[]; solutions: FooterLink[]; company: FooterLink[] };
  socialLinks: SocialLink[];
}) {
  const [description, setDescription] = useState("");
  const [copyright, setCopyright] = useState("");
  const [privacyUrl, setPrivacyUrl] = useState("");
  const [termsUrl, setTermsUrl] = useState("");
  const [cookieUrl, setCookieUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialConfig) {
      setDescription(initialConfig.footerDescription ?? footer.description ?? "");
      setCopyright(initialConfig.footerCopyright ?? footer.copyright ?? "");
      setPrivacyUrl(initialConfig.privacyUrl ?? footer.privacyUrl ?? "#");
      setTermsUrl(initialConfig.termsUrl ?? footer.termsUrl ?? "#");
      setCookieUrl(initialConfig.cookieUrl ?? footer.cookieUrl ?? "#");
    } else {
      setDescription(footer.description);
      setCopyright(footer.copyright);
      setPrivacyUrl(footer.privacyUrl);
      setTermsUrl(footer.termsUrl);
      setCookieUrl(footer.cookieUrl);
    }
  }, [initialConfig, footer]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content/footer", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          footerDescription: description,
          footerCopyright: copyright,
          privacyUrl,
          termsUrl,
          cookieUrl,
          footerLinks: [...footer.services, ...footer.solutions, ...footer.company],
          socialLinks,
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
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Copyright</label>
        <input
          value={copyright}
          onChange={(e) => setCopyright(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Privacy URL</label>
        <input value={privacyUrl} onChange={(e) => setPrivacyUrl(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Terms URL</label>
        <input value={termsUrl} onChange={(e) => setTermsUrl(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Cookie policy URL</label>
        <input value={cookieUrl} onChange={(e) => setCookieUrl(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <p className="text-xs text-gray-500">Footer column links and social links are in the database; edit via seed or add list UI later.</p>
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
