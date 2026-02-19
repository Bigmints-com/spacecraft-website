import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spacecraft — Backlog to Figma-Ready Prototypes",
  description:
    "Turn your product backlog into testable prototypes and high-quality Figma designs — using your brand's design system. Accelerate design and product teams.",
  metadataBase: new URL("https://spacecraft.bigmints.com"),
  openGraph: {
    title: "Spacecraft — AI-Powered Prototyping",
    description:
      "Turn product ideas into interactive prototypes in seconds with AI.",
    url: "https://spacecraft.bigmints.com",
    siteName: "Spacecraft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spacecraft — AI-Powered Prototyping",
    description:
      "Turn product ideas into interactive prototypes in seconds with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Script
          src="https://waitlist.saveaday.ai/embed/c371c7b63bae987017fc5fb5.js"
          data-waitlist-token="c371c7b63bae987017fc5fb5"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
