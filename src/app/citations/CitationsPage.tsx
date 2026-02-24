"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { AggregatedCitation } from "./page";

const categoryFilters = [
  "All",
  "Institutional Thought Leadership",
  "Athletics Intelligence",
  "Governance & AI Infrastructure",
];

export function CitationsPage({
  citations,
}: {
  citations: AggregatedCitation[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = citations;
    if (activeCategory !== "All") {
      result = result.filter((c) => c.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.text.toLowerCase().includes(q) ||
          c.articleTitle.toLowerCase().includes(q) ||
          c.authorName.toLowerCase().includes(q)
      );
    }
    return result;
  }, [citations, activeCategory, search]);

  /* Group by first letter of citation text */
  const grouped = useMemo(() => {
    const map: Record<string, AggregatedCitation[]> = {};
    for (const c of filtered) {
      const letter = c.text[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(c);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <main className="min-h-screen bg-parchment text-stone">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="bg-navy text-parchment py-20">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-4 font-semibold">
            Scholarship
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">
            Citation Index
          </h1>
          <p className="max-w-2xl mx-auto text-parchment/70 text-lg leading-relaxed">
            Aggregated citations from all University Record publications — a
            comprehensive reference of scholarly sources, institutional reports,
            and primary documents.
          </p>
          <p className="text-gold/50 text-sm mt-6 italic font-serif">
            {citations.length} citations from {new Set(citations.map((c) => c.articleSlug)).size} articles
          </p>
        </div>
      </section>

      {/* ── Filters ───────────────────────────────────── */}
      <section className="border-b border-gold/20 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          <div className="mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search citations, articles, or authors…"
              className="w-full max-w-md px-4 py-2 border border-gold/30 rounded bg-parchment text-stone placeholder:text-stone/40 focus:outline-none focus:border-gold transition-colors text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-maroon text-parchment"
                    : "bg-parchment text-stone border border-gold/30 hover:border-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-xs text-stone/50 mt-3">
            Showing {filtered.length} of {citations.length} citations
          </p>
        </div>
      </section>

      {/* ── Citations Body ────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <AnimatePresence mode="wait">
          {grouped.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-stone/50 italic py-12"
            >
              No citations match your search.
            </motion.p>
          ) : (
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {grouped.map(([letter, letterCitations]) => (
                <div key={letter} className="mb-12">
                  {/* Letter heading */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-serif text-3xl text-maroon font-bold">
                      {letter}
                    </span>
                    <div className="flex-1 h-px bg-gold/30" />
                    <span className="text-xs text-stone/40">
                      {letterCitations.length}
                    </span>
                  </div>

                  {/* Citations */}
                  <ol className="space-y-5">
                    {letterCitations.map((c, i) => (
                      <li
                        key={`${c.articleSlug}-${i}`}
                        className="pl-6 border-l-2 border-gold/20 hover:border-gold transition-colors"
                      >
                        <p className="text-stone/80 text-sm leading-relaxed">
                          {c.text}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <Link
                            href={`/blog/${c.articleSlug}`}
                            className="text-xs text-gold hover:text-maroon transition-colors underline"
                          >
                            {c.articleTitle}
                          </Link>
                          <span className="text-xs text-stone/40">·</span>
                          <span className="text-xs text-stone/40">
                            {c.authorName}
                          </span>
                          <span className="text-xs text-stone/40">·</span>
                          <span className="text-xs text-stone/40">
                            {new Date(c.datePublished).toLocaleDateString(
                              "en-GB",
                              { year: "numeric", month: "long", day: "numeric" }
                            )}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Footer inscription ────────────────────────── */}
      <section className="border-t border-gold/20 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-10 text-center">
          <p className="text-gold/60 italic font-serif text-sm">
            « Nanos gigantum humeris insidentes »
          </p>
          <p className="text-stone/40 text-xs mt-2 uppercase tracking-widest">
            Standing on the shoulders of giants — Bernard of Chartres
          </p>
        </div>
      </section>
    </main>
  );
}
