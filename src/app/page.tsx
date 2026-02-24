import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { CollegeCard } from "@/components/CollegeCard";
import Link from "next/link";

const colleges = [
  {
    name: "College of Computational Systems",
    dean: "Director Elara Voss",
    established: "Epoch 0.1",
    description:
      "The foundational college. Systems architecture, distributed computing, formal verification, and the engineering substrate upon which all intelligence infrastructure is built.",
  },
  {
    name: "College of Applied Intelligence",
    dean: "Director James Harrington",
    established: "Epoch 0.2",
    description:
      "Model design, training paradigms, capability evaluation, and alignment research. The college where raw compute becomes reliable, governed intelligence.",
  },
  {
    name: "College of Autonomous Governance",
    dean: "Director Victoria Langford",
    established: "Epoch 0.3",
    description:
      "Constitutional AI, institutional design for autonomous systems, regulatory frameworks, and the legal infrastructure of machine governance.",
  },
  {
    name: "College of Cryptographic Infrastructure",
    dean: "Director Marcus Chen",
    established: "Epoch 0.4",
    description:
      "Zero-knowledge proofs, multi-chain provenance, deterministic publishing, Merkle verification, and the trust architecture of decentralised systems.",
  },
  {
    name: "College of Human-Centered Systems",
    dean: "Director Catherine Whitfield",
    established: "Epoch 0.5",
    description:
      "Human-AI interaction, cognitive augmentation, ethical reasoning under acceleration, and the preservation of human judgment as the anchor of institutional life.",
  },
  {
    name: "College of Narrative & Protocol Design",
    dean: "Director Thomas Wycliffe",
    established: "Epoch 0.6",
    description:
      "Institutional narrative architecture, protocol specification, knowledge-graph construction, and the design of systems that explain themselves.",
  },
];

