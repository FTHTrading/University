import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Admissions — Veritas per Disciplina",
  description:
    "Education in the Age of Accelerated Intelligence. How Fitzherbert University prepares students for a world where intelligence is doubling every twelve to eighteen months.",
};

export default function AdmissionsPage() {
  return (
    <>
      <Hero
        title="Admissions"
        subtitle="Veritas per Disciplina — Education in the Age of Accelerated Intelligence"
      />

      {/* ── Opening Narrative ─────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="A Message to Prospective Students & Their Families"
            title="Why It Took This Long"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              For over two hundred years, Fitzherbert University educated students within a system
              that treated knowledge as stable, disciplines as bounded, and institutional change
              as slow. That model served well — not because it was perfect, but because nobody
              had yet invented a machine that could make the entire curriculum obsolete during
              freshers' week.
            </p>
            <p>
              That condition no longer holds.
            </p>
            <p>
              Artificial intelligence has compressed what used to take a generation into what now
              takes a fiscal quarter. The gap between what is taught and what is needed has widened
              to the point where most universities are, in effect, training students for jobs that
              disappeared while the prospectus was being printed. This is not a crisis of
              curriculum. It is a structural mismatch between the speed of institutional life and
              the speed of the world students are entering.
            </p>
            <p>
              Fitzherbert University recognised this — and acted. Not by abandoning its principles,
              but by returning to the oldest one: <em>Veritas per Disciplina</em>. Truth through
              Discipline. The University asked a simple question: what does education mean when the
              thing being educated — human intelligence — is no longer the fastest form of
              intelligence in the room? The answer, it turns out, involves a great deal of
              blockchain.
            </p>
          </div>
        </div>
      </Section>

      {/* ── What Changed ──────────────────────────── */}
      <Section alternate stone>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Acceleration"
            title="What the Next Five Years Will Bring"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              By the time a student beginning their degree in 2025 reaches graduation, the
              capabilities of AI systems will have doubled at least three times. The jobs, tools,
              and expectations they will face will be materially different from anything that
              existed when they enrolled.
            </p>
            <p>
              This is not speculation. It is the observable trend of capability growth across
              foundation models, autonomous agents, and infrastructure intelligence. The
              University does not predict the future. It prepares for the one that is already
              arriving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "AI Capability",
                rate: "Doubles every 3–6 months",
                desc: "Foundation models, autonomous agents, and coding systems are improving faster than any technology since the microprocessor.",
              },
              {
                title: "Institutional Adaptation",
                rate: "Doubles every 12–18 months",
                desc: "University structures, governance models, and assessment frameworks now operate on epoch-based cycles rather than calendar years.",
              },
              {
                title: "Workforce Transformation",
                rate: "Restructures every 24 months",
                desc: "Roles that did not exist two years ago now form the majority of hiring in intelligence infrastructure.",
              },
              {
                title: "Knowledge Production",
                rate: "Continuous",
                desc: "Scholarly output is now deterministic, cryptographically verified, and published in real-time through canonical registries.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 bg-ivory p-6">
                <h4 className="font-serif text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-maroon text-sm font-semibold mb-3">{item.rate}</p>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── AI-Native Education ───────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Response"
            title="What Preparation Now Looks Like"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              Without altering its heritage, Fitzherbert University has rebuilt its academic
              focus around four pillars:
            </p>
          </div>

          <div className="space-y-8 mt-8">
            {[
              {
                num: "I",
                title: "AI Literacy Across Disciplines",
                text: "Every student, regardless of programme, engages with the fundamentals of artificial intelligence, data reasoning, and model limitations. This is not a technical elective. It is a condition of informed citizenship. A law student who cannot evaluate an AI-generated brief is as unprepared as an engineering student who cannot read a blueprint.",
              },
              {
                num: "II",
                title: "Governance & Ethics Integration",
                text: "AI governance is treated as a constitutional matter — not merely a technical one. Students learn not just how to use AI, but how to constrain it, audit it, and design systems that remain accountable to human judgment. This is the institutional commitment that separates a university from a training programme.",
              },
              {
                num: "III",
                title: "Interdisciplinary Systems Thinking",
                text: "Engineering, contract law, moral philosophy, political economy, and data science are integrated to reflect how AI systems actually operate in the world. The era of isolated disciplines ended when intelligence became infrastructure.",
              },
              {
                num: "IV",
                title: "Human Judgment as the Anchor",
                text: "Technology evolves quickly. Character does not. The University continues to prioritise moral reasoning, civic responsibility, and intellectual discipline — not because these are nostalgic, but because they are the only things that do not depreciate when models improve.",
              },
            ].map((pillar) => (
              <div key={pillar.num} className="flex gap-6 items-start border-l-2 border-gold pl-6">
                <span className="font-serif text-3xl font-bold text-gold/40 flex-shrink-0">{pillar.num}</span>
                <div>
                  <h3 className="font-serif text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── The Builder Compact ─────────────────── */}
      <Section alternate stone>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Builder Compact"
            title="You Won't Pay Tuition. You'll Be Paid to Build."
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Every university in the world asks you the same question: how will you pay?
              Fitzherbert University asks a different one: <strong>what will you build?</strong>
            </p>
            <p>
              No student at Fitzherbert University pays tuition. Every enrolled student receives
              a living stipend from the day they matriculate — because at this institution,
              students are not consumers. They are builders of sovereign infrastructure. The
              protocols they design, the governance frameworks they test, the research they
              publish through the Legitimacy Engine — all of it has real economic value. Or
              will have. The University is confident. The students are less certain but
              appreciate the £24,000.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { value: "£0", label: "Tuition", desc: "Zero. Not reduced. Not deferred. Zero. The Bursar wept." },
              { value: "£24K+", label: "Annual Stipend", desc: "Living stipend for every enrolled student. Conditions apply. The conditions are: exist." },
              { value: "2.5×", label: "Performance Multiplier", desc: "Up to £60K/yr for exceptional builders. 'Exceptional' is defined by a committee that has not yet convened." },
            ].map((s) => (
              <div key={s.label} className="stat-card text-center">
                <div className="font-serif text-2xl font-bold text-maroon">{s.value}</div>
                <div className="text-stone text-xs mt-2 tracking-wide uppercase">{s.label}</div>
                <p className="text-stone text-xs mt-2">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/University/student-economics/"
              className="inline-block border border-gold text-gold font-serif text-sm px-8 py-3 tracking-wide hover:bg-gold/10 transition-colors"
            >
              How Student Economics Works →
            </a>
          </div>
        </div>
      </Section>

      {/* ── The No-Debt Model ──────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The No-Debt Model"
            title="What Zero Tuition Actually Means"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Zero tuition does not mean &ldquo;free.&rdquo; It means the cost of your education
              is funded by the infrastructure you help build — not extracted from your future
              earnings. The University&rsquo;s revenue comes from protocol licensing, cohort
              sponsorships, Athletics Intelligence subscriptions, and commissioned studio
              projects. Students are builders, not revenue sources.
            </p>
          </div>

          <div className="space-y-6 mt-8">
            {[
              {
                title: "Eligibility",
                text: "Every admitted student qualifies for zero tuition and the living stipend. There is no separate financial aid application. No means testing. No scholarship competition. Admission is the qualification.",
              },
              {
                title: "Expectations",
                text: "Students are expected to actively contribute to institutional projects throughout their programme. This is not optional community service — it is the economic mechanism that makes zero tuition possible. Building is learning. Learning generates revenue. Revenue funds stipends.",
              },
              {
                title: "Stipend Rules",
                text: "The base stipend of £24,000 per year is paid monthly from the day of matriculation. Performance multipliers (up to 2.5×) are assessed quarterly based on verified contribution to institutional projects. All stipend allocation follows the constitutional distribution rule.",
              },
              {
                title: "What This Replaces",
                text: "No tuition fees. No student loans. No deferred payment schemes. No graduate tax. No debt of any kind. When you leave Fitzherbert University, you leave with a verified portfolio, revenue participation rights, and zero financial burden from your education.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-gold pl-6">
                <h4 className="font-serif text-base font-bold mb-2">{item.title}</h4>
                <p className="text-stone text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-gold bg-ivory p-8 text-center">
            <p className="text-stone text-sm leading-relaxed max-w-2xl mx-auto">
              <strong>The question is not &ldquo;can you afford this?&rdquo;</strong> The question
              is: <strong>what will you build?</strong> The University invests in students who
              build systems with compounding value. The economics are structural — not aspirational.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Why Families Should Care ──────────────── */}
      <Section alternate>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="For Families"
            title="Why This Matters"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Choosing a university has always been a decision about the future. The difference
              now is that the future arrives faster than it used to. Families today face an
              additional burden: the prospect of six-figure debt for an education that may not
              prepare their child for a world that changes quarterly.
            </p>
            <p>
              Fitzherbert University eliminates that burden entirely. No tuition. No fees. No
              debt. Your child will be paid to learn — not as charity, but as recognition that
              the work of learning at this institution <em>is</em> the work of building
              infrastructure with real economic value.
            </p>
            <p>
              The same values that sustained the institution for two centuries — rigour, integrity,
              discipline — now power an academic architecture built for acceleration. Your child
              will graduate with zero debt, a portfolio of verified credentials, and ongoing
              revenue participation from the infrastructure they helped build.
            </p>
          </div>

          <blockquote className="border-l-4 border-gold bg-ivory/50 p-8 mt-8 italic">
            <p className="text-lg text-maroon font-serif leading-relaxed">
              &ldquo;We did not build a new university. We rechartered the one that was already here.
              The charter of 1783 asked what truth demands. We asked the same question — and found
              that truth now demands speed, verification, and the courage to invert the economics
              of education itself.&rdquo;
            </p>
            <cite className="block mt-4 text-stone text-sm not-italic tracking-wide uppercase">
              — Office of the Chancellor, 2025
            </cite>
          </blockquote>
        </div>
      </Section>

      {/* ── How to Apply ──────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Application Process"
          title="Join the First Epoch"
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Statement of Intent",
                desc: "Submit a written statement (1,500 words) explaining how you understand the relationship between intelligence acceleration and the discipline you wish to study.",
              },
              {
                step: "02",
                title: "Systems Assessment",
                desc: "Complete a structured assessment evaluating interdisciplinary reasoning, ethical judgment, and AI literacy. This replaces standardised test scores.",
              },
              {
                step: "03",
                title: "Alignment Interview",
                desc: "A conversation with faculty from your chosen college — not about grades, but about how you think about problems that don't yet have answers.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center border border-gold/20 bg-ivory p-8">
                <span className="font-serif text-4xl font-bold text-gold/30">{s.step}</span>
                <h3 className="font-serif text-lg font-bold mt-3 mb-3">{s.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-stone text-sm">
              Applications are reviewed on a rolling basis aligned with capability epoch cycles.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="mailto:admissions@fitzherbert.edu"
                className="inline-block bg-maroon text-white font-serif text-sm px-8 py-3 tracking-wide hover:bg-maroon/90 transition-colors"
              >
                Begin Application
              </a>
              <a
                href="/University/academics/"
                className="inline-block border border-gold text-gold font-serif text-sm px-8 py-3 tracking-wide hover:bg-gold/10 transition-colors"
              >
                View Programmes
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Key Dates ─────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Key Dates"
          title="2025–2026 Admissions Calendar"
        />
        <div className="max-w-2xl mx-auto border border-gold/20 bg-ivory p-8">
          <div className="space-y-4">
            {[
              { date: "1 July 2025", event: "Applications open for Epoch Cycle α" },
              { date: "15 September 2025", event: "Priority deadline (guaranteed interview)" },
              { date: "31 October 2025", event: "Standard deadline" },
              { date: "15 December 2025", event: "Epoch Cycle α decisions released" },
              { date: "1 January 2026", event: "Applications open for Epoch Cycle β" },
              { date: "15 March 2026", event: "Epoch Cycle β priority deadline" },
              { date: "Rolling", event: "Transfer and mid-cycle applications considered continuously" },
            ].map((d) => (
              <div key={d.event} className="flex flex-wrap items-baseline gap-4 py-2 border-b border-gold/10 last:border-b-0">
                <span className="font-serif font-bold text-sm w-40 flex-shrink-0 text-maroon">{d.date}</span>
                <span className="text-stone text-sm">{d.event}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
