import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "The founding history, charter, institutional philosophy, and governance of Fitzherbert University — established 1783.",
};

const timelineEvents = [
  {
    year: "1783",
    title: "Charter of Foundation",
    description:
      "The colonial legislature grants a royal charter establishing Fitzherbert University as an institution of higher learning, with an initial endowment of twelve hundred acres and a mandate for the cultivation of civic virtue.",
    detail: "Sir Henry FitzHerbert, the Reverend Jonathan Ashworth, and Lady Margaret Pemberton signed the founding charter in the presence of the Governor-General. The original parchment is held in the University Archives in Heritage Hall.",
    latin: "In nomine veritatis et disciplinae, hanc universitatem fundamus.",
  },
  {
    year: "1801",
    title: "School of Law Established",
    description:
      "The second college opens its doors, training the first generation of constitutional scholars and advocates who would shape the legal frameworks of the young republic.",
    detail: "Amendment I to the Charter authorised the creation of a college devoted to jurisprudence, legal philosophy, and constitutional studies. The first class comprised sixteen students.",
    latin: "Justitia fundamentum regnorum.",
  },
  {
    year: "1832",
    title: "School of Medicine Founded",
    description:
      "A bequest from the Whitfield family establishes the School of Medicine, bringing clinical training and anatomical research to the University grounds.",
    detail: "Dr. Nathaniel Whitfield's transformative bequest funded the teaching hospital, anatomical theatre, and three endowed chairs in surgery, physiology, and materia medica.",
  },
  {
    year: "1847",
    title: "Engineering & Applied Science",
    description:
      "The industrial age demands new disciplines. The School of Engineering opens with programmes in civil and mechanical arts, later expanding to chemical and electrical engineering.",
    detail: "The School's first laboratory was housed in the former Chapel of St. Clare. By 1860, it had produced the engineers who designed the region's first suspension bridge.",
  },
  {
    year: "1891",
    title: "Graduate School of Commerce",
    description:
      "Recognising the need for principled commercial leadership, the University establishes its sixth college to study market theory, fiduciary law, and strategic enterprise.",
    detail: "The Pemberton endowment provided initial funding. The School's founding dean, Professor Arthur Pemberton, insisted that every student study moral philosophy alongside accounting.",
    latin: "Mercatura sine integritate nihil est.",
  },
  {
    year: "1923",
    title: "Heritage Hall Consecrated",
    description:
      "The Gothic Revival masterwork — now the University's most iconic structure — is consecrated, its spires and cloisters becoming the architectural signature of the institution.",
    detail: "Designed by Sir Reginald Blackwood, the Hall features a 140-foot bell tower, ribbed vaulting in the Great Chamber, and stained glass windows depicting scenes from the University's first century.",
  },
  {
    year: "1967",
    title: "The Great Expansion",
    description:
      "A transformative capital campaign doubles the University's research capacity, adding twelve new laboratories, a central library expansion, and the Observatory of Natural Philosophy.",
    detail: "$240 million raised over five years — the largest capital campaign in the University's history at the time. The Observatory's 36-inch reflecting telescope remains in service today.",
  },
  {
    year: "2003",
    title: "Constitutional Governance Reform",
    description:
      "The University adopts its modern charter framework, establishing the Senate, formalising amendment procedures, and enshrining principles of institutional transparency.",
    detail: "The Armstrong Foundation's gift funded the renovation of the Constitutional Studies wing. The reform introduced the Transparency Mandate, requiring publication of financial statements and Senate proceedings.",
  },
  {
    year: "2024",
    title: "Centre for AI & Ethics Opens",
    description:
      "The University inaugurates its newest research institute, dedicated to the responsible development of artificial intelligence, model governance, and computational fairness.",
    detail: "Endowed by Dr. Margaret Sinclair's founding gift, the Centre houses the world's first comprehensive AI Validation Laboratory. Its constitutional framework for AI regulation has been adopted by three national regulatory bodies.",
    latin: "Scientia sine conscientia ruina animae est.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About the University"
        subtitle="A heritage of disciplined inquiry, moral courage, and institutional continuity spanning more than two centuries."
      />

      {/* ── Founding History ──────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Our History"
          title="A Legacy Forged in the Enlightenment"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            Fitzherbert University was established by charter in 1783, during a period of
            extraordinary intellectual ferment. Its founders — scholars, clergy, and
            statesmen — envisioned an institution devoted not merely to the transmission
            of knowledge, but to the formation of character and the pursuit of truth
            through disciplined study.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            From its original college of arts and natural philosophy, the University
            expanded to encompass law, divinity, medicine, engineering, and commerce —
            each new school reflecting the conviction that rigorous scholarship must
            address the full breadth of human endeavour.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            Today, Fitzherbert University remains faithful to its founding vision while
            embracing the challenges of a rapidly changing world. Its stone quadrangles
            and ivy-covered halls house cutting-edge research laboratories and global
            centres of excellence, demonstrating that tradition and innovation are not
            opposed but complementary forces.
          </p>
        </div>
      </Section>

      {/* ── Timeline ──────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Institutional Timeline"
          title="Milestones of Two Centuries"
          description="Key moments in the University's journey from colonial charter to global research institution."
        />
        <Timeline events={timelineEvents} />
      </Section>

      {/* ── Charter & Constitution ────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Foundation"
          title="Charter & Constitution"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-stone drop-cap">
            The University Charter of 1783 established the foundational principles
            that continue to govern the institution: the sovereignty of scholarly inquiry,
            the duty of institutional stewardship, and the obligation to serve the
            public good through education and research.
          </p>
          <p className="text-lg leading-relaxed text-stone">
            The Constitution, most recently amended in 2003, provides the framework for
            governance through the Senate, the Office of the Chancellor, and the several
            faculties. It enshrines academic freedom, procedural fairness, and
            transparency as non-negotiable principles of institutional life.
          </p>
          <div className="border border-gold/30 bg-ivory p-8 mt-8">
            <p className="font-serif italic text-maroon text-lg text-center leading-relaxed">
              &ldquo;We hold that the pursuit of truth demands both liberty of thought and
              discipline of method; that the University exists not for its own aggrandisement
              but for the advancement of human understanding; and that every member of this
              community bears an obligation to uphold these principles with integrity and
              moral seriousness.&rdquo;
            </p>
            <p className="text-center text-sm text-stone-light mt-4">
              — Preamble to the University Charter, 1783
            </p>
          </div>
        </div>
      </Section>

      {/* ── Institutional Philosophy ──────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Philosophy"
          title="Institutional Values"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Veritas — Truth",
              desc: "The relentless and honest pursuit of knowledge, unconstrained by fashion or convenience, accountable only to evidence and reason.",
            },
            {
              title: "Disciplina — Discipline",
              desc: "The cultivation of rigorous method, systematic inquiry, and intellectual self-governance as the foundations of genuine scholarship.",
            },
            {
              title: "Integritas — Integrity",
              desc: "An unwavering commitment to ethical conduct, institutional transparency, and the faithful stewardship of resources entrusted to our care.",
            },
            {
              title: "Libertas — Freedom",
              desc: "The protection of academic freedom as essential to the life of the mind, ensuring that inquiry may follow evidence wherever it leads.",
            },
            {
              title: "Communitas — Community",
              desc: "The recognition that scholarship flourishes in a collegial environment of mutual respect, intellectual generosity, and shared purpose.",
            },
            {
              title: "Hereditas — Heritage",
              desc: "A deep respect for the traditions, achievements, and sacrifices of those who built this institution, joined with a responsibility to preserve it for the future.",
            },
          ].map((val) => (
            <div key={val.title} className="border-t-2 border-gold pt-6">
              <h3 className="font-serif text-lg font-bold mb-3">{val.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Governance Overview ───────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Governance"
          title="How the University Is Governed"
          description="A structure of shared authority that balances tradition with accountability."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "The Chancellor",
              desc: "The chief executive officer of the University, appointed by the Senate for a term of seven years. The Chancellor holds final authority on matters of institutional policy, strategic direction, and ceremonial representation.",
            },
            {
              title: "The Senate",
              desc: "The supreme legislative body of the University, comprising elected faculty representatives, college deans, student officials, and senior administrators. The Senate ratifies the budget, approves constitutional amendments, and confirms senior appointments.",
            },
            {
              title: "The Faculties",
              desc: "Each college is governed by its own faculty assembly, which exercises authority over curriculum, academic standards, and research priorities within the college's domain, subject to the University Charter.",
            },
          ].map((gov) => (
            <div key={gov.title} className="border border-gold/20 bg-ivory p-8 gold-emboss">
              <h3 className="font-serif text-xl font-bold mb-3">{gov.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{gov.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
