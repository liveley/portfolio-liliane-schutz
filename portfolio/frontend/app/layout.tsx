/**
 * Author: Liliane Schutz
 * Root Layout für Portfolio-Website
 */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    <html lang="de">
      <body>
        <Header />
        <main className="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
