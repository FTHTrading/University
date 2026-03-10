import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Sponsor a Cohort — Fitzherbert University",
  description:
    "Fund the next generation of builders. Sponsor a student cohort at Fitzherbert University and receive verified outcomes, hiring priority, and embedded dashboards — not charity receipts.",
  keywords: [
    "sponsor education",
    "cohort sponsorship",
    "corporate education partnership",
    "AI-native university sponsorship",
    "student builders",
    "workforce pipeline",
    "Fitzherbert University",
  ],
};

/* ── Pricing Tiers ──────────────────────────────────── */
const tiers = [
  {
    name: "Bronze",
    price: "£50,000",
    period: "per cohort cycle",
    subtitle: "Skills Track Sponsorship",
    features: [
      "Fund 5 students through a single skills track",
      "Quarterly progress reports with verified competency data",
      "Logo placement on cohort materials and University site",
      "Invitation to cohort presentations and demo days",
      "Post-cohort hiring introductions",
    ],
    highlight: false,
  },
  {
    name: "Silver",
    price: "£150,000",
    period: "per cohort cycle",
    subtitle: "Skills + Projects + Hiring Priority",
    features: [
      "Fund 15 students across multiple tracks",
      "Students work on sponsor-defined project briefs",
      "Monthly verified progress dashboards",
      "Priority hiring access to all sponsored students",
      "Co-branded research output and case studies",
      "Seat on Sponsor Advisory Council",
    ],
    highlight: true,
  },
  {
    name: "Gold",
    price: "£500,000",
    period: "per cohort cycle",
    subtitle: "Dedicated Cohort + Custom Curriculum",
    features: [
      "Dedicated cohort of 25+ students with custom curriculum",
      "Embedded real-time dashboards for all student progress",
      "Custom project pipeline aligned to sponsor R&D goals",
      "Exclusive hiring rights for cohort duration",
      "Joint IP participation on student-built protocols",
      "Quarterly executive briefings with University leadership",
      "Named cohort recognition across all University channels",
    ],
    highlight: false,
  },
];

/* ── Distribution Rule ──────────────────────────────── */
const distributionRule = [
  { label: "Student Pool", pct: 50, color: "bg-maroon", desc: "Direct stipends and student project funding" },
  { label: "Reserve", pct: 20, color: "bg-navy", desc: "Institutional reserve for sustainability" },
  { label: "Operations", pct: 20, color: "bg-gold", desc: "Infrastructure, mentorship, and programme delivery" },
  { label: "R&D / Tools", pct: 10, color: "bg-stone", desc: "AI systems, compute, and research tooling" },
];

/* ── How It Works Steps ─────────────────────────────── */
const processSteps = [
  {
    num: "01",
    title: "Intake Conversation",
    desc: "A structured conversation with the Partnership Office to understand your goals, workforce needs, and alignment with the University's mission. No pitch decks — just honest conversation about what you need and what we can build together.",
  },
  {
    num: "02",
    title: "Cohort Design",
    desc: "We design the cohort structure: number of students, skills tracks, project briefs, timeline, and deliverables. Silver and Gold sponsors co-design curriculum elements with faculty oversight.",
  },
  {
    num: "03",
    title: "Activation & Matching",
    desc: "Students are matched to the cohort based on capability profile, interest, and learning trajectory. Every match is transparent — you see the reasoning, the student sees the opportunity.",
  },
  {
    num: "04",
    title: "Build Cycle",
    desc: "Students build. You watch — through verified dashboards, not vague progress reports. Every competency demonstrated, every milestone achieved, every deliverable produced is cryptographically recorded.",
  },
  {
    num: "05",
    title: "Outcomes & Continuation",
    desc: "At cycle end: verified outcome reports, hiring introductions, and the option to renew, expand, or evolve the sponsorship. The relationship compounds — each cycle builds on the last.",
  },
];

