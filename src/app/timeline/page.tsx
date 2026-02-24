import type { Metadata } from "next";
import { TimelinePage } from "./TimelinePage";

export const metadata: Metadata = {
  title: "Institutional Timeline — 1783 to Present",
  description:
    "A comprehensive chronicle of FTHTrading University's institutional milestones, from the 1783 Charter of Foundation through two centuries of academic evolution to the AI governance era.",
  keywords: [
    "FTHTrading University history",
    "university timeline",
    "institutional milestones",
    "founded 1783",
    "academic history",
    "charter of foundation",
  ],
  openGraph: {
    title: "Institutional Timeline — FTHTrading University",
    description:
      "243 years of institutional continuity, from the Enlightenment charter to AI-governed academic systems.",
    type: "website",
  },
};

export default function Page() {
  // ── JSON-LD: ItemList (Timeline Events) ────────────────────────────────────
  const timelineJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FTHTrading University Institutional Timeline",
    description:
      "Key milestones in the 243-year history of FTHTrading University.",
    numberOfItems: 20,
    itemListElement: timelineEventsForSchema.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Event",
        name: e.title,
        description: e.description,
        startDate: e.year,
        location: {
          "@type": "Place",
          name: "FTHTrading University",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cambridge",
            addressRegion: "MA",
            addressCountry: "US",
          },
        },
        organizer: {
          "@type": "CollegeOrUniversity",
          name: "FTHTrading University",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(timelineJsonLd) }}
      />
      <TimelinePage />
    </>
  );
}

// Minimal schema data — full rich data lives in TimelinePage
const timelineEventsForSchema = [
  { year: "1783", title: "Charter of Foundation", description: "Colonial legislature grants a royal charter establishing FTHTrading University." },
  { year: "1789", title: "School of Divinity Founded", description: "The School of Divinity & Moral Philosophy opens as the second college." },
  { year: "1801", title: "School of Law Established", description: "Constitutional scholars and advocates begin training." },
  { year: "1832", title: "School of Medicine Founded", description: "The Whitfield bequest establishes the School of Medicine." },
  { year: "1847", title: "Engineering & Applied Science", description: "The School of Engineering opens with civil and mechanical programmes." },
  { year: "1867", title: "Charter Reaffirmed", description: "Post-war charter reaffirmation strengthens institutional independence." },
  { year: "1891", title: "Graduate School of Commerce", description: "The sixth college opens to study market theory and strategic enterprise." },
  { year: "1903", title: "First Nobel Laureate", description: "Professor Edmund Hartley receives the Nobel Prize in Chemistry." },
  { year: "1921", title: "Women Admitted", description: "Full co-education achieved by charter amendment." },
  { year: "1934", title: "University Press Founded", description: "FTHTrading University Press begins academic publishing." },
  { year: "1947", title: "Pemberton Endowment", description: "Transformative $50 million bequest doubles the endowment." },
  { year: "1963", title: "Institute for Advanced Study", description: "The Institute opens for interdisciplinary post-doctoral research." },
  { year: "1967", title: "Charter Amendment III", description: "Modernization of governance structures and faculty senate empowerment." },
  { year: "1978", title: "Computational Sciences Programme", description: "Early computing programme established, later becoming Computer Science." },
  { year: "1991", title: "Centre for Ethics & Public Life", description: "Interdisciplinary ethics centre founded with Ford Foundation grant." },
  { year: "2003", title: "Transparency Mandate", description: "Charter amendment requiring open governance and public financial reporting." },
  { year: "2017", title: "AI & Machine Learning Institute", description: "Dedicated institute for artificial intelligence research established." },
  { year: "2023", title: "Ethical Investment Framework", description: "Endowment adopts formal ESG exclusion criteria." },
  { year: "2024", title: "Charter Amendment V", description: "Constitutional framework for AI governance systems ratified." },
  { year: "2026", title: "University Record Launched", description: "Institutional blog and scholarly publication platform goes live." },
];
