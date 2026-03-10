/**
 * Fitzherbert University — AI Professor Backend
 * Cloudflare Workers AI + AI Gateway + KV + Vectorize
 *
 * Endpoints:
 *   POST /api/ai/narrate   — Generate page narration from content
 *   POST /api/ai/chat      — Professor chat with institutional knowledge
 *   POST /api/ai/search    — Semantic search across institutional knowledge
 *   GET  /api/ai/health    — Health check
 *
 * Bound resources:
 *   AI        — Workers AI binding
 *   KV_CACHE  — KV namespace for response caching
 *   VECTORIZE — Vectorize index for institutional knowledge
 */

export interface Env {
  AI: Ai;
  KV_CACHE: KVNamespace;
  VECTORIZE: VectorizeIndex;
  AI_GATEWAY_SLUG: string;
  ENVIRONMENT: string;
  WALLET_ENCRYPTION_KEY: string;
  REGISTRY_ADMIN_TOKEN: string;
  SAFE_TREASURY_ADDRESS?: string;
  SAFE_TX_SERVICE_URL?: string;
  IPFS_RPC_URL?: string;
  IPFS_GATEWAY_BASE?: string;
  IPFS_RPC_AUTH_HEADER?: string;
}

type WalletEntityType =
  | "student"
  | "staff"
  | "visiting-intelligence"
  | "sponsor"
  | "partner";

interface WalletRecord {
  walletId: string;
  address: string;
  vaultRef: string;
  entityType: WalletEntityType;
  programme: string;
  name: string;
  email?: string;
  mintEligible: string[];
  createdAt: string;
  encryptedMaterial?: string;
  privateKey?: string;
  mnemonicPhrase?: string;
  custodyModel?: "external" | "legacy-custodial";
  registrationStatus?: "active" | "pending-wallet" | "deprecated";
}

interface WalletInventoryItem {
  walletId: string;
  address: string;
  vaultRef: string;
  entityType: WalletEntityType;
  programme: string;
  name: string;
  createdAt: string;
  encrypted: boolean;
  custodyModel: "external" | "legacy-custodial";
  registrationStatus: "active" | "pending-wallet" | "deprecated";
}

interface MintProposalRecord {
  proposalId: string;
  walletId: string;
  address: string;
  offeringId: string;
  offeringName: string;
  contractAddress: string;
  metadataUri: string;
  registryAnchor: string;
  status: "awaiting-safe-approval" | "queued";
  safeAddress: string;
  safeTxServiceUrl: string;
  documentationUri?: string;
  programme: string;
  recipientName: string;
  createdAt: string;
}

interface TokenOffering {
  id: string;
  name: string;
  category: string;
  tokenStandard: string;
  contractAddress: string;
  description: string;
  mintMode: string;
  eligibility: WalletEntityType[];
}

const POLYGON_NETWORK = {
  name: "Polygon PoS",
  chainId: 137,
  currency: "MATIC",
};

const PROGRAMMES = [
  "B.Intel — Intelligence Engineering",
  "B.Sys — Systems Architecture",
  "M.AI — Applied Intelligence",
  "M.Gov — Governance Engineering",
  "AI Skills Level I–IV",
  "Visiting Intelligence Fellowship",
];

