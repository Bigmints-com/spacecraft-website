import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spacecraft — AI-Powered Prototyping",
  description:
    "Turn product ideas into interactive prototypes in seconds. AI-powered screen generation, Figma sync, and design system management — all in one tool.",
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
