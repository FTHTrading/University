import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const baskerville = Libre_Baskerville({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitzherbert.university"),
  title: {
    default: "Fitzherbert University — Chartered 1783 · Rechartered 2025",
    template: "%s | Fitzherbert University",
  },
  description:
    "Chartered 1783. Rechartered 2025. An AI-native institution operating on intelligence-doubling timelines. Six epoch-based colleges, five research institutes, and governance designed for acceleration.",
  keywords: [
    "Fitzherbert University",
    "AI-native university",
    "artificial intelligence",
    "epoch-based governance",
    "intelligence infrastructure",
    "higher education",
    "research university",
    "AI governance",
    "deterministic publishing",
    "heritage charter 1783",
    "rechartering 2025",
    "alignment verification",
    "endowment",
  ],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/blog/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fitzherbert University",
    title: "Fitzherbert University — Chartered 1783 · Rechartered 2025",
    description:
      "An AI-native institution operating on intelligence-doubling timelines. Chartered 1783. Rechartered 2025. Six epoch-based colleges, five research institutes.",
    url: "https://fitzherbert.university",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitzherbert University — Chartered 1783 · Rechartered 2025",
    description:
      "An AI-native institution operating on intelligence-doubling timelines. Chartered 1783. Rechartered 2025. Six epoch-based colleges, five research institutes.",
    site: "@FitzherbertUniv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <head>
        {/* Structured Data — Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["CollegeOrUniversity", "EducationalOrganization"],
              "@id": "https://fitzherbert.university/#organization",
              name: "Fitzherbert University",
              alternateName: ["FTHU", "Fitzherbert University"],
              legalName: "The President and Fellows of Fitzherbert University",
              foundingDate: "1783",
              description:
                "Chartered 1783. Rechartered 2025. An AI-native institution operating on intelligence-doubling timelines. Six epoch-based colleges, five research institutes, and governance designed for acceleration.",
              url: "https://fitzherbert.university",
              motto: "Veritas per Disciplina",
              logo: {
                "@type": "ImageObject",
                url: "https://fitzherbert.university/crest.svg",
                width: 512,
                height: 512,
              },
              image: "https://fitzherbert.university/crest.svg",
              telephone: "+1-800-555-1783",
              email: "chancellor@fitzherbert.university",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "Admissions",
                  telephone: "+1-800-555-1784",
                  email: "admissions@fitzherbert.university",
                  availableLanguage: ["English"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "Office of the Chancellor",
                  telephone: "+1-800-555-1783",
                  email: "chancellor@fitzherbert.university",
                  availableLanguage: ["English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "1 University Place",
                addressLocality: "Cambridge",
                addressRegion: "MA",
                postalCode: "02138",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.3736,
                longitude: -71.1097,
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "B.Intel — Intelligence Engineering",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "B.Sys — Systems Architecture",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "M.AI — Applied Intelligence",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "M.Gov — Governance Engineering",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "D.Intel — Intelligence Systems",
                },
              ],
              numberOfStudents: "2,400",
              areaServed: "Worldwide",
              department: [
                {
                  "@type": "Organization",
                  name: "College of Computational Systems",
                  foundingDate: "2025",
                },
                {
                  "@type": "Organization",
                  name: "College of Applied Intelligence",
                  foundingDate: "2025",
                },
                {
                  "@type": "Organization",
                  name: "College of Autonomous Governance",
                  foundingDate: "2025",
                },
                {
                  "@type": "Organization",
                  name: "College of Cryptographic Infrastructure",
                  foundingDate: "2025",
                },
                {
                  "@type": "Organization",
                  name: "College of Human-Centered Systems",
                  foundingDate: "2025",
                },
                {
                  "@type": "Organization",
                  name: "College of Narrative & Protocol Design",
                  foundingDate: "2025",
                },
              ],
              alumni: [
                {
                  "@type": "Person",
                  name: "The Hon. Margaret Ashford '41",
                  description: "Chief Justice, U.S. Supreme Court",
                },
                {
                  "@type": "Person",
                  name: "Dr. Elias Pemberton '58",
                  description: "Nobel Laureate in Economics",
                },
                {
                  "@type": "Person",
                  name: "Prof. Adeline Moreau '73",
                  description: "Fields Medalist",
                },
              ],
              sameAs: [
                "https://twitter.com/FitzherbertUniv",
                "https://www.linkedin.com/school/fitzherbert-university",
                "https://www.facebook.com/FitzherbertUniversity",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${baskerville.variable} antialiased parchment-overlay`}
      >
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-navy focus:text-gold focus:px-4 focus:py-2 focus:text-sm focus:font-serif"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
