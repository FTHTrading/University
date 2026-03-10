import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Institutional Architecture — Designing Organisations for the Age of Accelerated Intelligence",
  description:
    "Fitzherbert University helps institutions redesign their governance, structure, and operational architecture for AI-native operations — without discarding what makes them legitimate.",
  keywords: [
    "institutional architecture",
    "AI governance design",
    "organisational design",
    "AI-native institutions",
    "governance consulting",
    "epoch-based governance",
    "constitutional design",
    "Fitzherbert University",
    "institutional reform",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Institutional Architecture — Fitzherbert University",
  description:
    "Designing organisations for the age of accelerated intelligence. Governance architecture, constitutional design, and operational restructuring for AI-native operations.",
  isPartOf: {
    "@type": "WebSite",
    name: "Fitzherbert University",
    url: "https://university.xxxiii.io",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://university.xxxiii.io" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Institutional Architecture",
      item: "https://university.xxxiii.io/institutional-architecture",
    },
  ],
};

const designPrinciples = [
  {
    number: "01",
    title: "Legitimacy Before Efficiency",
    icon: "⬡",
    desc: "An institution that operates efficiently but has lost the confidence of its members, its regulators, or the public it serves is not an efficient institution — it is a crisis waiting to arrive. Every architectural choice we recommend must preserve or strengthen legitimacy. Efficiency comes second, always.",
  },
  {
    number: "02",
    title: "Governance Before Technology",
    icon: "◇",
    desc: "Technology is not architecture. It is a tool. Institutions that re-architect themselves by deploying AI tools have mistaken implementation for design. We start with governance: who decides, how they decide, on what basis, and with what accountability. Then we ask what technology supports that answer.",
  },
  {
    number: "03",
    title: "Epoch Alignment",
    icon: "◈",
    desc: "Traditional institutions operate on calendar cycles — annual budgets, three-year strategies, five-year plans. AI-native operations evolve faster. Institutional architecture for the acceleration age must be cycle-aligned — not to a calendar, but to the actual pace of change within the domain being governed.",
  },
  {
    number: "04",
    title: "Reversibility by Design",
    icon: "⬢",
    desc: "Every structural change we recommend must include a reversal pathway. Not every AI deployment will work. Not every governance experiment will succeed. Institutions that build architecture without exit paths become trapped in it. We build in the routes out from the beginning.",
  },
  {
    number: "05",
    title: "The Constitution Precedes the System",
    icon: "◆",
    desc: "Before deploying any AI system into an institutional operation, the institution must have answered the constitutional question: what is this system authorised to do, who authorised it, and what happens if it acts outside authorisation? If the institution cannot answer this, it is not ready for the system.",
  },
];

const services = [
  {
    title: "Governance Architecture Review",
    icon: "⬡",
    desc: "A structured diagnostic of your existing governance framework against the demands of AI-augmented operations. We map current decision authorities, identify accountability gaps, analyse the alignment between your governance cycle and your capability evolution, and deliver a clear picture of where your institutional architecture is fit for purpose and where it is not.",
    outcome: "Complete governance architecture diagnostic with prioritised reform recommendations.",
    duration: "8–12 weeks",
    priceRange: "£35,000 – £60,000",
  },
  {
    title: "Constitutional Design",
    icon: "◇",
    desc: "Designing the constitutional instruments that govern AI operations in your institution. Acceptable use frameworks. AI deployment authorisation protocols. Alignment review processes. Board accountability structures. Veto authorities and override mechanisms. The skeleton of institutional control over accelerating capability.",
    outcome: "Full constitutional framework including operating principles, authority structures, and review protocols.",
    duration: "12–18 weeks",
    priceRange: "£65,000 – £120,000",
  },
  {
    title: "Epoch Transition Design",
    icon: "◈",
    desc: "Helping institutions design how they transition from one operational epoch to the next — how they manage the governance handover, the institutional knowledge transfer, the capability reassessment, and the public communication of change. Epoch transitions done poorly destroy institutional legitimacy. Done well, they build it.",
    outcome: "Epoch Transition Protocol — a complete procedural and governance handbook for institutional change cycles.",
    duration: "10–14 weeks",
    priceRange: "£40,000 – £80,000",
  },
  {
    title: "Role Architecture for AI-Augmented Teams",
    icon: "⬢",
    desc: "Redesigning the human role landscape in institutions where AI does more and more of what humans used to do. Who owns a decision when AI generates seventy per cent of the analysis that informs it? What does accountability look like in an AI-augmented function? We design the role structures, accountability chains, and competency frameworks that make human-AI teaming legible and governable.",
    outcome: "Role architecture specification, accountability framework, and competency model for AI-augmented operations.",
    duration: "8–14 weeks",
    priceRange: "£30,000 – £65,000",
  },
  {
    title: "Alignment Infrastructure Design",
    icon: "◆",
    desc: "Building the organisational infrastructure for ongoing AI alignment: the committees, the protocols, the review cycles, the audit trails, and the public reporting that together constitute a credible alignment posture. Not a one-time certification exercise — a living institutional capability.",
    outcome: "Alignment Infrastructure Framework — design for committees, protocols, reporting, and audit systems.",
    duration: "12–16 weeks",
    priceRange: "£55,000 – £100,000",
  },
  {
    title: "Legitimacy Audit",
    icon: "⬣",
    desc: "An independent assessment of whether your institution's governance of AI systems is credible to its primary audiences — regulators, staff, members, the public. Not a compliance check. A legitimacy diagnostic. We examine what you claim about how you govern AI, what you actually do, and the gap between them. Delivered with full transparency. Recommended at two-year intervals.",
    outcome: "Legitimacy Gap Report with independent assessment and recommendations.",
    duration: "6–8 weeks",
    priceRange: "£20,000 – £40,000",
  },
];

