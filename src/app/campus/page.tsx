import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "Heritage architecture and computational infrastructure — how Fitzherbert University's physical and digital campus supports intelligence-doubling operations.",
};

const facilities = [
  {
    name: "The Heritage Quad",
    type: "Heritage Architecture",
    icon: "🏛",
    description:
      "The original Georgian quadrangle, dating to 1783. Now preserved as the ceremonial heart of the University, housing the Chancellor's Office, the Heritage Archive, and the Constitutional Chamber where the Epoch Council convenes. A persistent damp patch in the east wing has been designated a 'heritage moisture feature' and is protected under Charter Article I.",
    features: [
      "Chancellor's Office & Heritage Steward's quarters",
      "Constitutional Chamber (Epoch Council seat)",
      "Heritage Archive — original 1783 charter, questionable provenance collection",
      "Ceremonial courtyard for epoch transition ceremonies (rain contingency: the corridor)",
    ],
  },
  {
    name: "The Wycliffe Library",
    type: "Heritage + Digital Infrastructure",
    icon: "📚",
    description:
      "The University's library since 1801. The physical collection now serves as the heritage layer beneath a fully digital canonical registry. Every volume in the collection has been digitised, hashed, and registered in the Edition Manifest system. The resident pigeon in the rare manuscript vault has been there longer than any member of staff and is believed to be load-bearing.",
    features: [
      "62,000 physical volumes (heritage collection; approximately 340 have been opened)",
      "Full digital canonical registry (Merkle-verified)",
      "Reading rooms with computational workstations (and adequate heating, as of February 2026)",
      "Rare manuscript vault with climate-controlled preservation and one (1) pigeon",
    ],
  },
  {
    name: "The Voss Computing Centre",
    type: "Computational Infrastructure",
    icon: "⬢",
    description:
      "The University's primary computational facility, opened with the Epoch 0.1 activation. Named for Director Elara Voss, it houses the distributed computing infrastructure that powers all AI operations, deterministic rendering, and Merkle verification systems.",
    features: [
      "High-performance GPU clusters for model training",
      "Deterministic rendering pipeline (zero-variance output)",
      "Distributed storage for canonical registry and IPFS archive",
      "Redundant networking with sovereign infrastructure",
    ],
  },
  {
    name: "The Langford Governance Lab",
    type: "Research & Governance Facility",
    icon: "⬡",
    description:
      "The operational headquarters of the Institute for Autonomous Governance. Purpose-built for constitutional AI research, policy engineering, and governance simulation. Where the Four-Gate Validation Protocol was designed and tested.",
    features: [
      "Governance simulation theatre (multi-agent constitutional modelling)",
      "Policy engineering workspaces",
      "Secure meeting rooms for Alignment Review Committee",
      "Direct link to the Constitutional Chamber",
    ],
  },
  {
    name: "The Chen Cryptography Wing",
    type: "Research & Security Facility",
    icon: "◈",
    description:
      "The secure research facility for the Institute for Multi-Chain Provenance and the College of Cryptographic Infrastructure. Air-gapped computing environments, zero-knowledge proof development labs, and the University's key management infrastructure.",
    features: [
      "Air-gapped computing environments for cryptographic research",
      "Zero-knowledge proof development laboratory",
      "Key management and identity infrastructure vault",
      "Cross-chain verification testing environment",
    ],
  },
  {
    name: "The Caldwell Publishing Lab",
    type: "Deterministic Publishing Facility",
    icon: "◇",
    description:
      "The operational centre of the Institute for Deterministic Publishing. Every scholarly artifact the University produces is rendered here — deterministically, reproducibly, and cryptographically verified before publication to the canonical registry.",
    features: [
      "Deterministic rendering servers (bit-identical output)",
      "Edition Manifest certification station",
      "IPFS pinning infrastructure",
      "Reproducibility audit workstations",
    ],
  },
  {
    name: "Epoch Commons",
    type: "Student & Social Hub",
    icon: "🏢",
    description:
      "The primary hub for student life — collaborative workspaces, social areas, dining facilities, and the Student Governance Forum where epoch-cycle representatives convene. The dining hall serves three meals daily. The menu rotates on an epoch-aligned cycle. Complaints are routed through the Four-Gate Protocol.",
    features: [
      "Open-plan collaborative workspaces with compute access",
      "Student Governance Forum chamber (quorum rarely achieved)",
      "Dining hall and social commons",
      "Inter-college meeting spaces (booking system pending since Epoch 0.2)",
    ],
  },
  {
    name: "The Alignment Theatre",
    type: "Events & Review Facility",
    icon: "🎭",
    description:
      "A 300-seat theatre used for public lectures, epoch transition ceremonies, alignment review presentations, and the Annual Epoch Review. The Theatre was originally designed for 150 seats; the additional capacity was achieved by the College of Narrative & Protocol Design redefining 'seat' to include 'standing positions with moral support.'",
    features: [
      "300-seat auditorium (see above re: definition of 'seat')",
      "Deterministic recording infrastructure",
      "Public lecture and ceremony space",
      "Annual Epoch Review venue (attendance: compulsory; enthusiasm: optional)",
    ],
  },
];

