import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { CollegeCard } from "@/components/CollegeCard";
import Link from "next/link";

const colleges = [
  {
    name: "College of Arts & Sciences",
    dean: "Professor Eleanor Ashworth",
    established: "Est. 1783",
    description:
      "The founding college of the University, dedicated to the liberal arts, natural philosophy, and the cultivation of critical inquiry across the humanities and sciences.",
  },
  {
    name: "School of Engineering & Applied Science",
    dean: "Professor James Harrington",
    established: "Est. 1847",
    description:
      "Pioneering advances in civil, mechanical, and computational engineering with a commitment to disciplined innovation and structural excellence.",
  },
  {
    name: "School of Law & Constitutional Studies",
    dean: "Professor Victoria Langford",
    established: "Est. 1801",
    description:
      "Training advocates, jurists, and constitutional scholars in the tradition of principled governance, legal philosophy, and institutional integrity.",
  },
  {
    name: "School of Divinity & Moral Philosophy",
    dean: "Professor Thomas Wycliffe",
    established: "Est. 1789",
    description:
      "Examining the enduring questions of ethics, theology, and moral reasoning that have shaped Western intellectual tradition for centuries.",
  },
  {
    name: "School of Medicine & Public Health",
    dean: "Professor Catherine Whitfield",
    established: "Est. 1832",
    description:
      "Advancing the science of healing through rigorous clinical training, biomedical research, and a commitment to the health of the commonwealth.",
  },
  {
    name: "Graduate School of Commerce & Strategy",
    dean: "Professor Richard Pemberton",
    established: "Est. 1891",
    description:
      "Developing leaders of institutional and commercial enterprise through the study of strategic management, market theory, and fiduciary stewardship.",
  },
];

