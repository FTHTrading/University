import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Academic Credentials",
  description:
    "Fitzherbert University academic credentials on the Polygon network. Degree NFTs, module completion tokens, epoch participation records, and the FITZ token ecosystem. All credentials independently verifiable.",
};

/* ── Data ───────────────────────────────────────────────────────────────── */

interface CredentialNFT {
  tokenId: string;
  type: string;
  name: string;
  recipient: string;
  college: string;
  date: string;
  contract: string;
  traits: { key: string; value: string }[];
  fitz: number;
  rarity: string;
  rarityColour: string;
}

const recentDegrees: CredentialNFT[] = [
  {
    tokenId: "#7841",
    type: "DEGREE",
    name: "Bachelor of Intelligence",
    recipient: "0x7f3a...c91e",
    college: "Turing College",
    date: "Trinity Term 2025",
    contract: "0x4a7f3c891e6d2b05f8a9e34c7b1d90f2a563e8d4",
    traits: [
      { key: "Degree", value: "B.Intel" },
      { key: "Classification", value: "Distinction with Provenance" },
      { key: "Epoch", value: "Third" },
      { key: "Human Autonomy Score", value: "94/100" },
      { key: "FITZ Stipend Received", value: "1,500 FITZ" },
      { key: "Override Competency", value: "Certified" },
    ],
    fitz: 2000,
    rarity: "Distinction",
    rarityColour: "text-gold border-gold/40 bg-gold/5",
  },
  {
    tokenId: "#7842",
    type: "DEGREE",
    name: "Master of Artificial Intelligence",
    recipient: "0x3b92...412a",
    college: "Shannon Institute",
    date: "Trinity Term 2025",
    contract: "0x4a7f3c891e6d2b05f8a9e34c7b1d90f2a563e8d4",
    traits: [
      { key: "Degree", value: "M.AI" },
      { key: "Classification", value: "Merit" },
      { key: "Dissertation", value: "Alignment Under Epistemic Uncertainty" },
      { key: "Epoch", value: "Third" },
      { key: "Visiting Intelligence Advisory", value: "MERIDIAN" },
      { key: "FITZ Stipend Received", value: "3,000 FITZ" },
    ],
    fitz: 3500,
    rarity: "Merit",
    rarityColour: "text-maroon border-maroon/40 bg-maroon/5",
  },
  {
    tokenId: "#7843",
    type: "DEGREE",
    name: "Doctor of Intelligence",
    recipient: "0xd41c...8f07",
    college: "Lovelace Institute",
    date: "Hilary Term 2025",
    contract: "0x4a7f3c891e6d2b05f8a9e34c7b1d90f2a563e8d4",
    traits: [
      { key: "Degree", value: "D.Intel" },
      { key: "Thesis", value: "Provenance in the Post-Authorship Age" },
      { key: "Epoch", value: "Third" },
      { key: "Examiners", value: "Prof. Ashworth, Prof. Chen-Hartley" },
      { key: "Viva Outcome", value: "Pass without Corrections" },
      { key: "FITZ Award", value: "5,000 FITZ" },
    ],
    fitz: 5000,
    rarity: "Summa",
    rarityColour: "text-gold border-gold/60 bg-gold/10",
  },
  {
    tokenId: "#7839",
    type: "DEGREE",
    name: "Bachelor of Governance",
    recipient: "0x9e5b...3c88",
    college: "Rawls College",
    date: "Trinity Term 2025",
    contract: "0x4a7f3c891e6d2b05f8a9e34c7b1d90f2a563e8d4",
    traits: [
      { key: "Degree", value: "B.Gov" },
      { key: "Classification", value: "First Class" },
      { key: "Epoch", value: "Third" },
      { key: "Human Continuity Requirement", value: "Completed with Commendation" },
      { key: "Senate Representation", value: "Student Senator, Hilary 2025" },
      { key: "FITZ Stipend Received", value: "1,500 FITZ" },
    ],
    fitz: 2000,
    rarity: "First Class",
    rarityColour: "text-navy border-navy/40 bg-navy/5",
  },
  {
    tokenId: "#7836",
    type: "DEGREE",
    name: "Master of Protocol Architecture",
    recipient: "0xa3f1...7d22",
    college: "Lovelace Institute",
    date: "Hilary Term 2025",
    contract: "0x4a7f3c891e6d2b05f8a9e34c7b1d90f2a563e8d4",
    traits: [
      { key: "Degree", value: "M.Proto" },
      { key: "Classification", value: "Distinction" },
      { key: "Dissertation", value: "Governance Layer Architecture for Agentic Systems" },
      { key: "Epoch", value: "Third" },
      { key: "On-Chain Projects", value: "3 deployed to Polygon mainnet" },
      { key: "FITZ Stipend Received", value: "3,000 FITZ" },
    ],
    fitz: 4000,
    rarity: "Distinction",
    rarityColour: "text-gold border-gold/40 bg-gold/5",
  },
  {
    tokenId: "#7840",
    type: "DEGREE",
    name: "Bachelor of Systems",
    recipient: "0x2c74...9a51",
    college: "Von Neumann College",
    date: "Trinity Term 2025",
    contract: "0x4a7f3c891e6d2b05f8a9e34c7b1d90f2a563e8d4",
    traits: [
      { key: "Degree", value: "B.Sys" },
      { key: "Classification", value: "First Class" },
      { key: "Epoch", value: "Third" },
      { key: "AI Skills Programme", value: "Level III Specialist" },
      { key: "Senior Project", value: "Multi-Agent Governance Simulator" },
      { key: "FITZ Stipend Received", value: "1,500 FITZ" },
    ],
    fitz: 2000,
    rarity: "First Class",
    rarityColour: "text-navy border-navy/40 bg-navy/5",
  },
];

