import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { CollegeCard } from "@/components/CollegeCard";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore the colleges, programmes, research centres, faculty, notable alumni, and academic calendar of FTHTrading University.",
};

const colleges = [
  {
    name: "College of Arts & Sciences",
    dean: "Professor Eleanor Ashworth",
    established: "Est. 1783",
    description:
      "The founding college encompasses the humanities, social sciences, natural sciences, and mathematics — the bedrock of liberal education. Departments range from Classical Languages to Computational Mathematics.",
    departments: ["Classical Languages & Literature", "Philosophy", "History", "Mathematics", "Physics", "Chemistry", "Biology", "Political Science", "Economics", "Comparative Literature"],
  },
  {
    name: "School of Engineering & Applied Science",
    dean: "Professor James Harrington",
    established: "Est. 1847",
    description:
      "Programmes in civil, mechanical, electrical, computational, and biomedical engineering. The School's laboratories are equipped for research in materials science, robotics, and infrastructure resilience.",
    departments: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Science", "Biomedical Engineering", "Materials Science"],
  },
  {
    name: "School of Law & Constitutional Studies",
    dean: "Professor Victoria Langford",
    established: "Est. 1801",
    description:
      "Juris Doctor, Master of Laws, and doctoral programmes in constitutional theory, international law, legal philosophy, and institutional governance. Home to the Langford Centre for Constitutional Jurisprudence.",
    departments: ["Constitutional Law", "International Law", "Legal Philosophy", "Criminal Justice", "Corporate & Commercial Law"],
  },
  {
    name: "School of Divinity & Moral Philosophy",
    dean: "Professor Thomas Wycliffe",
    established: "Est. 1789",
    description:
      "Programmes in theology, ethics, comparative religion, and moral philosophy. The School hosts the annual Wycliffe Lectures on conscience, duty, and the moral foundations of institutional life.",
    departments: ["Systematic Theology", "Ethics & Moral Philosophy", "Comparative Religion", "Church History", "Pastoral Studies"],
  },
  {
    name: "School of Medicine & Public Health",
    dean: "Professor Catherine Whitfield",
    established: "Est. 1832",
    description:
      "Medical Doctor, Master of Public Health, and doctoral programmes in biomedical sciences. The teaching hospital serves as a centre of clinical excellence and community health leadership.",
    departments: ["Anatomy & Cell Biology", "Pharmacology", "Epidemiology", "Surgery", "Internal Medicine", "Paediatrics", "Public Health Policy"],
  },
  {
    name: "Graduate School of Commerce & Strategy",
    dean: "Professor Richard Pemberton",
    established: "Est. 1891",
    description:
      "Master of Business Administration, Master of Finance, and doctoral programmes in strategic management, market theory, and quantitative analysis. Graduates serve as leaders of enterprise and institutional stewardship.",
    departments: ["Strategic Management", "Finance & Accounting", "Marketing", "Operations & Analytics", "Organisational Behaviour"],
  },
];

const programmes = [
  {
    level: "Undergraduate",
    offerings: [
      "Bachelor of Arts (B.A.)",
      "Bachelor of Science (B.S.)",
      "Bachelor of Engineering (B.Eng.)",
      "Bachelor of Fine Arts (B.F.A.)",
    ],
  },
  {
    level: "Graduate",
    offerings: [
      "Master of Arts (M.A.)",
      "Master of Science (M.S.)",
      "Master of Engineering (M.Eng.)",
      "Master of Business Administration (M.B.A.)",
      "Master of Laws (LL.M.)",
      "Master of Public Health (M.P.H.)",
    ],
  },
  {
    level: "Doctoral",
    offerings: [
      "Doctor of Philosophy (Ph.D.)",
      "Juris Doctor (J.D.)",
      "Doctor of Medicine (M.D.)",
      "Doctor of Engineering (D.Eng.)",
    ],
  },
];

