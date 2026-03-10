"use client";

import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { getAllArticles, getAuthor, type BlogCategory } from "@/lib/articles";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const categories: ("All" | BlogCategory)[] = [
  "All",
  "Institutional Thought Leadership",
  "Athletics Intelligence",
  "Governance & AI Infrastructure",
];

const categoryColors: Record<BlogCategory, string> = {
  "Institutional Thought Leadership": "bg-maroon/10 text-maroon border-maroon/20",
  "Athletics Intelligence": "bg-navy/10 text-navy border-navy/20",
  "Governance & AI Infrastructure": "bg-gold/20 text-stone border-gold/30",
};

export default function BlogPage() {
  const articles = getAllArticles();
  const [active, setActive] = useState<"All" | BlogCategory>("All");

  const filtered =
    active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      <Hero
        title="University Record"
        subtitle="Thought Leadership · Research Intelligence · Institutional Analysis"
        motto="Veritas per Disciplina"
      />

      {/* ── Category Filters ─────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="The Record"
          title="Institutional Scholarship & Analysis"
          description="Original scholarship from the faculties, centres, and institutes of Fitzherbert University — advancing the discourse on institutional governance, competitive strategy, and technological sovereignty."
        />

        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-serif tracking-wide border transition-all duration-300 cursor-pointer ${
                active === cat
                  ? "bg-navy text-parchment border-navy shadow-md"
                  : "bg-parchment text-stone border-stone/20 hover:border-gold hover:text-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Article Grid ───────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((article) => {
              const author = getAuthor(article.authorId);
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block"
                >
                  <article className="bg-ivory border border-stone/10 rounded-sm p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-gold/30 hover:-translate-y-0.5">
                    {/* Category badge */}
                    <span
                      className={`inline-block self-start px-3 py-1 text-xs font-serif tracking-wider rounded-full border mb-4 ${
                        categoryColors[article.category]
                      }`}
                    >
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-navy leading-snug mb-2 group-hover:text-maroon transition-colors">
                      {article.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-stone text-sm italic mb-3 leading-relaxed">
                      {article.subtitle}
                    </p>

                    {/* Excerpt */}
                    <p className="text-stone-light text-sm leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Meta footer */}
                    <div className="border-t border-stone/10 pt-3 mt-auto flex items-center justify-between text-xs text-stone-light">
                      <span className="font-serif">{author.name}</span>
                      <span>
                        {new Date(article.datePublished).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}{" "}
                        · {article.readingTime}
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* ── Latin Footer ─────────────────────────────── */}
      <section className="py-16 text-center">
        <p className="latin-inscription text-gold/60 text-sm tracking-[0.3em] italic">
          Scripta manent — What is written endures
        </p>
      </section>
    </>
  );
}
