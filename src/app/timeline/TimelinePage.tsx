"use client";

import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  detail?: string;
  latin?: string;
  era: "enlightenment" | "expansion" | "modern" | "digital";
}

const eras = [
  { key: "all" as const, label: "All Eras" },
  { key: "enlightenment" as const, label: "Enlightenment (1783–1850)" },
  { key: "expansion" as const, label: "Expansion (1851–1945)" },
  { key: "modern" as const, label: "Modern (1946–1999)" },
  { key: "digital" as const, label: "Digital & AI (2000–Present)" },
];

const events: TimelineEvent[] = [
  {
    year: "1783",
    era: "enlightenment",
    title: "Charter of Foundation",
    description:
      "The colonial legislature grants a royal charter establishing Fitzherbert University as an institution of higher learning, with an initial endowment of twelve hundred acres and a mandate for the cultivation of civic virtue.",
    detail:
      "Sir Henry FitzHerbert, the Reverend Jonathan Ashworth, and Lady Margaret Pemberton signed the founding charter in the presence of the Governor-General. The original parchment is held in the University Archives in Heritage Hall.",
    latin: "In nomine veritatis et disciplinae, hanc universitatem fundamus.",
  },
  {
    year: "1789",
    era: "enlightenment",
    title: "School of Divinity & Moral Philosophy",
    description:
      "The first expansion of the original charter creates a college devoted to theology, natural philosophy, and the moral sciences — establishing the University's commitment to ethical inquiry as foundational discipline.",
    detail:
      "Dean Theophilus Marsh delivered the inaugural lecture 'On the Nature of the Good' to thirty-seven students in the original chapel.",
  },
  {
    year: "1801",
    era: "enlightenment",
    title: "School of Law Established",
    description:
      "The second college opens its doors, training the first generation of constitutional scholars and advocates who would shape the legal frameworks of the young republic.",
    detail:
      "Amendment I to the Charter authorised the creation of a college devoted to jurisprudence, legal philosophy, and constitutional studies. The first class comprised sixteen students.",
    latin: "Justitia fundamentum regnorum.",
  },
  {
    year: "1832",
    era: "enlightenment",
    title: "School of Medicine Founded",
    description:
      "A bequest from the Whitfield family establishes the School of Medicine, bringing clinical training and anatomical research to the University grounds.",
    detail:
      "Dr. Nathaniel Whitfield's transformative bequest funded the teaching hospital, anatomical theatre, and three endowed chairs in surgery, physiology, and materia medica.",
  },
  {
    year: "1847",
    era: "enlightenment",
    title: "Engineering & Applied Science",
    description:
      "The industrial age demands new disciplines. The School of Engineering opens with programmes in civil and mechanical arts, later expanding to chemical and electrical engineering.",
    detail:
      "The School's first laboratory was housed in the former Chapel of St. Clare. By 1860, it had produced the engineers who designed the region's first suspension bridge.",
  },
  {
    year: "1867",
    era: "expansion",
    title: "Charter Reaffirmed",
    description:
      "In the post-war period, the University Board of Governors unanimously reaffirms the Charter's founding principles, strengthening institutional independence and expanding the mandate to include the natural sciences.",
    detail:
      "The reaffirmation added explicit protections for academic freedom and established the principle that no external authority may direct the University's curriculum or research priorities.",
  },
  {
    year: "1891",
    era: "expansion",
    title: "Graduate School of Commerce & Strategy",
    description:
      "Recognising the need for principled commercial leadership, the University establishes its sixth college to study market theory, fiduciary law, and strategic enterprise.",
    detail:
      "The Pemberton endowment provided initial funding. The School's founding dean, Professor Arthur Pemberton, insisted that every student study moral philosophy alongside accounting.",
    latin: "Mercatura sine integritate nihil est.",
  },
  {
    year: "1903",
    era: "expansion",
    title: "First Nobel Laureate",
    description:
      "Professor Edmund Hartley of the Department of Chemistry receives the Nobel Prize, establishing Fitzherbert University's reputation for world-class scientific research.",
    detail:
      "Hartley's work on catalytic processes in organic synthesis earned recognition from the Swedish Academy. He dedicated his lecture to 'the eternal partnership between patience and rigour.'",
  },
  {
    year: "1921",
    era: "expansion",
    title: "Women Admitted — Charter Amendment II",
    description:
      "After decades of advocacy, the Charter is amended to grant women full admission to all colleges and programmes, achieving co-education across the institution.",
    detail:
      "Dr. Eleanor Ashford, daughter of the university's third chancellor, led the campaign. She was awarded an honorary doctorate in 1922.",
  },
  {
    year: "1934",
    era: "expansion",
    title: "University Press Founded",
    description:
      "Fitzherbert University Press begins publishing scholarly monographs, journals, and institutional texts — becoming a cornerstone of the University's intellectual output.",
    detail:
      "The Press's first publication was 'Principles of Constitutional Governance' by Professor Arthur Pemberton III. It remains in print.",
  },
  {
    year: "1947",
    era: "modern",
    title: "Pemberton Endowment",
    description:
      "A transformative $50 million bequest from the Pemberton family trust doubles the University's endowment, funding new research facilities, scholarships, and the Pemberton Library.",
    detail:
      "The bequest was structured as a perpetual trust with explicit instructions that 40% support student financial aid in perpetuity.",
  },
  {
    year: "1963",
    era: "modern",
    title: "Institute for Advanced Study",
    description:
      "The Institute opens as a haven for interdisciplinary post-doctoral research, housing visiting scholars from around the world in fields spanning mathematics, philosophy, physics, and political theory.",
    detail:
      "The Institute's founding director, Professor Alastair Mackenzie, established the tradition of weekly 'Colloquia' — open lectures drawing audiences from across the University and region.",
  },
  {
    year: "1967",
    era: "modern",
    title: "Charter Amendment III — Governance Modernisation",
    description:
      "The Charter is amended to establish the Faculty Senate as the supreme academic authority, separating governance of scholarly matters from administrative and financial oversight.",
    detail:
      "This amendment created the three-body governance structure (Board of Governors, Faculty Senate, Student Assembly) that persists today.",
  },
  {
    year: "1978",
    era: "modern",
    title: "Computational Sciences Programme",
    description:
      "An early computing programme is established within the School of Engineering, offering courses in numerical analysis, systems architecture, and programming theory.",
    detail:
      "The programme acquired its first mainframe — an IBM System/370 — in 1979. By 1985, it had launched undergraduate and graduate degree programmes in Computer Science.",
  },
  {
    year: "1991",
    era: "modern",
    title: "Centre for Ethics & Public Life",
    description:
      "An interdisciplinary ethics centre is founded with support from the Ford Foundation, advancing research in bioethics, political ethics, and the ethics of technology.",
    detail:
      "The Centre's founding director, Professor Helena Whitfield, established the annual Whitfield Ethics Lecture, which has hosted four Nobel laureates and two heads of state.",
  },
  {
    year: "2003",
    era: "digital",
    title: "Transparency Mandate — Charter Amendment IV",
    description:
      "A landmark amendment requires all governance decisions, financial reports, and policy changes to be published openly, establishing Fitzherbert University as a model of institutional transparency.",
    detail:
      "The Transparency Mandate was driven by student advocacy and faculty Senate resolution. All documents since 2003 are available in the public governance archive.",
  },
  {
    year: "2017",
    era: "digital",
    title: "AI & Machine Learning Institute",
    description:
      "A dedicated institute for artificial intelligence research is established, bringing together computer scientists, ethicists, and policy scholars to study the societal implications of autonomous systems.",
    detail:
      "Initial funding of $120 million from the endowment and corporate partnerships. The Institute houses 34 faculty members across six research groups.",
  },
  {
    year: "2023",
    era: "digital",
    title: "Ethical Investment Framework",
    description:
      "The endowment adopts a formal Ethical Investment Framework with ESG exclusion criteria, developed through eighteen months of faculty-student-trustee consultation.",
    detail:
      "Exclusion criteria are reviewed biennially and published in the Annual Stewardship Report. The framework balances ethical constraints with the fiduciary obligation of intergenerational preservation.",
  },
  {
    year: "2024",
    era: "digital",
    title: "Charter Amendment V — AI Governance",
    description:
      "The constitutional framework for AI governance systems is ratified, establishing validation gates, bias auditing requirements, and human oversight mandates for all institutional AI deployments.",
    detail:
      "The amendment was drafted by the Centre for AI & Ethics and ratified by a 94% supermajority of the Faculty Senate, making Fitzherbert University the first institution with constitutional AI governance.",
    latin: "Machina serviat homini, non dominetur.",
  },
  {
    year: "2026",
    era: "digital",
    title: "University Record Launched",
    description:
      "The institutional blog and scholarly publication platform goes live, establishing Fitzherbert University's direct voice in the discourse on governance, strategy, and AI — with full Article JSON-LD schema for AI discoverability.",
    detail:
      "The University Record publishes across three editorial streams: Institutional Thought Leadership, Athletics Intelligence, and Governance & AI Infrastructure. All articles carry ScholarlyArticle JSON-LD.",
  },
];

