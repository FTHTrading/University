/**
 * Fitzherbert University — Quest & Achievement System
 *
 * Pure client-side. All progress stored in localStorage.
 * Zero external dependencies. Zero cost.
 *
 * Architecture:
 *   Quest definitions → progress tracker → FITZ token counter
 *   Events fire from campus interactions → quest engine checks completion
 */

// ── Quest Definitions ────────────────────────────────────────────

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: "exploration" | "knowledge" | "governance" | "social" | "mastery";
  icon: string;
  fitzReward: number;
  steps: QuestStep[];
}

export interface QuestStep {
  id: string;
  label: string;
  /** Event key that completes this step */
  trigger: string;
}

export const QUESTS: Quest[] = [
  // ─── EXPLORATION ───────────────────────
  {
    id: "campus-explorer",
    title: "Campus Explorer",
    description: "Visit all eight campus facilities on the 3D map.",
    category: "exploration",
    icon: "🗺️",
    fitzReward: 100,
    steps: [
      { id: "visit-heritage", label: "Visit Heritage Quad", trigger: "building:Heritage Quad" },
      { id: "visit-wycliffe", label: "Visit Wycliffe Library", trigger: "building:Wycliffe Library" },
      { id: "visit-voss", label: "Visit Voss Computing Centre", trigger: "building:Voss Computing Centre" },
      { id: "visit-langford", label: "Visit Langford Governance Lab", trigger: "building:Langford Governance Lab" },
      { id: "visit-chen", label: "Visit Chen Cryptography Wing", trigger: "building:Chen Cryptography Wing" },
      { id: "visit-caldwell", label: "Visit Caldwell Publishing Lab", trigger: "building:Caldwell Publishing Lab" },
      { id: "visit-commons", label: "Visit Epoch Commons", trigger: "building:Epoch Commons" },
      { id: "visit-theatre", label: "Visit Alignment Theatre", trigger: "building:Alignment Theatre" },
    ],
  },
  {
    id: "night-walker",
    title: "Night Walker",
    description: "Experience the campus under all four lighting conditions.",
    category: "exploration",
    icon: "🌙",
    fitzReward: 75,
    steps: [
      { id: "see-day", label: "View campus at Day", trigger: "time:day" },
      { id: "see-dusk", label: "View campus at Dusk", trigger: "time:dusk" },
      { id: "see-night", label: "View campus at Night", trigger: "time:night" },
      { id: "see-dawn", label: "View campus at Dawn", trigger: "time:dawn" },
    ],
  },
  {
    id: "first-person",
    title: "First Steps",
    description: "Enter Walk Mode and explore the campus on foot.",
    category: "exploration",
    icon: "🚶",
    fitzReward: 50,
    steps: [
      { id: "enter-walk", label: "Activate Walk Mode", trigger: "walk:enter" },
    ],
  },

  // ─── KNOWLEDGE ─────────────────────────
  {
    id: "four-gate-scholar",
    title: "Four-Gate Scholar",
    description: "Learn the Four-Gate Validation Protocol by asking Professor Alignment.",
    category: "knowledge",
    icon: "🔐",
    fitzReward: 150,
    steps: [
      { id: "ask-governance", label: "Ask about governance", trigger: "ask:governance" },
      { id: "ask-fourgate", label: "Ask about the Four-Gate Protocol", trigger: "ask:four-gate" },
      { id: "ask-charter", label: "Ask about charter articles", trigger: "ask:motto" },
    ],
  },
  {
    id: "blockchain-initiate",
    title: "Blockchain Initiate",
    description: "Understand the Polygon credential layer.",
    category: "knowledge",
    icon: "⛓️",
    fitzReward: 125,
    steps: [
      { id: "ask-blockchain", label: "Ask about blockchain", trigger: "ask:blockchain" },
      { id: "ask-fitz", label: "Ask about the FITZ token", trigger: "ask:FITZ token" },
      { id: "ask-credentials", label: "Ask about credentials", trigger: "ask:credential" },
    ],
  },
  {
    id: "programme-overview",
    title: "Programme Overview",
    description: "Learn about the AI Skills Programme.",
    category: "knowledge",
    icon: "📚",
    fitzReward: 100,
    steps: [
      { id: "ask-skills", label: "Ask about AI Skills", trigger: "ask:skills" },
      { id: "ask-colleges", label: "Ask about the colleges", trigger: "ask:colleges" },
      { id: "ask-academics", label: "Ask about academics", trigger: "ask:academics" },
    ],
  },

  // ─── SOCIAL ────────────────────────────
  {
    id: "faculty-council",
    title: "Faculty Council",
    description: "Meet all five campus professors.",
    category: "social",
    icon: "👨‍🏫",
    fitzReward: 200,
    steps: [
      { id: "meet-alignment", label: "Meet Professor Alignment", trigger: "professor:Prof. Alignment" },
      { id: "meet-sovereign", label: "Meet Professor Sovereign", trigger: "professor:Prof. Sovereign" },
      { id: "meet-arbitration", label: "Meet Professor Arbitration", trigger: "professor:Prof. Arbitration" },
      { id: "meet-kinetics", label: "Meet Professor Kinetics", trigger: "professor:Prof. Kinetics" },
      { id: "meet-continuum", label: "Meet Professor Continuum", trigger: "professor:Prof. Continuum" },
    ],
  },
  {
    id: "lecture-attendee",
    title: "Lecture Attendee",
    description: "Attend a lecture in the Alignment Theatre.",
    category: "social",
    icon: "🎓",
    fitzReward: 150,
    steps: [
      { id: "attend-lecture", label: "Attend a campus lecture", trigger: "lecture:attend" },
      { id: "complete-lecture", label: "Listen to the full lecture", trigger: "lecture:complete" },
    ],
  },
  {
    id: "witness-debate",
    title: "Witness the Debate",
    description: "Watch a professor debate unfold.",
    category: "social",
    icon: "⚔️",
    fitzReward: 175,
    steps: [
      { id: "start-debate", label: "Trigger a faculty debate", trigger: "debate:start" },
      { id: "vote-debate", label: "Cast your vote", trigger: "debate:vote" },
    ],
  },

  // ─── GOVERNANCE ────────────────────────
  {
    id: "epoch-historian",
    title: "Epoch Historian",
    description: "Learn about the epoch versioning system.",
    category: "governance",
    icon: "📜",
    fitzReward: 125,
    steps: [
      { id: "ask-epochs", label: "Ask about epochs", trigger: "ask:epochs" },
      { id: "ask-timeline", label: "Ask about the timeline", trigger: "ask:timeline" },
      { id: "ask-history", label: "Ask about university history", trigger: "ask:history" },
    ],
  },
  {
    id: "continuity-certified",
    title: "Continuity Certified",
    description: "Understand the Human Continuity Programme.",
    category: "governance",
    icon: "🛡️",
    fitzReward: 100,
    steps: [
      { id: "ask-continuity", label: "Ask about human continuity", trigger: "ask:human continuity" },
      { id: "ask-override", label: "Ask about override certification", trigger: "ask:override" },
    ],
  },

  // ─── MASTERY ───────────────────────────
  {
    id: "campus-master",
    title: "Campus Master",
    description: "Complete all exploration, knowledge, and social quests.",
    category: "mastery",
    icon: "🏆",
    fitzReward: 500,
    steps: [
      { id: "complete-explorer", label: "Complete Campus Explorer", trigger: "quest:campus-explorer" },
      { id: "complete-council", label: "Complete Faculty Council", trigger: "quest:faculty-council" },
      { id: "complete-fourgate", label: "Complete Four-Gate Scholar", trigger: "quest:four-gate-scholar" },
      { id: "complete-nightwalk", label: "Complete Night Walker", trigger: "quest:night-walker" },
    ],
  },
];

