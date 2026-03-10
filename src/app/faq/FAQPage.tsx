"use client";

import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FAQSection {
  category: string;
  faqs: { question: string; answer: string }[];
}

export function FAQPage({ sections }: { sections: FAQSection[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? sections
      : sections.filter((s) => s.category === activeCategory);

  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Institutional Knowledge — Admissions, Academics, Governance, Endowment & AI Infrastructure"
        motto="Veritas per Disciplina"
      />

      <Section>
        <SectionHeader
          eyebrow="Knowledge Base"
          title="Questions & Authoritative Answers"
          description="Comprehensive answers drawn from the University's governance documents, published reports, and institutional records."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-serif tracking-wide border transition-all duration-300 cursor-pointer ${
              activeCategory === "all"
                ? "bg-navy text-parchment border-navy"
                : "bg-parchment text-stone border-stone/20 hover:border-gold"
            }`}
          >
            All Categories
          </button>
          {sections.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category)}
              className={`px-4 py-2 rounded-full text-xs font-serif tracking-wide border transition-all duration-300 cursor-pointer ${
                activeCategory === s.category
                  ? "bg-navy text-parchment border-navy"
                  : "bg-parchment text-stone border-stone/20 hover:border-gold"
              }`}
            >
              {s.category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((section) => (
                <div key={section.category} className="mb-10">
                  <h2 className="font-serif text-xl font-bold text-navy mb-4 gold-underline inline-block">
                    {section.category}
                  </h2>

                  <dl className="space-y-3">
                    {section.faqs.map((faq) => {
                      const id = `${section.category}-${faq.question}`;
                      const isOpen = openId === id;

                      return (
                        <div
                          key={id}
                          className="border border-stone/10 rounded-sm bg-ivory overflow-hidden"
                        >
                          <dt>
                            <button
                              onClick={() => setOpenId(isOpen ? null : id)}
                              className="w-full text-left px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-parchment-dark/30 transition-colors"
                            >
                              <span className="font-serif font-semibold text-navy pr-4 leading-snug">
                                {faq.question}
                              </span>
                              <span className="text-gold text-lg flex-shrink-0">
                                {isOpen ? "−" : "+"}
                              </span>
                            </button>
                          </dt>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.dd
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-4 text-stone text-sm leading-relaxed border-t border-stone/10 pt-3">
                                  {faq.answer}
                                </div>
                              </motion.dd>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Stats */}
      <section className="py-12 text-center">
        <p className="text-xs text-stone-light tracking-[0.2em] uppercase font-serif mb-2">
          {sections.reduce((sum, s) => sum + s.faqs.length, 0)} questions across{" "}
          {sections.length} categories
        </p>
        <p className="latin-inscription text-gold/60 text-sm tracking-[0.3em] italic">
          Quaerendo invenietis — By seeking, you shall find
        </p>
      </section>
    </>
  );
}
