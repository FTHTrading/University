import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "Explore the historic campus of Fitzherbert University — named halls, residential colleges, libraries, and centuries of tradition.",
};

/* ── Named Halls & Landmark Buildings ──────────────── */
const landmarks = [
  {
    name: "Heritage Hall",
    built: "1789",
    style: "Georgian Revival",
    desc: "The ceremonial heart of the University and permanent seat of the Senate. Heritage Hall houses the Great Hall, the Convocation Chamber, and the Chancellor's Lodgings. Its Palladian façade, crowned by the University clock tower, is the most recognized architectural feature of the campus.",
  },
  {
    name: "Ashcroft Hall",
    built: "1812",
    style: "Federal Neoclassical",
    desc: "Home of the College of Arts & Letters. The building's iconic columned portico frames the entrance to the Ashcroft Quadrangle. The Hall houses lecture theatres, the Ashcroft Gallery of Classical Antiquities, and the Department of Philosophy's seminar rooms.",
  },
  {
    name: "Pemberton Library",
    built: "1856",
    style: "Victorian Gothic",
    desc: "The principal research library, holding over 4.2 million volumes, 180,000 rare manuscripts, and the Charters Collection of medieval codices. The Pemberton Reading Room, with its vaulted ceiling and stained-glass clerestory, remains one of the finest academic library spaces in the world.",
  },
  {
    name: "Whitfield Hospital",
    built: "1834",
    style: "Greek Revival",
    desc: "The original teaching hospital founded by the Whitfield bequest. Now the administrative centre of the College of Medicine, it retains the Victorian anatomical theatre and the Whitfield Memorial Chapel.",
  },
  {
    name: "Caldwell Science Tower",
    built: "1962",
    style: "Brutalist Modern",
    desc: "A fourteen-storey research tower housing the Departments of Physics, Chemistry, and Mathematics. Its rooftop observatory is home to the Caldwell 36-inch reflecting telescope, operational since 1968.",
  },
  {
    name: "The Cloisters",
    built: "1801",
    style: "Gothic Revival",
    desc: "Originally the University Chapel's ambulatory, now home to the Department of Music and the University Choir rehearsal hall. The medieval-style stone arches encircle the Founder's Garden, the oldest cultivated space on campus.",
  },
  {
    name: "Armstrong Engineering Works",
    built: "1948",
    style: "Art Deco / Industrial",
    desc: "Built in the post-war expansion to house the School of Engineering and Applied Science. Features the Great Workshop, the wind tunnel facility, and the Armstrong Computational Laboratory.",
  },
  {
    name: "Blackwell Centre for AI & Ethics",
    built: "2022",
    style: "Contemporary Sustainable",
    desc: "The University's newest building, named for Chancellor Blackwell. A BREEAM Outstanding-rated facility with living walls, cross-laminated timber structure, and the AI Governance Laboratory mandated by Charter Amendment VII.",
  },
];

/* ── Residential Colleges ──────────────────────────── */
const colleges = [
  {
    name: "Founder's College",
    founded: "1783",
    motto: "Fides et Fortitudo",
    students: 420,
    head: "Master: Prof. Richard Ellingham",
    desc: "The oldest residential college, established at the University's founding. Known for its formal Hall dinners and the Founder's Day Procession.",
  },
  {
    name: "Pemberton College",
    founded: "1856",
    motto: "Scientia Lux Mundi",
    students: 380,
    head: "Warden: Prof. Anne Weatherley",
    desc: "Founded alongside the Library, Pemberton College has a strong tradition in the humanities and hosts the annual Pemberton Lectures.",
  },
  {
    name: "Whitfield College",
    founded: "1834",
    motto: "Salus Populi",
    students: 350,
    head: "Principal: Dr. James Ochoa",
    desc: "The medical college, closely associated with Whitfield Hospital. Its gardens contain the College's celebrated physic garden of medicinal plants.",
  },
  {
    name: "St. Catherine's College",
    founded: "1891",
    motto: "Industria et Prudentia",
    students: 400,
    head: "President: Dame Helen Marchetti, DBE",
    desc: "Founded for the study of commerce and enterprise. Known for the Catherine's Boat Club and the annual Commerce Dinner in the City.",
  },
  {
    name: "Caldwell College",
    founded: "1962",
    motto: "Per Aspera ad Astra",
    students: 360,
    head: "Provost: Prof. Yuki Tanaka",
    desc: "The science and engineering college, home to the University's most technically accomplished students. Known for its annual Rube Goldberg competition.",
  },
  {
    name: "Blackwell College",
    founded: "2022",
    motto: "Veritas Machinae",
    students: 240,
    head: "Dean: Prof. Margaret Sinclair",
    desc: "The newest college, focused on AI, ethics, and interdisciplinary studies. The first college to be carbon-neutral from inception.",
  },
];

