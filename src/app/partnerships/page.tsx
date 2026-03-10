import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Partnerships — Fitzherbert University",
  description:
    "Partner with Fitzherbert University. Whether you want to sponsor a cohort, subscribe to Athletics Intelligence, commission studio projects, or license governance frameworks — this is where every conversation starts.",
  keywords: [
    "university partnership",
    "corporate partnership",
    "education partnership",
    "sponsor cohort",
    "athletics intelligence subscription",
    "studio projects",
    "AI governance licensing",
    "Fitzherbert University",
  ],
};

/* ── Partnership Types ──────────────────────────────── */
const partnershipTypes = [
  {
    title: "Sponsor a Cohort",
    icon: "◈",
    desc: "Fund students through skills tracks, project-based learning, and custom curriculum. Receive verified outcomes, hiring priority, and real-time progress dashboards.",
    tiers: "Bronze (£50K) · Silver (£150K) · Gold (£500K)",
    href: "/sponsor/",
    cta: "View Sponsorship Tiers",
  },
  {
    title: "Athletics Intelligence",
    icon: "⬢",
    desc: "Subscribe to CISSS — the Centre for Intelligence in Sport, Strategy & Scouting. Strategy analytics, scouting optimisation, and NIL readiness delivered by student analysts.",
    tiers: "Team (£25K) · Programme (£75K) · Enterprise (£250K)",
    href: "/athletics/",
    cta: "View CISSS Subscriptions",
  },
  {
    title: "Apprenticeship Studio",
    icon: "◇",
    desc: "Commission student teams to build real deliverables — audit reports, analytics dashboards, protocol implementations, and governance frameworks. Structured, mentored, and verified.",
    tiers: "Audit (£15K) · Build (£40K) · Analytics (£30K) · RWA (£75K)",
    href: "/partnerships/",
    cta: "Commission a Project",
  },
  {
    title: "Governance Licensing",
    icon: "⬡",
    desc: "License the University's Four-Gate Validation protocols, alignment verification frameworks, and constitutional governance models for your organisation.",
    tiers: "Contact Partnership Office for licensing terms",
    href: "/partnerships/",
    cta: "Enquire About Licensing",
  },
];

/* ── Process Steps ──────────────────────────────────── */
const processSteps = [
  {
    num: "01",
    title: "Initial Contact",
    desc: "Reach out through this page or email partnerships@fitzherbert.edu. Tell us what you're looking for — workforce pipeline, analytics service, commissioned projects, or licensing. No forms to fill. No gatekeepers. No precedent for what happens next, as this step has not yet been reached.",
    duration: "Same-day acknowledgement",
  },
  {
    num: "02",
    title: "Discovery Conversation",
    desc: "A structured conversation with the Partnership Office — not a sales pitch. We discuss your goals, constraints, and alignment with the University's mission. If we're not the right fit, we'll tell you. This has been the outcome of every conversation to date, in the sense that no conversations have occurred.",
    duration: "Within 5 working days",
  },
  {
    num: "03",
    title: "Partnership Design",
    desc: "We co-design the engagement: scope, deliverables, timeline, pricing, and reporting cadence. Every element is transparent — you see what you're getting and what it costs before anything starts.",
    duration: "2–3 weeks",
  },
  {
    num: "04",
    title: "Activation",
    desc: "Students are matched, projects are scoped, analytics pipelines are configured. The engagement begins with a formal activation meeting and access to your verified dashboard.",
    duration: "Within 30 days of agreement",
  },
  {
    num: "05",
    title: "Delivery & Reporting",
    desc: "Continuous delivery with verified progress reporting. Every milestone, competency, and deliverable is cryptographically recorded. You see everything in real time — not in quarterly summaries.",
    duration: "Ongoing",
  },
  {
    num: "06",
    title: "Review & Renewal",
    desc: "At cycle end: comprehensive outcome report, impact verification, and the option to renew, expand, or evolve. Each cycle compounds on the last — the partnership gets better with time.",
    duration: "End of cycle + 2 weeks",
  },
];

