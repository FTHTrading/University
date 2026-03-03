import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Legal Intelligence — Centre for AI-Augmented Legal Reasoning",
  description:
    "The Legal Intelligence Division delivers AI-augmented contract analysis, regulatory compliance mapping, and institutional legal infrastructure to organisations navigating the age of accelerated intelligence.",
  keywords: [
    "legal intelligence",
    "AI legal analysis",
    "contract analysis",
    "regulatory compliance",
    "AI governance law",
    "legal AI",
    "institutional legal infrastructure",
    "Fitzherbert University",
    "CALR",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Legal Intelligence — Fitzherbert University",
  description:
    "The Centre for AI-Augmented Legal Reasoning provides AI-native legal analysis, compliance mapping, and legal infrastructure design to organisations and institutions.",
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
      name: "Legal Intelligence",
      item: "https://fitzherbert.university/legal-intelligence",
    },
  ],
};

const capabilities = [
  {
    title: "Contract Intelligence",
    icon: "◇",
    desc: "AI-augmented analysis of commercial contracts, IP agreements, governance charters, and regulatory filings. Our student analysts — supervised by qualified legal faculty — produce structured clause decomposition, risk maps, and obligation schedules that would take a traditional law firm six weeks to generate.",
    deliverables: [
      "Clause-level risk classification across all contract types",
      "Obligation and deadline Schedule (machine-generated, human-verified)",
      "Counterparty concentration analysis",
      "Redline recommendations with legal reasoning chains",
    ],
  },
  {
    title: "Regulatory Mapping",
    icon: "⬢",
    desc: "Comprehensive mapping of your organisation's operations against the current regulatory landscape across the jurisdictions you operate in. With LEXIS-3 as our resident Visiting Intelligence, we maintain real-time tracking of the EU AI Act, UK AIA, US EO 14110, and forty-four other regulatory instruments.",
    deliverables: [
      "Cross-jurisdictional compliance matrix",
      "Gap analysis with prioritised remediation roadmap",
      "Regulatory timeline — upcoming obligations with 90, 180, and 360-day horizons",
      "Plain-language compliance briefing for non-legal stakeholders",
    ],
  },
  {
    title: "AI Governance Frameworks",
    icon: "⬡",
    desc: "Designing the legal and constitutional infrastructure for organisations deploying AI. From acceptable use policies and AI ethics charters to board-level accountability frameworks and audit structures — we build the governance architecture that turns AI deployment from a liability question into an institutional capability.",
    deliverables: [
      "Acceptable Use Policy (AI-specific, jurisdiction-matched)",
      "Board-Level AI Accountability Framework",
      "Internal ethics review process design",
      "Audit and accountability trail infrastructure",
    ],
  },
  {
    title: "Intellectual Property Architecture",
    icon: "◈",
    desc: "AI generates outputs. Who owns them? Who is liable for them? The intellectual property landscape for AI-generated work is the most rapidly evolving area of law alive today. We map your exposure, structure your IP policies, and ensure that what your AI systems produce is protected — or at minimum, not a legal landmine.",
    deliverables: [
      "AI Output Ownership Policy",
      "Copyright and IP exposure assessment",
      "Training data provenance and licensing audit",
      "Jurisdiction-specific AI IP strategy brief",
    ],
  },
  {
    title: "Data Sovereignty & Privacy",
    icon: "◆",
    desc: "Your data is your infrastructure. The Legal Intelligence Division helps organisations design data governance architectures that satisfy GDPR, CCPA, and sector-specific compliance obligations, while preserving the utility of their data for AI operations. Compliance without operational paralysis.",
    deliverables: [
      "Data sovereignty architecture review",
      "GDPR / CCPA compliance gap analysis",
      "Data Processing Agreement templates",
      "Cross-border data transfer risk map",
    ],
  },
  {
    title: "Dispute Readiness",
    icon: "⬣",
    desc: "AI-related disputes are arriving. Contract disputes over AI deliverables, regulatory enforcement actions, IP infringement claims from AI-generated outputs, and liability cases from autonomous system failures. We help organisations build the documentation, audit trails, and institutional records that make dispute resolution survivable.",
    deliverables: [
      "Dispute readiness audit",
      "Documentation and audit trail infrastructure assessment",
      "Evidence preservation policy design",
      "Incident response and disclosure protocol",
    ],
  },
];