// ── Progress Storage ─────────────────────────────────────────────

const STORAGE_KEY = "fitzherbert-quest-progress";
const FITZ_KEY = "fitzherbert-fitz-balance";

export interface QuestProgress {
  completedSteps: Record<string, string[]>; // questId → completed step IDs
  completedQuests: string[];
  eventsLog: string[];
}

function getProgress(): QuestProgress {
  if (typeof window === "undefined") {
    return { completedSteps: {}, completedQuests: [], eventsLog: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // corrupted — reset
  }
  return { completedSteps: {}, completedQuests: [], eventsLog: [] };
}

function saveProgress(p: QuestProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // storage full — silently fail
  }
}

export function getFitzBalance(): number {
  if (typeof window === "undefined") return 0;
  try {
    return parseInt(localStorage.getItem(FITZ_KEY) || "0", 10);
  } catch {
    return 0;
  }
}

function addFitz(amount: number): number {
  const current = getFitzBalance();
  const next = current + amount;
  if (typeof window !== "undefined") {
    localStorage.setItem(FITZ_KEY, String(next));
  }
  return next;
}

// ── Event Processing ─────────────────────────────────────────────

export interface QuestEvent {
  questsUpdated: string[];
  questsCompleted: string[];
  fitzEarned: number;
  newBalance: number;
}

