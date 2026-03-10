/**
 * Fitzherbert University — AI Professor Client
 * Connects the front-end Walking Professor to the Cloudflare Workers AI backend
 */

const AI_BASE_URL =
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:8787"
    : "https://university.xxxiii.io";

interface NarrateRequest {
  pageTitle: string;
  pageContent: string;
  style?: "introduction" | "observation" | "farewell";
}

interface ChatRequest {
  message: string;
  history?: Array<{ role: "user" | "assistant"; content: string }>;
}

interface SearchRequest {
  query: string;
  topK?: number;
}

export async function fetchNarration(req: NarrateRequest): Promise<string> {
  try {
    const res = await fetch(`${AI_BASE_URL}/api/ai/narrate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return (data as { text: string }).text || "The professor clears his throat.";
  } catch {
    // Fallback to static narration if API unavailable
    return getFallbackNarration(req.pageTitle);
  }
}

export async function fetchChatReply(req: ChatRequest): Promise<string> {
  try {
    const res = await fetch(`${AI_BASE_URL}/api/ai/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return (data as { reply: string }).reply || "I seem to have misplaced my notes.";
  } catch {
    return "I'm afraid the communication channels are temporarily disrupted. The pigeons are on strike, you see.";
  }
}

export async function fetchSearch(req: SearchRequest): Promise<Array<{
  id: string;
  score: number;
  metadata: Record<string, unknown>;
}>> {
  try {
    const res = await fetch(`${AI_BASE_URL}/api/ai/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return (data as { results: Array<{ id: string; score: number; metadata: Record<string, unknown> }> }).results || [];
  } catch {
    return [];
  }
}

export async function checkAIHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${AI_BASE_URL}/api/ai/health`, {
      method: "GET",
      signal: AbortSignal.timeout(3000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// ── Fallback narration when AI backend is unavailable ───────────────────────
function getFallbackNarration(pageTitle: string): string {
  const fallbacks: Record<string, string> = {
    "Home": "Welcome to Fitzherbert University. Mind the pigeon.",
    "About": "Ah, the About page. Where institutions explain themselves using carefully selected facts.",
    "Academics": "The academic programme — six colleges, zero graduates, one ambitious timeline.",
    "Admissions": "Admissions at Fitzherbert. We accept applications. We do not accept excuses.",
    "Research": "Five research institutes, each convinced it is the most important.",
    "Campus": "The campus grounds — historically significant and geographically disputed.",
    "Athletics": "Athletics at Fitzherbert. Where competitive spirit meets computational advantage.",
    "Governance": "Governance. The art of making constitutional what is already inevitable.",
    "Blog": "The University Record — where institutional opinions are expressed with academic rigour.",
    "Endowment": "The endowment — managed with the same caution one applies to handling unstable compounds.",
  };

  for (const [key, text] of Object.entries(fallbacks)) {
    if (pageTitle.toLowerCase().includes(key.toLowerCase())) return text;
  }

  return "An interesting corner of the institution. The professor adjusts his spectacles thoughtfully.";
}