const subscriptionTiers = [
  {
    name: "Advisory",
    price: "£18,000",
    period: "per quarter",
    subtitle: "Regulatory & Compliance Advisory",
    features: [
      "Monthly regulatory landscape briefing (2 jurisdictions)",
      "Quarterly compliance check against 3 key instruments",
      "Access to CALR document library",
      "Email advisory response (48-hour SLA)",
      "One student analyst team (2 analysts) for ad-hoc analysis",
    ],
    highlight: false,
  },
  {
    name: "Operational",
    price: "£55,000",
    period: "per quarter",
    subtitle: "Full Legal Intelligence Operations",
    features: [
      "Continuous regulatory tracking (all active jurisdictions)",
      "Monthly contract intelligence reviews (up to 20 documents)",
      "AI governance framework design and maintenance",
      "Dedicated student analyst team (5 analysts)",
      "Weekly briefings with CALR faculty",
      "Access to LEXIS-3 regulatory mapping outputs",
      "IP architecture review and policy maintenance",
    ],
    highlight: true,
  },
  {
    name: "Institutional",
    price: "£200,000",
    period: "per year",
    subtitle: "Full Legal Infrastructure Partnership",
    features: [
      "Embedded analyst team (10+ student analysts)",
      "Full-spectrum legal intelligence across all capability areas",
      "Custom AI governance framework design + board-level briefings",
      "Real-time regulatory monitoring dashboard (47 jurisdictions)",
      "Dispute readiness programme and documentation infrastructure",
      "Joint protocol development and co-publication rights",
      "Seat on Legal Intelligence Advisory Board",
    ],
    highlight: false,
  },
];

const faculty = [
  {
    name: "Professor Helena Vickers",
    role: "Director, Centre for AI-Augmented Legal Reasoning",
    background:
      "Former Senior Counsel at three national regulatory bodies. Specialises in the intersection of constitutional law, AI liability, and institutional governance. Author of The Liability Horizon: AI Accountability Frameworks for the Acceleration Age.",
    icon: "◇",
  },
  {
    name: "Dr. Alistair Pemberton",
    role: "Head of Regulatory Intelligence",
    background:
      "Former European regulatory policy architect. Nineteen years designing compliance frameworks across financial services, telecommunications, and emerging technology. Leads the University's LEXIS-3 supervised fellowship programme.",
    icon: "⬢",
  },
  {
    name: "Professor Nadia Kowalczyk",
    role: "Chair of AI Intellectual Property",
    background:
      "One of the foremost authorities on AI-generated work and copyright liability. Her framework for AI Output Attribution has been cited in parliamentary committee submissions in three jurisdictions. Leads the University's IP Architecture programme.",
    icon: "◈",
  },
];