const news = [
  {
    date: "February 2026",
    title: "Chancellor Announces Expansion of Computational Sciences Division",
    excerpt:
      "A new endowed chair and three research laboratories will strengthen the University's leadership in artificial intelligence and formal methods.",
  },
  {
    date: "January 2026",
    title: "Restoration of Heritage Hall Completed",
    excerpt:
      "The 1803 Gothic Revival masterwork has been meticulously restored, preserving its architectural integrity for the next century of scholarly life.",
  },
  {
    date: "December 2025",
    title: "Fitzherbert University Ascends in Global Research Rankings",
    excerpt:
      "The University achieved its highest-ever placement in the World Institutional Research Index, reflecting sustained investment in foundational scholarship.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <Hero fullHero />

      {/* ── Institutional Statistics Ribbon ────────── */}
      <section className="stats-ribbon py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              { stat: "1783", label: "Founded" },
              { stat: "8,200", label: "Students" },
              { stat: "420", label: "Acres" },
              { stat: "860+", label: "Faculty" },
              { stat: "6", label: "Colleges" },
              { stat: "12", label: "Research Institutes" },
              { stat: "14.2B", label: "Endowment" },
              { stat: "3", label: "Nobel Laureates" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-xl md:text-2xl font-bold text-gold">
                  {s.stat}
                </p>
                <p className="text-xs tracking-widest uppercase text-parchment/60 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 latin-inscription">
            Veritas per Disciplina &middot; Scientia &middot; Integritas &middot; Hereditas
          </p>
        </div>
      </section>

      {/* ── Chancellor's Message ──────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Message from the Chancellor"
          title="A Commitment to Enduring Excellence"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-stone mb-6 drop-cap">
            Founded in the Age of Enlightenment, Fitzherbert University stands as a
            steward of disciplined inquiry, moral courage, and institutional continuity.
            For more than two centuries, we have cultivated scholars, statesmen, and
            pioneers whose contributions have shaped the course of human understanding.
          </p>
          <p className="text-lg leading-relaxed text-stone mb-8">
            Our mission remains unchanged: to provide an education of such depth and
            rigour that it transforms not merely careers, but characters. We invite
            you to explore the traditions, scholarship, and community that define this
            venerable institution.
          </p>
          <p className="font-serif italic text-maroon">
            &mdash; The Rt. Hon. Chancellor Sir Edmund Blackwell, KBE
          </p>
        </div>
      </Section>

      {/* ── Colleges & Schools ────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Colleges & Schools"
          title="Six Pillars of Scholarship"
          description="Each college upholds a distinct tradition of inquiry, united by the University's founding commitment to truth through disciplined study."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((c) => (
            <CollegeCard key={c.name} {...c} />
          ))}
        </div>
      </Section>

      {/* ── Research ──────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Research & Innovation"
          title="Advancing the Frontier of Knowledge"
          description="Our research institutes pursue the most consequential questions of our age, from artificial intelligence governance to constitutional theory and biomedical discovery."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Institute for Constitutional Governance",
              desc: "Examining the legal and philosophical foundations of institutional authority, sovereignty, and democratic accountability.",
            },
            {
              title: "Centre for Artificial Intelligence & Ethics",
              desc: "Pioneering responsible AI development through rigorous validation, model governance, and fairness-aware machine learning.",
            },
            {
              title: "Heritage Sciences Laboratory",
              desc: "Applying advanced analytical techniques to the preservation and understanding of cultural and architectural heritage.",
            },
          ].map((inst) => (
            <div
              key={inst.title}
              className="border-t-2 border-gold pt-6"
            >
              <h3 className="font-serif text-lg font-bold mb-3">
                {inst.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                {inst.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/research"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
          >
            All Research Institutes
          </Link>
        </div>
      </Section>

      {/* ── Athletics ─────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Athletics & Esports"
          title="Discipline Beyond the Lecture Hall"
          description="Competitive excellence grounded in the same values of preparation, strategy, and conviction that define our academic mission."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-gold/20 bg-parchment p-8 gold-emboss">
            <h3 className="font-serif text-xl font-bold mb-3">Varsity Athletics</h3>
            <p className="text-stone text-sm leading-relaxed mb-4">
              Twenty-four varsity programmes across traditional and emerging sports,
              competing at the highest levels of intercollegiate competition. Our
              student-athletes embody the University&apos;s commitment to holistic
              development.
            </p>
            <Link
              href="/athletics"
              className="text-xs tracking-widest uppercase text-gold hover:text-maroon transition-colors"
            >
              Explore Teams &rarr;
            </Link>
          </div>
          <div className="border border-gold/20 bg-parchment p-8 gold-emboss">
            <h3 className="font-serif text-xl font-bold mb-3">Esports Division</h3>
            <p className="text-stone text-sm leading-relaxed mb-4">
              The University&apos;s esports programme integrates competitive gaming
              with strategic analytics, data science, and performance psychology &mdash;
              bringing academic rigour to digital competition.
            </p>
            <Link
              href="/athletics"
              className="text-xs tracking-widest uppercase text-gold hover:text-maroon transition-colors"
            >
              Explore Esports &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Admissions ────────────────────────────── */}
      <Section stone>
        <div className="text-center max-w-3xl mx-auto">
          <p className="engraved text-gold mb-3">Admissions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Begin Your Journey
          </h2>
          <div className="gold-divider-center" />
          <p className="text-stone-light text-lg leading-relaxed mt-6 mb-10">
            Fitzherbert University seeks students of exceptional intellect, moral
            seriousness, and scholarly ambition. Our admissions process is both
            selective and holistic, reflecting the institution&apos;s commitment to
            cultivating future stewards of knowledge and governance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-block bg-maroon text-parchment px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-maroon-light transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </Section>

      {/* ── News ──────────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="News & Announcements"
          title="From the University Record"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.title}
              className="border-l-2 border-gold pl-6"
            >
              <p className="engraved text-gold/60 text-xs mb-2">{item.date}</p>
              <h3 className="font-serif text-lg font-bold mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Endowment ─────────────────────────────── */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="engraved text-gold mb-3">Endowment & Legacy</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Stewards of an Enduring Mission
          </h2>
          <div className="gold-divider-center" />
          <p className="text-stone-light text-lg leading-relaxed mt-6 mb-8">
            The University&apos;s endowment, cultivated over centuries of careful
            stewardship, ensures that our mission of scholarly excellence and
            institutional integrity endures for generations yet unborn.
          </p>
          <Link
            href="/endowment"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
          >
            Founders Circle &amp; Giving
          </Link>
        </div>
      </Section>
    </>
  );
}
