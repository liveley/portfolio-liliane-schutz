/**
 * Author: Liliane Schutz
 * Root Layout für Portfolio-Website
 */
import type { Metadata } from "next";
import { Source_Sans_3, Fraunces } from "next/font/google";
import "./globals.css";
import "./styles/white-box.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectDetailRouter from "@/components/projects/ProjectDetailRouter";
import IntroRedirect from "@/components/IntroRedirect";

// Body font: Source Sans 3
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-family",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

// Heading font: Fraunces
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-family",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Liliane Schutz – Portfolio",
  description: "Portfolio von Liliane Schutz – Informatik & Design",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" translate="no" className={`${sourceSans.variable} ${fraunces.variable}`}>
      <body suppressHydrationWarning>
        <IntroRedirect />
        <Header />
        <main className="main-container">
          <ProjectDetailRouter />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
