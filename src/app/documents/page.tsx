import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documents & Downloads",
  description:
    "Official documents, policies, student handbooks, degree certificates, programme catalogues, governance records, and blockchain infrastructure specifications of Fitzherbert University.",
};

/* ── Document categories ─────────────────────────── */

interface DocumentItem {
  title: string;
  description: string;
  href: string;
  fileType: string;
  /** Approximate file size for display */
  size: string;
}

const documentCategories: {
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
  documents: DocumentItem[];
}[] = [
  // ── Founding & Governance ─────────────────────────────────────────────────
  {
    title: "Founding & Governance",
    eyebrow: "Charter & Constitution",
    description:
      "The constitutional foundation of Fitzherbert University — the Heritage Charter of 1783, the Senate Standing Orders, and the governance instruments that bind the institution.",
    icon: "⬡",
    documents: [
      {
        title: "University Charter (1783)",
        description:
          "The original Heritage Charter granted to Fitzherbert University in 1783 and ratified under the 2025 Rechartering Protocol. The foundational constitutional document.",
        href: "/documents/university-charter-1783.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Senate Standing Orders",
        description:
          "Procedural rules and standing orders governing the Academic Senate, committee formation, voting protocols, and legislative procedures.",
        href: "/documents/senate-standing-orders.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Annual Governance Report — FY 2025",
        description:
          "Comprehensive annual report covering governance decisions, epoch transitions, compliance assessments, and institutional milestones for fiscal year 2025.",
        href: "/documents/annual-governance-report-fy-2025.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Freedom of Information Protocol",
        description:
          "The University's commitment to transparency and public access to institutional records, governance decisions, and research output.",
        href: "/documents/freedom-of-information-protocol.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Community Standards & Code of Conduct",
        description:
          "Standards of conduct for all University community members — including human staff, students, and Visiting Intelligences operating under Fellowship Status.",
        href: "/documents/community-standards-code-of-conduct.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
    ],
  },

  // ── Student Life & Academic Regulations ──────────────────────────────────
  {
    title: "Student Life & Academic Regulations",
    eyebrow: "Handbooks & Regulations",
    description:
      "Everything a student needs to understand life at Fitzherbert University — from epoch-aligned term dates and tuition provisions to grading frameworks and the Human Continuity Requirement.",
    icon: "◉",
    documents: [
      {
        title: "Student Handbook 2025–26",
        description:
          "The definitive guide to University life during the Third Epoch. Covers matriculation, residential life, the Human Continuity Requirement, and the use of Visiting Intelligences in coursework.",
        href: "/documents/student-handbook-2025-26.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Epoch Academic Calendar 2025–26",
        description:
          "Official term dates, examination periods, Epoch Transition Review windows, FITZ Token Distribution date, and Visiting Intelligence fellowship review periods.",
        href: "/documents/epoch-academic-calendar-2025-26.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Tuition Fees & Financial Aid Guide",
        description:
          "Complete fee schedule, bursary information, the Provenance Scholarship criteria, and FITZ token stipend provisions for 2025–26.",
        href: "/documents/tuition-fees-financial-aid-guide.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Assessment & Grading Framework",
        description:
          "Epoch-aligned assessment criteria including the Verified Reasoning Dimension. Grade descriptors, moderation procedures, and Transition-Period submission policy.",
        href: "/documents/grading-framework-epoch-aligned.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Academic Integrity & AI Authorship Policy",
        description:
          "Seven categories of AI-assisted work, provenance declaration requirements, and the full case-study catalogue of Academic Provenance Fraud rulings.",
        href: "/documents/academic-integrity-ai-policy.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
    ],
  },

  // ── Programmes & Degrees ──────────────────────────────────────────────────
  {
    title: "Programmes, Degrees & Admissions",
    eyebrow: "Academic Programmes",
    description:
      "Complete programme handbooks, course catalogues, degree certificate specifications, and the technical admissions requirements for all Fitzherbert University qualifications.",
    icon: "◈",
    documents: [
      {
        title: "Undergraduate Course Catalogue 2025–26",
        description:
          "All 214 undergraduate modules across the B.Intel, B.Sys, B.Prov, and B.Gov programmes — with learning outcomes, AI tool permissions, and Polygon credential details.",
        href: "/documents/undergraduate-course-catalogue.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Masters Programme Handbook 2025–26",
        description:
          "Handbook for M.AI, M.Proto, M.Gov, and M.Crypto students. Covers module selection, dissertation supervision, FITZ allocations, and viva procedures.",
        href: "/documents/masters-programme-handbook.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Degree Certificate — Specimen Format",
        description:
          "Authoritative specimen showing the physical certificate, signed PDF, and NFT credential issued to graduates — including the cryptographic seal specification.",
        href: "/documents/degree-certificate-specimen.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Admissions Technical Requirements",
        description:
          "Entry criteria across four dimensions: Analytical Reasoning, Epistemic Rigour, Systemic Thinking, and the AI Literacy Baseline assessment.",
        href: "/documents/admissions-technical-requirements.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
    ],
  },

  // ── AI Skills Programme ───────────────────────────────────────────────────
  {
    title: "AI Skills Programme",
    eyebrow: "Practical Intelligence Curriculum",
    description:
      "The Fitzherbert AI Skills Programme equips students across all colleges with practical AI competencies that are immediately applicable in professional contexts. The University's position: AI literacy is no longer optional.",
    icon: "◆",
    documents: [
      {
        title: "AI Skills Programme Guide",
        description:
          "Complete guide to Levels I–IV: Foundation (prompt engineering, output evaluation), Practitioner (RAG, fine-tuning), Specialist (multi-agent systems), and Sovereign (AI governance & alignment).",
        href: "/documents/ai-skills-programme-guide.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "AI Governance & Model Accountability Policy",
        description:
          "Standards for deploying, auditing, and governing AI models across institutional operations and research programmes. Four-gate validation architecture.",
        href: "/documents/ai-governance-model-accountability-policy.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Academic Freedom & Expression Policy",
        description:
          "Protections for academic inquiry, intellectual dissent, and scholarly expression within the University's constitutional framework.",
        href: "/documents/academic-freedom-expression-policy.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
    ],
  },

  // ── Research & Graduate Studies ───────────────────────────────────────────
  {
    title: "Research & Graduate Studies",
    eyebrow: "Research Governance",
    description:
      "Frameworks governing research ethics, digital intelligence research categories, the Visiting Intelligence Fellowship, and the University's endowment performance record.",
    icon: "◇",
    documents: [
      {
        title: "Research Ethics for Digital Intelligence",
        description:
          "Four-category AI research approval framework: Standard, Enhanced, Systemic, and Existential Implication. Includes data provenance requirements and emergent capability reporting.",
        href: "/documents/research-ethics-digital-intelligence-framework.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Visiting Intelligence Fellowship Protocol",
        description:
          "Complete governance protocol for AI systems seeking Fellowship Status — capability audit, mandate scope agreement, charter alignment assessment, and revocation conditions.",
        href: "/documents/visiting-intelligence-fellowship-protocol.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Annual Stewardship Report — FY 2025",
        description:
          "Full endowment stewardship report for FY 2025: $14.2B under management, 11.3% net return, ethical investment compliance, and distribution analysis.",
        href: "/documents/annual-stewardship-report-fy-2025.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Endowment Ten-Year Performance Review",
        description:
          "Longitudinal performance analysis across asset classes, risk-adjusted returns, and benchmark comparisons for the decade 2015–2025.",
        href: "/documents/endowment-ten-year-performance-review.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Investment Policy Statement",
        description:
          "Governing framework for all endowment investment decisions: asset allocation targets, risk tolerance, liquidity requirements, and rebalancing protocols.",
        href: "/documents/investment-policy-statement.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Ethical Investment Framework",
        description:
          "ESG integration standards, exclusion criteria, and impact investment guidelines for the University Endowment. Reviewed biennially.",
        href: "/documents/ethical-investment-framework.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
    ],
  },

  // ── Blockchain & Credential Infrastructure ────────────────────────────────
  {
    title: "Blockchain & Credential Infrastructure",
    eyebrow: "On-Chain Documentation",
    description:
      "Technical specifications, whitepapers, and governance frameworks for the University's Polygon-based credential system, FITZ utility token, and NFT degree certificates.",
    icon: "⬟",
    documents: [
      {
        title: "NFT Credential Architecture",
        description:
          "Full technical specification for all five NFT credential contract types — Degree, Module, Epoch, Visiting Intelligence Admission, and Governance Attestation. Includes Solidity interfaces and metadata schemas.",
        href: "/documents/nft-credential-architecture.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "FITZ Token Utility Whitepaper",
        description:
          "Technical and institutional specification for the FITZ utility token: issuance cap, distribution model, redemption mechanisms, anti-speculation provisions, and smart contract architecture.",
        href: "/documents/fitz-token-utility-whitepaper.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
      {
        title: "Degree Certificate — Specimen Format",
        description:
          "Shows the physical, PDF, and NFT forms of the degree certificate — including the Legacy Credential Bridge for pre-2025 degree holders.",
        href: "/documents/degree-certificate-specimen.pdf",
        fileType: "PDF",
        size: "~4 KB",
      },
    ],
  },
];

/* ── Download Icon SVG ──────────────────────────── */
function DownloadIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

function DocumentIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}

/* ── Page ─────────────────────────────────────────── */

export default function DocumentsPage() {
  return (
    <>
      <Hero
        title="Documents & Downloads"
        subtitle="Official records, governance instruments, and institutional publications"
      />

      {/* ── Introduction ──────────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="University Records"
            title="Institutional Documents"
            description="All foundational documents, programme handbooks, policies, research frameworks, and blockchain infrastructure specifications of Fitzherbert University are published here under the Transparency Mandate. Every document listed below is available for immediate download."
          />
        </div>
      </Section>

      {/* ── Document Categories ───────────────────── */}
      {documentCategories.map((category, ci) => (
        <Section key={category.title} alternate={ci % 2 === 1} stone={ci % 2 === 0}>
          <SectionHeader
            eyebrow={category.eyebrow}
            title={category.title}
            description={category.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.documents.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group block border border-gold/20 bg-ivory hover:border-gold rounded-sm p-6 transition-all gold-emboss"
              >
                {/* Header row */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="shrink-0 mt-0.5 text-maroon group-hover:text-gold transition-colors">
                    <DocumentIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold leading-snug group-hover:text-maroon transition-colors">
                    {doc.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-stone text-sm leading-relaxed mb-4 pl-9">
                  {doc.description}
                </p>

                {/* Footer — file info + download indicator */}
                <div className="flex items-center justify-between pl-9">
                  <span className="text-xs tracking-widest uppercase text-stone-light">
                    {doc.fileType} · {doc.size}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <DownloadIcon className="w-4 h-4" />
                    Download
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ))}

      {/* ── Request Notice ────────────────────────── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="ornamental-divider mb-8">
            <span className="ornament">✦</span>
          </div>
          <h3 className="font-serif text-xl font-bold mb-4">
            Request Additional Documents
          </h3>
          <p className="text-stone leading-relaxed mb-6">
            If you require documents not listed here — including historical archives,
            committee minutes, or compliance certificates — you may submit a request
            through the Freedom of Information Protocol.
          </p>
          <Link
            href="/documents/freedom-of-information-protocol.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
          >
            View FOIA Protocol
          </Link>
        </div>
      </Section>
    </>
  );
}
