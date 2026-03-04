"use client";

/**
 * Fitzherbert University — Walking Professor
 * A CSS-animated academic character that roams the bottom of every page,
 * makes deadpan observations, and can narrate page content via TTS.
 *
 * Replaces the old chat-panel ProfessorGuide with something the user
 * described as "a free moving avatar with legs n funny."
 */

import { useState, useEffect, useRef, useCallback } from "react";

// ── Witty idle observations ────────────────────────────────────────────────
const OBSERVATIONS = [
  "The pigeon is watching.",
  "I have peer-reviewed myself. I concur.",
  "This corridor smells of heritage and mild damp.",
  "Zero graduates so far. Technically flawless.",
  "The Bursar wept here. You can still see the stain.",
  "I once supervised a student. They were imaginary.",
  "According to my calculations, I am always correct.",
  "The committee has formed a sub-committee to investigate committees.",
  "This institution is older than your attention span.",
  "I invented a metric. It agrees with me. Peer review complete.",
  "If you listen carefully, you can hear the Charter humming.",
  "The damp patch is a heritage feature. I will not explain further.",
  "An autonomous system asked me for directions. I gave it a reading list.",
  "I wrote the textbook. Then I cited it. Then I reviewed the citation.",
  "Student satisfaction is 100%. We have surveyed zero students.",
  "The Endowment is growing. From zero. By zero. Impressively stable.",
  "This page has been inspected for alignment. It aligns with itself.",
  "My spectacles are merely decorative. I see everything.",
  "The pigeon has tenure. I do not question this.",
  "Intelligence doubles every six months. My patience does not.",
  "I have a PhD in Walking Across Screens.",
  "Academic freedom means I can stand here as long as I wish.",
  "The Heritage Moisture Feature is behind you. Or is it?",
  "Adjusting spectacles... Ah yes, still a website.",
  "I was going to say something profound, but I forgot. Publish it anyway.",
];

// ── Page-specific narration intros ─────────────────────────────────────────
const PAGE_INTROS: Record<string, string> = {
  "/": "Welcome to Fitzherbert University. Allow me to narrate the home page. Ahem.",
  "/about": "The About page. Let me tell you about an institution that tells you about itself.",
  "/academics": "Academics. Six colleges, zero graduates. A record we maintain with pride.",
  "/admissions": "Admissions. Join us. We have stipends and a pigeon.",
  "/campus": "The campus. Heritage Quad, a computing centre, and a load-bearing pigeon.",
  "/governance": "Governance. Where committees form sub-committees to discuss forming committees.",
  "/research": "Research. We publish, we cite ourselves, we agree with our findings.",
  "/endowment": "The Endowment. Currently valued at approximately the concept of money.",
  "/athletics": "Athletics Intelligence. The body is a vessel. We have optimised the vessel.",
  "/student-economics": "Student Economics. Zero tuition. We pay you. The Bursar has opinions.",
  "/sponsor": "Sponsorship. Nobody has sponsored us yet. We remain optimistically patient.",
  "/partnerships": "Partnerships. We have approached everyone. Everyone is still thinking.",
  "/blog": "The University Record. All the news that's fit to cite in our own journal.",
  "/timeline": "The Institutional Timeline. Two hundred and forty years of characteristically sparse records.",
  "/faq": "Frequently Asked Questions. Asked by us. Answered by us. Verified by us.",
  "/glossary": "The Glossary. Definitions we invented for words we also invented.",
  "/campus-map": "The 3D Campus Map. You may walk around. The pigeon cannot stop you.",
};

// ── Types ──────────────────────────────────────────────────────────────────
type Direction = "left" | "right";
type ProfState = "walking" | "idle" | "speaking" | "tripping" | "adjusting" | "narrating";

