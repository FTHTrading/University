import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Athletics",
  description:
    "Varsity athletics, esports division, facilities, and competitive excellence at FTHTrading University.",
};

const varsityTeams = [
  { sport: "Rowing", record: "Conference Champions 2024, 2025", coach: "Coach William Strand" },
  { sport: "Fencing", record: "National Quarterfinalists 2025", coach: "Coach Helena Voss" },
  { sport: "Lacrosse", record: "Conference Semifinalists 2025", coach: "Coach Daniel Mercer" },
  { sport: "Rugby", record: "Ivy Division Champions 2023", coach: "Coach Ian MacTavish" },
  { sport: "Tennis", record: "Regional Champions 2025", coach: "Coach Priya Nair" },
  { sport: "Cross Country", record: "All-Conference Honours 2024", coach: "Coach Robert Thayer" },
  { sport: "Swimming & Diving", record: "Conference Champions 2025", coach: "Coach Sarah Lindhurst" },
  { sport: "Track & Field", record: "National Qualifiers 2025", coach: "Coach Marcus Bennett" },
];

const esportsTeams = [
  { title: "Valorant", division: "Collegiate Major Division", result: "National Semifinalists 2025" },
  { title: "League of Legends", division: "Ivy Esports Conference", result: "Conference Champions 2025" },
  { title: "Counter-Strike 2", division: "Collegiate Premier League", result: "Quarterfinalists 2025" },
  { title: "Rocket League", division: "Collegiate Rocket League", result: "Regional Champions 2025" },
];

const facilities = [
  {
    name: "Blackwell Athletic Centre",
    description:
      "A 120,000 square-foot complex housing Olympic-standard swimming facilities, indoor track, strength and conditioning laboratories, and sports medicine clinics.",
  },
  {
    name: "Harrington Boathouse",
    description:
      "Situated on the University's riverfront, the boathouse serves the rowing programme with eight-person shells, ergometric training bays, and video analysis suites.",
  },
  {
    name: "Pemberton Field",
    description:
      "The University's primary outdoor athletics venue, featuring a championship-grade pitch for rugby and lacrosse, a 400-metre track, and seating for 8,000 spectators.",
  },
  {
    name: "Digital Strategy Arena",
    description:
      "A purpose-built esports facility with 48 competition stations, broadcast-quality streaming infrastructure, and an analytics laboratory for performance science.",
  },
];

export default function AthleticsPage() {
  return (
    <>
      <Hero
        title="Athletics & Esports"
        subtitle="Competitive excellence grounded in the same values of preparation, strategy, and conviction that define our academic mission."
      />

      {/* ── Varsity Teams ─────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Varsity Athletics"
          title="Twenty-Four Programmes of Distinction"
          description="Our student-athletes compete at the highest levels of intercollegiate sport while upholding the University's standards of academic rigour and personal integrity."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {varsityTeams.map((team) => (
            <div
              key={team.sport}
              className="border border-gold/20 bg-ivory p-6 hover:border-gold/40 transition-colors"
            >
              <h3 className="font-serif text-lg font-bold mb-1">{team.sport}</h3>
              <p className="text-xs text-stone-light italic mb-3">{team.coach}</p>
              <p className="text-sm text-maroon font-serif">{team.record}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Facilities ────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Facilities"
          title="World-Class Venues"
          description="Facilities designed to support athletic excellence, scientific training, and the competitive spirit that defines FTHTrading athletics."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {facilities.map((f) => (
            <div key={f.name} className="border-t-2 border-gold pt-6">
              <h3 className="font-serif text-xl font-bold mb-3">{f.name}</h3>
              <p className="text-stone text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Season Reports ────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Season Reports"
          title="2024–25 Competitive Summary"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone">
            The 2024–25 athletic season marked one of the most successful campaigns in
            the University&apos;s history. Five programmes claimed conference championships,
            three advanced to national competition, and the University achieved its
            highest-ever composite Academic All-Conference rating — reflecting the
            institution&apos;s commitment to the complete development of each student-athlete.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center mt-8">
            {[
              { stat: "5", label: "Conference Titles" },
              { stat: "3.71", label: "Mean Student-Athlete GPA" },
              { stat: "92%", label: "Graduation Rate" },
            ].map((s) => (
              <div key={s.label} className="border border-gold/20 bg-ivory p-6">
                <p className="font-serif text-3xl font-bold text-maroon">{s.stat}</p>
                <p className="text-xs tracking-widest uppercase text-stone-light mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Strategy & Analytics ──────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Strategy & Analytics"
          title="The Science of Competition"
          description="Performance analytics, biomechanics research, and strategic intelligence — bringing academic rigour to athletic preparation."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone">
            The Department of Athletic Science integrates data analytics, sport
            psychology, and nutritional science into every competitive programme. Each
            team benefits from individualised performance profiles, opponent analysis
            dashboards, and evidence-based training periodisation managed by a dedicated
            staff of sport scientists.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            Our Sports Intelligence Laboratory, a collaboration between the School of
            Engineering and the Athletics Department, develops proprietary tracking
            systems and predictive models used to optimise in-game decision-making
            and long-term athlete development.
          </p>
        </div>
      </Section>

      {/* ── Esports ───────────────────────────────── */}
      <Section stone>
        <SectionHeader
          eyebrow="Esports Division"
          title="Digital Competition, Academic Rigour"
          description="The University's esports programme brings the same standards of strategic preparation, data-driven analysis, and disciplined teamwork to competitive gaming."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {esportsTeams.map((team) => (
            <div
              key={team.title}
              className="border border-gold/20 bg-navy p-6 text-parchment"
            >
              <h3 className="font-serif text-lg font-bold mb-1 text-gold">
                {team.title}
              </h3>
              <p className="text-xs text-parchment/50 mb-3">{team.division}</p>
              <p className="text-sm text-parchment/80">{team.result}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-lg leading-relaxed text-stone text-center">
            Esports athletes receive the same academic support, performance coaching,
            and institutional recognition as their varsity counterparts — reflecting the
            University&apos;s belief that competitive excellence takes many forms.
          </p>
        </div>
      </Section>
    </>
  );
}
