"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crest } from "./Crest";

interface HeroProps {
  title?: string;
  motto?: string;
  subtitle?: string;
  founding?: string;
  /** If true, show the full homepage hero with crest + parallax. Otherwise, a simpler page banner. */
  fullHero?: boolean;
}

export function Hero({
  title = "Fitzherbert University",
  motto = "Veritas per Disciplina",
  subtitle = "A Tradition of Intellectual Sovereignty Since 1783",
  founding = "Founded 1783",
  fullHero = false,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Content fades and pushes up slightly on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-8%"]);

  if (fullHero) {
    return (
      <section
        ref={sectionRef}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background layers */}
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY }}
        >
          {/* Stone texture base */}
          <div className="absolute inset-0 stone-texture" />

          {/* Dark vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95" />
          <div className="absolute inset-0 vignette" />

          {/* Subtle architectural column lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 80px, #C8A24C 80px, #C8A24C 81px)",
            }}
          />

          {/* Horizontal accent lines */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 120px, #C8A24C 120px, #C8A24C 121px)",
            }}
          />
        </motion.div>

        {/* Ivy corner accents */}
        <div className="absolute inset-0 ivy-corners pointer-events-none" />

        {/* Hero content — fades on scroll */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* Crest: fade in + scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <Crest className="h-36 w-36 drop-shadow-[0_4px_24px_rgba(200,162,76,0.15)]" />
          </motion.div>

          {/* Founding date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gold/60 text-xs tracking-[0.35em] uppercase mb-5 font-serif"
          >
            {founding}
          </motion.p>

          {/* University name — staggered character appearance */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-parchment tracking-wide leading-[1.05] mb-6"
          >
            {title}
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="origin-center"
          >
            <div className="ornamental-divider">
              <span className="ornament">&#10041;</span>
            </div>
          </motion.div>

          {/* Latin motto — fade in last */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1.2 }}
            className="font-serif text-xl md:text-2xl text-gold italic mt-2 mb-3"
          >
            &ldquo;{motto}&rdquo;
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1 }}
            className="text-parchment/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-2"
          >
            {subtitle}
          </motion.p>

          {/* Scroll indicator with gentle bounce */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-gold/40 text-[10px] tracking-[0.3em] uppercase font-serif">Scroll</span>
              <div className="w-[1px] h-10 bg-gradient-to-b from-gold/40 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  /* ── Page-level banner (non-home pages) ─────────── */
  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 stone-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy/90" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* Ivy accents */}
      <div className="absolute inset-0 ivy-corners pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="engraved text-gold/60 mb-4">{motto}</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-parchment tracking-wide">
            {title}
          </h1>
          <div className="ornamental-divider mt-6">
            <span className="ornament">&#10041;</span>
          </div>
          {subtitle && (
            <p className="text-parchment/50 mt-4 text-lg leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
