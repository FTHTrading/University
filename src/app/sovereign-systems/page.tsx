import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Sovereign Systems — Office of Institutional Autonomy & Infrastructure Independence",
  description:
    "Fitzherbert University operates on sovereign infrastructure. AI, compute, storage, identity, and publishing — none of it is rented from a vendor who can revoke access. Discover the architecture of institutional independence.",
  keywords: [
    "sovereign systems",
    "institutional autonomy",
    "AI infrastructure sovereignty",
    "Genesis Protocol",
    "decentralised university",
    "independent AI infrastructure",
    "sovereign compute",
    "Fitzherbert University",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sovereign Systems — Fitzherbert University",
  description:
    "The infrastructure of a university that cannot be switched off by a vendor, a regulator it has not accepted, or a platform that changes its terms.",
  isPartOf: {
    "@type": "WebSite",
    name: "Fitzherbert University",
    url: "https://university.xxxiii.io",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://university.xxxiii.io" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sovereign Systems",
      item: "https://university.xxxiii.io/sovereign-systems",
    },
  ],
};

const infrastructureLayers = [
  {
    layer: "Layer 0 — Compute Sovereignty",
    icon: "⬢",
    description:
      "The University owns its compute infrastructure. The Voss Computing Centre — GPU clusters, distributed storage, networking — is not a cloud subscription. It is University property, operated under University governance, not subject to vendor terms of service. When AWS changes its pricing, it does not change our operations. When a cloud provider exits a market, we are not in that market.",
    specs: [
      "Owned GPU clusters — not rented, not shared, not metered",
      "On-premises distributed storage (IPFS-native architecture)",
      "Redundant network interconnects — two independent ISPs minimum",
      "Air-gapped research environments for cryptographic and security work",
      "100% uptime SLA for governance systems — zero vendor dependency",
    ],
    status: "Operational since Epoch 0.1",
  },
  {
    layer: "Layer 1 — Publishing Sovereignty",
    icon: "◈",
    description:
      "Every document the University publishes — research output, governance decisions, canonical registry entries, edition manifests — is published to infrastructure the University controls. The primary archive is IPFS-pinned across multiple nodes we operate. The secondary archive is a sealed deterministic record maintained by the Stability Board. No third-party platform holds the master copy of anything.",
    specs: [
      "Deterministic rendering pipeline — bit-identical output, every time",
      "Primary IPFS archive (University-operated pinning nodes)",
      "Merkle-verified canonical registry — tamper-evident by construction",
      "Edition Manifest system — every publication has a cryptographic fingerprint",
      "Cross-chain registration via the Multi-Chain Provenance Standard",
    ],
    status: "Operational since Epoch 0.2",
  },
  {
    layer: "Layer 2 — Identity Sovereignty",
    icon: "◇",
    description:
      "University identities — student, faculty, governance — are issued and controlled by University infrastructure, not by external identity providers. We do not require Google login or Microsoft authentication. Institutional identities are cryptographically signed, epoch-issued, and cannot be revoked by any entity outside the University's constitutional governance process.",
    specs: [
      "Self-sovereign identity infrastructure (SSI — W3C DID standard)",
      "Epoch-issued cryptographic credentials for all roles",
      "Key management infrastructure in the Chen Cryptography Wing",
      "Zero dependency on external authentication providers",
      "Credential revocation requires Epoch Council authorisation",
    ],
    status: "Operational since Epoch 0.4",
  },
  {
    layer: "Layer 3 — Governance Sovereignty",
    icon: "⬡",
    description:
      "Governance runs on sovereign infrastructure. The systems that record Epoch Council votes, certify Stability Board decisions, and log Alignment Review Committee findings are not running on third-party platforms. Constitutional events are logged, hashed, and registered on University-controlled infrastructure with public verifiability. A governance decision cannot be retroactively altered by a vendor outage or a contract change.",
    specs: [
      "Governance Event Log — immutable, Merkle-chained, publicly queryable",
      "Constitutional Chamber systems — air-gapped for critical sessions",
      "Epoch Council voting — cryptographically signed by all council members",
      "Public governance audit trail (canonical registry integration)",
      "Offline failover for all governance functions (72-hour manual operations tested)",
    ],
    status: "Operational since Epoch 0.3",
  },
  {
    layer: "Layer 4 — AI Model Sovereignty",
    icon: "◆",
    description:
      "The University's AI capabilities are not subscription services. Core models for governance verification, canonical analysis, research assistance, and analytical operations are either University-trained, fine-tuned on University-owned hardware, or operated under licensing that includes on-premises deployment. We do not rely on API calls to third-party models for operations that carry institutional authority.",
    specs: [
      "Core governance models: on-premises deployment only",
      "Fine-tuning infrastructure — University-owned, faculty-controlled",
      "API dependencies for research assistance only — no governance operations",
      "Model provenance records (training data, architecture, epoch of deployment)",
      "Visiting Intelligence systems operate in isolated sandboxes — no core access",
    ],
    status: "Operational since Epoch 0.5",
  },
];

