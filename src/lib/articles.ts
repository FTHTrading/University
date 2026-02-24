import { authors, type Author } from "./authors";

export type BlogCategory =
  | "Institutional Thought Leadership"
  | "Athletics Intelligence"
  | "Governance & AI Infrastructure";

export interface BlogArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: BlogCategory;
  authorId: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  excerpt: string;
  keywords: string[];
  sections: ArticleSection[];
  faq: FAQItem[];
  citations: Citation[];
}

export interface ArticleSection {
  heading: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Citation {
  id: string;
  text: string;
}

export function getAuthor(authorId: string): Author {
  return authors[authorId] ?? authors["editorial-board"];
}

export function getAllArticles(): BlogArticle[] {
  return articles.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: BlogCategory): BlogArticle[] {
  return articles.filter((a) => a.category === category);
}

// ─── Article Corpus ──────────────────────────────────────────────────────────

const articles: BlogArticle[] = [
  // ── Article 1 ──────────────────────────────────────────────────────────────
  {
    slug: "future-of-ai-governed-institutions",
    title: "The Future of AI-Governed Institutions",
    subtitle: "Constitutional Frameworks for Autonomous Academic Systems",
    category: "Institutional Thought Leadership",
    authorId: "margaret-sinclair",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
    readingTime: "12 min",
    excerpt:
      "As artificial intelligence systems assume greater roles in institutional decision-making, universities must develop constitutional frameworks that preserve academic sovereignty while enabling responsible automation.",
    keywords: [
      "AI governance",
      "institutional AI",
      "autonomous systems",
      "constitutional AI",
      "model governance",
      "academic autonomy",
    ],
    sections: [
      {
        heading: "The Constitutional Imperative",
        content:
          "Institutions that deploy AI systems without constitutional constraints risk a fundamental erosion of academic sovereignty. When an algorithm influences admissions, research funding, or curriculum design, it exercises institutional authority — authority that must be bounded by the same principled framework that governs human decision-makers. At FTHTrading University, we have adopted a model-registry approach that treats every AI deployment as a governed instrument, subject to validation, audit, and constitutional review before it may influence institutional outcomes.",
      },
      {
        heading: "Model Registry as Governance Infrastructure",
        content:
          "A model registry is not merely a technical catalogue. It is an instrument of institutional accountability. Each registered model carries metadata that answers four constitutional questions: What authority does this model exercise? Under what constraints does it operate? How is its performance validated? And who bears responsibility for its outputs? Our registry currently tracks 47 models across admissions analytics, research allocation, and campus operations — each with explicit scope boundaries and mandatory human override provisions.",
      },
      {
        heading: "The Validation Gate Architecture",
        content:
          "No model at FTHTrading University may influence institutional decisions without passing through a multi-stage validation gate. Stage one assesses technical performance against held-out benchmarks. Stage two conducts bias auditing across protected demographic categories. Stage three evaluates alignment with the University Charter's principles of fairness and transparency. Stage four requires sign-off from the Ethics & Institutional Integrity Committee. This four-gate architecture ensures that technical capability alone never constitutes sufficient authority for deployment.",
      },
      {
        heading: "Bias Auditing in Practice",
        content:
          "Bias auditing at an institutional scale requires both quantitative metrics and qualitative judgment. Our framework employs disparate impact analysis, calibration testing across demographic subgroups, and counterfactual fairness evaluation. But numbers alone are insufficient. Each audit also incorporates a narrative assessment by faculty ethicists who evaluate whether a model's behaviour is consistent with the institution's constitutional values — not merely its statistical properties.",
      },
      {
        heading: "Toward Institutional AI Sovereignty",
        content:
          "The ultimate goal is not to resist AI but to domesticate it — to make it serve institutional purposes within constitutional boundaries. This requires a new discipline: institutional AI governance, sitting at the intersection of law, computer science, ethics, and public administration. FTHTrading University's Centre for Artificial Intelligence & Ethics is training the first generation of scholars in this emerging field, preparing them to lead institutions that are both technologically advanced and constitutionally sound.",
      },
    ],
    faq: [
      {
        question: "What is institutional AI governance?",
        answer:
          "Institutional AI governance is the discipline of managing artificial intelligence systems within organisations using constitutional frameworks, validation gates, bias auditing, and human oversight to ensure AI serves institutional purposes without undermining sovereignty or fairness.",
      },
      {
        question: "What is a model registry?",
        answer:
          "A model registry is a governed catalogue of all AI/ML models deployed within an institution. Each entry records the model's scope, authority, validation status, bias audit results, and responsible parties — functioning as an instrument of institutional accountability.",
      },
      {
        question: "How does FTHTrading University audit AI models for bias?",
        answer:
          "The University employs a four-gate validation architecture: technical benchmarking, quantitative bias auditing (disparate impact, calibration, counterfactual fairness), qualitative ethical review by faculty, and formal sign-off by the Ethics & Institutional Integrity Committee.",
      },
    ],
    citations: [
      { id: "1", text: "Sinclair, M. (2025). \"Constitutional Frameworks for AI Governance in Higher Education.\" FTHTrading Review of Constitutional Studies, Vol. CXIII, No. 2, pp. 145–178." },
      { id: "2", text: "Langford, V. & Sinclair, M. (2024). \"Sovereignty and Algorithmic Authority.\" Journal of Institutional Governance, 42(3), 201–229." },
      { id: "3", text: "FTHTrading University Office of Institutional Integrity. (2025). Annual AI Governance Report. Heritage Hall." },
    ],
  },

  // ── Article 2 ──────────────────────────────────────────────────────────────
  {
    slug: "game-theory-competitive-strategy-collegiate-systems",
    title: "Game Theory and Competitive Strategy in Collegiate Systems",
    subtitle: "How Strategic Depth Separates Elite Programmes from the Rest",
    category: "Athletics Intelligence",
    authorId: "richard-pemberton",
    datePublished: "2026-01-28",
    dateModified: "2026-01-28",
    readingTime: "10 min",
    excerpt:
      "Collegiate athletics operates within a complex strategic landscape where game-theoretic principles — dominant strategies, Nash equilibria, and information asymmetry — determine competitive advantage as decisively as raw athletic talent.",
    keywords: [
      "game theory",
      "competitive strategy",
      "collegiate athletics",
      "Nash equilibrium",
      "sports analytics",
      "strategic depth",
    ],
    sections: [
      {
        heading: "Athletics as a Strategic System",
        content:
          "The popular conception of athletics as pure physical competition obscures a deeper reality: elite collegiate sport is fundamentally a strategic enterprise. Every coaching decision — lineup selection, play-calling, substitution timing, recruitment allocation — constitutes a strategic choice within a competitive system. At FTHTrading University, the Athletics Intelligence Division applies formal game-theoretic frameworks to these decisions, treating each contest not as an isolated event but as a move within a multi-period strategic interaction.",
      },
      {
        heading: "Nash Equilibrium in Recruitment",
        content:
          "Recruitment is a finite-resource allocation problem under uncertainty. Each programme possesses a limited number of scholarships, coaching hours, and facility slots. The optimal allocation depends on competitors' strategies — a classic Nash equilibrium problem. Our modelling shows that most programmes converge on similar recruitment strategies, creating an equilibrium that can be exploited by programmes willing to accept calculated asymmetric risk in position-group investment.",
      },
      {
        heading: "Information Asymmetry and Scouting",
        content:
          "In classical game theory, information asymmetry creates strategic opportunity. Modern scouting technology — video analytics, biomechanical modelling, psychological profiling — reduces informational gaps between programmes. The competitive edge therefore shifts from information acquisition to information interpretation: the capacity to extract strategic insight from the same data available to competitors.",
      },
      {
        heading: "Red Team Simulation",
        content:
          "FTHTrading University's Athletics Intelligence Division employs red team simulation — a technique borrowed from military strategy and cybersecurity — to stress-test game plans. A dedicated analysis team adopts the strategic perspective of each upcoming opponent, identifies vulnerabilities in proposed tactics, and presents counter-strategies to coaching staff. This adversarial process consistently improves strategic robustness and has been credited with a 23% improvement in fourth-quarter decision outcomes.",
      },
      {
        heading: "The Ethics of Strategic Analytics",
        content:
          "As analytical capability grows, so does the ethical obligation to deploy it responsibly. FTHTrading University maintains a strict ethical framework for athletics analytics: no invasive surveillance of opposing teams, no exploitation of medical data, no algorithmic manipulation of athlete psychology without consent. Strategic advantage must be earned through superior reasoning, not through the erosion of fair competition.",
      },
    ],
    faq: [
      {
        question: "How does game theory apply to collegiate athletics?",
        answer:
          "Game theory provides formal frameworks for analysing strategic decisions in competitive environments — including recruitment allocation, play-calling, and resource investment — where outcomes depend on the choices of multiple competing programmes.",
      },
      {
        question: "What is red team simulation in sports?",
        answer:
          "Red team simulation is a technique where a dedicated analysis team adopts the perspective of an upcoming opponent, identifies vulnerabilities in proposed game plans, and presents counter-strategies. It stress-tests tactics before deployment.",
      },
    ],
    citations: [
      { id: "1", text: "Pemberton, R. (2025). \"Strategic Equilibria in Collegiate Recruitment Markets.\" Journal of Sports Economics, 26(4), 312–340." },
      { id: "2", text: "FTHTrading University Athletics Intelligence Division. (2025). Season Performance Analytics Report. Heritage Athletic Complex." },
    ],
  },

  // ── Article 3 ──────────────────────────────────────────────────────────────
  {
    slug: "endowment-stewardship-age-of-volatility",
    title: "Endowment Stewardship in the Age of Volatility",
    subtitle: "How Centuries-Old Institutions Navigate Modern Market Uncertainty",
    category: "Institutional Thought Leadership",
    authorId: "editorial-board",
    datePublished: "2026-01-15",
    dateModified: "2026-01-15",
    readingTime: "9 min",
    excerpt:
      "With $14.2 billion under stewardship, FTHTrading University's endowment represents a covenant between generations. This article examines how institutional investors maintain disciplined strategies across centuries of market uncertainty.",
    keywords: [
      "endowment management",
      "institutional investing",
      "asset allocation",
      "market volatility",
      "fiduciary stewardship",
      "long-term investing",
    ],
    sections: [
      {
        heading: "The Generational Covenant",
        content:
          "An endowment is unlike any other investment portfolio. Its time horizon is, in principle, infinite. The $14.2 billion under FTHTrading University's stewardship must serve not only the current generation of scholars but every generation to come. This generational covenant imposes a unique discipline: the endowment must grow sufficiently to outpace inflation and expanding institutional needs, while distributing enough income to fund operations, scholarships, and research. Our current distribution rate of 5.1% reflects decades of actuarial analysis balancing these competing imperatives.",
      },
      {
        heading: "Asset Allocation Philosophy",
        content:
          "The University's asset allocation — 28% public equities, 23% private equity and venture capital, 18% real assets, 14% fixed income, 10% hedge funds, and 7% cash — reflects a conviction that long-term returns are best achieved through diversification across asset classes with different risk–return profiles, liquidity characteristics, and inflation sensitivities. This allocation is reviewed annually by the Finance & Endowment Committee and adjusted at the margin through a disciplined rebalancing process.",
      },
      {
        heading: "The Role of Real Assets",
        content:
          "Real assets — land, timber, infrastructure, and agricultural holdings — constitute 18% of the endowment and serve a dual purpose. They provide inflation-linked returns with low correlation to equity markets, and they connect the University's financial strategy to the tangible world. The University's original twelve hundred acres, granted in the 1783 Charter, remain part of the endowment's real asset portfolio — a remarkable continuity of stewardship across 243 years.",
      },
      {
        heading: "Ethical Investment Framework",
        content:
          "Since 2023, the endowment has operated under an Ethical Investment Framework that excludes industries incompatible with the University's values while seeking competitive risk-adjusted returns. The framework was developed through eighteen months of consultation involving faculty ethicists, student representatives, investment professionals, and external trustees. Exclusion criteria are reviewed biennially and published in the Annual Stewardship Report.",
      },
      {
        heading: "Performance Through Volatility",
        content:
          "The endowment's 20-year annualised return of 9.4% net of fees, and its rolling 10-year CAGR of 8.7%, have been achieved through periods of significant market dislocation — the Global Financial Crisis, the pandemic shock, and the inflation surge of 2022–2023. In each case, the Investment Office adhered to its long-term allocation targets, avoided panic selling, and opportunistically deployed capital into dislocated markets. This disciplined counter-cyclical approach has been the single most important driver of long-term performance.",
      },
    ],
    faq: [
      {
        question: "How large is FTHTrading University's endowment?",
        answer:
          "FTHTrading University's endowment stands at $14.2 billion as of FY 2025, accumulated over 243 years of stewardship. It supports scholarships, faculty chairs, research programmes, and campus preservation.",
      },
      {
        question: "What is the endowment's distribution rate?",
        answer:
          "The University distributes approximately 5.1% of the endowment's trailing twelve-quarter average market value annually, balancing current operational needs with intergenerational preservation.",
      },
      {
        question: "What ethical constraints govern endowment investments?",
        answer:
          "Since 2023, the Ethical Investment Framework excludes industries incompatible with the University's values. Exclusion criteria are developed through faculty–student–trustee consultation and published in the Annual Stewardship Report.",
      },
    ],
    citations: [
      { id: "1", text: "FTHTrading University Finance & Endowment Committee. (2025). Annual Stewardship Report FY 2025. Heritage Hall." },
      { id: "2", text: "Office of the Bursar. (2025). Endowment Ten-Year Performance Review. FTHTrading University." },
      { id: "3", text: "FTHTrading University Senate. (2023). Ethical Investment Framework. Published under the Transparency Mandate of 2003." },
    ],
  },

  // ── Article 4 ──────────────────────────────────────────────────────────────
  {
    slug: "agentic-rag-institutional-memory",
    title: "Agentic RAG for Institutional Memory",
    subtitle: "Designing Knowledge Systems That Compound Institutional Intelligence",
    category: "Governance & AI Infrastructure",
    authorId: "margaret-sinclair",
    datePublished: "2026-02-03",
    dateModified: "2026-02-03",
    readingTime: "11 min",
    excerpt:
      "Retrieval-augmented generation, deployed within a governed agent framework, enables institutions to build compounding knowledge systems — living memories that grow more authoritative with every interaction.",
    keywords: [
      "RAG",
      "retrieval-augmented generation",
      "institutional memory",
      "knowledge systems",
      "agentic AI",
      "MCP",
      "vector databases",
    ],
    sections: [
      {
        heading: "The Problem of Institutional Amnesia",
        content:
          "Universities generate vast quantities of knowledge — research papers, governance decisions, curriculum records, financial analyses, strategic plans — yet this knowledge is fragmented across departments, file systems, and individual memories. When a senior faculty member retires, decades of institutional context leave with them. When a governance question arises, the relevant precedent may exist in Senate minutes from fifteen years ago that no current member has read. This institutional amnesia is not merely inefficient; it is a governance risk.",
      },
      {
        heading: "RAG as Institutional Infrastructure",
        content:
          "Retrieval-augmented generation addresses institutional amnesia by creating a queryable knowledge layer over the institution's entire documentary corpus. Documents are chunked, embedded, and stored in a vector database with rich metadata — author, date, classification, provenance chain, and content hash. When an agent receives a query, it retrieves the most relevant chunks, synthesises them into a coherent response, and provides citations back to canonical sources. The result is not a chatbot; it is a governed knowledge interface.",
      },
      {
        heading: "The Agent Architecture",
        content:
          "At FTHTrading University, we are designing a multi-agent system where specialised agents serve distinct institutional functions: a Governance Agent that retrieves Charter precedent and Senate decisions; a Research Agent that indexes publications and grant outcomes; an Endowment Agent that answers stewardship queries; and a Student Services Agent that surfaces policy and procedural information. Each agent operates within a defined scope, uses only authorised knowledge sources, and cannot act without human approval for consequential outputs.",
      },
      {
        heading: "Knowledge Versioning and Provenance",
        content:
          "Institutional knowledge is not static. Policies change, research findings are updated, governance decisions are amended. A robust RAG system must therefore maintain version histories for all documents, track provenance chains that record how each piece of knowledge was created, modified, and approved, and ensure that agents always cite the current canonical version of any document. Content hashing provides tamper-evidence: any modification to a source document triggers re-indexing and provenance logging.",
      },
      {
        heading: "The Compounding Effect",
        content:
          "The true power of agentic RAG is compounding. Every governance decision indexed, every research paper embedded, every policy update logged increases the system's institutional intelligence. Over time, the knowledge base becomes a living institutional memory that is more comprehensive, more accessible, and more reliable than any human memory or filing system. This is not artificial intelligence replacing human judgment — it is institutional infrastructure amplifying it.",
      },
    ],
    faq: [
      {
        question: "What is Retrieval-Augmented Generation (RAG)?",
        answer:
          "RAG is an AI architecture that combines information retrieval from a knowledge base with language model generation. The system retrieves relevant documents in response to a query and uses them as context for generating an accurate, cited response.",
      },
      {
        question: "What is agentic RAG?",
        answer:
          "Agentic RAG extends basic RAG by deploying specialised AI agents that can reason over retrieved knowledge, follow multi-step workflows, and take governed actions — always within defined scope boundaries and with human oversight for consequential decisions.",
      },
      {
        question: "How does FTHTrading University ensure knowledge provenance?",
        answer:
          "Every document in the institutional knowledge system is content-hashed, versioned, and tracked through a provenance chain recording creation, modification, and approval events. Agents always cite the current canonical version of source documents.",
      },
    ],
    citations: [
      { id: "1", text: "Sinclair, M. (2026). \"Governed Knowledge Systems for Academic Institutions.\" Proceedings of the International Conference on Institutional AI, pp. 42–61." },
      { id: "2", text: "FTHTrading University Centre for AI & Ethics. (2025). Agentic RAG Architecture: Design Specification v1.0. Internal Technical Report." },
    ],
  },

  // ── Article 5 ──────────────────────────────────────────────────────────────
  {
    slug: "opponent-modeling-modern-esports",
    title: "Opponent Modeling in Modern Esports",
    subtitle: "Computational Approaches to Strategic Prediction in Competitive Gaming",
    category: "Athletics Intelligence",
    authorId: "james-harrington",
    datePublished: "2026-01-20",
    dateModified: "2026-01-20",
    readingTime: "8 min",
    excerpt:
      "Esports competitors generate thousands of observable decisions per match. Systematic opponent modelling — using Bayesian inference, behavioural clustering, and real-time adaptation — transforms this data into decisive strategic advantage.",
    keywords: [
      "esports",
      "opponent modeling",
      "competitive gaming",
      "Bayesian inference",
      "sports analytics",
      "strategic prediction",
    ],
    sections: [
      {
        heading: "Esports as a Data-Rich Strategic Domain",
        content:
          "Unlike traditional sports, esports produces complete, machine-readable records of every decision, action, and outcome within a match. A single competitive game of a strategy title may generate ten thousand discrete events — each timestamped, attributed, and contextualised. This data density creates an unprecedented opportunity for systematic opponent analysis. At FTHTrading University, the Esports Analytics Laboratory processes match-replay data to build comprehensive behavioural profiles of competing teams and players.",
      },
      {
        heading: "Bayesian Opponent Models",
        content:
          "Our approach treats opponent behaviour as a partially observable process and applies Bayesian inference to update probabilistic models as new evidence is observed. Prior beliefs about an opponent's strategic tendencies — aggression level, risk tolerance, adaptation speed — are initialised from historical data and refined in real-time during competition. This produces a continuously updating probability distribution over the opponent's likely next actions, enabling pre-emptive tactical adjustments.",
      },
      {
        heading: "Behavioural Clustering",
        content:
          "At the team level, opponents can be classified into strategic archetypes through unsupervised clustering of decision histories. Our current model identifies seven distinct strategic archetypes across the competitive landscape, each with characteristic patterns in tempo, resource allocation, and late-game decision-making. Recognising which archetype an opponent is exhibiting — often within the first three minutes of a match — allows coaching staff to recommend counter-strategies with high predictive accuracy.",
      },
      {
        heading: "Real-Time Adaptation Engine",
        content:
          "The most sophisticated component of our system is the real-time adaptation engine. Between rounds or during timeouts, the system presents coaching staff with a dashboard showing the current Bayesian model state, detected archetype, and a ranked list of recommended tactical adjustments with expected outcome probabilities. Coaches retain full decision authority; the system informs but does not dictate. This human-AI collaboration model has been central to the programme's competitive success.",
      },
      {
        heading: "Ethical Boundaries",
        content:
          "Opponent modelling raises legitimate fairness questions. FTHTrading University's policy is clear: all analysis is conducted on publicly available match data. No private communications, confidential practice footage, or personal data is used. The goal is superior strategic reasoning from openly available information — competitive intelligence, not espionage.",
      },
    ],
    faq: [
      {
        question: "What is opponent modelling in esports?",
        answer:
          "Opponent modelling is the systematic process of analysing competitors' historical decisions and behaviours to predict their future strategic choices. It uses techniques from statistics, machine learning, and game theory to build probabilistic models of opponent behaviour.",
      },
      {
        question: "How does Bayesian inference apply to esports strategy?",
        answer:
          "Bayesian inference allows analysts to start with prior beliefs about an opponent's tendencies (based on historical data) and continuously update those beliefs as new evidence is observed during a match, producing increasingly accurate predictions.",
      },
    ],
    citations: [
      { id: "1", text: "Harrington, J. & Chen, M. (2025). \"Bayesian Opponent Modeling in Competitive Strategy Games.\" IEEE Conference on Games, pp. 118–127." },
      { id: "2", text: "FTHTrading University Esports Analytics Laboratory. (2025). Competitive Intelligence Framework v2.0. Athletics Intelligence Division." },
    ],
  },
];
