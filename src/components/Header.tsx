"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crest } from "./Crest";

/* ── Condensed desktop nav (top-level only) ──────── */
const desktopLinks = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/research", label: "Research" },
  { href: "/governance", label: "Governance" },
  { href: "/campus", label: "Campus" },
  { href: "/documents", label: "Documents" },
  { href: "/blog", label: "Record" },
];

/* ── Mobile nav — grouped by category ────────────── */
const mobileNavGroups = [
  {
    title: "Discover",
    links: [
      { href: "/about", label: "About" },
      { href: "/campus", label: "Campus" },
      { href: "/timeline", label: "Timeline" },
      { href: "/athletics", label: "Athletics Intelligence" },
    ],
  },
  {
    title: "Academics & Students",
    links: [
      { href: "/academics", label: "Colleges & Programmes" },
      { href: "/student-economics", label: "Student Economics" },
      { href: "/admissions", label: "Admissions & Apply" },
      { href: "/research", label: "Research Institutes" },
    ],
  },
  {
    title: "Governance & Records",
    links: [
      { href: "/governance", label: "Governance" },
      { href: "/blog", label: "University Record" },
      { href: "/documents", label: "Documents & Downloads" },
      { href: "/epochs", label: "Epoch History" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/sponsor", label: "Sponsor" },
      { href: "/endowment", label: "Endowment & Giving" },
      { href: "/partnerships", label: "Partnerships" },
    ],
  },
];

const actionLinks = [
  { href: "/admissions", label: "Apply" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/endowment", label: "Give" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-navy text-parchment">
      {/* ── Top bar ─────────────────────────────────── */}
      <div className="border-b border-gold/20">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 py-2 text-xs tracking-widest uppercase">
          <span className="hidden sm:inline text-gold/70 font-serif">
            Chartered 1783 · Rechartered 2025
          </span>
          <div className="flex gap-4 sm:gap-6 ml-auto sm:ml-0">
            {actionLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gold hover:text-gold-light transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main nav ────────────────────────────────── */}
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Crest + Name */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
          <Crest className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" />
          <div className="leading-tight min-w-0">
            <span className="block font-serif text-base sm:text-lg font-bold tracking-wide text-parchment group-hover:text-gold transition-colors truncate">
              Fitzherbert University
            </span>
          </div>
        </Link>

        {/* Desktop navigation — condensed */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {desktopLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[13px] font-serif uppercase tracking-[0.12em] text-parchment/80 hover:text-gold border-b-2 border-transparent hover:border-gold transition-all pb-1 whitespace-nowrap"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button — larger touch target */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-parchment p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile drawer (full-height, grouped) ───── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-navy-light z-50 flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gold/20">
                <span className="font-serif text-sm text-gold tracking-widest uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-parchment p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close navigation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable nav groups */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
                {mobileNavGroups.map((group, gi) => (
                  <div key={group.title} className={gi > 0 ? "mt-5" : ""}>
                    <p className="text-[11px] font-serif uppercase tracking-[0.2em] text-gold/60 mb-2 px-1">
                      {group.title}
                    </p>
                    <ul className="space-y-0.5">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 py-3 px-3 rounded-md text-[15px] font-serif text-parchment/85 hover:text-gold hover:bg-navy/50 active:bg-navy/70 transition-colors"
                          >
                            <span className="text-gold/40 text-xs">›</span>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Drawer footer — quick action buttons */}
              <div className="border-t border-gold/20 px-5 py-4 space-y-2">
                <Link
                  href="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-maroon text-parchment py-3 rounded text-sm font-serif uppercase tracking-widest hover:bg-maroon-light transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/documents"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center border border-gold/40 text-gold py-3 rounded text-sm font-serif uppercase tracking-widest hover:bg-gold/10 transition-colors"
                >
                  Downloads & Documents
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
