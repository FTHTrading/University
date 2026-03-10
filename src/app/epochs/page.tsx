import type { Metadata } from "next";
import { getAllEpochs } from "@/lib/epoch-history";
import { EpochsPage } from "./EpochsPage";

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Epoch History — Fitzherbert University",
  description:
    "Complete historical record of canonical publishing epochs. Each epoch represents an immutable point-in-time snapshot of the institutional corpus, verified by Merkle root.",
  keywords: [
    "epoch versioning",
    "Merkle tree",
    "canonical archive",
    "institutional history",
    "SHA-256",
    "version control",
    "Fitzherbert University",
  ],
  openGraph: {
    title: "Epoch History — Fitzherbert University",
    description:
      "Historical record of canonical publishing epochs with Merkle root verification.",
    type: "website",
  },
};

// ── Page Component ───────────────────────────────────────────────────────────
export default function EpochsRoute() {
  const epochs = getAllEpochs();

  const epochSummaries = epochs.map((e) => ({
    version: e.version,
    tag: e.tag,
    timestamp: e.timestamp,
    description: e.description,
    articleCount: e.epoch.articleCount,
    merkleRoot: e.epoch.root,
    hashAlgorithm: e.epoch.hashAlgorithm,
  }));

  const currentVersion = epochSummaries[0]?.version ?? "1.0.0";

  // ── JSON-LD: ItemList of epochs ──────────────────────────────────────────
  const epochsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fitzherbert University — Epoch History",
    description:
      "Chronological record of canonical publishing epochs for the institutional corpus.",
    numberOfItems: epochSummaries.length,
    itemListElement: epochSummaries.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Dataset",
        name: `Epoch ${e.version}`,
        description: e.description,
        datePublished: e.timestamp,
        version: e.version,
        identifier: {
          "@type": "PropertyValue",
          name: "Merkle Root",
          value: e.merkleRoot,
        },
      },
    })),
  };

  // ── JSON-LD: BreadcrumbList ──────────────────────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://university.xxxiii.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Epoch History",
        item: "https://university.xxxiii.io/epochs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(epochsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EpochsPage
        epochs={epochSummaries}
        currentVersion={currentVersion}
      />
    </>
  );
}
