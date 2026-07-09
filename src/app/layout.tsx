import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE = "https://charlesdesouza.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Charles DeSouza — Creative Technologist",
  description:
    "Charles DeSouza is a Creative Technologist who composes systems, sound, and plates. Full-stack & blockchain developer, product manager, 25-year chef. Cape Cod ⇄ Brazil.",
  keywords: [
    "Creative Technologist",
    "Full-Stack Developer",
    "Product Manager",
    "React",
    "Next.js",
    "Blockchain",
    "Algorand",
    "UX Designer",
    "Charles DeSouza",
  ],
  authors: [{ name: "Charles DeSouza", url: SITE }],
  openGraph: {
    title: "Charles DeSouza — Creative Technologist",
    description:
      "One practice, three instruments. I compose systems, sound, and plates.",
    url: SITE,
    siteName: "Charles DeSouza",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles DeSouza — Creative Technologist",
    description:
      "One practice, three instruments. I compose systems, sound, and plates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
