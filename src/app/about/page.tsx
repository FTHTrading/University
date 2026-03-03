import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "The founding heritage, AI-native rechartering, institutional philosophy, and dual-timeline identity of Fitzherbert University — Chartered 1783, Rechartered 2025.",
};

const timelineEvents = [
  {
    year: "1783",
    title: "Charter of Foundation",
    description:
      "The colonial legislature grants a royal charter establishing Fitzherbert University. Sir Henry FitzHerbert, the Reverend Jonathan Ashworth, and Lady Margaret Pemberton sign the founding charter in the presence of the Governor-General.",
    detail:
      "The original parchment is held in the University Archives. The Charter established principles of disciplined inquiry, constitutional governance, and public responsibility that remain the institution's moral infrastructure.",
    latin: "In nomine veritatis et disciplinae, hanc universitatem fundamus.",
  },
  {
    year: "2025",
    title: "AI-Native Rechartering",
    description:
      "Recognising that model capability doubles every 3–6 months, the University rechartered as an AI-native institution — restructuring its academic programme around intelligence-doubling curves.",
    detail:
      "The Rechartering Thesis: 'Human institutions operate on generational time. AI institutions must operate on doubling time.' Six epoch-based colleges replace the century-old departmental structure.",
    latin: "Tempus acceleratum — novam disciplinam postulat.",
  },
  {
    year: "Epoch 0.1",
    title: "College of Computational Systems",
    description:
      "The foundational college establishes the engineering substrate — systems architecture, distributed computing, and formal verification.",
    detail:
      "Every subsequent college depends on the computational systems layer. This college ensures the infrastructure is sovereign, auditable, and deterministic.",
  },
  {
    year: "Epoch 0.2",
    title: "College of Applied Intelligence",
    description:
      "Model design, training paradigms, capability evaluation, and alignment research. Where raw compute becomes reliable, governed intelligence.",
    detail:
      "The college completed its first full model-alignment cycle within three months of founding — a pace impossible in traditional academia.",
  },
  {
    year: "Epoch 0.3",
    title: "College of Autonomous Governance",
    description:
      "Constitutional AI frameworks, institutional design for autonomous systems, regulatory architecture, and the legal infrastructure of machine governance.",
    detail:
      "The college's governance frameworks have been referenced by three national regulatory bodies within its first year.",
  },
  {
    year: "Epoch 0.4",
    title: "College of Cryptographic Infrastructure",
    description:
      "Zero-knowledge proofs, multi-chain provenance, Merkle verification, and the trust architecture of decentralised knowledge systems.",
    detail:
      "The Genesis Protocol integration — anchoring all scholarly output to deterministic, verifiable infrastructure — was completed in this epoch.",
  },
  {
    year: "Epoch 0.5",
    title: "College of Human-Centered Systems",
    description:
      "Human-AI interaction, cognitive augmentation, ethical reasoning under acceleration, and the preservation of human judgment as the anchor of institutional life.",
    detail:
      "The founding principle: technology evolves quickly; character does not. This college ensures human values remain central.",
  },
  {
    year: "Epoch 0.6",
    title: "College of Narrative & Protocol Design",
    description:
      "Institutional narrative architecture, protocol specification, knowledge-graph construction, and the design of systems that explain themselves.",
    detail:
      "The sixth and final foundational college, completing the epoch structure. Its mandate: if a system cannot explain itself, it should not govern.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About the University"
        subtitle="Chartered 1783. Rechartered 2025. Operating on intelligence-doubling timelines."
      />

      {/* ── Dual-Timeline Identity ────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Our Identity"
          title="Two Timelines, One Institution"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            Fitzherbert University was established by charter in 1783, during a period of
            extraordinary intellectual ferment. For more than two centuries, its founders&apos;
            principles — disciplined inquiry, constitutional governance, and public
            responsibility — guided the institution through industrial revolutions,
            scientific transformations, and the rise of digital infrastructure.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            In 2025, the University reached another inflection point. Not the replacement
            of human institutions — but their acceleration. Large-scale language models,
            autonomous systems, and AI-mediated decision infrastructures had fundamentally
            altered the tempo at which knowledge evolves. The University rechartered as an
            AI-native institution, restructuring its entire academic programme around
            intelligence-doubling curves.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            A one-year-old AI-native institution is equivalent to 20–40 years of human
            institutional development — because each semester is effectively a capability
            epoch. This gives the University a credible basis for institutional depth that
            operates on exponential, not linear, timelines.
          </p>
        </div>
      </Section>

      {/* ── Founding Thesis ───────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Founding Thesis"
          title="Why AI-Time Changes Everything"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-gold/30 bg-ivory p-8">
            <p className="font-serif italic text-maroon text-lg text-center leading-relaxed">
              &ldquo;Human institutions operate on generational time.
              AI institutions must operate on doubling time.&rdquo;
            </p>
            <p className="text-center text-sm text-stone-light mt-4">
              — The Rechartering Thesis, 2025
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gold/20 bg-ivory p-6">
              <h3 className="font-serif text-base font-bold mb-2">Model Capability</h3>
              <p className="text-stone text-sm">Doubles every <strong className="text-maroon">3–6 months</strong></p>
            </div>
            <div className="border border-gold/20 bg-ivory p-6">
              <h3 className="font-serif text-base font-bold mb-2">Algorithmic Efficiency</h3>
              <p className="text-stone text-sm">Doubles every <strong className="text-maroon">12–18 months</strong></p>
            </div>
            <div className="border border-gold/20 bg-ivory p-6">
              <h3 className="font-serif text-base font-bold mb-2">Compute Efficiency</h3>
              <p className="text-stone text-sm">Doubles every <strong className="text-maroon">24 months</strong></p>
            </div>
            <div className="border border-gold/20 bg-ivory p-6">
              <h3 className="font-serif text-base font-bold mb-2">Knowledge Integration</h3>
              <p className="text-stone text-sm"><strong className="text-maroon">Accelerates continuously</strong></p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Timeline ──────────────────────────────── */}
      <Section stone>
        <SectionHeader
          eyebrow="Institutional Timeline"
          title="From Heritage Charter to Capability Epochs"
          description="The University's journey from Enlightenment charter to AI-native institution — measured in both human time and intelligence-doubling cycles."
        />
        <Timeline events={timelineEvents} />
      </Section>

      {/* ── Charter & Constitution ────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Foundation"
          title="Charter & Constitution"
        />
        <div className="max-w-3xl mx-auto space-y-6">          {/* Coat of arms */}
          <div className="relative h-80 w-full overflow-hidden border border-gold/20 mb-4">
            <Image
              src="/images/coat-of-arms.png"
              alt="Fitzherbert University Coat of Arms"
              fill
              className="object-contain bg-navy/5"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/70 px-4 py-2 text-center">
              <div className="text-parchment/70 text-xs tracking-widest uppercase">Coat of Arms — Granted 1783 · Ratified under the 2025 Rechartering Protocol</div>
            </div>
          </div>          <p className="text-lg leading-relaxed text-stone drop-cap">
            The University Charter of 1783 established foundational principles that
            survive the rechartering: the sovereignty of scholarly inquiry, the duty of
            institutional stewardship, and the obligation to serve the public good. The
            2025 Rechartering Protocol preserves these articles while adding the
            constitutional infrastructure for AI-native governance.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            The 1783 Charter is not erased. It is the moral bedrock. The 2025
            Rechartering is the operational acceleration layer. Together, they form a
            dual-timeline constitutional framework unprecedented in higher education.
          </p>
          <div className="border border-gold/30 bg-ivory p-8 mt-8">
            <p className="font-serif italic text-maroon text-lg text-center leading-relaxed">
              &ldquo;We hold that the pursuit of truth demands both liberty of thought and
              discipline of method; that the University exists not for its own aggrandisement
              but for the advancement of human understanding; and that every member of this
              community bears an obligation to uphold these principles with integrity and
              moral seriousness.&rdquo;
            </p>
            <p className="text-center text-sm text-stone-light mt-4">
              — Preamble to the University Charter, 1783 (preserved in 2025 Rechartering)
            </p>
          </div>
        </div>
      </Section>

      {/* ── Institutional Values ──────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Philosophy"
          title="Institutional Values"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Veritas — Truth",
              desc: "The relentless and honest pursuit of knowledge, unconstrained by fashion or convenience, accountable only to evidence, reason, and reproducible verification.",
            },
            {
              title: "Disciplina — Discipline",
              desc: "Rigorous method, systematic inquiry, and intellectual self-governance. In AI-time, discipline means deterministic outputs, Merkle-verified claims, and auditable reasoning chains.",
            },
            {
              title: "Integritas — Integrity",
              desc: "Institutional transparency, ethical conduct, and faithful stewardship of resources — extended to encompass AI model governance, bias auditing, and alignment verification.",
            },
            {
              title: "Acceleratio — Acceleration",
              desc: "The recognition that intelligence-doubling curves demand institutional structures that evolve at the speed of capability, not the speed of bureaucracy.",
            },
            {
              title: "Gubernatio — Governance",
              desc: "Constitutional frameworks for autonomous systems. If a system cannot be governed, it should not be deployed. If it cannot explain itself, it should not decide.",
            },
            {
              title: "Hereditas — Heritage",
              desc: "The 1783 Charter endures. The acceleration of AI does not erase founding commitments — it increases their importance. Institutions that endure are those that evolve without abandoning their foundations.",
            },
          ].map((val) => (
            <div key={val.title} className="border-t-2 border-gold pt-6">
              <h3 className="font-serif text-lg font-bold mb-3">{val.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Governance Overview ───────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Governance"
          title="How the University Is Governed"
          description="AI-native governance — the Epoch Council, Stability Board, and Alignment Review Committee."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "The Epoch Council",
              desc: "A rotating governance body that updates every capability epoch. The Council sets institutional direction, approves new colleges, and ratifies governance framework changes. Membership rotates to ensure the University's leadership evolves with its capabilities.",
            },
            {
              title: "The Stability Board",
              desc: "Ensures reproducibility, auditability, and deterministic outputs across all institutional operations. The Board verifies Merkle roots, validates canonical publishing integrity, and maintains the institution's cryptographic trust layer.",
            },
            {
              title: "The Alignment Review Committee",
              desc: "Evaluates safety, ethics, and institutional integrity. Every AI model deployed within the University must pass the Committee's four-gate validation: technical benchmarking, bias auditing, ethical review, and formal sign-off.",
            },
          ].map((gov) => (
            <div key={gov.title} className="border border-gold/20 bg-ivory p-8 gold-emboss">
              <h3 className="font-serif text-xl font-bold mb-3">{gov.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{gov.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
