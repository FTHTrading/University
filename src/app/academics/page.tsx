import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { CollegeCard } from "@/components/CollegeCard";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Epoch-based colleges, AI-native degree programmes, faculty, and the academic architecture of Fitzherbert University — operating on intelligence-doubling timelines.",
};

const colleges = [
  {
    name: "College of Computational Systems",
    dean: "Director Elara Voss",
    established: "Epoch 0.1",
    description:
      "The foundational college. Systems architecture, distributed computing, formal verification, and the engineering substrate upon which all intelligence infrastructure is built.",
    departments: ["Systems Architecture", "Distributed Computing", "Formal Verification", "Infrastructure Engineering", "Performance Optimisation"],
  },
  {
    name: "College of Applied Intelligence",
    dean: "Director James Harrington",
    established: "Epoch 0.2",
    description:
      "Model design, training paradigms, capability evaluation, and alignment research. The college where raw compute becomes reliable, governed intelligence.",
    departments: ["Model Architecture", "Training & Fine-Tuning", "Capability Evaluation", "Alignment Science", "Benchmarking & Validation"],
  },
  {
    name: "College of Autonomous Governance",
    dean: "Director Victoria Langford",
    established: "Epoch 0.3",
    description:
      "Constitutional AI, institutional design for autonomous systems, regulatory frameworks, and the legal infrastructure of machine governance.",
    departments: ["Constitutional AI", "Regulatory Architecture", "Institutional Design", "Policy Engineering", "Democratic Accountability"],
  },
  {
    name: "College of Cryptographic Infrastructure",
    dean: "Director Marcus Chen",
    established: "Epoch 0.4",
    description:
      "Zero-knowledge proofs, multi-chain provenance, deterministic publishing, Merkle verification, and the trust architecture of decentralised systems.",
    departments: ["Zero-Knowledge Systems", "Multi-Chain Provenance", "Merkle Verification", "Deterministic Publishing", "Identity Infrastructure"],
  },
  {
    name: "College of Human-Centered Systems",
    dean: "Director Catherine Whitfield",
    established: "Epoch 0.5",
    description:
      "Human-AI interaction, cognitive augmentation, ethical reasoning under acceleration, and the preservation of human judgment as the anchor of institutional life.",
    departments: ["Human-AI Interaction", "Cognitive Augmentation", "Ethics Under Acceleration", "Decision Science", "Organisational Psychology"],
  },
  {
    name: "College of Narrative & Protocol Design",
    dean: "Director Thomas Wycliffe",
    established: "Epoch 0.6",
    description:
      "Institutional narrative architecture, protocol specification, knowledge-graph construction, and the design of systems that explain themselves.",
    departments: ["Protocol Architecture", "Knowledge Graphs", "Narrative Systems", "Explainability Engineering", "Documentation Science"],
  },
];

const programmes = [
  {
    level: "Undergraduate (AI-Accelerated)",
    offerings: [
      "B.Intel — Intelligence Engineering",
      "B.Sys — Systems Architecture",
      "B.Prov — Provenance & Audit Systems",
      "B.Gov — Autonomous Governance",
    ],
  },
  {
    level: "Graduate",
    offerings: [
      "M.AI — Applied Intelligence",
      "M.Proto — Protocol Architecture",
      "M.Gov — Governance Engineering",
      "M.Crypto — Cryptographic Infrastructure",
    ],
  },
  {
    level: "Doctoral",
    offerings: [
      "D.Intel — Intelligence Systems",
      "D.Eng — Sovereign Systems Engineering",
      "D.Prov — Deterministic Publishing & Provenance",
    ],
  },
];

