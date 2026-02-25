import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documents & Downloads",
  description:
    "Official documents, policies, governance records, and institutional reports of Fitzherbert University. Download the University Charter, governance policies, annual reports, and endowment materials.",
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
        size: "~280 KB",
      },
      {
        title: "Senate Standing Orders",
        description:
          "Procedural rules and standing orders governing the Academic Senate, committee formation, voting protocols, and legislative procedures.",
        href: "/documents/senate-standing-orders.pdf",
        fileType: "PDF",
        size: "~190 KB",
      },
      {
        title: "Freedom of Information Protocol",
        description:
          "The University's commitment to transparency and public access to institutional records, governance decisions, and research output.",
        href: "/documents/freedom-of-information-protocol.pdf",
        fileType: "PDF",
        size: "~150 KB",
      },
    ],
  },
  {
    title: "Policies & Frameworks",
    eyebrow: "Institutional Policies",
    description:
      "Operational policies governing academic practice, artificial intelligence, ethical investment, and the expression rights of the University community.",
    icon: "◈",
    documents: [
      {
        title: "Academic Freedom & Expression Policy",
        description:
          "Protections for academic inquiry, intellectual dissent, and scholarly expression within the University's constitutional framework.",
        href: "/documents/academic-freedom-expression-policy.pdf",
        fileType: "PDF",
        size: "~170 KB",
      },
      {
        title: "AI Governance & Model Accountability Policy",
        description:
          "Standards for deploying, auditing, and governing AI models across institutional operations and research programmes.",
        href: "/documents/ai-governance-model-accountability-policy.pdf",
        fileType: "PDF",
        size: "~210 KB",
      },
      {
        title: "Ethical Investment Framework",
        description:
          "Principles governing the University Endowment's investment decisions, exclusion criteria, and alignment with institutional values.",
        href: "/documents/ethical-investment-framework.pdf",
        fileType: "PDF",
        size: "~160 KB",
      },
      {
        title: "Investment Policy Statement",
        description:
          "Formal investment policy governing endowment allocation, risk tolerance, return targets, and fiduciary responsibilities.",
        href: "/documents/investment-policy-statement.pdf",
        fileType: "PDF",
        size: "~180 KB",
      },
    ],
  },
  {
    title: "Annual Reports & Stewardship",
    eyebrow: "Reports",
    description:
      "Year-end governance reports, stewardship reviews, and performance assessments documenting the University's operational and institutional progress.",
    icon: "◇",
    documents: [
      {
        title: "Annual Governance Report — FY 2025",
        description:
          "Comprehensive annual report covering governance decisions, epoch transitions, compliance assessments, and institutional milestones for fiscal year 2025.",
        href: "/documents/annual-governance-report-fy-2025.pdf",
        fileType: "PDF",
        size: "~320 KB",
      },
      {
        title: "Annual Stewardship Report — FY 2025",
        description:
          "Report on endowment stewardship, donor engagement, capital allocation, and the financial health of the University's philanthropic instruments.",
        href: "/documents/annual-stewardship-report-fy-2025.pdf",
        fileType: "PDF",
        size: "~290 KB",
      },
      {
        title: "Endowment Ten-Year Performance Review",
        description:
          "Longitudinal performance analysis of the Fitzherbert Endowment across asset classes, risk-adjusted returns, and benchmark comparisons.",
        href: "/documents/endowment-ten-year-performance-review.pdf",
        fileType: "PDF",
        size: "~250 KB",
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
            description="All foundational documents, policies, and reports of Fitzherbert University are published here for transparency and public access. Every document listed below is available for immediate download."
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
