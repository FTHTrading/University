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
