import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristian Rivera Ávila — Biotechnology Portfolio",
  description:
    "Biotechnology Engineering student exploring science, data, sustainability and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
