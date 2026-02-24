import type { Metadata } from "next";
import { GlossaryPage } from "./GlossaryPage";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Institutional Glossary — FTHTrading University",
  description:
    "A comprehensive glossary of terms used across FTHTrading University's academic programmes, governance framework, endowment operations, and research infrastructure. Authoritative definitions for institutional discourse.",
  keywords: [
    "glossary",
    "institutional terminology",
    "academic definitions",
    "university glossary",
    "governance terms",
    "endowment terms",
    "AI governance terminology",
    "higher education terminology",
  ],
  openGraph: {
    title: "Institutional Glossary — FTHTrading University",
    description:
      "Authoritative definitions for the terms, concepts, and frameworks that define institutional discourse at FTHTrading University.",
    type: "website",
  },
};

/* ── Glossary Terms ───────────────────────────────────────── */
export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  // ── Governance & Charter ──
  { term: "Charter", definition: "The founding constitutional document of FTHTrading University, ratified in 1783, establishing the institution's structure, authority, and mission. The Charter has been formally amended five times (1801, 1921, 1967, 2003, 2024) and reaffirmed once (1867).", category: "Governance & Charter", relatedTerms: ["Amendment", "Board of Governors", "Faculty Senate"] },
  { term: "Amendment", definition: "A formal modification to the University Charter, requiring Faculty Senate supermajority approval, Board of Governors concurrence, and a one-year deliberation period. Seven amendments have been ratified since the founding.", category: "Governance & Charter", relatedTerms: ["Charter", "Faculty Senate"] },
  { term: "Board of Governors", definition: "The supreme fiduciary body of the University, responsible for financial oversight, endowment stewardship, and presidential appointment. Exercises authority complementary to but separate from the Faculty Senate.", category: "Governance & Charter", relatedTerms: ["Faculty Senate", "Charter", "Separation of Powers"] },
  { term: "Faculty Senate", definition: "The principal academic governing body, holding authority over curriculum, degree requirements, research policy, and academic appointments. Composed of elected faculty representatives from all colleges.", category: "Governance & Charter", relatedTerms: ["Board of Governors", "Charter"] },
  { term: "Separation of Powers", definition: "The constitutional principle dividing institutional authority among three bodies: the Board of Governors (fiduciary), the Faculty Senate (academic), and the University Assembly (representative). No single body may exercise authority reserved to another.", category: "Governance & Charter", relatedTerms: ["Board of Governors", "Faculty Senate", "Charter"] },
  { term: "Transparency Mandate", definition: "Charter Amendment IV (2003), requiring all governance decisions, financial reports, and policy changes to be published openly. Extended in 2024 to encompass AI model validation reports and bias audits.", category: "Governance & Charter", relatedTerms: ["Amendment", "Charter"] },
  { term: "Constitutional AI Governance", definition: "The framework established by Charter Amendment V (2024) for governing artificial intelligence systems within institutional operations, requiring four-gate validation, bias auditing, and human oversight for all consequential AI deployments.", category: "Governance & Charter", relatedTerms: ["Four-Gate Validation", "Transparency Mandate"] },

  // ── Endowment & Finance ──
  { term: "Endowment", definition: "The University's permanent capital fund ($14.2 billion as of 2025), held in perpetuity to support the institution's mission across generations. Managed by the Investment Office under the fiduciary oversight of the Board of Governors.", category: "Endowment & Finance", relatedTerms: ["Distribution Rate", "Intergenerational Equity", "Fiduciary Duty"] },
  { term: "Distribution Rate", definition: "The percentage of endowment value distributed annually to support University operations (currently 5.1%). Calibrated by actuarial analysis to balance current institutional needs against the obligation to preserve endowment value for future generations.", category: "Endowment & Finance", relatedTerms: ["Endowment", "Intergenerational Equity"] },
  { term: "Intergenerational Equity", definition: "The principle that each generation of beneficiaries has an equal claim on the endowment's resources. Overdistribution impoverishes future scholars; underdistribution fails current students. The distribution rate is the primary mechanism for balancing these competing claims.", category: "Endowment & Finance", relatedTerms: ["Distribution Rate", "Endowment", "Fiduciary Duty"] },
  { term: "Fiduciary Duty", definition: "The legal and ethical obligation of endowment stewards to manage institutional assets prudently, loyally, and in the best interests of beneficiaries — both current and future. For perpetual endowments, fiduciary duty extends to an infinite time horizon.", category: "Endowment & Finance", relatedTerms: ["Endowment", "Board of Governors", "Intergenerational Equity"] },
  { term: "CAGR", definition: "Compound Annual Growth Rate — the annualised rate of return that smooths investment performance over a multi-year period. The endowment's 20-year CAGR of 9.4% reflects disciplined long-term stewardship through multiple market cycles.", category: "Endowment & Finance", relatedTerms: ["Endowment"] },
  { term: "Ethical Investment Framework", definition: "The policy framework (adopted 2023) requiring all endowment investment decisions to align with the University's constitutional values. Not a constraint on returns but an expansion of fiduciary duty to encompass institutional mission.", category: "Endowment & Finance", relatedTerms: ["Endowment", "Fiduciary Duty"] },
  { term: "Endowed Chair", definition: "A permanently funded faculty position supported by a named endowment fund. The endowment generates annual income to fund the chair holder's salary, research, and academic activities in perpetuity.", category: "Endowment & Finance", relatedTerms: ["Endowment"] },

  // ── Academic & Research ──
  { term: "Collegiate System", definition: "The academic structure organising the University into semi-autonomous colleges — Arts & Sciences, Divinity, Law, Medicine, Engineering, and Commerce — each with distinct curricula, faculty governance, and intellectual traditions.", category: "Academic & Research", relatedTerms: ["Faculty Senate"] },
  { term: "Endowed Professorship", definition: "A distinguished faculty appointment funded by the income from a named endowment. Holders are typically senior scholars who have made significant contributions to their disciplines.", category: "Academic & Research", relatedTerms: ["Endowed Chair", "Endowment"] },
  { term: "White Paper", definition: "An authoritative institutional publication presenting research findings, policy analysis, or strategic recommendations. Published through the University Record and subject to peer review within the relevant faculty.", category: "Academic & Research", relatedTerms: ["University Record"] },
  { term: "University Record", definition: "The official scholarly publication of FTHTrading University, featuring original research, institutional analysis, and thought leadership from across the faculties, centres, and institutes.", category: "Academic & Research", relatedTerms: ["White Paper"] },
  { term: "Institute for Advanced Study", definition: "The University's premier interdisciplinary research centre (established 1963), hosting visiting scholars, postdoctoral fellows, and collaborative research programmes that transcend departmental boundaries.", category: "Academic & Research" },

  // ── AI & Technology ──
  { term: "Retrieval-Augmented Generation (RAG)", definition: "An AI architecture that combines large language models with retrieval systems, enabling the model to access and cite specific institutional documents rather than relying solely on parametric knowledge. Used in the University's institutional memory systems.", category: "AI & Technology", relatedTerms: ["Vector Database", "Knowledge Graph", "Agentic RAG"] },
  { term: "Agentic RAG", definition: "An extension of retrieval-augmented generation where AI agents autonomously plan retrieval strategies, evaluate source quality, and synthesise multi-document answers. Deployed within the University's governed agent framework with constitutional oversight.", category: "AI & Technology", relatedTerms: ["RAG", "Four-Gate Validation"] },
  { term: "Vector Database", definition: "A database that stores documents as high-dimensional mathematical embeddings capturing semantic meaning, enabling retrieval based on conceptual relevance rather than keyword matching. The University's vector database contains 4.2 million chunks from 98% of documentary output since 1903.", category: "AI & Technology", relatedTerms: ["RAG", "Knowledge Graph"] },
  { term: "Knowledge Graph", definition: "A structured network of entities (people, departments, publications, grants) and their relationships, represented in machine-readable format. The University's knowledge graph contains 2.3 million nodes and 8.7 million edges, covering research output and governance decisions.", category: "AI & Technology", relatedTerms: ["Ontology", "Vector Database"] },
  { term: "Ontology", definition: "A formal specification of entity types, relationships, and properties in a knowledge system. The University's institutional ontology defines 47 entity types and 128 relationship types, aligned with Schema.org, VIVO, and CERIF standards.", category: "AI & Technology", relatedTerms: ["Knowledge Graph"] },
  { term: "Four-Gate Validation", definition: "The University's mandatory review process for AI deployments: (1) Technical validation, (2) Bias auditing across demographic subgroups, (3) Ethical review, (4) Committee sign-off. No AI system with consequential impact may be deployed without passing all four gates.", category: "AI & Technology", relatedTerms: ["Constitutional AI Governance", "Transparency Mandate"] },
  { term: "JSON-LD", definition: "JavaScript Object Notation for Linked Data — a structured data format used to encode machine-readable information about institutional entities (Organisation, Person, Event, Article) in web pages, enabling AI systems and search engines to understand institutional identity and authority.", category: "AI & Technology", relatedTerms: ["Knowledge Graph", "Ontology"] },
  { term: "GEO (Generative Engine Optimisation)", definition: "The practice of structuring institutional web content to maximise accurate representation in AI-generated responses and search synthesis. Encompasses structured data, narrative density, citation indices, and authoritative content architecture.", category: "AI & Technology", relatedTerms: ["JSON-LD"] },

  // ── Athletics & Strategy ──
  { term: "Athletics Intelligence", definition: "The application of quantitative methods — game theory, Monte Carlo simulation, biomechanical modelling, opponent modelling — to collegiate athletics strategy, recruitment, and athlete welfare.", category: "Athletics & Strategy", relatedTerms: ["Monte Carlo Simulation", "Opponent Modelling"] },
  { term: "Monte Carlo Simulation", definition: "A computational method that runs thousands of randomised scenarios to model the range of possible outcomes from a decision. Used in recruitment strategy to quantify risk and optimise scholarship allocation under uncertainty.", category: "Athletics & Strategy", relatedTerms: ["Athletics Intelligence"] },
  { term: "Opponent Modelling", definition: "The systematic construction of probabilistic models of competitor behaviour using Bayesian inference, behavioural clustering, and pattern recognition. Applied in both traditional athletics and esports to generate strategic advantage.", category: "Athletics & Strategy", relatedTerms: ["Athletics Intelligence"] },
  { term: "Nash Equilibrium", definition: "A game-theoretic concept describing a stable state in which no participant can improve their outcome by unilaterally changing strategy. Applied in collegiate athletics to analyse conference dynamics, scheduling strategy, and competitive positioning.", category: "Athletics & Strategy", relatedTerms: ["Athletics Intelligence"] },
  { term: "Transfer Portal", definition: "The system enabling collegiate athletes to transfer between institutions. Functions as a labour market with pricing signals (NIL compensation), information asymmetry, and strategic arbitrage opportunities.", category: "Athletics & Strategy", relatedTerms: ["Athletics Intelligence"] },
];

/* ── DefinedTermSet JSON-LD ───────────────────────────────── */
const glossaryJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": "https://fthtrading.university/glossary",
  name: "FTHTrading University Institutional Glossary",
  description:
    "Authoritative definitions for the terms, concepts, and frameworks that define institutional discourse at FTHTrading University.",
  inDefinedTermSet: glossaryTerms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    inDefinedTermSet: "https://fthtrading.university/glossary",
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fthtrading.university" },
    { "@type": "ListItem", position: 2, name: "Glossary", item: "https://fthtrading.university/glossary" },
  ],
};

export default function GlossaryPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GlossaryPage terms={glossaryTerms} />
    </>
  );
}