const eraColors: Record<TimelineEvent["era"], string> = {
  enlightenment: "border-gold",
  expansion: "border-maroon",
  modern: "border-navy",
  digital: "border-gold-light",
};

const eraDotColors: Record<TimelineEvent["era"], string> = {
  enlightenment: "bg-gold",
  expansion: "bg-maroon",
  modern: "bg-navy",
  digital: "bg-gold-light",
};

export function TimelinePage() {
  const [activeEra, setActiveEra] = useState<string>("all");
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  const filtered =
    activeEra === "all" ? events : events.filter((e) => e.era === activeEra);

  return (
    <>
      <Hero
        title="Institutional Timeline"
        subtitle="243 Years of Intellectual Sovereignty — 1783 to 2026"
        motto="Veritas per Disciplina"
      />

      <Section>
        <SectionHeader
          eyebrow="Chronicle"
          title="A History of Principled Evolution"
          description="From the Enlightenment charter to AI-governed academic systems — each milestone reflects the University's commitment to disciplined inquiry and institutional continuity."
        />

        {/* Era Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {eras.map((era) => (
            <button
              key={era.key}
              onClick={() => setActiveEra(era.key)}
              className={`px-5 py-2 rounded-full text-sm font-serif tracking-wide border transition-all duration-300 cursor-pointer ${
                activeEra === era.key
                  ? "bg-navy text-parchment border-navy shadow-md"
                  : "bg-parchment text-stone border-stone/20 hover:border-gold hover:text-navy"
              }`}
            >
              {era.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEra}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-stone/10" />

            <div className="space-y-8">
              {filtered.map((event, i) => {
                const isExpanded = expandedYear === event.year;
                return (
                  <motion.div
                    key={event.year + event.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Era dot */}
                    <div
                      className={`absolute left-[18px] md:left-[26px] top-1 w-4 h-4 rounded-full border-2 border-parchment ${
                        eraDotColors[event.era]
                      } shadow-md z-10`}
                    />

                    <button
                      onClick={() =>
                        setExpandedYear(isExpanded ? null : event.year)
                      }
                      className={`w-full text-left bg-ivory border rounded-sm p-5 transition-all duration-300 cursor-pointer hover:shadow-md hover:border-gold/30 ${
                        eraColors[event.era]
                      } border-l-4`}
                    >
                      {/* Year */}
                      <span className="text-xs font-serif tracking-[0.3em] text-gold uppercase block mb-1">
                        {event.year}
                      </span>

                      {/* Title */}
                      <h3 className="font-serif text-lg font-bold text-navy leading-snug mb-2">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-stone text-sm leading-relaxed">
                        {event.description}
                      </p>

                      {/* Expandable detail */}
                      <AnimatePresence>
                        {isExpanded && event.detail && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-stone-light text-sm italic mt-3 pt-3 border-t border-stone/10 leading-relaxed">
                              {event.detail}
                            </p>
                            {event.latin && (
                              <p className="latin-inscription mt-2 text-gold/50 text-xs">
                                &ldquo;{event.latin}&rdquo;
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand indicator */}
                      {event.detail && (
                        <span className="text-gold/50 text-xs mt-2 inline-block">
                          {isExpanded ? "▲ Collapse" : "▼ Read more"}
                        </span>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* Latin footer */}
      <section className="py-16 text-center">
        <p className="latin-inscription text-gold/40 text-sm tracking-[0.3em] italic">
          Tempus edax rerum — Time, the devourer of all things
        </p>
      </section>
    </>
  );
}
