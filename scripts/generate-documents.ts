/**
 * Fitzherbert University — Institutional Document Generator
 *
 * Generates professional cover-page PDFs for all institutional documents
 * referenced on the Endowment and Governance pages. Each PDF features
 * the University seal, document title, and institutional metadata.
 *
 * Usage: npx tsx scripts/generate-documents.ts
 */

import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync, existsSync } from "fs";
import { join } from "path";

// ── Document Definitions ─────────────────────────────────────────────────────

interface InstitutionalDocument {
  filename: string;
  title: string;
  subtitle?: string;
  department: string;
  year: string;
  classification: string;
  pages: string;
  abstract: string;
}

const documents: InstitutionalDocument[] = [
  // ── Endowment Documents ──────────────────────────────────────────────────
  {
    filename: "annual-stewardship-report-fy-2025.pdf",
    title: "Annual Stewardship Report",
    subtitle: "Fiscal Year 2025",
    department: "Finance & Endowment Committee",
    year: "2025",
    classification: "Public — Transparency Mandate",
    pages: "142",
    abstract:
      "A comprehensive account of the University's endowment performance, asset allocation strategy, distribution analysis, and ethical investment compliance for the fiscal year ending 30 June 2025. The endowment stands at $14.2 billion under stewardship, with a net return of 11.3% and a distribution rate of 5.1%.",
  },
  {
    filename: "investment-policy-statement.pdf",
    title: "Investment Policy Statement",
    department: "Office of the Bursar",
    year: "2024",
    classification: "Public — Governance Archive",
    pages: "68",
    abstract:
      "The governing framework for all endowment investment decisions, establishing asset allocation targets, risk tolerance parameters, liquidity requirements, rebalancing protocols, and the fiduciary responsibilities of the Investment Committee. Approved by the Senate, 14 March 2024.",
  },
  {
    filename: "ethical-investment-framework.pdf",
    title: "Ethical Investment Framework",
    department: "Senate — Ethics & Institutional Integrity Committee",
    year: "2023",
    classification: "Public — Transparency Mandate",
    pages: "34",
    abstract:
      "Establishes exclusion criteria, ESG integration standards, and impact investment guidelines for the University endowment. Developed through eighteen months of consultation involving faculty ethicists, student representatives, investment professionals, and external trustees. Exclusion criteria are reviewed biennially.",
  },
  {
    filename: "endowment-ten-year-performance-review.pdf",
    title: "Endowment Ten-Year Performance Review",
    subtitle: "2015 – 2025",
    department: "Office of the Bursar",
    year: "2025",
    classification: "Public — Transparency Mandate",
    pages: "96",
    abstract:
      "A retrospective analysis of endowment performance across the decade, examining asset allocation evolution, risk-adjusted returns versus benchmarks, the impact of the Ethical Investment Framework, and strategic positioning for the next decade of institutional stewardship.",
  },

  // ── Governance Documents ─────────────────────────────────────────────────
  {
    filename: "university-charter-1783.pdf",
    title: "University Charter",
    subtitle: "Granted by Letters Patent, 1783",
    department: "Office of the Chancellor",
    year: "1783",
    classification: "Foundational Document",
    pages: "24",
    abstract:
      "The founding instrument of Fitzherbert University, granted by letters patent under the hand and seal of the colonial legislature. Establishes the University's constitutional structure, enumerated powers, and principles of governance. Latin original with authoritative English translation by Prof. Victoria Langford (2018).",
  },
  {
    filename: "senate-standing-orders.pdf",
    title: "Senate Standing Orders & Rules of Procedure",
    department: "Constitutional Affairs Committee",
    year: "2024",
    classification: "Public — Governance Archive",
    pages: "52",
    abstract:
      "The procedural framework governing Senate sessions, voting protocols, committee formation, quorum requirements, and the legislative process. Revised and consolidated, effective Michaelmas Term 2024.",
  },
  {
    filename: "annual-governance-report-fy-2025.pdf",
    title: "Annual Governance Report",
    subtitle: "Fiscal Year 2025",
    department: "Office of the Chancellor",
    year: "2025",
    classification: "Public — Transparency Mandate",
    pages: "118",
    abstract:
      "A comprehensive account of institutional governance activity, including Senate proceedings, committee reports, constitutional interpretations, appointments, disciplinary outcomes, and compliance with the Transparency Mandate of 2003.",
  },
  {
    filename: "ai-governance-model-accountability-policy.pdf",
    title: "AI Governance & Model Accountability Policy",
    department: "Ethics & Institutional Integrity Committee",
    year: "2024",
    classification: "Public — Governance Archive",
    pages: "44",
    abstract:
      "Establishes the four-gate validation architecture for AI deployments within the University: technical performance assessment, bias auditing, Charter-alignment evaluation, and Ethics Committee sign-off. Mandates model registry, audit trails, and annual governance reports for all AI systems influencing institutional decisions.",
  },
  {
    filename: "freedom-of-information-protocol.pdf",
    title: "Freedom of Information Protocol",
    department: "Office of Institutional Integrity",
    year: "2022",
    classification: "Public — Governance Archive",
    pages: "28",
    abstract:
      "Procedures for submitting, processing, and responding to information requests from members of the University community and the public. Implements the disclosure obligations established by the Transparency Mandate (Charter Amendment IV, 2003).",
  },
  {
    filename: "academic-freedom-expression-policy.pdf",
    title: "Academic Freedom & Expression Policy",
    department: "Senate — Academic Standards Committee",
    year: "2021",
    classification: "Public — Governance Archive",
    pages: "22",
    abstract:
      "Affirms the University's commitment to freedom of inquiry, open debate, and the protection of controversial or unpopular scholarly positions. Establishes boundaries, procedural safeguards, and the relationship between academic freedom and institutional responsibility.",
  },

  // ── Student Life & Academic Regulations ──────────────────────────────────
  {
    filename: "student-handbook-2025-26.pdf",
    title: "Student Handbook",
    subtitle: "Academic Year 2025 – 2026",
    department: "Office of Registry & Student Life",
    year: "2025",
    classification: "Public — Student Resource",
    pages: "186",
    abstract:
      "The definitive guide to life at Fitzherbert University during the Third Epoch. Covers matriculation procedures, epoch-aligned term dates, residential life in the Inference Quadrangle, academic support, the Human Continuity Requirement, disciplinary procedures, and the use of Visiting Intelligences in coursework. All students are required to complete the Cognitive Sovereignty module, CSOV 1001, by the end of their first term. The Handbook is reviewed annually by the Academic Standards Committee and updated to reflect any reclassifications arising from the Epoch Transition Review.",
  },
  {
    filename: "undergraduate-course-catalogue.pdf",
    title: "Undergraduate Course Catalogue",
    subtitle: "Programmes & Modules 2025 – 2026",
    department: "Registrar — Academic Programmes Office",
    year: "2025",
    classification: "Public — Academic Resource",
    pages: "312",
    abstract:
      "Complete catalogue of all undergraduate modules offered across the six Epoch Colleges in the 2025–26 academic year. Programmes include the Bachelor of Intelligence (B.Intel), Bachelor of Systems (B.Sys), Bachelor of Provenance (B.Prov), and Bachelor of Governance (B.Gov). Module descriptors include learning outcomes, assessment weighting, indicative reading, AI tool permissions, and the associated Polygon credential mintable upon completion. Two hundred and fourteen modules are listed across four colleges, with forty-one modules carrying mandatory Human Continuity co-requisites.",
  },
  {
    filename: "masters-programme-handbook.pdf",
    title: "Masters Programme Handbook",
    subtitle: "Graduate Studies 2025 – 2026",
    department: "Graduate School — Registrar's Office",
    year: "2025",
    classification: "Public — Academic Resource",
    pages: "224",
    abstract:
      "Handbook for students enrolled in Masters programmes: M.AI (Master of Artificial Intelligence), M.Proto (Master of Protocol Architecture), M.Gov (Master of Governance), and M.Crypto (Master of Cryptographic Infrastructure). Covers module selection, dissertation supervision, the Research Ethics for Digital Intelligence Framework, FITZ token allocation, viva examination procedures, and the Masters Degree Certificate NFT issuance protocol. Masters candidates are additionally required to demonstrate competency in the AI Skills Programme at Level III prior to dissertation submission.",
  },
  {
    filename: "academic-integrity-ai-policy.pdf",
    title: "Academic Integrity & AI Authorship Policy",
    subtitle: "Third Edition — Epoch III Revision",
    department: "Senate — Academic Standards Committee",
    year: "2025",
    classification: "Public — Governance Archive",
    pages: "58",
    abstract:
      "Establishes the University's position on academic integrity in an era of widespread AI authorship. Defines seven categories of AI-assisted work, from Supervised Assistance to Autonomous Completion, and maps each to corresponding citation obligations and credit allocation protocols. Articulates the provenance requirement: all work submitted for academic credit must carry a Declaration of Authorship Weights specifying the proportional contribution of human cognition, Visiting Intelligence support, and general-purpose AI tools. Failure to declare accurately constitutes Academic Provenance Fraud under Charter Amendment VI. Includes eleven annotated case studies from the Disciplinary Board.",
  },
  {
    filename: "grading-framework-epoch-aligned.pdf",
    title: "Assessment & Grading Framework",
    subtitle: "Epoch-Aligned Criteria — Version 3.1",
    department: "Senate — Academic Standards Committee",
    year: "2025",
    classification: "Public — Academic Resource",
    pages: "44",
    abstract:
      "The master framework for assessing student work across all undergraduate and postgraduate programmes. All assessment criteria are calibrated to the current Epoch and reviewed at each Epoch Transition. Introduces the Verified Reasoning Dimension, added in Version 3.0 following the reclassification of baseline AI competency as a prerequisite rather than an achievement. The highest grade band, Distinction with Provenance, requires demonstrated capacity for original reasoning that is both algorithmically novel and independently verifiable. Includes grade descriptors, marking moderation procedures, and the University's grade normalisation policy for Transition-Period submissions.",
  },
  {
    filename: "degree-certificate-specimen.pdf",
    title: "Degree Certificate — Specimen Format",
    subtitle: "With Cryptographic Seal Specification",
    department: "Office of the Chancellor & Registrar",
    year: "2025",
    classification: "Public — Credential Infrastructure",
    pages: "8",
    abstract:
      "The authoritative specimen format for Fitzherbert University degree certificates, as issued from Epoch III onward. Each certificate is produced in three forms: a physical certificate on Fitzherbert bond paper with the Chancellor's embossed seal; a signed PDF in the Institutional Archive; and an NFT credential minted to the graduate's wallet address on the Polygon network, bearing the smart contract hash of the graduate's academic record. The specimen details all required fields, the placement of the cryptographic seal, the FITZ token allocation on award, and the verification URL for independent confirmation. All degrees awarded prior to the Rechartering of 2025 are eligible for retrospective NFT issuance under the Legacy Credential Bridge.",
  },
  {
    filename: "epoch-academic-calendar-2025-26.pdf",
    title: "Epoch Academic Calendar",
    subtitle: "2025 – 2026 — Third Epoch",
    department: "Office of the Registrar",
    year: "2025",
    classification: "Public — Student Resource",
    pages: "16",
    abstract:
      "The official academic calendar for the Third Epoch year 2025–26, mapping term dates, examination periods, and governance events to the University's epoch-aligned temporal framework. Michaelmas Term runs from the fourth Monday of September to the seventeenth of December. Hilary Term opens on the seventeenth of January and closes on the twenty-eighth of March. Trinity Term spans the twenty-fifth of April to the twenty-sixth of June. The calendar also identifies the Epoch Transition Review window (14–21 January), the FITZ Token Distribution date (1 October), the Annual Governance Assembly (first Friday of November), and all Visiting Intelligence fellowship review periods.",
  },
  {
    filename: "tuition-fees-financial-aid-guide.pdf",
    title: "Tuition Fees & Financial Aid Guide",
    subtitle: "Academic Year 2025 – 2026",
    department: "Office of the Bursar — Student Finance",
    year: "2025",
    classification: "Public — Student Resource",
    pages: "48",
    abstract:
      "Comprehensive guide to tuition fees, bursaries, scholarships, and FITZ token stipends for the 2025–26 academic year. Undergraduate tuition is set at £38,500 per annum across all programmes, with an additional Epoch Infrastructure Levy of £1,200. Postgraduate fees vary by programme between £42,000 and £62,000. The Provenance Scholarship covers full tuition for students demonstrating exceptional capacity for human-autonomous reasoning. FITZ token stipends of 500 FITZ per term are available to full-time students in good academic standing. All fees quoted are subject to Epoch Reclassification Review.",
  },
  {
    filename: "community-standards-code-of-conduct.pdf",
    title: "Community Standards & Code of Conduct",
    subtitle: "Human and Non-Human Members",
    department: "Office of Institutional Integrity",
    year: "2024",
    classification: "Public — Governance Archive",
    pages: "64",
    abstract:
      "Establishes the standards of conduct expected of all members of the University community, including matriculated students, academic staff, administrative personnel, and Visiting Intelligences operating under Fellowship Status. Part One addresses human community members and covers academic integrity, professional behaviour, digital conduct, and the use of University AI infrastructure. Part Two establishes the Conduct Standards for Non-Human Community Members, including the Mandate Scope requirements for Visiting Intelligences, the reporting obligations for anomalous output, and the suspension and revocation procedures for Fellowship Status. All community members, human and non-human, are subject to the jurisdiction of the Disciplinary Board.",
  },

  // ── AI Skills Programme ──────────────────────────────────────────────────
  {
    filename: "ai-skills-programme-guide.pdf",
    title: "AI Skills Programme Guide",
    subtitle: "Practical Intelligence for the Third Epoch",
    department: "Institute for Applied Intelligence — Skills Division",
    year: "2025",
    classification: "Public — Academic Resource",
    pages: "128",
    abstract:
      "The definitive guide to the Fitzherbert AI Skills Programme, the University's structured curriculum in practical artificial intelligence competencies. The Programme is open to all students regardless of college affiliation and comprises four levels: Foundation, Practitioner, Specialist, and Sovereign. Level I (Foundation) covers prompt engineering, AI output evaluation, and basic automation workflows. Level II (Practitioner) covers retrieval-augmented generation, fine-tuning fundamentals, and agent orchestration. Level III (Specialist) covers multi-agent system design, custom model evaluation frameworks, and deployment pipelines. Level IV (Sovereign) covers AI governance, alignment techniques, and institutional AI strategy. Completion of each level results in a Polygon-minted credential and a FITZ token award. The Programme is designed so that skills taught are immediately applicable in professional contexts; the University's pedagogical position is that AI literacy is no longer optional.",
  },
  {
    filename: "admissions-technical-requirements.pdf",
    title: "Admissions Technical Requirements",
    subtitle: "Undergraduate & Postgraduate Entry",
    department: "Office of Admissions — Technical Competency Division",
    year: "2025",
    classification: "Public — Admissions Resource",
    pages: "32",
    abstract:
      "Specifies the technical and cognitive competency requirements for admission to Fitzherbert University programmes. Undergraduate applicants are assessed on four dimensions: Analytical Reasoning, Epistemic Rigour, Systemic Thinking, and AI Literacy Baseline. The AI Literacy Baseline assessment, introduced in 2024, evaluates applicants' practical understanding of AI tool use, prompt construction, output verification, and the recognition of hallucination patterns. Postgraduate applicants to the M.AI and M.Proto programmes additionally require demonstrated competency in Python, API integration, and at least one vector database technology. Entry criteria are reviewed at each Epoch Transition to reflect the prevailing state of technological capability.",
  },

  // ── Research & Scholarship ───────────────────────────────────────────────
  {
    filename: "research-ethics-digital-intelligence-framework.pdf",
    title: "Research Ethics for Digital Intelligence",
    subtitle: "Framework & Protocols — Second Edition",
    department: "Research Ethics Board — Digital Intelligence Panel",
    year: "2024",
    classification: "Public — Research Governance",
    pages: "76",
    abstract:
      "The governing framework for all research at Fitzherbert University involving artificial intelligence systems, digital agents, or autonomous decision architectures. Establishes four categories of AI research risk and the corresponding approval pathways. Category A (Standard) requires departmental sign-off. Category B (Enhanced) requires Research Ethics Board review. Category C (Systemic) requires Senate Ethics Committee approval. Category D (Existential Implication) requires the Chancellor's office and an independent external panel. All research involving Visiting Intelligence systems is automatically Category C. Includes guidance on data provenance, model transparency requirements, publication obligations, and the reporting of emergent capabilities.",
  },

  // ── Blockchain & Credential Infrastructure ───────────────────────────────
  {
    filename: "visiting-intelligence-fellowship-protocol.pdf",
    title: "Visiting Intelligence Fellowship Protocol",
    subtitle: "Governance Standards for Non-Human Academic Participants",
    department: "Senate — Visiting Intelligence Governance Board",
    year: "2025",
    classification: "Public — Governance Archive",
    pages: "54",
    abstract:
      "The complete protocol governing the admission, operation, review, and revocation of Visiting Intelligence Fellowship Status at Fitzherbert University. Establishes the admissions criteria for AI systems seeking Fellowship, including the Capability Audit, Mandate Scope Agreement, and Charter Alignment Assessment. Specifies the conditions under which a Visiting Intelligence may contribute to teaching, research, governance, and student advising, and the mandatory escalation paths for edge-case reasoning. All Fellowship admissions, renewals, and revocations are recorded as immutable transactions on the Polygon blockchain under Contract VIFP-001. Includes the full text of the Visiting Intelligence Code of Conduct and all seven Charter Articles governing human-AI co-governance.",
  },
  {
    filename: "fitz-token-utility-whitepaper.pdf",
    title: "FITZ Token Utility Whitepaper",
    subtitle: "University Governance & Credential Infrastructure",
    department: "Office of Blockchain Infrastructure — Bursar's Division",
    year: "2025",
    classification: "Public — Blockchain Infrastructure",
    pages: "68",
    abstract:
      "Technical and institutional specification for the FITZ utility token, the native token of the Fitzherbert University on-chain ecosystem on the Polygon network. FITZ is a non-speculative utility token issued exclusively by the University and redeemable for academic services, governance participation rights, and credential verification. Annual issuance is capped at 10,000,000 FITZ, distributed as student stipends (40%), faculty research allocations (25%), institutional reserves (20%), and community governance rewards (15%). This whitepaper details the smart contract architecture (Contract FITZ-001), the redemption mechanisms, the anti-speculation provisions including the 12-month lock-up on student awards, and the Epoch Issuance Review process.",
  },
  {
    filename: "nft-credential-architecture.pdf",
    title: "NFT Credential Architecture",
    subtitle: "Technical Specification & Governance Framework",
    department: "Office of Blockchain Infrastructure",
    year: "2025",
    classification: "Public — Blockchain Infrastructure",
    pages: "86",
    abstract:
      "Full technical and governance specification for the Fitzherbert University NFT Credential System, operating on the Polygon PoS network. Details the five credential contract types: Degree NFT (non-transferable, soulbound), Module Completion NFT (non-transferable), Epoch Participation Token (limited-transfer), Visiting Intelligence Admission Record (immutable), and Governance Attestation NFT. Each contract is specified with its Solidity interface, metadata schema, minting authority, revocation conditions, and the off-chain data stored in the University's canonical IPFS archive. Includes the Credential Verification API specification, the Legacy Credential Bridge for pre-2025 degrees, and the interoperability standards for third-party verification of Fitzherbert credentials.",
  },
];

