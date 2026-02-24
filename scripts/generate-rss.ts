/**
 * RSS Feed Generator — runs at build time via `prebuild` npm script.
 * Reads article data and generates /public/blog/rss.xml
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

// Inline the article data to avoid import path issues in the build script
const articles = [
  {
    slug: "future-of-ai-governed-institutions",
    title: "The Future of AI-Governed Institutions",
    excerpt: "As artificial intelligence systems assume greater roles in institutional decision-making, universities must develop constitutional frameworks that preserve academic sovereignty while enabling responsible automation.",
    datePublished: "2026-02-10",
    author: "Professor Margaret Sinclair",
    category: "Institutional Thought Leadership",
  },
  {
    slug: "constitutional-precedent-digital-governance",
    title: "Constitutional Precedent in Digital Governance",
    excerpt: "The principles embedded in FTHTrading University's 1783 Charter — separation of powers, transparency mandates, and procedural due process — provide a surprisingly robust framework for governing digital systems.",
    datePublished: "2026-02-14",
    author: "Professor Victoria Langford",
    category: "Governance & AI Infrastructure",
  },
  {
    slug: "fiduciary-duty-in-perpetuity",
    title: "Fiduciary Duty in Perpetuity",
    excerpt: "Managing a $14.2 billion endowment with an infinite time horizon imposes unique fiduciary obligations — obligations that extend beyond financial returns to encompass ethical stewardship and intergenerational equity.",
    datePublished: "2026-02-07",
    author: "Professor Richard Pemberton",
    category: "Institutional Thought Leadership",
  },
  {
    slug: "agentic-rag-institutional-memory",
    title: "Agentic RAG for Institutional Memory",
    excerpt: "Retrieval-augmented generation, deployed within a governed agent framework, enables institutions to build compounding knowledge systems — living memories that grow more authoritative with every interaction.",
    datePublished: "2026-02-03",
    author: "Professor Margaret Sinclair",
    category: "Governance & AI Infrastructure",
  },
  {
    slug: "game-theory-competitive-strategy-collegiate-systems",
    title: "Game Theory and Competitive Strategy in Collegiate Systems",
    excerpt: "Collegiate athletics operates within a complex strategic landscape where game-theoretic principles — dominant strategies, Nash equilibria, and information asymmetry — determine competitive advantage as decisively as raw athletic talent.",
    datePublished: "2026-01-28",
    author: "Professor Richard Pemberton",
    category: "Athletics Intelligence",
  },
  {
    slug: "simulation-driven-recruitment-strategy",
    title: "Simulation-Driven Recruitment Strategy",
    excerpt: "Monte Carlo simulation enables athletics programmes to model thousands of potential recruitment scenarios, quantifying risk and optimising scholarship allocation under uncertainty.",
    datePublished: "2026-01-25",
    author: "Professor James Harrington",
    category: "Athletics Intelligence",
  },
  {
    slug: "opponent-modeling-modern-esports",
    title: "Opponent Modeling in Modern Esports",
    excerpt: "Esports competitors generate thousands of observable decisions per match. Systematic opponent modelling — using Bayesian inference, behavioural clustering, and real-time adaptation — transforms this data into decisive strategic advantage.",
    datePublished: "2026-01-20",
    author: "Professor James Harrington",
    category: "Athletics Intelligence",
  },
  {
    slug: "endowment-stewardship-age-of-volatility",
    title: "Endowment Stewardship in the Age of Volatility",
    excerpt: "With $14.2 billion under stewardship, FTHTrading University's endowment represents a covenant between generations. This article examines how institutional investors maintain disciplined strategies across centuries of market uncertainty.",
    datePublished: "2026-01-15",
    author: "The Editorial Board",
    category: "Institutional Thought Leadership",
  },
  {
    slug: "knowledge-graphs-institutional-intelligence",
    title: "Knowledge Graphs for Institutional Intelligence",
    excerpt: "Knowledge graphs provide the semantic infrastructure that connects institutional data — research outputs, governance decisions, financial records, and personnel — into a queryable, machine-readable intelligence layer.",
    datePublished: "2025-12-20",
    author: "Professor Margaret Sinclair",
    category: "Governance & AI Infrastructure",
  },
  {
    slug: "ethics-of-predictive-analytics-admissions",
    title: "The Ethics of Predictive Analytics in Admissions",
    excerpt: "Universities increasingly deploy predictive analytics in admissions. This article examines the ethical frameworks necessary to ensure that algorithmic efficiency does not compromise fairness, diversity, or the holistic evaluation of human potential.",
    datePublished: "2025-12-15",
    author: "Professor Victoria Langford",
    category: "Institutional Thought Leadership",
  },
  {
    slug: "biomechanical-modelling-injury-prevention",
    title: "Biomechanical Modelling for Injury Prevention",
    excerpt: "Finite element analysis and musculoskeletal simulation enable sports medicine teams to predict injury risk, optimise training loads, and design personalised prevention programmes for collegiate athletes.",
    datePublished: "2025-12-10",
    author: "Professor James Harrington",
    category: "Athletics Intelligence",
  },
  {
    slug: "academic-freedom-age-of-algorithms",
    title: "Academic Freedom in the Age of Algorithms",
    excerpt: "As AI systems increasingly mediate access to knowledge — through search ranking, content recommendation, and information filtering — universities must actively defend academic freedom against algorithmic constraints on inquiry.",
    datePublished: "2025-12-05",
    author: "Professor Victoria Langford",
    category: "Institutional Thought Leadership",
  },
  {
    slug: "transfer-portal-economics",
    title: "Transfer Portal Economics",
    excerpt: "The transfer portal has transformed collegiate athletics into a functioning labour market with pricing signals, information asymmetry, and strategic arbitrage opportunities — demanding economic literacy from coaching staffs.",
    datePublished: "2025-11-28",
    author: "Professor Richard Pemberton",
    category: "Athletics Intelligence",
  },
  {
    slug: "vector-databases-institutional-memory",
    title: "Vector Databases for Institutional Memory",
    excerpt: "Vector databases transform institutional documents — governance records, research papers, policy documents — into high-dimensional embeddings that enable semantic search, intelligent retrieval, and knowledge discovery across centuries of institutional output.",
    datePublished: "2025-11-20",
    author: "Professor Margaret Sinclair",
    category: "Governance & AI Infrastructure",
  },
  {
    slug: "institutional-resilience-through-governance-design",
    title: "Institutional Resilience Through Governance Design",
    excerpt: "Institutional resilience is not accidental. It is the product of governance design — constitutional structures that enable adaptation while preserving identity, balancing innovation with continuity across centuries of environmental change.",
    datePublished: "2025-11-15",
    author: "The Editorial Board",
    category: "Institutional Thought Leadership",
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateRSS(): string {
  const baseUrl = "https://fthtrading.university";
  const now = new Date().toUTCString();

  const items = articles
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .map(
      (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${baseUrl}/blog/${a.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${a.slug}</guid>
      <pubDate>${new Date(a.datePublished).toUTCString()}</pubDate>
      <description>${escapeXml(a.excerpt)}</description>
      <author>${escapeXml(a.author)}</author>
      <category>${escapeXml(a.category)}</category>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>University Record — FTHTrading University</title>
    <link>${baseUrl}/blog</link>
    <description>Original scholarship from the faculties, centres, and institutes of FTHTrading University — advancing the discourse on institutional governance, competitive strategy, and technological sovereignty.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <managingEditor>chancellor@fthtrading.university (Office of the Chancellor)</managingEditor>
    <webMaster>webmaster@fthtrading.university (University Web Services)</webMaster>
    <copyright>© 2026 FTHTrading University. Established 1783. All rights reserved.</copyright>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/crest.svg</url>
      <title>FTHTrading University</title>
      <link>${baseUrl}</link>
    </image>
${items}
  </channel>
</rss>`;
}

// Write the file
const outDir = join(process.cwd(), "public", "blog");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "rss.xml"), generateRSS(), "utf-8");
console.log("✓ RSS feed generated: public/blog/rss.xml");
