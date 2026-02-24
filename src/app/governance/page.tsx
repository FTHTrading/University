import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Charter, constitutional amendments, Senate proceedings, and institutional transparency at Fitzherbert University.",
};

const amendments = [
  {
    number: "I",
    year: "1801",
    title: "Establishment of the School of Law",
    summary: "Authorised the creation of a second college devoted to jurisprudence and constitutional studies.",
  },
  {
    number: "II",
    year: "1832",
    title: "Foundation of Medical Education",
    summary: "Granted the Whitfield bequest authority to establish a School of Medicine and teaching hospital.",
  },
  {
    number: "III",
    year: "1891",
    title: "Commerce & Strategic Studies",
    summary: "Authorised the sixth college for the study of enterprise, market theory, and institutional finance.",
  },
  {
    number: "IV",
    year: "1923",
    title: "Heritage Hall Consecration",
    summary: "Designated Heritage Hall as the permanent seat of the Senate and the University's ceremonial centre.",
  },
  {
    number: "V",
    year: "1967",
    title: "The Great Expansion Mandate",
    summary: "Authorised the capital campaign and construction programme that doubled the University's research infrastructure.",
  },
  {
    number: "VI",
    year: "2003",
    title: "Constitutional Governance Reform",
    summary: "Modernised the Charter framework, established the Senate, formalised amendment procedures, and enshrined transparency.",
  },
  {
    number: "VII",
    year: "2024",
    title: "AI Governance & Model Accountability",
    summary: "Established constitutional authority for AI model registration, version control, validation gates, and bias auditing.",
  },
];

const senateMembers = [
  { name: "Chancellor Sir Edmund Blackwell, KBE", role: "Presiding Officer", term: "2021–2028" },
  { name: "Professor Eleanor Ashworth", role: "Faculty Senate Chair", term: "2023–2027" },
  { name: "Professor Victoria Langford", role: "Constitutional Affairs", term: "2022–2026" },
  { name: "Professor Margaret Sinclair", role: "Technology & Ethics", term: "2024–2028" },
  { name: "Dr. Alexander Fairfax", role: "Graduate Student Representative", term: "2025–2026" },
  { name: "Ms. Sophia Hernandez", role: "Undergraduate Representative", term: "2025–2026" },
  { name: "Sir William Armstrong", role: "External Trustee", term: "2020–2026" },
  { name: "Dame Patricia Harwell, DBE", role: "External Trustee", term: "2022–2028" },
];

