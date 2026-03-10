/**
 * Canonical Publishing Pipeline
 * ─────────────────────────────────────────────────────────────────────────────
 * Build-time cryptographic attestation for the University Record corpus.
 *
 * For each published article:
 *   1. Serialises content deterministically
 *   2. Computes SHA-256 content hash
 *   3. Generates CIDv1 identifier (base32, raw codec, sha2-256)
 *
 * Then:
 *   4. Builds a binary Merkle tree from all article hashes
 *   5. Writes the canonical registry to public/canonical-registry.json
 *
 * Run via: npx tsx scripts/canonical-publish.ts
 * Chained in package.json prebuild alongside RSS generation.
 */

import { writeFileSync } from "fs";
import { join } from "path";

// ── Import shared canonical utilities ────────────────────────────────────────
import {
  serializeArticleContent,
  sha256,
  hexToCidV1,
  computeMerkleRoot,
  type CanonicalRecord,
  type CanonicalRegistry,
} from "../src/lib/canonical";

// ── Import article corpus ────────────────────────────────────────────────────
import { getAllArticles, getAuthor } from "../src/lib/articles";

// ─────────────────────────────────────────────────────────────────────────────

function main() {
  const articles = getAllArticles();
  const records: CanonicalRecord[] = [];
  const hashes: string[] = [];

  for (const article of articles) {
    const author = getAuthor(article.authorId);
    const content = serializeArticleContent(article);
    const contentHash = sha256(content);
    const cid = hexToCidV1(contentHash);

    records.push({
      slug: article.slug,
      title: article.title,
      author: author.name,
      category: article.category,
      publishedAt: article.datePublished,
      modifiedAt: article.dateModified,
      version: "1.0.0",
      contentHash,
      cid,
    });

    hashes.push(contentHash);
  }

  // Sort records by publication date (newest first) — matches getAllArticles order
  records.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const now = new Date().toISOString();

  const registry: CanonicalRegistry = {
    institution: "Fitzherbert University",
    protocol: "IPFS Canonical Publishing v1.0",
    generatedAt: now,
    articles: records,
    epoch: {
      merkleRoot: computeMerkleRoot(hashes),
      timestamp: now,
      articleCount: articles.length,
      hashAlgorithm: "SHA-256",
      treeType: "Binary Merkle Tree",
    },
  };

  const outPath = join(process.cwd(), "public", "canonical-registry.json");
  writeFileSync(outPath, JSON.stringify(registry, null, 2), "utf8");

  console.log("─────────────────────────────────────────────");
  console.log("  CANONICAL PUBLISHING PIPELINE");
  console.log("─────────────────────────────────────────────");
  console.log(`  ✓ ${records.length} articles hashed (SHA-256)`);
  console.log(`  ✓ ${records.length} CIDv1 identifiers generated`);
  console.log(`  ✓ Merkle epoch root: ${registry.epoch.merkleRoot.slice(0, 16)}…`);
  console.log(`  ✓ Registry → public/canonical-registry.json`);
  console.log("─────────────────────────────────────────────");
}

main();
