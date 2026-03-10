"use client";

import { Hero } from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// ── Types (mirror server-side CanonicalRecord) ───────────────────────────────

interface CanonicalRecord {
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

interface ArchivePageProps {
  records: CanonicalRecord[];
  epochRoot: string;
  epochTimestamp: string;
  articleCount: number;
}

// ── Component ────────────────────────────────────────────────────────────────

export function ArchivePage({
  records,
  epochRoot,
  epochTimestamp,
  articleCount,
}: ArchivePageProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  function copyToClipboard(value: string, field: string) {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  }

  return (
    <>
      <Hero
        title="Canonical Archive"
        subtitle="Cryptographically attested publication registry"
        motto="Scripta Manent"
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* ── Protocol Header ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-navy text-parchment rounded-sm border border-gold/20 p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
            <h2 className="font-serif text-lg tracking-wider uppercase text-gold">
              Epoch Root
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                Merkle Root (SHA-256)
              </p>
              <button
                onClick={() => copyToClipboard(epochRoot, "epoch")}
                className="font-mono text-sm text-gold break-all text-left hover:text-gold/80 transition-colors cursor-pointer"
                title="Click to copy"
              >
                {epochRoot}
              </button>
              {copiedField === "epoch" && (
                <span className="text-xs text-gold/60 ml-2">Copied</span>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                  Protocol
                </p>
                <p className="text-sm text-parchment/80">
                  IPFS Canonical Publishing v1.0
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                    Articles
                  </p>
                  <p className="text-sm text-parchment/80">{articleCount}</p>
                </div>
                <div>
                  <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                    Tree Type
                  </p>
                  <p className="text-sm text-parchment/80">Binary Merkle</p>
                </div>
                <div>
                  <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                    Hash
                  </p>
                  <p className="text-sm text-parchment/80">SHA-256</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-parchment/80 uppercase tracking-widest mb-1">
                  Generated
                </p>
                <p className="text-sm text-parchment/80">
                  {new Date(epochTimestamp).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  at{" "}
                  {new Date(epochTimestamp).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  UTC
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gold/10">
            <p className="text-xs text-parchment/75 leading-relaxed">
              The epoch root is the Merkle tree root hash computed from all
              article content hashes. Any modification to any article will
              produce a different root, enabling cryptographic verification of
              corpus integrity.
            </p>
          </div>
        </motion.div>

        {/* ── Verification Notice ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-ivory border border-stone/10 rounded-sm p-6 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 text-gold text-lg">⊕</div>
            <div>
              <h3 className="font-serif text-navy font-bold mb-1">
                Independent Verification
              </h3>
              <p className="text-sm text-stone leading-relaxed">
                Each article&rsquo;s SHA-256 hash is computed from its
                deterministic content serialisation (slug + title + section
                headings/content + citations). The IPFS CIDv1 is derived from
                the content hash using the raw codec (0x55) and multibase
                base32lower encoding. Verify any hash by recomputing SHA-256
                over the canonical serialisation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Machine-Readable Endpoint ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex items-center gap-3 mb-10 text-sm"
        >
          <span className="text-stone-light">Machine-readable registry:</span>
          <a
            href="/canonical-registry.json"
            className="font-mono text-navy hover:text-maroon transition-colors underline decoration-gold/30"
          >
            /canonical-registry.json
          </a>
        </motion.div>

        {/* ── Article Registry ────────────────────────── */}
        <div className="space-y-4">
          {records.map((record, i) => {
            const isExpanded = expandedSlug === record.slug;

            return (
              <motion.div
                key={record.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (i + 1), duration: 0.4 }}
                className="border border-stone/10 rounded-sm overflow-hidden"
              >
                {/* ── Row Header ──────────────────────── */}
                <button
                  onClick={() =>
                    setExpandedSlug(isExpanded ? null : record.slug)
                  }
                  className="w-full text-left px-6 py-4 bg-ivory hover:bg-parchment transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base font-bold text-navy truncate">
                        {record.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-stone-light">
                        <span>{record.author}</span>
                        <span className="text-gold">·</span>
                        <span>
                          {new Date(record.publishedAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                        <span className="text-gold">·</span>
                        <span className="font-mono text-navy/60">
                          v{record.version}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-gold text-lg transition-transform"
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

                {/* ── Expanded Detail ─────────────────── */}
                {isExpanded && (
                  <div className="px-6 py-5 bg-white border-t border-stone/10 space-y-4">
                    {/* SHA-256 */}
                    <div>
                      <p className="text-[10px] text-stone-light uppercase tracking-[0.2em] mb-1">
                        SHA-256 Content Hash
                      </p>
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-xs text-navy break-all select-all">
                          {record.contentHash}
                        </code>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              record.contentHash,
                              `hash-${record.slug}`
                            )
                          }
                          className="text-xs text-gold hover:text-maroon transition-colors shrink-0 cursor-pointer"
                        >
                          {copiedField === `hash-${record.slug}`
                            ? "✓"
                            : "Copy"}
                        </button>
                      </div>
                    </div>

                    {/* CID */}
                    <div>
                      <p className="text-[10px] text-stone-light uppercase tracking-[0.2em] mb-1">
                        IPFS CIDv1 (base32, raw, sha2-256)
                      </p>
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-xs text-navy break-all select-all">
                          {record.cid}
                        </code>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              record.cid,
                              `cid-${record.slug}`
                            )
                          }
                          className="text-xs text-gold hover:text-maroon transition-colors shrink-0 cursor-pointer"
                        >
                          {copiedField === `cid-${record.slug}` ? "✓" : "Copy"}
                        </button>
                      </div>
                    </div>

                    {/* Meta Row */}
                    <div className="flex items-center gap-6 pt-2 border-t border-stone/5 text-xs text-stone-light">
                      <span>
                        <strong className="text-navy">Category:</strong>{" "}
                        {record.category}
                      </span>
                      <span>
                        <strong className="text-navy">Modified:</strong>{" "}
                        {new Date(record.modifiedAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <Link
                        href={`/blog/${record.slug}`}
                        className="text-maroon hover:text-navy transition-colors ml-auto"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Latin Footer ─────────────────────────────── */}
      <section className="py-12 text-center">
        <p className="latin-inscription text-gold/60 text-sm tracking-[0.3em] italic">
          Quod scripsi, scripsi — What I have written, I have written
        </p>
      </section>
    </>
  );
}