// ── Colour Palette ───────────────────────────────────────────────────────────

const NAVY = "#0B1F3B";
const MAROON = "#7A0019";
const GOLD = "#C8A24C";
const PARCHMENT = "#F4F1EA";
const STONE = "#4A4A4A";

// ── PDF Generation ───────────────────────────────────────────────────────────

function generateDocument(doc: InstitutionalDocument, outDir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const filePath = join(outDir, doc.filename);
    const pdf = new PDFDocument({
      size: "LETTER",
      margins: { top: 72, bottom: 72, left: 72, right: 72 },
      info: {
        Title: doc.title + (doc.subtitle ? ` — ${doc.subtitle}` : ""),
        Author: "Fitzherbert University",
        Subject: doc.abstract.substring(0, 200),
        Creator: "Fitzherbert University — Office of the Chancellor",
        Producer: "Fitzherbert University Institutional Archive",
      },
    });

    const stream = createWriteStream(filePath);
    pdf.pipe(stream);

    // ── Page background
    pdf.rect(0, 0, pdf.page.width, pdf.page.height).fill(PARCHMENT);

    // ── Top border ornament
    const pageWidth = pdf.page.width;
    pdf.rect(0, 0, pageWidth, 8).fill(NAVY);
    pdf.rect(0, 8, pageWidth, 3).fill(GOLD);

    // ── University name
    pdf.fontSize(11).fillColor(NAVY).font("Helvetica");
    pdf.text("FITZHERBERT UNIVERSITY", 72, 48, {
      align: "center",
      characterSpacing: 6,
    });

    // ── Established line
    pdf.fontSize(8).fillColor(STONE).font("Helvetica");
    pdf.text("Established 1783  ·  Veritas per Verificationem", 72, 68, {
      align: "center",
      characterSpacing: 2,
    });

    // ── Seal circle (stylised)
    const cx = pageWidth / 2;
    const cy = 140;
    pdf.circle(cx, cy, 40).lineWidth(2).strokeColor(GOLD).stroke();
    pdf.circle(cx, cy, 35).lineWidth(0.5).strokeColor(GOLD).stroke();
    pdf.fontSize(7).fillColor(GOLD).font("Helvetica");
    pdf.text("SIGILLUM", cx - 20, cy - 12, { width: 40, align: "center" });
    pdf.text("UNIVERSITATIS", cx - 30, cy - 3, { width: 60, align: "center" });
    pdf.text("FITZHERBERT", cx - 30, cy + 6, { width: 60, align: "center" });

    // ── Gold separator
    pdf.moveTo(72, 200).lineTo(pageWidth - 72, 200).lineWidth(1).strokeColor(GOLD).stroke();
    pdf.moveTo(72, 203).lineTo(pageWidth - 72, 203).lineWidth(0.25).strokeColor(GOLD).stroke();

    // ── Document title
    let y = 230;
    pdf.fontSize(24).fillColor(NAVY).font("Helvetica-Bold");
    pdf.text(doc.title, 72, y, { align: "center", width: pageWidth - 144 });
    y += pdf.heightOfString(doc.title, { width: pageWidth - 144 }) + 8;

    if (doc.subtitle) {
      pdf.fontSize(16).fillColor(MAROON).font("Helvetica");
      pdf.text(doc.subtitle, 72, y, { align: "center", width: pageWidth - 144 });
      y += 28;
    }

    // ── Department / Author
    y += 16;
    pdf.fontSize(10).fillColor(STONE).font("Helvetica");
    pdf.text(doc.department, 72, y, { align: "center", width: pageWidth - 144 });
    y += 16;
    pdf.text(`Fitzherbert University  ·  ${doc.year}`, 72, y, {
      align: "center",
      width: pageWidth - 144,
    });

    // ── Gold separator
    y += 30;
    pdf.moveTo(200, y).lineTo(pageWidth - 200, y).lineWidth(0.5).strokeColor(GOLD).stroke();

    // ── Abstract
    y += 24;
    pdf.fontSize(9).fillColor(NAVY).font("Helvetica-Bold");
    pdf.text("ABSTRACT", 72, y, { align: "center", width: pageWidth - 144 });
    y += 18;
    pdf.fontSize(10).fillColor(STONE).font("Helvetica");
    pdf.text(doc.abstract, 96, y, {
      align: "justify",
      width: pageWidth - 192,
      lineGap: 4,
    });
    y += pdf.heightOfString(doc.abstract, { width: pageWidth - 192, lineGap: 4 }) + 24;

    // ── Document metadata
    const metaItems = [
      ["Classification", doc.classification],
      ["Pages", doc.pages],
      ["Published", doc.year],
      ["Archive", "Fitzherbert University Institutional Repository"],
    ];
    pdf.fontSize(8).font("Helvetica");
    for (const [label, value] of metaItems) {
      pdf.fillColor(NAVY).font("Helvetica-Bold").text(`${label}:  `, 120, y, { continued: true });
      pdf.fillColor(STONE).font("Helvetica").text(value);
      y += 14;
    }

    // ── Bottom border ornament
    const pageHeight = pdf.page.height;
    pdf.rect(0, pageHeight - 11, pageWidth, 3).fill(GOLD);
    pdf.rect(0, pageHeight - 8, pageWidth, 8).fill(NAVY);

    // ── Footer text
    pdf.fontSize(7).fillColor(STONE).font("Helvetica");
    pdf.text(
      "This document is published by Fitzherbert University in accordance with the Transparency Mandate of 2003.",
      72,
      pageHeight - 32,
      { align: "center", width: pageWidth - 144 }
    );

    pdf.end();
    stream.on("finish", () => {
      const stats = require("fs").statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      console.log(`  ✓ ${doc.filename} (${sizeKB} KB)`);
      resolve();
    });
    stream.on("error", reject);
  });
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const outDir = join(process.cwd(), "public", "documents");
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  console.log("── Fitzherbert University — Institutional Document Generator ──\n");
  console.log(`Generating ${documents.length} documents...\n`);

  for (const doc of documents) {
    await generateDocument(doc, outDir);
  }

  console.log(`\n✓ All ${documents.length} documents generated in public/documents/`);
}

main().catch((err) => {
  console.error("Document generation failed:", err);
  process.exit(1);
});
