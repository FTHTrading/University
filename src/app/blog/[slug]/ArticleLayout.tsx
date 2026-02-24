"use client";

import { Hero } from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogArticle } from "@/lib/articles";
import type { Author } from "@/lib/authors";
import { getAllArticles, getAuthor as getAuthorById } from "@/lib/articles";

const categoryColors: Record<string, string> = {
  "Institutional Thought Leadership": "bg-maroon/10 text-maroon border-maroon/20",
  "Athletics Intelligence": "bg-navy/10 text-navy border-navy/20",
  "Governance & AI Infrastructure": "bg-gold/20 text-stone border-gold/30",
};

interface CanonicalData {
  contentHash: string;
  cid: string;
  version: string;
}

export function ArticleLayout({
  article,
  author,
  canonical,
}: {
  article: BlogArticle;
  author: Author;
  canonical: CanonicalData;
}) {
  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .filter(
      (a) =>
        a.category === article.category || a.authorId === article.authorId
    )
    .slice(0, 2);

  return (
    <>
      <Hero
        title={article.title}
        subtitle={article.subtitle}
        motto="University Record"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* ── Breadcrumb ─────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-light">
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
              <Link href="/blog" className="hover:text-navy transition-colors">
                University Record
              </Link>
            </li>
            <li className="text-gold" aria-hidden="true">
              ›
            </li>
            <li className="text-navy font-serif">{article.title}</li>
          </ol>
        </nav>

        {/* ── Meta Header ────────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span
            className={`inline-block px-3 py-1 text-xs font-serif tracking-wider rounded-full border mb-4 ${
              categoryColors[article.category] ?? ""
            }`}
          >
            {article.category}
          </span>

          <div className="flex items-center gap-4 text-sm text-stone-light mt-2">
            <div>
              <span className="font-serif text-navy font-semibold">
                {author.name}
              </span>
              <span className="mx-2">·</span>
              <span className="italic">{author.title}</span>
            </div>
          </div>
          <div className="text-xs text-stone-light mt-1">
            {new Date(article.datePublished).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {article.readingTime} read
          </div>
        </motion.header>

        {/* ── Article Body ───────────────────────────── */}
        <div className="prose-institutional">
          {article.sections.map((section, i) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="font-serif text-2xl font-bold text-navy mb-4 gold-underline inline-block">
                {section.heading}
              </h2>
              <p
                className={`text-ink leading-[1.85] ${
                  i === 0 ? "drop-cap" : ""
                }`}
              >
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        {/* ── Citations ──────────────────────────────── */}
        {article.citations.length > 0 && (
          <aside className="mt-12 border-t border-stone/10 pt-8">
            <h3 className="font-serif text-lg font-bold text-navy mb-4">
              References & Citations
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-stone leading-relaxed">
              {article.citations.map((c) => (
                <li key={c.id}>{c.text}</li>
              ))}
            </ol>
          </aside>
        )}

        {/* ── FAQ Section ────────────────────────────── */}
        {article.faq.length > 0 && (
          <aside className="mt-12 border-t border-stone/10 pt-8">
            <h3 className="font-serif text-lg font-bold text-navy mb-6">
              Frequently Asked Questions
            </h3>
            <dl className="space-y-6">
              {article.faq.map((f) => (
                <div key={f.question}>
                  <dt className="font-serif font-semibold text-navy mb-1">
                    {f.question}
                  </dt>
                  <dd className="text-stone text-sm leading-relaxed pl-4 border-l-2 border-gold/30">
                    {f.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        )}

        {/* ── Author Card ────────────────────────────── */}
        <aside className="mt-12 border-t border-stone/10 pt-8">
          <div className="bg-ivory border border-stone/10 rounded-sm p-6">
            <p className="text-xs text-gold tracking-[0.2em] uppercase font-serif mb-2">
              About the Author
            </p>
            <h4 className="font-serif text-lg font-bold text-navy">
              {author.name}
            </h4>
            <p className="text-sm text-stone italic mb-2">
              {author.title} — {author.affiliation}
            </p>
            <p className="text-sm text-stone-light leading-relaxed">
              {author.bio}
            </p>
          </div>
        </aside>

        {/* ── Related Articles ───────────────────────── */}
        {related.length > 0 && (
          <aside className="mt-12 border-t border-stone/10 pt-8">
            <h3 className="font-serif text-lg font-bold text-navy mb-6">
              Further Reading
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => {
                const rAuthor = getAuthorById(r.authorId);
                return (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block bg-ivory border border-stone/10 rounded-sm p-5 transition-all hover:shadow-md hover:border-gold/30"
                  >
                    <span
                      className={`inline-block px-2 py-0.5 text-[10px] font-serif tracking-wider rounded-full border mb-2 ${
                        categoryColors[r.category] ?? ""
                      }`}
                    >
                      {r.category}
                    </span>
                    <h4 className="font-serif text-base font-bold text-navy group-hover:text-maroon transition-colors mb-1">
                      {r.title}
                    </h4>
                    <p className="text-xs text-stone-light">
                      {rAuthor.name} ·{" "}
                      {new Date(r.datePublished).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </Link>
                );
              })}
            </div>
          </aside>
        )}
        {/* ── Canonical Artifact Identifier ────────── */}
        <aside className="mt-14 border-t border-stone/10 pt-8">
          <div className="bg-navy text-parchment rounded-sm border border-gold/20 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <p className="text-[10px] text-gold tracking-[0.2em] uppercase font-serif font-bold">
                Canonical Artifact Identifier
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-parchment/40 uppercase tracking-widest mb-0.5">
                  SHA-256
                </p>
                <p className="font-mono text-xs text-gold/90 break-all select-all leading-relaxed">
                  {canonical.contentHash}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-parchment/40 uppercase tracking-widest mb-0.5">
                  IPFS CID
                </p>
                <p className="font-mono text-xs text-gold/90 break-all select-all leading-relaxed">
                  {canonical.cid}
                </p>
              </div>
              <div className="flex items-center gap-6 pt-2 border-t border-gold/10 text-[10px] text-parchment/40 uppercase tracking-widest">
                <span>Version {canonical.version}</span>
                <span>Protocol: IPFS Canonical Publishing v1.0</span>
              </div>
            </div>

            <p className="text-[10px] text-parchment/30 mt-4 leading-relaxed">
              This identifier is computed from the deterministic serialisation
              of this article&rsquo;s content. Independently verify by hashing
              slug + title + section content + citations using SHA-256.
            </p>
          </div>
        </aside>
      </article>

      {/* ── Latin Footer ─────────────────────────────── */}
      <section className="py-12 text-center">
        <p className="latin-inscription text-gold/40 text-sm tracking-[0.3em] italic">
          Scripta manent — What is written endures
        </p>
      </section>
    </>
  );
}
