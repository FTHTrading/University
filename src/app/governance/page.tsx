import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Epoch Council, Stability Board, Alignment Review Committee — the governance architecture of Fitzherbert University, designed for intelligence-doubling timelines.",
};

const governanceBodies = [
  {
    name: "The Epoch Council",
    role: "Strategic Direction & Institutional Authority",
    icon: "⬡",
    description:
      "The supreme governing body of the rechartered University. The Epoch Council sets institutional direction, approves capability epoch transitions, and holds ultimate authority over the University's strategic posture. Council membership rotates on an epoch-aligned cycle — not a calendar year — ensuring governance evolves at the speed of the institution it governs. The Council has met four times. Minutes from the first three meetings have been classified under the Heritage Confidentiality Protocol, which was ratified at the fourth.",
    members: [
      "Chancellor (Chair)",
      "Six College Directors (rotating annually)",
      "Three External Advisors (AI safety, governance, infrastructure)",
      "Two Student Representatives (elected per epoch cycle)",
      "One Heritage Steward (charter continuity)",
    ],
    responsibilities: [
      "Approve epoch transitions and capability assessments",
      "Set institutional risk tolerance for AI deployments",
      "Ratify governance amendments and protocol changes",
      "Oversee alignment between heritage charter and operational mandate",
    ],
  },
  {
    name: "The Stability Board",
    role: "Reproducibility, Verification & Institutional Integrity",
    icon: "◈",
    description:
      "The Stability Board ensures that every output of the University — scholarly, operational, and governance-level — is reproducible, auditable, and cryptographically verified. The Board operates the Merkle verification infrastructure, maintains the canonical registry, and certifies the Edition Manifest for all published artifacts. The Board has yet to identify an output that failed verification, which it attributes to rigorous standards rather than the absence of outputs.",
    members: [
      "Director of Deterministic Publishing (Chair)",
      "Chief Verification Officer",
      "Two College Directors (rotating)",
      "Head of Cryptographic Infrastructure",
      "External Auditor (independent appointment)",
    ],
    responsibilities: [
      "Maintain Merkle verification infrastructure for all University outputs",
      "Certify Edition Manifests and canonical registries",
      "Conduct reproducibility audits across all colleges",
      "Publish the Stability Report at each epoch boundary",
    ],
  },
  {
    name: "The Alignment Review Committee",
    role: "Safety, Ethics & Four-Gate Validation",
    icon: "◇",
    description:
      "The Alignment Review Committee operates the University's four-gate validation protocol — ensuring that every AI deployment, research output, and governance decision passes through safety, ethical, operational, and constitutional review before activation. The Committee has the authority to halt any deployment that fails alignment verification. To date, it has halted everything, including itself.",
    members: [
      "Professor of AI Safety & Alignment (Chair)",
      "Dean of Autonomous Governance",
      "Dean of Human-Centered Systems",
      "Two External Ethics Advisors",
      "Student Ethics Representative",
    ],
    responsibilities: [
      "Operate the four-gate validation protocol (Safety → Ethics → Operations → Constitution)",
      "Review all AI deployments before institutional activation",
      "Conduct alignment audits of research outputs",
      "Publish quarterly alignment reports",
      "Authority to halt deployments that fail verification",
    ],
  },
];

const charterArticles = [
  {
    number: "I",
    title: "Heritage Continuity",
    text: "The Charter of 1783 remains the foundational document of the University. The Rechartering Protocol of 2025 extends — but does not replace — the original charter. All governance bodies derive their authority from both instruments.",
  },
  {
    number: "II",
    title: "Epoch-Based Governance",
    text: "The University's governance cycle is aligned to capability epochs, not calendar years. Governance bodies rotate, review, and renew on epoch boundaries as determined by the Epoch Council.",
  },
  {
    number: "III",
    title: "Alignment Supremacy",
    text: "No AI deployment, research output, or governance decision shall proceed without passing the four-gate validation protocol. The Alignment Review Committee holds veto authority over all institutional AI activity. The Committee exercises this authority with enthusiasm.",
  },
  {
    number: "IV",
    title: "Transparency & Verification",
    text: "All governance decisions, financial allocations, and scholarly outputs are published to the University's canonical registry and verified via Merkle proof. Institutional transparency is a constitutional obligation, not a policy preference.",
  },
  {
    number: "V",
    title: "Human Judgment Primacy",
    text: "AI systems advise, augment, and accelerate — but human judgment remains the final authority in all governance, academic, and ethical decisions. This principle is non-negotiable and cannot be amended by any governance body. It was, however, drafted by an AI system, which the University has described as 'a coincidence of workflow.'",
  },
];

