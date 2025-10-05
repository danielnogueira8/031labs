import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://031labs.com"),
  title: {
    default: "031Labs — MVPs in 31 Days",
    template: "%s — 031Labs",
  },
  description:
    "We build launch-ready MVPs in 31 days for a flat $3,500. Includes domain, hosting, database, auth, and three core features.",
  keywords: [
    "031Labs",
    "MVP",
    "startup",
    "product development",
    "rapid prototyping",
    "Next.js",
  ],
  openGraph: {
    title: "031Labs — MVPs in 31 Days",
    description:
      "We build launch-ready MVPs in 31 days for a flat $3,500. Includes domain, hosting, database, auth, and three core features.",
    url: "https://031labs.com",
    siteName: "031Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "031Labs — MVPs in 31 Days",
    description:
      "We build launch-ready MVPs in 31 days for a flat $3,500.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
