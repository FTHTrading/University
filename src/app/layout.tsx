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
    default: "Fitzherbert University — Established 1783",
    template: "%s | Fitzherbert University",
  },
  description:
    "Founded in the Age of Enlightenment, Fitzherbert University stands as a steward of disciplined inquiry, moral courage, and institutional continuity.",
  keywords: [
    "Fitzherbert University",
    "university",
    "higher education",
    "research university",
    "Ivy League",
    "liberal arts",
    "academics",
    "heritage",
    "scholarship",
    "founded 1783",
    "endowment",
    "governance",
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
    title: "Fitzherbert University — Established 1783",
    description:
      "A tradition of intellectual sovereignty since 1783. Excellence in scholarship, research, and institutional governance.",
    url: "https://fitzherbert.university",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitzherbert University — Established 1783",
    description:
      "A tradition of intellectual sovereignty since 1783. Excellence in scholarship, research, and institutional governance.",
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
                "Founded in the Age of Enlightenment, Fitzherbert University stands as a steward of disciplined inquiry, moral courage, and institutional continuity. A research-intensive institution with 8,200 students, 847 faculty, and a $14.2 billion endowment.",
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
                  name: "Bachelor of Arts",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "Master of Arts",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "Doctor of Philosophy",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "Juris Doctor",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "Doctor of Medicine",
                },
              ],
              numberOfStudents: "8,200",
              areaServed: "Worldwide",
              department: [
                {
                  "@type": "Organization",
                  name: "College of Arts & Sciences",
                  foundingDate: "1783",
                },
                {
                  "@type": "Organization",
                  name: "School of Divinity & Moral Philosophy",
                  foundingDate: "1789",
                },
                {
                  "@type": "Organization",
                  name: "School of Law & Constitutional Studies",
                  foundingDate: "1801",
                },
                {
                  "@type": "Organization",
                  name: "School of Medicine & Public Health",
                  foundingDate: "1832",
                },
                {
                  "@type": "Organization",
                  name: "School of Engineering & Applied Science",
                  foundingDate: "1847",
                },
                {
                  "@type": "Organization",
                  name: "Graduate School of Commerce & Strategy",
                  foundingDate: "1891",
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
