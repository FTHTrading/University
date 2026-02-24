"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

type Era = "all" | "heritage" | "rechartering" | "epochs";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  era: Exclude<Era, "all">;
  details?: string[];
}

const events: TimelineEvent[] = [
  {
    year: "1783",
    title: "Heritage Charter Signed",
    era: "heritage",
    description:
      "King George III grants the founding charter for Fitzherbert University. The charter establishes the institutional mandate, academic freedom protections, and the principle of Veritas per Disciplina — Truth through Discipline.",
    details: [
      "Original charter preserved in the Heritage Archive",
      "Established the first three faculties: Divinity, Law, and Natural Philosophy",
      "Set the architectural precedent for the University's Gothic campus",
    ],
  },
  {
    year: "1801",
    title: "First Library Wing Completed",
    era: "heritage",
    description:
      "The Wycliffe Library opens, housing the University's first permanent collection. The library established the institutional commitment to knowledge preservation that later informed the canonical registry system.",
  },
  {
    year: "1847",
    title: "Natural Sciences Faculty Established",
    era: "heritage",
    description:
      "Expansion beyond the original three faculties. The addition of Natural Sciences marked the University's first major structural adaptation — a precedent for the epoch-based restructuring of 2025.",
  },
  {
    year: "1912",
    title: "Women Admitted to All Programmes",
    era: "heritage",
    description:
      "Fitzherbert University opens all degree programmes to women, ahead of most peer institutions. The decision was framed as a constitutional obligation under the Charter's commitment to truth without restriction.",
  },
  {
    year: "1945",
    title: "Post-War Reconstruction & Expansion",
    era: "heritage",
    description:
      "The University rebuilt and expanded following wartime damage. The reconstruction fund established the precedent for the modern endowment structure and introduced the concept of institutional resilience through infrastructure.",
  },
  {
    year: "1967",
    title: "Computer Science Department Founded",
    era: "heritage",
    description:
      "One of the first computer science departments in the country. The department's early work on formal verification methods directly informed the deterministic publishing infrastructure built in 2025.",
  },
  {
    year: "2003",
    title: "Digital Archive Initiative Launched",
    era: "heritage",
    description:
      "The University began digitising its entire scholarly archive — a project that took twelve years but created the data infrastructure later used for the canonical registry.",
  },
  {
    year: "2023",
    title: "AI Capability Assessment Begins",
    era: "rechartering",
    description:
      "The Chancellor convenes the first institutional assessment of AI capability growth. The assessment concluded that the University's traditional structure was fundamentally misaligned with the speed of intelligence development.",
    details: [
      "23-member assessment committee formed",
      "Six-month comprehensive review of institutional readiness",
      "Concluded with recommendation for full structural rechartering",
    ],
  },
  {
    year: "2024 Q1",
    title: "Rechartering Working Group Formed",
    era: "rechartering",
    description:
      "A cross-disciplinary working group was tasked with designing the governance, academic, and infrastructure architecture for an AI-native institution — while preserving the Heritage Charter of 1783.",
    details: [
      "Working group included faculty, governance experts, AI researchers, and students",
      "Reviewed 40+ institutional governance models worldwide",
      "Established the dual-timeline framework: heritage preservation + AI-native operation",
    ],
  },
  {
    year: "2024 Q3",
    title: "Four-Gate Validation Protocol Ratified",
    era: "rechartering",
    description:
      "The Alignment Review Committee ratified the four-gate validation framework — Safety, Ethics, Operations, Constitution — as the constitutional mechanism for all AI deployments.",
  },
  {
    year: "2025 Jan",
    title: "Rechartering Protocol Signed",
    era: "rechartering",
    description:
      "The University is officially rechartered as an AI-native institution. The Rechartering Protocol extends the Heritage Charter of 1783 without replacing it. Epoch-based governance begins.",
    details: [
      "Epoch Council established as supreme governing body",
      "Stability Board activated for verification infrastructure",
      "Alignment Review Committee granted constitutional veto authority",
      "Six epoch-based colleges announced",
    ],
  },
  {
    year: "Epoch 0.1",
    title: "College of Computational Systems Activated",
    era: "epochs",
    description:
      "The foundational college — systems architecture, distributed computing, formal verification. Director Elara Voss appointed. First B.Sys and M.AI programmes launched.",
    details: [
      "Deterministic Publishing Lab established",
      "Merkle verification infrastructure deployed",
      "Edition Manifest system goes live",
    ],
  },
  {
    year: "Epoch 0.2",
    title: "College of Applied Intelligence Activated",
    era: "epochs",
    description:
      "Model design, training paradigms, capability evaluation, and alignment research. Director James Harrington appointed. Institute for Accelerated Intelligence begins operations.",
    details: [
      "Alignment Verification Protocol (AVP) published",
      "First capability assessment framework deployed",
      "Open-source benchmark suite released",
    ],
  },
  {
    year: "Epoch 0.3",
    title: "College of Autonomous Governance Activated",
    era: "epochs",
    description:
      "Constitutional AI, institutional design for autonomous systems, regulatory frameworks. Director Victoria Langford appointed. Institute for Autonomous Governance launches.",
    details: [
      "Constitutional AI Framework published",
      "Referenced by 3 national regulatory bodies",
      "Sovereignty and Institutional Design treatise published",
    ],
  },
  {
    year: "Epoch 0.4",
    title: "College of Cryptographic Infrastructure Activated",
    era: "epochs",
    description:
      "Zero-knowledge proofs, multi-chain provenance, deterministic publishing. Director Marcus Chen appointed. Institute for Multi-Chain Provenance established.",
    details: [
      "Multi-Chain Provenance Standard (MCPS) published",
      "Cross-chain credential verification protocol deployed",
      "Genesis Protocol integration initiated",
    ],
  },
  {
    year: "Epoch 0.5",
    title: "College of Human-Centered Systems Activated",
    era: "epochs",
    description:
      "Human-AI interaction, cognitive augmentation, ethical reasoning under acceleration. Director Catherine Whitfield appointed. Focus on preserving human judgment as the anchor of institutional life.",
  },
  {
    year: "Epoch 0.6",
    title: "College of Narrative & Protocol Design Activated",
    era: "epochs",
    description:
      "Protocol specification, knowledge-graph construction, explainability engineering. Director Thomas Wycliffe appointed. Institute for Narrative Protocols launches.",
    details: [
      "Institutional Narrative Architecture (INA) framework published",
      "Knowledge-graph specification for University governance deployed",
      "Self-documenting protocol specification language released",
    ],
  },
];

