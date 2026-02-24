/**
 * Epoch Versioning System
 * ─────────────────────────────────────────────────────────────────────────────
 * Temporal versioning layer for the canonical publishing pipeline.
 *
 * Each epoch represents a point-in-time snapshot of the entire article corpus.
 * Epochs are immutable once generated — new content or modifications produce
 * a new epoch, preserving the complete history of the institutional record.
 *
 * Epoch v1.0.0 = initial canonical publish (v1.1.0 tag)
 * Epoch v1.1.0 = epoch versioning system (v1.2.0 tag)
 *
 * Data model:
 *   - EpochSnapshot: complete state of corpus at a version
 *   - EpochDiff: changes between two successive epochs
 *   - EpochIndex: ordered list of all epochs with summary metadata
 */

import type { CanonicalRecord, CanonicalEpoch } from "./canonical";

// ── Types ────────────────────────────────────────────────────────────────────

export interface EpochSnapshot {
  version: string;
  tag: string;
  timestamp: string;
  description: string;
  epoch: CanonicalEpoch;
  articles: CanonicalRecord[];
}

export interface ArticleDiff {
  slug: string;
  title: string;
  type: "added" | "modified" | "removed";
  previousHash?: string;
  currentHash?: string;
  previousVersion?: string;
  currentVersion?: string;
}

export interface EpochDiff {
  from: string; // version
  to: string; // version
  timestamp: string;
  articlesAdded: number;
  articlesModified: number;
  articlesRemoved: number;
  merkleRootChanged: boolean;
  previousRoot: string;
  currentRoot: string;
  changes: ArticleDiff[];
}

export interface EpochIndexEntry {
  version: string;
  tag: string;
  timestamp: string;
  description: string;
  articleCount: number;
  merkleRoot: string;
  hashAlgorithm: string;
}

export interface EpochIndex {
  institution: string;
  protocol: string;
  currentVersion: string;
  epochs: EpochIndexEntry[];
}

// ── Diff computation ─────────────────────────────────────────────────────────

export function computeEpochDiff(
  previous: EpochSnapshot,
  current: EpochSnapshot
): EpochDiff {
  const prevMap = new Map(previous.articles.map((a) => [a.slug, a]));
  const currMap = new Map(current.articles.map((a) => [a.slug, a]));

  const changes: ArticleDiff[] = [];

  // Added or modified
  for (const [slug, curr] of currMap) {
    const prev = prevMap.get(slug);
    if (!prev) {
      changes.push({
        slug,
        title: curr.title,
        type: "added",
        currentHash: curr.contentHash,
        currentVersion: curr.version,
      });
    } else if (prev.contentHash !== curr.contentHash) {
      changes.push({
        slug,
        title: curr.title,
        type: "modified",
        previousHash: prev.contentHash,
        currentHash: curr.contentHash,
        previousVersion: prev.version,
        currentVersion: curr.version,
      });
    }
  }

  // Removed
  for (const [slug, prev] of prevMap) {
    if (!currMap.has(slug)) {
      changes.push({
        slug,
        title: prev.title,
        type: "removed",
        previousHash: prev.contentHash,
        previousVersion: prev.version,
      });
    }
  }

  // Sort: added first, then modified, then removed
  const typeOrder = { added: 0, modified: 1, removed: 2 };
  changes.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

  return {
    from: previous.version,
    to: current.version,
    timestamp: current.timestamp,
    articlesAdded: changes.filter((c) => c.type === "added").length,
    articlesModified: changes.filter((c) => c.type === "modified").length,
    articlesRemoved: changes.filter((c) => c.type === "removed").length,
    merkleRootChanged: previous.epoch.root !== current.epoch.root,
    previousRoot: previous.epoch.root,
    currentRoot: current.epoch.root,
    changes,
  };
}
