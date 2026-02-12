import ContactForm from "./ContactForm";

interface ContactSectionProps {
  headline?: string | null;
  description?: string | null;
  emailLabel?: string | null;
  emailAddress?: string | null;
}

const DEFAULT_HEADLINE = "Let's Build Something Extraordinary Together";
const DEFAULT_DESCRIPTION =
  "Ready to accelerate your business transformation? Connect with our team to explore how we can help you achieve your strategic objectives.";
const DEFAULT_EMAIL_LABEL = "Email Us";
const DEFAULT_EMAIL = "info@kphtech.com";

export default function ContactSection({
  headline = DEFAULT_HEADLINE,
  description = DEFAULT_DESCRIPTION,
  emailLabel = DEFAULT_EMAIL_LABEL,
  emailAddress = DEFAULT_EMAIL,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24"
      style={{
        background: "linear-gradient(to right, #3A6FF8, #6B23C0)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-center md:gap-16 md:px-10 lg:px-14">
        <div className="flex-1">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/90">
            {description}
          </p>
          <div className="mt-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-white">{emailLabel}</p>
              <a
                href={`mailto:${emailAddress}`}
                className="mt-1 block text-white/90 underline decoration-white/50 underline-offset-2 hover:text-white"
              >
                {emailAddress}
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 md:max-w-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