const eraLabels: Record<Era, string> = {
  all: "All Eras",
  heritage: "Heritage (1783–2022)",
  rechartering: "Rechartering (2023–2025)",
  epochs: "Capability Epochs (0.1–0.6)",
};

const eraColors: Record<Exclude<Era, "all">, string> = {
  heritage: "border-l-stone",
  rechartering: "border-l-maroon",
  epochs: "border-l-gold",
};

export default function TimelinePage() {
  const [activeEra, setActiveEra] = useState<Era>("all");
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const filtered =
    activeEra === "all" ? events : events.filter((e) => e.era === activeEra);

  const toggle = (idx: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <>
      <Hero
        title="Timeline"
        subtitle="From the Heritage Charter to the Capability Epochs — the institutional arc of Fitzherbert University."
      />

      <Section>
        <SectionHeader
          eyebrow="Institutional History"
          title="Two Centuries. One Continuous Mission."
          description="The Heritage Charter of 1783 and the Rechartering Protocol of 2025 are not separate documents — they are chapters in the same story."
        />

        {/* ── Era Filter ──────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(eraLabels) as Era[]).map((era) => (
            <button
              key={era}
              onClick={() => setActiveEra(era)}
              className={`px-5 py-2 text-sm font-serif tracking-wide border transition-colors ${
                activeEra === era
                  ? "bg-maroon text-white border-maroon"
                  : "border-gold/30 text-stone hover:bg-gold/10"
              }`}
            >
              {eraLabels[era]}
            </button>
          ))}
        </div>

        {/* ── Timeline ────────────────────────────── */}
        <div className="max-w-3xl mx-auto space-y-6">
          {filtered.map((event, idx) => {
            const globalIdx = events.indexOf(event);
            const isOpen = expanded.has(globalIdx);

            return (
              <div
                key={`${event.year}-${event.title}`}
                className={`border-l-4 ${eraColors[event.era]} bg-ivory p-6 transition-all`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-serif text-sm font-bold text-maroon tracking-wide">
                      {event.year}
                    </span>
                    <h3 className="font-serif text-lg font-bold mt-1">{event.title}</h3>
                    <p className="text-stone text-sm leading-relaxed mt-2">
                      {event.description}
                    </p>
                  </div>
                  {event.details && (
                    <button
                      onClick={() => toggle(globalIdx)}
                      className="flex-shrink-0 text-gold hover:text-maroon transition-colors text-2xl leading-none mt-1"
                      aria-label={isOpen ? "Collapse" : "Expand"}
                    >
                      {isOpen ? "−" : "+"}
                    </button>
                  )}
                </div>

                {isOpen && event.details && (
                  <ul className="mt-4 pt-4 border-t border-gold/10 space-y-2">
                    {event.details.map((d) => (
                      <li key={d} className="text-stone text-sm flex items-start gap-2">
                        <span className="text-gold mt-1">&#9670;</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Era Summary ─────────────────────────── */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                era: "Heritage Era",
                period: "1783–2022",
                desc: "239 years of institutional development under the original charter. Seven faculties. Tens of thousands of graduates. A legacy of rigour, integrity, and the slow accumulation of knowledge.",
                color: "border-t-stone",
              },
              {
                era: "Rechartering",
                period: "2023–2025",
                desc: "Two years of institutional redesign. From the first capability assessment to the signing of the Rechartering Protocol. The fastest structural transformation in the University's history.",
                color: "border-t-maroon",
              },
              {
                era: "Capability Epochs",
                period: "0.1–0.6 (ongoing)",
                desc: "Six epochs activated in the first year. Each represents a capability milestone — not a calendar boundary. Together, they represent approximately thirty years of traditional academic development.",
                color: "border-t-gold",
              },
            ].map((summary) => (
              <div key={summary.era} className={`border-t-4 ${summary.color} bg-ivory p-6`}>
                <h3 className="font-serif text-lg font-bold">{summary.era}</h3>
                <p className="text-maroon text-xs tracking-wide uppercase mb-3">{summary.period}</p>
                <p className="text-stone text-sm leading-relaxed">{summary.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