const faculty = [
  {
    name: "Professor Eleanor Ashworth",
    title: "Dean, College of Arts & Sciences",
    field: "Comparative Literature & Cultural Theory",
  },
  {
    name: "Professor James Harrington",
    title: "Dean, School of Engineering",
    field: "Structural Mechanics & Infrastructure Resilience",
  },
  {
    name: "Professor Victoria Langford",
    title: "Dean, School of Law",
    field: "Constitutional Theory & Institutional Governance",
  },
  {
    name: "Professor Thomas Wycliffe",
    title: "Dean, School of Divinity",
    field: "Ethics, Moral Philosophy & Theological Inquiry",
  },
  {
    name: "Professor Catherine Whitfield",
    title: "Dean, School of Medicine",
    field: "Epidemiology & Public Health Policy",
  },
  {
    name: "Professor Richard Pemberton",
    title: "Dean, School of Commerce",
    field: "Strategic Management & Market Theory",
  },
  {
    name: "Professor Margaret Sinclair",
    title: "Endowed Chair, AI & Ethics",
    field: "Machine Learning Fairness & Model Governance",
  },
  {
    name: "Professor Andrew Caldwell",
    title: "Director, Heritage Sciences Lab",
    field: "Analytical Chemistry & Conservation Science",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <Hero
        title="Academics"
        subtitle="Six colleges, four centuries of tradition, and an unwavering commitment to scholarly excellence."
      />

      {/* ── Colleges ──────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Schools & Colleges"
          title="The Pillars of the University"
          description="Each college maintains its own faculty assembly, curriculum authority, and research identity — unified by the University Charter."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((c) => (
            <CollegeCard key={c.name} {...c} />
          ))}
        </div>
      </Section>

      {/* ── Programmes ────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Programmes of Study"
          title="Degrees & Certifications"
          description="From foundational undergraduate study to advanced doctoral research, the University offers credentials of the highest standard."
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

      {/* ── Research Highlights ───────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Research"
          title="Scholarship That Shapes the World"
          description="The University's research enterprise spans artificial intelligence, constitutional theory, biomedical science, heritage conservation, and beyond."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone">
            With over three hundred active research grants, twelve dedicated institutes,
            and partnerships spanning four continents, FTHTrading University produces
            scholarship that advances both theoretical understanding and practical
            application. Our faculty publish in the most rigorous peer-reviewed venues
            and serve as advisors to governments, international organisations, and
            leading institutions worldwide.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            Recent highlights include the development of constitutional AI governance
            frameworks adopted by three national regulatory bodies, breakthrough
            discoveries in materials science for sustainable construction, and the
            establishment of the world&apos;s first comprehensive model validation
            laboratory for artificial intelligence systems.
          </p>
        </div>
      </Section>

      {/* ── Faculty Directory ─────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Faculty"
          title="Distinguished Scholars"
          description="The University's faculty represent the highest standards of scholarly achievement and dedication to teaching."
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
                title: "Endowed Chair, AI & Ethics",
                bio: "A pioneer in algorithmic fairness and model governance, Professor Sinclair's work on constitutional frameworks for AI regulation has been adopted by three national regulatory bodies. Her laboratory, the AI Validation Centre, is the first of its kind in higher education.",
                awards: "Royal Society Fellowship (2023), Turing Award Nominee (2025)",
              },
              {
                name: "Professor Victoria Langford",
                title: "Dean, School of Law",
                bio: "The foremost authority on comparative constitutional governance, Professor Langford has served as advisor to the constitutional assemblies of four nations. Her treatise 'Sovereignty and Institutional Design' is considered a foundational text of the field.",
                awards: "National Order of Merit (2019), Blackstone Medal (2022)",
              },
              {
                name: "Professor James Harrington",
                title: "Dean, School of Engineering",
                bio: "A structural engineer whose probabilistic resilience models have redefined how governments assess critical infrastructure risk. His Net-Zero Campus 2035 initiative applies cutting-edge sustainable engineering to the University's own heritage buildings.",
                awards: "Institution of Civil Engineers Gold Medal (2021)",
              },
              {
                name: "Professor Andrew Caldwell",
                title: "Director, Heritage Sciences Lab",
                bio: "A conservation scientist whose non-invasive analytical methods have been used to preserve cultural artefacts on four continents. His groundbreaking work on atmospheric degradation of medieval stonework informs restoration policy across Europe.",
                awards: "UNESCO Cultural Preservation Award (2020)",
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

      {/* ── Endowed Chairs ────────────────────────── */}
      <Section stone>
        <SectionHeader
          eyebrow="Endowed Chairs"
          title="Named Professorships"
          description="Endowed chairs represent the University's highest academic honour, sustained in perpetuity by the generosity of benefactors."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              chair: "The Ashcroft Chair in Constitutional Law",
              holder: "Professor Victoria Langford",
              endowed: "Est. 1803",
              donor: "The Ashcroft Family Trust",
              desc: "The oldest endowed chair at the University, established to ensure the permanent study of constitutional theory and institutional governance.",
            },
            {
              chair: "The Pemberton Chair in Economic Theory",
              holder: "Professor Richard Pemberton",
              endowed: "Est. 1891",
              donor: "Lady Margaret Pemberton (bequest)",
              desc: "Supports research in political economy, market theory, and the ethics of commercial enterprise.",
            },
            {
              chair: "The Whitfield Chair in Epidemiology",
              holder: "Professor Catherine Whitfield",
              endowed: "Est. 1838",
              donor: "Dr. Nathaniel Whitfield (bequest)",
              desc: "Dedicated to the advancement of public health through epidemiological research and clinical education.",
            },
            {
              chair: "The Sinclair Chair in Artificial Intelligence & Ethics",
              holder: "Professor Margaret Sinclair",
              endowed: "Est. 2024",
              donor: "Dr. Margaret Sinclair (founding gift)",
              desc: "The University's newest endowed chair, supporting research in AI model governance, algorithmic fairness, and computational ethics.",
            },
            {
              chair: "The Blackwood Chair in Architectural Heritage",
              holder: "Professor Andrew Caldwell",
              endowed: "Est. 1925",
              donor: "Sir Reginald Blackwood",
              desc: "Supports the study of architectural conservation, heritage science, and the preservation of the built environment.",
            },
            {
              chair: "The FitzHerbert Chair in Moral Philosophy",
              holder: "Professor Thomas Wycliffe",
              endowed: "Est. 1783",
              donor: "Sir Henry FitzHerbert (founding endowment)",
              desc: "One of the two original endowed chairs, devoted to the study of ethics, conscience, and the moral foundations of institutional life.",
            },
          ].map((c) => (
            <div key={c.chair} className="border border-gold/20 bg-ivory p-6 gold-emboss">
              <h4 className="font-serif text-base font-bold mb-1">{c.chair}</h4>
              <p className="text-maroon text-xs tracking-wide uppercase mb-1">
                Holder: {c.holder}
              </p>
              <p className="text-stone-light text-xs mb-2">
                {c.endowed} &middot; Endowed by {c.donor}
              </p>
              <p className="text-stone text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 latin-inscription">
          Cathedra perpetua — in saecula saeculorum
        </p>
      </Section>

      {/* ── Notable Alumni ────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Alumni"
          title="Notable Alumni"
          description="Scholars, statesmen, pioneers, and leaders who carry the University's mission into the world."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Sir Reginald Ashworth III",
              class: "Class of 1928",
              achievement: "Chief Justice of the Supreme Court (1962–1978). Authored the landmark ruling on institutional sovereignty that redefined federal judicial review.",
            },
            {
              name: "Dr. Helena Whitfield",
              class: "Class of 1954",
              achievement: "Nobel Laureate in Medicine (1987). Pioneered immunotherapy protocols that transformed the treatment of autoimmune diseases worldwide.",
            },
            {
              name: "Ambassador James Pemberton",
              class: "Class of 1971",
              achievement: "United Nations Secretary-General's Special Envoy (2005–2014). Negotiated the framework that stabilised three post-conflict constitutional transitions.",
            },
            {
              name: "Professor Amara Okonkwo",
              class: "Class of 1989",
              achievement: "Fields Medal recipient (2006). Resolved the Langlands conjecture for function fields, reshaping modern algebraic geometry.",
            },
            {
              name: "The Rt. Hon. Elizabeth Fairfax",
              class: "Class of 1995",
              achievement: "Youngest Chancellor of the Exchequer (2018–2024). Architect of the Sovereign Resilience Fund and advocate for institutional economic reform.",
            },
            {
              name: "Dr. Marcus Chen",
              class: "Class of 2008",
              achievement: "Founder of the Global AI Safety Consortium. His framework for model governance has been endorsed by twenty-seven regulatory bodies across six continents.",
            },
          ].map((alum) => (
            <div key={alum.name} className="border-l-2 border-gold pl-6">
              <h4 className="font-serif text-lg font-bold mb-1">{alum.name}</h4>
              <p className="text-maroon text-xs tracking-wide uppercase mb-2">{alum.class}</p>
              <p className="text-stone text-sm leading-relaxed">{alum.achievement}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Academic Calendar ─────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Calendar"
          title="Academic Calendar 2025–2026"
        />
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold/20 bg-ivory p-8">
            <div className="space-y-4">
              {[
                { term: "Michaelmas Term", dates: "1 September – 12 December 2025", weeks: "15 weeks" },
                { term: "Winter Recess", dates: "13 December 2025 – 11 January 2026", weeks: "4 weeks" },
                { term: "Hilary Term", dates: "12 January – 27 March 2026", weeks: "11 weeks" },
                { term: "Easter Recess", dates: "28 March – 19 April 2026", weeks: "3 weeks" },
                { term: "Trinity Term", dates: "20 April – 19 June 2026", weeks: "9 weeks" },
                { term: "Commencement", dates: "20 June 2026", weeks: "" },
                { term: "Long Vacation", dates: "21 June – 31 August 2026", weeks: "10 weeks" },
              ].map((period) => (
                <div key={period.term} className="flex flex-wrap items-baseline gap-4 py-3 border-b border-gold/10 last:border-b-0">
                  <span className="font-serif font-bold text-base w-48 flex-shrink-0">{period.term}</span>
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
              The University observes the Oxford system of named terms. Reading weeks, examination periods,
              and college-specific dates are published by each Faculty at the start of the academic year.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Publications ──────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Publications"
          title="Selected University Publications"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              title: "The FTHTrading Review of Constitutional Studies",
              desc: "A bi-annual peer-reviewed journal examining questions of governance, sovereignty, and institutional design. Published since 1912.",
            },
            {
              title: "Proceedings of the Heritage Sciences Laboratory",
              desc: "Annual collection of research papers in conservation science, analytical chemistry, and cultural heritage preservation.",
            },
            {
              title: "The Ashworth Lectures in Comparative Literature",
              desc: "Published transcripts of the annual distinguished lecture series, exploring the intersections of literary tradition, cultural theory, and moral philosophy.",
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