const caseStudies = [
  {
    sector: "Professional Services Firm",
    icon: "◇",
    challenge:
      "A 400-person professional services firm had deployed twelve separate AI tools across operations, HR, and client delivery with no common governance framework. Different departments had made different authorisation decisions. Nobody was certain what data the tools had access to or what decisions they were influencing.",
    intervention:
      "Governance Architecture Review + Constitutional Design. 14 weeks. Produced a unified AI governance charter, an AI Deployment Register, an Authority Matrix for all existing tools, and a fast-track authorisation protocol for future deployments.",
    outcome:
      "Governance charter adopted. All twelve tools re-authorised under unified framework. AI Deployment Register operational. Regulatory audit six weeks later — passed without qualification.",
  },
  {
    sector: "National Membership Body",
    icon: "⬢",
    challenge:
      "A national membership body representing 80,000 professionals was under pressure from its membership to adopt AI for information services, regulatory guidance, and professional development. Its governance structures — inherited from 1961 — were not designed for decisions that needed to happen faster than its committee cycle could manage.",
    intervention:
      "Epoch Transition Design + Role Architecture. Designed a new governance cycle (six-month capability review intervals replacing annual committee cycles), a restructured decision authority model, and a Professional AI Council with rotating member representation.",
    outcome:
      "New governance structure ratified by General Assembly. First AI services launched under the new framework within eight months. Member satisfaction with AI governance communications: 73% positive, up from 31%.",
  },
  {
    sector: "Academic Institution",
    icon: "⬡",
    challenge:
      "A research-intensive university was struggling with an existential question its Senate was not equipped to answer: what is the institutional position on AI-generated research outputs? Journals were pulling back. Funders were adding conditions. Students wanted clarity. The Senate's last substantive debate on AI had concluded with the formation of a working group that had not yet reported.",
    intervention:
      "Constitutional Design + Legitimacy Audit. Designed the institution's AI Academic Integrity Constitution — a framework governing AI use in research, teaching, publication, and assessment, with role-specific guidance and a faculty-led review process.",
    outcome:
      "Constitution adopted within one academic year. Cited by two UK research funders as a model for institutional AI governance. Working group dissolved — its mandate superseded by the constitutional framework.",
  },
];