export default function CampusPage() {
  return (
    <>
      <Hero
        title="Campus"
        subtitle="Where Georgian heritage meets computational infrastructure — a campus built for two centuries and one year."
      />

      {/* ── Campus Philosophy ─────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Campus Architecture"
            title="Heritage Preserved. Infrastructure Built."
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              The campus of Fitzherbert University is a physical embodiment of the dual-timeline
              identity. The Georgian quadrangle of 1783 stands at the centre — preserved,
              maintained, and still in active use as the ceremonial heart of the institution.
              Around it, the computational infrastructure of the rechartered University has been
              built: computing centres, governance laboratories, cryptographic research facilities,
              and deterministic publishing labs. The juxtaposition of eighteenth-century stonework
              and server racks has been described by the Heritage Steward as 'architecturally
              courageous' and by the fire marshal as 'concerning.'
            </p>
            <p>
              The architecture is deliberate. Heritage buildings house governance, ceremony, and
              the archive. New facilities house the computational infrastructure that powers the
              AI-native institution. Students move between both — physically and intellectually —
              and are required to remove their shoes in the Heritage Archive, which the Chancellor
              insists is a mark of respect rather than a cost-saving measure on carpet cleaning.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Campus in Frame ──────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Photographic Record"
          title="The Campus in Frame"
          description="Documentary images from the Office of Institutional Archive, 2025–26. Each image is registered in the Edition Manifest system under the University's canonical record protocols."
        />

        {/* Row 1 — Heritage and overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div className="md:col-span-3 relative aspect-[4/3] overflow-hidden border border-gold/20">
            <Image
              src="/images/campus-heritage.png"
              alt="The Heritage Quad, main court — founded 1783"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-4 py-3">
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-0.5">Heritage Precinct</div>
              <div className="text-parchment font-serif text-sm font-bold">The Heritage Quad — Main Court, 1783</div>
            </div>
          </div>
          <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden border border-gold/20">
            <Image
              src="/images/campus-aerial.png"
              alt="Campus overview — Heritage and Computational Precincts"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-4 py-3">
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-0.5">Overview</div>
              <div className="text-parchment font-serif text-sm font-bold">Heritage &amp; Computational Precincts, 2025</div>
            </div>
          </div>
        </div>

        {/* Row 2 — Academic, governance, arts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            {
              src: "/images/epoch-council-session.png",
              alt: "Epoch Council in session — Constitutional Chamber",
              eyebrow: "Governance",
              caption: "Epoch Council in Session — Constitutional Chamber",
            },
            {
              src: "/images/academic-instruction.png",
              alt: "Directed Intelligence Specification masterclass",
              eyebrow: "Academic Life",
              caption: "Directed Intelligence Specification — Michaelmas Masterclass",
            },
            {
              src: "/images/college-narrative-protocol.png",
              alt: "College of Narrative and Protocol Design studio session",
              eyebrow: "Narrative & Protocol Design",
              caption: "Protocol Architecture Workshop — Studio Session 2025",
            },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden border border-gold/20">
              <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
              <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-4 py-3">
                <div className="text-gold/70 text-xs tracking-widest uppercase mb-0.5">{img.eyebrow}</div>
                <div className="text-parchment font-serif text-sm font-bold">{img.caption}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 — Grounds and research */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden border border-gold/20">
            <Image
              src="/images/inference-gardens.png"
              alt="The Inference Gardens — Human Continuity Precinct"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-4 py-3">
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-0.5">Campus Grounds</div>
              <div className="text-parchment font-serif text-sm font-bold">The Inference Gardens — Human Continuity Precinct</div>
            </div>
          </div>
          <div className="md:col-span-3 relative aspect-[4/3] overflow-hidden border border-gold/20">
            <Image
              src="/images/research-institute.png"
              alt="Institute for Applied Intelligence — Research Division"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-4 py-3">
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-0.5">Research</div>
              <div className="text-parchment font-serif text-sm font-bold">Institute for Applied Intelligence — Research Division, 2025</div>
            </div>
          </div>
        </div>

        {/* Row 4 — Human Continuity Exercise (full width) */}
        <div className="relative h-72 overflow-hidden border border-gold/20">
          <Image
            src="/images/human-continuity-exercise.png"
            alt="Human Continuity Exercise — Manual Cognition Drill, 2025"
            fill
            className="object-cover object-center"
            unoptimized
          />
          <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-6 py-4">
            <div className="text-gold/70 text-xs tracking-widest uppercase mb-1">Human Continuity Programme</div>
            <div className="text-parchment font-serif text-base font-bold">Manual Cognition Drill — Mandatory Annual Exercise, 2025</div>
            <div className="text-parchment/60 text-xs mt-1">All Fitzherbert University students are required to complete the annual Manual Cognition Drill, demonstrating the capacity to perform institutional functions without AI assistance. Photograph: Office of Institutional Archive.</div>
          </div>
        </div>

        {/* Row 5 — Additional campus views */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="relative aspect-[4/3] overflow-hidden border border-gold/20">
            <Image
              src="/images/university-2.png"
              alt="The South Precinct — Computational Wing, 2025"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-4 py-3">
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-0.5">South Precinct</div>
              <div className="text-parchment font-serif text-sm font-bold">Computational Wing — Opened 2025, Leaking 2025</div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-gold/20">
            <Image
              src="/images/gardening-ai.png"
              alt="The Inference Gardens — Grounds Maintenance Division"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-4 py-3">
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-0.5">Grounds & Horticulture</div>
              <div className="text-parchment font-serif text-sm font-bold">Inference Gardens — Tended by Algorithm, Watered by Optimism</div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Facilities ────────────────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Facilities"
          title="Campus Infrastructure"
          description="Eight facilities spanning heritage architecture and computational infrastructure."
        />
        <div className="max-w-5xl mx-auto space-y-8">
          {facilities.map((f) => (
            <div key={f.name} className="border border-gold/20 bg-ivory p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-serif text-xl font-bold">{f.name}</h3>
                  <p className="text-maroon text-xs tracking-wide uppercase">{f.type}</p>
                </div>
              </div>
              <p className="text-stone text-sm leading-relaxed mb-4">{f.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {f.features.map((feat) => (
                  <div key={feat} className="text-stone text-sm flex items-start gap-2">
                    <span className="text-gold mt-1">&#9670;</span>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Campus Stats ──────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="By the Numbers"
          title="Campus at a Glance"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "1783", label: "Heritage Quad Built" },
            { value: "8", label: "Major Facilities" },
            { value: "62K", label: "Physical Volumes" },
            { value: "100%", label: "Collection Digitised" },
            { value: "6", label: "Research Labs" },
            { value: "3", label: "Heritage Buildings" },
            { value: "300", label: "Theatre Seats" },
            { value: "24/7", label: "Compute Availability" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card text-center">
              <div className="font-serif text-3xl font-bold text-maroon">{stat.value}</div>
              <div className="text-stone text-xs mt-2 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Getting Here ──────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Access"
          title="Getting Here"
        />
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg font-bold mb-3">Physical Campus</h3>
            <p className="text-stone text-sm leading-relaxed mb-4">
              The University campus is located in a historic setting with excellent transport
              connections. The Heritage Quad and surrounding facilities are accessible by
              public transport, with visitor parking available.
            </p>
            <p className="text-stone text-sm leading-relaxed">
              Guided campus tours are available during epoch transition weeks and by appointment
              with the Admissions Office.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg font-bold mb-3">Digital Infrastructure</h3>
            <p className="text-stone text-sm leading-relaxed mb-4">
              The University's computational infrastructure is accessible remotely via
              sovereign network connections. All students and faculty receive authenticated
              access to computing resources, the canonical registry, and governance systems.
            </p>
            <p className="text-stone text-sm leading-relaxed">
              Remote access operates on the same security protocols as on-campus systems,
              verified through the University's identity infrastructure.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
