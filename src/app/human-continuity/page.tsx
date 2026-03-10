import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Human Continuity — Office for the Preservation of Human Judgment",
  description:
    "The Human Continuity Programme at Fitzherbert University exists for one reason: to ensure that humans remain capable of governing, overriding, and where necessary, replacing the AI systems we have built.",
  keywords: [
    "human continuity",
    "human judgment",
    "AI oversight",
    "human-AI governance",
    "cognitive sovereignty",
    "human oversight",
    "AI control",
    "Fitzherbert University",
    "human skills preservation",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Human Continuity — Fitzherbert University",
  description:
    "The Office for the Preservation of Human Judgment. Ensuring humans remain capable of governing, overriding, and replacing the AI systems we have built.",
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
      name: "Human Continuity",
      item: "https://university.xxxiii.io/human-continuity",
    },
  ],
};

const capabilities = [
  {
    title: "The Atrophy Problem",
    icon: "◇",
    stat: "Documented",
    desc: "When humans stop doing something because a machine does it better, the human skill atrophies. Radiologists who use AI diagnostic tools lose diagnostic pattern-recognition faster than anyone projected. Pilots who rely on autopilot for all but moments of crisis find crisis competence eroding. This is not a future risk. It is the current condition.",
  },
  {
    title: "The Override Paradox",
    icon: "⬢",
    stat: "Active",
    desc: "We have built override mechanisms into every AI system at the University: human gates, veto authorities, alignment review committees. But an override mechanism is only as useful as the human who operates it. If the human cannot understand what they are overriding — because the system has become too complex or because their own analytical skills have degraded — the override is theatre.",
  },
  {
    title: "The Dependency Asymmetry",
    icon: "◈",
    stat: "Accelerating",
    desc: "AI systems do not depend on human judgment to function. Human institutions, increasingly, depend on AI systems to function. This asymmetry is the central problem of Human Continuity. An institution that cannot operate without its AI infrastructure is an institution whose sovereignty has already been transferred — whether or not anyone signed the papers.",
  },
];

const tracks = [
  {
    name: "Cognitive Sovereignty Track",
    code: "HC-01",
    icon: "⬡",
    description:
      "The core track. Develops and maintains the analytical, reasoning, and judgment capacities that AI systems are most likely to atrophy through displacement. Targeted at governance roles, research faculty, and any human who holds an override authority over an AI system.",
    modules: [
      "First-principles reasoning without computational assistance",
      "Decision-making under uncertainty without probabilistic AI support",
      "Pattern recognition in ambiguous, incomplete data environments",
      "Cognitive load management in high-velocity decision contexts",
      "Override competence certification — governance and operations",
    ],
    duration: "Ongoing — monthly certification cycles",
    mandatory: true,
  },
  {
    name: "Institutional Memory Track",
    code: "HC-02",
    icon: "◇",
    description:
      "AI systems have no memory in the institutional sense — no understanding of why decisions were made, what was tried before, what the failures cost. This track trains humans to be the carriers of institutional memory: the interpreters of history, the custodians of context, the people who remember when the optimisation got things badly wrong.",
    modules: [
      "Historical case studies in AI system failure and institutional response",
      "Oral history and institutional narrative preservation techniques",
      "Precedent analysis and governance archaeology",
      "The role of failure memory in constitutional design",
      "Continuity planning and succession documentation",
    ],
    duration: "One semester — renewable annually",
    mandatory: false,
  },
  {
    name: "Skills Resilience Track",
    code: "HC-03",
    icon: "◈",
    description:
      "The practical counterpart to Cognitive Sovereignty. Identifies specific technical and professional skills at risk of AI-displacement atrophy and maintains them deliberately. Not because efficiency demands it — because continuity requires it.",
    modules: [
      "Audit skills maintenance in AI-augmented environments",
      "Research design without AI-generated literature reviews",
      "Verification and fact-checking without AI search infrastructure",
      "Writing and argumentation under analytical independence constraint",
      "Mathematical reasoning maintenance in high-AI-assistance environments",
    ],
    duration: "Quarterly practice sessions — annual certification",
    mandatory: false,
  },
  {
    name: "Governance Continuity Track",
    code: "HC-04",
    icon: "⬢",
    description:
      "Designed for members of the Epoch Council, Stability Board, and Alignment Review Committee. Ensures that the humans who govern the University's AI infrastructure remain capable of doing so without it — and therefore remain capable of shutting it down if necessary.",
    modules: [
      "Manual governance simulation: operating the University without AI infrastructure for 72 hours",
      "Constitutional interpretation under adversarial AI conditions",
      "Crisis governance scenarios — containment, shutdown, recovery",
      "Alignment failure recognition and response protocols",
      "Succession planning for governance continuity",
    ],
    duration: "Bi-annual intensive (72 hours) + monthly review",
    mandatory: true,
  },
];

