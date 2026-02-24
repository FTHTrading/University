"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossaryTerm } from "./page";

const categories = [
  "All",
  "Governance & Charter",
  "Epochs & Time",
  "Colleges & Degrees",
  "Research & Publishing",
  "Infrastructure & Technology",
  "Endowment & Finance",
  "Values",
];

export function GlossaryPage({ terms }: { terms: GlossaryTerm[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = terms;
    if (activeCategory !== "All") {
      result = result.filter((t) => t.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      );
    }
    return result.sort((a, b) => a.term.localeCompare(b.term));
  }, [terms, activeCategory, search]);

  /* Group terms by first letter */
  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <main className="min-h-screen bg-parchment text-stone">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="bg-navy text-parchment py-20">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-4 font-semibold">
            Reference
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">
            Institutional Glossary
          </h1>
          <p className="max-w-2xl mx-auto text-parchment/70 text-lg leading-relaxed">
            Authoritative definitions for the terms, concepts, and frameworks
            that define institutional discourse at Fitzherbert University.
          </p>
          <p className="text-gold/50 text-sm mt-6 italic font-serif">
            {terms.length} defined terms across {categories.length - 1} domains
          </p>
        </div>
      </section>

      {/* ── Filters + Search ──────────────────────────── */}
      <section className="border-b border-gold/20 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms…"
              className="w-full max-w-md px-4 py-2 border border-gold/30 rounded bg-parchment text-stone placeholder:text-stone/40 focus:outline-none focus:border-gold transition-colors text-sm"
            />
          </div>
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
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
            Showing {filtered.length} of {terms.length} terms
          </p>
        </div>
      </section>

      {/* ── Glossary Body ─────────────────────────────── */}
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
              No terms match your search.
            </motion.p>
          ) : (
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {grouped.map(([letter, letterTerms]) => (
                <div key={letter} className="mb-12">
                  {/* Letter heading */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-serif text-3xl text-maroon font-bold">
                      {letter}
                    </span>
                    <div className="flex-1 h-px bg-gold/30" />
                  </div>

                  {/* Terms */}
                  <dl className="space-y-6">
                    {letterTerms.map((t) => (
                      <div
                        key={t.term}
                        className="pl-6 border-l-2 border-gold/30 hover:border-gold transition-colors"
                      >
                        <dt className="font-serif text-lg text-navy font-bold mb-1">
                          {t.term}
                        </dt>
                        <dd className="text-stone/80 leading-relaxed text-sm">
                          {t.definition}
                        </dd>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="text-xs uppercase tracking-widest text-maroon/70 font-semibold">
                            {t.category}
                          </span>
                          {t.relatedTerms && t.relatedTerms.length > 0 && (
                            <span className="text-xs text-stone/40">
                              Related:{" "}
                              {t.relatedTerms.map((rt, i) => (
                                <span key={rt}>
                                  <button
                                    onClick={() => {
                                      setSearch(rt);
                                      setActiveCategory("All");
                                    }}
                                    className="text-gold hover:text-maroon transition-colors underline"
                                  >
                                    {rt}
                                  </button>
                                  {i < t.relatedTerms!.length - 1 ? ", " : ""}
                                </span>
                              ))}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </dl>
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
            « Nomina sunt consequentia rerum »
          </p>
          <p className="text-stone/40 text-xs mt-2 uppercase tracking-widest">
            Names are the consequence of things — Justinian, Institutes II.7.3
          </p>
        </div>
      </section>
    </main>
  );
}
