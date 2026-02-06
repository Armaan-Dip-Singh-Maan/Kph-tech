"use client";

import { useState } from "react";

const serviceOptions = [
  "Select a service",
  "Marketing & Growth Solutions",
  "Design & Creative Services",
  "Web & Mobile Application Development",
  "Cloud Transformation & Platform Engineering",
  "Cloud Migration & Data/AI Transformation",
  "Infrastructure Virtualization & Modernization",
  "Security & Compliance",
  "Enterprise Security Architecture & Technical Assessments",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    serviceInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="rounded-2xl border border-[#E0E0E0] bg-white p-8 shadow-lg md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-[#333333]">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
            className="w-full rounded-lg border border-[#E0E0E0] bg-[#F7F7F7] px-4 py-3 text-[#333333] placeholder:text-gray-400 focus:border-[#5E5BFF] focus:outline-none focus:ring-1 focus:ring-[#5E5BFF]"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#333333]">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className="w-full rounded-lg border border-[#E0E0E0] bg-[#F7F7F7] px-4 py-3 text-[#333333] placeholder:text-gray-400 focus:border-[#5E5BFF] focus:outline-none focus:ring-1 focus:ring-[#5E5BFF]"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-[#333333]">
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Your Company Name"
            value={formData.company}
            onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
            className="w-full rounded-lg border border-[#E0E0E0] bg-[#F7F7F7] px-4 py-3 text-[#333333] placeholder:text-gray-400 focus:border-[#5E5BFF] focus:outline-none focus:ring-1 focus:ring-[#5E5BFF]"
          />
        </div>
        <div>
          <label htmlFor="serviceInterest" className="mb-1 block text-sm font-medium text-[#333333]">
            Service Interest
          </label>
          <select
            id="serviceInterest"
            value={formData.serviceInterest}
            onChange={(e) => setFormData((p) => ({ ...p, serviceInterest: e.target.value }))}
            className="w-full appearance-none rounded-lg border border-[#E0E0E0] bg-[#F7F7F7] px-4 py-3 text-[#333333] focus:border-[#5E5BFF] focus:outline-none focus:ring-1 focus:ring-[#5E5BFF]"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#333333]">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Tell us about your project or needs..."
            value={formData.message}
            onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
            className="w-full resize-none rounded-lg border border-[#E0E0E0] bg-[#F7F7F7] px-4 py-3 text-[#333333] placeholder:text-gray-400 focus:border-[#5E5BFF] focus:outline-none focus:ring-1 focus:ring-[#5E5BFF]"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-medium text-white shadow-md transition hover:opacity-95"
          style={{
            background: "linear-gradient(to right, #5E5BFF, #AA33FF)",
          }}
        >
          Send Message
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
}
