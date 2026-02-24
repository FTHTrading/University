import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description:
    "Research institutes, laboratories, white papers, and strategic initiatives at FTHTrading University.",
};

const institutes = [
  {
    name: "Institute for Constitutional Governance",
    director: "Professor Victoria Langford",
    founded: "Est. 1948",
    description:
      "The Institute examines the legal, philosophical, and structural foundations of institutional authority. Its scholars have contributed to constitutional reform efforts in twelve nations and produced landmark analyses of sovereignty, federalism, and the rule of law.",
    areas: ["Constitutional Theory", "Comparative Governance", "Institutional Design", "Democratic Accountability"],
  },
  {
    name: "Centre for Artificial Intelligence & Ethics",
    director: "Professor Margaret Sinclair",
    founded: "Est. 2024",
    description:
      "The University's newest institute pioneers responsible AI development through rigorous model validation, fairness-aware machine learning, and governance frameworks for autonomous systems. The Centre operates the world's first comprehensive AI Model Validation Laboratory.",
    areas: ["Model Governance", "Algorithmic Fairness", "AI Safety", "Computational Ethics"],
  },
  {
    name: "Heritage Sciences Laboratory",
    director: "Professor Andrew Caldwell",
    founded: "Est. 1971",
    description:
      "Applying advanced analytical techniques to the preservation of cultural and architectural heritage. The Laboratory's work spans materials analysis, environmental monitoring, and the development of non-invasive conservation methods.",
    areas: ["Conservation Science", "Materials Analysis", "Digital Heritage", "Architectural Preservation"],
  },
  {
    name: "Institute for Biomedical Discovery",
    director: "Professor Catherine Whitfield",
    founded: "Est. 1962",
    description:
      "A translational research centre bridging basic biomedical science and clinical application. The Institute's programmes in genomics, immunology, and pharmacology have produced therapies now in use across three continents.",
    areas: ["Genomics", "Immunotherapy", "Pharmacology", "Clinical Trials Design"],
  },
  {
    name: "Harrington Institute for Engineering Science",
    director: "Professor James Harrington",
    founded: "Est. 1953",
    description:
      "Research in advanced materials, structural resilience, computational mechanics, and sustainable infrastructure. The Institute partners with government agencies and industry leaders on projects of national significance.",
    areas: ["Materials Science", "Structural Resilience", "Computational Engineering", "Sustainable Infrastructure"],
  },
  {
    name: "Centre for Economic & Strategic Analysis",
    director: "Professor Richard Pemberton",
    founded: "Est. 1985",
    description:
      "The Centre produces rigorous analyses of market dynamics, institutional finance, and strategic competition. Its working papers and policy briefs are consulted by central banks, regulatory bodies, and sovereign wealth funds worldwide.",
    areas: ["Market Theory", "Institutional Finance", "Strategic Competition", "Economic Policy"],
  },
];

const whitepapers = [
  {
    title: "Constitutional Frameworks for AI Governance: A Comparative Study",
    authors: "Sinclair, M., Langford, V., & Chen, W.",
    year: "2025",
    abstract:
      "This paper examines how constitutional principles — separation of powers, due process, and transparency — can inform the governance of artificial intelligence systems at the institutional and national level.",
  },
  {
    title: "Structural Resilience Under Climate Uncertainty: Probabilistic Methods",
    authors: "Harrington, J., & Okonkwo, A.",
    year: "2025",
    abstract:
      "A novel probabilistic framework for assessing the resilience of critical infrastructure under climate-driven stochastic loading, with case studies from three continents.",
  },
  {
    title: "The Endowment as Institutional Memory: Stewardship Across Centuries",
    authors: "Pemberton, R., & Ashworth, E.",
    year: "2024",
    abstract:
      "An analysis of how university endowments function not merely as financial instruments but as intergenerational commitments that encode institutional values and priorities.",
  },
  {
    title: "Genomic Markers of Immunotherapy Response in Solid Tumours",
    authors: "Whitfield, C., Park, S., & Reyes, L.",
    year: "2025",
    abstract:
      "A multi-cohort study identifying predictive genomic signatures for checkpoint inhibitor response, with implications for personalised oncology treatment protocols.",
  },
  {
    title: "Heritage Materials Degradation: Non-Invasive Spectroscopic Methods",
    authors: "Caldwell, A., & Marchetti, F.",
    year: "2024",
    abstract:
      "Development and validation of portable Raman spectroscopy techniques for real-time assessment of stone and mortar degradation in heritage buildings.",
  },
  {
    title: "Sovereign Wealth and Democratic Accountability: A New Framework",
    authors: "Pemberton, R., Langford, V., & Okoro, D.",
    year: "2025",
    abstract:
      "Proposes a transparency and accountability framework for sovereign wealth fund governance, drawing on institutional trust theory and comparative constitutional law.",
  },
];

