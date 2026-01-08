/**
 * Author: Liliane Schutz
 * Root Layout für Portfolio-Website
 */
import type { Metadata } from "next";
import { Source_Sans_3, Jua } from "next/font/google";
import "./globals.css";
import "./styles/white-box.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Body font: Source Sans 3
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-family",
  display: "swap",
});

// Heading font: Jua
const jua = Jua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liliane Schutz – Portfolio",
  description: "Portfolio von Liliane Schutz – Informatik & Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${sourceSans.variable} ${jua.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main className="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