/* ── University Traditions ─────────────────────────── */
const traditions = [
  {
    name: "Matriculation Ceremony",
    when: "Michaelmas Term, Week 1",
    desc: "All new students process through the Founder's Gate in academic dress, sign the Matriculation Register in Heritage Hall, and are formally admitted to the University by the Chancellor.",
  },
  {
    name: "Founder's Day",
    when: "12 October (Charter Day)",
    desc: "A University holiday commemorating the granting of the Charter in 1783. The day includes a procession of the Senate in full academic regalia, the Founder's Day Oration, and a formal dinner in the Great Hall.",
  },
  {
    name: "May Morning Hymn",
    when: "1 May, 6:00 AM",
    desc: "At dawn on the first of May, the University Choir sings the Latin Hymn to Spring from the clock tower of Heritage Hall. The entire campus falls silent for the performance.",
  },
  {
    name: "Torpids & Eights Week",
    when: "Hilary & Trinity Terms",
    desc: "The inter-college rowing regattas on the University's river, a tradition dating to 1812. Colleges compete in bumps racing format over four days, with celebrations on the college barges.",
  },
  {
    name: "The Pemberton Lecture",
    when: "Trinity Term, Week 5",
    desc: "An annual public lecture by a distinguished scholar, endowed in 1860. Past lecturers include Nobel laureates, heads of state, and pioneers of scientific thought.",
  },
  {
    name: "Gaudy Night",
    when: "Long Vacation, September",
    desc: "An annual formal reunion dinner for alumni of each residential college, held in rotation. The evening includes a procession, Latin grace, and speeches by distinguished graduates.",
  },
  {
    name: "Encaenia (Degree Ceremony)",
    when: "Commencement, Week 2",
    desc: "The conferral of degrees in a ceremony conducted in Latin by the Chancellor. Graduands are presented by their college heads and admitted to their degrees with the traditional formula.",
  },
];

