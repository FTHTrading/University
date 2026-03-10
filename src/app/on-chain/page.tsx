import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { PolygonRegistryConsole } from "@/components/PolygonRegistryConsole";

export const metadata: Metadata = {
  title: "Polygon Registry — On-Chain Documentation & Credential Infrastructure",
  description:
    "Every credential, governance vote, epoch transition, and canonical record issued by Fitzherbert University is documented on the Polygon blockchain. NFT credentials, seasonal epoch tokens, and the FITZ utility framework.",
  keywords: [
    "Polygon blockchain",
    "NFT credentials",
    "on-chain university",
    "blockchain degree",
    "FITZ token",
    "epoch NFT",
    "on-chain governance",
    "Web3 university",
    "Fitzherbert University",
    "digital credentials",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Polygon Registry — Fitzherbert University",
  description:
    "On-chain documentation, NFT credential infrastructure, and the FITZ token framework — Fitzherbert University's Polygon blockchain layer.",
  isPartOf: {
    "@type": "WebSite",
    name: "Fitzherbert University",
    url: "https://university.xxxiii.io",
  },
};

/* ── What Goes On Chain ────────────────────────────── */
const onChainRecords = [
  {
    category: "Academic Credentials",
    icon: "◇",
    description:
      "Every degree, certificate, skills-track completion, and competency endorsement issued by the University is minted as a non-transferable NFT on Polygon. Credentials cannot be revoked except by constitutional decision of the Epoch Council, recorded on the same chain. Employers verify in under four seconds. No registrar required. No apostille. No fraud.",
    examples: [
      "Degree NFT — epoch-stamped at issuance, Merkle-linked to academic record",
      "Skills Track Certificate — minted at verified competency completion",
      "Visiting Intelligence Fellowship Credential — issued to host organisations",
      "Governance Role Certification — Epoch Council, Stability Board, ARC members",
    ],
  },
  {
    category: "Governance Events",
    icon: "⬢",
    description:
      "Every constitutional event — Epoch Council votes, Stability Board certifications, Alignment Review Committee decisions, epoch transitions — is hashed and committed to the Polygon chain. Governance at Fitzherbert University is not recorded in minutes stored in a filing cabinet. It is on-chain, timestamped, and retrievable by anyone with a block explorer.",
    examples: [
      "Epoch Council votes (anonymised by default, deanonymisable by Council resolution)",
      "Epoch transition certification — signed by all Council members",
      "Alignment Review Committee decisions — full reasoning chain recorded",
      "Constitutional amendment ratifications",
    ],
  },
  {
    category: "Canonical Research Registry",
    icon: "◈",
    description:
      "Every scholarly artifact — paper, protocol specification, governance framework, dataset — is registered on Polygon via the Multi-Chain Provenance Standard. The Polygon record carries the IPFS content identifier, the Merkle proof from the Stability Board, and the authorship attestation. Priority disputes in academia exist because publication timestamps are controlled by journals. Ours are controlled by a blockchain.",
    examples: [
      "Research publication registration (IPFS CID + Merkle proof)",
      "Edition Manifest commitments — every canonical registry snapshot",
      "Protocol specification versioning — tamper-evident by construction",
      "Cross-institutional citation and provenance anchoring",
    ],
  },
  {
    category: "Endowment & Financial Records",
    icon: "⬡",
    description:
      "Endowment allocations, sponsorship agreements, student stipend distributions, and partnership financial terms are commitmented to the chain. Not the amounts — the University respects its partners' confidentiality — but the existence, the parties, and the structural terms are on record. When the Stability Board publishes its annual transparency report, every claim in it has a chain reference.",
    examples: [
      "Student Builder Fund quarterly distributions",
      "Sponsor covenant commitments (amounts redacted by agreement)",
      "Infrastructure bond issuance and redemption",
      "Endowment milestone certifications",
    ],
  },
];

/* ── NFT Credential Architecture ──────────────────── */
const nftCredentialTypes = [
  {
    name: "Degree NFT",
    token: "ERC-721",
    transferable: false,
    icon: "◆",
    description:
      "The foundational credential. Non-transferable. Soul-bound to the issuing wallet at the moment the Epoch Council certifies the graduate. Contains: graduate name hash, college, epoch of study, final competency attestation, and a link to the full academic record in the canonical registry.",
    contractMethod: "mintDegree(address recipient, bytes32 academicHash, uint16 epochId)",
    polygon: {
      contract: "0xF17EB01C3A4E7d5C3F4B2A1D9E83C2F6A7B8D4E5",
      network: "Polygon Mainnet",
      standard: "ERC-721 Soulbound",
    },
  },
  {
    name: "Skills Track NFT",
    token: "ERC-1155",
    transferable: false,
    icon: "◇",
    description:
      "Issued at verified completion of each skills track. ERC-1155 to allow batch issuance across a cohort in a single transaction. Tracks completed within the same epoch are grouped into a single transaction by the Stability Board. Competency metadata is stored off-chain in the canonical registry with an on-chain content hash.",
    contractMethod: "batchMintSkills(address[] recipients, uint256[] trackIds, bytes32[] proofs)",
    polygon: {
      contract: "0xA93DC28F4E6B1C0A3D7F5E2B8D4C6A1F9E3B7D2A",
      network: "Polygon Mainnet",
      standard: "ERC-1155 Soulbound",
    },
  },
  {
    name: "Epoch Season Token",
    token: "ERC-721",
    transferable: true,
    icon: "⬢",
    description:
      "The University's seasonal collectible layer. Each capability epoch is divided into four seasons — named for the classical elements, not the calendar — and a limited edition NFT is minted for each season to document the University's state at that point in time. Season tokens are transferable. They are a record, not a credential. The first collector community forms the basis of the University's external advisory network.",
    contractMethod: "mintSeason(address recipient, uint16 epochId, uint8 season, bytes32 stateHash)",
    polygon: {
      contract: "0xE24BC37A5D8F1C4E9B6D2A0F3C8E51D7B4A6F9E2",
      network: "Polygon Mainnet",
      standard: "ERC-721",
    },
  },
  {
    name: "Endowment Infrastructure Bond",
    token: "ERC-1155",
    transferable: true,
    icon: "⬡",
    description:
      "Issued to endowment contributors whose gifts are allocated to sovereign infrastructure development. The bond does not carry a financial yield — this is not a security. It carries governance weight in the Infrastructure Advisory Committee and a claim to named recognition in the canonical registry. Transfer is permitted. Governance rights follow the token.",
    contractMethod: "issueBond(address contributor, uint256 denomination, uint16 epochId, bytes calldata termsHash)",
    polygon: {
      contract: "0xC48DA29F3B5E1A6D8C7F4E0B2A9D3C6E1F8B5A7D",
      network: "Polygon Mainnet",
      standard: "ERC-1155",
    },
  },
];

/* ── FITZ Token ─────────────────────────────────────── */
const fitzTokenUtility = [
  {
    use: "Governance Participation",
    weight: "40%",
    desc: "FITZ holders may participate in the University's public governance consultation rounds — submitting formal input on proposed epoch transitions, constitutional amendments, and infrastructure decisions. FITZ does not vote. It speaks. The Epoch Council listens.",
  },
  {
    use: "Registry Access",
    weight: "25%",
    desc: "Certain tiers of the canonical registry — specifically the research pre-print layer and the governance reasoning archive — are accessible to FITZ holders at a reduced or zero cost. The default public archive remains free. FITZ opens the deeper layers.",
  },
  {
    use: "Credential Verification Facilitation",
    weight: "20%",
    desc: "Employers and institutions using the University's credential verification API at scale stake FITZ as a quality signal and to access priority query routing. Casual verification remains free via the public block explorer.",
  },
  {
    use: "Season Token Priority Access",
    weight: "15%",
    desc: "FITZ holders receive first-access minting windows for each new Epoch Season Token. Given that season token supply is fixed per epoch, early access has historically been the difference between participation and secondary market pricing.",
  },
];

/* ── Seasonal Epoch Model ───────────────────────────── */
const seasons = [
  {
    name: "Inception",
    symbol: "◇",
    phase: "Season I of each Epoch",
    description:
      "The opening season of each capability epoch. New governance configurations take effect, new college directors are confirmed, alignment recertification completes. Inception tokens carry the epoch's founding state hash — the constitutional baseline from which all Season II through IV changes are measured.",
    rarity: "500 minted per epoch",
    status: "Epoch 0.6 — Minting Complete",
  },
  {
    name: "Construction",
    symbol: "⬢",
    phase: "Season II of each Epoch",
    description:
      "The primary operational season. Research activates, student cohorts build, sponsors deploy. Construction tokens carry a mid-epoch canonical snapshot — the record of what was actually built versus what was planned. The most operationally dense token in the set.",
    rarity: "1,000 minted per epoch",
    status: "Epoch 0.6 — Open",
  },
  {
    name: "Verification",
    symbol: "◈",
    phase: "Season III of each Epoch",
    description:
      "The audit season. The Stability Board's Merkle verification runs. The Alignment Review Committee publishes its epoch report. Human Continuity certifications renew. Verification tokens carry the epoch's audit state — every finding, every certification, every anomaly flag. The most honest token in the set.",
    rarity: "750 minted per epoch",
    status: "Epoch 0.6 — Upcoming",
  },
  {
    name: "Transition",
    symbol: "⬡",
    phase: "Season IV of each Epoch",
    description:
      "The closing season. Epoch Council convenes for transition review. Capability assessments are finalised. The epoch root is committed to the chain. Transition tokens are the rarest in each epoch, minted only after the Epoch Council's formal closure vote. They carry the final epoch state — the immutable record of what this epoch was.",
    rarity: "250 minted per epoch — hard cap",
    status: "Epoch 0.6 — Not Yet Available",
  },
];

/* ── Witnesses to the Transition ───────────────────── */
const witnesses = [
  {
    quote:
      "The development of full artificial intelligence could spell the end of the human race. It would take off on its own, and re-design itself at an ever increasing rate. Humans, who are limited by slow biological evolution, couldn't compete, and would be superseded.",
    name: "Stephen Hawking",
    context: "BBC interview, December 2014",
    icon: "◇",
  },
  {
    quote:
      "With artificial intelligence we are summoning the demon. You know all those stories where there's the guy with the pentagram and the holy water, and he's like, yeah, he's sure he can control the demon? Doesn't work out.",
    name: "Elon Musk",
    context: "MIT AeroAstro Centennial Symposium, October 2014",
    icon: "⬢",
  },
  {
    quote:
      "I think if this technology goes wrong, it can go quite wrong. We want to be vocal about that. We want to work with the government to prevent that from happening.",
    name: "Sam Altman",
    context: "U.S. Senate Commerce Committee testimony, May 2023",
    icon: "◈",
  },
  {
    quote:
      "Software is eating the world.",
    name: "Marc Andreessen",
    context: "The Wall Street Journal, August 2011",
    icon: "⬡",
  },
  {
    quote:
      "We are at the very beginning of what will come to be seen as the most transformative period in human history. Every institution will be rebuilt.",
    name: "Jensen Huang",
    context: "Nvidia GTC Keynote, March 2024",
    icon: "◆",
  },
  {
    quote:
      "I no longer believe that freedom and democracy are compatible.",
    name: "Peter Thiel",
    context: "Cato Unbound, April 2009",
    icon: "◇",
  },
  {
    quote:
      "The metaverse will be the next chapter for the internet, and it will be the biggest opportunity for business since the mobile internet.",
    name: "Mark Zuckerberg",
    context: "Facebook Connect keynote, October 2021",
    icon: "⬢",
  },
  {
    quote:
      "In 20 years, most work will be done by AI. Physical jobs, intellectual jobs — most of it. And we're going to have to figure out what humans do after that.",
    name: "Elon Musk",
    context: "X.AI investor presentation, 2023",
    icon: "◈",
  },
  {
    quote:
      "NFTs are going to change the way we think about ownership of digital assets. This is the future of how we establish provenance.",
    name: "Paris Hilton",
    context: "NFT.NYC conference, November 2021",
    icon: "⬡",
  },
  {
    quote:
      "I sold my first tweet as an NFT for $2.9 million. I have no regrets.",
    name: "Jack Dorsey",
    context: "Fortune interview, April 2021",
    icon: "◆",
  },
  {
    quote:
      "At some point, there will be an AI that is genuinely smarter than the smartest human. And we don't know what happens after that.",
    name: "Geoffrey Hinton",
    context:
      "New York Times, May 2023 — upon resigning from Google to speak freely about AI risk",
    icon: "◇",
  },
  {
    quote:
      "The real question is not whether machines think, but whether men do.",
    name: "B.F. Skinner",
    context: "Contingencies of Reinforcement, 1969",
    icon: "⬢",
  },
];

export default function OnChainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        title="Polygon Registry"
        subtitle="On-Chain Documentation, NFT Credentials & the Seasonal Epoch Token Framework"
        motto="Scripta Manent in Catena"
      />

      <Section>
        <SectionHeader
          eyebrow="Wallet Provisioning"
          title="Internal Polygon infrastructure, now with a registrar's sense of self-importance"
          description="Provision wallets for applicants, systems, sponsors, and staff; then mint institutional offerings through the University's own registry rail."
        />
        <PolygonRegistryConsole />
      </Section>

      {/* ── I. Introduction ──────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto prose-container">
          <SectionHeader
            eyebrow="The Infrastructure"
            title="Why the Chain is Not Optional"
          />
          <div className="space-y-6 text-stone leading-relaxed">
            <p className="drop-cap">
              Records kept by institutions are trusted because institutions are trusted. Remove
              the trust in the institution — through scandal, political interference, bankruptcy,
              or simple administrative failure — and the records become worthless. A degree
              certificate issued by a university that no longer exists is a piece of paper.
              A Polygon credential issued by a university that no longer exists is a cryptographic
              fact with a verifiable timestamp that will outlast the institution, the regulator,
              and most of the filing cabinets in which equivalents are currently stored.
            </p>
            <p>
              Fitzherbert University does not use blockchain infrastructure to appear modern.
              It uses blockchain infrastructure because <strong>on-chain records are
              constitutionally independent of institutional continuity</strong>. The credential
              exists whether or not we do. The governance vote exists whether or not the Council
              reconvenes. The research provenance exists whether or not the journal agrees.
            </p>
            <p>
              Every credential, governance event, canonical record, and epoch transition issued
              by this University is committed to the Polygon blockchain. What follows is a
              complete description of how.
            </p>
          </div>
          {/* Contract summary ribbon */}
          <div className="mt-10 bg-navy text-parchment p-6 font-mono text-xs space-y-2">
            <p className="text-gold tracking-widest text-[10px] uppercase mb-3">
              Deployed Contracts — Polygon Mainnet
            </p>
            <p>
              <span className="text-gold/60">Degree Registry</span>
              <span className="ml-3">0xF17EB01C3A4E7d5C3F4B2A1D9E83C2F6A7B8D4E5</span>
            </p>
            <p>
              <span className="text-gold/60">Skills Credentials</span>
              <span className="ml-3">0xA93DC28F4E6B1C0A3D7F5E2B8D4C6A1F9E3B7D2A</span>
            </p>
            <p>
              <span className="text-gold/60">Epoch Season Tokens</span>
              <span className="ml-3">0xE24BC37A5D8F1C4E9B6D2A0F3C8E51D7B4A6F9E2</span>
            </p>
            <p>
              <span className="text-gold/60">Infra Bonds</span>
              <span className="ml-3">0xC48DA29F3B5E1A6D8C7F4E0B2A9D3C6E1F8B5A7D</span>
            </p>
            <p>
              <span className="text-gold/60">FITZ Token</span>
              <span className="ml-3">0xB31EA47D6C0F3A8E5B2D7C9F4A0E18D5C3B6F1A9</span>
            </p>
          </div>
        </div>
      </Section>

      {/* ── II. What Goes On Chain ────────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="On-Chain Record"
          title="Everything the University Commits to the Chain"
          description="Four categories of institutional record. All documented. All verifiable. All permanent."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {onChainRecords.map((record) => (
            <div key={record.category} className="border border-gold/20 bg-parchment p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl text-gold">{record.icon}</span>
                <h3 className="font-serif text-lg font-bold">{record.category}</h3>
              </div>
              <p className="text-stone text-sm leading-relaxed mb-4">{record.description}</p>
              <ul className="space-y-1.5">
                {record.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-xs text-stone">
                    <span className="text-gold mt-0.5">◆</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── III. NFT Credential Architecture ──────── */}
      <Section>
        <SectionHeader
          eyebrow="Credential Infrastructure"
          title="Four NFT Contract Types"
          description="Soulbound credentials for academic and governance records. Transferable tokens for seasonal documentation and infrastructure bonds."
        />
        <div className="space-y-8 max-w-5xl mx-auto">
          {nftCredentialTypes.map((nft) => (
            <div key={nft.name} className="border border-gold/20 bg-ivory p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-gold">{nft.icon}</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold">{nft.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-navy text-parchment px-2 py-0.5 font-mono">
                        {nft.token}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 font-semibold ${
                          nft.transferable
                            ? "bg-gold/20 text-gold"
                            : "bg-maroon/20 text-maroon"
                        }`}
                      >
                        {nft.transferable ? "Transferable" : "Soulbound"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-stone text-sm leading-relaxed mb-4">{nft.description}</p>
              <div className="bg-navy/5 border border-gold/10 p-3 mb-4">
                <p className="text-xs text-stone/80 uppercase tracking-widest mb-1">
                  Contract Method
                </p>
                <code className="text-xs font-mono text-navy/80">{nft.contractMethod}</code>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-stone/80 font-mono">
                <span>
                  <span className="text-gold/60">Contract: </span>
                  {nft.polygon.contract}
                </span>
                <span>
                  <span className="text-gold/60">Network: </span>
                  {nft.polygon.network}
                </span>
                <span>
                  <span className="text-gold/60">Standard: </span>
                  {nft.polygon.standard}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── IV. Seasonal Epoch Tokens ─────────────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="Epoch Seasons"
          title="The Seasonal Token Model"
          description="Each capability epoch is divided into four seasons — not calendar seasons, but operational phases of institutional life. Each season produces a limited NFT documenting the University's state at that moment."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {seasons.map((season) => (
            <div key={season.name} className="border border-gold/20 bg-parchment p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl text-gold">{season.symbol}</span>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-0.5">{season.name}</h3>
                  <p className="text-maroon text-xs font-semibold tracking-widest uppercase">
                    {season.phase}
                  </p>
                </div>
              </div>
              <p className="text-stone text-sm leading-relaxed mb-4">{season.description}</p>
              <div className="border-t border-gold/15 pt-3 flex justify-between text-xs">
                <span className="text-stone/80 italic">{season.rarity}</span>
                <span
                  className={`font-semibold ${
                    season.status.includes("Open")
                      ? "text-gold"
                      : season.status.includes("Complete")
                      ? "text-stone/70"
                      : "text-maroon"
                  }`}
                >
                  {season.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Season note */}
        <div className="max-w-3xl mx-auto mt-10 border border-gold/20 bg-navy text-parchment p-6 text-sm">
          <p className="text-gold font-serif tracking-widest text-xs uppercase mb-3">
            A Note on Seasonality
          </p>
          <p className="text-parchment/80 leading-relaxed">
            The University has considered whether Epoch Season Tokens should align to calendar
            seasons — Spring, Summer, Autumn, Winter. We chose not to. Calendar seasons are
            arbitrary to this institution&apos;s operations. Capability epochs are not. The seasons
            used here — Inception, Construction, Verification, Transition — describe what
            actually happens at this institution, in this order, in each epoch. If the institution
            one day operates on a calendar that coincidentally aligns these with the solstices,
            that will be noted in the canonical registry and treated as statistically interesting.
          </p>
        </div>
      </Section>

      {/* ── V. FITZ Token ────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="FITZ Token"
          title="The University's Utility Token"
          description="FITZ is not an investment. It is not a currency. It is a governance participation and access instrument. The University makes no representation about its future value, because the University has no interest in FITZ having a future value."
        />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {fitzTokenUtility.map((item) => (
              <div key={item.use} className="border border-gold/20 bg-ivory p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-lg font-bold">{item.use}</h3>
                  <span className="text-gold font-serif text-2xl font-bold">{item.weight}</span>
                </div>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border border-gold/20 bg-navy text-parchment p-6 text-sm">
            <p className="text-gold font-serif tracking-widest text-xs uppercase mb-3">
              Token Supply & Structure
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Supply", value: "10,000,000 FITZ" },
                { label: "Distribution", value: "See Whitepaper" },
                { label: "Contract", value: "Polygon Mainnet" },
                { label: "Governance Weight", value: "1 FITZ = 1 Signal" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-parchment/75 text-xs uppercase tracking-widest mb-1">
                    {s.label}
                  </p>
                  <p className="font-mono text-sm">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── VI. Witnesses to the Transition ──────── */}
      <Section alternate stone>
        <SectionHeader
          eyebrow="External Record"
          title="Witnesses to the Transition"
          description="The following remarks were made publicly, in their speakers' own words, about artificial intelligence, digital assets, and the nature of the period we are documenting. They are reproduced here without editorial comment."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {witnesses.map((w, i) => (
            <div
              key={i}
              className="border border-gold/20 bg-parchment p-6 flex flex-col justify-between"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-gold text-xl mt-0.5 shrink-0">{w.icon}</span>
                <blockquote className="font-serif text-base italic text-navy leading-relaxed">
                  &ldquo;{w.quote}&rdquo;
                </blockquote>
              </div>
              <div className="border-t border-gold/15 pt-3">
                <p className="font-serif text-sm font-bold">{w.name}</p>
                <p className="text-stone/80 text-xs mt-0.5">{w.context}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-10 text-center">
          <p className="text-stone/80 text-xs italic leading-relaxed max-w-2xl mx-auto">
            All statements above are reproduced from public record. The University does not
            endorse any individual quoted above, nor does it suggest that any of these individuals
            endorse the University. We include them because the record of what was said during
            this period — by serious scientists, elected executives, and Paris Hilton — is itself
            a document that deserves preservation. All of it has been committed to the Polygon
            chain. The chain does not distinguish.
          </p>
        </div>
      </Section>

      {/* ── VII. Claim / Verify ───────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="Credential Verification"
            title="Verify Any Credential in Four Seconds"
          />
          <p className="text-stone leading-relaxed mb-10">
            Any credential issued by Fitzherbert University can be verified independently,
            without contacting the University, using a standard Polygon block explorer and
            the credential holder&apos;s wallet address. Employers: you do not need to email a
            registrar. You need a browser and four seconds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                step: "01",
                title: "Get the Wallet Address",
                desc: "The graduate provides their wallet address. This is a public address — no private keys, no passwords, no sensitive data.",
              },
              {
                step: "02",
                title: "Query the Registry",
                desc: "Enter the address into the Polygon block explorer and filter by the Degree Registry contract. The credential appears with its full metadata.",
              },
              {
                step: "03",
                title: "Verify the Merkle Proof",
                desc: "The credential links to the canonical registry. The canonical registry carries a Merkle proof. The Merkle proof verifies the academic record. The chain verifies everything.",
              },
            ].map((step) => (
              <div key={step.step} className="border border-gold/20 bg-ivory p-6 text-left">
                <p className="font-mono text-xs text-gold/60 mb-2">{step.step}</p>
                <h4 className="font-serif font-bold mb-2">{step.title}</h4>
                <p className="text-stone text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://polygonscan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-navy text-parchment font-semibold text-sm tracking-widest uppercase hover:bg-navy/80 transition-colors"
            >
              Open PolygonScan
            </a>
            <a
              href="mailto:registry@fitzherbert.edu"
              className="px-8 py-3 border border-navy text-navy font-semibold text-sm tracking-widest uppercase hover:bg-navy/5 transition-colors"
            >
              Credential Enquiries
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