export default function LegalIntelligencePage() {
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
        title="Legal Intelligence"
        subtitle="Centre for AI-Augmented Legal Reasoning — CALR"
      />

      {/* ── I. Introduction ──────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Division"
            title="Law Was Always Information Processing"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Lawyers have always done what AI does — ingested vast bodies of text, identified
              relevant precedents, extracted clause-level obligations, and mapped risk across
              complex document sets. The difference is speed, cost, and cognitive overhead. A
              senior associate at a major firm can process perhaps forty pages of contract text
              per day with full analytical attention. Our CALR infrastructure processes forty
              thousand with higher recall and full audit trails.
            </p>
            <p>
              This is not a replacement for legal judgment. It is an amplification of it. The
              Centre for AI-Augmented Legal Reasoning combines AI-native analysis infrastructure
              with faculty-supervised student analysts to deliver legal intelligence that no
              traditional law firm has the architecture to match — and at a fraction of the cost.
            </p>
            <p>
              The legal profession is in the same position the financial services industry was in
              before algorithmic trading: about to discover that information processing at scale
              changes everything about who wins and who loses. CALR exists to ensure our partners
              are on the right side of that transition.
            </p>
          </div>
        </div>
      </Section>

      {/* ── II. Capabilities ─────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Capabilities"
          title="What Legal Intelligence Delivers"
          description="Six capability areas spanning the full lifecycle of legal risk — from contract origination through regulatory compliance to dispute readiness."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {capabilities.map((cap) => (
            <div key={cap.title} className="border border-gold/20 bg-parchment p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl text-gold">{cap.icon}</span>
                <h3 className="font-serif text-lg font-bold">{cap.title}</h3>
              </div>
              <p className="text-stone text-sm leading-relaxed mb-4">{cap.desc}</p>
              <h4 className="font-serif text-xs uppercase tracking-widest text-gold mb-2">
                Key Deliverables
              </h4>
              <ul className="space-y-1.5">
                {cap.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-stone">
                    <span className="text-gold mt-0.5">◆</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── III. Subscription Tiers ───────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Subscription Tiers"
          title="Legal Intelligence as a Managed Service"
          description="Fixed-price quarterly subscriptions — no hourly billing, no scope creep surprises, no law-firm economics."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {subscriptionTiers.map((tier) => (
            <div
              key={tier.name}
              className={`border p-8 flex flex-col ${
                tier.highlight
                  ? "border-gold bg-navy text-parchment"
                  : "border-gold/20 bg-ivory"
              }`}
            >
              {tier.highlight && (
                <p className="engraved text-gold text-xs mb-3 tracking-widest">Most Selected</p>
              )}
              <h3 className="font-serif text-2xl font-bold mb-1">
                {tier.name}
              </h3>
              <p className={`text-sm mb-4 ${tier.highlight ? "text-parchment/70" : "text-stone/60"}`}>
                {tier.subtitle}
              </p>
              <div className="mb-6">
                <span className="font-serif text-3xl font-bold">{tier.price}</span>
                <span className={`text-sm ml-1 ${tier.highlight ? "text-parchment/60" : "text-stone/60"}`}>
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-2 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-0.5 text-xs">◆</span>
                    <span className={tier.highlight ? "text-parchment/80" : "text-stone"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gold/20">
                <a
                  href="mailto:legal-intelligence@fitzherbert.edu"
                  className={`block text-center py-2 text-sm font-semibold tracking-widest uppercase transition-colors ${
                    tier.highlight
                      ? "bg-gold text-navy hover:bg-gold/80"
                      : "bg-navy text-parchment hover:bg-navy/80"
                  }`}
                >
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── IV. Faculty ──────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Faculty"
          title="The Minds Behind the Analysis"
          description="CALR is supervised by faculty with careers that span regulatory bodies, law firms, and international governance institutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {faculty.map((person) => (
            <div key={person.name} className="border border-gold/20 bg-parchment p-6">
              <span className="text-2xl text-gold block mb-4">{person.icon}</span>
              <h3 className="font-serif text-lg font-bold mb-1">{person.name}</h3>
              <p className="text-maroon text-sm font-semibold mb-4">{person.role}</p>
              <p className="text-stone text-sm leading-relaxed">{person.background}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── V. CTA ───────────────────────────────── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            eyebrow="Get Started"
            title="Your Legal Risk Is Already Here"
          />
          <p className="text-stone leading-relaxed mb-10">
            The regulatory instruments are live. The AI liability questions are live. The IP
            exposure from your own AI tools is live. The organisations that will survive this
            legal landscape are the ones that mapped it before the enforcement did. We help
            you do that — systematically, affordably, and with a transparency that no law firm
            can match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal-intelligence@fitzherbert.edu"
              className="px-8 py-3 bg-navy text-parchment font-semibold text-sm tracking-widest uppercase hover:bg-navy/80 transition-colors"
            >
              Book a Discovery Call
            </a>
            <a
              href="/partnerships"
              className="px-8 py-3 border border-navy text-navy font-semibold text-sm tracking-widest uppercase hover:bg-navy/5 transition-colors"
            >
              View All Partnerships
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