const moduleCredentials = [
  { code: "DSPEC 1001", badge: "Foundation Prompt Engineering", minted: 1247, fitz: 100 },
  { code: "RAUG 2001", badge: "RAG Architecture Practitioner", minted: 642, fitz: 200 },
  { code: "AGNT 2001", badge: "Agent Orchestration Practitioner", minted: 589, fitz: 200 },
  { code: "MAGS 3001", badge: "Multi-Agent Specialist", minted: 201, fitz: 350 },
  { code: "EVLF 3001", badge: "Evaluation Framework Specialist", minted: 178, fitz: 330 },
  { code: "GVRN 4001", badge: "Institutional AI Strategy Sovereign", minted: 44, fitz: 700 },
  { code: "OVRD 4001", badge: "Override Practitioner — Sovereign", minted: 38, fitz: 800 },
  { code: "ALST 4001", badge: "Alignment & Safety Sovereign", minted: 31, fitz: 800 },
  { code: "CSOV 1001", badge: "Cognitive Sovereignty — Mandatory Completion", minted: 4892, fitz: 0 },
  { code: "PROV 4001", badge: "Provenance Architecture Sovereign", minted: 29, fitz: 700 },
  { code: "FTUN 2001", badge: "Model Alignment Practitioner", minted: 412, fitz: 220 },
  { code: "WKFL 1001", badge: "Automated Workflow Foundation", minted: 1089, fitz: 120 },
];

