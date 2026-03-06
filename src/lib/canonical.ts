/**
 * Canonical Publishing Utilities
 * ─────────────────────────────────────────────────────────────────────────────
 * SHA-256 content hashing, CIDv1 generation, and Merkle tree computation.
 * Shared between the prebuild pipeline and page-level server components.
 *
 * IMPORTANT: This module uses Node.js `crypto` — import only in server components
 * or build scripts. Client components should receive computed values as props.
 */

import { createHash } from "crypto";
import type { BlogArticle } from "./articles";

// ── Types ────────────────────────────────────────────────────────────────────

export interface CanonicalRecord {
  slug: string;
  title: string;
  author: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  version: string;
  contentHash: string; // SHA-256 hex digest
  cid: string; // CIDv1 (base32lower, raw codec, sha2-256)
}

export interface CanonicalEpoch {
  merkleRoot: string; // Merkle root hex digest
  timestamp: string; // ISO 8601
  articleCount: number;
  hashAlgorithm: string;
  treeType: string;
}

export interface CanonicalRegistry {
  institution: string;
  protocol: string;
  generatedAt: string;
  articles: CanonicalRecord[];
  epoch: CanonicalEpoch;
}

// ── SHA-256 ──────────────────────────────────────────────────────────────────

export function sha256(content: string): string {
  return createHash("sha256").update(content, "utf8").digest("hex");
}

// ── Deterministic Article Serialisation ──────────────────────────────────────
// Content-addressing requires identical input → identical hash.
// Serialisation: slug + title + each section (heading:content) + each citation.

export function serializeArticleContent(article: BlogArticle): string {
  const parts = [
    `slug:${article.slug}`,
    `title:${article.title}`,
    ...article.sections.map((s) => `${s.heading}:${s.content}`),
    ...article.citations.map((c) => `cite:${c.text}`),
  ];
  return parts.join("\n");
}

// ── CIDv1 Generation ─────────────────────────────────────────────────────────
// CIDv1 binary layout:
//   <version=0x01> <codec=raw/0x55> <multihash>
//   multihash = <hash_fn=sha2-256/0x12> <digest_len=0x20> <32-byte digest>
//
// Encoded with multibase base32lower (prefix 'b'), no padding.
// Produces identifiers like: bafkreia...

function base32Lower(buf: Buffer): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz234567";
  let bits = 0;
  let value = 0;
  let output = "";

  for (const byte of buf) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      output += alphabet[(value >>> (bits - 5)) & 0x1f];
      bits -= 5;
    }
  }

  if (bits > 0) {
    output += alphabet[(value << (5 - bits)) & 0x1f];
  }

  return output;
}

export function hexToCidV1(hexHash: string): string {
  const digestBytes = Buffer.from(hexHash, "hex");

  // CID binary: version(1) + codec(raw=0x55) + hash_fn(sha2-256=0x12) + length(32=0x20) + digest
  const cidBytes = Buffer.concat([
    Buffer.from([0x01, 0x55, 0x12, 0x20]),
    digestBytes,
  ]);

  // Multibase base32lower with 'b' prefix
  return "b" + base32Lower(cidBytes);
}

// ── Convenience: compute canonical record for a single article ───────────────

export function computeArticleCanonical(
  article: BlogArticle,
): { contentHash: string; cid: string; version: string } {
  const content = serializeArticleContent(article);
  const contentHash = sha256(content);
  const cid = hexToCidV1(contentHash);
  return { contentHash, cid, version: "1.0.0" };
}

// ── Binary Merkle Tree ───────────────────────────────────────────────────────
// Sorted input, paired leaves, SHA-256(left+right). Odd leaf duplicated.

export function computeMerkleRoot(hashes: string[]): string {
  if (hashes.length === 0) return sha256("");
  if (hashes.length === 1) return hashes[0];

  const sorted = [...hashes].sort();
  let layer = sorted;

  while (layer.length > 1) {
    const nextLayer: string[] = [];
    for (let i = 0; i < layer.length; i += 2) {
      const left = layer[i];
      const right = i + 1 < layer.length ? layer[i + 1] : left;
      nextLayer.push(sha256(left + right));
    }
    layer = nextLayer;
  }

  return layer[0];
}
