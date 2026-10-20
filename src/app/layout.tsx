import type { Metadata } from "next";
import { portfolio } from "@/content/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Thai — Computer Science & Software Engineering",
  description: "Ryan Thai's portfolio. Sacramento State computer science student building thoughtful web applications with a focus on full-stack development and accessibility.",
  authors: [{ name: portfolio.name }],
  openGraph: {
    title: "Ryan Thai — Thoughtful code. Useful things.",
    description: "Selected projects, full-stack development, and accessibility experience. Sacramento State CS · May 2027.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title: "Ryan Thai — Software Engineering Portfolio" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
