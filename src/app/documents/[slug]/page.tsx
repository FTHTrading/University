import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { documentCategories, getDocumentBySlug } from "@/lib/document-catalog";
import { DOCUMENT_CHAPTERS } from "../../../../scripts/document-content";

interface DocumentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return documentCategories.flatMap((category) =>
    category.documents.map((document) => ({ slug: document.slug }))
  );
}

export async function generateMetadata({ params }: DocumentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = getDocumentBySlug(slug);

  if (!document) {
    return { title: "Documents & Downloads" };
  }

  return {
    title: `${document.title} — Reading Edition`,
    description: `${document.description} Online reading edition with full Fitzherbert narration support.`,
  };
}

export default async function DocumentReadingPage({ params }: DocumentPageProps) {
  const { slug } = await params;
  const document = getDocumentBySlug(slug);

  if (!document) {
    notFound();
  }

  const fileName = `${slug}.pdf`;
  const chapters = DOCUMENT_CHAPTERS[fileName];

  if (!chapters) {
    notFound();
  }

  return (
    <>
      <Hero
        title={document.title}
        subtitle="Authoritative online reading edition for full-page and section narration"
      />

      <article data-narration-root="document" data-page-title={document.title}>
        <Section>
          <div data-narration-section="preamble" className="max-w-4xl mx-auto text-center">
            <SectionHeader
              eyebrow="Reading Edition"
              title="Institutional Text"
              description={document.description}
            />
            <p className="text-stone leading-relaxed text-lg">
              This page mirrors the University&apos;s generated PDF in a narration-friendly reading format. It exists so the Walking Professor can read the full document, section by section, without requiring a browser-native PDF text layer to behave itself, which experience suggests would be a sentimental assumption.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-gold bg-gold/10 px-6 py-3 text-xs tracking-widest uppercase text-gold hover:bg-gold hover:text-navy transition-colors"
              >
                Open PDF
              </Link>
              <Link
                href="/documents"
                className="inline-flex items-center border border-gold/30 px-6 py-3 text-xs tracking-widest uppercase text-maroon hover:border-gold hover:text-gold transition-colors"
              >
                Back to all documents
              </Link>
            </div>
          </div>
        </Section>

        {chapters.map((chapter, index) => (
          <Section key={chapter.title} alternate={index % 2 === 1} stone={index % 2 === 0}>
            <div data-narration-section={chapter.title} className="max-w-4xl mx-auto">
              <div className="engraved text-gold-text mb-4">Chapter {index + 1}</div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">{chapter.title}</h2>
              <div className="space-y-6 text-stone leading-relaxed text-lg">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Section>
        ))}
      </article>
    </>
  );
}