const initiatives = [
  {
    name: "University Data Sovereignty Initiative",
    description:
      "Establishing institutional standards for data governance, privacy, and the ethical use of computational resources across all research programmes.",
  },
  {
    name: "Global Constitutional Dialogue",
    description:
      "A partnership with twelve universities across six continents to advance comparative research on governance, sovereignty, and democratic institution-building.",
  },
  {
    name: "Net-Zero Campus 2035",
    description:
      "A comprehensive programme to achieve carbon neutrality across the University's built environment through sustainable engineering, renewable energy, and heritage-appropriate retrofitting.",
  },
  {
    name: "AI Validation Laboratory Consortium",
    description:
      "An open consortium of academic institutions developing shared standards, tools, and methodologies for the independent validation of artificial intelligence models.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Hero
        title="Research & Innovation"
        subtitle="Advancing the frontier of knowledge through rigorous inquiry, institutional collaboration, and a commitment to the public good."
      />

      {/* ── Institutes ────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Research Institutes"
          title="Centres of Scholarly Excellence"
          description="Six dedicated institutes pursue fundamental and applied research across the full spectrum of the University's academic mission."
        />
        <div className="space-y-10 max-w-4xl mx-auto">
          {institutes.map((inst) => (
            <div key={inst.name} className="border border-gold/20 bg-ivory p-8 gold-emboss">
              <div className="flex flex-wrap items-baseline gap-4 mb-1">
                <h3 className="font-serif text-xl font-bold">{inst.name}</h3>
                <span className="engraved text-gold/60 text-xs">{inst.founded}</span>
              </div>
              <p className="text-sm text-maroon italic mb-4">
                Director: {inst.director}
              </p>
              <p className="text-stone text-sm leading-relaxed mb-4">
                {inst.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {inst.areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs border border-gold/30 text-stone-light px-3 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Research Impact ───────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Impact"
          title="Research by the Numbers"
          description="Metrics reflecting the scope and influence of the University's scholarly output."
        />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
            {[
              { stat: "$1.2B", label: "Annual Research Expenditure" },
              { stat: "320+", label: "Active Grants" },
              { stat: "2,800+", label: "Peer-Reviewed Publications (FY 2025)" },
              { stat: "187", label: "Patents Held" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <p className="font-serif text-2xl font-bold text-maroon">{s.stat}</p>
                <p className="text-xs tracking-widest uppercase text-stone-light mt-2">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "48", label: "National Academy Members" },
              { stat: "12", label: "Nobel Laureates (Historical)" },
              { stat: "94%", label: "Doctoral Placement Rate" },
              { stat: "4", label: "Continents Partnered" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <p className="font-serif text-2xl font-bold text-maroon">{s.stat}</p>
                <p className="text-xs tracking-widest uppercase text-stone-light mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── White Papers ──────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="White Papers"
          title="Selected Publications"
          description="Recent contributions from University scholars, addressing questions of enduring significance."
        />
        <div className="space-y-8 max-w-3xl mx-auto">
          {whitepapers.map((wp) => (
            <div key={wp.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-bold mb-1 leading-snug">
                {wp.title}
              </h3>
              <p className="text-sm text-maroon mb-2">
                {wp.authors} &middot; {wp.year}
              </p>
              <p className="text-stone text-sm leading-relaxed italic">
                {wp.abstract}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Strategic Initiatives ─────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Strategic Initiatives"
          title="Institutional Priorities"
          description="Cross-cutting programmes that harness the University's collective expertise to address challenges of global consequence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {initiatives.map((init) => (
            <div key={init.name} className="border-t-2 border-gold pt-6">
              <h3 className="font-serif text-lg font-bold mb-3">{init.name}</h3>
              <p className="text-stone text-sm leading-relaxed">{init.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Laboratories Overview ─────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Laboratories"
          title="Facilities for Discovery"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            The University operates over sixty research laboratories across its six
            colleges, ranging from classical chemistry and optics facilities to
            state-of-the-art computational clusters, robotics workshops, and
            biological containment suites. Each laboratory is supported by dedicated
            technical staff and governed by the University&apos;s rigorous safety
            and ethical review protocols.
          </p>
        </div>

        {/* Key facilities */}
        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "AI Model Validation Laboratory", college: "Centre for AI & Ethics", desc: "The world's first comprehensive facility for independent validation of AI models, including fairness testing suites, adversarial robustness evaluation, and interpretability analysis tools." },
            { name: "Caldwell Observatory", college: "College of Science", desc: "Home to the 36-inch reflecting telescope and an adaptive optics system. Active programmes in stellar spectroscopy and exoplanet detection." },
            { name: "Genomics & Proteomics Core", college: "College of Medicine", desc: "Next-generation sequencing, mass spectrometry, and bioinformatics pipelines supporting translational research across the biomedical sciences." },
            { name: "Heritage Conservation Lab", college: "Heritage Sciences", desc: "Analytical chemistry, electron microscopy, and environmental monitoring equipment for the study and preservation of cultural heritage materials." },
            { name: "High-Performance Computing Cluster", college: "University-wide", desc: "A 12,000-core research computing cluster with 4 PB of storage, supporting computational research across all disciplines. Ranked among the top 200 academic systems globally." },
            { name: "Advanced Materials Testing Facility", college: "College of Engineering", desc: "Destructive and non-destructive testing equipment for materials characterisation, including wind tunnel, hydraulic press, and fatigue testing rigs." },
          ].map((lab) => (
            <div key={lab.name} className="border border-gold/20 bg-ivory p-6 gold-emboss">
              <h4 className="font-serif font-bold text-base mb-1">{lab.name}</h4>
              <p className="text-maroon text-xs tracking-wide uppercase mb-2">{lab.college}</p>
              <p className="text-stone text-sm leading-relaxed">{lab.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12 max-w-4xl mx-auto">
          {[
            { stat: "60+", label: "Research Labs" },
            { stat: "12,000", label: "Compute Cores" },
            { stat: "$280M", label: "Lab Investment (5yr)" },
            { stat: "24/7", label: "Technical Support" },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <p className="font-serif text-2xl font-bold text-maroon">{s.stat}</p>
              <p className="text-xs tracking-widest uppercase text-stone-light mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