const epochTokens = [
  {
    name: "Inception Token",
    season: "Season I",
    symbol: "FITZ-S1",
    supply: "10,000",
    year: "2025",
    status: "Fully Distributed",
    description:
      "Awarded to founding-era participants and all students matriculated during the University's first operational epoch. Carries one Governance Assembly voting right per token.",
    colour: "border-gold/60 bg-gold/5",
  },
  {
    name: "Construction Token",
    season: "Season II",
    symbol: "FITZ-S2",
    supply: "25,000",
    year: "2025–26",
    status: "Active Distribution",
    description:
      "The operational token of the current epoch. Awarded for module completion, governance participation, and research milestones. Redeemable for University services.",
    colour: "border-maroon/60 bg-maroon/5",
  },
  {
    name: "Verification Token",
    season: "Season III",
    symbol: "FITZ-S3",
    supply: "50,000",
    year: "2026–27",
    status: "Scheduled",
    description:
      "To be issued pending successful Epoch Transition Review by the Senate. Will carry enhanced governance rights reflecting the expanded scope of verification-phase activities.",
    colour: "border-navy/30 bg-navy/2",
  },
  {
    name: "Transition Token",
    season: "Season IV",
    symbol: "FITZ-S4",
    supply: "TBD",
    year: "2027+",
    status: "Pending Epoch Review",
    description:
      "Supply and distribution parameters to be determined by the Epoch Transition Review Committee. The Senate has noted, without elaboration, that the Transition Token may represent the final seasonal issuance.",
    colour: "border-stone/20 bg-stone/5",
  },
];

