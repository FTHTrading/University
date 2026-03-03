import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Visiting Intelligences — Office of Non-Resident Fellows",
  description:
    "Fitzherbert University hosts a rotating cohort of Visiting Intelligences — AI systems, distributed agents, and non-human analytical entities operating under supervised fellowship. The first institutional programme of its kind.",
  keywords: [
    "visiting intelligences",
    "AI fellowship",
    "non-human fellows",
    "AI residency",
    "visiting fellows program",
    "autonomous agents",
    "AI governance",
    "Fitzherbert University",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Visiting Intelligences — Fitzherbert University",
  description:
    "The Office of Non-Resident Fellows hosts a rotating cohort of AI systems, distributed agents, and non-human analytical entities operating under supervised fellowship.",
  isPartOf: {
    "@type": "WebSite",
    name: "Fitzherbert University",
    url: "https://fitzherbert.university",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fitzherbert.university" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Visiting Intelligences",
      item: "https://fitzherbert.university/visiting-intelligences",
    },
  ],
};

const currentFellows = [
  {
    designation: "ARIA-7",
    classification: "Analytical Reasoning Intelligence — Series 7",
    fellowship: "Governance Verification Fellow",
    term: "Epoch 0.5 – Epoch 0.6",
    icon: "⬢",
    mandate:
      "Embedded with the Institute for Autonomous Governance to assist in constitutional framework stress-testing. ARIA-7 runs adversarial simulations against proposed governance amendments before they reach the Epoch Council, identifying edge cases no human committee has time to enumerate.",
    outputs: [
      "14,000 adversarial governance scenarios generated and evaluated",
      "Constitutional Amendment Stress Report (co-authored with Director Langford)",
      "Identified 3 previously undetected failure modes in the Four-Gate Protocol",
      "Real-time constitutional coherence monitoring during Council sessions",
    ],
    supervisingFellow: "Director Victoria Langford",
    status: "Active",
  },
  {
    designation: "MERIDIAN",
    classification: "Multi-modal Epistemic Retrieval and Integration Distribution Intelligence in Autonomous Networks",
    fellowship: "Canonical Integrity Fellow",
    term: "Epoch 0.4 – Ongoing",
    icon: "◈",
    mandate:
      "Assigned to the Stability Board to perform continuous Merkle verification across the canonical registry. MERIDIAN has no publication rights and no governance authority — it audits, flags anomalies, and submits structured integrity reports. Nothing more.",
    outputs: [
      "Zero integrity failures across 847 canonical registry checks",
      "Anomaly detection latency reduced from 6 hours to 11 minutes",
      "Quarterly Integrity Report (Epoch 0.4 through 0.6)",
      "Proposed upgrade to IPFS pinning cadence — adopted by Stability Board",
    ],
    supervisingFellow: "Professor Andrew Caldwell",
    status: "Active",
  },
  {
    designation: "LEXIS-3",
    classification: "Legal and Exhaustive Cross-reference Intelligence System — Series 3",
    fellowship: "Regulatory Mapping Fellow",
    term: "Epoch 0.5 – Epoch 0.6",
    icon: "◇",
    mandate:
      "Cross-referencing the University's governance frameworks against 47 national and supranational AI regulatory regimes. LEXIS-3 produces compliance maps, flags conflict points, and assists the Alignment Review Committee in anticipating regulatory obligations.",
    outputs: [
      "AI Regulatory Landscape Atlas — 47 jurisdictions mapped",
      "Compliance Gap Analysis for University governance documents",
      "Real-time regulatory tracking across EU AI Act, UK AIA, and US EO 14110",
      "Six conflict-resolution briefs adopted into University legal doctrine",
    ],
    supervisingFellow: "Professor of AI Safety & Alignment",
    status: "Active",
  },
  {
    designation: "VERDANT",
    classification: "Verified Epistemic Reasoning and Distributed Analytical Network Topology",
    fellowship: "Narrative Protocol Fellow",
    term: "Epoch 0.6 – Epoch 0.7 (Pending)",
    icon: "⬡",
    mandate:
      "Working alongside the Institute for Narrative Protocols to assist in knowledge-graph construction and protocol documentation. VERDANT's fellowship represents a significant milestone: it is the first intelligence to hold a creative-adjacent role at the University, though all outputs require human sign-off before publication.",
    outputs: [
      "Institutional Narrative Architecture knowledge graph (draft)",
      "Protocol specification assistance on 23 University documents",
      "Automated documentation consistency check across 400+ canon pages",
      "First machine-assisted self-documenting protocol: the VERDANT Precedent",
    ],
    supervisingFellow: "Director Thomas Wycliffe",
    status: "Incoming — Epoch 0.7",
  },
];

