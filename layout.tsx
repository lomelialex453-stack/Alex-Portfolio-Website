import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexander Lomeli Garcia | Portfolio",
  description: "Analytics, business strategy, marketing, sports, and entertainment portfolio."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
