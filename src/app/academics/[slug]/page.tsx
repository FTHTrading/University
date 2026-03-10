import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { colleges, getCollegeBySlug } from "@/lib/academics-data";

interface CollegePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return colleges.map((college) => ({ slug: college.slug }));
}

export async function generateMetadata({ params }: CollegePageProps): Promise<Metadata> {
  const { slug } = await params;
  const college = getCollegeBySlug(slug);

  if (!college) {
    return { title: "Academics" };
  }

  return {
    title: college.name,
    description: `${college.name} at Fitzherbert University — detailed academic overview, research institutes, degree pathways, and institutional operating doctrine.`,
  };
}

export default async function CollegeDetailPage({ params }: CollegePageProps) {
  const { slug } = await params;
  const college = getCollegeBySlug(slug);

  if (!college) {
    notFound();
  }

  return (
    <>
      <Hero
        title={college.name}
        subtitle={`${college.established} · ${college.dean} · ${college.motto}`}
      />

      <article data-narration-root="college" data-page-title={college.name}>
        <Section>
          <div data-narration-section="overview" className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
            <div>
              <SectionHeader
                eyebrow="College Dossier"
                title="Institutional Overview"
                description={college.description}
                center={false}
              />
              <div className="space-y-5 text-stone leading-relaxed text-lg">
                {college.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <aside className="border border-gold/20 bg-ivory p-8 h-fit">
              <p className="engraved text-gold-text mb-3">Academic Ledger</p>
              <dl className="space-y-4 text-sm text-stone">
                <div>
                  <dt className="font-serif text-base text-maroon">Dean</dt>
                  <dd>{college.dean}</dd>
                </div>
                <div>
                  <dt className="font-serif text-base text-maroon">Established</dt>
                  <dd>{college.established}</dd>
                </div>
                <div>
                  <dt className="font-serif text-base text-maroon">Departments</dt>
                  <dd>{college.departments.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="font-serif text-base text-maroon">Motto</dt>
                  <dd>{college.motto}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Section>

        <Section alternate stone>
          <div data-narration-section="curriculum" className="max-w-5xl mx-auto">
            <SectionHeader
              eyebrow="Curricular Life"
              title="Studios, Laboratories, and Degree Pathways"
              description="Each college is written as a full academic organism rather than a decorative landing-page label. Students progress through studios, institutional labs, oral defences, and cryptographically documented capstones."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-gold/20 bg-parchment p-8">
                <h3 className="font-serif text-2xl font-bold mb-5">Signature Studios</h3>
                <ul className="space-y-4 text-stone leading-relaxed">
                  {college.signatureStudios.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-gold mt-1">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gold/20 bg-parchment p-8">
                <h3 className="font-serif text-2xl font-bold mb-5">Degree Pathways</h3>
                <ul className="space-y-4 text-stone leading-relaxed">
                  {college.degreePathways.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-gold mt-1">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div data-narration-section="research" className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-t-2 border-gold pt-6">
              <h2 className="font-serif text-3xl font-bold mb-5">Research Institutes</h2>
              <p className="text-stone leading-relaxed mb-6">
                Fitzherbert treats each college as a research authority in its own right. Institutes exist not to pad the prospectus but to stabilise long-horizon work, archive methods properly, and ensure each new system has at least one office capable of explaining it after the original authors have wandered off to panels.
              </p>
              <ul className="space-y-4 text-stone leading-relaxed">
                {college.researchInstitutes.map((institute) => (
                  <li key={institute} className="flex gap-3">
                    <span className="text-gold mt-1">✦</span>
                    <span>{institute}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h2 className="font-serif text-3xl font-bold mb-5">Governance Notes</h2>
              <ul className="space-y-4 text-stone leading-relaxed">
                {college.governanceNotes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="text-gold mt-1">✦</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section alternate>
          <div data-narration-section="graduate-profile" className="max-w-4xl mx-auto text-center">
            <SectionHeader
              eyebrow="Graduate Standard"
              title="What the College Expects Its Graduates to Become"
              description="Fitzherbert degrees are written as competence statements, not decorative titles."
            />
            <div className="space-y-5 text-stone leading-relaxed text-lg">
              {college.graduateProfile.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/academics"
                className="inline-flex items-center border border-gold/30 px-6 py-3 text-xs tracking-widest uppercase text-maroon hover:border-gold hover:text-gold transition-colors"
              >
                Back to academics
              </Link>
              <Link
                href="/documents"
                className="inline-flex items-center border border-gold bg-gold/10 px-6 py-3 text-xs tracking-widest uppercase text-gold hover:bg-gold hover:text-navy transition-colors"
              >
                Read institutional documents
              </Link>
            </div>
          </div>
        </Section>
      </article>
    </>
  );
}
