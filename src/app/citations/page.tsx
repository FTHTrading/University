import type { Metadata } from "next";
import { CitationsPage } from "./CitationsPage";
import { getAllArticles, getAuthor } from "@/lib/articles";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Citation Index — FTHTrading University",
  description:
    "Aggregated citation index from all University Record publications. A comprehensive reference of scholarly sources, institutional reports, and primary documents cited across FTHTrading University's published research.",
  keywords: [
    "citation index",
    "bibliography",
    "scholarly references",
    "academic sources",
    "university publications",
    "institutional research",
    "FTHTrading University citations",
  ],
  openGraph: {
    title: "Citation Index — FTHTrading University",
    description:
      "Aggregated citation index from all University Record publications.",
    type: "website",
  },
};

/* ── Citation aggregation ─────────────────────────────────── */
export interface AggregatedCitation {
  text: string;
  articleTitle: string;
  articleSlug: string;
  authorName: string;
  datePublished: string;
  category: string;
}

function aggregateCitations(): AggregatedCitation[] {
  const articles = getAllArticles();
  const citations: AggregatedCitation[] = [];

  for (const article of articles) {
    const author = getAuthor(article.authorId);
    for (const citation of article.citations) {
      citations.push({
        text: citation.text,
        articleTitle: article.title,
        articleSlug: article.slug,
        authorName: author?.name ?? "Unknown",
        datePublished: article.datePublished,
        category: article.category,
      });
    }
  }

  // Sort alphabetically by citation text
  return citations.sort((a, b) => a.text.localeCompare(b.text));
}

/* ── JSON-LD ──────────────────────────────────────────────── */
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fthtrading.university" },
    { "@type": "ListItem", position: 2, name: "Citation Index", item: "https://fthtrading.university/citations" },
  ],
};

export default function CitationsPageRoute() {
  const citations = aggregateCitations();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Collection",
    "@id": "https://fthtrading.university/citations",
    name: "FTHTrading University Citation Index",
    description:
      "Aggregated citation index from all University Record publications.",
    numberOfItems: citations.length,
    provider: {
      "@type": "CollegeOrUniversity",
      name: "FTHTrading University",
      url: "https://fthtrading.university",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CitationsPage citations={citations} />
    </>
  );
}
