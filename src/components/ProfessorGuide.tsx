"use client";

/**
 * Fitzherbert University — Professor Alignment
 * AI Campus Guide — a floating 3D avatar with voice & text interaction.
 *
 * Architecture:
 *   1. 3D avatar rendered via Three.js / @react-three/fiber
 *   2. Browser-native SpeechSynthesis for TTS
 *   3. Browser-native SpeechRecognition for STT
 *   4. Ollama (localhost:11434) as optional LLM back-end
 *   5. Embedded knowledge base fallback when Ollama is unreachable
 */

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  SYSTEM_PROMPT,
  GREETING,
  matchTopic,
} from "@/lib/professor-knowledge";

// ── 3D Avatar ────────────────────────────────────────────────────────────────

interface AvatarProps {
  isSpeaking: boolean;
  isThinking: boolean;
}

function ProfessorAvatar({ isSpeaking, isThinking }: AvatarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const jawRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  // Colours
  const ROBE = "#0B1F3B";       // navy academic robe
  const SKIN = "#E8C9A0";       // warm skin tone
  const GOLD_TRIM = "#C8A24C";  // gold trim
  const PARCHMENT = "#F4F1EA";

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Idle breathing / bob
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.03;
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.08;
    }

    // Head nod while thinking
    if (headRef.current) {
      const nodSpeed = isThinking ? 2.5 : 0.8;
      const nodAmp = isThinking ? 0.06 : 0.02;
      headRef.current.rotation.x = Math.sin(t * nodSpeed) * nodAmp;
    }

    // Jaw / mouth for speaking
    if (jawRef.current) {
      if (isSpeaking) {
        const jawOpen =
          Math.abs(Math.sin(t * 12)) * 0.07 +
          Math.abs(Math.sin(t * 7.3)) * 0.04;
        jawRef.current.scale.y = 1 + jawOpen;
        jawRef.current.position.y = -0.02 - jawOpen * 0.15;
      } else {
        jawRef.current.scale.y = 1;
        jawRef.current.position.y = -0.02;
      }
    }

    // Gesture — left arm
    if (leftArmRef.current) {
      if (isSpeaking) {
        leftArmRef.current.rotation.z =
          0.4 + Math.sin(t * 2.1) * 0.25;
        leftArmRef.current.rotation.x = Math.sin(t * 1.7) * 0.15;
      } else {
        leftArmRef.current.rotation.z = 0.15 + Math.sin(t * 0.5) * 0.02;
        leftArmRef.current.rotation.x = 0;
      }
    }

    // Right arm — subtle gesture
    if (rightArmRef.current) {
      if (isSpeaking) {
        rightArmRef.current.rotation.z =
          -0.3 + Math.sin(t * 1.9 + 1) * 0.18;
      } else {
        rightArmRef.current.rotation.z = -0.15 + Math.sin(t * 0.5) * 0.02;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Academic robe / torso */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.38, 0.9, 12]} />
        <meshStandardMaterial color={ROBE} />
      </mesh>

      {/* Gold trim band */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.29, 0.29, 0.06, 12]} />
        <meshStandardMaterial color={GOLD_TRIM} />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 0.68, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={SKIN} />
      </mesh>

      {/* Mortarboard */}
      <group position={[0, 0.88, 0]}>
        {/* board */}
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.42, 0.03, 0.42]} />
          <meshStandardMaterial color={ROBE} />
        </mesh>
        {/* button */}
        <mesh position={[0, 0.025, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color={GOLD_TRIM} />
        </mesh>
        {/* tassel string */}
        <mesh position={[0.18, -0.02, 0.18]}>
          <cylinderGeometry args={[0.006, 0.006, 0.18, 4]} />
          <meshStandardMaterial color={GOLD_TRIM} />
        </mesh>
      </group>

      {/* Eyes */}
      <mesh position={[-0.06, 0.72, 0.17]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.06, 0.72, 0.17]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Mouth / jaw area */}
      <mesh ref={jawRef} position={[0, 0.58, 0.16]}>
        <boxGeometry args={[0.08, 0.03, 0.04]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Left arm */}
      <mesh ref={leftArmRef} position={[0.35, 0.1, 0]}>
        <cylinderGeometry args={[0.06, 0.05, 0.55, 8]} />
        <meshStandardMaterial color={ROBE} />
      </mesh>
      {/* Left hand */}
      <mesh position={[0.35, -0.18, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={SKIN} />
      </mesh>

      {/* Right arm */}
      <mesh ref={rightArmRef} position={[-0.35, 0.1, 0]}>
        <cylinderGeometry args={[0.06, 0.05, 0.55, 8]} />
        <meshStandardMaterial color={ROBE} />
      </mesh>
      {/* Right hand */}
      <mesh position={[-0.35, -0.18, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={SKIN} />
      </mesh>

      {/* Parchment scroll in hand */}
      <mesh position={[0.38, -0.12, 0.05]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.025, 0.025, 0.2, 8]} />
        <meshStandardMaterial color={PARCHMENT} />
      </mesh>
    </group>
  );
}

// ── Speech Engine ────────────────────────────────────────────────────────────

function speak(
  text: string,
  onStart: () => void,
  onEnd: () => void
): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  utterance.pitch = 0.95;

  // Prefer a British English voice if available
  const voices = window.speechSynthesis.getVoices();
  const british = voices.find(
    (v) =>
      v.lang.startsWith("en-GB") ||
      v.name.toLowerCase().includes("british") ||
      v.name.toLowerCase().includes("daniel")
  );
  if (british) utterance.voice = british;

  utterance.onstart = onStart;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;

  window.speechSynthesis.speak(utterance);
}

// ── AI Brain (Ollama fallback → knowledge base) ──────────────────────────────

async function getAIResponse(question: string): Promise<string> {
  // Try Ollama first
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        model: "llama3",
        prompt: `${SYSTEM_PROMPT}\n\nVisitor asks: ${question}`,
        stream: false,
      }),
    });

    clearTimeout(timeout);
    if (res.ok) {
      const data = await res.json();
      if (data.response) return data.response;
    }
  } catch {
    // Ollama not available — fall back to knowledge base
  }

  return matchTopic(question);
}

