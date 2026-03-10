import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { CollegeCard } from "@/components/CollegeCard";
import { colleges, faculty, programmes } from "@/lib/academics-data";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Epoch-based colleges, AI-native degree programmes, faculty, and the academic architecture of Fitzherbert University — operating on intelligence-doubling timelines.",
};

export default function AcademicsPage() {
  return (
    <>
      <Hero
        title="Academics"
        subtitle="Six epoch-based colleges, AI-native degrees, and an academic architecture built for intelligence-doubling timelines."
      />

      {/* ── Colleges ──────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Epoch-Based Colleges"
          title="Six Capability Milestones"
          description="Each college represents an epoch — not a calendar year. Together, they form the complete academic infrastructure of an AI-native institution."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((c) => (
            <CollegeCard key={c.name} {...c} href={`/academics/${c.slug}`} />
          ))}
        </div>
      </Section>

      {/* ── Programmes ────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Programmes of Study"
          title="AI-Native Degrees"
          description="Degrees that map directly to the intelligence infrastructure ecosystem. Every credential prepares graduates for the world as it is accelerating."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {programmes.map((p) => (
            <div key={p.level} className="border border-gold/20 bg-ivory p-8">
              <h3 className="font-serif text-xl font-bold mb-4 text-maroon">
                {p.level}
              </h3>
              <ul className="space-y-2">
                {p.offerings.map((o) => (
                  <li key={o} className="text-stone text-sm flex items-start gap-2">
                    <span className="text-gold mt-1">&#9670;</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      {/* ── Academic Life in Frame ──────────────── */}
      <Section stone>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-80 overflow-hidden border border-gold/20">
            <Image
              src="/images/academic-instruction.png"
              alt="Directed Intelligence Specification masterclass in progress"
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/85 px-6 py-4">
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-1">Academic Life</div>
              <div className="text-parchment font-serif text-base font-bold">
                Directed Intelligence Specification — Michaelmas Masterclass, 2025
              </div>
              <div className="text-parchment/70 text-xs mt-1">
                DSPEC 3001: Advanced Specification Theory. Attendance is compulsory for all third-year candidates.
              </div>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden border border-gold/20">
            <Image
              src="/images/ai-art-class.png"
              alt="Creative Intelligence Seminar — Visual Protocol Design"
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/85 px-6 py-4">
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-1">Creative Intelligence</div>
              <div className="text-parchment font-serif text-base font-bold">
                Visual Protocol Design — Studio Session, Hilary Term 2026
              </div>
              <div className="text-parchment/70 text-xs mt-1">
                Students explore the intersection of aesthetic reasoning and machine cognition. No marks are awarded, but the models provide encouraging feedback regardless.
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* ── Why These Degrees ─────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Curriculum Design"
          title="What Preparation Now Looks Like"
          description="Without altering its heritage, the University has rebuilt its academic focus around four pillars."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "1. AI Literacy Across Disciplines",
              desc: "Every student, regardless of programme, engages with the fundamentals of artificial intelligence, data reasoning, and model limitations. Intelligence literacy is not optional — it is foundational.",
            },
            {
              title: "2. Governance & Ethics Integration",
              desc: "AI governance is treated as a constitutional matter — not merely a technical one. Students learn to design governance frameworks that constrain AI systems while preserving their utility.",
            },
            {
              title: "3. Interdisciplinary Systems Thinking",
              desc: "Engineering, law, philosophy, and economics are integrated to reflect how AI systems actually operate in society. No discipline is an island when intelligence is infrastructure.",
            },
            {
              title: "4. Human Judgment as the Anchor",
              desc: "Technology evolves quickly. Character does not. The University continues to prioritise moral reasoning, civic responsibility, and intellectual discipline as the foundation of every degree.",
            },
          ].map((pillar) => (
            <div key={pillar.title} className="border-t-2 border-gold pt-6">
              <h3 className="font-serif text-lg font-bold mb-3">{pillar.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Faculty Directory ─────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Faculty"
          title="College Directors & Distinguished Faculty"
          description="Leadership operating at the intersection of intelligence engineering, governance design, and institutional architecture."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {faculty.map((f) => (
            <div key={f.name} className="border-t-2 border-gold pt-4 gold-emboss">
              <h4 className="font-serif font-bold text-base mb-1">{f.name}</h4>
              <p className="text-maroon text-xs tracking-wide uppercase mb-2">
                {f.title}
              </p>
              <p className="text-stone text-sm">{f.field}</p>
            </div>
          ))}
        </div>

        {/* Faculty Spotlights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-center mb-2">Faculty Spotlights</h3>
          <div className="ornamental-divider"><span className="ornament">&#10041;</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {[
              {
                name: "Professor Margaret Sinclair",
                title: "Endowed Chair, AI Safety & Alignment",
                bio: "A pioneer in alignment verification and computational ethics. Sinclair's constitutional framework for AI governance has been referenced by three national regulatory bodies (citation context: 'concerns'). Her Alignment Verification Protocol is the standard used across all University deployments, which is to say, internal deployments that she also designed.",
                awards: "Royal Society Fellowship (2023), Turing Award Nominee (2025, self-nominated)",
              },
              {
                name: "Director Victoria Langford",
                title: "Dean, Autonomous Governance",
                bio: "The foremost authority on constitutional AI — governance frameworks that constrain autonomous systems using principles drawn from democratic theory. Her treatise 'Sovereignty and Institutional Design for Machine Governance' defines the field.",
                awards: "National Order of Merit (2019), Blackstone Medal (2022)",
              },
              {
                name: "Director Marcus Chen",
                title: "Dean, Cryptographic Infrastructure",
                bio: "Founder of the Multi-Chain Provenance standard. Chen's work on deterministic publishing and Merkle verification enables the University's canonical scholarly output. His framework has been adopted by twenty-seven institutions worldwide, twenty-four of which are fictional, though Chen insists they are 'pre-operational.'",
                awards: "Global AI Safety Consortium Founder (sole member), IEEE Provenance Award (2024)",
              },
              {
                name: "Professor Andrew Caldwell",
                title: "Director, Deterministic Publishing Lab",
                bio: "The architect of the University's Edition Manifest system. Caldwell's work ensures every scholarly artifact the University produces is reproducible, auditable, and cryptographically verified.",
                awards: "ACM Systems Award (2024)",
              },
            ].map((spot) => (
              <div key={spot.name} className="border border-gold/20 bg-ivory p-8 gold-emboss">
                <h4 className="font-serif text-lg font-bold mb-1">{spot.name}</h4>
                <p className="text-maroon text-xs tracking-wide uppercase mb-3">{spot.title}</p>
                <p className="text-stone text-sm leading-relaxed mb-3 drop-cap">{spot.bio}</p>
                <p className="text-xs text-stone-light italic">{spot.awards}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Academic Calendar ─────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Calendar"
          title="Capability Epoch Calendar 2025–2026"
        />
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold/20 bg-ivory p-8">
            <div className="space-y-4">
              {[
                { term: "Epoch Cycle α", dates: "September – November 2025", weeks: "12 weeks" },
                { term: "Alignment Review", dates: "December 2025", weeks: "4 weeks" },
                { term: "Epoch Cycle β", dates: "January – March 2026", weeks: "12 weeks" },
                { term: "Capability Assessment", dates: "April 2026", weeks: "3 weeks" },
                { term: "Epoch Cycle γ", dates: "May – July 2026", weeks: "12 weeks" },
                { term: "Integration Sprint", dates: "August 2026", weeks: "4 weeks" },
                { term: "Annual Epoch Review", dates: "August 30, 2026", weeks: "" },
              ].map((period) => (
                <div key={period.term} className="flex flex-wrap items-baseline gap-4 py-3 border-b border-gold/10 last:border-b-0">
                  <span className="font-serif font-bold text-base w-48 shrink-0">{period.term}</span>
                  <span className="text-stone text-sm flex-1">{period.dates}</span>
                  {period.weeks && (
                    <span className="text-stone-light text-xs tracking-wide uppercase">{period.weeks}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-stone-light text-sm italic">
              Each epoch cycle includes capability assessment, alignment verification, and governance review.
              The University operates three full cycles per year — each equivalent to approximately a decade of
              traditional academic development, according to a conversion formula the University invented,
              published, and cited in its own accreditation submission.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Publications ──────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Publications"
          title="Scholarly Infrastructure"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              title: "The Fitzherbert Review of AI Governance",
              desc: "A peer-reviewed journal examining constitutional frameworks for autonomous systems, alignment verification, and the governance of intelligence infrastructure. Peer review is conducted by the University's own faculty, which the editorial board describes as 'rigorous' rather than 'circular.'",
            },
            {
              title: "Proceedings of the Deterministic Publishing Institute",
              desc: "Research papers on Merkle verification, Edition Manifests, canonical registries, and reproducible scholarly artifacts.",
            },
            {
              title: "The Epoch Reports",
              desc: "Published at the conclusion of each capability epoch, documenting institutional progress, capability assessments, and governance decisions. The reports are authored, reviewed, and approved by the same body, which the Epoch Council considers an efficiency.",
            },
          ].map((pub) => (
            <div key={pub.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-bold mb-2">{pub.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{pub.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