export default function CampusPage() {
  return (
    <>
      <Hero
        title="Campus"
        subtitle="A living canvas of architectural heritage, scholarly tradition, and academic community — from Georgian quadrangles to 21st-century laboratories."
      />

      {/* ── Overview ──────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="The University Estate"
          title="A Campus Shaped by Centuries"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            The campus of Fitzherbert University extends across 340 acres of
            landscaped grounds, courtyards, and formal gardens. From the Georgian
            symmetry of Heritage Hall to the sustainable timber-and-glass forms
            of the Blackwell Centre, every generation of scholars has left its
            mark upon the built environment. The University Estate comprises
            forty-two principal buildings, six residential colleges, three
            libraries, two chapels, and more than eight miles of covered walkways
            connecting the historic core to the modern research precincts.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            The campus is listed as a Conservation Area and several buildings
            hold Grade I or Grade II listed status. The University&apos;s Buildings
            &amp; Grounds Committee oversees a rolling programme of heritage
            preservation alongside sensitive modern additions that maintain the
            estate&apos;s architectural coherence.
          </p>
        </div>

        {/* Campus stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          {[
            { stat: "340", label: "Acres" },
            { stat: "42", label: "Principal Buildings" },
            { stat: "6", label: "Residential Colleges" },
            { stat: "4.2M", label: "Library Volumes" },
          ].map((s) => (
            <div key={s.label} className="stat-card text-center">
              <p className="engraved text-gold mb-1">{s.stat}</p>
              <p className="font-serif text-xs tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Named Halls & Landmarks ───────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Named Halls"
          title="Landmark Buildings"
          description="The principal buildings of the University, spanning two and a half centuries of architectural ambition."
        />
        <div className="max-w-5xl mx-auto space-y-6">
          {landmarks.map((l) => (
            <div key={l.name} className="border border-gold/20 bg-ivory p-6 md:p-8 gold-emboss">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:w-48">
                  <h3 className="font-serif text-xl font-bold">{l.name}</h3>
                  <p className="text-maroon text-xs tracking-wide uppercase mt-1">{l.style}</p>
                  <p className="text-stone-light text-xs">Built {l.built}</p>
                </div>
                <p className="text-stone text-sm leading-relaxed flex-1">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Residential Colleges ──────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Collegiate Life"
          title="Residential Colleges"
          description="Every student is a member of a residential college — a community within the University that provides accommodation, dining, pastoral support, and lifelong fellowship."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {colleges.map((c) => (
            <div key={c.name} className="border border-gold/20 bg-ivory p-6 gold-emboss">
              <h3 className="font-serif text-lg font-bold mb-1">{c.name}</h3>
              <p className="text-maroon text-xs tracking-wide uppercase mb-1">
                Founded {c.founded}
              </p>
              <p className="text-stone text-xs italic mb-3">&ldquo;{c.motto}&rdquo;</p>
              <p className="text-stone text-sm leading-relaxed mb-3">{c.desc}</p>
              <div className="flex justify-between text-xs text-stone-light border-t border-gold/20 pt-3">
                <span>{c.head}</span>
                <span>{c.students} students</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Libraries & Collections ───────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Libraries"
          title="Scholarly Collections"
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Pemberton Library",
              desc: "The principal research library. 4.2 million volumes, 180,000 rare manuscripts, the Charters Collection, and the Digital Humanities Laboratory.",
              hours: "Mon–Sat 8:00–22:00, Sun 10:00–18:00",
            },
            {
              name: "Law Library (Ashcroft Annexe)",
              desc: "Specialist legal collection serving the College of Law. 280,000 volumes including the complete Commonwealth Law Reports and the Blackstone Manuscripts.",
              hours: "Mon–Fri 8:30–21:00, Sat 9:00–17:00",
            },
            {
              name: "Caldwell Science Library",
              desc: "STEM-focused collection with access to all major journal databases, pre-print archives, and the University's computational research cluster.",
              hours: "24/7 during term, reduced hours in vacation",
            },
          ].map((lib) => (
            <div key={lib.name} className="border-t-2 border-gold pt-4">
              <h3 className="font-serif text-base font-bold mb-2">{lib.name}</h3>
              <p className="text-stone text-sm leading-relaxed mb-3">{lib.desc}</p>
              <p className="text-xs text-stone-light italic">{lib.hours}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Traditions ────────────────────────────── */}
      <Section stone>
        <SectionHeader
          eyebrow="Traditions"
          title="Customs & Ceremonies"
          description="The rituals and ceremonies that define the rhythm of academic life and connect generations of scholars."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {traditions.map((t) => (
            <div key={t.name} className="border-l-2 border-gold pl-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-1">
                <h3 className="font-serif text-lg font-bold">{t.name}</h3>
                <span className="text-maroon text-xs tracking-wide uppercase">{t.when}</span>
              </div>
              <p className="text-stone text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Grounds & Gardens ─────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Grounds"
          title="Gardens & Green Spaces"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            The University&apos;s grounds encompass formal gardens, heritage woodlands,
            playing fields, and the University Botanic Garden — a fifteen-acre
            collection of over 8,000 plant species maintained since 1820 for
            teaching, research, and public enjoyment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { name: "Founder's Garden", desc: "The oldest cultivated space on campus, enclosed by The Cloisters. Features a medieval knot garden and the Charter Oak, planted in 1783." },
              { name: "The Long Walk", desc: "A quarter-mile lime-tree avenue connecting Heritage Hall to the river. A favourite promenade for students and visitors alike." },
              { name: "Botanic Garden", desc: "Fifteen acres of specimen trees, glasshouses, and themed collections including the Physic Garden, the Arboretum, and the Alpine House." },
              { name: "The Meadow", desc: "Forty acres of water meadow along the river, used for cricket, croquet, and the annual May Morning celebrations." },
            ].map((g) => (
              <div key={g.name} className="border-t-2 border-gold pt-4">
                <h3 className="font-serif text-base font-bold mb-2">{g.name}</h3>
                <p className="text-stone text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
