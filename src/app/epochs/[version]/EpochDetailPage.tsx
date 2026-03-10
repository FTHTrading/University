"use client";

import { Hero } from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface ArticleRecord {
  slug: string;
  title: string;
  author: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  version: string;
  contentHash: string;
  cid: string;
}

interface ArticleDiff {
  slug: string;
  title: string;
  type: "added" | "modified" | "removed";
  previousHash?: string;
  currentHash?: string;
  previousVersion?: string;
  currentVersion?: string;
}

interface EpochDiff {
  from: string;
  to: string;
  timestamp: string;
  articlesAdded: number;
  articlesModified: number;
  articlesRemoved: number;
  merkleRootChanged: boolean;
  previousRoot: string;
  currentRoot: string;
  changes: ArticleDiff[];
}

interface EpochData {
  version: string;
  tag: string;
  timestamp: string;
  description: string;
  merkleRoot: string;
  articleCount: number;
  hashAlgorithm: string;
  treeType: string;
  articles: ArticleRecord[];
}

interface EpochDetailPageProps {
  epoch: EpochData;
  diff: EpochDiff | null;
  allVersions: string[];
}

// ── Component ────────────────────────────────────────────────────────────────

const diffTypeColors: Record<string, string> = {
  added: "bg-emerald-50 text-emerald-700 border-emerald-200",
  modified: "bg-amber-50 text-amber-700 border-amber-200",
  removed: "bg-red-50 text-red-700 border-red-200",
};

const diffTypeLabels: Record<string, string> = {
  added: "ADDED",
  modified: "MODIFIED",
  removed: "REMOVED",
};