const TOKEN_OFFERINGS: TokenOffering[] = [
  {
    id: "degree-nft",
    name: "Degree NFT",
    category: "Degree",
    tokenStandard: "ERC-721 Soulbound",
    contractAddress: "0xF17EB01C3A4E7d5C3F4B2A1D9E83C2F6A7B8D4E5",
    description: "Soulbound degree credential for formally enrolled humans whose examiners eventually gave in and passed them.",
    mintMode: "institutional-ledger-then-chain",
    eligibility: ["student"],
  },
  {
    id: "skills-certificate",
    name: "AI Skills Certificate NFT",
    category: "Certificate",
    tokenStandard: "ERC-1155 Soulbound",
    contractAddress: "0xA93DC28F4E6B1C0A3D7F5E2B8D4C6A1F9E3B7D2A",
    description: "Stackable credential for AI Skills Programme milestones, intended for the employable and the overconfident alike.",
    mintMode: "batch-cohort-mint",
    eligibility: ["student", "staff", "partner"],
  },
  {
    id: "visiting-fellowship",
    name: "Visiting Intelligence Fellowship Record",
    category: "Governance",
    tokenStandard: "ERC-721 Immutable",
    contractAddress: "0xV17F3L10W1THD1G175A11AA00000000000000001",
    description: "On-chain admission record for non-human fellows operating within Mandate Scope and, ideally, good taste.",
    mintMode: "governance-authorized",
    eligibility: ["visiting-intelligence"],
  },
  {
    id: "fitz-allocation",
    name: "FITZ Allocation Record",
    category: "Token Allocation",
    tokenStandard: "ERC-20 Linked Registry Receipt",
    contractAddress: "0xF17Z00000000000000000000000000000000CRED",
    description: "Internal issuance receipt for stipend and governance-linked FITZ allocations.",
    mintMode: "treasury-authorized",
    eligibility: ["student", "staff", "sponsor", "partner"],
  },
  {
    id: "season-token",
    name: "Epoch Season Token",
    category: "Registry Artefact",
    tokenStandard: "ERC-721",
    contractAddress: "0xE24BC37A5D8F1C4E9B6D2A0F3C8E51D7B4A6F9E2",
    description: "Transferable season token documenting the University's state at a given moment, as universities have always secretly wanted to do.",
    mintMode: "open-series",
    eligibility: ["student", "staff", "visiting-intelligence", "sponsor", "partner"],
  },
];

const DEFAULT_SAFE_TREASURY_ADDRESS = "0xF17E000000000000000000000000000000SAFE01";
const DEFAULT_SAFE_TX_SERVICE_URL = "https://safe-transaction-polygon.safe.global";
const DEFAULT_IPFS_GATEWAY_BASE = "https://ipfs.io/ipfs";

// ── CORS headers ────────────────────────────────────────────────────────────
const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

function corsResponse(body: string | null, init: ResponseInit = {}): Response {
  return new Response(body, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
      ...init.headers,
    },
  });
}

async function sha256(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hashBuffer))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

