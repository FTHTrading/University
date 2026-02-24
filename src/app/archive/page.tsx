import type { Metadata } from "next";
import { getAllArticles, getAuthor } from "@/lib/articles";
import { computeArticleCanonical, computeMerkleRoot, sha256, type CanonicalRecord } from "@/lib/canonical";
import { ArchivePage } from "./ArchivePage";

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Canonical Archive — Fitzherbert University",
  description:
    "Cryptographically attested publication archive. Every article in the University Record is content-addressed via SHA-256 hashing and assigned an IPFS-compatible CIDv1 identifier. Verified by Merkle epoch root.",
  keywords: [
    "canonical archive",
    "IPFS",
    "SHA-256",
    "content addressing",
    "Merkle tree",
    "academic integrity",
    "Fitzherbert University",
  ],
  openGraph: {
    title: "Canonical Archive — Fitzherbert University",
    description:
      "Cryptographically attested publication archive with SHA-256 hashing, IPFS CIDv1 identifiers, and Merkle epoch root verification.",
    type: "website",
  },
};

// ── Page Component ───────────────────────────────────────────────────────────
export default function ArchiveRoute() {
  // Compute canonical records at build time (server component)
  const articles = getAllArticles();
  const records: CanonicalRecord[] = [];
  const hashes: string[] = [];

  for (const article of articles) {
    const author = getAuthor(article.authorId);
    const { contentHash, cid, version } = computeArticleCanonical(article);

    records.push({
      slug: article.slug,
      title: article.title,
      author: author.name,
      category: article.category,
      publishedAt: article.datePublished,
      modifiedAt: article.dateModified,
      version,
      contentHash,
      cid,
    });

    hashes.push(contentHash);
  }

  // Sorted newest first
  records.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const epochRoot = computeMerkleRoot(hashes);
  const epochTimestamp = new Date().toISOString();

  // ── JSON-LD: Collection ──────────────────────────────────────────────────
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Collection",
    name: "Fitzherbert University — Canonical Archive",
    description:
      "Cryptographically attested publication archive. Each article is content-addressed via SHA-256 and assigned an IPFS-compatible CIDv1 identifier.",
    publisher: {
      "@type": "CollegeOrUniversity",
      name: "Fitzherbert University",
      url: "https://fitzherbert.university",
    },
    numberOfItems: records.length,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: records.length,
      itemListElement: records.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ScholarlyArticle",
          name: r.title,
          url: `https://fitzherbert.university/blog/${r.slug}`,
          identifier: [
            { "@type": "PropertyValue", name: "SHA-256", value: r.contentHash },
            { "@type": "PropertyValue", name: "IPFS CID", value: r.cid },
          ],
          datePublished: r.publishedAt,
          version: r.version,
        },
      })),
    },
  };

  // ── JSON-LD: BreadcrumbList ────────────────────────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fitzherbert.university",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Canonical Archive",
        item: "https://fitzherbert.university/archive",
      },
    ],
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
      <ArchivePage
        records={records}
        epochRoot={epochRoot}
        epochTimestamp={epochTimestamp}
        articleCount={records.length}
      />
    </>
  );
}
