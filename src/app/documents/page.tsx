import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import Link from "next/link";
import { existsSync, statSync } from "fs";
import { join } from "path";
import { documentCategories } from "@/lib/document-catalog";

export const metadata: Metadata = {
  title: "Documents & Downloads",
  description:
    "Official documents, policies, student handbooks, degree certificates, programme catalogues, governance records, and blockchain infrastructure specifications of Fitzherbert University.",
};

function getDocumentSizeLabel(href: string, fallback: string) {
  const relativePath = href.startsWith("/") ? href.slice(1) : href;
  const absolutePath = join(process.cwd(), "public", relativePath);

  if (!existsSync(absolutePath)) {
    return fallback;
  }

  const sizeInKB = statSync(absolutePath).size / 1024;
  if (sizeInKB < 1024) {
    return `~${Math.max(1, Math.round(sizeInKB))} KB`;
  }

  return `~${(sizeInKB / 1024).toFixed(1)} MB`;
}

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
              <article
                key={`${category.title}-${doc.slug}`}
                className="group border border-gold/20 bg-ivory hover:border-gold rounded-sm p-6 transition-all gold-emboss"
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
                <div className="flex items-center justify-between pl-9 mb-4">
                  <span className="text-xs tracking-widest uppercase text-stone-light">
                    {doc.fileType} · {getDocumentSizeLabel(doc.href, doc.size)}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <DownloadIcon className="w-4 h-4" />
                    Download
                  </span>
                </div>

                <div className="pl-9 flex flex-wrap gap-3">
                  <Link
                    href={`/documents/${doc.slug}`}
                    className="inline-flex items-center gap-2 border border-gold/25 px-4 py-2 text-xs tracking-widest uppercase text-maroon hover:border-gold hover:text-gold transition-colors"
                  >
                    Read online
                  </Link>
                  <Link
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-2 border border-gold bg-gold/10 px-4 py-2 text-xs tracking-widest uppercase text-gold hover:bg-gold hover:text-navy transition-colors"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    Download PDF
                  </Link>
                </div>
              </article>
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
