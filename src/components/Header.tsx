"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crest } from "./Crest";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/student-economics", label: "Student Economics" },
  { href: "/campus", label: "Campus" },
  { href: "/athletics", label: "Athletics" },
  { href: "/research", label: "Research" },
  { href: "/governance", label: "Governance" },
  { href: "/admissions", label: "Admissions" },
  { href: "/endowment", label: "Endowment" },
  { href: "/timeline", label: "Timeline" },
  { href: "/blog", label: "Record" },
];

const actionLinks = [
  { href: "/admissions", label: "Apply" },
  { href: "/about", label: "Visit" },
  { href: "/endowment", label: "Give" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-parchment">
      {/* ── Top bar ─────────────────────────────────── */}
      <div className="border-b border-gold/20">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2 text-xs tracking-widest uppercase">
          <span className="hidden sm:inline text-gold/70 font-serif">
            Chartered 1783 · Rechartered 2025
          </span>
          <div className="flex gap-6">
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
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        {/* Crest + Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <Crest className="h-10 w-10" />
          <div className="leading-tight">
            <span className="block font-serif text-lg font-bold tracking-wide text-parchment group-hover:text-gold transition-colors">
              Fitzherbert University
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-serif uppercase tracking-[0.15em] text-parchment/80 hover:text-gold border-b-2 border-transparent hover:border-gold transition-all pb-1"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-parchment p-2"
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile drawer ───────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-gold/20 bg-navy-light"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-serif uppercase tracking-[0.15em] text-parchment/80 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