export default function GovernancePage() {
  return (
    <>
      <Hero
        title="Governance"
        subtitle="Three bodies. Four gates. One constitutional principle: human judgment remains the final authority."
      />

      {/* ── Governance Architecture ───────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Governance Architecture"
          title="Designed for Acceleration"
          description="Traditional university governance was built for stability. Fitzherbert's governance is built for controlled acceleration — fast enough to match intelligent systems, constrained enough to remain accountable, and sufficiently complex that no single person fully understands it."
        />

        <div className="max-w-5xl mx-auto space-y-12">
          {governanceBodies.map((body) => (
            <div key={body.name} className="border border-gold/20 bg-ivory p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl text-gold">{body.icon}</span>
                <div>
                  <h3 className="font-serif text-2xl font-bold">{body.name}</h3>
                  <p className="text-maroon text-sm tracking-wide uppercase">{body.role}</p>
                </div>
              </div>
              <p className="text-stone leading-relaxed mb-8">{body.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wide text-maroon mb-3">
                    Composition
                  </h4>
                  <ul className="space-y-2">
                    {body.members.map((m) => (
                      <li key={m} className="text-stone text-sm flex items-start gap-2">
                        <span className="text-gold mt-1">&#9670;</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wide text-maroon mb-3">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {body.responsibilities.map((r) => (
                      <li key={r} className="text-stone text-sm flex items-start gap-2">
                        <span className="text-gold mt-1">&#9670;</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Four-Gate Validation ──────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Validation Protocol"
          title="The Four-Gate Framework"
          description="Every AI deployment, research output, and governance decision passes through four sequential gates before activation."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              gate: "Gate 1",
              title: "Safety",
              desc: "Technical safety review. Does the system operate within defined risk parameters? Can it be halted, reverted, or contained?",
              color: "border-green-600",
            },
            {
              gate: "Gate 2",
              title: "Ethics",
              desc: "Ethical review. Does the system uphold the University's values? Does it preserve human judgment and institutional accountability?",
              color: "border-blue-600",
            },
            {
              gate: "Gate 3",
              title: "Operations",
              desc: "Operational review. Is the system reproducible, auditable, and verifiable? Does it integrate with existing infrastructure?",
              color: "border-amber-600",
            },
            {
              gate: "Gate 4",
              title: "Constitution",
              desc: "Constitutional review. Is the system consistent with the Heritage Charter (1783) and the Rechartering Protocol (2025)?",
              color: "border-maroon",
            },
          ].map((g) => (
            <div key={g.gate} className={`border-t-4 ${g.color} bg-ivory p-6`}>
              <span className="text-xs tracking-widest uppercase text-stone-light">{g.gate}</span>
              <h3 className="font-serif text-lg font-bold mt-2 mb-3">{g.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-stone-light text-sm italic">
            A single gate failure halts the deployment. There are no overrides. There are no
            exceptions. The four-gate framework is the constitutional mechanism by which the
            University maintains alignment between capability and accountability.
          </p>
        </div>
      </Section>

      {/* ── Proof Chain & Verification ────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Verification Infrastructure"
          title="The Proof Chain"
          description="Every governance decision, research output, and financial flow is recorded in a cryptographically verified audit chain. This is not aspirational — it is operational."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Canonical Registry",
                desc: "A Merkle-verified ledger of all institutional outputs — research publications, governance decisions, credential issuances, and financial distributions. Every entry is timestamped, hashed, and independently verifiable.",
              },
              {
                title: "Epoch Verification",
                desc: "At the close of each capability epoch, the Stability Board conducts a full verification audit. All claims made during the epoch are tested against recorded evidence. Discrepancies are published — not hidden.",
              },
              {
                title: "Peer Review Pipeline",
                desc: "Research outputs pass through a three-stage peer review process: automated reproducibility check, faculty review, and external validation. Every stage is recorded in the canonical registry with reviewer attestations.",
              },
              {
                title: "Model Governance",
                desc: "Every AI model deployed within the University's infrastructure is registered with its training data provenance, capability boundaries, and alignment constraints. No model operates without constitutional authorisation.",
              },
              {
                title: "Financial Transparency",
                desc: "Revenue flows — from sponsorships, subscriptions, licensing, and bonds — are distributed according to the constitutional rule (50/20/20/10) and published quarterly with Merkle verification. Public audit at any time.",
              },
              {
                title: "Credential Chain",
                desc: "Every student credential is issued as a W3C Verifiable Credential — cryptographically signed by the University, anchored in the canonical registry, and portable for life. No credential can be fabricated or revoked without audit trail.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 bg-ivory p-8">
                <h4 className="font-serif text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-2 border-gold bg-ivory p-8">
            <h4 className="font-serif text-lg font-bold mb-4 text-center">The Audit Chain Principle</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center text-sm text-stone">
              <span className="border border-gold/40 px-4 py-2 bg-white">Action Occurs</span>
              <span className="text-gold font-bold">→</span>
              <span className="border border-gold/40 px-4 py-2 bg-white">Hash Recorded</span>
              <span className="text-gold font-bold">→</span>
              <span className="border border-gold/40 px-4 py-2 bg-white">Merkle Tree Updated</span>
              <span className="text-gold font-bold">→</span>
              <span className="border border-gold/40 px-4 py-2 bg-white">Public Verification</span>
            </div>
            <p className="text-stone text-xs text-center mt-4 italic">
              Every institutional action — governance decision, financial distribution, credential
              issuance, research publication — follows this chain. Immutable. Auditable. Public.
            </p>
          </div>
        </div>
      </Section>

      {/* ── AI Autonomy Limitations ───────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="AI Governance"
          title="What AI Runs — and What It Cannot"
          description="AI is the operating system. It is not the authority. The University maintains strict constitutional boundaries on AI autonomy."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-lg font-bold mb-4 text-maroon">AI Operates</h4>
              <ul className="space-y-3">
                {[
                  "Curriculum delivery and adaptive learning",
                  "Performance analytics and learning profiles",
                  "Administrative scheduling and logistics",
                  "Research data processing and analysis",
                  "Canonical registry and verification systems",
                  "Financial reporting and distribution tracking",
                ].map((item) => (
                  <li key={item} className="text-stone text-sm flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#9670;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold mb-4 text-maroon">Humans Decide</h4>
              <ul className="space-y-3">
                {[
                  "Student admissions and programme placement",
                  "Faculty appointments and governance roles",
                  "Charter amendments and constitutional changes",
                  "Disciplinary actions and student welfare",
                  "External partnerships and alignment screening",
                  "Halt authority — stopping any AI deployment",
                ].map((item) => (
                  <li key={item} className="text-stone text-sm flex items-start gap-2">
                    <span className="text-maroon mt-0.5">&#9670;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold bg-ivory/50 p-8 mt-10 italic">
            <p className="text-base text-maroon font-serif leading-relaxed">
              &ldquo;AI operates under constitutional governance with human sovereignty.
              It is not the university. It is the operating system. Students are the product.
              Human development is the mission. Verified capability is the output.&rdquo;
            </p>
            <cite className="block mt-4 text-stone text-sm not-italic tracking-wide uppercase">
              — Rechartering Protocol, Article V
            </cite>
          </blockquote>
        </div>
      </Section>

      {/* ── Charter Articles ─────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Constitutional Framework"
          title="Charter Articles"
          description="The governance principles that bind the Heritage Charter (1783) and the Rechartering Protocol (2025) into a single constitutional framework."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {charterArticles.map((a) => (
            <div key={a.number} className="flex gap-6 items-start border-l-2 border-gold pl-6">
              <span className="font-serif text-3xl font-bold text-gold/40 flex-shrink-0">
                {a.number}
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Governance Documents ──────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Documents"
          title="Governance Publications"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              title: "Heritage Charter (1783)",
              desc: "The original founding document of Fitzherbert University. Establishes the institutional mandate, academic freedom protections, and the principle of Veritas per Disciplina.",
              href: "/University/documents/fitzherbert-university-charter.pdf",
            },
            {
              title: "Rechartering Protocol (2025)",
              desc: "The instrument by which the University was rechartered as an AI-native institution. Establishes epoch-based governance, the four-gate framework, and the alignment supremacy principle.",
              href: "/University/documents/fitzherbert-university-constitution.pdf",
            },
            {
              title: "Strategic Plan 2025–2030",
              desc: "The institutional roadmap across twelve capability epochs. Covers academic expansion, infrastructure development, governance evolution, and alignment infrastructure.",
              href: "/University/documents/fitzherbert-university-strategic-plan.pdf",
            },
            {
              title: "Annual Report 2024–2025",
              desc: "The first annual report of the rechartered University. Documents Year One output, governance decisions, and capability assessments.",
              href: "/University/documents/fitzherbert-university-annual-report.pdf",
            },
          ].map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              className="flex items-start gap-4 border border-gold/20 bg-ivory p-6 hover:border-gold/40 transition-colors group"
            >
              <span className="text-2xl text-gold group-hover:text-maroon transition-colors">
                &#128196;
              </span>
              <div>
                <h4 className="font-serif text-base font-bold group-hover:text-maroon transition-colors">
                  {doc.title}
                </h4>
                <p className="text-stone text-sm leading-relaxed mt-1">{doc.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* ── Leadership ────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Leadership"
          title="Office of the Chancellor"
        />
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-gold bg-ivory/50 p-8 italic">
            <p className="text-lg text-maroon font-serif leading-relaxed">
              &ldquo;The question is not whether to accelerate — it is whether our institutions
              can govern the acceleration. Fitzherbert University exists to prove that they can.
              Not by slowing down, but by building governance that is worthy of the speed.&rdquo;
            </p>
            <cite className="block mt-4 text-stone text-sm not-italic tracking-wide uppercase">
              — The Chancellor, Fitzherbert University
            </cite>
          </blockquote>
        </div>
      </Section>
    </>
  );
}
