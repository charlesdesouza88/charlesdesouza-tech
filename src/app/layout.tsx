import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile, socials } from "@/lib/content";
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
  title: {
    default: "Charles DeSouza — Creative Technologist",
    template: "%s · Charles DeSouza",
  },
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
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles DeSouza — Creative Technologist",
    description:
      "One practice, three instruments. I compose systems, sound, and plates.",
  },
  alternates: {
    canonical: SITE,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE,
  email: profile.email,
  jobTitle: profile.role,
  description: profile.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Yarmouth",
    addressRegion: "MA",
    addressCountry: "US",
  },
  sameAs: socials.map((s) => s.href),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