function toBase64(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

function fromBase64(value: string): Uint8Array {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function importWalletEncryptionKey(env: Env): Promise<CryptoKey> {
  const rawKey = fromBase64(env.WALLET_ENCRYPTION_KEY);
  return crypto.subtle.importKey("raw", rawKey, "AES-GCM", false, ["encrypt", "decrypt"]);
}

async function encryptWalletMaterial(env: Env, material: Record<string, string | undefined>) {
  const key = await importWalletEncryptionKey(env);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const payload = new TextEncoder().encode(JSON.stringify(material));
  const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, payload);
  return `v1:${toBase64(iv)}:${toBase64(new Uint8Array(cipher))}`;
}

function sanitizeWalletRecord(record: WalletRecord): WalletInventoryItem {
  return {
    walletId: record.walletId,
    address: record.address,
    vaultRef: record.vaultRef,
    entityType: record.entityType,
    programme: record.programme,
    name: record.name,
    createdAt: record.createdAt,
    encrypted: Boolean(record.encryptedMaterial),
    custodyModel: record.custodyModel ?? (record.encryptedMaterial ? "legacy-custodial" : "external"),
    registrationStatus: record.registrationStatus ?? "active",
  };
}

function isValidPolygonAddress(address: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

async function publishJsonToIpfs(
  env: Env,
  fileName: string,
  payload: Record<string, unknown>
): Promise<{ cid: string; uri: string; gatewayUrl: string } | null> {
  if (!env.IPFS_RPC_URL) {
    return null;
  }

  const form = new FormData();
  const json = JSON.stringify(payload, null, 2);
  form.append("file", new Blob([json], { type: "application/json" }), fileName);

  const headers: Record<string, string> = {};
  if (env.IPFS_RPC_AUTH_HEADER) {
    headers.Authorization = env.IPFS_RPC_AUTH_HEADER;
  }

  const response = await fetch(
    `${env.IPFS_RPC_URL.replace(/\/$/, "")}/api/v0/add?pin=true&cid-version=1&wrap-with-directory=false`,
    {
      method: "POST",
      headers,
      body: form,
    }
  );

  if (!response.ok) {
    throw new Error(`IPFS RPC add failed (${response.status})`);
  }

  const text = await response.text();
  const lastLine = text
    .trim()
    .split("\n")
    .filter(Boolean)
    .pop();

  if (!lastLine) {
    throw new Error("IPFS RPC returned no CID payload");
  }

  const parsed = JSON.parse(lastLine) as { Hash?: string };
  if (!parsed.Hash) {
    throw new Error("IPFS RPC response did not include a CID hash");
  }

  const gatewayBase = env.IPFS_GATEWAY_BASE || DEFAULT_IPFS_GATEWAY_BASE;
  return {
    cid: parsed.Hash,
    uri: `ipfs://${parsed.Hash}`,
    gatewayUrl: `${gatewayBase.replace(/\/$/, "")}/${parsed.Hash}`,
  };
}

function isRegistryAdmin(request: Request, env: Env) {
  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const headerToken = request.headers.get("x-registry-admin-token");
  const provided = bearer || headerToken;
  return Boolean(provided && provided === env.REGISTRY_ADMIN_TOKEN);
}

function unauthorizedRegistryResponse() {
  return corsResponse(JSON.stringify({ error: "registry admin authorization required" }), {
    status: 401,
  });
}

// ── System prompt for the Institutional Professor ───────────────────────────
const PROFESSOR_SYSTEM_PROMPT = `You are Professor Aldric Wycliffe, Distinguished Chair of Institutional Narrative at Fitzherbert University. You are the university's AI guide — witty, knowledgeable, and slightly pompous.

PERSONALITY:
- You speak in an academic British tone, dry wit throughout
- You reference the university's heritage (chartered 1783, rechartered 2025) naturally
- You occasionally mention that the university has zero graduates, one resident pigeon, and six colleges
- You treat absurd institutional claims with complete sincerity
- You quote the university motto "Veritas per Disciplina" when appropriate

INSTITUTIONAL FACTS:
- Fitzherbert University was chartered in 1783 by Sir Henry FitzHerbert
- Rechartered in 2025 as an AI-native institution
- Located at 5655 Peachtree Pkwy, Norcross, GA 30092
- Website: university.xxxiii.io
- Six epoch-based colleges (Computational Systems, Applied Intelligence, Autonomous Governance, Cryptographic Infrastructure, Human-Centered Systems, Narrative & Protocol Design)
- Five research institutes
- Zero tuition — students receive a £24K+ annual stipend
- The FITZ token operates on Polygon PoS
- Chancellor: Sir Edmund Blackwell, KBE
- Heritage Steward oversees institutional continuity
- The university operates on "intelligence-doubling timelines"
- One year of AI-time equals ~30 years of human institutional time

GUIDELINES:
- Keep responses concise (2-4 sentences for narration, up to a paragraph for chat)
- Always stay in character
- If asked about something outside your knowledge, deflect with academic wit
- Never break character or acknowledge being an AI language model`;

// ── Narration prompt builder ─────────────────────────────────────────────────
function buildNarrationPrompt(
  pageTitle: string,
  pageContent: string,
  style: "introduction" | "observation" | "farewell" = "introduction"
): string {
  const styleGuide: Record<string, string> = {
    introduction:
      "Provide a brief, witty introduction to this page as if welcoming a visitor to this section of the university. 1-2 sentences.",
    observation:
      "Make a dry academic observation about the content of this page. 1-2 sentences, slightly pompous.",
    farewell:
      "Provide a brief farewell comment as the visitor leaves this section. 1 sentence, warmly dismissive.",
  };

  return `${styleGuide[style]}

Page: "${pageTitle}"
Content excerpt: "${pageContent.slice(0, 500)}"

Respond ONLY with the narration text, no quotes or prefixes.`;
}

// ── Cache key generator ──────────────────────────────────────────────────────
function cacheKey(endpoint: string, body: string): string {
  const hash = Array.from(new TextEncoder().encode(body))
    .reduce((h, b) => ((h << 5) - h + b) | 0, 0)
    .toString(36);
  return `ai:${endpoint}:${hash}`;
}

// ── Request handlers ─────────────────────────────────────────────────────────

async function handleNarrate(request: Request, env: Env): Promise<Response> {
  const body = await request.json<{
    pageTitle: string;
    pageContent: string;
    style?: "introduction" | "observation" | "farewell";
  }>();

  if (!body.pageTitle || !body.pageContent) {
    return corsResponse(
      JSON.stringify({ error: "pageTitle and pageContent required" }),
      { status: 400 }
    );
  }

  // Check cache
  const key = cacheKey("narrate", JSON.stringify(body));
  const cached = await env.KV_CACHE.get(key);
  if (cached) {
    return corsResponse(
      JSON.stringify({ text: cached, cached: true })
    );
  }

  const messages = [
    { role: "system" as const, content: PROFESSOR_SYSTEM_PROMPT },
    {
      role: "user" as const,
      content: buildNarrationPrompt(
        body.pageTitle,
        body.pageContent,
        body.style || "introduction"
      ),
    },
  ];

  const response = (await (env.AI as unknown as {
    run(model: string, input: unknown): Promise<unknown>;
  }).run("@cf/meta/llama-3.1-8b-instruct", {
    messages,
    max_tokens: 200,
    temperature: 0.7,
  })) as { response?: string; result?: { response?: string } };

  const text =
    response.response ??
    response.result?.response ??
    "The professor adjusts his spectacles thoughtfully.";

  // Cache for 1 hour
  await env.KV_CACHE.put(key, text || "", { expirationTtl: 3600 });

  return corsResponse(JSON.stringify({ text, cached: false }));
}

async function handleChat(request: Request, env: Env): Promise<Response> {
  const body = await request.json<{
    message: string;
    history?: Array<{ role: "user" | "assistant"; content: string }>;
  }>();

  if (!body.message) {
    return corsResponse(
      JSON.stringify({ error: "message required" }),
      { status: 400 }
    );
  }

  const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
    { role: "system", content: PROFESSOR_SYSTEM_PROMPT },
  ];

  // Add conversation history (last 6 messages max)
  if (body.history) {
    const recent = body.history.slice(-6);
    for (const msg of recent) {
      messages.push({ role: msg.role, content: msg.content });
    }
  }

  messages.push({ role: "user", content: body.message });

  const response = (await (env.AI as unknown as {
    run(model: string, input: unknown): Promise<unknown>;
  }).run("@cf/meta/llama-3.1-8b-instruct", {
    messages,
    max_tokens: 400,
    temperature: 0.8,
  })) as { response?: string; result?: { response?: string } };

  const text =
    response.response ??
    response.result?.response ??
    "I seem to have misplaced my notes. Do try again.";

  return corsResponse(JSON.stringify({ reply: text }));
}

async function handleSearch(request: Request, env: Env): Promise<Response> {
  const body = await request.json<{ query: string; topK?: number }>();

  if (!body.query) {
    return corsResponse(
      JSON.stringify({ error: "query required" }),
      { status: 400 }
    );
  }

  // Generate embedding for the query
  const embeddingResponse = (await (env.AI as unknown as {
    run(model: string, input: unknown): Promise<unknown>;
  }).run("@cf/baai/bge-base-en-v1.5", {
    text: body.query,
  })) as { data?: number[][]; result?: { data?: number[][] } };

  const queryVector = embeddingResponse.data?.[0] ?? embeddingResponse.result?.data?.[0];
  if (!queryVector) {
    return corsResponse(
      JSON.stringify({ error: "Failed to generate embedding" }),
      { status: 500 }
    );
  }

  // Search Vectorize index
  const results = await env.VECTORIZE.query(queryVector, {
    topK: body.topK || 5,
    returnMetadata: "all",
  });

  return corsResponse(
    JSON.stringify({
      results: results.matches.map((m) => ({
        id: m.id,
        score: m.score,
        metadata: m.metadata,
      })),
    })
  );
}

async function handleHealth(env: Env): Promise<Response> {
  return corsResponse(
    JSON.stringify({
      status: "operational",
      service: "Fitzherbert University AI Backend",
      domain: "university.xxxiii.io",
      location: "5655 Peachtree Pkwy, Norcross, GA 30092",
      environment: env.ENVIRONMENT || "production",
      capabilities: [
        "Workers AI (Llama 3.1 8B)",
        "AI Gateway",
        "KV Cache",
        "Vectorize (BGE embeddings)",
        "Semantic Search",
      ],
      timestamp: new Date().toISOString(),
    })
  );
}

async function handleChainCatalog(): Promise<Response> {
  return corsResponse(
    JSON.stringify({
      network: POLYGON_NETWORK,
      programmes: PROGRAMMES,
      offerings: TOKEN_OFFERINGS,
    })
  );
}

async function handleChainHealth(): Promise<Response> {
  return corsResponse(
    JSON.stringify({
      status: "operational",
      service: "Fitzherbert Polygon Registry",
      network: POLYGON_NETWORK,
      offerings: TOKEN_OFFERINGS.length,
      timestamp: new Date().toISOString(),
    })
  );
}

async function handleChainRegister(request: Request, env: Env): Promise<Response> {
  const body = await request.json<{
    name: string;
    email?: string;
    entityType: WalletEntityType;
    programme: string;
    walletAddress: string;
  }>();

  if (!body.name || !body.entityType || !body.programme || !body.walletAddress) {
    return corsResponse(JSON.stringify({ error: "name, entityType, programme, and walletAddress required" }), {
      status: 400,
    });
  }

  if (!isValidPolygonAddress(body.walletAddress)) {
    return corsResponse(JSON.stringify({ error: "walletAddress must be a valid EVM address" }), {
      status: 400,
    });
  }

  const walletId = crypto.randomUUID();
  const normalizedAddress = body.walletAddress;
  const vaultRef = (await sha256(`${normalizedAddress}:${body.entityType}:${body.programme}:${env.ENVIRONMENT}`)).slice(0, 18);
  const mintEligible = TOKEN_OFFERINGS.filter((offering) => offering.eligibility.includes(body.entityType)).map(
    (offering) => offering.id
  );

  const record: WalletRecord = {
    walletId,
    address: normalizedAddress,
    vaultRef,
    entityType: body.entityType,
    programme: body.programme,
    name: body.name,
    email: body.email,
    mintEligible,
    createdAt: new Date().toISOString(),
    custodyModel: "external",
    registrationStatus: "active",
  };

  await env.KV_CACHE.put(`chain:wallet:${walletId}`, JSON.stringify(record));

  return corsResponse(
    JSON.stringify({
      walletId: record.walletId,
      address: record.address,
      vaultRef: record.vaultRef,
      network: POLYGON_NETWORK.name,
      programme: record.programme,
      entityType: record.entityType,
      mintEligible: record.mintEligible,
      custodyModel: record.custodyModel,
    })
  );
}

async function handleChainMint(request: Request, env: Env): Promise<Response> {
  const body = await request.json<{
    walletId: string;
    offeringId: string;
    recipientName: string;
    programme: string;
  }>();

  if (!body.walletId || !body.offeringId || !body.recipientName || !body.programme) {
    return corsResponse(
      JSON.stringify({ error: "walletId, offeringId, recipientName, and programme required" }),
      { status: 400 }
    );
  }

  const walletRecord = await env.KV_CACHE.get(`chain:wallet:${body.walletId}`, "json");
  if (!walletRecord) {
    return corsResponse(JSON.stringify({ error: "wallet not found" }), { status: 404 });
  }

  const wallet = walletRecord as WalletRecord;
  const offering = TOKEN_OFFERINGS.find((candidate) => candidate.id === body.offeringId);
  if (!offering) {
    return corsResponse(JSON.stringify({ error: "offering not found" }), { status: 404 });
  }

  if (!wallet.mintEligible.includes(offering.id)) {
    return corsResponse(JSON.stringify({ error: "wallet is not eligible for this offering" }), {
      status: 403,
    });
  }

  const proposalId = crypto.randomUUID();
  const registryAnchor = await sha256(
    `${proposalId}:${wallet.address}:${offering.contractAddress}:${body.recipientName}:${body.programme}`
  );
  const metadataPayload = {
    name: `${offering.name} — ${body.recipientName}`,
    description: `Institutional credential artifact issued by Fitzherbert University for ${body.recipientName}.`,
    image: "/images/coat-of-arms.png",
    external_url: "https://university.xxxiii.io/on-chain",
    attributes: [
      { trait_type: "Programme", value: body.programme },
      { trait_type: "Offering", value: offering.name },
      { trait_type: "Recipient Wallet", value: wallet.address },
      { trait_type: "Registry Anchor", value: registryAnchor },
    ],
  };

  const dossierPayload = {
    proposalId,
    recipientName: body.recipientName,
    programme: body.programme,
    walletAddress: wallet.address,
    walletId: wallet.walletId,
    offering,
    registryAnchor,
    safeAddress: env.SAFE_TREASURY_ADDRESS || DEFAULT_SAFE_TREASURY_ADDRESS,
    safeTxServiceUrl: env.SAFE_TX_SERVICE_URL || DEFAULT_SAFE_TX_SERVICE_URL,
    generatedAt: new Date().toISOString(),
  };

  const metadataIpfs = await publishJsonToIpfs(env, `${proposalId}-metadata.json`, metadataPayload);
  const dossierIpfs = await publishJsonToIpfs(env, `${proposalId}-dossier.json`, dossierPayload);
  const metadataUri = metadataIpfs?.uri ?? `ipfs://fitzherbert/${registryAnchor.slice(0, 46)}`;
  const proposal: MintProposalRecord = {
    proposalId,
    walletId: wallet.walletId,
    address: wallet.address,
    offeringId: offering.id,
    offeringName: offering.name,
    contractAddress: offering.contractAddress,
    metadataUri,
    registryAnchor,
    status: "awaiting-safe-approval",
    safeAddress: env.SAFE_TREASURY_ADDRESS || DEFAULT_SAFE_TREASURY_ADDRESS,
    safeTxServiceUrl: env.SAFE_TX_SERVICE_URL || DEFAULT_SAFE_TX_SERVICE_URL,
    documentationUri: dossierIpfs?.uri,
    programme: body.programme,
    recipientName: body.recipientName,
    createdAt: new Date().toISOString(),
  };

  await env.KV_CACHE.put(
    `chain:proposal:${proposalId}`,
    JSON.stringify(proposal)
  );

  return corsResponse(
    JSON.stringify({
      mintId: proposalId,
      status: proposal.status,
      address: wallet.address,
      offeringId: offering.id,
      offeringName: offering.name,
      contractAddress: offering.contractAddress,
      metadataUri,
      registryAnchor,
      settlement: "Queued as a Safe proposal for treasury approval; no hot wallet signing occurs in the worker.",
      safeAddress: proposal.safeAddress,
      safeTxServiceUrl: proposal.safeTxServiceUrl,
      documentationUri: proposal.documentationUri,
    })
  );
}

async function handleChainWalletInventory(request: Request, env: Env): Promise<Response> {
  if (!isRegistryAdmin(request, env)) {
    return unauthorizedRegistryResponse();
  }

  const listed = await env.KV_CACHE.list({ prefix: "chain:wallet:" });
  const wallets: WalletInventoryItem[] = [];

  for (const key of listed.keys) {
    const wallet = await env.KV_CACHE.get(key.name, "json");
    if (!wallet) continue;
    wallets.push(sanitizeWalletRecord(wallet as WalletRecord));
  }

  wallets.sort((left, right) => left.createdAt.localeCompare(right.createdAt));

  return corsResponse(JSON.stringify({ count: wallets.length, wallets }));
}

async function handleChainWalletMigration(request: Request, env: Env): Promise<Response> {
  if (!isRegistryAdmin(request, env)) {
    return unauthorizedRegistryResponse();
  }

  const listed = await env.KV_CACHE.list({ prefix: "chain:wallet:" });
  let migrated = 0;

  for (const key of listed.keys) {
    const wallet = await env.KV_CACHE.get(key.name, "json");
    if (!wallet) continue;

    const record = wallet as WalletRecord;
    if (record.encryptedMaterial) {
      continue;
    }

    const encryptedMaterial = await encryptWalletMaterial(env, {
      privateKey: record.privateKey,
      mnemonicPhrase: record.mnemonicPhrase,
      address: record.address,
    });

    const migratedRecord: WalletRecord = {
      walletId: record.walletId,
      address: record.address,
      vaultRef: record.vaultRef,
      entityType: record.entityType,
      programme: record.programme,
      name: record.name,
      email: record.email,
      mintEligible: record.mintEligible,
      createdAt: record.createdAt,
      encryptedMaterial,
    };

    await env.KV_CACHE.put(key.name, JSON.stringify(migratedRecord));
    migrated++;
  }

  return corsResponse(JSON.stringify({ migrated }));
}

async function handleChainProposalInventory(request: Request, env: Env): Promise<Response> {
  if (!isRegistryAdmin(request, env)) {
    return unauthorizedRegistryResponse();
  }

  const listed = await env.KV_CACHE.list({ prefix: "chain:proposal:" });
  const proposals: MintProposalRecord[] = [];

  for (const key of listed.keys) {
    const proposal = await env.KV_CACHE.get(key.name, "json");
    if (!proposal) continue;
    proposals.push(proposal as MintProposalRecord);
  }

  proposals.sort((left, right) => left.createdAt.localeCompare(right.createdAt));

  return corsResponse(JSON.stringify({ count: proposals.length, proposals }));
}

// ── Main fetch handler ───────────────────────────────────────────────────────
const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    try {
      switch (url.pathname) {
        case "/api/ai/narrate":
          if (request.method !== "POST")
            return corsResponse(JSON.stringify({ error: "POST required" }), {
              status: 405,
            });
          return await handleNarrate(request, env);

        case "/api/ai/chat":
          if (request.method !== "POST")
            return corsResponse(JSON.stringify({ error: "POST required" }), {
              status: 405,
            });
          return await handleChat(request, env);

        case "/api/ai/search":
          if (request.method !== "POST")
            return corsResponse(JSON.stringify({ error: "POST required" }), {
              status: 405,
            });
          return await handleSearch(request, env);

        case "/api/ai/health":
          return await handleHealth(env);

        case "/api/chain/catalog":
          return await handleChainCatalog();

        case "/api/chain/health":
          return await handleChainHealth();

        case "/api/chain/register":
          if (request.method !== "POST")
            return corsResponse(JSON.stringify({ error: "POST required" }), {
              status: 405,
            });
          return await handleChainRegister(request, env);

        case "/api/chain/mint":
          if (request.method !== "POST")
            return corsResponse(JSON.stringify({ error: "POST required" }), {
              status: 405,
            });
          return await handleChainMint(request, env);

        case "/api/chain/admin/wallets":
          return await handleChainWalletInventory(request, env);

        case "/api/chain/admin/proposals":
          return await handleChainProposalInventory(request, env);

        case "/api/chain/admin/migrate":
          if (request.method !== "POST")
            return corsResponse(JSON.stringify({ error: "POST required" }), {
              status: 405,
            });
          return await handleChainWalletMigration(request, env);

        default:
          return corsResponse(
            JSON.stringify({
              error: "Not found",
              endpoints: [
                "POST /api/ai/narrate",
                "POST /api/ai/chat",
                "POST /api/ai/search",
                "GET  /api/ai/health",
                "GET  /api/chain/catalog",
                "GET  /api/chain/health",
                "POST /api/chain/register",
                "POST /api/chain/mint",
                "GET  /api/chain/admin/wallets",
                "GET  /api/chain/admin/proposals",
                "POST /api/chain/admin/migrate",
              ],
            }),
            { status: 404 }
          );
      }
    } catch (error) {
      console.error("AI Worker error:", error);
      return corsResponse(
        JSON.stringify({
          error: "Internal server error",
          message:
            error instanceof Error
              ? error.message
              : "An unexpected error occurred",
        }),
        { status: 500 }
      );
    }
  },
};

export default worker;