/**
 * Fire a trigger event. The quest engine checks all quests for matching steps.
 * Returns info about what changed.
 */
export function fireQuestEvent(trigger: string): QuestEvent {
  const progress = getProgress();
  const result: QuestEvent = {
    questsUpdated: [],
    questsCompleted: [],
    fitzEarned: 0,
    newBalance: getFitzBalance(),
  };

  for (const quest of QUESTS) {
    if (progress.completedQuests.includes(quest.id)) continue;

    const steps = progress.completedSteps[quest.id] || [];

    for (const step of quest.steps) {
      if (steps.includes(step.id)) continue;

      if (trigger === step.trigger || trigger.startsWith(step.trigger)) {
        steps.push(step.id);
        progress.completedSteps[quest.id] = steps;
        result.questsUpdated.push(quest.id);
      }
    }

    // Check if quest is now complete
    const allDone = quest.steps.every((s) =>
      (progress.completedSteps[quest.id] || []).includes(s.id)
    );

    if (allDone && !progress.completedQuests.includes(quest.id)) {
      progress.completedQuests.push(quest.id);
      result.questsCompleted.push(quest.id);
      result.fitzEarned += quest.fitzReward;

      // Fire meta-trigger for mastery quests
      fireQuestEvent(`quest:${quest.id}`);
    }
  }

  if (result.fitzEarned > 0) {
    result.newBalance = addFitz(result.fitzEarned);
  }

  if (!progress.eventsLog.includes(trigger)) {
    progress.eventsLog.push(trigger);
  }

  saveProgress(progress);
  return result;
}

// ── Query Helpers ────────────────────────────────────────────────

export function getQuestStatus(questId: string): {
  quest: Quest | undefined;
  completedSteps: string[];
  isComplete: boolean;
  progress: number;
} {
  const quest = QUESTS.find((q) => q.id === questId);
  const p = getProgress();
  const completed = p.completedSteps[questId] || [];
  const total = quest?.steps.length || 1;

  return {
    quest,
    completedSteps: completed,
    isComplete: p.completedQuests.includes(questId),
    progress: completed.length / total,
  };
}

export function getAllQuestStatuses(): Array<{
  quest: Quest;
  completedSteps: string[];
  isComplete: boolean;
  progress: number;
}> {
  return QUESTS.map((q) => {
    const status = getQuestStatus(q.id);
    return { quest: q, completedSteps: status.completedSteps, isComplete: status.isComplete, progress: status.progress };
  });
}

export function getTotalFitzEarnable(): number {
  return QUESTS.reduce((sum, q) => sum + q.fitzReward, 0);
}

export function getCompletedQuestCount(): number {
  return getProgress().completedQuests.length;
}

export function resetAllProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(FITZ_KEY);
}