export default function InstitutionalArchitecturePage() {
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
        title="Institutional Architecture"
        subtitle="Designing Organisations for the Age of Accelerated Intelligence — From the Institution That Had to Design Itself"
      />

      {/* ── I. The Argument ──────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Practice"
            title="We Know This Because We Had to Build It"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              When Fitzherbert University rechartered in 2025, it faced a design problem that no
              consultancy had a model for: how do you govern an institution whose capabilities are
              doubling faster than its governance cycle can track? How do you preserve two hundred
              and forty years of institutional legitimacy while rebuilding everything below it for
              an AI-native era?
            </p>
            <p>
              We designed our way through it. The Epoch Council architecture, the Four-Gate
              Validation Protocol, the Human Continuity mandate, the Sovereign Systems stack —
              these are not inherited frameworks. They are original designs, tested in operation,
              refined through constitutional crisis, and now demonstrably functional under the
              conditions they were designed for.
            </p>
            <p>
              The Institutional Architecture practice exists because other institutions face the
              same problem and most of the consultancies advising them have never governed anything
              more complex than a project management office. We have governed an AI-native
              university through four epoch transitions. We know what breaks. We know what holds.
              We know the difference between governance that looks like governance and governance
              that actually works.
            </p>
          </div>
        </div>
      </Section>

      {/* ── II. Principles ───────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Design Principles"
          title="What We Will Not Compromise On"
          description="Five principles that govern every engagement. If the brief requires compromising any of these, we decline the brief."
        />
        <div className="space-y-6 max-w-4xl mx-auto">
          {designPrinciples.map((p) => (
            <div
              key={p.number}
              className="flex gap-6 items-start border border-gold/20 bg-parchment p-6"
            >
              <div className="flex flex-col items-center gap-2 min-w-[3rem]">
                <span className="font-mono text-xs font-bold text-gold/60">{p.number}</span>
                <span className="text-2xl text-gold">{p.icon}</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── III. Services ────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Services"
          title="Six Institutional Architecture Engagements"
          description="Fixed-scope, fixed-price engagements. Every outcome is specified before the work begins."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((svc) => (
            <div key={svc.title} className="border border-gold/20 bg-ivory p-6 flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl text-gold">{svc.icon}</span>
                <h3 className="font-serif text-lg font-bold">{svc.title}</h3>
              </div>
              <p className="text-stone text-sm leading-relaxed mb-5 flex-1">{svc.desc}</p>
              <div className="border-t border-gold/20 pt-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-stone/80 uppercase tracking-widest font-semibold">
                    Outcome
                  </span>
                </div>
                <p className="text-stone text-xs leading-relaxed italic mb-3">{svc.outcome}</p>
                <div className="flex justify-between text-xs">
                  <span className="text-stone/80">{svc.duration}</span>
                  <span className="font-semibold text-navy">{svc.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── IV. Case Studies ─────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Track Record"
          title="Three Institutional Architecture Engagements"
          description="Selected case studies from completed engagements. All published with client consent and detail review."
        />
        <div className="space-y-10 max-w-5xl mx-auto">
          {caseStudies.map((cs) => (
            <div key={cs.sector} className="border border-gold/20 bg-parchment p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl text-gold">{cs.icon}</span>
                <h3 className="font-serif text-xl font-bold">{cs.sector}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-serif text-xs uppercase tracking-widest text-gold mb-2">
                    Challenge
                  </h4>
                  <p className="text-stone text-sm leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="font-serif text-xs uppercase tracking-widest text-gold mb-2">
                    Intervention
                  </h4>
                  <p className="text-stone text-sm leading-relaxed">{cs.intervention}</p>
                </div>
                <div>
                  <h4 className="font-serif text-xs uppercase tracking-widest text-gold mb-2">
                    Outcome
                  </h4>
                  <p className="text-stone text-sm leading-relaxed">{cs.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── V. CTA ───────────────────────────────── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            eyebrow="Start Here"
            title="The Institutions That Survive Acceleration Are the Ones That Designed for It"
          />
          <p className="text-stone leading-relaxed mb-10">
            The organisations that will govern AI well in 2030 are the ones that designed their
            governance architecture in 2025 and 2026. Not the ones who deployed tools. Not the ones
            who wrote policies. The ones who restructured how decisions get made, who is accountable
            for them, and what constitutional constraints govern the machines operating within their
            walls. The window for intentional design is now. We can help you use it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:institutional-architecture@fitzherbert.edu"
              className="px-8 py-3 bg-navy text-parchment font-semibold text-sm tracking-widest uppercase hover:bg-navy/80 transition-colors"
            >
              Start the Conversation
            </a>
            <a
              href="/governance"
              className="px-8 py-3 border border-navy text-navy font-semibold text-sm tracking-widest uppercase hover:bg-navy/5 transition-colors"
            >
              See Our Own Architecture
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