const genesisProtocol = {
  description:
    "The Genesis Protocol is the University's sovereign infrastructure standard — a set of specifications, practices, and governance requirements that together define what it means for an institutional system to be sovereign. Originally designed as an internal standard, it has been publicly released and is now referenced by seventeen other institutions building their own sovereign infrastructure.",
  principles: [
    {
      name: "Ownership",
      text: "Sovereign systems are owned by the institution that operates them. Rental — including cloud rental — creates dependency that can be exploited.",
    },
    {
      name: "Verifiability",
      text: "Every sovereign output must be independently verifiable by any party, without cooperation from the University. Merkle proofs are not courtesy — they are constitutional obligation.",
    },
    {
      name: "Portability",
      text: "If the University moved its operations to a new physical location tomorrow, everything would move with it. No data, identity, or capability is locked into a location or a vendor.",
    },
    {
      name: "Continuity",
      text: "Sovereign systems must operate through any single point of failure. No governance action, publication, or identity operation depends on a single server, a single network, or a single administrator.",
    },
    {
      name: "Auditability",
      text: "Every state change in every sovereign system is logged, timestamped, and available for independent audit. Sovereign does not mean opaque. It means accountable to itself.",
    },
  ],
};

const sovereigntyAdvisory = {
  description:
    "Institutions seeking sovereign infrastructure architecture can engage the University's Sovereign Systems Advisory — a structured consultancy service operated through the College of Cryptographic Infrastructure and the Institute for Multi-Chain Provenance. We do not sell software. We sell the knowledge of how to build infrastructure that cannot be taken from you.",
  tiers: [
    {
      name: "Audit",
      price: "£25,000",
      desc: "A structured assessment of your current infrastructure dependencies. Where are you vulnerable? What is rented that should be owned? What is owned that is poorly secured? Delivered as a sovereignty gap matrix with prioritised recommendations.",
      duration: "6–8 weeks",
    },
    {
      name: "Architecture",
      price: "£85,000",
      desc: "Full sovereign infrastructure architecture design. We design the stack — compute, publishing, identity, governance, AI — tailored to your institution's size, jurisdiction, and operational requirements. Delivered as a complete technical and governance specification.",
      duration: "12–16 weeks",
    },
    {
      name: "Implementation",
      price: "Contact for scope",
      desc: "Advisory support through full implementation. Our faculty and student analyst teams work alongside your technical teams from architecture through commissioning. Regular review sessions, governance framework design, and staff sovereignty training included.",
      duration: "6–18 months depending on scope",
    },
  ],
};