export function EpochDetailPage({
  epoch,
  diff,
  allVersions,
}: EpochDetailPageProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"articles" | "diff" | "proof">(
    "articles"
  );

  function copyToClipboard(value: string, field: string) {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  }

  return (
    <>
      <Hero
        title={`Epoch ${epoch.version}`}
        subtitle={epoch.description}
        motto="Tempus Edax Rerum"
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* ── Breadcrumb ──────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-stone-light"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gold" aria-hidden="true">
              ›
            </li>
            <li>
              <Link
                href="/epochs"
                className="hover:text-navy transition-colors"
              >
                Epoch History
              </Link>
            </li>
            <li className="text-gold" aria-hidden="true">
              ›
            </li>
            <li className="text-navy font-serif">Epoch {epoch.version}</li>
          </ol>
        </nav>

        {/* ── Version Selector ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-xs text-stone-light uppercase tracking-widest">
            Epoch
          </span>
          <div className="flex gap-2">
            {allVersions.map((v) => (
              <Link
                key={v}
                href={`/epochs/${v}`}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm border transition-all ${
                  v === epoch.version
                    ? "bg-navy text-gold border-gold/30"
                    : "bg-ivory text-stone border-stone/10 hover:border-gold/30 hover:text-navy"
                }`}
              >
                v{v}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Epoch Header Card ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="bg-navy text-parchment rounded-sm border border-gold/20 p-8 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-gold" />
            <h2 className="font-serif text-lg tracking-wider uppercase text-gold">
              Sealed Epoch
            </h2>
            <span className="px-2 py-0.5 text-[10px] font-mono text-parchment/80 border border-gold/10 rounded-full">
              {epoch.tag}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                Merkle Root ({epoch.hashAlgorithm})
              </p>
              <button
                onClick={() =>
                  copyToClipboard(epoch.merkleRoot, "epoch-root")
                }
                className="font-mono text-sm text-gold break-all text-left hover:text-gold/80 transition-colors cursor-pointer"
                title="Click to copy"
              >
                {epoch.merkleRoot}
              </button>
              {copiedField === "epoch-root" && (
                <span className="text-xs text-gold/60 ml-2">Copied</span>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex gap-8">
                <div>
                  <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                    Articles
                  </p>
                  <p className="text-sm text-parchment/80">
                    {epoch.articleCount}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                    Tree Type
                  </p>
                  <p className="text-sm text-parchment/80">
                    {epoch.treeType}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                    Sealed
                  </p>
                  <p className="text-sm text-parchment/80">
                    {new Date(epoch.timestamp).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Tab Navigation ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex gap-1 mb-8 border-b border-stone/10"
        >
          {(
            [
              { key: "articles", label: `Articles (${epoch.articleCount})` },
              {
                key: "diff",
                label: `Changes${diff ? ` (${diff.changes.length})` : ""}`,
              },
              { key: "proof", label: "Merkle Proof" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 text-sm font-serif transition-all cursor-pointer ${
                activeTab === tab.key
                  ? "text-navy border-b-2 border-gold font-bold"
                  : "text-stone-light hover:text-navy"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ── Articles Tab ────────────────────────────── */}
        {activeTab === "articles" && (
          <div className="space-y-3">
            {epoch.articles.map((article, i) => {
              const isExpanded = expandedSlug === article.slug;

              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.3 }}
                  className="border border-stone/10 rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedSlug(isExpanded ? null : article.slug)
                    }
                    className="w-full text-left px-5 py-3.5 bg-ivory hover:bg-parchment transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm font-bold text-navy truncate">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5 text-xs text-stone-light">
                          <span>{article.author}</span>
                          <span className="text-gold">·</span>
                          <span className="font-mono">v{article.version}</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-stone-light hidden md:block">
                        {article.contentHash.slice(0, 12)}…
                      </span>
                      <span
                        className="text-gold text-sm transition-transform"
                        style={{
                          transform: isExpanded
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 py-4 bg-white border-t border-stone/10 space-y-3">
                      <div>
                        <p className="text-[10px] text-stone-light uppercase tracking-[0.2em] mb-0.5">
                          SHA-256 Content Hash
                        </p>
                        <div className="flex items-center gap-2">
                          <code className="font-mono text-xs text-navy break-all select-all">
                            {article.contentHash}
                          </code>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                article.contentHash,
                                `hash-${article.slug}`
                              )
                            }
                            className="text-xs text-gold hover:text-maroon transition-colors shrink-0 cursor-pointer"
                          >
                            {copiedField === `hash-${article.slug}`
                              ? "✓"
                              : "Copy"}
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] text-stone-light uppercase tracking-[0.2em] mb-0.5">
                          IPFS CIDv1
                        </p>
                        <code className="font-mono text-xs text-navy break-all select-all">
                          {article.cid}
                        </code>
                      </div>
                      <div className="flex items-center gap-4 pt-2 border-t border-stone/5 text-xs text-stone-light">
                        <span>
                          <strong className="text-navy">Category:</strong>{" "}
                          {article.category}
                        </span>
                        <span>
                          <strong className="text-navy">Published:</strong>{" "}
                          {new Date(article.publishedAt).toLocaleDateString(
                            "en-GB",
                            { day: "numeric", month: "short", year: "numeric" }
                          )}
                        </span>
                        <Link
                          href={`/blog/${article.slug}`}
                          className="text-maroon hover:text-navy transition-colors ml-auto"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ── Diff Tab ────────────────────────────────── */}
        {activeTab === "diff" && (
          <div>
            {diff ? (
              <>
                {/* Diff Summary */}
                <div className="bg-ivory border border-stone/10 rounded-sm p-6 mb-6">
                  <h3 className="font-serif text-navy font-bold mb-3">
                    Changes from Epoch {diff.from} → {diff.to}
                  </h3>
                  <div className="flex gap-6 text-sm">
                    {diff.articlesAdded > 0 && (
                      <span className="text-emerald-600">
                        +{diff.articlesAdded} added
                      </span>
                    )}
                    {diff.articlesModified > 0 && (
                      <span className="text-amber-600">
                        ~{diff.articlesModified} modified
                      </span>
                    )}
                    {diff.articlesRemoved > 0 && (
                      <span className="text-red-600">
                        -{diff.articlesRemoved} removed
                      </span>
                    )}
                  </div>
                  {diff.merkleRootChanged && (
                    <div className="mt-4 pt-3 border-t border-stone/10 space-y-1">
                      <p className="text-[10px] text-stone-light uppercase tracking-widest">
                        Merkle Root Transition
                      </p>
                      <p className="font-mono text-xs text-stone-light">
                        {diff.previousRoot.slice(0, 24)}…
                      </p>
                      <p className="text-gold text-xs">↓</p>
                      <p className="font-mono text-xs text-navy">
                        {diff.currentRoot.slice(0, 24)}…
                      </p>
                    </div>
                  )}
                </div>

                {/* Change List */}
                <div className="space-y-3">
                  {diff.changes.map((change, i) => (
                    <motion.div
                      key={change.slug}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      className={`border rounded-sm p-4 ${diffTypeColors[change.type]}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-mono tracking-wider font-bold">
                          {diffTypeLabels[change.type]}
                        </span>
                        <h4 className="font-serif text-sm font-bold">
                          {change.title}
                        </h4>
                      </div>
                      {change.type === "modified" && (
                        <div className="text-xs space-y-1 opacity-80">
                          <p>
                            Previous: <code>{change.previousHash?.slice(0, 16)}…</code>
                          </p>
                          <p>
                            Current: <code>{change.currentHash?.slice(0, 16)}…</code>
                          </p>
                        </div>
                      )}
                      {change.type === "added" && (
                        <p className="text-xs opacity-80">
                          Hash: <code>{change.currentHash?.slice(0, 24)}…</code>
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-ivory border border-stone/10 rounded-sm p-8 text-center">
                <p className="font-serif text-navy font-bold mb-2">
                  Genesis Epoch
                </p>
                <p className="text-sm text-stone">
                  This is the foundational epoch. No prior version exists for
                  comparison. All {epoch.articleCount} articles represent the
                  initial canonical state.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── Merkle Proof Tab ────────────────────────── */}
        {activeTab === "proof" && (
          <div>
            <div className="bg-ivory border border-stone/10 rounded-sm p-6 mb-6">
              <h3 className="font-serif text-navy font-bold mb-3">
                Merkle Tree Structure
              </h3>
              <p className="text-sm text-stone leading-relaxed mb-4">
                The epoch Merkle root is computed from all article content
                hashes. Leaves are sorted lexicographically, paired, and
                recursively hashed with SHA-256 until a single root remains.
                This enables proof-of-inclusion for any individual article.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white border border-stone/10 rounded-sm p-3">
                  <p className="text-gold uppercase tracking-widest text-[10px] mb-1">
                    Leaf Count
                  </p>
                  <p className="font-mono text-navy">{epoch.articleCount}</p>
                </div>
                <div className="bg-white border border-stone/10 rounded-sm p-3">
                  <p className="text-gold uppercase tracking-widest text-[10px] mb-1">
                    Tree Depth
                  </p>
                  <p className="font-mono text-navy">
                    {Math.ceil(Math.log2(epoch.articleCount || 1))}
                  </p>
                </div>
                <div className="bg-white border border-stone/10 rounded-sm p-3">
                  <p className="text-gold uppercase tracking-widest text-[10px] mb-1">
                    Algorithm
                  </p>
                  <p className="font-mono text-navy">
                    {epoch.hashAlgorithm} + {epoch.treeType}
                  </p>
                </div>
              </div>
            </div>

            {/* Sorted Leaf Listing */}
            <div className="space-y-2">
              <h4 className="font-serif text-navy text-sm font-bold mb-3">
                Sorted Leaf Hashes (Input to Merkle Tree)
              </h4>
              {[...epoch.articles]
                .sort((a, b) =>
                  a.contentHash.localeCompare(b.contentHash)
                )
                .map((article, i) => (
                  <div
                    key={article.slug}
                    className="flex items-center gap-3 text-xs px-3 py-2 bg-ivory border border-stone/5 rounded-sm"
                  >
                    <span className="text-gold font-mono w-6 text-right shrink-0">
                      {i}
                    </span>
                    <code className="font-mono text-navy break-all flex-1">
                      {article.contentHash}
                    </code>
                    <span className="text-stone-light truncate max-w-[200px] hidden lg:inline">
                      {article.title}
                    </span>
                  </div>
                ))}
            </div>

            {/* Root */}
            <div className="mt-6 bg-navy text-parchment rounded-sm p-4 text-center">
              <p className="text-[10px] text-gold uppercase tracking-[0.2em] mb-1">
                Computed Merkle Root
              </p>
              <p className="font-mono text-sm text-gold break-all">
                {epoch.merkleRoot}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ── Latin Footer ─────────────────────────────── */}
      <section className="py-12 text-center">
        <p className="latin-inscription text-gold/60 text-sm tracking-[0.3em] italic">
          Quod erat demonstrandum — That which was to be demonstrated
        </p>
      </section>
    </>
  );
}