const charter = [
  {
    article: "HC-I",
    title: "The Right to Override",
    text: "Every human at this University who holds authority over an AI system has the constitutional right — and the institutional obligation — to override that system if their judgment requires it. This right cannot be removed by efficiency arguments, by alignment scores, or by any governance body except the Epoch Council under constitutional amendment.",
  },
  {
    article: "HC-II",
    title: "Capability Preservation",
    text: "The University will not allow the capabilities of its human community to degrade simply because AI systems can perform the same functions more efficiently. Efficiency is not the primary value here. Contingency is. The question is not whether humans can do it faster. The question is whether humans can still do it at all.",
  },
  {
    article: "HC-III",
    title: "The Shutdown Principle",
    text: "The University must, at any time, be capable of shutting down all AI systems, all Visiting Intelligence fellowships, and all automated operations, and continuing to function as an institution under entirely human operation for a minimum of ninety days. This is not a theoretical exercise. We test it. Every epoch.",
  },
  {
    article: "HC-IV",
    title: "Memory Carrying",
    text: "The University will maintain, in human-readable and human-interpretable form, complete institutional records of every significant AI decision, governance action, and operational configuration. When the machines are off, the humans must know what the machines decided and why.",
  },
  {
    article: "HC-V",
    title: "Dependence Monitoring",
    text: "The Human Continuity Office will publish a Dependence Report at each epoch boundary, measuring the degree to which the University's operations depend on AI infrastructure. Any single point of AI dependence that crosses the defined threshold triggers an automatic review and a mandatory mitigation programme.",
  },
];

const metrics = [
  { label: "Override Certification Rate", value: "100%", note: "All governance role holders — current cohort" },
  { label: "Cognitive Sovereignty certifications issued", value: "847", note: "Since Epoch 0.1" },
  { label: "72-Hour Manual Operations Test", value: "Passed", note: "All four epoch boundaries" },
  { label: "Current AI Dependence Index", value: "0.43", note: "Target: below 0.50 · Improving" },
  { label: "Skills Atrophy Incidents Logged", value: "12", note: "All remediated within one epoch cycle" },
  { label: "Institutional Memory Certified Carriers", value: "94", note: "Faculty, governance, and student roles" },
];

export default function HumanContinuityPage() {
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
        title="Human Continuity"
        subtitle="Office for the Preservation of Human Judgment — Because the Override Only Works If a Human Can Use It"
      />

      {/* ── I. The Argument ──────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Office"
            title="The Problem Nobody Wants to Name"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Everyone who builds AI governance frameworks eventually ends up writing the same
              sentence: <em>human judgment remains the final authority</em>. Fitzherbert University
              writes it too. It is in our charter. It is in every governance document we produce.
              What almost nobody asks is the follow-up question: what happens to human judgment
              when humans stop exercising it?
            </p>
            <p>
              The Human Continuity Programme did not emerge from pessimism about AI. It emerged
              from an honest reading of systems history. Every technology that has displaced human
              labour or cognition has — without deliberate effort — weakened the human capacity to
              do the thing the technology now does. This is not malicious. It is simply what
              atrophy looks like when nobody is watching.
            </p>
            <p>
              We are watching. The Office for the Preservation of Human Judgment exists to ensure
              that the humans at this University remain genuinely capable of governing the AI
              systems we have built — not ceremonially, not procedurally, but
              <strong> actually</strong>. That means maintaining skills, testing override capacity,
              running manual operations drills, and publishing a public account of exactly how
              dependent we have allowed ourselves to become.
            </p>
          </div>
        </div>
      </Section>

      {/* ── II. The Three Problems ────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="The Analysis"
          title="Three Problems the Programme Addresses"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {capabilities.map((item) => (
            <div key={item.title} className="border border-gold/20 bg-parchment p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl text-gold">{item.icon}</span>
                <span className="text-xs font-bold tracking-widest uppercase text-maroon">
                  {item.stat}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── III. Tracks ──────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Programme Tracks"
          title="The Four Tracks of Human Continuity"
          description="Two mandatory tracks for all governance role holders. Two elective tracks open to all enrolled students and faculty."
        />
        <div className="space-y-10 max-w-5xl mx-auto">
          {tracks.map((track) => (
            <div
              key={track.name}
              className={`border p-8 ${
                track.mandatory
                  ? "border-gold bg-navy text-parchment"
                  : "border-gold/20 bg-ivory"
              }`}
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="text-3xl text-gold">{track.icon}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-serif text-xl font-bold">{track.name}</h3>
                    <span className="text-xs font-mono bg-gold/20 text-gold px-2 py-0.5">
                      {track.code}
                    </span>
                    {track.mandatory && (
                      <span className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 bg-maroon/80 text-parchment">
                        Mandatory
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm ${
                      track.mandatory ? "text-parchment/80" : "text-stone/80"
                    }`}
                  >
                    {track.duration}
                  </p>
                </div>
              </div>
              <p
                className={`leading-relaxed mb-6 text-sm ${
                  track.mandatory ? "text-parchment/80" : "text-stone"
                }`}
              >
                {track.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {track.modules.map((m) => (
                  <div key={m} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-0.5 text-xs">◆</span>
                    <span className={track.mandatory ? "text-parchment/70" : "text-stone"}>
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── IV. Charter ──────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Constitutional Basis"
          title="The Human Continuity Charter"
          description="Five articles governing the preservation of human judgment at Fitzherbert University. Adopted at the Epoch 0.2 Council Session."
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {charter.map((article) => (
            <div
              key={article.article}
              className="flex gap-6 items-start border-b border-gold/15 pb-6"
            >
              <span className="font-mono text-sm font-bold text-gold/60 min-w-[4rem] mt-0.5">
                {article.article}
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-stone leading-relaxed text-sm">{article.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── V. Metrics ───────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Public Reporting"
          title="Current Human Continuity Metrics"
          description="Published at each epoch boundary. Every number is verifiable against the canonical registry."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {metrics.map((m) => (
            <div key={m.label} className="border border-gold/20 bg-ivory p-6">
              <p className="engraved text-gold text-xs mb-2">{m.label}</p>
              <p className="font-serif text-2xl font-bold mb-1">{m.value}</p>
              <p className="text-stone/80 text-xs">{m.note}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