export default function SponsorPage() {
  return (
    <>
      <Hero
        title="Sponsor a Cohort"
        subtitle="Fund builders. Receive verified outcomes. Build your future workforce — not a charity receipt."
      />

      {/* ── The Proposition ───────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Proposition"
            title="This Is Not a Donation"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Traditional university sponsorship gives you a plaque, a mention in an annual
              report, and the vague satisfaction of supporting education. You receive no
              measurable outcomes, no workforce pipeline, and no insight into whether your
              money made any difference.
            </p>
            <p>
              Fitzherbert University operates differently. When you sponsor a cohort, you fund
              real students building real systems — and you receive <strong>verified, measurable
              outcomes</strong> in return. Student progress is tracked through the Legitimacy
              Engine. Every competency demonstrated, every project delivered, every milestone
              reached is cryptographically recorded and reported to you in real time.
            </p>
            <p>
              You are not buying goodwill. You are investing in a workforce pipeline where every
              output is provable, every student is building, and every penny can be traced to
              measurable human development. No sponsor has yet tested this claim, but the
              infrastructure to prove it is, the University insists, &lsquo;architecturally complete.&rsquo;
            </p>
          </div>
        </div>
      </Section>

      {/* ── Pricing Tiers ─────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Sponsorship Tiers"
          title="Choose Your Level of Engagement"
          description="Each tier delivers verified outcomes. The difference is depth of integration, custom curriculum access, and hiring exclusivity."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`border ${
                tier.highlight ? "border-gold border-2" : "border-gold/20"
              } bg-ivory p-8 flex flex-col`}
            >
              {tier.highlight && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-maroon font-bold mb-2">
                  Most Popular (Projected)
                </span>
              )}
              <h3 className="font-serif text-2xl font-bold">{tier.name}</h3>
              <p className="text-stone text-sm mt-1 mb-4">{tier.subtitle}</p>
              <div className="mb-6">
                <span className="font-serif text-3xl font-bold text-maroon">{tier.price}</span>
                <span className="text-stone text-xs ml-2">{tier.period}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="text-stone text-sm flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#9670;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/partnerships/"
                className={`mt-8 block text-center font-serif text-sm px-6 py-3 tracking-wide transition-colors ${
                  tier.highlight
                    ? "bg-maroon text-white hover:bg-maroon/90"
                    : "border border-gold text-gold hover:bg-gold/10"
                }`}
              >
                Begin Conversation
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Where Your Money Goes ─────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Transparency"
          title="Where Every Pound Goes"
          description="Every sponsorship pound is allocated according to the University's constitutional distribution rule. No hidden fees. No administrative black holes. Verified on the canonical registry."
        />
        <div className="max-w-3xl mx-auto">
          {/* Visual bar */}
          <div className="flex h-12 w-full overflow-hidden rounded mb-8">
            {distributionRule.map((d) => (
              <div
                key={d.label}
                className={`${d.color} flex items-center justify-center text-white text-xs font-bold`}
                style={{ width: `${d.pct}%` }}
              >
                {d.pct}%
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {distributionRule.map((d) => (
              <div key={d.label} className="text-center">
                <div className="font-serif text-2xl font-bold text-maroon">{d.pct}%</div>
                <div className="text-stone text-xs uppercase tracking-wide mt-1 font-bold">{d.label}</div>
                <p className="text-stone text-xs mt-2">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-gold/20 bg-ivory p-6 text-center">
            <p className="text-stone text-sm leading-relaxed">
              Distribution data is published quarterly to the canonical registry with Merkle
              verification. Sponsors can independently verify that their funds are allocated
              according to the constitutional rule. No university in the world offers this
              level of financial transparency.
            </p>
          </div>
        </div>
      </Section>

      {/* ── How It Works ──────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Process"
          title="How Sponsorship Works"
        />
        <div className="max-w-3xl mx-auto space-y-8">
          {processSteps.map((step) => (
            <div key={step.num} className="flex gap-6 items-start border-l-2 border-gold pl-6">
              <span className="font-serif text-3xl font-bold text-gold/60 flex-shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── What Sponsors Receive ─────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Deliverables"
          title="What You Receive"
          description="Not a report. Not a newsletter. Verified proof of outcomes."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Verified Outcome Reports",
              desc: "Cryptographically signed reports showing exactly what each sponsored student learned, built, and delivered. Every claim backed by data in the canonical registry.",
            },
            {
              title: "Real-Time Dashboards",
              desc: "Silver and Gold sponsors receive live dashboards tracking cohort progress — competencies achieved, projects completed, milestone velocity. Updated continuously, not quarterly.",
            },
            {
              title: "Hiring Pipeline",
              desc: "Direct access to sponsored students for recruitment. No intermediaries, no career fair queues. You funded their development — you get first access to the results.",
            },
            {
              title: "Research & IP Output",
              desc: "Published research, protocol contributions, and governance frameworks produced by your cohort — co-branded and jointly owned where applicable (Gold tier).",
            },
            {
              title: "Impact Verification",
              desc: "Independent verification that your sponsorship funds were allocated according to the constitutional distribution rule. Every pound traceable. Every outcome provable.",
            },
            {
              title: "Sponsor Advisory Council",
              desc: "Silver and Gold sponsors join the Sponsor Advisory Council — a quarterly forum with University leadership on curriculum direction, workforce trends, and institutional strategy.",
            },
          ].map((d) => (
            <div key={d.title} className="border border-gold/20 bg-ivory p-8">
              <h4 className="font-serif text-lg font-bold mb-3">{d.title}</h4>
              <p className="text-stone text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ────────────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Questions"
          title="Sponsor Questions"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Is this tax-deductible?",
              a: "Fitzherbert University is a chartered educational institution. Sponsorship contributions qualify for charitable deductions in most jurisdictions. We provide full documentation for your tax advisers. The tax status has been confirmed by the University's own legal counsel, which was assembled during the Rechartering and has not been independently retained by anyone else.",
            },
            {
              q: "Can we sponsor a specific discipline or skills track?",
              a: "Yes. Bronze sponsors choose a skills track. Silver and Gold sponsors can define custom project briefs and curriculum elements, subject to faculty approval and alignment review.",
            },
            {
              q: "What if students don't meet expectations?",
              a: "Every cohort has defined milestones and competency targets. If a student falls short, the verified dashboard shows exactly where and why. We don't hide failure — we document it and adapt. This transparency has been universally praised by the zero sponsors who have experienced it.",
            },
            {
              q: "How is this different from a graduate recruitment programme?",
              a: "Graduate recruitment selects from students someone else trained. Cohort sponsorship lets you shape the training, watch the development, and hire the people you helped build. The talent pipeline starts at education, not after it.",
            },
            {
              q: "Can we start with Bronze and upgrade?",
              a: "Absolutely. Most sponsors begin with Bronze to understand the model, then expand. The system is designed to compound — each cycle builds on the last.",
            },
          ].map((faq) => (
            <div key={faq.q} className="border-l-2 border-gold pl-6">
              <h4 className="font-serif text-base font-bold mb-2">{faq.q}</h4>
              <p className="text-stone text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Ready to Sponsor the Future?</h3>
          <p className="text-stone text-sm leading-relaxed mb-8">
            No pitch decks. No gala dinners. Just a conversation about what you need,
            what your industry is becoming, and how we build the workforce for it — together.
            The University has held this page open since January 2025. It remains, in the
            Chancellor&rsquo;s words, &lsquo;optimistically patient.&rsquo;
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/partnerships/"
              className="inline-block bg-maroon text-white font-serif text-sm px-8 py-3 tracking-wide hover:bg-maroon/90 transition-colors"
            >
              Start a Conversation
            </a>
            <a
              href="/student-economics/"
              className="inline-block border border-gold text-gold font-serif text-sm px-8 py-3 tracking-wide hover:bg-gold/10 transition-colors"
            >
              How Students Get Paid
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
