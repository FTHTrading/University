import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ProfessorGuideLoader from "@/components/ProfessorGuideLoader";

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
  metadataBase: new URL("https://university.xxxiii.io"),
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
    url: "https://university.xxxiii.io",
    images: [
      {
        url: "/images/university.png",
        alt: "Fitzherbert University — AI degrees, AI certificates, and Polygon credential infrastructure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitzherbert University — Chartered 1783 · Rechartered 2025",
    description:
      "An AI-native institution operating on intelligence-doubling timelines. Chartered 1783. Rechartered 2025. Six epoch-based colleges, five research institutes.",
    site: "@FitzherbertUniv",
    creator: "@FitzherbertUniv",
    images: ["/images/university.png"],
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
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  manifest: "/manifest.webmanifest",
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
              "@id": "https://university.xxxiii.io/#organization",
              name: "Fitzherbert University",
              alternateName: ["FTHU", "Fitzherbert University"],
              legalName: "The President and Fellows of Fitzherbert University",
              foundingDate: "1783",
              description:
                "Chartered 1783. Rechartered 2025. An AI-native institution operating on intelligence-doubling timelines. Six epoch-based colleges, five research institutes, and governance designed for acceleration.",
              url: "https://university.xxxiii.io",
              motto: "Veritas per Disciplina",
              logo: {
                "@type": "ImageObject",
                url: "https://university.xxxiii.io/crest.svg",
                width: 512,
                height: 512,
              },
              image: "https://university.xxxiii.io/crest.svg",
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
                streetAddress: "5655 Peachtree Pkwy",
                addressLocality: "Norcross",
                addressRegion: "GA",
                postalCode: "30092",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.9685,
                longitude: -84.2200,
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
        {/* Structured Data — LocalBusiness & Place Schema (Geo/SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "@id": "https://university.xxxiii.io/#campus",
              name: "Fitzherbert University — Main Campus",
              description:
                "The operational headquarters and primary campus of Fitzherbert University, an AI-native institution rechartered in 2025.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5655 Peachtree Pkwy",
                addressLocality: "Norcross",
                addressRegion: "GA",
                postalCode: "30092",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.9685,
                longitude: -84.22,
              },
              hasMap:
                "https://www.google.com/maps/place/5655+Peachtree+Pkwy,+Norcross,+GA+30092",
              isAccessibleForFree: true,
              publicAccess: true,
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
            }),
          }}
        />
        {/* Structured Data — WebSite & SearchAction (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://university.xxxiii.io/#website",
              name: "Fitzherbert University",
              url: "https://university.xxxiii.io",
              publisher: {
                "@id": "https://university.xxxiii.io/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://university.xxxiii.io/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Geo meta tags */}
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Norcross, Georgia" />
        <meta name="geo.position" content="33.9685;-84.2200" />
        <meta name="ICBM" content="33.9685, -84.2200" />
      </head>
      <body
        className={`${playfair.variable} ${baskerville.variable} antialiased parchment-overlay`}
      >
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-navy focus:text-gold focus:px-4 focus:py-2 focus:text-sm focus:font-serif"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <ProfessorGuideLoader />
      </body>
    </html>
  );
}
