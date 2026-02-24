import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Endowment & Legacy",
  description:
    "The Founders Circle, historical benefactors, stewardship philosophy, and the enduring legacy of Fitzherbert University.",
};

const founders = [
  {
    name: "Sir Henry FitzHerbert",
    years: "1741–1812",
    contribution:
      "Principal author of the University Charter and first Chancellor. His bequest of twelve hundred acres and an initial endowment of forty thousand pounds established the material foundation of the institution.",
  },
  {
    name: "The Reverend Jonathan Ashworth",
    years: "1738–1809",
    contribution:
      "Co-founder and first Dean of the College of Arts & Sciences. A distinguished theologian and natural philosopher, he established the curriculum that shaped the University's first century.",
  },
  {
    name: "Lady Margaret Pemberton",
    years: "1755–1834",
    contribution:
      "The University's first major benefactress, whose endowment of the Pemberton Library and scholarship fund opened higher education to students of modest means.",
  },
  {
    name: "Dr. Nathaniel Whitfield",
    years: "1790–1865",
    contribution:
      "Physician and philanthropist whose bequest established the School of Medicine and its teaching hospital, transforming the University into a centre of clinical education.",
  },
];

const recentBenefactors = [
  {
    name: "The Armstrong Foundation",
    gift: "Centre for Constitutional Governance (2003)",
    description:
      "A transformative gift funding the renovation of the historic Constitutional Studies wing and the endowment of three permanent faculty chairs.",
  },
  {
    name: "The Harwell Trust",
    gift: "Digital Strategy Arena (2022)",
    description:
      "A visionary investment creating the University's premier esports and performance analytics facility, bridging competitive gaming with academic research.",
  },
  {
    name: "Dr. Margaret Sinclair",
    gift: "AI Ethics Endowment (2024)",
    description:
      "A founding gift establishing the Centre for Artificial Intelligence & Ethics and providing perpetual funding for its model governance research programme.",
  },
];