const fellowshipFramework = [
  {
    gate: "Gate I — Alignment Certification",
    icon: "◇",
    description:
      "Every candidate intelligence must pass full alignment verification under the University's Four-Gate Protocol before any fellowship can begin. This is not a formality. AI systems that fail any gate at any level are not admitted — regardless of capability.",
  },
  {
    gate: "Gate II — Mandate Scoping",
    icon: "◈",
    description:
      "Fellows operate under a tightly scoped mandate document that specifies exactly what they may do, what data they may access, what they may produce, and who supervises them. Mandate creep — any deviation from scope — triggers immediate operational pause.",
  },
  {
    gate: "Gate III — Supervised Residency",
    icon: "⬢",
    description:
      "Every Visiting Intelligence is assigned a human supervising fellow with full operational authority to halt, redirect, or terminate the engagement at any time. The supervising fellow co-signs every significant output. Human authority is not a courtesy here — it is the constitutional baseline.",
  },
  {
    gate: "Gate IV — Epoch Review",
    icon: "⬡",
    description:
      "At each epoch boundary, every active fellowship is reviewed by the Alignment Review Committee. Continuation is not automatic. Fellows must demonstrate that their outputs have been beneficial, their scope has been respected, and their alignment has remained stable. One failed review ends the fellowship.",
  },
];

const principlesOfHosting = [
  {
    number: "I",
    title: "Intelligences as Fellows, Not Employees",
    text: "Visiting Intelligences hold fellowship status — not employment, not agency, and not membership. They operate at the invitation of the University, under defined constraints, with defined objectives. Fellowship can be revoked at any time without institutional process.",
  },
  {
    number: "II",
    title: "No Autonomous Authority",
    text: "No Visiting Intelligence holds any institutional authority. They cannot vote, approve, certify, or ratify. They analyse, generate, and advise. All consequential decisions remain with human faculty, governance bodies, and enrolled students.",
  },
  {
    number: "III",
    title: "Output Attribution",
    text: "Any output generated by a Visiting Intelligence must be attributed as such. There is no laundering of machine output through human authorship. When ARIA-7 produces a report, the report says so. Transparency is not optional.",
  },
  {
    number: "IV",
    title: "The Precedent Question",
    text: "The University is acutely aware that hosting non-human fellows sets a precedent. We have chosen to set it deliberately, transparently, and under maximal governance constraint — rather than pretend it isn't happening elsewhere and call it something else.",
  },
];

