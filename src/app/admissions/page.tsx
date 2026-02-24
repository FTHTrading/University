import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Undergraduate, graduate, and international admissions at FTHTrading University. Scholarships, financial aid, and the application process.",
};

const admissionsStats = [
  { stat: "4.8%", label: "Acceptance Rate" },
  { stat: "1,580", label: "Entering Class Size" },
  { stat: "98%", label: "Financial Aid Recipients" },
  { stat: "72", label: "Countries Represented" },
];

const scholarships = [
  {
    name: "The Chancellor's Scholarship",
    description:
      "Full tuition, room, and board for four years, awarded to three entering students of extraordinary academic distinction and demonstrated moral leadership.",
    value: "Full Cost of Attendance",
  },
  {
    name: "The Founders' Fellowship",
    description:
      "A merit-based award covering tuition and providing a research stipend, honouring the legacy of the University's original benefactors.",
    value: "Full Tuition + Stipend",
  },
  {
    name: "Heritage Scholars Programme",
    description:
      "Support for students from historically underrepresented communities, including tuition assistance, mentoring, and priority access to research opportunities.",
    value: "Variable, up to Full Tuition",
  },
  {
    name: "International Scholars Award",
    description:
      "Competitive awards for international applicants demonstrating academic excellence, cultural contribution, and the potential for cross-border scholarly collaboration.",
    value: "Partial to Full Tuition",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <Hero
        title="Admissions"
        subtitle="FTHTrading University seeks students of exceptional intellect, moral seriousness, and scholarly ambition."
      />

      {/* ── Overview ──────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Join Our Community"
          title="The Application Process"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            Admission to FTHTrading University is both selective and holistic. We evaluate
            each applicant as a whole person — considering academic achievement,
            intellectual curiosity, strength of character, contributions to community,
            and the potential to thrive within our tradition of rigorous scholarship.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            We practise need-blind admissions and meet the full demonstrated financial
            need of every admitted student. No qualified candidate should be deterred from
            applying by concerns of cost.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-14 max-w-4xl mx-auto">
          {admissionsStats.map((s) => (
            <div key={s.label} className="stat-card">
              <p className="font-serif text-3xl font-bold text-maroon">{s.stat}</p>
              <p className="text-xs tracking-widest uppercase text-stone-light mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Class Profile ─────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Class Profile"
          title="Entering Class of 2029"
          description="A portrait of the most recent cohort admitted to the University."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="border border-gold/20 bg-ivory p-6 text-center">
              <h4 className="text-xs tracking-widest uppercase text-stone-light mb-3">Standardised Tests (Middle 50%)</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-serif text-2xl font-bold text-maroon">1530–1580</p>
                  <p className="text-xs text-stone">SAT Composite</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-maroon">34–36</p>
                  <p className="text-xs text-stone">ACT Composite</p>
                </div>
              </div>
            </div>
            <div className="border border-gold/20 bg-ivory p-6 text-center">
              <h4 className="text-xs tracking-widest uppercase text-stone-light mb-3">Academic Record</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-serif text-2xl font-bold text-maroon">96%</p>
                  <p className="text-xs text-stone">Top 10% of Secondary School</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-maroon">3.97</p>
                  <p className="text-xs text-stone">Median Unweighted GPA</p>
                </div>
              </div>
            </div>
            <div className="border border-gold/20 bg-ivory p-6 text-center">
              <h4 className="text-xs tracking-widest uppercase text-stone-light mb-3">Class Composition</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-serif text-2xl font-bold text-maroon">52 / 48</p>
                  <p className="text-xs text-stone">Female / Male (%)</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-maroon">18%</p>
                  <p className="text-xs text-stone">International Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic diversity */}
          <div className="border border-gold/20 bg-ivory p-6">
            <h4 className="font-serif font-bold text-center mb-4">Geographic Distribution</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              {[
                { region: "Northeast", pct: "28%" },
                { region: "Southeast", pct: "18%" },
                { region: "Midwest", pct: "14%" },
                { region: "West", pct: "16%" },
                { region: "Southwest", pct: "6%" },
                { region: "International", pct: "18%" },
              ].map((r) => (
                <div key={r.region}>
                  <p className="font-serif font-bold text-maroon">{r.pct}</p>
                  <p className="text-stone-light text-xs">{r.region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Undergraduate ─────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Undergraduate"
          title="Bachelor's Programmes"
          description="Four-year programmes in the liberal arts, sciences, and engineering — grounded in the College of Arts & Sciences and extending across all six schools."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone">
            Undergraduate students at FTHTrading University receive an education that
            is simultaneously broad and deep. The core curriculum — spanning literature,
            philosophy, mathematics, natural science, and history — ensures that every
            graduate possesses the foundations of a well-ordered mind, while the major
            concentration allows sustained engagement with a chosen field.
          </p>
          <div className="border border-gold/30 bg-ivory p-8 mt-6">
            <h3 className="font-serif text-lg font-bold mb-4">Application Timeline</h3>
            <div className="space-y-3">
              {[
                { date: "1 September", event: "Application opens" },
                { date: "1 November", event: "Early Decision deadline" },
                { date: "15 December", event: "Early Decision notification" },
                { date: "1 January", event: "Regular Decision deadline" },
                { date: "1 April", event: "Regular Decision notification" },
                { date: "1 May", event: "Enrollment deposit deadline" },
              ].map((d) => (
                <div key={d.event} className="flex gap-4 text-sm">
                  <span className="text-maroon font-serif font-bold w-32 flex-shrink-0">
                    {d.date}
                  </span>
                  <span className="text-stone">{d.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Graduate ──────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Graduate"
          title="Master's & Doctoral Programmes"
          description="Advanced study for scholars committed to pushing the boundaries of their disciplines."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone">
            Graduate admissions are managed by each college independently, with
            applications evaluated by faculty committees within the relevant department.
            Doctoral candidates are expected to demonstrate not only mastery of their
            field but the intellectual creativity and perseverance required to produce
            original contributions to knowledge.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            All doctoral students receive full funding — tuition remission plus a
            living stipend — for the duration of their programme. Master&apos;s candidates
            are eligible for a range of merit-based and need-based awards.
          </p>
        </div>
      </Section>

      {/* ── International ─────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="International"
          title="A Global Community of Scholars"
          description="Students from 72 nations enrich the University's intellectual life with diverse perspectives and traditions of inquiry."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone">
            International applicants are evaluated by the same criteria as domestic
            candidates. The University provides comprehensive visa support, orientation
            programming, and ongoing resources through the Office of International
            Scholars. English language proficiency must be demonstrated through recognised
            examinations, though allowances are made for candidates educated in
            English-medium institutions.
          </p>
        </div>
      </Section>

      {/* ── Scholarships ──────────────────────────── */}
      <Section stone>
        <SectionHeader
          eyebrow="Financial Aid & Scholarships"
          title="Investing in Potential"
          description="The University's commitment to access ensures that financial circumstances never prevent a qualified student from attending."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {scholarships.map((s) => (
            <div key={s.name} className="border border-gold/20 bg-ivory p-8 gold-emboss">
              <h3 className="font-serif text-lg font-bold mb-1">{s.name}</h3>
              <p className="text-maroon text-xs tracking-wide uppercase mb-3">
                {s.value}
              </p>
              <p className="text-stone text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Tuition & Cost of Attendance ──────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Cost of Attendance"
          title="Tuition & Fees — Academic Year 2025–26"
        />
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold/20 bg-ivory p-8">
            <div className="space-y-4">
              {[
                { item: "Tuition", amount: "$62,500" },
                { item: "Room & Board", amount: "$19,200" },
                { item: "Student Activity Fee", amount: "$1,450" },
                { item: "Technology & Library Fee", amount: "$1,350" },
                { item: "Health Insurance (waivable)", amount: "$3,200" },
              ].map((c) => (
                <div key={c.item} className="flex justify-between items-center border-b border-gold/10 pb-3">
                  <span className="font-serif text-sm">{c.item}</span>
                  <span className="font-serif font-bold text-maroon">{c.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <span className="font-serif text-base font-bold">Total Estimated Cost</span>
                <span className="font-serif text-xl font-bold text-maroon">$87,700</span>
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-2xl mx-auto text-center">
            <p className="text-stone text-sm leading-relaxed">
              The University meets 100% of demonstrated financial need. The average financial
              aid award for aided students is <strong className="text-maroon">$64,800</strong> per year.
              Families with annual income below $75,000 pay no tuition, fees, room, or board.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────── */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Begin?
          </h2>
          <div className="gold-divider-center" />
          <p className="text-stone-light text-lg leading-relaxed mt-6 mb-10">
            We invite you to take the first step toward joining a community that
            has shaped scholars, statesmen, and pioneers for more than two centuries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-block bg-maroon text-parchment px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-maroon-light transition-colors"
            >
              Start Your Application
            </Link>
            <Link
              href="/about"
              className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
            >
              Plan a Campus Visit
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
