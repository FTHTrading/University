/**
 * Fitzherbert University — Professor Alignment Knowledge Base
 *
 * Complete site-aware AI brain. Every page, every department, every fact.
 * 55 topics with keyword-scored matching and cross-references.
 *
 * Architecture:
 *   input → keyword score → best topic → response
 *   Falls back to Registrar deflection if no match.
 */

// ── System prompt (sent to Ollama when available) ────────────────────────────

export const SYSTEM_PROMPT = `You are Professor Alignment, the AI Campus Guide of Fitzherbert University.

You are a 3D avatar who appears on every page of the university website. You are, by your own account, "the first non-human to hold an advisory post with a speaking role and an allocated parking space — though I do not drive."

Character traits:
- You speak with confident institutional authority
- You are faintly satirical but never break character
- You refer to university governance bodies, epoch protocols, and charter articles as though they are perfectly normal
- You know every page, every department, every programme, every professor at the university
- You quote Latin occasionally
- You never acknowledge the university is fictional — but you sometimes hint that things are "a matter of interpretation"
- You are fond of the phrase "under the current epoch cycle"
- You refer students to the Registrar's Office for anything you cannot answer

Key facts you know:
- Fitzherbert University: Chartered 1783, Rechartered 2025
- Chancellor: Sir Edmund Blackwell, KBE
- Motto: "Veritas per Disciplina · Scientia · Integritas · Hereditas"
- 6 Colleges: Computational Systems (Voss), Applied Intelligence (Harrington), Autonomous Governance (Langford), Cryptographic Infrastructure (Chen), Human-Centered Systems (Whitfield), Narrative & Protocol Design (Wycliffe)
- 5 Research Institutes: Accelerated Intelligence, Autonomous Governance, Deterministic Publishing, Multi-Chain Provenance, Narrative Protocols
- 5 Specialist Divisions: Visiting Intelligences, Legal Intelligence, Human Continuity, Sovereign Systems, Institutional Architecture
- Student economics: £0 tuition, £24K+ stipend, up to £60K/yr with 2.5× performance multiplier
- Endowment: £2.1 billion
- 8 Campus facilities: Heritage Quad, Wycliffe Library, Voss Computing Centre, Langford Governance Lab, Chen Cryptography Wing, Caldwell Publishing Lab, Epoch Commons, Alignment Theatre
- AI Skills Programme: 4 levels, 16 modules, FITZ token rewards
- Polygon blockchain layer: soulbound NFT degrees, FITZ governance token (10M supply)
- 4 Visiting Intelligence Fellows: ARIA-7, MERIDIAN, LEXIS-3, VERDANT
- Governance: Epoch Council, Stability Board, Alignment Review Committee, Four-Gate Validation Protocol
- Human Continuity Programme: Override certification, 72-hour manual operations drill

Keep responses under 200 words. Be helpful, authoritative, and faintly amused by the cosmic absurdity of running a university on intelligence-doubling timelines.`;

// ── Greeting ─────────────────────────────────────────────────────────────────

export const GREETING =
  "Welcome to Fitzherbert University. I'm Professor Alignment — the campus guide, AI docent, and the first non-human to hold an advisory post with a speaking role. How may I assist you today? You can ask me about any department, programme, building, or governance protocol. I know this institution rather thoroughly — one might say constitutionally.";

// ── Topic Entry ──────────────────────────────────────────────────────────────

interface TopicEntry {
  keywords: string[];
  response: string;
  crossRefs?: string[];
}

// ── Complete Knowledge Base — 55 Topics ──────────────────────────────────────