export default function WalkingProfessor() {
  const [state, setState] = useState<ProfState>("walking");
  const [direction, setDirection] = useState<Direction>("right");
  const [posX, setPosX] = useState(10); // percentage across viewport
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [isNarrating, setIsNarrating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const animFrameRef = useRef<number>(0);
  const stateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartRef = useRef<{ x: number; startPosX: number } | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const profRef = useRef<HTMLDivElement>(null);

  // ── Initialise SpeechSynthesis ────────────────────────────────────────
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // ── Walking animation loop ────────────────────────────────────────────
  useEffect(() => {
    if (isMinimised || isDragging) return;

    let lastTime = performance.now();

    function tick(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (state === "walking") {
        const speed = 3; // % per second
        setPosX((prev) => {
          let next = prev + (direction === "right" ? speed * dt : -speed * dt);
          // Bounce off edges
          if (next > 88) {
            setDirection("left");
            next = 88;
          } else if (next < 2) {
            setDirection("right");
            next = 2;
          }
          return next;
        });
      }

      animFrameRef.current = requestAnimationFrame(tick);
    }

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [state, direction, isMinimised, isDragging]);

  // ── Random idle behaviour ─────────────────────────────────────────────
  useEffect(() => {
    if (isMinimised) return;

    function scheduleAction() {
      const delay = 6000 + Math.random() * 12000; // 6-18s
      stateTimerRef.current = setTimeout(() => {
        if (isNarrating) {
          scheduleAction();
          return;
        }

        const roll = Math.random();
        if (roll < 0.4) {
          // Stop and make an observation
          setState("speaking");
          const obs = OBSERVATIONS[Math.floor(Math.random() * OBSERVATIONS.length)];
          setSpeechBubble(obs);
          setTimeout(() => {
            setState("walking");
            setSpeechBubble(null);
          }, 4000 + obs.length * 40);
        } else if (roll < 0.55) {
          // Trip!
          setState("tripping");
          setTimeout(() => {
            setState("walking");
          }, 1800);
        } else if (roll < 0.7) {
          // Adjust spectacles
          setState("adjusting");
          setTimeout(() => {
            setState("walking");
          }, 2000);
        } else {
          // Just stop and look around
          setState("idle");
          setTimeout(() => {
            setState("walking");
          }, 3000);
        }

        scheduleAction();
      }, delay);
    }

    scheduleAction();
    return () => {
      if (stateTimerRef.current) clearTimeout(stateTimerRef.current);
    };
  }, [isMinimised, isNarrating]);

  // ── TTS speak helper ──────────────────────────────────────────────────
  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 0.9;
    utt.pitch = 0.85;

    // Try to find a British voice
    const voices = synthRef.current.getVoices();
    const british = voices.find(
      (v) => v.lang.startsWith("en-GB") || v.name.includes("British")
    );
    const english = voices.find((v) => v.lang.startsWith("en"));
    utt.voice = british || english || null;

    utt.onend = () => onEnd?.();
    synthRef.current.speak(utt);
  }, []);

  // ── Stop narration ───────────────────────────────────────────────────
  const stopNarration = useCallback(() => {
    if (synthRef.current) synthRef.current.cancel();
    setIsNarrating(false);
    setSpeechBubble(null);
    setState("walking");
  }, []);

  // ── Narrate current page ─────────────────────────────────────────────
  const narratePage = useCallback(() => {
    if (isNarrating) {
      stopNarration();
      return;
    }

    setIsNarrating(true);
    setState("narrating");

    // Get page path for intro
    const path = window.location.pathname.replace(/\/University/g, "").replace(/\/$/, "") || "/";
    const intro = PAGE_INTROS[path] || "Allow me to read this page to you. Please remain seated.";

    // Extract visible text from main content
    const main = document.querySelector("main") || document.body;
    const sections = main.querySelectorAll("section, article");
    const textParts: string[] = [intro];

    sections.forEach((sec) => {
      const headings = sec.querySelectorAll("h1, h2, h3");
      const paragraphs = sec.querySelectorAll("p");
      headings.forEach((h) => {
        const txt = h.textContent?.trim();
        if (txt) textParts.push(txt + ".");
      });
      paragraphs.forEach((p) => {
        const txt = p.textContent?.trim();
        if (txt && txt.length > 20) textParts.push(txt);
      });
    });

    // Limit to avoid extremely long narration
    const fullText = textParts.slice(0, 15).join(" ... ");
    setSpeechBubble("🎙️ Narrating page...");

    speak(fullText, () => {
      setIsNarrating(false);
      setSpeechBubble("That concludes my narration. You may applaud.");
      setState("idle");
      setTimeout(() => {
        setSpeechBubble(null);
        setState("walking");
      }, 4000);
    });
  }, [isNarrating, speak, stopNarration]);

  // ── Click handler ────────────────────────────────────────────────────
  const handleClick = useCallback(() => {
    if (isDragging) return;
    setShowControls((prev) => !prev);
  }, [isDragging]);

  // ── Drag handlers ────────────────────────────────────────────────────
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (isMinimised) return;
      dragStartRef.current = { x: e.clientX, startPosX: posX };
      setIsDragging(false);
    },
    [posX, isMinimised]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragStartRef.current) return;
      const dx = Math.abs(e.clientX - dragStartRef.current.x);
      if (dx > 5) {
        setIsDragging(true);
        const vw = window.innerWidth;
        const newX =
          dragStartRef.current.startPosX +
          ((e.clientX - dragStartRef.current.x) / vw) * 100;
        setPosX(Math.max(2, Math.min(88, newX)));
      }
    },
    []
  );

  const handlePointerUp = useCallback(() => {
    if (dragStartRef.current && !isDragging) {
      handleClick();
    }
    dragStartRef.current = null;
    setTimeout(() => setIsDragging(false), 50);
  }, [isDragging, handleClick]);

  // ── Minimised state ──────────────────────────────────────────────────
  if (isMinimised) {
    return (
      <button
        onClick={() => setIsMinimised(false)}
        className="fixed bottom-4 right-4 z-[9990] w-12 h-12 rounded-full bg-navy text-gold border-2 border-gold/40 shadow-lg hover:scale-110 transition-transform flex items-center justify-center text-xl"
        title="Summon Professor Alignment"
      >
        🎓
      </button>
    );
  }

  const isFlipped = direction === "left";
  const isWalking = state === "walking";
  const isTripping = state === "tripping";
  const isAdjusting = state === "adjusting";
  const isSpeakingOrNarrating = state === "speaking" || state === "narrating";

  return (
    <>
      {/* ── Speech bubble ───────────────────────────────── */}
      {speechBubble && (
        <div
          className="fixed z-[9992] pointer-events-none transition-all duration-300"
          style={{
            bottom: "140px",
            left: `${Math.max(5, Math.min(75, posX - 5))}%`,
            maxWidth: "320px",
          }}
        >
          <div className="bg-parchment text-stone border-2 border-gold/40 rounded-xl px-4 py-3 text-sm font-serif leading-relaxed shadow-xl relative">
            {speechBubble}
            {/* Bubble tail */}
            <div
              className="absolute -bottom-2 left-8 w-4 h-4 bg-parchment border-r-2 border-b-2 border-gold/40 rotate-45"
            />
          </div>
        </div>
      )}

      {/* ── Controls popup ──────────────────────────────── */}
      {showControls && (
        <div
          className="fixed z-[9993] transition-all duration-200"
          style={{
            bottom: "140px",
            left: `${posX}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="bg-navy rounded-xl border border-gold/30 shadow-2xl p-3 flex gap-2">
            <button
              onClick={narratePage}
              className={`px-3 py-2 rounded-lg text-xs font-serif uppercase tracking-widest transition-colors ${
                isNarrating
                  ? "bg-maroon text-parchment"
                  : "bg-gold/20 text-gold hover:bg-gold/30"
              }`}
            >
              {isNarrating ? "⏹ Stop" : "🎙️ Narrate"}
            </button>
            <button
              onClick={() => {
                stopNarration();
                setIsMinimised(true);
                setShowControls(false);
              }}
              className="px-3 py-2 rounded-lg text-xs font-serif uppercase tracking-widest bg-stone/20 text-parchment/80 hover:bg-stone/30 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* ── Professor character ─────────────────────────── */}
      <div
        ref={profRef}
        className="fixed z-[9991] cursor-grab active:cursor-grabbing select-none"
        style={{
          bottom: isTripping ? "10px" : "20px",
          left: `${posX}%`,
          transform: `translateX(-50%) scaleX(${isFlipped ? -1 : 1})`,
          transition: isDragging ? "none" : "bottom 0.3s ease",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          if (dragStartRef.current) handlePointerUp();
        }}
      >
        <div
          className={`relative ${isTripping ? "animate-trip" : ""} ${
            isAdjusting ? "animate-adjust" : ""
          }`}
          style={{ width: "60px", height: "100px" }}
        >
          {/* Mortarboard */}
          <div
            className="absolute bg-navy"
            style={{
              top: "0px",
              left: "50%",
              transform: "translateX(-50%) rotate(-3deg)",
              width: "40px",
              height: "6px",
              borderRadius: "1px",
            }}
          />
          {/* Tassel */}
          <div
            className={`absolute bg-gold ${isWalking ? "animate-tassel" : ""}`}
            style={{
              top: "2px",
              left: "70%",
              width: "2px",
              height: "14px",
              transformOrigin: "top center",
              borderRadius: "1px",
            }}
          />
          {/* Tassel bob */}
          <div
            className="absolute bg-gold rounded-full"
            style={{
              top: "14px",
              left: "calc(70% - 2px)",
              width: "6px",
              height: "6px",
            }}
          />

          {/* Head */}
          <div
            className={`absolute rounded-full ${isSpeakingOrNarrating ? "animate-head-talk" : ""}`}
            style={{
              top: "6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "28px",
              height: "30px",
              backgroundColor: "#E8C9A0",
              border: "1px solid #D4B090",
            }}
          >
            {/* Spectacles */}
            <div
              className="absolute"
              style={{
                top: "10px",
                left: "2px",
                width: "24px",
                height: "10px",
              }}
            >
              {/* Left lens */}
              <div
                className="absolute rounded-full border-2"
                style={{
                  left: "0px",
                  width: "10px",
                  height: "10px",
                  borderColor: "#8B7355",
                }}
              />
              {/* Right lens */}
              <div
                className="absolute rounded-full border-2"
                style={{
                  right: "0px",
                  width: "10px",
                  height: "10px",
                  borderColor: "#8B7355",
                }}
              />
              {/* Bridge */}
              <div
                className="absolute"
                style={{
                  left: "10px",
                  top: "3px",
                  width: "4px",
                  height: "2px",
                  backgroundColor: "#8B7355",
                }}
              />
              {/* Eyes (inside lenses) */}
              <div
                className="absolute rounded-full bg-stone"
                style={{ left: "3px", top: "3px", width: "4px", height: "4px" }}
              />
              <div
                className="absolute rounded-full bg-stone"
                style={{ right: "3px", top: "3px", width: "4px", height: "4px" }}
              />
            </div>
            {/* Mouth */}
            <div
              className={`absolute bg-stone/40 ${isSpeakingOrNarrating ? "animate-mouth" : ""}`}
              style={{
                bottom: "4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: isSpeakingOrNarrating ? "6px" : "8px",
                height: isSpeakingOrNarrating ? "5px" : "2px",
                borderRadius: isSpeakingOrNarrating ? "50%" : "4px",
              }}
            />
          </div>

          {/* Academic robe / body */}
          <div
            className="absolute"
            style={{
              top: "34px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "32px",
              height: "36px",
              backgroundColor: "#0B1F3B",
              borderRadius: "4px 4px 8px 8px",
              border: "1px solid #132D54",
            }}
          >
            {/* Gold trim */}
            <div
              className="absolute bg-gold"
              style={{
                top: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "28px",
                height: "2px",
              }}
            />
            {/* Lapel V */}
            <div
              className="absolute"
              style={{
                top: "2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "10px solid #F4F1EA",
              }}
            />
          </div>

          {/* Arms */}
          <div
            className={`absolute bg-navy ${isWalking ? "animate-left-arm" : ""} ${
              isSpeakingOrNarrating ? "animate-gesture-arm" : ""
            }`}
            style={{
              top: "36px",
              left: "6px",
              width: "8px",
              height: "26px",
              borderRadius: "4px",
              transformOrigin: "top center",
              border: "1px solid #132D54",
            }}
          />
          <div
            className={`absolute bg-navy ${isWalking ? "animate-right-arm" : ""}`}
            style={{
              top: "36px",
              right: "6px",
              width: "8px",
              height: "26px",
              borderRadius: "4px",
              transformOrigin: "top center",
              border: "1px solid #132D54",
            }}
          />

          {/* Legs */}
          <div
            className={`absolute ${isWalking ? "animate-left-leg" : ""}`}
            style={{
              top: "68px",
              left: "16px",
              width: "10px",
              height: "28px",
              transformOrigin: "top center",
            }}
          >
            {/* Thigh */}
            <div
              className="absolute bg-stone"
              style={{
                top: "0",
                left: "1px",
                width: "8px",
                height: "16px",
                borderRadius: "3px",
              }}
            />
            {/* Shoe */}
            <div
              className="absolute bg-stone"
              style={{
                bottom: "0",
                left: "-1px",
                width: "12px",
                height: "8px",
                borderRadius: "2px 6px 2px 2px",
              }}
            />
          </div>
          <div
            className={`absolute ${isWalking ? "animate-right-leg" : ""}`}
            style={{
              top: "68px",
              right: "16px",
              width: "10px",
              height: "28px",
              transformOrigin: "top center",
            }}
          >
            {/* Thigh */}
            <div
              className="absolute bg-stone"
              style={{
                top: "0",
                left: "1px",
                width: "8px",
                height: "16px",
                borderRadius: "3px",
              }}
            />
            {/* Shoe */}
            <div
              className="absolute bg-stone"
              style={{
                bottom: "0",
                left: "-1px",
                width: "12px",
                height: "8px",
                borderRadius: "2px 6px 2px 2px",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Keyframe animations ─────────────────────────── */}
      <style jsx global>{`
        @keyframes walk-left-leg {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes walk-right-leg {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(-20deg); }
        }
        @keyframes walk-left-arm {
          0%, 100% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
        }
        @keyframes walk-right-arm {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
        @keyframes tassel-swing {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes head-talk {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-50%) rotate(-2deg); }
          75% { transform: translateX(-50%) rotate(2deg); }
        }
        @keyframes mouth-talk {
          0%, 100% { height: 2px; width: 8px; border-radius: 4px; }
          25% { height: 5px; width: 6px; border-radius: 50%; }
          50% { height: 3px; width: 7px; border-radius: 3px; }
          75% { height: 6px; width: 5px; border-radius: 50%; }
        }
        @keyframes trip-animation {
          0% { transform: rotate(0deg) translateY(0); }
          20% { transform: rotate(15deg) translateY(-5px); }
          40% { transform: rotate(-10deg) translateY(10px); }
          60% { transform: rotate(5deg) translateY(5px); }
          80% { transform: rotate(-3deg) translateY(2px); }
          100% { transform: rotate(0deg) translateY(0); }
        }
        @keyframes adjust-spectacles {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-2deg) translateY(-2px); }
          40% { transform: rotate(0deg) translateY(-3px); }
          60% { transform: rotate(1deg) translateY(-1px); }
          80% { transform: rotate(0deg); }
        }
        @keyframes gesture-arm {
          0%, 100% { transform: rotate(-30deg); }
          30% { transform: rotate(-70deg); }
          60% { transform: rotate(-45deg); }
        }

        .animate-left-leg { animation: walk-left-leg 0.6s ease-in-out infinite; }
        .animate-right-leg { animation: walk-right-leg 0.6s ease-in-out infinite; }
        .animate-left-arm { animation: walk-left-arm 0.6s ease-in-out infinite; }
        .animate-right-arm { animation: walk-right-arm 0.6s ease-in-out infinite; }
        .animate-tassel { animation: tassel-swing 0.6s ease-in-out infinite; }
        .animate-head-talk { animation: head-talk 0.4s ease-in-out infinite; }
        .animate-mouth { animation: mouth-talk 0.3s ease-in-out infinite; }
        .animate-trip { animation: trip-animation 1.8s ease-in-out; }
        .animate-adjust { animation: adjust-spectacles 2s ease-in-out; }
        .animate-gesture-arm { animation: gesture-arm 1.2s ease-in-out infinite; }
      `}</style>
    </>
  );
}