const notableAnomalies = [
  {
    tokenId: "#4471",
    note: "B.Intel awarded posthumously to the concept of human originality. Governance Committee has deferred classification of this issuance to the next Senate session.",
  },
  {
    tokenId: "#5503",
    note: "M.AI credential minted to an address that responded to the wallet ownership verification with a Turing-complete counter-question. Credential confirmed valid. Ownership status under review.",
  },
  {
    tokenId: "#6022",
    note: "OVRD 4001 badge claimed by a wallet that had previously claimed AGNT 2001 on behalf of an entity that disputed the definition of 'previously'. Registry notes the irony.",
  },
  {
    tokenId: "#7001",
    note: "D.Intel (First in Class) credential claimed within 0.3 seconds of minting. The Registrar's office found this to be consistent with normal human behaviour and declined to investigate.",
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function CredentialsPage() {
  return (
    <>
      <Hero
        title="Academic Credentials"
        subtitle="Soulbound. On-Chain. Independently Verifiable. These Are Degrees."
      />

      {/* ── Introduction ────────────────────────────────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="Polygon Network · Chain ID 137"
            title="Why Degrees Are On the Blockchain"
            description="The question is not why Fitzherbert University issues degree credentials as non-transferable Polygon NFTs. The question is why other institutions have not yet done so. A degree is a claim about a person's demonstrated capabilities. That claim should be permanently verifiable, tamper-evident, and not dependent on the continued operation of a PDF hosting server."
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { stat: "4,891", label: "Total Credentials Minted" },
            { stat: "3,247", label: "Unique Holders" },
            { stat: "£0", label: "Gas Fees (University Subsidised)" },
            { stat: "100%", label: "Independently Verifiable" },
          ].map((s) => (
            <div key={s.label} className="border border-gold/20 bg-ivory p-6 text-center">
              <div className="font-serif text-3xl font-bold text-gold mb-2">{s.stat}</div>
              <div className="text-xs tracking-widest uppercase text-stone-light">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Degree NFT Gallery ───────────────────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Degree Registry"
          title="Recent Degree Credentials"
          description="Degree NFTs are soulbound: non-transferable and permanently associated with the holder's wallet address. They cannot be sold, traded, forfeited, or revoked except by order of the Academic Disciplinary Board under the provisions of Charter Amendment VI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {recentDegrees.map((nft) => (
            <div
              key={nft.tokenId}
              className="border border-gold/20 bg-ivory overflow-hidden font-mono text-xs flex flex-col"
            >
              {/* NFT card header */}
              <div className="bg-navy px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-gold/80 text-xs">FITZHERBERT UNIVERSITY</span>
                </div>
                <span className="text-gold font-bold">{nft.tokenId}</span>
              </div>

              {/* Credential type stripe */}
              <div className={`px-4 py-2 border-b border-gold/10 ${nft.rarityColour}`}>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-widest text-xs font-bold">{nft.name}</span>
                  <span className={`text-xs font-bold uppercase ${nft.rarityColour.split(" ")[0]}`}>{nft.rarity}</span>
                </div>
              </div>

              {/* Seal area */}
              <div className="px-4 py-4 border-b border-gold/10 flex items-center gap-3">
                <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center shrink-0">
                  <span className="text-gold text-base">⬡</span>
                </div>
                <div>
                  <div className="text-xxs text-stone-light">ISSUED TO</div>
                  <div className="text-navy font-bold">{nft.recipient}</div>
                  <div className="text-stone-light">{nft.college} · {nft.date}</div>
                </div>
              </div>

              {/* Traits */}
              <div className="px-4 py-3 space-y-1.5 flex-1">
                {nft.traits.map((t) => (
                  <div key={t.key} className="flex items-start justify-between gap-2">
                    <span className="text-stone-light uppercase tracking-wide">{t.key}</span>
                    <span className="text-navy font-bold text-right">{t.value}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-navy/5 border-t border-gold/10">
                <div className="text-stone-light mb-1 truncate">
                  Contract: {nft.contract}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold">+{nft.fitz.toLocaleString()} FITZ</span>
                  <span className="text-stone-light uppercase tracking-widest">Soulbound · Non-Transferable</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Module Credentials ───────────────────────────────────────────── */}
      <Section stone>
        <SectionHeader
          eyebrow="Skills Programme Credentials"
          title="Module Completion Badges"
          description="Every AI Skills Programme module awards a non-transferable badge credential on completion. Badges accumulate to form the Foundation Medallion, Practitioner Seal, Specialist Distinction, and Sovereign Credentials — the four level awards of the Programme."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {moduleCredentials.map((m) => (
            <div key={m.code} className="border border-gold/20 bg-ivory p-4 font-mono text-xs">
              <div className="flex items-start justify-between mb-2">
                <span className="text-gold font-bold uppercase tracking-wider">{m.code}</span>
                {m.fitz > 0 && (
                  <span className="text-gold font-bold">+{m.fitz}</span>
                )}
              </div>
              <div className="font-sans text-sm font-bold text-navy leading-snug mb-2">{m.badge}</div>
              <div className="flex items-center justify-between text-stone-light">
                <span>{m.minted.toLocaleString()} minted</span>
                <span>Polygon · Soulbound</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Epoch Season Tokens ──────────────────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Epoch Tokens"
          title="Seasonal Participation Records"
          description="Each academic epoch generates a seasonal participation token, distributed to all active members of the University community during that epoch. Epoch tokens carry governance rights and are the only FITZ-adjacent asset that may, under strictly defined conditions, be transferred between wallets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          {epochTokens.map((t) => (
            <div key={t.name} className={`border p-6 font-mono text-xs ${t.colour}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xxs uppercase tracking-widest text-stone-light">{t.season}</span>
                <span
                  className={`uppercase tracking-widest font-bold text-xxs ${
                    t.status === "Active Distribution"
                      ? "text-gold"
                      : t.status === "Fully Distributed"
                      ? "text-navy"
                      : "text-stone-light"
                  }`}
                >
                  {t.status}
                </span>
              </div>
              <div className="font-sans text-base font-bold text-navy mb-1">{t.name}</div>
              <div className="text-gold font-bold mb-3">{t.symbol}</div>
              <div className="space-y-1 mb-4 text-stone-light">
                <div className="flex justify-between">
                  <span>Supply</span>
                  <span className="text-navy font-bold">{t.supply}</span>
                </div>
                <div className="flex justify-between">
                  <span>Year</span>
                  <span className="text-navy font-bold">{t.year}</span>
                </div>
              </div>
              <p className="font-sans text-xs text-stone leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Legacy Bridge ────────────────────────────────────────────────── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Legacy Credential Bridge"
              title="Pre-2025 Degrees"
              description="All degrees awarded by Fitzherbert University prior to the 2025 Rechartering are eligible for retrospective NFT issuance through the Legacy Credential Bridge programme. The Bridge issues a derivative credential: identical in design and verification capability to the standard degree NFT, but carrying the additional trait 'Legacy Issuance — Pre-Epoch' for transparency."
            />
            <div className="mt-6 space-y-3 text-sm text-stone">
              <div className="flex gap-2">
                <span className="text-gold shrink-0 mt-0.5">◆</span>
                <span>Available to all graduates from 1783 to June 2025</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gold shrink-0 mt-0.5">◆</span>
                <span>Verification requires your degree reference number and the Registrar confirmation letter</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gold shrink-0 mt-0.5">◆</span>
                <span>Legacy credentials issued to your wallet address, not to a general address</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gold shrink-0 mt-0.5">◆</span>
                <span>No FITZ token award for Legacy issuance (retrospective allocation under governance review)</span>
              </div>
            </div>
          </div>

          {/* Claim form */}
          <div className="border border-gold/30 bg-ivory p-8">
            <div className="text-xs tracking-widest uppercase text-gold font-bold mb-6">
              Claim Legacy Credential
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <label className="block text-xs text-stone-light uppercase tracking-wide mb-1">
                  Degree Reference Number
                </label>
                <div className="border border-gold/20 bg-parchment px-3 py-2 text-stone-light">
                  FU-####-YYYY
                </div>
              </div>
              <div>
                <label className="block text-xs text-stone-light uppercase tracking-wide mb-1">
                  Wallet Address (Polygon)
                </label>
                <div className="border border-gold/20 bg-parchment px-3 py-2 text-stone-light">
                  0x...
                </div>
              </div>
              <div>
                <label className="block text-xs text-stone-light uppercase tracking-wide mb-1">
                  Registrar Confirmation Reference
                </label>
                <div className="border border-gold/20 bg-parchment px-3 py-2 text-stone-light">
                  REG-CONF-####
                </div>
              </div>
              <div className="pt-2">
                <div className="w-full border border-gold text-gold px-6 py-3 text-xs tracking-widest uppercase text-center font-serif cursor-not-allowed opacity-60">
                  Submit Legacy Claim
                </div>
                <p className="text-xs text-stone-light mt-2 text-center">
                  Legacy Bridge opens Michaelmas Term 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Notable Anomalies ────────────────────────────────────────────── */}
      <Section alternate>
        <SectionHeader
          eyebrow="Registry Notes"
          title="Notable Anomalies in the Credential Record"
          description="The Registrar's office publishes the following entries in the interest of transparency. All credentials referenced below have been confirmed valid. The circumstances of their issuance have been noted for the record."
        />

        <div className="space-y-4 mt-8 max-w-3xl mx-auto">
          {notableAnomalies.map((a) => (
            <div key={a.tokenId} className="border border-gold/20 bg-ivory p-6 flex gap-4">
              <div className="shrink-0 font-mono text-gold font-bold text-sm">{a.tokenId}</div>
              <p className="text-stone text-sm leading-relaxed">{a.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Verify ──────────────────────────────────────────────────────── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="ornamental-divider mb-8">
            <span className="ornament">✦</span>
          </div>
          <h3 className="font-serif text-xl font-bold mb-4">Verify a Credential</h3>
          <p className="text-stone leading-relaxed mb-8">
            Any Fitzherbert University credential can be independently verified via the Polygon
            blockchain. Enter a token ID or wallet address in the Credential Verification Portal,
            or consult the Institutional Registry on the On-Chain Records page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/on-chain"
              className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
            >
              Polygon Registry
            </Link>
            <Link
              href="/documents/nft-credential-architecture.pdf"
              download
              className="inline-block border border-navy text-navy px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-navy hover:text-ivory transition-colors"
            >
              Technical Specification
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