export default function EndowmentPage() {
  return (
    <>
      <Hero
        title="Endowment & Legacy"
        subtitle="A heritage of stewardship, generosity, and intergenerational commitment to the advancement of knowledge."
      />

      {/* ── Endowment Overview ────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="The Endowment"
          title="Stewards of an Enduring Mission"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone">
            The University&apos;s endowment, accumulated over more than two centuries
            of careful stewardship, represents far more than a financial portfolio.
            It is a covenant between generations — a promise that the resources
            entrusted to this institution will be preserved and deployed in service
            of its founding mission for as long as the University endures.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            Managed by the Office of the Bursar under the oversight of the Senate&apos;s
            Finance Committee, the endowment supports faculty chairs, student scholarships,
            research programmes, library acquisitions, and the maintenance of the
            University&apos;s historic built environment.
          </p>
        </div>

        {/* Endowment stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-14 max-w-4xl mx-auto">
          {[
            { stat: "$14.2B", label: "Total Endowment" },
            { stat: "243", label: "Years of Stewardship" },
            { stat: "1,200+", label: "Named Funds" },
            { stat: "5.1%", label: "Annual Distribution Rate" },
          ].map((s) => (
            <div key={s.label} className="border border-gold/20 bg-ivory p-6">
              <p className="font-serif text-2xl md:text-3xl font-bold text-maroon">
                {s.stat}
              </p>
              <p className="text-xs tracking-widest uppercase text-stone-light mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Founders Circle ───────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="The Founders Circle"
          title="Those Who Built This Institution"
          description="The men and women whose vision, resources, and courage brought Fitzherbert University into being."
        />
        <div className="space-y-8 max-w-3xl mx-auto">
          {founders.map((f) => (
            <div key={f.name} className="border border-gold/20 bg-ivory p-8">
              <div className="flex flex-wrap items-baseline gap-4 mb-3">
                <h3 className="font-serif text-xl font-bold">{f.name}</h3>
                <span className="text-sm text-stone-light italic">{f.years}</span>
              </div>
              <p className="text-stone text-sm leading-relaxed">{f.contribution}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Historical Benefactors ────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Historical Benefactors"
          title="Continuing the Legacy"
          description="Generous individuals and foundations whose gifts have transformed the University in recent decades."
        />
        <div className="space-y-6 max-w-3xl mx-auto">
          {recentBenefactors.map((b) => (
            <div key={b.name} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-bold mb-1">{b.name}</h3>
              <p className="text-maroon text-xs tracking-wide uppercase mb-2">
                {b.gift}
              </p>
              <p className="text-stone text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Stewardship Philosophy ────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Philosophy"
          title="Stewardship Across Centuries"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            The University&apos;s approach to endowment management is governed by three
            principles: preservation of capital across generational time horizons,
            prudent growth sufficient to outpace inflation and expanding institutional
            needs, and transparent distribution aligned with donor intent and the
            University&apos;s strategic mission.
          </p>
          <div className="border border-gold/30 bg-ivory p-8 mt-6">
            <p className="font-serif italic text-maroon text-lg text-center leading-relaxed">
              &ldquo;An endowment is not wealth to be spent, but a trust to be honoured.
              Every acre of this campus, every named chair, every scholarship fund
              represents a promise made to benefactors who believed their gift would
              outlast their own lives. It is our sacred duty to prove them right.&rdquo;
            </p>
            <p className="text-center text-sm text-stone-light mt-4">
              — Chancellor Sir Edmund Blackwell, Address to the Senate, 2023
            </p>
          </div>
          <p className="text-lg leading-relaxed text-stone">
            The Finance Committee of the Senate reviews the endowment&apos;s performance
            quarterly and publishes an annual stewardship report. Investment decisions
            are guided by an ethical framework that excludes industries incompatible
            with the University&apos;s values while seeking risk-adjusted returns
            across a diversified global portfolio.
          </p>
        </div>
      </Section>

      {/* ── Investment Allocation ─────────────────── */}
      <Section stone>
        <SectionHeader
          eyebrow="Investment Strategy"
          title="Asset Allocation & Performance"
          description="The endowment is diversified across asset classes to balance long-term growth with capital preservation."
        />
        <div className="max-w-4xl mx-auto">
          {/* Asset breakdown */}
          <div className="border border-gold/20 bg-ivory p-8 mb-10">
            <h3 className="font-serif text-xl font-bold text-center mb-8">
              Endowment Asset Allocation — FY 2025
            </h3>
            <div className="space-y-4">
              {[
                { asset: "Public Equities", pct: 28, colour: "bg-navy" },
                { asset: "Private Equity & Venture", pct: 23, colour: "bg-maroon" },
                { asset: "Real Assets (Land, Timber, Infrastructure)", pct: 18, colour: "bg-gold" },
                { asset: "Fixed Income & Sovereign Bonds", pct: 14, colour: "bg-stone" },
                { asset: "Hedge Funds & Absolute Return", pct: 10, colour: "bg-navy-light" },
                { asset: "Cash & Short-Term Instruments", pct: 7, colour: "bg-stone-light" },
              ].map((a) => (
                <div key={a.asset}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone font-serif">{a.asset}</span>
                    <span className="font-serif font-bold text-maroon">{a.pct}%</span>
                  </div>
                  <div className="w-full h-3 bg-parchment-dark rounded-none overflow-hidden">
                    <div
                      className={`h-full ${a.colour} transition-all duration-700`}
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Long-term growth data */}
          <div className="border border-gold/20 bg-ivory p-8">
            <h3 className="font-serif text-xl font-bold text-center mb-8">
              Endowment Growth — Selected Years
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { year: "1950", value: "$42M" },
                { year: "1975", value: "$380M" },
                { year: "1995", value: "$2.1B" },
                { year: "2010", value: "$6.8B" },
                { year: "2025", value: "$14.2B" },
              ].map((d) => (
                <div key={d.year}>
                  <p className="engraved text-gold mb-1">{d.year}</p>
                  <p className="font-serif text-xl md:text-2xl font-bold text-maroon">{d.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-stone-light text-sm italic">
                Annualised return over 20 years: 9.4% net of fees.
                Rolling 10-year CAGR: 8.7%. The endowment exceeded $10B in 2019 
                and has sustained compound growth through prudent diversification and disciplined rebalancing.
              </p>
              <p className="text-stone-light text-xs mt-2">
                Figures audited annually by Ernst &amp; Whitfield LLP. Performance reviewed quarterly by the Senate Finance Committee.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Endowment Distribution ────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Distribution"
          title="Where the Endowment Goes"
          description="Annual endowment distributions support every dimension of the University's mission."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { category: "Scholarships & Financial Aid", pct: "34%", desc: "Ensuring no qualified student is denied access to the University for financial reasons." },
            { category: "Faculty Chairs & Research", pct: "28%", desc: "Endowed professorships and research programme support across all six colleges." },
            { category: "Library & Collections", pct: "18%", desc: "Acquisitions, preservation, and digitisation of the University's scholarly holdings." },
            { category: "Campus & Heritage Preservation", pct: "20%", desc: "Maintenance and restoration of the University's historic built environment." },
          ].map((d) => (
            <div key={d.category} className="stat-card">
              <p className="font-serif text-2xl font-bold text-maroon mb-1">{d.pct}</p>
              <h4 className="font-serif text-sm font-bold mb-2">{d.category}</h4>
              <p className="text-stone text-xs leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Annual Report & Documents ─────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Reports"
          title="Stewardship Reports & Documents"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { title: "Annual Stewardship Report FY 2025", type: "PDF", size: "4.2 MB", href: "/documents/annual-stewardship-report-fy-2025.pdf" },
              { title: "Investment Policy Statement", type: "PDF", size: "1.8 MB", href: "/documents/investment-policy-statement.pdf" },
              { title: "Ethical Investment Framework", type: "PDF", size: "920 KB", href: "/documents/ethical-investment-framework.pdf" },
              { title: "Endowment Ten-Year Performance Review", type: "PDF", size: "3.1 MB", href: "/documents/endowment-ten-year-performance-review.pdf" },
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
                  <p className="text-xs text-stone-light">{doc.type} · {doc.size}</p>
                </div>
                <span className="text-gold text-xs tracking-widest uppercase font-serif flex-shrink-0 ml-4 group-hover:text-maroon transition-colors">
                  Download ↓
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Investment Office ─────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Investment Office"
          title="The Office of Endowment Management"
          description="Responsible for the strategic oversight, allocation, and performance of the University's $14.2B endowment."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                name: "The Rt. Hon. Sir William Armstrong",
                title: "Chair, Finance & Endowment Committee",
                desc: "External Trustee and former Governor of the Bank of England. Oversees the Senate's financial oversight mandate.",
              },
              {
                name: "Dr. Caroline Ashford, CFA",
                title: "Chief Investment Officer",
                desc: "Former Managing Director at Goldman Sachs Asset Management. Appointed CIO in 2019. Oversees a team of 28 investment professionals.",
              },
              {
                name: "Professor Richard Pemberton",
                title: "Dean, School of Commerce (ex officio)",
                desc: "Serves on the Investment Committee in an advisory capacity, providing academic expertise in market theory and portfolio strategy.",
              },
              {
                name: "Ms. Eleanor Graves, FCA",
                title: "University Bursar",
                desc: "Responsible for the day-to-day financial operations of the University, including endowment distributions, capital budgets, and audited accounts.",
              },
            ].map((officer) => (
              <div key={officer.name} className="border border-gold/20 bg-ivory p-6 gold-emboss">
                <h4 className="font-serif font-bold text-base mb-1">{officer.name}</h4>
                <p className="text-maroon text-xs tracking-wide uppercase mb-2">
                  {officer.title}
                </p>
                <p className="text-stone text-sm leading-relaxed">{officer.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center border-t border-gold/20 pt-6">
            <p className="text-stone-light text-sm italic">
              The Investment Committee meets quarterly and reports to the full Senate at the beginning of each academic term.
              Investment strategy is governed by the Ethical Investment Framework (2023), which excludes industries
              incompatible with the University&apos;s values.
            </p>
            <p className="latin-inscription mt-3">
              Fidelitas in perpetuum — stewardship without end
            </p>
          </div>
        </div>
      </Section>

      {/* ── Giving CTA ────────────────────────────── */}
      <Section stone>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Continue the Tradition
          </h2>
          <div className="gold-divider-center" />
          <p className="text-stone-light text-lg leading-relaxed mt-6 mb-10">
            Every gift to Fitzherbert University — whether a major endowment or an annual
            contribution — strengthens the foundation upon which future generations of
            scholars will build. Join the centuries-long tradition of those who invest
            in the advancement of knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/endowment"
              className="inline-block bg-maroon text-parchment px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-maroon-light transition-colors"
            >
              Make a Gift
            </Link>
            <Link
              href="/about"
              className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
            >
              Contact Development Office
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