// ── Chat Message Type ────────────────────────────────────────────────────────

interface ChatMessage {
  role: "professor" | "visitor";
  text: string;
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function ProfessorGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<{ abort: () => void } | null>(null);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Greeting on first open
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      const greetMsg: ChatMessage = { role: "professor", text: GREETING };
      setMessages([greetMsg]);
      // Small delay before speaking the greeting
      const timer = setTimeout(() => {
        speak(
          GREETING,
          () => setIsSpeaking(true),
          () => setIsSpeaking(false)
        );
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen, hasGreeted]);

  // Load voices
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Ask the professor
  const askProfessor = useCallback(
    async (question: string) => {
      if (!question.trim()) return;

      // Add visitor message
      setMessages((prev) => [
        ...prev,
        { role: "visitor", text: question },
      ]);
      setInput("");
      setIsThinking(true);

      // Get AI response
      const answer = await getAIResponse(question);

      setIsThinking(false);
      setMessages((prev) => [
        ...prev,
        { role: "professor", text: answer },
      ]);

      // Speak the answer
      speak(
        answer,
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    },
    []
  );

  // Voice input
  const startListening = useCallback(() => {
    if (typeof window === "undefined") return;

    const w = window as unknown as Record<string, unknown>;
    const SpeechRecognitionCtor = w.SpeechRecognition ?? w.webkitSpeechRecognition;

    if (!SpeechRecognitionCtor) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognition = new (SpeechRecognitionCtor as any)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setIsListening(false);
      askProfessor(transcript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    setIsListening(true);
    recognition.start();
  }, [askProfessor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    askProfessor(input);
  };

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <>
      {/* Floating toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full bg-navy text-gold border-2 border-gold/40 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center text-2xl"
          aria-label="Open campus guide"
          title="Ask Professor Alignment"
        >
          🎓
        </button>
      )}

      {/* Guide Panel */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-[9999] w-[340px] h-[520px] flex flex-col bg-parchment border border-gold/30 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-navy text-parchment border-b border-gold/30">
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">🎓</span>
              <div>
                <div className="text-xs font-serif font-bold tracking-wide text-gold">
                  Professor Alignment
                </div>
                <div className="text-[10px] text-parchment/60 tracking-wider uppercase">
                  AI Campus Guide
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {isSpeaking && (
                <span className="text-[10px] text-gold/70 tracking-widest uppercase animate-pulse">
                  speaking
                </span>
              )}
              {isThinking && (
                <span className="text-[10px] text-gold/70 tracking-widest uppercase animate-pulse">
                  thinking
                </span>
              )}
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (typeof window !== "undefined") {
                    window.speechSynthesis.cancel();
                  }
                }}
                className="ml-2 text-parchment/60 hover:text-gold transition-colors text-lg leading-none"
                aria-label="Close guide"
              >
                ×
              </button>
            </div>
          </div>

          {/* 3D Avatar viewport */}
          <div className="h-[160px] bg-gradient-to-b from-navy/10 to-parchment border-b border-gold/20">
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full text-stone/40 text-xs">
                  Loading Professor...
                </div>
              }
            >
              <Canvas
                camera={{ position: [0, 0.3, 2.2], fov: 40 }}
                gl={{ alpha: true, antialias: true }}
              >
                <ambientLight intensity={0.8} />
                <directionalLight position={[2, 3, 2]} intensity={1.2} />
                <pointLight position={[-2, 1, 1]} intensity={0.4} color="#C8A24C" />
                <ProfessorAvatar
                  isSpeaking={isSpeaking}
                  isThinking={isThinking}
                />
              </Canvas>
            </Suspense>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "visitor" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                    msg.role === "visitor"
                      ? "bg-navy text-parchment rounded-br-sm"
                      : "bg-gold/15 text-navy border border-gold/20 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-gold/15 text-navy border border-gold/20 rounded-xl rounded-bl-sm px-3 py-2 text-xs">
                  <span className="animate-pulse">Professor Alignment is considering your question...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-1 px-2 py-2 border-t border-gold/20 bg-parchment-dark/50"
          >
            <button
              type="button"
              onClick={startListening}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all ${
                isListening
                  ? "bg-maroon text-white animate-pulse"
                  : "bg-navy/10 text-navy hover:bg-navy/20"
              }`}
              aria-label="Voice input"
              title={isListening ? "Listening..." : "Speak to the Professor"}
            >
              🎤
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Professor Alignment..."
              className="flex-1 px-3 py-2 text-xs bg-white/70 border border-gold/20 rounded-lg focus:outline-none focus:border-gold/50 text-navy placeholder:text-stone/40"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 rounded-full bg-navy text-gold flex items-center justify-center text-sm disabled:opacity-30 hover:bg-navy-light transition-colors"
              aria-label="Send"
            >
              →
            </button>
          </form>

          {/* Quick topics */}
          <div className="flex gap-1 px-2 pb-2 flex-wrap">
            {["Campus tour", "Colleges", "AI Skills", "Documents", "Who are you?"].map(
              (topic) => (
                <button
                  key={topic}
                  onClick={() => askProfessor(topic)}
                  className="text-[10px] px-2 py-1 rounded-full bg-navy/5 text-navy/70 hover:bg-gold/20 hover:text-navy border border-gold/10 transition-colors"
                >
                  {topic}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