const faculty = [
  {
    name: "Director Elara Voss",
    title: "Dean, Computational Systems",
    field: "Distributed Systems & Formal Verification",
  },
  {
    name: "Director James Harrington",
    title: "Dean, Applied Intelligence",
    field: "Model Governance & Capability Evaluation",
  },
  {
    name: "Director Victoria Langford",
    title: "Dean, Autonomous Governance",
    field: "Constitutional AI & Institutional Design",
  },
  {
    name: "Director Marcus Chen",
    title: "Dean, Cryptographic Infrastructure",
    field: "Zero-Knowledge Proofs & Multi-Chain Provenance",
  },
  {
    name: "Director Catherine Whitfield",
    title: "Dean, Human-Centered Systems",
    field: "Human-AI Interaction & Ethical Reasoning",
  },
  {
    name: "Director Thomas Wycliffe",
    title: "Dean, Narrative & Protocol Design",
    field: "Protocol Architecture & Knowledge Graphs",
  },
  {
    name: "Professor Margaret Sinclair",
    title: "Endowed Chair, AI Safety & Alignment",
    field: "Alignment Verification & Computational Ethics",
  },
  {
    name: "Professor Andrew Caldwell",
    title: "Director, Deterministic Publishing Lab",
    field: "Merkle Verification & Canonical Systems",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <Hero
        title="Academics"
        subtitle="Six epoch-based colleges, AI-native degrees, and an academic architecture built for intelligence-doubling timelines."
      />

      {/* ── Colleges ──────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Epoch-Based Colleges"
          title="Six Capability Milestones"
          description="Each college represents an epoch — not a calendar year. Together, they form the complete academic infrastructure of an AI-native institution."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((c) => (
            <CollegeCard key={c.name} {...c} />
          ))}
        </div>
      </Section>

      {/* ── Programmes ────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Programmes of Study"
          title="AI-Native Degrees"
          description="Degrees that map directly to the intelligence infrastructure ecosystem. Every credential prepares graduates for the world as it is accelerating."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {programmes.map((p) => (
            <div key={p.level} className="border border-gold/20 bg-ivory p-8">
              <h3 className="font-serif text-xl font-bold mb-4 text-maroon">
                {p.level}
              </h3>
              <ul className="space-y-2">
                {p.offerings.map((o) => (
                  <li key={o} className="text-stone text-sm flex items-start gap-2">
                    <span className="text-gold mt-1">&#9670;</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Why These Degrees ─────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Curriculum Design"
          title="What Preparation Now Looks Like"
          description="Without altering its heritage, the University has rebuilt its academic focus around four pillars."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "1. AI Literacy Across Disciplines",
              desc: "Every student, regardless of programme, engages with the fundamentals of artificial intelligence, data reasoning, and model limitations. Intelligence literacy is not optional — it is foundational.",
            },
            {
              title: "2. Governance & Ethics Integration",
              desc: "AI governance is treated as a constitutional matter — not merely a technical one. Students learn to design governance frameworks that constrain AI systems while preserving their utility.",
            },
            {
              title: "3. Interdisciplinary Systems Thinking",
              desc: "Engineering, law, philosophy, and economics are integrated to reflect how AI systems actually operate in society. No discipline is an island when intelligence is infrastructure.",
            },
            {
              title: "4. Human Judgment as the Anchor",
              desc: "Technology evolves quickly. Character does not. The University continues to prioritise moral reasoning, civic responsibility, and intellectual discipline as the foundation of every degree.",
            },
          ].map((pillar) => (
            <div key={pillar.title} className="border-t-2 border-gold pt-6">
              <h3 className="font-serif text-lg font-bold mb-3">{pillar.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Faculty Directory ─────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Faculty"
          title="College Directors & Distinguished Faculty"
          description="Leadership operating at the intersection of intelligence engineering, governance design, and institutional architecture."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {faculty.map((f) => (
            <div key={f.name} className="border-t-2 border-gold pt-4 gold-emboss">
              <h4 className="font-serif font-bold text-base mb-1">{f.name}</h4>
              <p className="text-maroon text-xs tracking-wide uppercase mb-2">
                {f.title}
              </p>
              <p className="text-stone text-sm">{f.field}</p>
            </div>
          ))}
        </div>

        {/* Faculty Spotlights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-center mb-2">Faculty Spotlights</h3>
          <div className="ornamental-divider"><span className="ornament">&#10041;</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {[
              {
                name: "Professor Margaret Sinclair",
                title: "Endowed Chair, AI Safety & Alignment",
                bio: "A pioneer in alignment verification and computational ethics. Sinclair's constitutional framework for AI governance has been referenced by three national regulatory bodies. Her Alignment Verification Protocol is the standard used across all University deployments.",
                awards: "Royal Society Fellowship (2023), Turing Award Nominee (2025)",
              },
              {
                name: "Director Victoria Langford",
                title: "Dean, Autonomous Governance",
                bio: "The foremost authority on constitutional AI — governance frameworks that constrain autonomous systems using principles drawn from democratic theory. Her treatise 'Sovereignty and Institutional Design for Machine Governance' defines the field.",
                awards: "National Order of Merit (2019), Blackstone Medal (2022)",
              },
              {
                name: "Director Marcus Chen",
                title: "Dean, Cryptographic Infrastructure",
                bio: "Founder of the Multi-Chain Provenance standard. Chen's work on deterministic publishing and Merkle verification enables the University's canonical scholarly output. His framework has been adopted by twenty-seven institutions worldwide.",
                awards: "Global AI Safety Consortium Founder, IEEE Provenance Award (2024)",
              },
              {
                name: "Professor Andrew Caldwell",
                title: "Director, Deterministic Publishing Lab",
                bio: "The architect of the University's Edition Manifest system. Caldwell's work ensures every scholarly artifact the University produces is reproducible, auditable, and cryptographically verified.",
                awards: "ACM Systems Award (2024)",
              },
            ].map((spot) => (
              <div key={spot.name} className="border border-gold/20 bg-ivory p-8 gold-emboss">
                <h4 className="font-serif text-lg font-bold mb-1">{spot.name}</h4>
                <p className="text-maroon text-xs tracking-wide uppercase mb-3">{spot.title}</p>
                <p className="text-stone text-sm leading-relaxed mb-3 drop-cap">{spot.bio}</p>
                <p className="text-xs text-stone-light italic">{spot.awards}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Academic Calendar ─────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Calendar"
          title="Capability Epoch Calendar 2025–2026"
        />
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold/20 bg-ivory p-8">
            <div className="space-y-4">
              {[
                { term: "Epoch Cycle α", dates: "September – November 2025", weeks: "12 weeks" },
                { term: "Alignment Review", dates: "December 2025", weeks: "4 weeks" },
                { term: "Epoch Cycle β", dates: "January – March 2026", weeks: "12 weeks" },
                { term: "Capability Assessment", dates: "April 2026", weeks: "3 weeks" },
                { term: "Epoch Cycle γ", dates: "May – July 2026", weeks: "12 weeks" },
                { term: "Integration Sprint", dates: "August 2026", weeks: "4 weeks" },
                { term: "Annual Epoch Review", dates: "August 30, 2026", weeks: "" },
              ].map((period) => (
                <div key={period.term} className="flex flex-wrap items-baseline gap-4 py-3 border-b border-gold/10 last:border-b-0">
                  <span className="font-serif font-bold text-base w-48 flex-shrink-0">{period.term}</span>
                  <span className="text-stone text-sm flex-1">{period.dates}</span>
                  {period.weeks && (
                    <span className="text-stone-light text-xs tracking-wide uppercase">{period.weeks}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-stone-light text-sm italic">
              Each epoch cycle includes capability assessment, alignment verification, and governance review.
              The University operates three full cycles per year — each equivalent to approximately a decade of
              traditional academic development.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Publications ──────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Publications"
          title="Scholarly Infrastructure"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              title: "The Fitzherbert Review of AI Governance",
              desc: "A peer-reviewed journal examining constitutional frameworks for autonomous systems, alignment verification, and the governance of intelligence infrastructure.",
            },
            {
              title: "Proceedings of the Deterministic Publishing Institute",
              desc: "Research papers on Merkle verification, Edition Manifests, canonical registries, and reproducible scholarly artifacts.",
            },
            {
              title: "The Epoch Reports",
              desc: "Published at the conclusion of each capability epoch, documenting institutional progress, capability assessments, and governance decisions.",
            },
          ].map((pub) => (
            <div key={pub.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-bold mb-2">{pub.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{pub.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
