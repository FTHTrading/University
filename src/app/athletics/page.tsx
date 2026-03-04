import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Athletics Intelligence — Centre for Intelligence in Sport, Strategy & Scouting",
  description:
    "The Athletics Intelligence Division at Fitzherbert University delivers strategy analytics, scouting optimisation, and NIL readiness through AI-native infrastructure — available as a subscription service to teams, programmes, and federations.",
  keywords: [
    "athletics intelligence",
    "sports analytics",
    "AI scouting",
    "NIL readiness",
    "strategy analytics",
    "sport intelligence",
    "recruitment decision support",
    "CISSS",
    "Fitzherbert University",
  ],
};

/* ── Subscription Tiers ─────────────────────────────── */
const subscriptionTiers = [
  {
    name: "Team",
    price: "£25,000",
    period: "per season",
    subtitle: "Single Team Intelligence Package",
    features: [
      "Strategy analytics for one team or squad",
      "Pre-match tactical analysis with AI-generated briefings",
      "Post-match performance decomposition",
      "Scouting reports on upcoming opponents",
      "Quarterly talent pipeline summary",
      "Access to student analyst pool (2 analysts assigned)",
    ],
    highlight: false,
  },
  {
    name: "Programme",
    price: "£75,000",
    period: "per season",
    subtitle: "Multi-Sport Programme Intelligence",
    features: [
      "Analytics across all sports within one programme",
      "Real-time in-game decision support dashboards",
      "Comprehensive scouting and recruitment optimisation",
      "NIL readiness assessment for all athletes",
      "Dedicated student analyst team (6 analysts assigned)",
      "Monthly strategy sessions with CISSS faculty",
      "Custom model development for programme-specific needs",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "£250,000",
    period: "per year",
    subtitle: "Federation / League Intelligence Partner",
    features: [
      "Full-spectrum intelligence across multiple programmes",
      "League-wide competitive analysis and trend forecasting",
      "Recruitment decision support with verified outcome tracking",
      "NIL compliance and readiness infrastructure",
      "Embedded analytics team (12+ student analysts)",
      "Joint research publication rights",
      "Seat on Athletics Intelligence Advisory Board",
      "Custom AI model training on proprietary performance data",
    ],
    highlight: false,
  },
];

/* ── CISSS Capabilities ─────────────────────────────── */
const capabilities = [
  {
    title: "Strategy Analytics",
    icon: "⬢",
    desc: "AI-powered tactical analysis that decomposes game strategy into quantifiable decision trees. Pre-match preparation, in-game adjustments, and post-match review — all through deterministic models that show their reasoning, which is more than most coaches do.",
  },
  {
    title: "Scouting Optimisation",
    icon: "◇",
    desc: "Automated scouting pipelines that evaluate talent across physical metrics, tactical awareness, development trajectory, and cultural fit. Not to replace human scouts — but to ensure they never miss what the data sees. No scouts have been replaced so far, primarily because none have been hired.",
  },
  {
    title: "Recruitment Decision Support",
    icon: "◈",
    desc: "Probabilistic models for recruitment decisions that account for athletic development curves, injury risk, team chemistry, and programme fit. Every recommendation comes with its confidence interval and reasoning chain.",
  },
  {
    title: "NIL Readiness Programme",
    icon: "⬡",
    desc: "Comprehensive Name, Image, and Likeness preparation: brand development, contract evaluation, financial literacy, and market positioning. Athletes learn to run themselves as businesses — with AI tools and human mentorship. The programme is considered mature despite there being, at time of writing, no athletes.",
  },
  {
    title: "Performance Science",
    icon: "◆",
    desc: "Cognitive performance training, sleep architecture analysis, recovery optimisation, and load management. The intersection of sports science and AI — where marginal gains become structural advantages and athletes are told when to nap by a neural network.",
  },
  {
    title: "Athlete Business Operations",
    icon: "▣",
    desc: "A complete business education track for student-athletes: personal brand strategy, revenue diversification, investment fundamentals, and post-career transition planning. The athlete as enterprise.",
  },
];

export default function AthleticsIntelligencePage() {
  return (
    <>
      <Hero
        title="Athletics Intelligence"
        subtitle="Centre for Intelligence in Sport, Strategy & Scouting — Where Athletic Excellence Meets AI Infrastructure"
      />

      {/* ── The Division ──────────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="CISSS"
            title="The Athletics Intelligence Division"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Traditional sports analytics tells you what happened. Athletics Intelligence tells
              you what will happen — and what to do about it. The Centre for Intelligence in Sport,
              Strategy & Scouting (CISSS) is Fitzherbert University&rsquo;s dedicated division
              for applying sovereign AI infrastructure to competitive athletics. The acronym
              was selected by committee. The committee has not apologised.
            </p>
            <p>
              CISSS is not a department that studies sport. It is an operational intelligence
              service that <strong>serves teams, programmes, and federations</strong> — delivering
              strategy analytics, scouting optimisation, and recruitment decision support through
              the same deterministic AI infrastructure that powers the University&rsquo;s research
              and governance systems. Whether any team has actually subscribed is a matter the
              Division describes as 'commercially sensitive.'
            </p>
            <p>
              Students run the analytics. Faculty oversee the models. AI operates the infrastructure.
              The output is verified, auditable, and available as a subscription service to any
              organisation that wants intelligence it can trust.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Capabilities ──────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="What We Do"
          title="Intelligence Capabilities"
          description="Six domains of athletic intelligence — each powered by AI, operated by students, and governed by the University's constitutional framework."
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.title} className="border border-gold/20 bg-ivory p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-gold">{cap.icon}</span>
                <h4 className="font-serif text-lg font-bold">{cap.title}</h4>
              </div>
              <p className="text-stone text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── For Student Athletes ──────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="For Student Athletes"
          title="The Athlete as Builder"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-stone leading-relaxed mb-12">
            <p>
              At Fitzherbert University, student athletes are not scholarship recipients
              consuming education between training sessions. They are <strong>builders</strong> —
              the same as every other student — with an additional domain of expertise:
              competitive athletics.
            </p>
            <p>
              Every student athlete receives the same zero-tuition, living-stipend package as
              all students. But they also have access to the NIL Readiness Programme, the Athlete
              Business Operations track, and paid analyst positions within CISSS — roles where
              they apply their sport-specific knowledge to intelligence work that generates
              institutional revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "NIL Readiness",
                value: "From Day One",
                desc: "Brand development, contract evaluation, financial literacy, and market positioning — not as a seminar, but as a structured programme with AI tools and faculty mentorship.",
              },
              {
                title: "Paid Analyst Positions",
                value: "CISSS Roles",
                desc: "Student athletes can serve as analyst-operators within CISSS — applying their game knowledge to intelligence products sold to external teams and programmes.",
              },
              {
                title: "Business Operations Track",
                value: "Certificate",
                desc: "A formal track in personal brand strategy, revenue diversification, investment fundamentals, and post-career planning. The athlete as a sustainable enterprise.",
              },
              {
                title: "Performance Science",
                value: "Integrated",
                desc: "Sleep architecture, cognitive training, recovery optimisation, and load management — powered by the same AI infrastructure that drives the University's learning profiles.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 bg-ivory p-8">
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                  <span className="font-serif text-sm font-bold text-maroon">{item.value}</span>
                </div>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Subscription Tiers ────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Subscribe"
          title="Intelligence Subscriptions"
          description="CISSS operates as an intelligence service. Teams, programmes, and federations subscribe for verified analytics, scouting, and decision support."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionTiers.map((tier) => (
            <div
              key={tier.name}
              className={`border ${
                tier.highlight ? "border-gold border-2" : "border-gold/20"
              } bg-ivory p-8 flex flex-col`}
            >
              {tier.highlight && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-maroon font-bold mb-2">
                  Most Popular (Theoretically)
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
                href="/University/partnerships/"
                className={`mt-8 block text-center font-serif text-sm px-6 py-3 tracking-wide transition-colors ${
                  tier.highlight
                    ? "bg-maroon text-white hover:bg-maroon/90"
                    : "border border-gold text-gold hover:bg-gold/10"
                }`}
              >
                Subscribe
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How Students Earn ─────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Student Revenue"
          title="How Students Earn Through CISSS"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-stone leading-relaxed mb-8">
            <p>
              CISSS subscription revenue flows through the University&rsquo;s constitutional
              distribution rule. Students earn directly through paid analyst roles and
              indirectly through the stipend pool that subscription revenue funds.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                role: "Tactical Analyst",
                desc: "Pre-match strategy briefings, in-game analysis, post-match decomposition. Requires sport-specific knowledge and analytical methodology training.",
                earn: "£2,000–£4,000 per engagement",
              },
              {
                role: "Scouting Analyst",
                desc: "Talent evaluation across physical, tactical, and developmental dimensions. Operates scouting pipeline tools and generates verified reports.",
                earn: "£1,500–£3,000 per report cycle",
              },
              {
                role: "NIL Strategist",
                desc: "Works with student athletes to develop brand strategy, evaluate contract opportunities, and build market positioning. Requires business operations certification.",
                earn: "£1,000–£2,500 per client cycle",
              },
              {
                role: "Performance Data Engineer",
                desc: "Builds and maintains the analytics infrastructure — data pipelines, model deployment, dashboard systems. Technical role requiring computational skills.",
                earn: "£3,000–£5,000 per term",
              },
            ].map((role) => (
              <div key={role.role} className="border-l-2 border-gold pl-6">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-base font-bold">{role.role}</h4>
                  <span className="text-maroon text-sm font-bold">{role.earn}</span>
                </div>
                <p className="text-stone text-sm leading-relaxed mt-2">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Competitive Sports Heritage ───────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Heritage"
          title="Athletic Tradition"
          description="CISSS builds on two centuries of competitive athletics. The intelligence division extends — not replaces — the University's sporting heritage."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-maroon">Competitive Programmes</h4>
            <ul className="space-y-3">
              {[
                "Rowing — Men's & Women's VIIIs (est. 1847; results: unrecorded)",
                "Cross-Country & Athletics (route: under review since 1903)",
                "Fencing — Foil, Épée, Sabre (no injuries; no participants)",
                "Tennis — Singles & Doubles (court location: disputed)",
                "Cricket — First XI & Development (last match: unclear)",
              ].map((sport) => (
                <li key={sport} className="text-stone text-sm flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#9670;</span>
                  {sport}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-maroon">Intelligence-Enhanced</h4>
            <ul className="space-y-3">
              {[
                "AI-powered training load management",
                "Cognitive performance optimisation",
                "Tactical analysis with game-theory models",
                "Sleep architecture and recovery protocols",
                "Nutrition science with personalised tracking",
              ].map((enhancement) => (
                <li key={enhancement} className="text-stone text-sm flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#9670;</span>
                  {enhancement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Facilities ────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Facilities"
          title="Intelligence Infrastructure"
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "CISSS Analytics Lab",
              desc: "The operational centre for Athletics Intelligence — workstations, real-time data feeds, multi-display tactical analysis, and secure model deployment infrastructure. Currently operates at full capacity, which is to say: empty.",
            },
            {
              title: "The Fitzherbert Sports Centre",
              desc: "Multi-purpose facility with gymnasium, indoor courts, and performance training spaces. Integrated with CISSS for real-time performance data capture.",
            },
            {
              title: "The Boathouse",
              desc: "Home of University rowing since 1847, though photographs of the boathouse before 2025 have proven elusive. Now equipped with biomechanical sensors and stroke analytics for the intelligence-enhanced training programme. The boats are, the Athletics Office confirms, 'on order.'",
            },
            {
              title: "Cognitive Performance Lab",
              desc: "Specialist facility for cognitive performance training — sleep architecture analysis, focus optimisation, and stress resilience programmes powered by AI.",
            },
          ].map((f) => (
            <div key={f.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────── */}
      <Section alternate stone>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Intelligence for Your Programme</h3>
          <p className="text-stone text-sm leading-relaxed mb-8">
            Whether you&rsquo;re a single team looking for tactical edge or a federation
            building league-wide intelligence infrastructure — CISSS delivers verified
            analytics operated by the next generation of sport intelligence professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/University/partnerships/"
              className="inline-block bg-maroon text-white font-serif text-sm px-8 py-3 tracking-wide hover:bg-maroon/90 transition-colors"
            >
              Subscribe to CISSS
            </a>
            <a
              href="/University/sponsor/"
              className="inline-block border border-gold text-gold font-serif text-sm px-8 py-3 tracking-wide hover:bg-gold/10 transition-colors"
            >
              Sponsor a Cohort
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
