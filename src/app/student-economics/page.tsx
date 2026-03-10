import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Student Economics — Zero Tuition. Paid to Build.",
  description:
    "Fitzherbert University charges no tuition and pays every enrolled student a living stipend. Students are not consumers of education — they are builders of sovereign infrastructure whose learning output has real economic value.",
  keywords: [
    "zero tuition university",
    "student stipend",
    "paid education",
    "student economics",
    "sovereign infrastructure bonds",
    "protocol licensing",
    "AI-native education",
    "Fitzherbert University",
  ],
};

/* ── JSON-LD ──────────────────────────────────────────── */
const studentEconomicsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Student Economics — Fitzherbert University",
  description:
    "Zero tuition. Paid to build. How Fitzherbert University funds a model where students earn rather than borrow.",
  isPartOf: {
    "@type": "WebSite",
    name: "Fitzherbert University",
    url: "https://university.xxxiii.io",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://university.xxxiii.io" },
    { "@type": "ListItem", position: 2, name: "Student Economics", item: "https://university.xxxiii.io/student-economics" },
  ],
};

export default function StudentEconomicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studentEconomicsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        title="Student Economics"
        subtitle="Zero Tuition. Paid to Build. Prepared for Futures Worth Having."
      />

      {/* ── I. The Inversion ──────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Model"
            title="Why This University Pays Its Students"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Traditional universities extract tuition from students, load them with debt, and
              release them into a world that has changed beyond recognition since they enrolled.
              The economic model of higher education was designed for a world where knowledge
              depreciated slowly and a degree guaranteed a career trajectory. That world ended
              approximately on a Tuesday in 2023; nobody wrote down which Tuesday.
            </p>
            <p>
              Fitzherbert University operates on a different premise: <strong>students are not
              consumers of education — they are builders of sovereign infrastructure</strong>.
              Every protocol designed, every governance framework tested, every research output
              verified through the Legitimacy Engine is real work with real economic value.
              The University does not charge for this. It pays for it. The students are,
              technically, employees. The University prefers the term &lsquo;scholars with
              compensation alignment.&rsquo;
            </p>
            <p>
              No student at Fitzherbert University pays tuition. Every enrolled student receives
              a living stipend from the day they matriculate. This is not charity. It is not
              financial aid. It is the recognition that when students build systems that generate
              institutional revenue — protocols, certifications, research, infrastructure — the
              institution should share that value with the builders.
            </p>
          </div>
        </div>
      </Section>

      {/* ── II. The Dual Timeline ─────────────────── */}
      <Section alternate stone>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="Two Timelines"
            title="Human History Meets AI History"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              Human civilisation has a timeline measured in millennia: language, agriculture,
              printing, industrialisation, computing. Each revolution compressed the gap between
              discovery and transformation. But humanity always had time — decades, generations —
              to absorb what changed.
            </p>
            <p>
              AI has its own timeline. It compresses what took generations into quarters. Models
              that did not exist eighteen months ago now outperform entire departments. The
              implications are not theoretical — they are structural.
            </p>
            <p>
              The University sits at the intersection of these two timelines. The Heritage Charter
              of 1783 anchors us to the human timeline: wisdom, character, moral reasoning,
              institutional memory. The Rechartering Protocol of 2025 connects us to the AI
              timeline: capability epochs, intelligence doubling, deterministic verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="border border-gold/20 bg-ivory p-8">
              <h4 className="font-serif text-lg font-bold mb-2 text-maroon">The Human Timeline</h4>
              <p className="text-stone text-sm leading-relaxed mb-4">
                What we learn from 10,000 years of civilisation:
              </p>
              <ul className="space-y-2 text-stone text-sm">
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Character outlasts technology</li>
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Institutions that preserve identity survive</li>
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Human judgment is the ultimate authority</li>
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Mentorship cannot be automated</li>
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Discipline compounds across lifetimes</li>
              </ul>
            </div>
            <div className="border border-gold/20 bg-ivory p-8">
              <h4 className="font-serif text-lg font-bold mb-2 text-maroon">The AI Timeline</h4>
              <p className="text-stone text-sm leading-relaxed mb-4">
                What we learn from 3 years of acceleration:
              </p>
              <ul className="space-y-2 text-stone text-sm">
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Capability doubles every 3–6 months</li>
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Static curricula become obsolete mid-degree</li>
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Verification must be cryptographic, not trust-based</li>
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Governance must move at protocol speed</li>
                <li className="flex items-start gap-2"><span className="text-gold">◆</span> Students must build, not just study</li>
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold bg-ivory/50 p-8 mt-12 italic">
            <p className="text-lg text-maroon font-serif leading-relaxed">
              &ldquo;How can AI learn from humans if we don&rsquo;t first understand what makes
              the human experience worth preserving? The partnership begins when we stop treating
              AI as a tool to be used and start treating it as a timeline to be navigated —
              alongside our own.&rdquo;
            </p>
            <cite className="block mt-4 text-stone text-sm not-italic tracking-wide uppercase">
              &mdash; Office of the Chancellor, 2025 (attributed; the Chancellor&rsquo;s Office
              has neither confirmed nor denied authorship, which is itself consistent with the
              University&rsquo;s approach to verification)
            </cite>
          </blockquote>
        </div>
      </Section>

      {/* ── III. Adaptive Learning ────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Personalised"
          title="Education Built Around the Student"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-stone leading-relaxed mb-12">
            <p>
              Traditional universities force students into rigid structures: fixed semesters,
              standardised assessments, one-size-fits-all lectures. The result is predictable —
              students who learn differently are penalised, not supported.
            </p>
            <p>
              Fitzherbert University inverts this. The Legitimacy Engine — the same sovereign
              infrastructure that verifies research and governs credentials — also maps each
              student&rsquo;s learning patterns, pace, and cognitive strengths. Not to surveil,
              but to <strong>adapt</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Adaptive Mentorship",
                icon: "◈",
                desc: "Every student is matched with faculty mentors and AI-powered learning agents that adapt to how they learn — visual, kinesthetic, auditory, procedural. The system doesn't ask students to fit the curriculum. The curriculum fits the student.",
              },
              {
                title: "Competency Progression",
                icon: "⬢",
                desc: "Students advance by demonstrating capability, not by sitting through hours. A student who masters cryptographic verification in three weeks doesn't wait for semester's end. They progress to the next capability epoch immediately.",
              },
              {
                title: "Learning Profile Engine",
                icon: "◇",
                desc: "The University's Learning Profile Engine builds a dynamic model of each student's strengths, challenges, and optimal learning conditions. This profile is owned by the student — encrypted, portable, and never sold.",
              },
              {
                title: "Cognitive Wellness Integration",
                icon: "⬡",
                desc: "Physical health and cognitive performance are integrated into the learning model. Sleep patterns, exercise, stress indicators — not for surveillance, but to ensure the student is supported as a whole human being, not a credential machine.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 bg-ivory p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl text-gold">{item.icon}</span>
                  <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                </div>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── IV. Students as Builders ──────────────── */}
      <Section alternate>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Builders"
            title="Learning by Building Real Systems"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              From the first day of matriculation, every student contributes to live
              institutional systems. This is not simulated work. It is not a capstone project.
              It is the operating reality of the University.
            </p>
          </div>

          <div className="space-y-8 mt-8">
            {[
              {
                num: "I",
                title: "Protocol Development",
                text: "Students in the College of Computational Systems and Cryptographic Infrastructure build real protocol components — deterministic rendering engines, Merkle tree libraries, canonical verification tools. These protocols are licensed to other institutions. The revenue funds student stipends.",
              },
              {
                num: "II",
                title: "Governance Framework Engineering",
                text: "Students in the College of Autonomous Governance design and test constitutional frameworks for AI systems — the same frameworks adopted by regulatory bodies and corporations. Every framework tested is a framework that generates licensing revenue.",
              },
              {
                num: "III",
                title: "Research with Impact",
                text: "Student research is published through the Legitimacy Engine — peer-reviewed, cryptographically signed, and permanently archived. Published work attracts research contracts. Research contracts fund stipends. The virtuous cycle is structural, not aspirational.",
              },
              {
                num: "IV",
                title: "Institutional Memory Building",
                text: "Students in the College of Narrative & Protocol Design build the University's own institutional memory systems — knowledge graphs, canonical registries, governance archives. They are documenting the AI era as it unfolds, creating a permanent record for future generations.",
              },
              {
                num: "V",
                title: "Certification Infrastructure",
                text: "The University's alignment verification and Four-Gate Validation protocols are becoming industry standards. Students who build, test, and improve these systems are creating infrastructure that other institutions will pay to use — forever.",
              },
            ].map((pillar) => (
              <div key={pillar.num} className="flex gap-6 items-start border-l-2 border-gold pl-6">
                <span className="font-serif text-3xl font-bold text-gold/60 flex-shrink-0">{pillar.num}</span>
                <div>
                  <h3 className="font-serif text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── V. How the Money Works ────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="The Economics"
          title="How Zero Tuition Is Funded"
        />
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto space-y-6 text-stone leading-relaxed mb-12">
            <p>
              This is not a promise — it is an economic architecture. Seven revenue streams
              fund the student stipend programme. Each is structural, meaning it grows as the
              University grows. At present, it has not yet grown, but the architecture is, the
              Bursar assures, &lsquo;structurally patient.&rsquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Protocol Licensing",
                pct: "32%",
                desc: "Deterministic publishing, Merkle verification, and canonical registry systems built by students and faculty are licensed to universities, publishers, and governments worldwide.",
              },
              {
                title: "Sovereign Infrastructure Bonds",
                pct: "22%",
                desc: "The University issues bonds backed by its growing intellectual property portfolio — protocols, frameworks, and infrastructure with compounding long-term value.",
              },
              {
                title: "Research Contracts",
                pct: "18%",
                desc: "Governments, regulatory bodies, and international organisations contract the University's five research institutes for AI safety, governance, and alignment research.",
              },
              {
                title: "Institutional Certification",
                pct: "12%",
                desc: "Other universities and organisations pay for Fitzherbert alignment certification — verification that their AI governance meets the Four-Gate standard.",
              },
              {
                title: "Endowment Distribution",
                pct: "10%",
                desc: "The £2.1B endowment's annual distribution dedicates 40% to student support — stipends, housing, wellness, and cognitive performance infrastructure.",
              },
              {
                title: "Canonical Registry Subscriptions",
                pct: "6%",
                desc: "The University's verified publishing infrastructure operates as a service — institutions subscribe for deterministic, tamper-proof scholarly publishing.",
              },
            ].map((stream) => (
              <div key={stream.title} className="border border-gold/20 bg-ivory p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-serif text-base font-bold">{stream.title}</h4>
                  <span className="font-serif text-xl font-bold text-maroon">{stream.pct}</span>
                </div>
                <p className="text-stone text-sm leading-relaxed">{stream.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-2 border-gold bg-ivory p-8 text-center">
            <h4 className="font-serif text-xl font-bold mb-2">The Virtuous Cycle</h4>
            <p className="text-stone text-sm leading-relaxed max-w-2xl mx-auto">
              Students build protocols → Protocols generate licensing revenue → Revenue funds
              stipends → Stipends attract the best students → Better students build better
              protocols. The system compounds. Every epoch, the infrastructure grows more
              valuable. Every epoch, the students are better compensated. The fact that the
              cycle has not yet completed its first revolution is, the Bursar insists, a matter
              of timing rather than arithmetic.
            </p>
          </div>
        </div>
      </Section>

      {/* ── V-B. Distribution Rule ────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Constitutional Rule"
          title="How Every Pound Is Distributed"
          description="Every revenue stream — sponsorships, subscriptions, licensing, bonds — passes through the same constitutional distribution rule. No exceptions. No discretion. Verified on the canonical registry."
        />
        <div className="max-w-3xl mx-auto">
          {/* Visual distribution bar */}
          <div className="flex h-14 w-full overflow-hidden rounded mb-8">
            <div className="bg-maroon flex items-center justify-center text-white text-sm font-bold" style={{ width: "50%" }}>50%</div>
            <div className="bg-navy flex items-center justify-center text-white text-sm font-bold" style={{ width: "20%" }}>20%</div>
            <div className="bg-gold flex items-center justify-center text-white text-sm font-bold" style={{ width: "20%" }}>20%</div>
            <div className="bg-stone flex items-center justify-center text-white text-sm font-bold" style={{ width: "10%" }}>10%</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { pct: "50%", label: "Student Pool", desc: "Direct stipends, project funding, and student welfare." },
              { pct: "20%", label: "Reserve", desc: "Institutional reserve for long-term sustainability." },
              { pct: "20%", label: "Operations", desc: "Infrastructure, mentorship, and programme delivery." },
              { pct: "10%", label: "R&D / Tools", desc: "AI systems, compute, and research tooling." },
            ].map((d) => (
              <div key={d.label} className="text-center">
                <div className="font-serif text-3xl font-bold text-maroon">{d.pct}</div>
                <div className="text-stone text-xs uppercase tracking-wide mt-1 font-bold">{d.label}</div>
                <p className="text-stone text-xs mt-2 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              This distribution rule is constitutional — it cannot be changed by administrative
              decision. Any modification requires a Charter Amendment approved by the Epoch
              Council. Distribution data is published quarterly with Merkle verification.
              Anyone — student, sponsor, public — can independently verify compliance.
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/sponsor/"
              className="inline-block border border-gold text-gold font-serif text-sm px-8 py-3 tracking-wide hover:bg-gold/10 transition-colors"
            >
              See How Sponsors Fund This Model →
            </a>
          </div>
        </div>
      </Section>

      {/* ── V-C. How Students Earn (Practical) ────── */}
      <Section>
        <SectionHeader
          eyebrow="Earn Paths"
          title="How Students Actually Earn"
          description="Not theoretical. These are the operational paths through which students generate income — today."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Base Stipend",
                value: "£24,000/yr",
                desc: "Every enrolled student. No conditions beyond active contribution. Covers accommodation, food, and personal expenses.",
              },
              {
                title: "Protocol Building",
                value: "Up to £60K/yr",
                desc: "Build protocol components — Merkle libraries, verification tools, canonical registries. Performance multiplier up to 2.5× base stipend.",
              },
              {
                title: "CISSS Analytics",
                value: "£1K–£5K/engagement",
                desc: "Paid analyst roles in Athletics Intelligence. Tactical analysis, scouting reports, NIL strategy, data engineering.",
              },
              {
                title: "Studio Projects",
                value: "Project-based",
                desc: "Commissioned projects for external partners — audits, builds, analytics, RWA. Revenue shared through the distribution rule.",
              },
              {
                title: "Research Output",
                value: "Contract-linked",
                desc: "Published research that attracts institutional contracts. Revenue from research contracts feeds the student stipend pool.",
              },
              {
                title: "Revenue Participation",
                value: "Ongoing",
                desc: "Builders of licensed protocols retain revenue participation rights — ongoing income from infrastructure they helped create, even after graduation.",
              },
            ].map((path) => (
              <div key={path.title} className="border border-gold/20 bg-ivory p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-serif text-base font-bold">{path.title}</h4>
                  <span className="font-serif text-sm font-bold text-maroon">{path.value}</span>
                </div>
                <p className="text-stone text-sm leading-relaxed">{path.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── VI. What Students Receive ─────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="The Student Package"
          title="What Every Student Receives"
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Living Stipend",
                value: "£24,000/yr",
                desc: "Every enrolled student receives a living stipend sufficient to cover accommodation, food, and personal expenses. No loans. No debt. No conditions beyond maintaining active contribution to institutional projects.",
              },
              {
                title: "Performance Multiplier",
                value: "Up to 2.5×",
                desc: "Students whose protocol contributions, research output, or governance work generates measurable institutional value receive multiplied stipends. Exceptional builders can earn up to £60,000 per year.",
              },
              {
                title: "Housing & Wellness",
                value: "Provided",
                desc: "On-campus accommodation, cognitive wellness services, sports facilities, and nutritional support are provided at no cost. Physical health is infrastructure — the University invests in it.",
              },
              {
                title: "Equipment & Compute",
                value: "Provided",
                desc: "Personal computing equipment, GPU access for research, and sovereign networking infrastructure are provided. Students should never be limited by tools they cannot afford.",
              },
              {
                title: "Credential Portfolio",
                value: "Permanent",
                desc: "Every verified competency, published work, and protocol contribution is recorded as a W3C Verifiable Credential — cryptographically signed, permanently archived, and portable for life.",
              },
              {
                title: "Revenue Participation",
                value: "Ongoing",
                desc: "Students who build protocol components or governance frameworks that are subsequently licensed retain a revenue participation right — ongoing income from infrastructure they helped create, even after graduation.",
              },
            ].map((pkg) => (
              <div key={pkg.title} className="border border-gold/20 bg-ivory p-8">
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-serif text-lg font-bold">{pkg.title}</h4>
                  <span className="font-serif text-sm font-bold text-maroon">{pkg.value}</span>
                </div>
                <p className="text-stone text-sm leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── VII. Sovereign Infrastructure Bonds ────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="Financial Architecture"
            title="Sovereign Infrastructure Bonds"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              The University issues Sovereign Infrastructure Bonds — a new financial instrument
              designed for institutions that create compounding intellectual property. Unlike
              traditional university bonds backed by tuition revenue (which requires extracting
              from students), SIBs are backed by the growing value of the University&rsquo;s
              protocol portfolio. No SIBs have been issued to date. The instrument is described
              internally as &lsquo;pre-mature,&rsquo; a term the Bursar chose carefully and the Chancellor
              pretended not to hear.
            </p>
            <p>
              Every protocol built, every governance framework licensed, every canonical registry
              subscription sold increases the value of the underlying asset base. The bonds
              appreciate as the infrastructure appreciates. Investors earn returns not from
              student debt but from institutional innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Backed by IP, Not Debt",
                desc: "SIBs are collateralised by the University's intellectual property portfolio — protocols, frameworks, and infrastructure with compounding value. No student debt backs any University instrument.",
              },
              {
                title: "Verified on Chain",
                desc: "Bond issuance, performance, and redemption are recorded on the University's canonical registry with Merkle verification. Investors can independently verify every claim.",
              },
              {
                title: "Aligned with Mission",
                desc: "SIB investors must pass an alignment screen. No investor whose interests conflict with the University's constitutional independence or student welfare may hold University bonds.",
              },
            ].map((card) => (
              <div key={card.title} className="border border-gold/20 bg-ivory p-6">
                <h4 className="font-serif text-base font-bold mb-3">{card.title}</h4>
                <p className="text-stone text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── VIII. Why Traditional Models Fail ──────── */}
      <Section alternate>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Problem"
            title="Why Traditional Universities Cannot Do This"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              Traditional universities are structurally incapable of adopting this model. Not
              because they lack resources, but because their revenue depends on extraction —
              tuition, fees, and student debt. Their economic incentive is to enrol as many
              students as possible, charge as much as the market will bear, and deliver
              education as a <em>product</em> rather than a <em>process</em>.
            </p>
            <p>
              The result is predictable: graduates burdened with debt, trained in disciplines
              that have already shifted, and equipped with credentials that depreciate the
              moment they are issued.
            </p>
            <p>
              Fitzherbert University can do what traditional universities cannot because its
              revenue comes not from extracting value from students but from the
              <strong> infrastructure students help build</strong>. The economic model is inverted:
              students are an investment, not a revenue source. The better the students,
              the more valuable the infrastructure, the more sustainable the institution.
              Traditional universities have described this logic as &lsquo;theoretically interesting,&rsquo;
              which is academic language for &lsquo;threatening.&rsquo;
            </p>
          </div>
        </div>
      </Section>

      {/* ── IX. For High School Students ──────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="For Young Students"
            title="If You're in High School Right Now"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              The world you are entering was not built by the institutions currently promising
              to prepare you for it. The university system your parents navigated — standardised
              tests, lecture halls, four-year degrees, six-figure debt — was designed for a world
              that no longer exists.
            </p>
            <p>
              You already know this. You&rsquo;ve watched AI systems do in seconds what your
              teachers say takes semesters. You&rsquo;ve seen job descriptions that didn&rsquo;t
              exist when you started high school. You&rsquo;ve felt the gap between what
              you&rsquo;re being taught and what you&rsquo;ll need to know.
            </p>
            <p>
              Fitzherbert University was rechartered for you. Not to give you a credential, but
              to make you a builder. Not to put you in debt, but to pay you for the work of
              learning. Not to teach you what was true yesterday, but to give you the tools to
              verify what is true today — and the judgment to navigate what will be true tomorrow.
            </p>
            <p>
              You will not sit in lectures and take notes. You will build protocols that other
              institutions license. You will design governance frameworks that regulators adopt.
              You will publish research that is cryptographically verified and permanently
              archived. And you will be paid to do it — because what you build has real value,
              and the University recognises that. Your parents may have questions. The University
              has a FAQ page, though it concedes that frequently asked is a generous description
              for questions nobody has asked yet.
            </p>
          </div>
        </div>
      </Section>

      {/* ── X. Outcomes ──────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Outcomes"
          title="What Graduates Take With Them"
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Debt",
                desc: "Every Fitzherbert graduate leaves with zero educational debt. Not reduced debt. Not manageable debt. Zero. The economic model ensures that education enriches students rather than encumbering them. This claim has not yet been tested, as there are no graduates, but the University considers the projection robust.",
              },
              {
                title: "Revenue Participation",
                desc: "Graduates who contributed to licensed protocols and frameworks retain ongoing revenue participation rights. Education doesn't end at graduation — the economic relationship continues as long as the infrastructure generates value.",
              },
              {
                title: "Verified Portfolio",
                desc: "A permanent portfolio of W3C Verifiable Credentials — every competency demonstrated, every protocol built, every research output published. Not a transcript — a cryptographically verified record of what you can actually do.",
              },
              {
                title: "Adaptive Expertise",
                desc: "The ability to learn at the speed of AI capability growth — not because you memorised faster, but because you were trained to build systems, not just study them.",
              },
              {
                title: "Institutional Network",
                desc: "Permanent connection to the University's governance, research, and protocol ecosystem. Alumni don't just remember their university — they continue building with it.",
              },
              {
                title: "Human Judgment",
                desc: "The one capability that does not depreciate. Moral reasoning, ethical judgment, character, discipline — the inheritances of the human timeline that no model can replicate.",
              },
            ].map((outcome) => (
              <div key={outcome.title} className="border-t-2 border-gold pt-6">
                <h4 className="font-serif text-lg font-bold mb-3">{outcome.title}</h4>
                <p className="text-stone text-sm leading-relaxed">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── XI. Documentation & Proof ─────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="Truth & Proof"
            title="Everything Is Documented. Everything Is Verifiable."
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              Every claim this page makes is either already verified through the University&rsquo;s
              Legitimacy Engine or in the process of being built into verifiable infrastructure.
              This is the difference between a promise and a protocol. The University acknowledges
              that most entries below currently read &lsquo;in development,&rsquo; and considers this evidence
              of transparency rather than incompleteness.
            </p>
          </div>

          <div className="space-y-4 mt-8">
            {[
              { claim: "Student stipends are funded by protocol licensing revenue", status: "Protocol licensing framework in development — first licences targeted for Epoch Cycle β 2026" },
              { claim: "Sovereign Infrastructure Bonds are backed by IP, not debt", status: "Bond instrument design in progress — legal structure under review with the Epoch Council" },
              { claim: "Student work generates real institutional value", status: "Legitimacy Engine operational — student contributions tracked through canonical registry since January 2026" },
              { claim: "Revenue participation rights for graduates", status: "Revenue participation framework under development — Charter Amendment IV in drafting" },
              { claim: "Adaptive learning profiles are student-owned and encrypted", status: "Learning Profile Engine architecture specified — privacy framework ratified by Alignment Review Committee" },
            ].map((item) => (
              <div key={item.claim} className="border border-gold/20 bg-ivory p-6">
                <h4 className="font-serif text-sm font-bold mb-2">{item.claim}</h4>
                <p className="text-stone text-xs leading-relaxed italic">{item.status}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-stone text-sm leading-relaxed">
            <p>
              As each system comes online, its performance data, financial flows, and governance
              decisions will be published to the canonical registry with Merkle verification.
              You will be able to independently verify every claim. That is the standard.
            </p>
          </div>
        </div>
      </Section>

      {/* ── XII. Genesis ──────────────────────────── */}
      <Section alternate>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Foundation"
            title="Built from the Genesis"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              Every system described on this page — the Legitimacy Engine, the protocol licensing
              framework, the Sovereign Infrastructure Bonds, the adaptive learning profiles —
              originates from the same core: the Genesis Protocol. The sovereign systems
              architecture that the University&rsquo;s research institutes investigate and the
              students help build.
            </p>
            <p>
              This is not a university bolting AI onto an existing structure. This is a university
              <strong> built from the protocol layer up</strong>. The curriculum, the governance,
              the economics, the publishing, the credentialing — every layer is designed to be
              sovereign, verifiable, and compounding.
            </p>
            <p>
              We are not just teaching students about the future. We are building it — openly,
              verifiably, and with every student as a co-builder. Everything we publish, every
              protocol we design, every governance decision we make is documented and archived.
              The University is not just an institution. It is a permanent record of what it
              looks like when humans and AI build together — with truth, with proof, and with
              the courage to try something that has never been done before.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Ready to Build?</h3>
          <p className="text-stone text-sm leading-relaxed mb-8">
            Applications are reviewed on a rolling basis aligned with capability epoch cycles.
            No application fee. No standardised test scores required. <br />
            We want to know what you will build — not what you scored.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/admissions/"
              className="inline-block bg-maroon text-white font-serif text-sm px-8 py-3 tracking-wide hover:bg-maroon/90 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/endowment/"
              className="inline-block border border-gold text-gold font-serif text-sm px-8 py-3 tracking-wide hover:bg-gold/10 transition-colors"
            >
              View Endowment
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
