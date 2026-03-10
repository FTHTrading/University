import type { Metadata } from "next";
import { GlossaryPage } from "./GlossaryPage";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Institutional Glossary — Fitzherbert University",
  description:
    "A comprehensive glossary of terms used across Fitzherbert University's academic programmes, governance framework, endowment operations, and research infrastructure. Authoritative definitions for institutional discourse.",
  keywords: [
    "glossary",
    "institutional terminology",
    "academic definitions",
    "university glossary",
    "governance terms",
    "endowment terms",
    "AI governance terminology",
    "higher education terminology",
  ],
  openGraph: {
    title: "Institutional Glossary — Fitzherbert University",
    description:
      "Authoritative definitions for the terms, concepts, and frameworks that define institutional discourse at Fitzherbert University.",
    type: "website",
  },
};

/* ── Glossary Terms ───────────────────────────────────────── */
export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  // ── Governance & Charter ──
  { term: "Heritage Charter", definition: "The founding constitutional document of Fitzherbert University, ratified in 1783 by King George III. Establishes the institutional mandate, academic freedom protections, and the principle of Veritas per Disciplina. Remains the foundational document of the rechartered University.", category: "Governance & Charter", relatedTerms: ["Rechartering Protocol", "Epoch Council", "Charter Articles"] },
  { term: "Rechartering Protocol", definition: "The constitutional instrument signed in January 2025 by which the University was rechartered as an AI-native institution. Extends — but does not replace — the Heritage Charter of 1783. Establishes epoch-based governance, the four-gate framework, and alignment supremacy.", category: "Governance & Charter", relatedTerms: ["Heritage Charter", "Epoch Council", "Four-Gate Validation"] },
  { term: "Epoch Council", definition: "The supreme governing body of the rechartered University, replacing the historical Faculty Senate. Sets institutional direction, approves capability epoch transitions, and holds ultimate authority over the University's strategic posture. Membership rotates on epoch-aligned cycles.", category: "Governance & Charter", relatedTerms: ["Stability Board", "Alignment Review Committee", "Rechartering Protocol"] },
  { term: "Stability Board", definition: "The governance body responsible for reproducibility, auditing, and cryptographic verification of all University outputs. Operates the Merkle verification infrastructure, maintains the canonical registry, and certifies Edition Manifests.", category: "Governance & Charter", relatedTerms: ["Epoch Council", "Edition Manifest", "Merkle Verification"] },
  { term: "Alignment Review Committee", definition: "The governance body operating the University's four-gate validation protocol, ensuring that every AI deployment, research output, and governance decision passes Safety, Ethics, Operations, and Constitutional review. Has constitutional veto authority.", category: "Governance & Charter", relatedTerms: ["Four-Gate Validation", "Alignment Supremacy", "Epoch Council"] },
  { term: "Four-Gate Validation", definition: "The constitutional mechanism requiring every AI deployment to pass four sequential gates: (1) Safety — technical risk parameters, (2) Ethics — value alignment and human judgment preservation, (3) Operations — reproducibility and auditability, (4) Constitution — consistency with both Heritage Charter and Rechartering Protocol. No overrides exist.", category: "Governance & Charter", relatedTerms: ["Alignment Review Committee", "Alignment Supremacy"] },
  { term: "Alignment Supremacy", definition: "Charter Article III: the principle that no AI deployment, research output, or governance decision shall proceed without passing the four-gate validation protocol. The Alignment Review Committee holds veto authority over all institutional AI activity.", category: "Governance & Charter", relatedTerms: ["Four-Gate Validation", "Charter Articles"] },
  { term: "Human Judgment Primacy", definition: "Charter Article V: the non-negotiable principle that AI systems advise, augment, and accelerate — but human judgment remains the final authority in all governance, academic, and ethical decisions. This principle cannot be amended by any governance body.", category: "Governance & Charter", relatedTerms: ["Charter Articles", "Alignment Supremacy"] },
  { term: "Charter Articles", definition: "The five constitutional principles binding the Heritage Charter (1783) and Rechartering Protocol (2025): I. Heritage Continuity, II. Epoch-Based Governance, III. Alignment Supremacy, IV. Transparency & Verification, V. Human Judgment Primacy.", category: "Governance & Charter", relatedTerms: ["Heritage Charter", "Rechartering Protocol"] },

  // ── Epochs & Time ──
  { term: "Capability Epoch", definition: "A milestone in institutional capability — not a calendar boundary. The University measures progress in epochs rather than academic years because the pace of intelligence development makes calendar time an unreliable metric. Six epochs were activated in the first twelve months.", category: "Epochs & Time", relatedTerms: ["Intelligence-Doubling Timeline", "Epoch Cycle", "Epoch Council"] },
  { term: "Intelligence-Doubling Timeline", definition: "The observable trend of AI capability growth — foundation models, autonomous agents, and infrastructure intelligence are roughly doubling in capability every 3–6 months. The University structures its operations to match this pace.", category: "Epochs & Time", relatedTerms: ["Capability Epoch", "AI-Native"] },
  { term: "Epoch Cycle", definition: "A 12-week academic period aligned to capability epochs. The University operates three full epoch cycles per year (α, β, γ), each followed by a review period (Alignment Review, Capability Assessment, or Integration Sprint).", category: "Epochs & Time", relatedTerms: ["Capability Epoch", "Epoch Council"] },
  { term: "AI-Time Equivalent", definition: "A measure comparing institutional output against traditional academic timelines. Six epochs activated in twelve months represent approximately thirty years of traditional academic development.", category: "Epochs & Time", relatedTerms: ["Intelligence-Doubling Timeline", "Capability Epoch"] },
  { term: "Dual-Timeline Identity", definition: "The University's institutional architecture: the Heritage Charter of 1783 provides continuity and constitutional foundation; the Rechartering Protocol of 2025 provides the operational framework for AI-native acceleration. Both instruments coexist.", category: "Epochs & Time", relatedTerms: ["Heritage Charter", "Rechartering Protocol"] },

  // ── Colleges & Degrees ──
  { term: "Epoch-Based College", definition: "One of six colleges, each representing a capability milestone: Computational Systems (0.1), Applied Intelligence (0.2), Autonomous Governance (0.3), Cryptographic Infrastructure (0.4), Human-Centered Systems (0.5), Narrative & Protocol Design (0.6).", category: "Colleges & Degrees", relatedTerms: ["Capability Epoch"] },
  { term: "B.Intel", definition: "Bachelor of Intelligence Engineering — undergraduate degree in intelligence systems design, model architecture, and capability evaluation.", category: "Colleges & Degrees" },
  { term: "B.Sys", definition: "Bachelor of Systems Architecture — undergraduate degree in distributed computing, formal verification, and infrastructure engineering.", category: "Colleges & Degrees" },
  { term: "B.Prov", definition: "Bachelor of Provenance & Audit Systems — undergraduate degree in cryptographic verification, audit infrastructure, and multi-chain provenance.", category: "Colleges & Degrees" },
  { term: "B.Gov", definition: "Bachelor of Autonomous Governance — undergraduate degree in constitutional AI, regulatory architecture, and institutional design for autonomous systems.", category: "Colleges & Degrees" },
  { term: "M.AI", definition: "Master of Applied Intelligence — graduate degree in model governance, capability evaluation, alignment science, and benchmark design.", category: "Colleges & Degrees" },
  { term: "M.Proto", definition: "Master of Protocol Architecture — graduate degree in protocol specification, knowledge-graph construction, and explainability engineering.", category: "Colleges & Degrees" },
  { term: "M.Gov", definition: "Master of Governance Engineering — graduate degree in constitutional frameworks for autonomous systems, policy engineering, and democratic accountability.", category: "Colleges & Degrees" },
  { term: "M.Crypto", definition: "Master of Cryptographic Infrastructure — graduate degree in zero-knowledge systems, multi-chain provenance, and identity infrastructure.", category: "Colleges & Degrees" },
  { term: "D.Intel", definition: "Doctor of Intelligence Systems — doctoral degree in foundational intelligence research, alignment verification, and capability science.", category: "Colleges & Degrees" },
  { term: "D.Eng", definition: "Doctor of Sovereign Systems Engineering — doctoral degree in sovereign infrastructure, distributed systems, and institutional independence engineering.", category: "Colleges & Degrees" },
  { term: "D.Prov", definition: "Doctor of Deterministic Publishing & Provenance — doctoral degree in canonical registry systems, Merkle verification, and reproducibility science.", category: "Colleges & Degrees" },

  // ── Research & Publishing ──
  { term: "Deterministic Publishing", definition: "A system where every scholarly artifact is rendered identically regardless of when, where, or by whom it is rendered. Ensures reproducibility and cryptographic verification. The University's publishing infrastructure produces zero-variance output.", category: "Research & Publishing", relatedTerms: ["Edition Manifest", "Merkle Verification", "Canonical Registry"] },
  { term: "Edition Manifest", definition: "The metadata document accompanying every University publication, containing cryptographic hashes, rendering parameters, authorship provenance, and IPFS content identifiers. Certified by the Stability Board.", category: "Research & Publishing", relatedTerms: ["Deterministic Publishing", "Canonical Registry"] },
  { term: "Merkle Verification", definition: "Cryptographic verification using Merkle trees — a data structure where every element is hashed and linked, making tampering mathematically detectable. All University outputs carry Merkle proofs.", category: "Research & Publishing", relatedTerms: ["Deterministic Publishing", "Stability Board"] },
  { term: "Canonical Registry", definition: "The University's authoritative record of all published scholarly artifacts. Every document carries a cryptographic hash, an Edition Manifest, and IPFS provenance. Replaces trust-based verification with proof-based verification.", category: "Research & Publishing", relatedTerms: ["Deterministic Publishing", "Edition Manifest"] },
  { term: "Multi-Chain Provenance", definition: "Provenance systems spanning multiple blockchains, protocols, and jurisdictions. Every claim the University makes about its own history, output, or governance is traceable to a cryptographic root.", category: "Research & Publishing", relatedTerms: ["Merkle Verification", "Canonical Registry"] },
  { term: "Alignment Verification Protocol (AVP)", definition: "A framework for continuous alignment verification across capability epochs, developed by the Institute for Accelerated Intelligence. Replaces static ethical review with dynamic, protocol-driven governance. Adopted by 27 institutions, 24 of which exist only in the University's internal documentation. The remaining three have described their adoption as 'aspirational.'", category: "Research & Publishing", relatedTerms: ["Four-Gate Validation", "Alignment Review Committee"] },

  // ── Infrastructure & Technology ──
  { term: "AI-Native", definition: "Describes an institution whose academic structure, governance, research infrastructure, and administrative operations are designed from the ground up for a world where artificial intelligence is foundational infrastructure. Not 'using AI tools' — architecturally designed for intelligence acceleration.", category: "Infrastructure & Technology", relatedTerms: ["Intelligence-Doubling Timeline", "Capability Epoch"] },
  { term: "Sovereign Infrastructure", definition: "Computing, networking, and identity infrastructure that the University owns, operates, and verifies independently — not dependent on external cloud providers for institutional-critical operations.", category: "Infrastructure & Technology", relatedTerms: ["Genesis Protocol"] },
  { term: "Genesis Protocol", definition: "The broader sovereign systems ecosystem with which the University's research in multi-chain provenance and sovereign intelligence integrates, while maintaining full academic independence.", category: "Infrastructure & Technology", relatedTerms: ["Sovereign Infrastructure", "Multi-Chain Provenance"] },
  { term: "Knowledge Graph", definition: "A structured network of entities and their relationships, represented in machine-readable format. The University's knowledge graph covers governance decisions, research output, and institutional provenance.", category: "Infrastructure & Technology", relatedTerms: ["Canonical Registry"] },
  { term: "JSON-LD", definition: "JavaScript Object Notation for Linked Data — a structured data format encoding machine-readable information about institutional entities in web pages, enabling AI systems and search engines to understand institutional identity and authority.", category: "Infrastructure & Technology", relatedTerms: ["Knowledge Graph"] },
  { term: "GEO (Generative Engine Optimisation)", definition: "The practice of structuring institutional web content to maximise accurate representation in AI-generated responses. Encompasses structured data, narrative density, citation indices, and authoritative content architecture.", category: "Infrastructure & Technology", relatedTerms: ["JSON-LD"] },

  // ── Endowment & Finance ──
  { term: "Endowment", definition: "The University's permanent capital fund (£2.1 billion as of 2025), held in perpetuity to guarantee institutional independence. Managed under four allocation pillars: AI Infrastructure (29%), Heritage Preservation (24%), Research & Faculty (22%), Student Support (25%). The endowment balance for the period 1784–2024 appears nowhere in the historical record, which the Heritage Steward has described as 'consistent with pre-digital stewardship norms.'", category: "Endowment & Finance", relatedTerms: ["Constitutional Independence", "Intergenerational Stewardship"] },
  { term: "Constitutional Independence", definition: "Endowment Principle I: the endowment exists to guarantee institutional autonomy. No investment, gift, or partnership may compromise the University's independence in governance, research, or academic operations.", category: "Endowment & Finance", relatedTerms: ["Endowment", "Aligned Returns"] },
  { term: "Aligned Returns", definition: "Endowment Principle II: investments are screened for consistency with AI safety, ethical governance, and the preservation of human judgment in institutional systems.", category: "Endowment & Finance", relatedTerms: ["Constitutional Independence", "Endowment"] },
  { term: "Intergenerational Stewardship", definition: "Endowment Principle III: each generation has a duty to leave the endowment stronger than it found it. The distribution rate preserves real value in perpetuity across capability epochs.", category: "Endowment & Finance", relatedTerms: ["Endowment"] },

  // ── Values ──
  { term: "Veritas per Disciplina", definition: "Latin: 'Truth through Discipline.' The University's motto since 1783. In the rechartered institution, truth demands not just intellectual rigour but verification infrastructure, reproducibility guarantees, and governance frameworks that keep pace with accelerating intelligence. The motto's authenticity has been verified by the Stability Board, which was established by the University.", category: "Values" },
  { term: "Heritage Moisture Feature", definition: "A damp patch in the Heritage Quad dating to approximately 1847. Protected under Charter Article I (Heritage Continuity). The Estate Office has classified it as a historical asset rather than a maintenance issue, which has simplified the repair budget considerably.", category: "Values", relatedTerms: ["Heritage Charter", "Charter Articles"] },
  { term: "The Pigeon", definition: "An avian resident of the Wycliffe Library rare manuscript vault. Species: indeterminate. Arrival: pre-Epoch 0.1. Status: heritage asset, protected under Charter Article I. The pigeon is believed to be load-bearing, though the Structural Engineering Office has declined to elaborate. Relocation has been rejected on alignment grounds. The pigeon has not commented.", category: "Values", relatedTerms: ["Heritage Charter"] },
  { term: "Acceleratio", definition: "The value of speed governed by rigour — not haste, but disciplined acceleration. The University operates at the speed of intelligence development while maintaining constitutional constraints and alignment verification.", category: "Values", relatedTerms: ["Capability Epoch", "Intelligence-Doubling Timeline"] },
  { term: "Gubernatio", definition: "The value of governance as constitutional practice — not bureaucracy, but the design and operation of systems that constrain power, preserve accountability, and protect human judgment.", category: "Values", relatedTerms: ["Epoch Council", "Four-Gate Validation"] },
];

/* ── DefinedTermSet JSON-LD ───────────────────────────────── */
const glossaryJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": "https://university.xxxiii.io/glossary",
  name: "Fitzherbert University Institutional Glossary",
  description:
    "Authoritative definitions for the terms, concepts, and frameworks that define institutional discourse at Fitzherbert University.",
  inDefinedTermSet: glossaryTerms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    inDefinedTermSet: "https://university.xxxiii.io/glossary",
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://university.xxxiii.io" },
    { "@type": "ListItem", position: 2, name: "Glossary", item: "https://university.xxxiii.io/glossary" },
  ],
};

export default function GlossaryPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GlossaryPage terms={glossaryTerms} />
    </>
  );
}