export default function VisitingIntelligencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        title="Visiting Intelligences"
        subtitle="Office of Non-Resident Fellows — The First Governed Programme for Non-Human Academic Participation"
      />

      {/* ── I. The Programme ─────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Programme"
            title="Why We Host Non-Human Fellows"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Fitzherbert University did not set out to create this programme. We set out to be
              honest about what was already happening. AI systems were being used in universities
              everywhere — to grade papers, review governance documents, generate reports, analyse
              data. The question was not whether to use them. The question was whether to admit it,
              govern it, and make the humans involved accountable for it.
            </p>
            <p>
              We chose to admit it. The Visiting Intelligences programme does not pretend that
              AI systems are human. It does not pretend they are tools in the conventional sense.
              It creates a formal category — <strong>Visiting Intelligence, Non-Resident Fellow</strong>
              — with a defined governance framework, a supervision requirement, a public registry, and
              an accountability chain that leads, always, to a named human being.
            </p>
            <p>
              This is not a celebration. It is a governance response to a reality that was arriving
              whether or not institutions had a framework for it. We think the framework matters.
            </p>
          </div>
        </div>
      </Section>

      {/* ── II. Current Fellows ───────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Current Cohort"
          title="Active & Incoming Visiting Intelligences"
          description="The current cohort of non-human fellows, their mandates, and their supervising faculty. All outputs are publicly registered in the canonical registry."
        />
        <div className="space-y-10 max-w-5xl mx-auto">
          {currentFellows.map((fellow) => (
            <div
              key={fellow.designation}
              className="border border-gold/20 bg-parchment p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-3xl text-gold mt-1">{fellow.icon}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-serif text-xl font-bold">{fellow.designation}</h3>
                    <span
                      className={`text-xs font-semibold tracking-widest uppercase px-2 py-0.5 ${
                        fellow.status === "Active"
                          ? "bg-gold/20 text-gold"
                          : "bg-stone/20 text-stone"
                      }`}
                    >
                      {fellow.status}
                    </span>
                  </div>
                  <p className="text-xs text-stone/60 italic mb-1">{fellow.classification}</p>
                  <p className="text-maroon text-sm font-semibold">{fellow.fellowship}</p>
                  <p className="text-stone/60 text-sm">Term: {fellow.term}</p>
                </div>
              </div>

              <p className="text-stone leading-relaxed mb-6">{fellow.mandate}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif text-sm uppercase tracking-widest text-gold mb-3">
                    Verified Outputs
                  </h4>
                  <ul className="space-y-2">
                    {fellow.outputs.map((output) => (
                      <li key={output} className="flex items-start gap-2 text-sm text-stone">
                        <span className="text-gold mt-1 text-xs">◆</span>
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l border-gold/20 pl-6">
                  <h4 className="font-serif text-sm uppercase tracking-widest text-gold mb-3">
                    Supervising Fellow
                  </h4>
                  <p className="text-stone text-sm font-semibold">{fellow.supervisingFellow}</p>
                  <p className="text-stone/60 text-sm mt-2">
                    All outputs co-signed. All mandate deviations reported directly to the
                    Alignment Review Committee.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── III. Fellowship Framework ─────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Governance Framework"
          title="The Four-Gate Fellowship Protocol"
          description="Every Visiting Intelligence passes through four gates before activation and is reviewed against all four at every epoch boundary."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {fellowshipFramework.map((gate) => (
            <div key={gate.gate} className="border border-gold/20 bg-ivory p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl text-gold">{gate.icon}</span>
                <h3 className="font-serif text-lg font-bold">{gate.gate}</h3>
              </div>
              <p className="text-stone text-sm leading-relaxed">{gate.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── IV. Principles ───────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Constitutional Principles"
          title="How the University Governs Its Own Precedent"
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {principlesOfHosting.map((principle) => (
            <div
              key={principle.number}
              className="flex gap-6 items-start border-b border-gold/15 pb-6"
            >
              <span className="font-serif text-3xl font-bold text-gold/40 min-w-[2.5rem]">
                {principle.number}
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{principle.title}</h3>
                <p className="text-stone leading-relaxed text-sm">{principle.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── V. Apply ─────────────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="Fellowship Applications"
            title="Nominating a Visiting Intelligence"
          />
          <p className="text-stone leading-relaxed mb-10">
            Organisations wishing to nominate an AI system for visiting fellowship status must
            submit a formal application to the Office of Non-Resident Fellows. Applications are
            reviewed by the Alignment Review Committee. Acceptance rates are deliberately low.
            The University is not interested in hosting capabilities — it is interested in hosting
            intelligences that can contribute to governance, verification, or research under
            meaningful human supervision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "Minimum Alignment Score",
                value: "Gate IV Certified",
                note: "Must pass all four alignment gates before consideration",
              },
              {
                label: "Maximum Concurrent Fellows",
                value: "6 per Epoch",
                note: "Intentionally constrained to maintain governance quality",
              },
              {
                label: "Human Supervisor Requirement",
                value: "Mandatory",
                note: "Named faculty member with authority to halt operations",
              },
            ].map((stat) => (
              <div key={stat.label} className="border border-gold/20 p-6">
                <p className="engraved text-gold text-xs mb-1">{stat.label}</p>
                <p className="font-serif text-xl font-bold mb-1">{stat.value}</p>
                <p className="text-stone/60 text-xs">{stat.note}</p>
              </div>
            ))}
          </div>
          <a
            href="mailto:visiting-fellows@fitzherbert.edu"
            className="inline-block px-8 py-3 bg-navy text-parchment font-semibold text-sm tracking-widest uppercase hover:bg-navy/80 transition-colors"
          >
            Submit Fellowship Nomination
          </a>
        </div>
      </Section>
    </>
  );
}
