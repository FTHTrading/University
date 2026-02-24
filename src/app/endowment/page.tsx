import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Endowment & Stewardship",
  description:
    "The financial architecture and stewardship philosophy of Fitzherbert University — sustaining intelligence infrastructure, heritage preservation, and institutional independence.",
};

export default function EndowmentPage() {
  return (
    <>
      <Hero
        title="Endowment & Stewardship"
        subtitle="Institutional independence, sustained across centuries and capability epochs."
      />

      {/* ── Stewardship Philosophy ─────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Philosophy"
            title="Stewardship in the Age of Acceleration"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              The endowment exists for one purpose: to guarantee the University's independence.
              Since 1783, the endowment has ensured that Fitzherbert University is beholden to
              no government, no corporation, and no transient interest. In 2025, that mandate
              expanded — the endowment now sustains not only the heritage campus and faculty
              but the computational infrastructure, governance architecture, and research
              institutes that define the AI-native institution.
            </p>
            <p>
              Stewardship at Fitzherbert University is not financial management. It is the
              constitutional guarantee of institutional autonomy — the assurance that the
              University can operate on intelligence-doubling timelines without compromising
              its independence or its values.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Endowment Overview ────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Overview"
          title="Endowment at a Glance"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "£2.1B", label: "Total Endowment" },
            { value: "5.2%", label: "Annual Distribution Rate" },
            { value: "£109M", label: "Annual Operating Support" },
            { value: "8.4%", label: "10-Year Average Return" },
            { value: "29%", label: "AI Infrastructure Allocation" },
            { value: "24%", label: "Heritage Preservation" },
            { value: "22%", label: "Research & Faculty" },
            { value: "25%", label: "Student Support" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card text-center">
              <div className="font-serif text-2xl font-bold text-maroon">{stat.value}</div>
              <div className="text-stone text-xs mt-2 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Allocation ────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Allocation"
          title="Where the Endowment Goes"
          description="Four pillars of institutional spending — balanced between heritage preservation and AI-native operations."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "AI Infrastructure (29%)",
              icon: "⬢",
              items: [
                "Computational infrastructure and GPU clusters",
                "Deterministic publishing and Merkle verification",
                "Sovereign networking and security systems",
                "Software development and maintenance",
              ],
            },
            {
              title: "Heritage Preservation (24%)",
              icon: "🏛",
              items: [
                "Georgian quadrangle maintenance and restoration",
                "Library preservation and digitisation",
                "Heritage Archive conservation",
                "Campus grounds and heritage buildings",
              ],
            },
            {
              title: "Research & Faculty (22%)",
              icon: "◈",
              items: [
                "Endowed chairs and faculty compensation",
                "Five research institute operations",
                "Research grants and publication costs",
                "Conference and scholarly programme support",
              ],
            },
            {
              title: "Student Support (25%)",
              icon: "◇",
              items: [
                "Need-based financial aid (100% of demonstrated need)",
                "Merit scholarships",
                "Cognitive wellness programme funding",
                "Student governance and activities",
              ],
            },
          ].map((pillar) => (
            <div key={pillar.title} className="border border-gold/20 bg-ivory p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-gold">{pillar.icon}</span>
                <h3 className="font-serif text-lg font-bold">{pillar.title}</h3>
              </div>
              <ul className="space-y-2">
                {pillar.items.map((item) => (
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

      {/* ── Investment Principles ──────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Principles"
          title="Investment & Governance"
        />
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              num: "I",
              title: "Constitutional Independence",
              text: "The endowment exists to guarantee institutional autonomy. No investment, gift, or partnership may compromise the University's independence in governance, research, or academic operations. This principle is non-negotiable.",
            },
            {
              num: "II",
              title: "Aligned Returns",
              text: "The endowment's investment strategy is aligned with the University's values. Investments are screened for consistency with AI safety, ethical governance, and the preservation of human judgment in institutional systems.",
            },
            {
              num: "III",
              title: "Intergenerational Stewardship",
              text: "Each generation has a duty to leave the endowment stronger than they found it. The distribution rate is set to preserve the endowment's real value in perpetuity — ensuring that future epochs receive the same level of institutional support as the current one.",
            },
            {
              num: "IV",
              title: "Transparency & Verification",
              text: "All endowment allocations, investment performance, and distribution decisions are published to the University's canonical registry and verified via Merkle proof. Financial transparency is a constitutional obligation.",
            },
          ].map((p) => (
            <div key={p.num} className="flex gap-6 items-start border-l-2 border-gold pl-6">
              <span className="font-serif text-3xl font-bold text-gold/40 flex-shrink-0">{p.num}</span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Endowed Chairs ─────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Endowed Positions"
          title="Named Chairs & Directorships"
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "The Harrington Chair in Applied Intelligence",
              holder: "Director James Harrington",
              est: "2025",
            },
            {
              title: "The Sinclair Chair in AI Safety & Alignment",
              holder: "Professor Margaret Sinclair",
              est: "2025",
            },
            {
              title: "The Langford Chair in Constitutional AI",
              holder: "Director Victoria Langford",
              est: "2025",
            },
            {
              title: "The Chen Chair in Cryptographic Infrastructure",
              holder: "Director Marcus Chen",
              est: "2025",
            },
            {
              title: "The Caldwell Chair in Deterministic Publishing",
              holder: "Professor Andrew Caldwell",
              est: "2025",
            },
            {
              title: "The Whitfield Chair in Human-Centered Systems",
              holder: "Director Catherine Whitfield",
              est: "2025",
            },
          ].map((chair) => (
            <div key={chair.title} className="border-t-2 border-gold pt-4">
              <h4 className="font-serif font-bold text-base">{chair.title}</h4>
              <p className="text-maroon text-xs tracking-wide uppercase mt-1">
                {chair.holder} · Est. {chair.est}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Documents ─────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Documents"
          title="Stewardship Publications"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              title: "Annual Report 2024–2025",
              desc: "Comprehensive report on the endowment's performance, allocation decisions, and institutional impact in the first year of the rechartered University.",
              href: "/University/documents/fitzherbert-university-annual-report.pdf",
            },
            {
              title: "Financial Statements 2024–2025",
              desc: "Audited financial statements covering income, expenditure, endowment value, and investment performance.",
              href: "/University/documents/fitzherbert-university-financial-statements.pdf",
            },
            {
              title: "Strategic Plan 2025–2030",
              desc: "The institutional roadmap including financial projections, infrastructure investment plans, and endowment growth targets across twelve capability epochs.",
              href: "/University/documents/fitzherbert-university-strategic-plan.pdf",
            },
          ].map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              className="flex items-start gap-4 border border-gold/20 bg-ivory p-6 hover:border-gold/40 transition-colors group"
            >
              <span className="text-2xl text-gold group-hover:text-maroon transition-colors">
                &#128196;
              </span>
              <div>
                <h4 className="font-serif text-base font-bold group-hover:text-maroon transition-colors">
                  {doc.title}
                </h4>
                <p className="text-stone text-sm leading-relaxed mt-1">{doc.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* ── Contact ───────────────────────────────── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Support the University</h3>
          <p className="text-stone text-sm leading-relaxed mb-8">
            Gifts to the endowment sustain the University's independence, protect its heritage,
            and power the intelligence infrastructure that defines its mission. All contributions
            are allocated according to the four-pillar framework and verified through the
            University's canonical registry.
          </p>
          <a
            href="mailto:stewardship@fitzherbert.edu"
            className="inline-block bg-maroon text-white font-serif text-sm px-8 py-3 tracking-wide hover:bg-maroon/90 transition-colors"
          >
            Contact the Office of Stewardship
          </a>
        </div>
      </Section>
    </>
  );
}
