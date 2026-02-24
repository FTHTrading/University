import Link from "next/link";
import { Crest } from "./Crest";

const footerColumns = [
  {
    title: "Colleges",
    links: [
      { label: "Arts & Sciences", href: "/academics" },
      { label: "Engineering", href: "/academics" },
      { label: "Law", href: "/academics" },
      { label: "Divinity", href: "/academics" },
      { label: "Medicine", href: "/academics" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "Charter", href: "/governance" },
      { label: "Amendments", href: "/governance" },
      { label: "Senate", href: "/governance" },
      { label: "Transparency", href: "/governance" },
    ],
  },
  {
    title: "Campus",
    links: [
      { label: "Named Halls", href: "/campus" },
      { label: "Residential Colleges", href: "/campus" },
      { label: "Libraries", href: "/campus" },
      { label: "Traditions", href: "/campus" },
      { label: "Gardens & Grounds", href: "/campus" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Institutes", href: "/research" },
      { label: "Laboratories", href: "/research" },
      { label: "White Papers", href: "/research" },
      { label: "Initiatives", href: "/research" },
    ],
  },
  {
    title: "University Record",
    links: [
      { label: "All Articles", href: "/blog" },
      { label: "Thought Leadership", href: "/blog" },
      { label: "Athletics Intelligence", href: "/blog" },
      { label: "Governance & AI", href: "/blog" },
    ],
  },
  {
    title: "Reference",
    links: [
      { label: "Timeline", href: "/timeline" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "/glossary" },
      { label: "Citation Index", href: "/citations" },
      { label: "Canonical Archive", href: "/archive" },
      { label: "Epoch History", href: "/epochs" },
      { label: "RSS Feed", href: "/blog/rss.xml" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-parchment/80">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
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
                      className="text-sm text-parchment/60 hover:text-gold transition-colors"
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
          <div className="text-sm text-parchment/50 text-center md:text-left">
            <p>Fitzherbert University &middot; Office of the Chancellor</p>
            <p>One University Way, Heritage Hall &middot; Est. 1783</p>
          </div>
          <div className="flex gap-6 text-sm text-parchment/50">
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
        <p className="text-center text-xs text-parchment/30 mt-8">
          &copy; 2026 Fitzherbert University. Established 1783. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