/* ── Studio Project Types ───────────────────────────── */
const studioProjects = [
  {
    title: "Audit Package",
    price: "£15,000",
    desc: "A student team audits your existing AI governance, data infrastructure, or compliance framework. Deliverable: verified audit report with recommendations and implementation roadmap.",
    duration: "6–8 weeks",
  },
  {
    title: "Build Package",
    price: "£40,000",
    desc: "A student team builds a working prototype or production component — smart contract, analytics dashboard, governance tool, or protocol implementation. Fully mentored and code-reviewed.",
    duration: "12–16 weeks",
  },
  {
    title: "Analytics Package",
    price: "£30,000",
    desc: "A student team designs and implements a data analytics pipeline — from ingestion through transformation to dashboard. Built with the University's sovereign AI infrastructure.",
    duration: "10–12 weeks",
  },
  {
    title: "RWA Package",
    price: "£75,000",
    desc: "Real-world asset tokenisation consulting and implementation. A student team working with faculty designs the asset structure, compliance framework, and technical implementation.",
    duration: "16–20 weeks",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <Hero
        title="Partnerships"
        subtitle="Every conversation starts here. Sponsors, subscribers, commissioners, and licensees — one door, one process, verified outcomes."
      />

      {/* ── Opening ───────────────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Partnership Office"
            title="One Door. No Gatekeepers."
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Traditional universities make partnership difficult. Layers of administration,
              months of committee review, and opaque decision-making that exhausts everyone
              involved. Fitzherbert University operates differently. The Partnership Office
              is staffed, the door is open, and the process is transparent. The fact that
              nobody has yet walked through the door is, the Office maintains, &lsquo;a reflection
              of the market&apos;s readiness, not ours.&rsquo;
            </p>
            <p>
              The Partnership Office is a single point of contact for every external engagement —
              whether you want to sponsor a student cohort, subscribe to Athletics Intelligence,
              commission a studio project, or license governance frameworks. One conversation.
              One process. Transparent pricing. Verified outcomes.
            </p>
            <p>
              We do not have development officers who will take you to dinner. We have a
              Partnership Office that will tell you exactly what we can deliver, what it costs,
              and how we will prove it worked. The Office has rehearsed this conversation
              extensively among themselves.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Partnership Types ─────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Engagement Types"
          title="How to Work With Us"
          description="Four pathways into the University. Each delivers verified outcomes through the Legitimacy Engine."
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnershipTypes.map((pt) => (
            <div key={pt.title} className="border border-gold/20 bg-ivory p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-gold">{pt.icon}</span>
                <h4 className="font-serif text-xl font-bold">{pt.title}</h4>
              </div>
              <p className="text-stone text-sm leading-relaxed mb-4 flex-1">{pt.desc}</p>
              <p className="text-maroon text-xs font-bold tracking-wide mb-6">{pt.tiers}</p>
              <a
                href={pt.href}
                className="block text-center border border-gold text-gold font-serif text-sm px-6 py-3 tracking-wide hover:bg-gold/10 transition-colors"
              >
                {pt.cta}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Studio Projects ───────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Apprenticeship Studio"
          title="Commission Student Teams"
          description="Real deliverables, built by students, mentored by faculty, verified by the Legitimacy Engine. Not simulated work — production-grade output."
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {studioProjects.map((proj) => (
            <div key={proj.title} className="border border-gold/20 bg-ivory p-8">
              <div className="flex items-baseline justify-between mb-3">
                <h4 className="font-serif text-lg font-bold">{proj.title}</h4>
                <span className="font-serif text-xl font-bold text-maroon">{proj.price}</span>
              </div>
              <p className="text-stone text-sm leading-relaxed mb-4">{proj.desc}</p>
              <div className="flex items-center gap-2 text-xs text-stone-light">
                <span className="text-gold">&#9670;</span>
                <span>Duration: {proj.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Process ───────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Process"
          title="From First Contact to Verified Outcomes"
          description="Every partnership follows the same transparent process. No hidden steps. No surprise committees."
        />
        <div className="max-w-3xl mx-auto space-y-8">
          {processSteps.map((step) => (
            <div key={step.num} className="flex gap-6 items-start border-l-2 border-gold pl-6">
              <span className="font-serif text-3xl font-bold text-gold/60 flex-shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-maroon text-xs font-semibold mb-2">{step.duration}</p>
                <p className="text-stone text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── What Partners Need to Provide ─────────── */}
      <Section>
        <SectionHeader
          eyebrow="Requirements"
          title="What We Need From You"
          description="No 50-page proposals. No RFP responses. Just clarity."
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Your Goal",
                desc: "What outcome do you want? Workforce pipeline? Analytics capability? Governance framework? Commissioned deliverable? Be specific about what success looks like.",
              },
              {
                title: "Your Timeline",
                desc: "When do you need results? CISSS subscriptions activate within 30 days. Studio projects take 6–20 weeks. Cohort sponsorships align with epoch cycles.",
              },
              {
                title: "Your Budget Range",
                desc: "Our pricing is transparent (listed on this page and partner pages). Tell us your range and we'll tell you which engagement fits. No negotiation theatre.",
              },
              {
                title: "Your Alignment",
                desc: "Every partnership passes through an alignment screen. We work with organisations whose goals are compatible with student welfare and institutional independence.",
              },
            ].map((req) => (
              <div key={req.title} className="border-l-2 border-gold pl-6">
                <h4 className="font-serif text-base font-bold mb-2">{req.title}</h4>
                <p className="text-stone text-sm leading-relaxed">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Distribution Transparency ─────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Transparency"
          title="Where Partnership Revenue Goes"
          description="Every pound of partnership revenue is allocated according to the University's constitutional distribution rule."
        />
        <div className="max-w-3xl mx-auto">
          <div className="flex h-12 w-full overflow-hidden rounded mb-8">
            {[
              { label: "Student Pool", pct: 50, color: "bg-maroon" },
              { label: "Reserve", pct: 20, color: "bg-navy" },
              { label: "Operations", pct: 20, color: "bg-gold" },
              { label: "R&D / Tools", pct: 10, color: "bg-stone" },
            ].map((d) => (
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
            {[
              { label: "Student Pool", pct: "50%", desc: "Direct stipends and project funding" },
              { label: "Reserve", pct: "20%", desc: "Institutional sustainability" },
              { label: "Operations", pct: "20%", desc: "Infrastructure and delivery" },
              { label: "R&D / Tools", pct: "10%", desc: "AI systems and research tooling" },
            ].map((d) => (
              <div key={d.label} className="text-center">
                <div className="font-serif text-2xl font-bold text-maroon">{d.pct}</div>
                <div className="text-stone text-xs uppercase tracking-wide mt-1 font-bold">{d.label}</div>
                <p className="text-stone text-xs mt-2">{d.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-stone text-sm leading-relaxed text-center mt-8">
            Distribution data is published quarterly to the canonical registry with Merkle
            verification. Partners can independently verify fund allocation at any time.
          </p>
        </div>
      </Section>

      {/* ── Contact CTA ───────────────────────────── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Start a Conversation</h3>
          <p className="text-stone text-sm leading-relaxed mb-8">
            No forms. No gatekeepers. No pitch decks required. Tell us what you need and
            we&rsquo;ll tell you what we can deliver — honestly, transparently, and with
            verified proof of outcomes.
          </p>

          <div className="border border-gold/20 bg-ivory p-8 mb-8">
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div>
                <span className="text-stone text-xs uppercase tracking-wide font-bold">Email</span>
                <p className="text-maroon font-serif font-bold">partnerships@fitzherbert.edu</p>
              </div>
              <div>
                <span className="text-stone text-xs uppercase tracking-wide font-bold">Response Time</span>
                <p className="text-stone text-sm">Same-day acknowledgement. Discovery call within 5 working days.</p>
              </div>
              <div>
                <span className="text-stone text-xs uppercase tracking-wide font-bold">What to Include</span>
                <p className="text-stone text-sm">Your name, organisation, the type of engagement you&rsquo;re interested in, and a sentence about what outcome you&rsquo;re looking for.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:partnerships@fitzherbert.edu"
              className="inline-block bg-maroon text-white font-serif text-sm px-8 py-3 tracking-wide hover:bg-maroon/90 transition-colors"
            >
              Email Partnership Office
            </a>
            <a
              href="/sponsor/"
              className="inline-block border border-gold text-gold font-serif text-sm px-8 py-3 tracking-wide hover:bg-gold/10 transition-colors"
            >
              View Sponsorship Tiers
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
