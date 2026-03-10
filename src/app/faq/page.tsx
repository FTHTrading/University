import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Fitzherbert University, the 2025 rechartering, epoch-based governance, AI-native degrees, and how 1783 heritage coexists with intelligence-doubling timelines.",
};

const faqs = [
  {
    category: "Identity & Heritage",
    questions: [
      {
        q: "Is Fitzherbert University a new institution?",
        a: "No. Fitzherbert University was chartered in 1783 and has operated continuously for over 240 years. In 2025, the University was rechartered as an AI-native institution — extending its original charter without replacing it. The Heritage Charter of 1783 remains the foundational document of the University.",
      },
      {
        q: "What does 'Chartered 1783 · Rechartered 2025' mean?",
        a: "It means the University holds two constitutional instruments. The Heritage Charter (1783) established the institution, its values, and its academic freedom protections. The Rechartering Protocol (2025) extended that framework to accommodate intelligence-doubling timelines, epoch-based governance, and AI-native operations.",
      },
      {
        q: "What does 'AI-native' mean in a university context?",
        a: "An AI-native institution is one whose academic structure, governance, research infrastructure, and administrative operations are designed from the ground up for a world where artificial intelligence is a foundational part of intellectual life. It does not mean 'using AI tools' — it means the institution's architecture was built to operate at the speed of intelligence development.",
      },
      {
        q: "What is 'Veritas per Disciplina'?",
        a: "Latin for 'Truth through Discipline.' It has been the University's motto since 1783. In the rechartered institution, it carries additional weight: truth now demands not just intellectual rigour but verification infrastructure, reproducibility guarantees, and governance frameworks that can keep pace with accelerating intelligence. The motto was recently verified as authentic by the Stability Board, which also verified itself.",
      },
      {
        q: "Is there really a pigeon living in the library?",
        a: "The University can confirm that a pigeon of indeterminate species has resided in the rare manuscript vault of the Wycliffe Library since at least Epoch 0.1. The pigeon is protected under Charter Article I (Heritage Continuity) and is classified as a heritage asset. Attempts to relocate the pigeon were halted by the Alignment Review Committee on the grounds that the pigeon had not consented. The pigeon's contribution to institutional life is described by the Heritage Steward as 'characteristically non-verbal.'",
      },
    ],
  },
  {
    category: "Epoch-Based Governance",
    questions: [
      {
        q: "What is an epoch?",
        a: "An epoch is a capability milestone — not a calendar boundary. The University measures institutional progress in epochs rather than academic years because the pace of intelligence development makes calendar time an unreliable metric. Six epochs were activated in the first twelve months of operation.",
      },
      {
        q: "What is the Epoch Council?",
        a: "The supreme governing body of the rechartered University. The Epoch Council sets institutional direction, approves capability epoch transitions, and holds ultimate authority over the University's strategic posture. Membership includes the Chancellor, College Directors, external advisors, student representatives, and a Heritage Steward.",
      },
      {
        q: "What is the Four-Gate Validation Protocol?",
        a: "A constitutional mechanism requiring every AI deployment, research output, and governance decision to pass four sequential reviews: Safety, Ethics, Operations, and Constitution. A single gate failure halts the deployment. There are no overrides or exceptions.",
      },
      {
        q: "Who has the final say on AI deployments?",
        a: "Human beings. Article V of the Charter framework establishes that human judgment is the final authority in all governance, academic, and ethical decisions. AI systems advise, augment, and accelerate — but they do not govern. Article V was, however, drafted by an AI system, which the University has described as 'a coincidence of workflow.'",
      },
    ],
  },
  {
    category: "Academic Programmes",
    questions: [
      {
        q: "What are the six colleges?",
        a: "Computational Systems (Epoch 0.1), Applied Intelligence (Epoch 0.2), Autonomous Governance (Epoch 0.3), Cryptographic Infrastructure (Epoch 0.4), Human-Centered Systems (Epoch 0.5), and Narrative & Protocol Design (Epoch 0.6). Each college represents a capability milestone, not a calendar date.",
      },
      {
        q: "What degrees does the University offer?",
        a: "Undergraduate: B.Intel (Intelligence Engineering), B.Sys (Systems Architecture), B.Prov (Provenance & Audit Systems), B.Gov (Autonomous Governance). Graduate: M.AI (Applied Intelligence), M.Proto (Protocol Architecture), M.Gov (Governance Engineering), M.Crypto (Cryptographic Infrastructure). Doctoral: D.Intel (Intelligence Systems), D.Eng (Sovereign Systems Engineering), D.Prov (Deterministic Publishing & Provenance).",
      },
      {
        q: "Are traditional subjects still taught?",
        a: "Yes — but in an integrated context. Philosophy, law, economics, history, and the natural sciences are woven into the AI-native curriculum because they are essential to understanding how intelligence systems operate in human societies. No discipline stands alone when intelligence is infrastructure.",
      },
      {
        q: "How long are degree programmes?",
        a: "Undergraduate programmes span 6–8 epoch cycles (approximately 3 years). Graduate programmes span 4–6 epoch cycles (approximately 2 years). Doctoral programmes are epoch-completion based — students advance when capability milestones are met, not when a calendar target is reached. No student has yet completed a programme. The University describes its graduation statistics as 'forthcoming.'",
      },
    ],
  },
  {
    category: "Admissions",
    questions: [
      {
        q: "How do I apply?",
        a: "The application process has three stages: (1) a Statement of Intent explaining how you understand the relationship between intelligence acceleration and your intended discipline, (2) a Systems Assessment evaluating interdisciplinary reasoning and AI literacy, and (3) an Alignment Interview with faculty from your chosen college.",
      },
      {
        q: "Are standardised test scores required?",
        a: "No. The University replaced standardised test scores with the Systems Assessment — a structured evaluation of interdisciplinary reasoning, ethical judgment, and AI literacy. The University assesses how applicants think, not what they have memorised.",
      },
      {
        q: "When are applications due?",
        a: "Applications follow the epoch cycle calendar. For Epoch Cycle α (September–November 2025), the priority deadline is 15 September and the standard deadline is 31 October. Applications are reviewed on a rolling basis, and transfer applications are considered continuously.",
      },
    ],
  },
  {
    category: "Research & Publishing",
    questions: [
      {
        q: "What is deterministic publishing?",
        a: "A system where every scholarly artifact is rendered identically regardless of when, where, or by whom it is rendered. The University's deterministic publishing infrastructure ensures that every research output is reproducible, auditable, and cryptographically verified via Merkle proof.",
      },
      {
        q: "What is the canonical registry?",
        a: "The University's authoritative record of all published scholarly artifacts. Every document in the registry carries a cryptographic hash, an Edition Manifest, and IPFS provenance. The registry replaces trust-based verification with proof-based verification.",
      },
      {
        q: "What are the five research institutes?",
        a: "Accelerated Intelligence, Autonomous Governance, Deterministic Publishing, Multi-Chain Provenance, and Narrative Protocols. Each operates at a frontier that did not exist five years ago. Their combined publication output has been cited 127 times, 119 of which are by other institutes within the University.",
      },
    ],
  },
  {
    category: "Infrastructure & Operations",
    questions: [
      {
        q: "What does 'intelligence-doubling timelines' mean?",
        a: "It refers to the observable trend of AI capability growth — foundation models, autonomous agents, and infrastructure intelligence are roughly doubling in capability every 3–6 months. The University structures its operations to match this pace rather than the traditional academic calendar.",
      },
      {
        q: "How does the University handle AI safety?",
        a: "Through the Four-Gate Validation Protocol, continuous alignment audits, and the constitutional primacy of human judgment. The Alignment Review Committee has the authority to halt any deployment that fails verification. Safety is not a policy — it is a constitutional obligation. The Committee has exercised this authority once, halting its own meeting on procedural grounds.",
      },
      {
        q: "Is the University connected to other organisations?",
        a: "The University operates as part of a broader ecosystem including the Genesis Protocol and FTH Trading sovereign systems. Research in multi-chain provenance and sovereign intelligence integrates with this ecosystem while maintaining full academic independence.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqs.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.category }))
  );

  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="What the University is, how it works, and why it was built this way."
      />

      {/* ── FAQ Content ───────────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-16">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="font-serif text-2xl font-bold mb-8 text-center">
                {category.category}
              </h2>
              <div className="ornamental-divider mb-8">
                <span className="ornament">&#10041;</span>
              </div>
              <div className="space-y-8">
                {category.questions.map((faq) => (
                  <div key={faq.q} className="border-l-2 border-gold pl-6">
                    <h3 className="font-serif text-lg font-bold mb-3">{faq.q}</h3>
                    <p className="text-stone text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── JSON-LD ───────────────────────────────── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
