import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug, getAuthor } from "@/lib/articles";
import { computeArticleCanonical } from "@/lib/canonical";
import { ArticleLayout } from "./ArticleLayout";

// ── Static export: pre-render every article ──────────────────────────────────
export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

// ── Per-article metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const author = getAuthor(article.authorId);

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: author.name, url: author.url }],
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [author.name],
      section: article.category,
      tags: article.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

// ── Page Component ───────────────────────────────────────────────────────────
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const author = getAuthor(article.authorId);
  const canonical = computeArticleCanonical(article);

  // ── JSON-LD: Person (Author Entity) ────────────────────────────────────────
  const personJsonLd = article.authorId !== "editorial-board" ? {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    url: author.url,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Fitzherbert University",
      url: "https://fitzherbert.university",
      foundingDate: "1783",
    },
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Fitzherbert University",
    },
    sameAs: [],
  } : null;

  // ── JSON-LD: ScholarlyArticle ──────────────────────────────────────────────
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.excerpt,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.title,
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Fitzherbert University",
      },
      url: author.url,
    },
    publisher: {
      "@type": "CollegeOrUniversity",
      name: "Fitzherbert University",
      url: "https://fitzherbert.university",
      logo: {
        "@type": "ImageObject",
        url: "https://fitzherbert.university/crest.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fitzherbert.university/blog/${article.slug}`,
    },
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    wordCount: article.sections.reduce(
      (sum, s) => sum + s.content.split(/\s+/).length,
      0
    ),
    citation: article.citations.map((c) => c.text),
    inLanguage: "en",
    isAccessibleForFree: true,
    creativeWorkStatus: "Published",
  };

  // ── JSON-LD: FAQPage ───────────────────────────────────────────────────────
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  // ── JSON-LD: BreadcrumbList ────────────────────────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fitzherbert.university",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "University Record",
        item: "https://fitzherbert.university/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://fitzherbert.university/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD scripts */}
      {personJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ArticleLayout article={article} author={author} canonical={canonical} />
    </>
  );
}