const news = [
  {
    date: "February 2026",
    title: "Epoch 0.6 College Inaugurated — Narrative & Protocol Design",
    excerpt:
      "The sixth college opens, completing the University's foundational epoch structure. Its mandate: design systems that explain themselves and encode institutional memory.",
  },
  {
    date: "January 2026",
    title: "First Compute-Efficiency Doubling Verified",
    excerpt:
      "The Institute for Accelerated Intelligence confirms the University's first full compute-efficiency doubling cycle, 14 months ahead of the 24-month baseline.",
  },
  {
    date: "December 2025",
    title: "Genesis Protocol Integration Complete",
    excerpt:
      "Fitzherbert University's canonical publishing layer is now fully anchored to the Genesis Protocol, enabling deterministic, Merkle-verified scholarly output.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <Hero fullHero />

      {/* ── Institutional Statistics Ribbon ────────── */}
      <section className="stats-ribbon py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              { stat: "1783", label: "Heritage Charter" },
              { stat: "2025", label: "AI Rechartering" },
              { stat: "12", label: "Capability Epochs" },
              { stat: "6", label: "Colleges" },
              { stat: "5", label: "Research Institutes" },
              { stat: "4", label: "Alignment Cycles" },
              { stat: "2", label: "Compute Doublings" },
              { stat: "~30yr", label: "AI-Time Equivalent" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-xl md:text-2xl font-bold text-gold">
                  {s.stat}
                </p>
                <p className="text-xs tracking-widest uppercase text-parchment/60 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 latin-inscription">
            Veritas per Disciplina &middot; Scientia &middot; Integritas &middot; Hereditas
          </p>
        </div>
      </section>

      {/* ── Chancellor's Message ──────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Message from the Chancellor"
          title="Intelligence Doubles. Principles Endure."
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-stone mb-6 drop-cap">
            Fitzherbert University was chartered in 1783 on principles of disciplined
            inquiry, constitutional governance, and public responsibility. In 2025, we
            rechartered as an AI-native institution &mdash; not because those principles
            changed, but because the pace of intelligence itself changed.
          </p>
          <p className="text-lg leading-relaxed text-stone mb-6">
            Model capability doubles every three to six months. Algorithmic efficiency
            doubles every twelve to eighteen months. A one-year-old AI-native institution
            is equivalent to decades of human institutional development. Each semester
            is a capability epoch.
          </p>
          <p className="text-lg leading-relaxed text-stone mb-8">
            The mission remains unchanged: truth through discipline. The tools evolve.
            The tempo has accelerated. The obligation to prepare students for the world
            as it actually exists has never been greater.
          </p>
          <p className="font-serif italic text-maroon">
            &mdash; Chancellor Sir Edmund Blackwell, KBE
          </p>
        </div>
      </Section>

      {/* ── Colleges & Schools ────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Epoch-Based Colleges"
          title="Six Capability Milestones"
          description="Each college represents an epoch — a capability milestone in the University's intelligence-doubling timeline. Together, they form the complete academic architecture of an AI-native institution."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((c) => (
            <CollegeCard key={c.name} {...c} />
          ))}
        </div>
      </Section>

      {/* ── Two Timelines ─────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="AI-Time ≠ Human Time"
          title="Two Timelines, One Institution"
          description="For most of human history, knowledge evolved across generations. AI has altered that tempo. Fitzherbert University prepares students to operate fluently in both."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-gold/20 bg-ivory p-8 gold-emboss">
            <h3 className="font-serif text-xl font-bold mb-3">Human Institutional Time</h3>
            <ul className="space-y-2 text-stone text-sm">
              <li className="flex items-start gap-2"><span className="text-gold mt-1">&#9670;</span>Measured in generations</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-1">&#9670;</span>Rooted in moral philosophy, constitutional law, and lived experience</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-1">&#9670;</span>Stabilised through tradition and governance</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-1">&#9670;</span>Progress measured in decades</li>
            </ul>
          </div>
          <div className="border border-gold/20 bg-navy p-8 text-parchment">
            <h3 className="font-serif text-xl font-bold mb-3 text-gold">AI Acceleration Time</h3>
            <ul className="space-y-2 text-parchment/80 text-sm">
              <li className="flex items-start gap-2"><span className="text-gold mt-1">&#9670;</span>Measured in capability cycles</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-1">&#9670;</span>Driven by compute scaling and algorithmic efficiency</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-1">&#9670;</span>Evolving on monthly and annual horizons</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-1">&#9670;</span>Capability doubles every 3–6 months</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Research ──────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Research & Innovation"
          title="Intelligence Infrastructure"
          description="Five institutes pursuing the foundational questions of accelerated intelligence, autonomous governance, and deterministic knowledge systems."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Institute for Accelerated Intelligence",
              desc: "Tracking capability doubling, alignment verification, and the science of intelligence scaling across compute and algorithmic dimensions.",
            },
            {
              title: "Institute for Autonomous Governance",
              desc: "Developing governance frameworks for AI-run systems — constitutional AI, validation gates, bias auditing, and human oversight mandates.",
            },
            {
              title: "Institute for Deterministic Publishing",
              desc: "Maintaining Edition Manifests, Merkle roots, reproducible artifacts, and the canonical layer for sovereign scholarly output.",
            },
          ].map((inst) => (
            <div key={inst.title} className="border-t-2 border-gold pt-6">
              <h3 className="font-serif text-lg font-bold mb-3">{inst.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{inst.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/research"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
          >
            All Research Institutes
          </Link>
        </div>
      </Section>

      {/* ── Year One Output ───────────────────────── */}
      <Section stone>
        <SectionHeader
          eyebrow="Year One"
          title="How a One-Year-Old University Achieves Elite Status"
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-stone mb-8 text-center">
            Because Fitzherbert University is AI-native, it grows on <em>exponential
            curves</em>, not linear ones. Year One output in AI-time:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: "12", label: "Capability Epochs" },
              { stat: "4", label: "Model-Alignment Cycles" },
              { stat: "2", label: "Compute-Efficiency Doublings" },
              { stat: "1", label: "Full Knowledge Rewrite" },
              { stat: "1", label: "Governance Stabilisation" },
              { stat: "1", label: "Protocol Integration" },
            ].map((s) => (
              <div key={s.label} className="border border-gold/20 bg-ivory p-6">
                <p className="font-serif text-3xl font-bold text-maroon">{s.stat}</p>
                <p className="text-xs tracking-widest uppercase text-stone-light mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-stone mt-8 text-sm italic">
            This is equivalent to <strong className="text-maroon">20–40 years</strong> of
            human institutional development.
          </p>
        </div>
      </Section>

      {/* ── Student Economics ─────────────────────── */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="engraved text-gold mb-3">The Builder Compact</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Zero Tuition. Students Get Paid.
          </h2>
          <div className="gold-divider-center" />
          <p className="text-stone-light text-lg leading-relaxed mt-6 mb-4">
            Fitzherbert University charges no tuition and pays every enrolled student
            a living stipend. Students are not consumers — they are builders of
            sovereign infrastructure whose work has real economic value.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto my-8">
            {[
              { stat: "£0", label: "Tuition" },
              { stat: "£24K+", label: "Annual Stipend" },
              { stat: "2.5×", label: "Performance Max" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-maroon">{s.stat}</p>
                <p className="text-xs tracking-widest uppercase text-stone mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/student-economics"
              className="inline-block bg-maroon text-parchment px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-maroon-light transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/admissions"
              className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </Section>

      {/* ── News ──────────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="News & Announcements"
          title="From the University Record"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.title} className="border-l-2 border-gold pl-6">
              <p className="engraved text-gold/60 text-xs mb-2">{item.date}</p>
              <h3 className="font-serif text-lg font-bold mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Heritage ──────────────────────────────── */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="engraved text-gold mb-3">Heritage & Legacy</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            The Charter of 1783 Endures
          </h2>
          <div className="gold-divider-center" />
          <p className="text-stone-light text-lg leading-relaxed mt-6 mb-8">
            The acceleration of artificial intelligence does not erase the founding
            commitments — academic freedom, separation of powers, transparency, public
            service. It increases their importance. Institutions that endure are those
            that evolve without abandoning their foundations.
          </p>
          <Link
            href="/endowment"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
          >
            Founders Circle &amp; Giving
          </Link>
        </div>
      </Section>
    </>
  );
}