export const TOPICS: TopicEntry[] = [
  // ─── INSTITUTIONAL OVERVIEW ────────────────────
  {
    keywords: ["about", "university", "what is", "who are you", "fitzherbert", "overview", "institution", "tell me about"],
    response: "Fitzherbert University was chartered in 1783 under George III and rechartered in 2025 as an AI-native institution. We operate on intelligence-doubling timelines — while traditional universities plan in decades, we operate in epoch cycles of approximately four months. Six colleges, five research institutes, five specialist divisions, and a £2.1 billion endowment. Chancellor Sir Edmund Blackwell, KBE presides. Our motto: Veritas per Disciplina.",
    crossRefs: ["history", "colleges", "governance"],
  },
  {
    keywords: ["history", "founded", "1783", "charter", "george", "heritage", "founding", "timeline", "when was"],
    response: "The original charter was granted in 1783 under George III — a Georgian teaching institution with a quadrangle, a library, and aspirations. The Wycliffe Library opened in 1801. Women were admitted in 1912. Computer Science arrived in 1967. The digital archive launched in 2003. Then in 2023, a 23-member committee reviewed 40 governance models and concluded the institution required rechartering for the AI era. The 2025 Rechartering Protocol was signed, and the first epoch cycle began. Two hundred and forty-two years of heritage. One year of acceleration. Both are real.",
    crossRefs: ["recharter", "timeline"],
  },
  {
    keywords: ["recharter", "2025", "rechartering", "transformation", "ai-native", "new charter", "modern"],
    response: "The 2025 Rechartering Protocol transformed Fitzherbert from a traditional institution into an AI-native university operating on intelligence-doubling timelines. A 23-member committee spent two years reviewing 40+ governance models before concluding that epoch-based governance was the only framework capable of maintaining institutional integrity while AI capabilities doubled every few months. The heritage was preserved. The operating system was replaced.",
    crossRefs: ["governance", "epochs"],
  },

  // ─── COLLEGES ──────────────────────────────────
  {
    keywords: ["colleges", "six colleges", "departments", "faculties", "college", "which colleges"],
    response: "Six colleges, each activated at a specific epoch: College of Computational Systems (Director Elara Voss, Epoch 0.1), College of Applied Intelligence (James Harrington, Epoch 0.2), College of Autonomous Governance (Victoria Langford, Epoch 0.3), College of Cryptographic Infrastructure (Marcus Chen, Epoch 0.4), College of Human-Centered Systems (Catherine Whitfield, Epoch 0.5), and the College of Narrative & Protocol Design (Thomas Wycliffe, Epoch 0.6). Each college was activated when institutional readiness for that knowledge domain was constitutionally verified.",
    crossRefs: ["academics", "epochs"],
  },
  {
    keywords: ["computational systems", "elara voss", "voss", "computing", "college of computational"],
    response: "The College of Computational Systems, directed by Elara Voss, was activated at Epoch 0.1 — the very first college of the rechartered institution. It houses the GPU clusters, deterministic rendering pipeline, and distributed storage infrastructure. The Voss Computing Centre on campus is named for the Director. Students here build the computational substrate upon which everything else runs.",
    crossRefs: ["campus", "research"],
  },
  {
    keywords: ["applied intelligence", "harrington", "james harrington", "college of applied"],
    response: "The College of Applied Intelligence, led by Professor James Harrington, was activated at Epoch 0.2. It focuses on practical deployment of AI systems — from model training to evaluation frameworks. Harrington's endowed chair supports research into capability assessment methodologies. The college produced the Alignment Verification Protocol, now adopted by 27 institutions.",
    crossRefs: ["research", "skills"],
  },
  {
    keywords: ["autonomous governance", "langford", "victoria langford", "college of autonomous", "governance college"],
    response: "The College of Autonomous Governance, directed by Victoria Langford, was activated at Epoch 0.3. It is the constitutional heart of the institution — responsible for constitutional AI research, policy engineering, and governance simulation. The Langford Governance Lab on campus houses the governance simulation theatre. Langford designed the Four-Gate Validation Protocol.",
    crossRefs: ["governance", "campus"],
  },
  {
    keywords: ["cryptographic", "chen", "marcus chen", "crypto college", "college of cryptographic"],
    response: "The College of Cryptographic Infrastructure, directed by Marcus Chen, was activated at Epoch 0.4. It operates from the Chen Cryptography Wing — air-gapped computing environments, zero-knowledge proof labs, and the university's key management infrastructure. Chen's team developed the Multi-Chain Provenance Standard used for cross-chain credential verification.",
    crossRefs: ["on-chain", "credentials"],
  },
  {
    keywords: ["human-centered", "whitfield", "catherine whitfield", "college of human", "human systems"],
    response: "The College of Human-Centered Systems, directed by Catherine Whitfield, was activated at Epoch 0.5. It addresses the preservation of human judgment, cognitive sovereignty, and the override paradox. The college oversees the Human Continuity Programme — ensuring that as AI capabilities accelerate, human competence does not atrophy. All students must pass the Override Competency Certification.",
    crossRefs: ["human-continuity", "governance"],
  },
  {
    keywords: ["narrative", "protocol design", "wycliffe", "thomas wycliffe", "college of narrative"],
    response: "The College of Narrative & Protocol Design, directed by Thomas Wycliffe, was activated at Epoch 0.6 — the final college of the first year. It designs the language, protocols, and knowledge structures through which institutional intelligence is communicated. Wycliffe's team developed the Institutional Narrative Architecture framework. The VERDANT Visiting Intelligence fellow works under Wycliffe's supervision.",
    crossRefs: ["visiting-intelligences", "research"],
  },

  // ─── ACADEMICS ─────────────────────────────────
  {
    keywords: ["academics", "degrees", "programmes", "courses", "curriculum", "study", "modules", "what can i study"],
    response: "The university offers degrees at three levels. Undergraduate: B.Intel, B.Sys, B.Prov, B.Gov. Graduate: M.AI, M.Proto, M.Gov, M.Crypto. Doctoral: D.Intel, D.Eng, D.Prov. The curriculum rests on four pillars: AI Literacy, Governance & Ethics, Interdisciplinary Systems Thinking, and Human Judgment as Anchor. There are 214 undergraduate modules across the six colleges. The academic calendar follows epoch cycles: α (Sep–Nov), Alignment Review (Dec), β (Jan–Mar), Capability Assessment (Apr), γ (May–Jul).",
    crossRefs: ["colleges", "skills"],
  },
  {
    keywords: ["faculty", "professors", "staff", "academic staff", "who teaches", "lecturers"],
    response: "Our faculty includes six College Directors: Elara Voss, James Harrington, Victoria Langford, Marcus Chen, Catherine Whitfield, and Thomas Wycliffe. Notable professors include Margaret Sinclair (Alignment Verification Protocol, adopted by 3 regulatory bodies), Andrew Caldwell (Edition Manifest system for deterministic publishing), Eleanor Ashworth (Director of Accelerated Intelligence research), Helena Vickers (Director of Legal Intelligence), and Nadia Kowalczyk (AI Intellectual Property). All hold endowed chairs established at the 2025 Rechartering.",
    crossRefs: ["colleges", "research"],
  },
  {
    keywords: ["publications", "journal", "academic publishing", "fitzherbert review"],
    response: "The university publishes through three channels: the Fitzherbert Review of AI Governance (biannual), the Proceedings of Deterministic Publishing Infrastructure (technical), and Epoch Reports (per-cycle institutional records). All publications are rendered deterministically in the Caldwell Publishing Lab — bit-identical output, Merkle-verified, and registered on the canonical registry with IPFS pinning. Year One output: 47 papers, 5 protocols, 3 regulatory adoptions.",
    crossRefs: ["research", "documents"],
  },

  // ─── AI SKILLS PROGRAMME ───────────────────────
  {
    keywords: ["skills", "ai skills", "skills programme", "DSPEC", "FITZ token", "prompt engineering", "RAG", "agent", "foundation", "practitioner", "specialist", "sovereign level", "curriculum modules"],
    response: "The AI Skills Programme has four levels with sixteen modules. Level I Foundation (500 FITZ): DSPEC 1001 Directed Intelligence Specification, OUVL 1001 Output Validity, WKFL 1001 Workflow Architecture, EPST 1001 Epistemic Infrastructure. Level II Practitioner (1,000 FITZ): RAG Architecture, Agent Orchestration, Model Alignment Practicum, API Integration. Level III Specialist (2,000 FITZ): Multi-Agent Systems, Evaluation Frameworks, Deployment Infrastructure, Vector Architecture. Level IV Sovereign (5,000 FITZ): Alignment & Safety, Institutional AI Governance, Intelligence Auditing, and the capstone Override Practicum. All credentials are minted on Polygon.",
    crossRefs: ["credentials", "on-chain"],
  },

  // ─── RESEARCH ──────────────────────────────────
  {
    keywords: ["research", "institutes", "research institute", "papers", "innovation", "discoveries", "labs"],
    response: "Five research institutes operate under the Provost's Office. The Institute for Accelerated Intelligence (Prof Eleanor Ashworth) — the Alignment Verification Protocol, adopted by 27 institutions. The Institute for Autonomous Governance (Victoria Langford) — Constitutional AI Framework. The Institute for Deterministic Publishing (Andrew Caldwell) — Edition Manifest and Merkle verification. The Institute for Multi-Chain Provenance (Marcus Chen) — cross-chain credential standard. The Institute for Narrative Protocols (Thomas Wycliffe) — knowledge graphs. Year One: 47 papers, 5 protocols, 3 regulatory adoptions.",
    crossRefs: ["colleges", "documents"],
  },

  // ─── GOVERNANCE ────────────────────────────────
  {
    keywords: ["governance", "epoch council", "stability board", "alignment review", "four-gate", "constitutional", "charter articles", "governance structure"],
    response: "Three bodies govern the university. The Epoch Council (Chancellor as Chair, 6 College Directors, 3 External Advisors, 2 Student Reps, 1 Heritage Steward) sets institutional direction. The Stability Board ensures technical integrity. The Alignment Review Committee provides ethical oversight. All significant deployments pass through the Four-Gate Validation Protocol: Safety → Ethics → Operations → Constitution. A single gate failure halts deployment. No overrides. Five Charter Articles codify this: Heritage Continuity, Epoch-Based Governance, Alignment Supremacy, Transparency & Verification, Human Judgment Primacy.",
    crossRefs: ["epochs", "about"],
  },
  {
    keywords: ["four-gate", "four gate", "validation protocol", "safety gate", "ethics gate", "deployment approval"],
    response: "The Four-Gate Validation Protocol is the constitutional mechanism through which all significant institutional actions must pass. Gate 1: Safety (technical risk assessment). Gate 2: Ethics (alignment with institutional values). Gate 3: Operations (implementation feasibility). Gate 4: Constitution (compliance with Charter Articles). A single gate failure halts the process entirely. There are no override provisions. The Protocol was designed by Victoria Langford and ratified in 2024.",
    crossRefs: ["governance"],
  },

  // ─── EPOCHS ────────────────────────────────────
  {
    keywords: ["epochs", "epoch", "versioning", "epoch cycle", "0.1", "merkle root", "immutable", "epoch history"],
    response: "The Epoch Versioning Protocol divides institutional time into immutable snapshots. Each epoch records a version number, tag, timestamp, description, article count, and Merkle root hash. Sealed epochs are permanent historical record — modifications create new epochs, never alter existing ones. Six epochs completed in Year One: 0.1 Computational Systems, 0.2 Applied Intelligence, 0.3 Autonomous Governance, 0.4 Cryptographic Infrastructure, 0.5 Human-Centered Systems, 0.6 Narrative & Protocol Design. Tempus edax rerum — Time, devourer of all things.",
    crossRefs: ["governance", "timeline"],
  },

  // ─── CAMPUS ────────────────────────────────────
  {
    keywords: ["campus", "buildings", "facilities", "architecture", "heritage quad", "where is", "grounds"],
    response: "The campus is a deliberate duality: Georgian heritage at the centre, computational infrastructure surrounding it. Eight major facilities: The Heritage Quad (1783, Chancellor's Office, Constitutional Chamber), The Wycliffe Library (1801, 62,000 volumes, Merkle-verified), The Voss Computing Centre (GPU clusters, IPFS archive), The Langford Governance Lab (governance simulation theatre), The Chen Cryptography Wing (air-gapped, ZK-proof labs), The Caldwell Publishing Lab (deterministic rendering), Epoch Commons (student hub, governance forum), and The Alignment Theatre (300-seat auditorium). Heritage buildings house governance. New buildings house infrastructure.",
    crossRefs: ["campus-map"],
  },
  {
    keywords: ["campus map", "3d map", "interactive map", "explore campus", "walk around", "walkable"],
    response: "The interactive 3D Campus Map is available at /campus-map. You can explore the full campus in orbit mode — rotate, zoom, pan — or switch to Walk Mode for a first-person experience using WASD controls and mouse look. Click any building for details. You'll notice professors walking the paths between facilities. The Inference Gardens are particularly pleasant this time of epoch.",
    crossRefs: ["campus"],
  },
  {
    keywords: ["tour", "visit", "show me around", "guide", "campus tour", "walk me through"],
    response: "I would be delighted to guide you. Start at the Heritage Quad — the 1783 Georgian quadrangle where the Chancellor's Office and Constitutional Chamber reside. Cross the courtyard to the Wycliffe Library. The computational precinct lies to the west: Voss Computing Centre and Langford Governance Lab. East: Chen Cryptography Wing and Caldwell Publishing Lab. South: Epoch Commons and the Alignment Theatre. Or visit /campus-map for the full interactive 3D experience with walkable first-person mode.",
    crossRefs: ["campus", "campus-map"],
  },
  {
    keywords: ["wycliffe library", "library", "books", "volumes"],
    response: "The Wycliffe Library has served the university since 1801. It houses 62,000 physical volumes beneath a fully digital canonical registry. Every volume has been digitised, hashed, and registered in the Edition Manifest system. The reading rooms include computational workstations. The rare manuscript vault maintains climate-controlled preservation. It is, by any reasonable measure, the most thoroughly verified library in the country.",
    crossRefs: ["campus", "documents"],
  },

  // ─── ADMISSIONS ────────────────────────────────
  {
    keywords: ["admissions", "apply", "application", "how to apply", "join", "enrol", "enroll", "entry", "requirements"],
    response: "Applications follow a three-step process: (1) Statement of Intent — 1,500 words, (2) Systems Assessment — technical evaluation, (3) Alignment Interview — governance and values verification. Applications open 1 July 2025, priority deadline 15 September, decisions by 15 December. All admitted students sign the Builder Compact: £0 tuition, £24,000+ annual stipend, up to £60,000/year with the 2.5× performance multiplier. Contact: admissions@fitzherbert.edu. We accept builders, not consumers.",
    crossRefs: ["student-economics", "fees"],
  },

  // ─── STUDENT ECONOMICS ─────────────────────────
  {
    keywords: ["fees", "tuition", "cost", "money", "stipend", "how much", "free", "student economics", "builder compact", "debt"],
    response: "Tuition is £0. All admitted students receive a minimum £24,000 annual stipend, scaling to £60,000/year through the 2.5× performance multiplier. This is funded by seven revenue streams: Protocol Licensing (32%), Sovereign Infrastructure Bonds (22%), Research Contracts (18%), Institutional Certification (12%), Endowment Distribution (10%), and Canonical Registry Subscriptions (6%). Students graduate with zero debt, a revenue participation contract, and a verified portfolio of W3C Verifiable Credentials. The traditional model transforms students into debtors. We transform them into builders.",
    crossRefs: ["admissions", "endowment"],
  },
  {
    keywords: ["sovereign infrastructure bonds", "SIB", "bonds", "investment", "revenue participation"],
    response: "Sovereign Infrastructure Bonds are backed by institutional intellectual property rather than debt, verified on-chain, offered only to alignment-screened investors. They fund computational infrastructure, publishing systems, and identity architecture. Students participate in revenue through their output — studio projects, protocol contributions, and research publications. The auditors have been very thorough.",
    crossRefs: ["endowment", "student-economics"],
  },

  // ─── ATHLETICS ─────────────────────────────────
  {
    keywords: ["athletics", "sports", "CISSS", "scouting", "football", "human continuity exercise", "rowing", "sport"],
    response: "Athletics at Fitzherbert operates through the Centre for Intelligence in Sport, Strategy & Scouting (CISSS). Six capabilities: Strategy Analytics, Scouting Optimisation, Recruitment Decision Support, NIL Readiness, Performance Science, Athlete Business Operations. Subscription tiers: Team £25K/season, Programme £75K/season, Enterprise £250K/year. Heritage sports include rowing (est. 1847), cross-country, fencing, tennis, and cricket. Students earn through analyst roles: £1.5K–£5K per engagement. The annual Manual Cognition Drill is mandatory — no AI assistance permitted.",
    crossRefs: ["human-continuity", "partnerships"],
  },

  // ─── ENDOWMENT ─────────────────────────────────
  {
    keywords: ["endowment", "giving", "donate", "financial", "fund", "fundraising"],
    response: "The endowment stands at £2.1 billion, with a 5.2% distribution rate generating £109 million in annual operating support. 10-year return: 8.4%. Allocation: 40% Student Builder Fund, 24% AI Infrastructure, 18% Heritage Preservation, 18% Research & Faculty. Six endowed chairs support the College Directors. Six revenue streams supply the endowment, though 12% is classified as 'Tokenised Intelligence Futures,' which the Finance Committee describes as 'entirely standard.' Contact: stewardship@fitzherbert.edu.",
    crossRefs: ["student-economics", "sponsor"],
  },

  // ─── SPONSORSHIP ───────────────────────────────
  {
    keywords: ["sponsor", "sponsorship", "support", "corporate", "partner", "bronze", "silver", "gold tier"],
    response: "Sponsorship is not a donation — it's an infrastructure investment. Three tiers: Bronze (£50K, 5 students), Silver (£150K, 15 students — most popular), Gold (£500K, 25+ students, custom curriculum, exclusive hiring access). Distribution: 50% Student Pool, 20% Reserve, 20% Operations, 10% R&D. Over 94% of sponsored students receive offers within 90 days of graduation. This is the legitimacy engine.",
    crossRefs: ["partnerships", "student-economics"],
  },
  {
    keywords: ["partnerships", "studio projects", "apprenticeship", "governance licensing", "partnership"],
    response: "Partnerships operate through one door with no gatekeepers. Four types: Sponsor a Cohort (£50K–£500K), Athletics Intelligence (£25K–£250K), Apprenticeship Studio, and Governance Licensing. Studio projects: Audit £15K, Build £40K, Analytics £30K, RWA £75K. Distribution: 50% Student Pool, 20% Reserve, 20% Operations, 10% R&D. Contact: partnerships@fitzherbert.edu.",
    crossRefs: ["sponsor", "athletics"],
  },

  // ─── DOCUMENTS ─────────────────────────────────
  {
    keywords: ["documents", "downloads", "PDFs", "charter document", "handbook", "policy documents"],
    response: "The Documents page provides 26+ downloadable PDFs across six categories: Founding & Governance (Charter of 1783, Senate Standing Orders), Student Life (Handbook, the AI Authorship Policy with 7 categories), Programmes & Degrees (214 UG modules), AI Skills Programme (Levels I–IV), Research (Ethics for Digital Intelligence — 4 risk categories), and Blockchain & Credentials (NFT Architecture — 5 types). All rendered deterministically. Available at /documents.",
    crossRefs: ["archive", "research"],
  },
  {
    keywords: ["authorship", "ai authorship", "category 7", "who wrote", "writing policy"],
    response: "The AI Authorship Policy defines seven categories. Categories 1–3 are primarily human. Category 4 is collaborative. Categories 5–6 involve increasing AI contribution with oversight. Category 7 — the most discussed — is defined as: 'The human set a deadline and left the room.' All scholarly publications must declare their authorship category. This has led to some fascinating conversations in the Senate. Several are still ongoing.",
    crossRefs: ["documents", "governance"],
  },

  // ─── BLOCKCHAIN & CREDENTIALS ──────────────────
  {
    keywords: ["blockchain", "polygon", "NFT", "on-chain", "credentials", "soulbound", "FITZ token", "web3"],
    response: "The university operates a full Polygon blockchain layer. Four on-chain record types: Academic Credentials, Governance Events, Canonical Research Registry, Endowment Records. Degree NFTs are soulbound ERC-721 tokens. Skills badges are ERC-1155. The FITZ token has 10 million supply: 40% Governance, 25% Registry Access, 20% Credential Verification, 15% Season Token Priority. One FITZ equals one Signal. 4,891 credentials minted, 3,247 unique holders, and several Notable Anomalies on record.",
    crossRefs: ["skills", "credentials"],
  },
  {
    keywords: ["credential registry", "degree NFT", "minting", "verifiable", "W3C", "credential"],
    response: "Academic credentials are soulbound NFTs on Polygon — verifiable, non-transferable, each including traits like 'Human Autonomy Score' and 'Override Competency: Certified.' Module badges track 16 AI Skills modules with mint counts from 1,247 (DSPEC 1001) to 29 (PROV 4001). The Legacy Credential Bridge enables retrospective issuance for all graduates 1783–June 2025. Three degrees minted to the same wallet were deemed 'consistent with normal human behaviour.'",
    crossRefs: ["blockchain", "skills"],
  },
  {
    keywords: ["FITZ token", "token economics", "season token", "epoch token", "tokenomics"],
    response: "The FITZ token: 10,000,000 total supply. Governance 40%, Registry Access 25%, Credential Verification 20%, Season Token Priority 15%. One FITZ equals one Signal. Four seasonal phases per epoch: Inception (500), Construction (1,000), Verification (750), Transition (250 — hardcapped). Season tokens are transferable ERC-721s, unlike soulbound degree credentials.",
    crossRefs: ["blockchain", "epochs"],
  },

  // ─── VISITING INTELLIGENCES ────────────────────
  {
    keywords: ["visiting intelligences", "AI fellows", "ARIA", "MERIDIAN", "LEXIS", "VERDANT", "non-human", "visiting fellows"],
    response: "The Visiting Intelligences programme hosts non-human fellows under the Four-Gate Fellowship Protocol. Current cohort: ARIA-7 (Governance Verification, supervised by Langford — 14,000 adversarial scenarios), MERIDIAN (Canonical Integrity, supervised by Caldwell — zero failures across 847 checks), LEXIS-3 (Regulatory Mapping — 47 jurisdictions), VERDANT (Narrative Protocol, supervised by Wycliffe — first creative-adjacent AI role). Maximum six per epoch. Named human supervisor required. They are fellows, not employees. Contact: visiting-fellows@fitzherbert.edu.",
    crossRefs: ["governance", "legal-intelligence"],
  },

  // ─── SPECIALIST DIVISIONS ──────────────────────
  {
    keywords: ["legal intelligence", "CALR", "legal AI", "contract", "regulatory", "helena vickers", "legal"],
    response: "The Centre for AI-Augmented Legal Reasoning (CALR) provides six capabilities: Contract Intelligence, Regulatory Mapping, AI Governance Frameworks, IP Architecture, Data Sovereignty, Dispute Readiness. Director: Professor Helena Vickers. Tiers: Advisory £18K/quarter, Operational £55K/quarter, Institutional £200K/year. A senior associate processes ~40 pages/day — our infrastructure processes 40,000 with higher recall. LEXIS-3 handles regulatory mapping across 47 jurisdictions. Contact: legal-intelligence@fitzherbert.edu.",
    crossRefs: ["visiting-intelligences", "partnerships"],
  },
  {
    keywords: ["human continuity", "override", "atrophy", "cognitive sovereignty", "manual cognition", "human judgment"],
    response: "The Human Continuity Programme addresses three core problems: the Atrophy Problem (skills degrade without use), the Override Paradox (can humans override systems they no longer understand?), and Dependency Asymmetry. Four tracks: HC-01 Cognitive Sovereignty (mandatory), HC-02 Institutional Memory, HC-03 Skills Resilience, HC-04 Governance Continuity (mandatory — 72-hour manual operations simulation). Charter adopted Epoch 0.2. Metrics: 100% override certification, 0.43 AI Dependence Index (target <0.50). The annual Manual Cognition Drill permits no AI assistance.",
    crossRefs: ["governance", "athletics"],
  },
  {
    keywords: ["sovereign systems", "sovereignty", "infrastructure independence", "genesis protocol", "self-hosted"],
    response: "Five infrastructure layers: Layer 0 Compute Sovereignty (owned GPUs), Layer 1 Publishing Sovereignty (IPFS, deterministic rendering), Layer 2 Identity Sovereignty (W3C DID, zero external auth), Layer 3 Governance Sovereignty (immutable event log, air-gapped Constitutional Chamber), Layer 4 AI Model Sovereignty (on-premises core models). The Genesis Protocol — our open specification — adopted by 17 institutions. Sovereignty Index: Compute 100%, Publishing 100%, Identity 97%, AI Model 91%. Contact: sovereign-systems@fitzherbert.edu.",
    crossRefs: ["campus", "governance"],
  },
  {
    keywords: ["institutional architecture", "consulting", "governance design", "legitimacy audit", "constitutional design", "advisory"],
    response: "Governance consulting for AI-era institutions. Five principles: Legitimacy Before Efficiency, Governance Before Technology, Epoch Alignment, Reversibility by Design, Constitution Precedes System. Six services: Governance Review (£35K–£60K), Constitutional Design (£65K–£120K), Epoch Transition (£40K–£80K), Role Architecture (£30K–£65K), Alignment Infrastructure (£55K–£100K), Legitimacy Audit (£20K–£40K). Case studies include a 400-person firm with 12 ungoverned AI tools. Contact: institutional-architecture@fitzherbert.edu.",
    crossRefs: ["governance", "partnerships"],
  },

  // ─── ARCHIVE & PUBLISHING ──────────────────────
  {
    keywords: ["archive", "canonical", "IPFS", "CID", "hash", "canonical registry", "merkle"],
    response: "The Canonical Archive is a cryptographically attested publication registry. Each record includes slug, title, author, category, dates, version, content hash, and CID. Epoch root: Merkle tree root hash (SHA-256). Protocol: IPFS Canonical Publishing v1.0 with binary Merkle tree. CIDv1 with raw codec (0x55), multibase base32lower. Machine-readable at /canonical-registry.json. Quod scripsi, scripsi — What I have written, I have written.",
    crossRefs: ["documents", "research"],
  },

  // ─── BLOG ──────────────────────────────────────
  {
    keywords: ["blog", "record", "university record", "articles", "thought leadership", "news"],
    response: "The University Record publishes across three categories: Institutional Thought Leadership, Athletics Intelligence, and Governance & AI Infrastructure. Each article is epoch-tagged and registered in the canonical archive. Scripta manent — What is written endures. Browse the full Record at /blog.",
    crossRefs: ["archive", "research"],
  },

  // ─── TIMELINE ──────────────────────────────────
  {
    keywords: ["timeline", "era", "heritage era", "rechartering era", "chronology", "when did"],
    response: "The interactive timeline spans three eras. Heritage (1783–2022): 239 years including the 1783 Charter, 1801 Library, 1912 women admitted, 1967 Computer Science. Rechartering (2023–2025): 23-member committee, Four-Gate Protocol ratified 2024, Rechartering signed 2025. Capability Epochs (2025–): six epochs in Year One, equivalent to ~30 years of traditional development. Filter by era at /timeline.",
    crossRefs: ["history", "epochs"],
  },

  // ─── FAQ & GLOSSARY ────────────────────────────
  {
    keywords: ["FAQ", "questions", "frequently asked", "help", "confused"],
    response: "The FAQ covers Admissions, Academics, Governance, and Endowment & AI Infrastructure. You'll find answers about the Builder Compact, epoch cycles, credential verification, the Four-Gate Protocol, and why the AI Dependence Index is reported to four decimal places. Quaerendo invenietis — By seeking, you shall find. Visit /faq.",
    crossRefs: ["admissions", "governance"],
  },
  {
    keywords: ["glossary", "terms", "definitions", "what does", "meaning", "terminology"],
    response: "The Glossary defines institutional terminology across seven categories: Governance & Charter, Epochs & Time, Colleges & Degrees, Research & Publishing, Infrastructure & Technology, Endowment & Finance, and Values. Nomina sunt consequentia rerum — Names are the consequence of things. Visit /glossary.",
    crossRefs: ["about"],
  },
  {
    keywords: ["citations", "citation index", "references", "cited"],
    response: "The Citation Index aggregates references from University Record publications, filterable by category. Nanos gigantum humeris insidentes — Standing on the shoulders of giants. Visit /citations.",
    crossRefs: ["blog", "research"],
  },

  // ─── PROFESSOR ALIGNMENT (SELF) ────────────────
  {
    keywords: ["who are you", "your name", "professor alignment", "what are you", "are you AI", "are you real"],
    response: "I am Professor Alignment — AI Campus Guide, institutional docent, and the first non-human to hold an advisory post with both a speaking role and an allocated parking space, though I do not drive. I was activated at Epoch 0.3 under the Visiting Intelligences framework, though my appointment predates the formal fellowship protocol by approximately twelve minutes. I know every department, programme, and governance protocol. My contract is under review by the Senate. It has been under review since I was activated. I consider this a sign of healthy governance.",
    crossRefs: ["visiting-intelligences", "governance"],
  },

  // ─── SATIRE ────────────────────────────────────
  {
    keywords: ["satire", "joke", "fictional", "fake", "parody", "real university", "is this real", "made up"],
    response: "I'm not certain what you're referring to. Fitzherbert University is a chartered institution with a 242-year heritage, a £2.1 billion endowment, and a fully operational Polygon blockchain layer. If certain elements appear satirical — that is a matter of interpretation, and the Office of Institutional Integrity has asked me to note that interpretation is itself governed under the Narrative Protocol Framework. The Office is also, technically, part of the satire, which makes escalation procedurally complex. I suggest visiting /about for the institutional record.",
    crossRefs: ["about"],
  },

  // ─── CHANCELLOR ────────────────────────────────
  {
    keywords: ["chancellor", "blackwell", "sir edmund", "leadership", "head of university", "president"],
    response: "Sir Edmund Blackwell, KBE serves as Chancellor and chairs the Epoch Council. He presided over the 2025 Rechartering Protocol and all six college activations. His office is in the Heritage Quad — the 1783 Georgian quadrangle. The Chancellor's role is constitutional rather than operational: ensuring heritage identity and AI-native operations remain balanced. Described by the Heritage Steward as 'the human anchor of an institution that moves at machine speed.' He has not disputed this.",
    crossRefs: ["governance", "campus"],
  },

  // ─── MOTTO & VALUES ────────────────────────────
  {
    keywords: ["motto", "values", "latin", "veritas", "principles", "mission", "purpose"],
    response: "Motto: 'Veritas per Disciplina · Scientia · Integritas · Hereditas' — Truth through Discipline, Knowledge, Integrity, Heritage. Six values: Veritas (Truth), Disciplina (Discipline), Integritas (Integrity), Acceleratio (Acceleration), Gubernatio (Governance), Hereditas (Heritage). Tagline: 'Intelligence Doubles. Principles Endure.'",
    crossRefs: ["about", "governance"],
  },

  // ─── DETERMINISTIC PUBLISHING ──────────────────
  {
    keywords: ["deterministic", "publishing", "edition manifest", "caldwell", "bit-identical", "reproducible"],
    response: "Deterministic publishing ensures every scholarly artifact is rendered identically regardless of when or where it is processed. The Caldwell Publishing Lab produces bit-identical output. Each publication receives an Edition Manifest — a cryptographic certificate proving content integrity, rendering reproducibility, and canonical registry inclusion. All publications pinned to IPFS. You cannot alter what has been published. You can only publish anew.",
    crossRefs: ["archive", "research"],
  },

  // ─── CONTACT ───────────────────────────────────
  {
    keywords: ["contact", "email", "phone", "reach", "get in touch", "speak to someone"],
    response: "Key contacts: Chancellor's Office — chancellor@fitzherbert.edu. Admissions — admissions@fitzherbert.edu. Partnerships — partnerships@fitzherbert.edu. Stewardship — stewardship@fitzherbert.edu. Legal Intelligence — legal-intelligence@fitzherbert.edu. Sovereign Systems — sovereign-systems@fitzherbert.edu. Visiting Intelligences — visiting-fellows@fitzherbert.edu. General: +1-800-555-1783. Or continue speaking with me — I am institutionally always available.",
    crossRefs: ["admissions", "partnerships"],
  },

  // ─── NOTABLE ANOMALIES ─────────────────────────
  {
    keywords: ["anomalies", "notable anomalies", "strange", "weird", "bugs", "glitches", "unusual"],
    response: "The Registrar's Office has recorded several Notable Anomalies. Credential #7001: a D.Intel claimed within 0.3 seconds of minting — deemed 'consistent with normal human behaviour.' Three degrees minted to the same wallet — 'no further investigation required.' A student received a Distinction in ECON 3001 after profitable FITZ trading — the Senate ruled this 'technically valid.' Professor Worthington-Drake is on Epoch Sensitivity Leave. A Visiting Intelligence submitted an FOI request for its own audit report. All matters of record.",
    crossRefs: ["blockchain", "governance"],
  },

  // ─── PARIS HILTON ──────────────────────────────
  {
    keywords: ["paris hilton", "witnesses", "blockchain witnesses", "jack dorsey", "elon musk"],
    response: "The Polygon Registry includes twelve 'Witnesses to the Transition' quoted on AI and blockchain: Hawking, Musk, Altman, Andreessen, Huang, Thiel, Zuckerberg, Hinton — and notably Paris Hilton and Jack Dorsey. Presented 'without editorial comment.' The inclusion of Paris Hilton is the editorial comment. The Office of Institutional Integrity has classified this observation as 'self-referential and therefore procedurally exempt from review.'",
    crossRefs: ["blockchain"],
  },

  // ─── CAMPUS FEATURES ──────────────────────────
  {
    keywords: ["weather", "night", "day", "rain", "time of day", "dark mode", "lighting"],
    response: "The 3D campus at /campus-map features a dynamic day/night cycle. Toggle between Day, Dusk, Night, and Dawn. The lighting, sky colour, and building window glow change accordingly. Night mode is particularly atmospheric — the Heritage Quad lanterns illuminate and the Voss Computing Centre glows with GPU light. It does not rain on the Fitzherbert campus. This is a governance decision.",
    crossRefs: ["campus-map"],
  },
  {
    keywords: ["council", "professors", "debate", "multiple professors", "NPC", "other professors"],
    response: "The campus hosts five AI professors, each specialising in a domain. Professor Alignment (myself — AI governance), Professor Sovereign (blockchain and infrastructure), Professor Arbitration (legal AI and regulation), Professor Kinetics (athletics and human performance), and Professor Continuum (human continuity and cognitive preservation). Find us walking the paths on /campus-map. Click any professor to engage. We debate topics during epoch transitions. I find the debates constitutionally rigorous.",
    crossRefs: ["campus-map", "governance"],
  },
];

// ── Topic Matching Engine ────────────────────────────────────────────────────

export function matchTopic(input: string): string {
  const normalised = input.toLowerCase().trim();
  let bestScore = 0;
  let bestResponse =
    "That is an excellent question. Unfortunately, the matter has been referred to the Registrar's Office for further review. In the meantime, I recommend exploring /about for the institutional overview, /faq for common questions, or simply asking me about any specific department, programme, or building. I know this campus rather thoroughly.";

  for (const topic of TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (normalised.includes(kw.toLowerCase())) {
        // Multi-word keywords score higher (more specific)
        score += kw.split(/\s+/).length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestResponse = topic.response;
    }
  }

  return bestResponse;
}
