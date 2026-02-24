import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Athletics & Wellness",
  description:
    "Physical resilience and cognitive performance — how Fitzherbert University supports the health and wellbeing of students operating on intelligence-doubling timelines.",
};

export default function AthleticsPage() {
  return (
    <>
      <Hero
        title="Athletics & Wellness"
        subtitle="Physical resilience as cognitive infrastructure — performance beyond the screen."
      />

      {/* ── Philosophy ────────────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Philosophy"
            title="The Body as Infrastructure"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              An AI-native institution demands more of its students than traditional universities
              ever did. The pace of capability epochs, the cognitive load of interdisciplinary
              systems thinking, and the intensity of alignment-verified research require physical
              and mental resilience that cannot be taken for granted.
            </p>
            <p>
              Fitzherbert University treats physical wellness not as a recreational amenity but
              as cognitive infrastructure. Students who maintain physical resilience perform
              better under the acceleration that defines institutional life. The University
              invests in athletics and wellness accordingly.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Programmes ────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Programmes"
          title="Athletics & Wellness Offerings"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Competitive Athletics",
              items: [
                "Rowing (Men's & Women's VIII)",
                "Cross-Country Running",
                "Fencing",
                "Tennis",
                "Cricket",
                "Inter-University Championship League",
              ],
            },
            {
              title: "Wellness & Performance",
              items: [
                "Cognitive Performance Training",
                "Stress Resilience Programmes",
                "Sleep Architecture Coaching",
                "Nutrition & Performance Planning",
                "Mindfulness & Focus Training",
                "Epoch-Cycle Recovery Protocols",
              ],
            },
            {
              title: "Recreational & Social",
              items: [
                "Running & Walking Groups",
                "Yoga & Movement Classes",
                "Swimming",
                "Cycling Club",
                "Inter-College Sports Leagues",
                "Weekend Outdoor Expeditions",
              ],
            },
          ].map((category) => (
            <div key={category.title} className="border border-gold/20 bg-ivory p-8">
              <h3 className="font-serif text-lg font-bold mb-4 text-maroon">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-stone text-sm flex items-start gap-2">
                    <span className="text-gold mt-1">&#9670;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Facilities ────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Facilities"
          title="Wellness Infrastructure"
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "The Fitzherbert Sports Centre",
              desc: "Multi-purpose sports facility with gymnasium, indoor courts, and performance training spaces. Designed for both competitive athletics and daily wellness routines.",
            },
            {
              title: "The Boathouse",
              desc: "Home of the University's rowing programme since 1847. Located on the river with training facilities and equipment for the Men's and Women's VIIIs.",
            },
            {
              title: "Cognitive Performance Lab",
              desc: "A specialist facility for cognitive performance training — sleep architecture analysis, focus optimisation, and stress resilience programmes designed for high-intensity academic work.",
            },
            {
              title: "Outdoor Grounds",
              desc: "Playing fields, running trails, and garden spaces within the campus grounds. Maintained as green infrastructure for both recreation and recovery.",
            },
          ].map((f) => (
            <div key={f.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Notable Achievements ──────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Heritage"
          title="Athletic Tradition"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              {
                year: "1847",
                event: "University Boat Club founded — one of the oldest in the country",
              },
              {
                year: "1923",
                event: "First inter-university championship victory (rowing)",
              },
              {
                year: "1968",
                event: "Women's athletics programme established",
              },
              {
                year: "2019",
                event: "Sports Centre refurbished with modern performance facilities",
              },
              {
                year: "2025",
                event: "Cognitive Performance Lab opened with rechartering; Epoch-Cycle Recovery Protocols introduced",
              },
            ].map((achievement) => (
              <div key={achievement.year} className="flex items-start gap-6 border-b border-gold/10 pb-4">
                <span className="font-serif text-lg font-bold text-maroon w-20 flex-shrink-0">
                  {achievement.year}
                </span>
                <p className="text-stone text-sm leading-relaxed">{achievement.event}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