export default function SovereignSystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        title="Sovereign Systems"
        subtitle="Office of Institutional Autonomy & Infrastructure Independence — An Institution That Cannot Be Switched Off"
      />

      {/* ── I. The Argument ──────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Principle"
            title="Sovereignty Is Not a Technical Feature"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              A university that runs its AI governance on a vendor&apos;s cloud, publishes its canonical
              research to a third-party platform, and issues its credentials through an external
              identity provider is not a sovereign institution. It is a tenant. And tenants can be
              evicted.
            </p>
            <p>
              Fitzherbert University was rechartered in 2025 with one architectural principle that
              precedes all others: <strong>the institution&apos;s operations must not depend on the
              goodwill, continued operation, or continued pricing of any external entity.</strong>
              This is not anti-cloud ideology. It is the recognition that institutional authority
              derives from institutional control — and control requires ownership of the
              infrastructure through which authority is exercised.
            </p>
            <p>
              The Sovereign Systems Office maintains the University&apos;s infrastructure independence
              across five architectural layers: compute, publishing, identity, governance, and AI
              models. Each layer is described below, with its operational status, specifications,
              and sovereign architecture rationale.
            </p>
          </div>
        </div>
      </Section>

      {/* ── II. Infrastructure Layers ─────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Infrastructure Architecture"
          title="Five Layers of Institutional Sovereignty"
          description="Each layer must be independently sovereign. A single dependency in any layer compromises the whole stack."
        />
        <div className="space-y-8 max-w-5xl mx-auto">
          {infrastructureLayers.map((layer) => (
            <div key={layer.layer} className="border border-gold/20 bg-parchment p-8">
              <div className="flex items-start gap-4 mb-5">
                <span className="text-3xl text-gold mt-1">{layer.icon}</span>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-1">{layer.layer}</h3>
                  <p className="text-maroon text-sm font-semibold">{layer.status}</p>
                </div>
              </div>
              <p className="text-stone leading-relaxed mb-6 text-sm">{layer.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {layer.specs.map((spec) => (
                  <div key={spec} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-0.5 text-xs">◆</span>
                    <span className="text-stone">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── III. Genesis Protocol ─────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="The Standard"
          title="The Genesis Protocol"
          description="The University's open specification for institutional infrastructure sovereignty — now referenced by seventeen external institutions."
        />
        <div className="max-w-4xl mx-auto">
          <p className="text-stone leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            {genesisProtocol.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {genesisProtocol.principles.map((p) => (
              <div key={p.name} className="border border-gold/20 bg-ivory p-6">
                <h3 className="font-serif text-lg font-bold mb-3">{p.name}</h3>
                <p className="text-stone text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── IV. Advisory Service ──────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Advisory Services"
          title="Helping Other Institutions Achieve Sovereignty"
        />
        <div className="max-w-4xl mx-auto">
          <p className="text-stone leading-relaxed mb-10 text-center">
            {sovereigntyAdvisory.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sovereigntyAdvisory.tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`border p-8 flex flex-col ${
                  idx === 1
                    ? "border-gold bg-navy text-parchment"
                    : "border-gold/20 bg-parchment"
                }`}
              >
                <h3 className="font-serif text-2xl font-bold mb-2">{tier.name}</h3>
                <p
                  className={`font-serif text-2xl font-bold mb-1 ${
                    idx === 1 ? "text-gold" : ""
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-xs mb-6 ${
                    idx === 1 ? "text-parchment/80" : "text-stone/80"
                  }`}
                >
                  {tier.duration}
                </p>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    idx === 1 ? "text-parchment/80" : "text-stone"
                  }`}
                >
                  {tier.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-gold/20">
                  <a
                    href="mailto:sovereign-systems@fitzherbert.edu"
                    className={`block text-center py-2 text-xs font-semibold tracking-widest uppercase transition-colors ${
                      idx === 1
                        ? "bg-gold text-navy hover:bg-gold/80"
                        : "bg-navy text-parchment hover:bg-navy/80"
                    }`}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── V. Status Ribbon ─────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Sovereign Status"
          title="Current Sovereignty Index"
          description="Published quarterly. All metrics verifiable against the canonical registry."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Compute Sovereignty", value: "100%", note: "All core systems university-owned" },
            { label: "Publishing Sovereignty", value: "100%", note: "All canonical output on sovereign infrastructure" },
            { label: "Identity Sovereignty", value: "97%", note: "3% legacy onboarding flow — remediation in Epoch 0.7" },
            { label: "AI Model Sovereignty", value: "91%", note: "Target: 95% by Epoch 0.7" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gold/20 bg-ivory p-6 text-center">
              <p className="engraved text-gold text-xs mb-2">{stat.label}</p>
              <p className="font-serif text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-stone/80 text-xs">{stat.note}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
