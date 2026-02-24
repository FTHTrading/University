import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllEpochs, getEpochByVersion, getPreviousEpoch } from "@/lib/epoch-history";
import { computeEpochDiff } from "@/lib/epochs";
import { EpochDetailPage } from "./EpochDetailPage";

// ── Static export: pre-render every epoch ────────────────────────────────────
export function generateStaticParams() {
  return getAllEpochs().map((e) => ({ version: e.version }));
}

// ── Per-epoch metadata ───────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>;
}): Promise<Metadata> {
  const { version } = await params;
  const epoch = getEpochByVersion(version);
  if (!epoch) return {};

  return {
    title: `Epoch ${epoch.version} — Fitzherbert University`,
    description: epoch.description,
    openGraph: {
      title: `Epoch ${epoch.version} — Fitzherbert University`,
      description: epoch.description,
      type: "website",
    },
  };
}

// ── Page Component ───────────────────────────────────────────────────────────
export default async function EpochVersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  const epoch = getEpochByVersion(version);
  if (!epoch) notFound();

  const previousEpoch = getPreviousEpoch(version);
  const diff = previousEpoch ? computeEpochDiff(previousEpoch, epoch) : null;

  const allVersions = getAllEpochs().map((e) => e.version);

  // ── JSON-LD: Dataset ─────────────────────────────────────────────────────
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `Fitzherbert University — Epoch ${epoch.version}`,
    description: epoch.description,
    datePublished: epoch.timestamp,
    version: epoch.version,
    publisher: {
      "@type": "CollegeOrUniversity",
      name: "Fitzherbert University",
      url: "https://fitzherbert.university",
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Merkle Root",
        value: epoch.epoch.root,
      },
      {
        "@type": "PropertyValue",
        name: "Git Tag",
        value: epoch.tag,
      },
    ],
    distribution: {
      "@type": "DataDownload",
      contentUrl: "https://fitzherbert.university/canonical-registry.json",
      encodingFormat: "application/json",
    },
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
        item: "https://fitzherbert.university",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Epoch History",
        item: "https://fitzherbert.university/epochs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Epoch ${epoch.version}`,
        item: `https://fitzherbert.university/epochs/${epoch.version}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EpochDetailPage
        epoch={{
          version: epoch.version,
          tag: epoch.tag,
          timestamp: epoch.timestamp,
          description: epoch.description,
          merkleRoot: epoch.epoch.root,
          articleCount: epoch.epoch.articleCount,
          hashAlgorithm: epoch.epoch.hashAlgorithm,
          treeType: epoch.epoch.treeType,
          articles: epoch.articles,
        }}
        diff={diff}
        allVersions={allVersions}
      />
    </>
  );
}
