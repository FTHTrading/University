"use client";

import { Hero } from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Types ────────────────────────────────────────────────────────────────────

interface EpochSummary {
  version: string;
  tag: string;
  timestamp: string;
  description: string;
  articleCount: number;
  merkleRoot: string;
  hashAlgorithm: string;
}

interface EpochsPageProps {
  epochs: EpochSummary[];
  currentVersion: string;
}

// ── Component ────────────────────────────────────────────────────────────────

export function EpochsPage({ epochs, currentVersion }: EpochsPageProps) {
  return (
    <>
      <Hero
        title="Epoch History"
        subtitle="Immutable temporal record of the canonical corpus"
        motto="Tempus Edax Rerum"
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* ── Protocol Overview ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-ivory border border-stone/10 rounded-sm p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 text-gold text-lg">⊕</div>
            <div>
              <h2 className="font-serif text-navy font-bold text-lg mb-2">
                Epoch Versioning Protocol
              </h2>
              <p className="text-sm text-stone leading-relaxed mb-4">
                Each epoch represents an immutable point-in-time snapshot of the
                entire institutional corpus. When articles are added, modified,
                or removed, a new epoch is generated — preserving the complete
                cryptographic state of every prior version.
              </p>
              <div className="flex flex-wrap gap-6 text-xs text-stone-light">
                <div>
                  <span className="text-gold font-serif font-bold uppercase tracking-wider">
                    Current Epoch
                  </span>
                  <p className="text-navy font-mono mt-1">v{currentVersion}</p>
                </div>
                <div>
                  <span className="text-gold font-serif font-bold uppercase tracking-wider">
                    Total Epochs
                  </span>
                  <p className="text-navy font-mono mt-1">{epochs.length}</p>
                </div>
                <div>
                  <span className="text-gold font-serif font-bold uppercase tracking-wider">
                    Immutability
                  </span>
                  <p className="text-navy font-mono mt-1">Enforced</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Epoch Timeline ──────────────────────────── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20" />

          <div className="space-y-8">
            {epochs.map((epoch, i) => {
              const isCurrent = epoch.version === currentVersion;

              return (
                <motion.div
                  key={epoch.version}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="relative pl-16"
                >
                  {/* Dot on timeline */}
                  <div
                    className={`absolute left-[18px] top-6 w-3 h-3 rounded-full border-2 ${
                      isCurrent
                        ? "bg-gold border-gold animate-pulse"
                        : "bg-parchment border-stone/30"
                    }`}
                  />

                  <Link
                    href={`/epochs/${epoch.version}`}
                    className="block bg-white border border-stone/10 rounded-sm p-6 transition-all hover:shadow-md hover:border-gold/30 group"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif text-lg font-bold text-navy group-hover:text-maroon transition-colors">
                          Epoch {epoch.version}
                        </h3>
                        {isCurrent && (
                          <span className="px-2 py-0.5 text-[10px] font-serif tracking-wider text-gold bg-gold/10 rounded-full border border-gold/20">
                            CURRENT
                          </span>
                        )}
                        <span className="px-2 py-0.5 text-[10px] font-mono text-stone-light bg-ivory rounded-full border border-stone/10">
                          {epoch.tag}
                        </span>
                      </div>
                      <span className="text-xs text-stone-light">
                        {new Date(epoch.timestamp).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-stone leading-relaxed mb-4">
                      {epoch.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 text-xs text-stone-light">
                      <div>
                        <span className="uppercase tracking-widest text-[10px] text-gold">
                          Articles
                        </span>
                        <p className="font-mono text-navy">{epoch.articleCount}</p>
                      </div>
                      <div>
                        <span className="uppercase tracking-widest text-[10px] text-gold">
                          Hash
                        </span>
                        <p className="font-mono text-navy">{epoch.hashAlgorithm}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="uppercase tracking-widest text-[10px] text-gold">
                          Merkle Root
                        </span>
                        <p className="font-mono text-navy text-[11px] truncate">
                          {epoch.merkleRoot}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Immutability Declaration ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 bg-navy text-parchment rounded-sm border border-gold/20 p-8"
        >
          <h3 className="font-serif text-gold text-sm uppercase tracking-[0.2em] mb-4 font-bold">
            Immutability Declaration
          </h3>
          <p className="text-sm text-parchment/80 leading-relaxed mb-4">
            Each epoch snapshot is sealed upon generation. The Merkle root of a
            sealed epoch serves as a cryptographic commitment to the exact state
            of every article in the corpus at that point in time. Any
            modification — no matter how minor — to any article within a sealed
            epoch would produce a different Merkle root, making tampering
            independently detectable.
          </p>
          <p className="text-sm text-parchment/60 leading-relaxed">
            Fitzherbert University commits to the principle of archival
            immutability: sealed epochs represent the permanent historical
            record of institutional scholarship. New content or corrections are
            expressed through subsequent epochs, preserving the full audit trail
            of the University Record.
          </p>
        </motion.div>
      </section>

      {/* ── Latin Footer ─────────────────────────────── */}
      <section className="py-12 text-center">
        <p className="latin-inscription text-gold/40 text-sm tracking-[0.3em] italic">
          Tempus edax rerum — Time, devourer of all things
        </p>
      </section>
    </>
  );
}
