"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CollegeCardProps {
  name: string;
  dean: string;
  description: string;
  href?: string;
  established?: string;
}

export function CollegeCard({
  name,
  dean,
  description,
  href = "/academics",
  established,
}: CollegeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className="block border border-gold/20 bg-ivory p-8 hover:border-gold/50 transition-colors group"
      >
        {established && (
          <span className="engraved text-gold-text text-xs">{established}</span>
        )}
        <h3 className="font-serif text-xl font-bold mt-2 mb-1 group-hover:text-maroon transition-colors">
          {name}
        </h3>
        <p className="text-sm text-stone italic mb-3">
          {dean}
        </p>
        <p className="text-stone text-sm leading-relaxed">{description}</p>
        <span className="inline-block mt-4 text-xs tracking-widest uppercase text-gold-text group-hover:text-maroon transition-colors">
          Explore &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