export default function GovernancePage() {
  return (
    <>
      <Hero
        title="Governance"
        subtitle="Constitutional authority, institutional transparency, and the stewardship of a centuries-old academic mission."
      />

      {/* ── Charter ───────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="The Charter"
          title="Foundation of Institutional Authority"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Charter provenance line */}
          <div className="text-center border border-gold/20 bg-ivory py-4 px-6 seal-watermark">
            <p className="engraved text-gold text-sm tracking-[0.3em]">
              RATIFIED 1783 &middot; REAFFIRMED 1867 &middot; AMENDED 1921, 1967, 2003, 2024
            </p>
            <p className="latin-inscription mt-2">
              Sigillum Universitatis Fitzherbert &middot; Sub auspiciis veritatis
            </p>
          </div>
          <p className="text-lg leading-relaxed text-stone drop-cap">
            The University Charter of 1783 is the supreme governing instrument of
            Fitzherbert University. Granted by letters patent under the hand and seal
            of the Crown&apos;s representative, the Charter establishes the institution&apos;s
            legal identity, defines the powers and responsibilities of its officers,
            and enshrines the principles of academic freedom, scholarly integrity,
            and public service that have guided the University for more than two centuries.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            The original Charter parchment is held in the University Archives in
            Heritage Hall. A facsimile edition, prepared by the Department of
            Manuscript Studies, is available below.
          </p>
          <div className="border border-gold/30 bg-ivory p-8">
            <h3 className="font-serif text-lg font-bold mb-4 text-center">
              Articles of the Charter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Article I — Name, Seal, and Founding", desc: "Legal identity, founding date, and use of the University Seal." },
                { title: "Article II — Objects and Powers", desc: "The University's purposes: teaching, research, and service to the public good." },
                { title: "Article III — The Chancellor", desc: "Appointment, powers, and duties of the Chancellor as chief officer." },
                { title: "Article IV — The Senate", desc: "Composition, legislative authority, and meeting procedures of the Senate." },
                { title: "Article V — The Faculties", desc: "Authority of the faculties to set curricula and confer degrees." },
                { title: "Article VI — Officers and Administration", desc: "Appointments of the Registrar, Bursar, Librarian, and other officers." },
                { title: "Article VII — Academic Freedom", desc: "Constitutional guarantee of freedom of inquiry and expression." },
                { title: "Article VIII — Students and Scholars", desc: "Rights, obligations, and protections afforded to matriculated students." },
                { title: "Article IX — Property and Endowment", desc: "Governance of the University's landholdings, buildings, and endowed funds." },
                { title: "Article X — Amendments", desc: "Procedures for proposing, debating, and ratifying Charter amendments." },
                { title: "Article XI — Dissolution", desc: "Provisions for dissolution and disposition of assets." },
                { title: "Article XII — Transitional Provisions", desc: "Legacy statutes and their relation to the Charter." },
              ].map((article) => (
                <div key={article.title} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5 flex-shrink-0">&#9670;</span>
                  <div>
                    <p className="text-sm font-serif font-bold">{article.title}</p>
                    <p className="text-xs text-stone-light">{article.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charter document download */}
          <a
            href="/documents/university-charter-1783.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center justify-between border border-gold/20 bg-ivory p-5 gold-emboss hover:border-gold/40 transition-colors group"
          >
            <div>
              <h4 className="font-serif font-bold text-base">University Charter (1783) — Facsimile Edition</h4>
              <p className="text-xs text-stone-light">PDF · 8.4 MB · Latin original with English translation</p>
            </div>
            <span className="text-gold text-xs tracking-widest uppercase font-serif flex-shrink-0 ml-4 group-hover:text-maroon transition-colors">
              View Document ↓
            </span>
          </a>
        </div>
      </Section>

      {/* ── Amendments ────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Amendments"
          title="Constitutional Evolution"
          description="The Charter has been amended seven times in the University's history, each reflecting a deliberate and consequential decision by the Senate."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {amendments.map((a) => (
            <div key={a.number} className="border-l-2 border-gold pl-6 flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 text-center">
                <span className="font-serif text-2xl font-bold text-maroon">{a.number}</span>
                <p className="text-xs text-stone-light">{a.year}</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{a.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{a.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Senate ────────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="The Senate"
          title="Supreme Legislative Body"
          description="The Senate comprises elected faculty representatives, college deans, student officials, senior administrators, and external trustees."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {senateMembers.map((m) => (
            <div key={m.name} className="border border-gold/20 bg-ivory p-6 gold-emboss">
              <h4 className="font-serif font-bold text-base mb-1">{m.name}</h4>
              <p className="text-maroon text-xs tracking-wide uppercase mb-2">
                {m.role}
              </p>
              <p className="text-stone-light text-xs">Term: {m.term}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-lg leading-relaxed text-stone text-center">
            The Senate convenes in Heritage Hall on the first Monday of each academic
            month. Proceedings are recorded, archived, and made available to the
            University community in accordance with the Transparency Mandate of 2003.
          </p>
        </div>

        {/* Senate committees */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="font-serif text-xl font-bold text-center mb-8">Standing Committees of the Senate</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Finance & Endowment Committee", chair: "Sir William Armstrong", desc: "Oversight of the University's financial operations, endowment strategy, and annual budget." },
              { name: "Academic Standards Committee", chair: "Prof. Eleanor Ashworth", desc: "Review of curricula, degree requirements, examination procedures, and accreditation." },
              { name: "Ethics & Institutional Integrity", chair: "Prof. Margaret Sinclair", desc: "Research ethics, conflicts of interest, AI governance, and conduct review." },
              { name: "Student Affairs Committee", chair: "Dr. Alexander Fairfax", desc: "Student welfare, residential life, disciplinary proceedings, and scholarship allocation." },
              { name: "Buildings & Grounds Committee", chair: "Dame Patricia Harwell, DBE", desc: "Campus planning, heritage preservation, capital projects, and sustainability." },
              { name: "Constitutional Affairs Committee", chair: "Prof. Victoria Langford", desc: "Charter interpretation, amendment procedures, and governance reform." },
            ].map((c) => (
              <div key={c.name} className="border-l-2 border-gold pl-5">
                <h4 className="font-serif font-bold text-sm">{c.name}</h4>
                <p className="text-maroon text-xs mb-1">Chair: {c.chair}</p>
                <p className="text-stone text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Transparency ──────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Institutional Transparency"
          title="Accountability to the Community"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            Fitzherbert University is committed to the principle that institutional
            authority must be exercised with transparency and accountability. The
            Transparency Mandate of 2003 requires the publication of:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Financial Statements",
                desc: "Annual audited accounts, endowment performance reports, and budget allocations are published and available to all members of the University community.",
              },
              {
                title: "Senate Proceedings",
                desc: "Minutes, resolutions, and voting records of the Senate are archived and accessible within fourteen days of each session.",
              },
              {
                title: "Academic Standards Reports",
                desc: "Annual assessments of teaching quality, research output, and student outcomes across all colleges, reviewed by external evaluators.",
              },
              {
                title: "Ethics & Compliance",
                desc: "Reports from the Office of Institutional Integrity, including outcomes of conduct reviews, conflict-of-interest disclosures, and research ethics audits.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-gold pt-4">
                <h3 className="font-serif text-base font-bold mb-2">{item.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Governance Documents Archive ──────────── */}
      <Section>
        <SectionHeader
          eyebrow="Archive"
          title="Governance Documents & Records"
          description="Key institutional documents, published in accordance with the Transparency Mandate."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { title: "University Charter (1783) — Official Text", type: "PDF", size: "8.4 MB", year: "1783", href: "/documents/university-charter-1783.pdf" },
            { title: "Senate Standing Orders & Rules of Procedure", type: "PDF", size: "1.2 MB", year: "2024", href: "/documents/senate-standing-orders.pdf" },
            { title: "Annual Governance Report FY 2025", type: "PDF", size: "3.6 MB", year: "2025", href: "/documents/annual-governance-report-fy-2025.pdf" },
            { title: "Ethical Investment Framework", type: "PDF", size: "920 KB", year: "2023", href: "/documents/ethical-investment-framework.pdf" },
            { title: "AI Governance & Model Accountability Policy", type: "PDF", size: "2.1 MB", year: "2024", href: "/documents/ai-governance-model-accountability-policy.pdf" },
            { title: "Freedom of Information Protocol", type: "PDF", size: "680 KB", year: "2022", href: "/documents/freedom-of-information-protocol.pdf" },
            { title: "Academic Freedom & Expression Policy", type: "PDF", size: "540 KB", year: "2021", href: "/documents/academic-freedom-expression-policy.pdf" },
          ].map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center justify-between border border-gold/20 bg-ivory p-5 gold-emboss hover:border-gold/40 transition-colors group"
            >
              <div>
                <h4 className="font-serif font-bold text-base">{doc.title}</h4>
                <p className="text-xs text-stone-light">{doc.type} · {doc.size} · Published {doc.year}</p>
              </div>
              <span className="text-gold text-xs tracking-widest uppercase font-serif flex-shrink-0 ml-4 group-hover:text-maroon transition-colors">
                Download ↓
              </span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
