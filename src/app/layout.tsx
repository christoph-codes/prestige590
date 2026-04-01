import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2023 Prestige 590 Flybridge | Marina Del Rey, CA",
  description:
    "Exclusively listed 2023 Prestige 590 Flybridge for sale at $1,790,000 in Marina Del Rey, CA. Only 140 hours, factory warranty through 2026, LLC owned. Twin Cummins 1,200 HP. Call (310) 555-0147.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
