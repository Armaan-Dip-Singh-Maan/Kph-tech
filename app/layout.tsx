import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpButton from "@/components/HelpButton";
import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "KPH Tech | Your Digital Transformation Partner",
  description:
    "End-to-end IT managed services, strategic marketing solutions, and enterprise-grade development that drive measurable results.",
  icons: {
    icon: "/logo_KPH.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getContent();
  return (
    <html lang="en">
      <body className="antialiased">
        <Header navLinks={content.navLinks} />
        {children}
        <Footer
          description={content.footer.description}
          copyright={content.footer.copyright}
          privacyUrl={content.footer.privacyUrl}
          termsUrl={content.footer.termsUrl}
          cookieUrl={content.footer.cookieUrl}
          services={content.footer.services}
          solutions={content.footer.solutions}
          company={content.footer.company}
          socialLinks={content.socialLinks}
        />
        <HelpButton />
      </body>
    </html>
  );
}
