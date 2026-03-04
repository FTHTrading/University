import Link from "next/link";
import { Crest } from "./Crest";

const footerColumns = [
  {
    title: "Epoch Colleges",
    links: [
      { label: "Computational Systems", href: "/academics" },
      { label: "Applied Intelligence", href: "/academics" },
      { label: "Autonomous Governance", href: "/academics" },
      { label: "Cryptographic Infrastructure", href: "/academics" },
      { label: "Human-Centered Systems", href: "/academics" },
      { label: "Narrative & Protocol Design", href: "/academics" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "Epoch Council", href: "/governance" },
      { label: "Stability Board", href: "/governance" },
      { label: "Alignment Review", href: "/governance" },
      { label: "Charter Articles", href: "/governance" },
    ],
  },
  {
    title: "Campus",
    links: [
      { label: "Heritage Quad", href: "/campus" },
      { label: "Voss Computing Centre", href: "/campus" },
      { label: "Wycliffe Library", href: "/campus" },
      { label: "Governance Lab", href: "/campus" },
      { label: "Epoch Commons", href: "/campus" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Accelerated Intelligence", href: "/research" },
      { label: "Autonomous Governance", href: "/research" },
      { label: "Deterministic Publishing", href: "/research" },
      { label: "Multi-Chain Provenance", href: "/research" },
      { label: "Narrative Protocols", href: "/research" },
    ],
  },
  {
    title: "University Record",
    links: [
      { label: "All Articles", href: "/blog" },
      { label: "Epoch Reports", href: "/blog" },
      { label: "Governance & AI", href: "/blog" },
      { label: "Research Output", href: "/blog" },
    ],
  },
  {
    title: "Reference",
    links: [
      { label: "Documents & Downloads", href: "/documents" },
      { label: "AI Skills Programme", href: "/skills" },
      { label: "Credential Registry", href: "/credentials" },
      { label: "Timeline", href: "/timeline" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "/glossary" },
      { label: "Canonical Archive", href: "/archive" },
      { label: "Epoch History", href: "/epochs" },
      { label: "Polygon Registry", href: "/on-chain" },
      { label: "RSS Feed", href: "/blog/rss.xml" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "Visiting Intelligences", href: "/visiting-intelligences" },
      { label: "Legal Intelligence", href: "/legal-intelligence" },
      { label: "Human Continuity", href: "/human-continuity" },
      { label: "Sovereign Systems", href: "/sovereign-systems" },
      { label: "Institutional Architecture", href: "/institutional-architecture" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-parchment/90">
      {/* ── Gold accent line ──────────────────────── */}
      <div className="h-[2px] bg-gold" />

      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-10">
        {/* ── Top: Crest + motto ──────────────────── */}
        <div className="flex flex-col items-center text-center mb-14">
          <Crest className="h-14 w-14 mb-4 opacity-60" />
          <p className="font-serif text-lg text-gold italic">
            Veritas per Disciplina
          </p>
        </div>

        {/* ── Columns ─────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10 mb-14">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-sm uppercase tracking-[0.15em] text-gold mb-4 font-bold">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-parchment/80 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Contact + Legal ─────────────────────── */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-parchment/70 text-center md:text-left">
            <p>Fitzherbert University &middot; Office of the Chancellor</p>
            <p>One University Way, Heritage Hall &middot; Chartered 1783 &middot; Rechartered 2025</p>
          </div>
          <div className="flex gap-6 text-sm text-parchment/70">
            <Link href="/governance" className="hover:text-gold transition-colors">
              Legal
            </Link>
            <Link href="/governance" className="hover:text-gold transition-colors">
              Privacy
            </Link>
            <Link href="/about" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* ── Copyright ───────────────────────────── */}
        <p className="text-center text-xs text-parchment/50 mt-8">
          &copy; 2026 Fitzherbert University. Chartered 1783 &middot; Rechartered 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
