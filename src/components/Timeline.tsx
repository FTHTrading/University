"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  detail?: string;
  latin?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = useCallback((i: number) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <div className="relative">
      {/* Vertical gold line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 transform md:-translate-x-[0.5px]" />

      <div className="space-y-16">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0;
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot on the line — pulsing when expanded */}
              <div
                className={`absolute left-6 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-[5px] md:-translate-x-[6px] mt-1 md:mt-0 border-2 border-parchment z-10 transition-colors duration-300 ${
                  isExpanded ? "bg-maroon scale-125" : "bg-gold"
                }`}
              />

              {/* Content card — clickable */}
              <div
                onClick={() => toggle(i)}
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] cursor-pointer group ${
                  isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                }`}
              >
                <span className="engraved text-gold">{event.year}</span>
                <h3 className="font-serif text-xl font-bold mt-1 mb-2 group-hover:text-maroon transition-colors">
                  {event.title}
                </h3>
                <p className="text-stone-light leading-relaxed text-sm">
                  {event.description}
                </p>

                {/* Expandable detail */}
                <AnimatePresence>
                  {isExpanded && (event.detail || event.latin) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {event.detail && (
                        <p className="text-stone text-sm leading-relaxed mt-3 border-t border-gold/20 pt-3">
                          {event.detail}
                        </p>
                      )}
                      {event.latin && (
                        <p className="text-gold/60 text-xs italic mt-2 tracking-wide">
                          {event.latin}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand indicator */}
                {(event.detail || event.latin) && (
                  <span className={`inline-block text-gold/40 text-xs mt-2 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}>
                    ▼
                  </span>
                )}
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
