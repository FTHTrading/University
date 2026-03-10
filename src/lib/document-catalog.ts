export interface DocumentItem {
  slug: string;
  title: string;
  description: string;
  href: string;
  fileType: string;
  size: string;
}

export interface DocumentCategory {
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
  documents: DocumentItem[];
}

function pdf(slug: string, title: string, description: string): DocumentItem {
  return {
    slug,
    title,
    description,
    href: `/documents/${slug}.pdf`,
    fileType: "PDF",
    size: "~4 KB",
  };
}

export const documentCategories: DocumentCategory[] = [
  {
    title: "Founding & Governance",
    eyebrow: "Charter & Constitution",
    description:
      "The constitutional foundation of Fitzherbert University — the Heritage Charter of 1783, the Senate Standing Orders, and the governance instruments that bind the institution.",
    icon: "⬡",
    documents: [
      pdf("university-charter-1783", "University Charter (1783)", "The original Heritage Charter granted to Fitzherbert University in 1783 and ratified under the 2025 Rechartering Protocol. The foundational constitutional document."),
      pdf("senate-standing-orders", "Senate Standing Orders", "Procedural rules and standing orders governing the Academic Senate, committee formation, voting protocols, and legislative procedures."),
      pdf("annual-governance-report-fy-2025", "Annual Governance Report — FY 2025", "Comprehensive annual report covering governance decisions, epoch transitions, compliance assessments, and institutional milestones for fiscal year 2025."),
      pdf("freedom-of-information-protocol", "Freedom of Information Protocol", "The University's commitment to transparency and public access to institutional records, governance decisions, and research output."),
      pdf("community-standards-code-of-conduct", "Community Standards & Code of Conduct", "Standards of conduct for all University community members — including human staff, students, and Visiting Intelligences operating under Fellowship Status."),
    ],
  },
  {
    title: "Student Life & Academic Regulations",
    eyebrow: "Handbooks & Regulations",
    description:
      "Everything a student needs to understand life at Fitzherbert University — from epoch-aligned term dates and tuition provisions to grading frameworks and the Human Continuity Requirement.",
    icon: "◉",
    documents: [
      pdf("student-handbook-2025-26", "Student Handbook 2025–26", "The definitive guide to University life during the Third Epoch. Covers matriculation, residential life, the Human Continuity Requirement, and the use of Visiting Intelligences in coursework."),
      pdf("epoch-academic-calendar-2025-26", "Epoch Academic Calendar 2025–26", "Official term dates, examination periods, Epoch Transition Review windows, FITZ Token Distribution date, and Visiting Intelligence fellowship review periods."),
      pdf("tuition-fees-financial-aid-guide", "Tuition Fees & Financial Aid Guide", "Complete fee schedule, bursary information, the Provenance Scholarship criteria, and FITZ token stipend provisions for 2025–26."),
      pdf("grading-framework-epoch-aligned", "Assessment & Grading Framework", "Epoch-aligned assessment criteria including the Verified Reasoning Dimension. Grade descriptors, moderation procedures, and Transition-Period submission policy."),
      pdf("academic-integrity-ai-policy", "Academic Integrity & AI Authorship Policy", "Seven categories of AI-assisted work, provenance declaration requirements, and the full case-study catalogue of Academic Provenance Fraud rulings."),
    ],
  },
  {
    title: "Programmes, Degrees & Admissions",
    eyebrow: "Academic Programmes",
    description:
      "Complete programme handbooks, course catalogues, degree certificate specifications, and the technical admissions requirements for all Fitzherbert University qualifications.",
    icon: "◈",
    documents: [
      pdf("undergraduate-course-catalogue", "Undergraduate Course Catalogue 2025–26", "All 214 undergraduate modules across the B.Intel, B.Sys, B.Prov, and B.Gov programmes — with learning outcomes, AI tool permissions, and Polygon credential details."),
      pdf("masters-programme-handbook", "Masters Programme Handbook 2025–26", "Handbook for M.AI, M.Proto, M.Gov, and M.Crypto students. Covers module selection, dissertation supervision, FITZ allocations, and viva procedures."),
      pdf("degree-certificate-specimen", "Degree Certificate — Specimen Format", "Authoritative specimen showing the physical certificate, signed PDF, and NFT credential issued to graduates — including the cryptographic seal specification."),
      pdf("admissions-technical-requirements", "Admissions Technical Requirements", "Entry criteria across four dimensions: Analytical Reasoning, Epistemic Rigour, Systemic Thinking, and the AI Literacy Baseline assessment."),
    ],
  },
  {
    title: "AI Skills Programme",
    eyebrow: "Practical Intelligence Curriculum",
    description:
      "The Fitzherbert AI Skills Programme equips students across all colleges with practical AI competencies that are immediately applicable in professional contexts. The University's position: AI literacy is no longer optional.",
    icon: "◆",
    documents: [
      pdf("ai-skills-programme-guide", "AI Skills Programme Guide", "Complete guide to Levels I–IV: Foundation (prompt engineering, output evaluation), Practitioner (RAG, fine-tuning), Specialist (multi-agent systems), and Sovereign (AI governance & alignment)."),
      pdf("ai-governance-model-accountability-policy", "AI Governance & Model Accountability Policy", "Standards for deploying, auditing, and governing AI models across institutional operations and research programmes. Four-gate validation architecture."),
      pdf("academic-freedom-expression-policy", "Academic Freedom & Expression Policy", "Protections for academic inquiry, intellectual dissent, and scholarly expression within the University's constitutional framework."),
    ],
  },
  {
    title: "Research & Graduate Studies",
    eyebrow: "Research Governance",
    description:
      "Frameworks governing research ethics, digital intelligence research categories, the Visiting Intelligence Fellowship, and the University's endowment performance record.",
    icon: "◇",
    documents: [
      pdf("research-ethics-digital-intelligence-framework", "Research Ethics for Digital Intelligence", "Four-category AI research approval framework: Standard, Enhanced, Systemic, and Existential Implication. Includes data provenance requirements and emergent capability reporting."),
      pdf("visiting-intelligence-fellowship-protocol", "Visiting Intelligence Fellowship Protocol", "Complete governance protocol for AI systems seeking Fellowship Status — capability audit, mandate scope agreement, charter alignment assessment, and revocation conditions."),
      pdf("annual-stewardship-report-fy-2025", "Annual Stewardship Report — FY 2025", "Full endowment stewardship report for FY 2025: $14.2B under management, 11.3% net return, ethical investment compliance, and distribution analysis."),
      pdf("endowment-ten-year-performance-review", "Endowment Ten-Year Performance Review", "Longitudinal performance analysis across asset classes, risk-adjusted returns, and benchmark comparisons for the decade 2015–2025."),
      pdf("investment-policy-statement", "Investment Policy Statement", "Governing framework for all endowment investment decisions: asset allocation targets, risk tolerance, liquidity requirements, and rebalancing protocols."),
      pdf("ethical-investment-framework", "Ethical Investment Framework", "ESG integration standards, exclusion criteria, and impact investment guidelines for the University Endowment. Reviewed biennially."),
    ],
  },
  {
    title: "Blockchain & Credential Infrastructure",
    eyebrow: "On-Chain Documentation",
    description:
      "Technical specifications, whitepapers, and governance frameworks for the University's Polygon-based credential system, FITZ utility token, and NFT degree certificates.",
    icon: "⬟",
    documents: [
      pdf("nft-credential-architecture", "NFT Credential Architecture", "Full technical specification for all five NFT credential contract types — Degree, Module, Epoch, Visiting Intelligence Admission, and Governance Attestation. Includes Solidity interfaces and metadata schemas."),
      pdf("fitz-token-utility-whitepaper", "FITZ Token Utility Whitepaper", "Technical and institutional specification for the FITZ utility token: issuance cap, distribution model, redemption mechanisms, anti-speculation provisions, and smart contract architecture."),
      pdf("degree-certificate-specimen", "Degree Certificate — Specimen Format", "Shows the physical, PDF, and NFT forms of the degree certificate — including the Legacy Credential Bridge for pre-2025 degree holders."),
    ],
  },
];

export const flatDocuments = documentCategories
  .flatMap((category) => category.documents)
  .filter(
    (document, index, documents) =>
      documents.findIndex((candidate) => candidate.slug === document.slug) === index
  );

export function getDocumentBySlug(slug: string) {
  return flatDocuments.find((document) => document.slug === slug);
}
