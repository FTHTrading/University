import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Five research institutes operating at the frontier of accelerated intelligence, autonomous governance, deterministic publishing, multi-chain provenance, and narrative protocols.",
};

const institutes = [
  {
    name: "Institute for Accelerated Intelligence",
    director: "Professor Eleanor Ashworth",
    established: "Epoch 0.1",
    icon: "⬢",
    mission:
      "Advancing the science of intelligence systems — model architecture, capability evaluation, alignment verification, and the engineering of intelligence infrastructure that can be trusted at scale.",
    outputs: [
      "Alignment Verification Protocol (AVP) — now adopted by 27 institutions",
      "Capability Assessment Framework for epoch-based evaluation",
      "Open-source benchmark suite for foundation model governance",
      "12 peer-reviewed papers in Year One",
    ],
    areas: [
      "Model Governance",
      "Capability Evaluation",
      "Alignment Science",
      "Benchmark Design",
      "Safety Engineering",
    ],
  },
  {
    name: "Institute for Autonomous Governance",
    director: "Director Victoria Langford",
    established: "Epoch 0.3",
    icon: "⬡",
    mission:
      "Designing constitutional frameworks for autonomous systems — governance architectures that constrains machines using principles drawn from democratic theory, institutional design, and regulatory engineering.",
    outputs: [
      "Constitutional AI Framework — referenced by 3 national regulatory bodies",
      "Epoch Council governance model (operational at Fitzherbert)",
      "Four-Gate Validation Protocol",
      "Treatise: Sovereignty and Institutional Design for Machine Governance",
    ],
    areas: [
      "Constitutional AI",
      "Regulatory Architecture",
      "Institutional Design",
      "Policy Engineering",
      "Democratic Accountability",
    ],
  },
  {
    name: "Institute for Deterministic Publishing",
    director: "Professor Andrew Caldwell",
    established: "Epoch 0.2",
    icon: "◈",
    mission:
      "Building the infrastructure for scholarly output that is reproducible, auditable, and cryptographically verified. Every artifact the University publishes carries a Merkle proof, was rendered deterministically, and can be independently verified.",
    outputs: [
      "Edition Manifest system — canonical registry for all University publications",
      "Merkle verification infrastructure for scholarly artifacts",
      "Deterministic rendering pipeline (zero-variance output)",
      "IPFS-pinned canonical archive",
    ],
    areas: [
      "Merkle Verification",
      "Canonical Registries",
      "Deterministic Rendering",
      "Reproducibility Science",
      "Archive Infrastructure",
    ],
  },
  {
    name: "Institute for Multi-Chain Provenance",
    director: "Director Marcus Chen",
    established: "Epoch 0.4",
    icon: "◇",
    mission:
      "Designing provenance systems that span multiple chains, protocols, and jurisdictions. Every claim the University makes about its own history, output, or governance is traceable to a cryptographic root.",
    outputs: [
      "Multi-Chain Provenance Standard (MCPS)",
      "Cross-chain verification protocol for academic credentials",
      "Provenance graph for institutional governance decisions",
      "Integration with Genesis Protocol sovereign systems",
    ],
    areas: [
      "Cross-Chain Verification",
      "Credential Provenance",
      "Governance Traceability",
      "Identity Infrastructure",
      "Sovereign Systems Integration",
    ],
  },
  {
    name: "Institute for Narrative Protocols",
    director: "Director Thomas Wycliffe",
    established: "Epoch 0.6",
    icon: "⬣",
    mission:
      "The science of systems that explain themselves. Narrative protocol design, knowledge-graph construction, explainability engineering, and the architecture of documentation that is both human-readable and machine-verifiable.",
    outputs: [
      "Institutional Narrative Architecture (INA) framework",
      "Knowledge-graph specification for University governance",
      "Explainability standard for AI governance decisions",
      "Self-documenting protocol specification language",
    ],
    areas: [
      "Protocol Architecture",
      "Knowledge Graphs",
      "Explainability Engineering",
      "Narrative Systems",
      "Documentation Science",
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      <Hero
        title="Research"
        subtitle="Five institutes. One mandate: build the intelligence infrastructure the world can trust."
      />

      {/* ── Research Philosophy ───────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Research Philosophy"
            title="Scholarship at the Speed of Intelligence"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Traditional research operates on a cycle measured in years — grant applications,
              peer review, journal publication, citation. That cycle was designed for a world
              where knowledge accumulated gradually. Fitzherbert University operates in a world
              where intelligence capability doubles every three to six months.
            </p>
            <p>
              The University did not abandon scholarly rigour. It rebuilt the infrastructure of
              rigour itself. Every research output is deterministically rendered, cryptographically
              verified, and published to a canonical registry in real time. Peer review is
              continuous, not periodic. Reproducibility is guaranteed by architecture, not by
              trust.
            </p>
            <p>
              This is not faster scholarship. It is structurally different scholarship — designed
              for a world where the gap between discovery and application has collapsed to zero.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Research Institutes ───────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Research Institutes"
          title="Five Frontiers"
          description="Each institute operates at a frontier that did not exist five years ago. Together, they form the research infrastructure of the AI-native university."
        />

        <div className="max-w-5xl mx-auto space-y-10">
          {institutes.map((inst) => (
            <div key={inst.name} className="border border-gold/20 bg-ivory p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl text-gold">{inst.icon}</span>
                <div>
                  <h3 className="font-serif text-2xl font-bold">{inst.name}</h3>
                  <p className="text-maroon text-sm">
                    {inst.director} · {inst.established}
                  </p>
                </div>
              </div>

              <p className="text-stone leading-relaxed mb-6">{inst.mission}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wide text-maroon mb-3">
                    Key Outputs
                  </h4>
                  <ul className="space-y-2">
                    {inst.outputs.map((o) => (
                      <li key={o} className="text-stone text-sm flex items-start gap-2">
                        <span className="text-gold mt-1">&#9670;</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wide text-maroon mb-3">
                    Research Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {inst.areas.map((a) => (
                      <span
                        key={a}
                        className="text-xs px-3 py-1 border border-gold/30 text-stone bg-ivory/80"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* ── Research in Frame ─────────────────── */}
      <Section stone>
        <div className="relative h-80 overflow-hidden border border-gold/20">
          <Image
            src="/images/research-institute.png"
            alt="Institute for Applied Intelligence — Active Research Session"
            fill
            className="object-cover object-center"
            unoptimized
          />
          <div className="absolute bottom-0 left-0 right-0 bg-navy/85 px-6 py-4">
            <div className="text-gold/70 text-xs tracking-widest uppercase mb-1">Research Division</div>
            <div className="text-parchment font-serif text-base font-bold">
              Institute for Applied Intelligence — Active Research Session, 2025
            </div>
            <div className="text-parchment/60 text-xs mt-1">
              Cross-disciplinary work at the boundary of directed intelligence and socioeconomic modelling.
              All research outputs are published in pre-canonical form pending Epoch Council review.
            </div>
          </div>
        </div>
      </Section>
      {/* ── Year One Impact ──────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Year One"
          title="Research Impact — First Twelve Months"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "47", label: "Peer-Reviewed Papers" },
            { value: "5", label: "New Protocols Published" },
            { value: "3", label: "Regulatory Body Adoptions" },
            { value: "27", label: "Institutions Using Our Standards" },
            { value: "12", label: "Open-Source Tools Released" },
            { value: "8", label: "Cross-Institute Collaborations" },
            { value: "4", label: "Alignment Audits Completed" },
            { value: "1", label: "Full Canonical Registry Deployed" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card text-center">
              <div className="font-serif text-3xl font-bold text-maroon">{stat.value}</div>
              <div className="text-stone text-xs mt-2 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Strategic Research Initiatives ─────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Strategic Initiatives"
          title="Multi-Year Research Programmes"
        />
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: "The Sovereign Intelligence Programme",
              desc: "A five-epoch research programme investigating the design, deployment, and governance of intelligence systems that operate independently of centralised providers. Integrating with the Genesis Protocol ecosystem to build intelligence infrastructure that institutions can own, verify, and trust.",
              timeline: "Epochs 0.1 – 0.6 (2025–2027)",
              lead: "Institute for Accelerated Intelligence + Institute for Multi-Chain Provenance",
            },
            {
              title: "The Constitutional AI Archive",
              desc: "Building the world's most comprehensive archive of constitutional frameworks for autonomous systems. Cataloguing, analysing, and improving governance models from democratic theory, international law, and institutional design for application to machine governance.",
              timeline: "Epochs 0.3 – 0.8 (2025–2028)",
              lead: "Institute for Autonomous Governance",
            },
            {
              title: "The Deterministic Scholarly Standard",
              desc: "Establishing a global standard for deterministic scholarly publishing — where every academic output is reproducible, cryptographically verified, and traceable to its source data. Working with international partners to replace trust-based verification with proof-based verification.",
              timeline: "Epochs 0.2 – 0.7 (2025–2028)",
              lead: "Institute for Deterministic Publishing + Institute for Narrative Protocols",
            },
          ].map((initiative) => (
            <div key={initiative.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl font-bold mb-2">{initiative.title}</h3>
              <p className="text-maroon text-xs tracking-wide uppercase mb-3">
                {initiative.lead} · {initiative.timeline}
              </p>
              <p className="text-stone text-sm leading-relaxed">{initiative.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── White Papers ──────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Publications"
          title="Selected White Papers"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              title: "Alignment Verification in Epoch-Based Institutions",
              authors: "Sinclair, M. & Langford, V.",
              date: "2025",
              desc: "A framework for continuous alignment verification across capability epochs, replacing static ethical review boards with dynamic, protocol-driven governance.",
            },
            {
              title: "Deterministic Publishing: Architecture and Implementation",
              authors: "Caldwell, A. & Chen, M.",
              date: "2025",
              desc: "Technical specification for zero-variance rendering, Merkle verification, and canonical registry systems for institutional scholarly output.",
            },
            {
              title: "The Epoch Model: Governance Beyond Calendar Time",
              authors: "Langford, V. & Wycliffe, T.",
              date: "2025",
              desc: "How capability-based governance cycles outperform calendar-based cycles in institutions operating under conditions of rapid technological change.",
            },
            {
              title: "Multi-Chain Provenance for Academic Credentials",
              authors: "Chen, M.",
              date: "2025",
              desc: "A cross-chain verification protocol for academic credentials that is jurisdiction-independent, tamper-evident, and independently verifiable.",
            },
          ].map((paper) => (
            <div key={paper.title} className="border border-gold/20 bg-ivory p-6">
              <h4 className="font-serif text-base font-bold">{paper.title}</h4>
              <p className="text-maroon text-xs tracking-wide mt-1">
                {paper.authors} ({paper.date})
              </p>
              <p className="text-stone text-sm leading-relaxed mt-3">{paper.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
