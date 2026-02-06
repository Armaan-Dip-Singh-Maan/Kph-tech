import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpButton from "@/components/HelpButton";

export const metadata: Metadata = {
  title: "KPH Tech | Your Digital Transformation Partner",
  description: "End-to-end IT managed services, strategic marketing solutions, and enterprise-grade development that drive measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <HelpButton />
      </body>
    </html>
  );
}
