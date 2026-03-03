import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "AI Skills Programme",
  description:
    "Fitzherbert University's structured curriculum in practical artificial intelligence competencies — four levels from Foundation to Sovereign. Real skills. Immediate application. Polygon credentials on completion.",
};

/* ── Data ──────────────────────────────────────────────────────────────────── */

interface Module {
  code: string;
  title: string;
  subtitle: string;
  description: string;
  youWillLearn: string[];
  youWillBuild: string;
  duration: string;
  prerequisite: string | null;
  fitz: number;
  badge: string;
}

interface Level {
  number: "I" | "II" | "III" | "IV";
  name: string;
  tagline: string;
  description: string;
  color: string;
  modules: Module[];
}

const levels: Level[] = [
  {
    number: "I",
    name: "Foundation",
    tagline: "Foundational Competency in Human–Intelligence Collaboration",
    description:
      "Level I establishes the cognitive infrastructure required for productive engagement with AI systems. Students who have not yet completed Foundation may not use Visiting Intelligences in assessed coursework. Completion awards 500 FITZ tokens and the Foundation Medallion credential.",
    color: "text-gold",
    modules: [
      {
        code: "DSPEC 1001",
        title: "Directed Intelligence Specification",
        subtitle: "The Theory and Practice of Prompt Engineering",
        description:
          "Systematic instruction in the construction, refinement, and evaluation of natural-language directives for large language models. Covers zero-shot and few-shot prompting, chain-of-thought elicitation, role assignment, context windows, and the structural patterns that produce reliable, high-quality outputs. The module takes the position that prompt engineering is a craft discipline, not a parlour trick.",
        youWillLearn: [
          "Anatomy of an effective prompt: role, context, instruction, output format",
          "Zero-shot, one-shot, and few-shot prompting with worked examples",
          "Chain-of-thought and tree-of-thought techniques for reasoning tasks",
          "Temperature, top-p, and sampling parameters — what they actually do",
          "System prompt design for consistent persona and behaviour",
          "Iterative refinement: diagnosing and fixing bad outputs systematically",
          "Prompt injection vectors and how to defend against them",
        ],
        youWillBuild:
          "A personal prompt library across five professional domains, with documented reasoning for each design decision.",
        duration: "4 weeks",
        prerequisite: null,
        fitz: 100,
        badge: "DSPEC-I-FOUND",
      },
      {
        code: "OUVL 1001",
        title: "Output Validity & Provenance Assessment",
        subtitle: "Evaluating, Verifying, and Attributing AI-Generated Content",
        description:
          "A rigorous methodology for evaluating the accuracy, provenance, and reliability of AI-generated outputs. Covers the taxonomy of hallucination types, source verification techniques, factual cross-referencing, confidence calibration, and the construction of verification workflows that scale. The module treats AI output as a draft requiring editorial review, not a finished product.",
        youWillLearn: [
          "Taxonomy of LLM failure modes: confabulation, citation fabrication, outdated knowledge",
          "Cross-referencing techniques: primary sources, Wolfram Alpha, official databases",
          "Recognising high-risk output domains: legal, medical, quantitative, biographical",
          "Confidence calibration: when to trust, when to verify, when to reject",
          "Building a personal verification workflow for professional AI use",
          "Writing the Declaration of Authorship Weights required under Academic Integrity Policy",
          "Tools: Perplexity, consensus.app, Elicit for research-grade verification",
        ],
        youWillBuild:
          "A documented verification protocol for a professional role of your choice, with annotated examples of caught errors.",
        duration: "3 weeks",
        prerequisite: "DSPEC 1001",
        fitz: 80,
        badge: "OUVL-I-FOUND",
      },
      {
        code: "WKFL 1001",
        title: "Automated Workflow Architecture",
        subtitle: "Practical Automation for the Augmented Professional",
        description:
          "Hands-on construction of automated workflows using no-code and low-code platforms. Covers trigger-action logic, API integration without writing backend code, data transformation, conditional branching, error handling, and the design of workflows that require minimal human intervention. The module's central premise: if you are manually doing something more than three times, it should be automated.",
        youWillLearn: [
          "Automation paradigm: triggers, actions, filters, and data mapping",
          "Make (formerly Integromat): building multi-step automation scenarios",
          "Zapier: rapid prototyping and connecting everyday SaaS tools",
          "n8n: self-hostable automation with code escape hatches",
          "Webhook basics: receiving and sending POST requests",
          "Working with APIs that require authentication: OAuth, API keys, Bearer tokens",
          "Error handling, retry logic, and monitoring your automations",
          "Integrating LLM API calls into automation workflows",
        ],
        youWillBuild:
          "Three complete automations: a document processing pipeline, a notification system, and an AI-enhanced data enrichment workflow.",
        duration: "5 weeks",
        prerequisite: null,
        fitz: 120,
        badge: "WKFL-I-FOUND",
      },
      {
        code: "EPST 1001",
        title: "Epistemic Infrastructure in the Synthetic Age",
        subtitle: "Critical Thinking, Source Evaluation, and Information Architecture",
        description:
          "Intellectual groundwork for navigating an information environment in which AI-generated content is ubiquitous and indistinguishable by surface inspection. Covers epistemological frameworks, source hierarchy analysis, the sociology of misinformation, lateral reading, and the design of personal information systems that remain reliable under adversarial conditions. The module's thesis: the value of good judgement has increased, not decreased, in proportion to AI capability.",
        youWillLearn: [
          "Epistemic frameworks: Bayesian updating, falsificationism, and triangulation",
          "Source hierarchy: primary, secondary, and tertiary — and when each is appropriate",
          "Lateral reading: the technique used by professional fact-checkers",
          "Cognitive biases that AI outputs systematically exploit",
          "Designing a personal knowledge management system (Obsidian, Notion, Roam)",
          "The SIFT method: Stop, Investigate, Find better coverage, Trace claims",
          "Identifying AI-generated text, deepfakes, and synthetic media",
        ],
        youWillBuild:
          "A personal knowledge management system with documented source evaluation criteria and a thirty-day information diet audit.",
        duration: "3 weeks",
        prerequisite: null,
        fitz: 80,
        badge: "EPST-I-FOUND",
      },
    ],
  },

  {
    number: "II",
    name: "Practitioner",
    tagline: "Applied Competency in AI System Construction",
    description:
      "Level II moves from using AI tools to building with them. Students construct practical systems that retrieve, process, and augment information at scale. Completion awards 1,000 FITZ tokens and the Practitioner Seal credential, which is required for all advanced coursework and dissertation supervision.",
    color: "text-maroon",
    modules: [
      {
        code: "RAUG 2001",
        title: "Retrieval-Augmented Generation Architecture",
        subtitle: "Building Knowledge Systems That Go Beyond the Baseline Model",
        description:
          "Technical and architectural foundations of retrieval-augmented generation (RAG) — the technique that allows language models to answer questions about documents, databases, and knowledge bases they were not trained on. Covers embedding models, vector databases, chunking strategies, retrieval ranking, context assembly, and the evaluation of RAG system quality. The module treats RAG as the foundational technique for any organisation wishing to deploy AI against its own data.",
        youWillLearn: [
          "How language models handle context windows — and why they run out",
          "Embeddings: converting text to vectors, semantic similarity, cosine distance",
          "Vector databases: Pinecone, Weaviate, Chroma, pgvector — pros and trade-offs",
          "Chunking strategies: fixed-size, semantic, recursive, document-aware",
          "Retrieval ranking: BM25, dense retrieval, hybrid approaches",
          "Context assembly: how to package retrieved chunks for the LLM",
          "RAG evaluation: faithfulness, answer relevance, context precision",
          "Tools: LangChain, LlamaIndex, OpenAI Assistants API with file search",
        ],
        youWillBuild:
          "A complete RAG system over a document corpus of your choice — ingestion pipeline, retrieval engine, and a simple chat interface.",
        duration: "6 weeks",
        prerequisite: "DSPEC 1001",
        fitz: 200,
        badge: "RAUG-II-PRAC",
      },
      {
        code: "AGNT 2001",
        title: "Agent Orchestration Foundations",
        subtitle: "Designing and Deploying AI Agents That Actually Work",
        description:
          "Architectural principles and practical construction of AI agents — systems that reason, use tools, and take sequences of actions to achieve goals. Covers the ReAct pattern, tool use, planning, memory architectures, and the design principles that distinguish reliable agents from impressive demos that fail in production. The module takes agent engineering seriously: real reliability, real error rates, real trade-offs.",
        youWillLearn: [
          "The agent loop: perception, reasoning, action, observation",
          "ReAct pattern: reasoning and acting interleaved with tool calls",
          "Tool definition: writing tool schemas that LLMs can reliably call",
          "Memory architectures: in-context, external, episodic, and semantic memory",
          "Planning: when to use multi-step planning vs. reactive execution",
          "Error handling and recovery: what happens when tools fail",
          "Agent evaluation: success rate, error recovery, latency, cost",
          "Frameworks: LangGraph, CrewAI, AutoGen, OpenAI Agents SDK",
        ],
        youWillBuild:
          "A functional agent with at least four tools, persistent memory, and documented failure modes with recovery strategies.",
        duration: "6 weeks",
        prerequisite: "RAUG 2001",
        fitz: 200,
        badge: "AGNT-II-PRAC",
      },
      {
        code: "FTUN 2001",
        title: "Model Alignment Practicum",
        subtitle: "Fine-Tuning Language Models for Specific Tasks and Domains",
        description:
          "Practical instruction in fine-tuning pre-trained language models for domain-specific tasks, persona alignment, and format adherence. Covers dataset construction, PEFT techniques (LoRA, QLoRA), training infrastructure, evaluation methodology, and the situations in which fine-tuning is and is not the right solution. The module's central argument: fine-tuning is frequently overreached for when prompt engineering would suffice, and frequently under-applied when it would solve the problem definitively.",
        youWillLearn: [
          "When to fine-tune vs. prompt engineer vs. build a RAG system",
          "Dataset construction: formats, quality requirements, size estimates",
          "LoRA and QLoRA: low-rank adaptation for consumer-grade hardware",
          "Training with Hugging Face TRL, Unsloth, and Axolotl",
          "Evaluation: loss curves, benchmark comparison, human evaluation",
          "GGUF quantisation and local deployment with Ollama, LM Studio",
          "Merging and serving fine-tuned models via API",
          "Cost estimation: compute hours, tokens, storage",
        ],
        youWillBuild:
          "A fine-tuned model for a specific professional task, with a documented dataset, training run, and A/B evaluation against the base model.",
        duration: "7 weeks",
        prerequisite: "DSPEC 1001",
        fitz: 220,
        badge: "FTUN-II-PRAC",
      },
      {
        code: "XFRA 2001",
        title: "API Integration & Data Architecture",
        subtitle: "Connecting AI Systems to the World",
        description:
          "Technical foundations for integrating AI systems with external APIs, databases, and data sources. Covers REST and GraphQL API patterns, authentication mechanisms, rate limiting, data transformation, schema design for AI-adjacent workloads, and the construction of pipelines that move data reliably from source to AI system to destination. The module treats data architecture as the scaffolding on which all useful AI applications are built.",
        youWillLearn: [
          "REST fundamentals: verbs, status codes, headers, pagination",
          "Authentication: API keys, OAuth2, JWT — implementation patterns",
          "Rate limiting and retry logic: exponential backoff, circuit breakers",
          "Data transformation: JSON manipulation, schema normalisation, type coercion",
          "Database basics for AI workloads: PostgreSQL, SQLite, and when to use each",
          "Building a simple FastAPI backend to serve AI model outputs",
          "Environment management: .env files, secrets management, dotenv",
          "Structured output from LLMs: Pydantic, JSON mode, function calling",
        ],
        youWillBuild:
          "A data pipeline that ingests from two external APIs, transforms the data, stores it, and queries it via an LLM interface.",
        duration: "5 weeks",
        prerequisite: "WKFL 1001",
        fitz: 180,
        badge: "XFRA-II-PRAC",
      },
    ],
  },

  {
    number: "III",
    name: "Specialist",
    tagline: "Advanced Construction and Deployment of AI Systems",
    description:
      "Level III prepares students to design, build, and deploy production-grade AI systems. The focus shifts from individual components to full system architecture, evaluation at scale, and the engineering disciplines that separate prototypes from production. Completion awards 2,000 FITZ tokens and the Specialist Distinction credential.",
    color: "text-navy",
    modules: [
      {
        code: "MAGS 3001",
        title: "Multi-Agent System Design",
        subtitle: "Orchestrating Networks of Intelligent Agents",
        description:
          "Architecture and implementation of systems consisting of multiple cooperating AI agents. Covers agent role design, communication protocols, shared memory architectures, supervisor-subagent patterns, parallelism, conflict resolution, and the evaluation challenges posed by emergent cross-agent behaviour. The module takes seriously the engineering discipline required to make multi-agent systems reliable, not just impressive.",
        youWillLearn: [
          "Multi-agent architectures: hierarchical, peer-to-peer, market-based",
          "Supervisor patterns: routing, delegation, and result aggregation",
          "Shared state and message passing between agents",
          "Parallelism: running agents concurrently and merging outputs",
          "Specialisation vs. generalism: when to split tasks across agents",
          "Debugging multi-agent systems: tracing, logging, visualisation",
          "Evaluation: decomposing multi-agent success into measurable sub-goals",
          "Production patterns with LangGraph, CrewAI, and AutoGen",
        ],
        youWillBuild:
          "A multi-agent research pipeline with at least three specialist agents, a supervisor layer, and a shared memory system.",
        duration: "7 weeks",
        prerequisite: "AGNT 2001",
        fitz: 350,
        badge: "MAGS-III-SPEC",
      },
      {
        code: "EVLF 3001",
        title: "Custom Evaluation Frameworks",
        subtitle: "Measuring What Matters in AI System Performance",
        description:
          "Design and implementation of custom evaluation frameworks for large language model applications. Covers the inadequacy of simple accuracy metrics, LLM-as-judge patterns, rubric design, benchmark construction, automated regression testing, red-teaming, and the integration of evaluation into CI/CD pipelines. The module's central claim: a system whose quality you cannot measure is a system you cannot improve.",
        youWillLearn: [
          "Evaluation taxonomy: task-specific, safety, robustness, and user-centric",
          "LLM-as-judge: using a model to evaluate model output — design and pitfalls",
          "Rubric construction: translating qualitative requirements into scoreable criteria",
          "Building evaluation datasets: diversity, adversarial cases, edge cases",
          "Automated regression testing: catching regressions when models are updated",
          "Red-teaming: systematic adversarial evaluation for safety-critical applications",
          "Frameworks: RAGAS, DeepEval, OpenAI Evals, LangSmith",
          "Integrating evals into CI/CD: GitHub Actions, evaluation gates",
        ],
        youWillBuild:
          "A custom evaluation suite for a real AI application, with automated testing, a leaderboard, and a documented improvement cycle.",
        duration: "6 weeks",
        prerequisite: "RAUG 2001",
        fitz: 330,
        badge: "EVLF-III-SPEC",
      },
      {
        code: "DPPL 3001",
        title: "Intelligence Deployment & Infrastructure",
        subtitle: "Taking AI Systems from Prototype to Production",
        description:
          "The engineering disciplines required to deploy AI applications at scale: containerisation, serving infrastructure, latency optimisation, cost management, observability, and the operational practices that keep production AI systems running reliably. The module treats 'works on my machine' as the beginning of the problem, not the end.",
        youWillLearn: [
          "Containerisation with Docker: building images for AI workloads",
          "Serving LLMs: vLLM, TGI, Ollama — throughput, latency, cost comparison",
          "API design for AI backends: streaming responses, async patterns, rate limiting",
          "Cost management: token counting, request batching, caching strategies",
          "Observability: logging, tracing, and alerting for LLM applications",
          "Model versioning and deployment strategies: canary, blue-green",
          "GPU instance selection: A10, A100, H100 — workload-appropriate choice",
          "Deploying to Modal, Replicate, RunPod, and bare metal",
        ],
        youWillBuild:
          "A containerised AI application deployed to a public endpoint with monitoring, cost controls, and a documented runbook.",
        duration: "7 weeks",
        prerequisite: "XFRA 2001",
        fitz: 350,
        badge: "DPPL-III-SPEC",
      },
      {
        code: "VECT 3001",
        title: "Vector Architecture & Semantic Infrastructure",
        subtitle: "Embeddings, Search, and the Architecture of Meaning at Scale",
        description:
          "Advanced architecture of semantic search and embedding systems at production scale. Covers embedding model selection and fine-tuning, index architectures (ANN, HNSW, IVF), hybrid search, multi-modal embeddings, knowledge graph integration, and the design of retrieval systems that remain accurate as corpora grow to millions of documents. The module treats semantic infrastructure as a first-class engineering concern.",
        youWillLearn: [
          "Embedding models: sentence-transformers, OpenAI text-embedding-3, Cohere Embed",
          "Fine-tuning embedding models for domain-specific semantic similarity",
          "Index types: flat, HNSW, IVF — accuracy, speed, memory trade-offs",
          "Hybrid search: combining dense vector retrieval with BM25 keyword search",
          "Re-ranking: cross-encoder re-ranking for precision at top-k",
          "Multi-modal embeddings: text + image retrieval architectures",
          "Production Pinecone, Qdrant, Weaviate — operational patterns",
          "Knowledge graph integration: when structured graphs outperform vector search",
        ],
        youWillBuild:
          "A production-grade semantic search engine over a large corpus, with hybrid retrieval, re-ranking, and performance benchmarks.",
        duration: "6 weeks",
        prerequisite: "RAUG 2001",
        fitz: 330,
        badge: "VECT-III-SPEC",
      },
    ],
  },

  {
    number: "IV",
    name: "Sovereign",
    tagline: "Governance, Alignment, and the Architecture of Human Oversight",
    description:
      "Level IV is the Programme's summit. Students develop the capacity to govern AI systems at institutional scale — understanding alignment techniques, designing oversight architectures, and positioning organisations for the transition period. Completion awards 5,000 FITZ tokens, the Sovereign Credentials NFT, and is the prerequisite for any Visiting Intelligence supervisory role at the University.",
    color: "text-gold",
    modules: [
      {
        code: "ALST 4001",
        title: "Alignment & Safety Practicum",
        subtitle: "Technical Foundations of Safe and Reliable AI Behaviour",
        description:
          "Technical survey and practical engagement with the field of AI alignment and safety. Covers RLHF and its variants, Constitutional AI, DPO, scalable oversight, interpretability tools, and the empirical literature on model behaviour under distribution shift. The module does not require students to resolve unsolved problems; it requires them to understand what the unsolved problems actually are.",
        youWillLearn: [
          "Alignment framing: inner alignment, outer alignment, deceptive alignment",
          "RLHF: reward modelling, PPO, the Bradley-Terry preference model",
          "Direct Preference Optimisation (DPO): theory and implementation",
          "Constitutional AI: iterative self-critique and revision",
          "Interpretability: activation patching, probing, and circuit analysis with TransformerLens",
          "Scalable oversight: debate, amplification, and recursive reward modelling",
          "Red-teaming for safety: jailbreaks, prompt injection, specification gaming",
          "Practical guardrail implementation with Llama Guard, NeMo Guardrails",
        ],
        youWillBuild:
          "A comparative study of RLHF vs. DPO on a classification task, with safety-tested guardrails and a documented threat model.",
        duration: "8 weeks",
        prerequisite: "FTUN 2001",
        fitz: 800,
        badge: "ALST-IV-SOV",
      },
      {
        code: "GVRN 4001",
        title: "Institutional AI Strategy & Governance",
        subtitle: "Designing Organisations That Remain in Control",
        description:
          "Strategic and governance frameworks for organisations deploying AI at scale. Covers AI policy design, risk tiering, procurement standards, model auditing obligations, board-level AI literacy, incident response protocols, and the construction of AI governance committees that function rather than perform. The module's position: governance theatre is more dangerous than no governance, because it substitutes the appearance of oversight for the reality.",
        youWillLearn: [
          "AI governance frameworks: NIST AI RMF, EU AI Act risk tiers, ISO/IEC 42001",
          "Organisational risk tiering: high-risk applications vs. productivity tools",
          "AI procurement standards: vendor assessment, model cards, transparency requirements",
          "Model auditing: bias evaluations, capability assessments, red-team commissioning",
          "Board-level AI literacy: what non-technical leaders need to understand",
          "Incident response: what to do when an AI system causes harm",
          "Building functional AI governance committees: composition, scope, authority",
          "The make-or-buy decision: when to build custom models vs. use frontier APIs",
        ],
        youWillBuild:
          "A complete AI governance policy for a real or hypothetical organisation, including risk register, procurement checklist, and incident response protocol.",
        duration: "6 weeks",
        prerequisite: "EVLF 3001",
        fitz: 700,
        badge: "GVRN-IV-SOV",
      },
      {
        code: "PROV 4001",
        title: "Intelligence Auditing & Provenance Architecture",
        subtitle: "Accountability, Attribution, and the Chain of Evidence",
        description:
          "Technical and institutional frameworks for maintaining accountability in AI-augmented workflows. Covers model cards, system cards, data provenance tracking, audit trail architecture, the Declaration of Authorship Weights framework, cryptographic attestation of AI outputs, and the design of systems that remain auditable as they scale. The module treats provenance as an engineering requirement, not an afterthought.",
        youWillLearn: [
          "Model cards and system cards: content requirements and limitations",
          "Data provenance: lineage tracking, licence compliance, dataset documentation",
          "Audit trail design: immutable logging of AI decisions and their inputs",
          "Cryptographic attestation: signing AI outputs for tamper-evident records",
          "The Declaration of Authorship Weights: implementing the University standard",
          "Watermarking AI-generated content: current techniques and limitations",
          "Chain of custody for AI-assisted professional work: legal and regulatory context",
          "On-chain provenance: using blockchain for tamper-evident AI audit records",
        ],
        youWillBuild:
          "An audit trail system for an AI-assisted workflow, with cryptographic attestation, a provenance dashboard, and a Polygon-compatible attestation record.",
        duration: "6 weeks",
        prerequisite: "GVRN 4001",
        fitz: 700,
        badge: "PROV-IV-SOV",
      },
      {
        code: "OVRD 4001",
        title: "The Override Practicum",
        subtitle: "Human Decision Authority in AI-Augmented Systems",
        description:
          "The capstone module of the Sovereign level, and the most consequential in the Programme. Examines the architecture of human oversight in systems where AI capability exceeds human ability to verify outputs in real time. Covers meaningful override design, automation bias, responsibility allocation under delegation, the failure modes of AI-in-the-loop governance, and the philosophical foundations of maintained human agency. The module's central problem: how do you remain in control of something you cannot fully understand? It does not pretend to resolve this. It makes you think about it seriously.",
        youWillLearn: [
          "Automation bias: how competence-display degrades oversight — empirical evidence",
          "Meaningful override: the difference between a nominal kill switch and real control",
          "Responsibility under delegation: who is accountable when AI systems decide",
          "Designing for disagreement: systems that surface uncertainty rather than hiding it",
          "The corrigibility spectrum: from fully corrigible to fully autonomous agents",
          "Slow-down mechanisms: mandatory deliberation periods for high-stakes AI decisions",
          "Institutional memory: preserving human capability for AI-displaced tasks",
          "Your personal override protocol: documenting where you will not cede judgement",
        ],
        youWillBuild:
          "A personal Override Protocol: a documented architecture of which decisions you will and will not delegate to AI systems, with justifications.",
        duration: "4 weeks",
        prerequisite: "ALST 4001",
        fitz: 800,
        badge: "OVRD-IV-SOV",
      },
    ],
  },
];

/* ── Level badge colours ─────────────────────────────────────────────────── */
const levelBg: Record<string, string> = {
  I: "bg-gold/10 border-gold/30",
  II: "bg-maroon/10 border-maroon/30",
  III: "bg-navy/10 border-navy/30",
  IV: "bg-gold/10 border-gold/30",
};

/* ── Page ───────────────────────────────────────────────────────────────────  */

export default function SkillsPage() {
  return (
    <>
      <Hero
        title="AI Skills Programme"
        subtitle="Practical Intelligence for the Third Epoch — Foundation to Sovereign"
      />

      {/* ── Introduction ──────────────────────────────────────────────────── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="Institute for Applied Intelligence"
            title="The University's Position"
            description="Artificial intelligence literacy is no longer optional. The Fitzherbert AI Skills Programme provides four levels of structured, practical instruction in the competencies that distinguish effective professionals in the present period from those who will shortly require retraining. The University neither endorses nor condemns this state of affairs. We document it."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          {levels.map((level) => (
            <div key={level.number} className={`border rounded-sm p-6 text-center ${levelBg[level.number]}`}>
              <div className={`text-3xl font-serif font-bold mb-2 ${level.color}`}>
                Level {level.number}
              </div>
              <div className="font-serif text-lg font-bold mb-1">{level.name}</div>
              <p className="text-xs text-stone-light leading-relaxed">{level.tagline}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Levels ────────────────────────────────────────────────────────── */}
      {levels.map((level, li) => (
        <Section key={level.number} alternate={li % 2 === 1} stone={li % 2 === 0}>
          <div className="mb-12">
            <div className="flex items-baseline gap-4 mb-4">
              <span className={`font-serif text-5xl font-bold ${level.color}`}>
                {level.number}
              </span>
              <div>
                <div className="text-xs tracking-widest uppercase text-stone-light mb-1">
                  Level {level.number} — {level.name}
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
                  {level.tagline}
                </h2>
              </div>
            </div>
            <p className="text-stone leading-relaxed max-w-3xl">{level.description}</p>
          </div>

          <div className="space-y-8">
            {level.modules.map((mod) => (
              <div
                key={mod.code}
                className="border border-gold/20 bg-ivory rounded-sm overflow-hidden"
              >
                {/* Module header */}
                <div className="bg-navy/5 border-b border-gold/20 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs tracking-widest uppercase text-gold font-bold">
                        {mod.code}
                      </span>
                      {mod.prerequisite && (
                        <span className="text-xs text-stone-light border border-stone-light/30 px-2 py-0.5 rounded-sm">
                          Requires {mod.prerequisite}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-bold leading-snug">{mod.title}</h3>
                    <p className="text-sm text-stone-light mt-0.5 italic">{mod.subtitle}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xs text-stone-light">{mod.duration}</div>
                    <div className="text-sm font-bold text-gold mt-1">+{mod.fitz} FITZ</div>
                  </div>
                </div>

                {/* Module body */}
                <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
                  {/* Description */}
                  <div className="lg:col-span-2">
                    <p className="text-stone text-sm leading-relaxed">{mod.description}</p>

                    {/* You will build */}
                    <div className="mt-4 p-4 bg-gold/5 border border-gold/20 rounded-sm">
                      <div className="text-xs tracking-widest uppercase text-gold font-bold mb-2">
                        Assessed Project
                      </div>
                      <p className="text-sm text-stone leading-relaxed">{mod.youWillBuild}</p>
                    </div>
                  </div>

                  {/* Learning outcomes */}
                  <div className="lg:col-span-3">
                    <div className="text-xs tracking-widest uppercase text-stone-light font-bold mb-3">
                      What You Will Learn
                    </div>
                    <ul className="space-y-2">
                      {mod.youWillLearn.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-stone">
                          <span className="text-gold mt-0.5 shrink-0">◆</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Module footer */}
                <div className="border-t border-gold/10 px-6 py-3 flex items-center justify-between bg-navy/2">
                  <span className="text-xs text-stone-light font-mono">{mod.badge}</span>
                  <span className="text-xs text-stone-light">
                    Polygon credential issued on completion · {mod.fitz} FITZ awarded
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* ── Credential Summary ─────────────────────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Credential Architecture"
          title="What You Earn"
          description="Each module completed awards a Polygon-minted NFT credential and a FITZ token allocation. The credentials are non-transferable, soulbound to the holder's wallet address, and independently verifiable via the University's Credential Verification Portal."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              level: "Foundation",
              fitz: "500",
              credential: "Foundation Medallion",
              desc: "Permits use of Visiting Intelligences in assessed coursework. Required for all further study.",
            },
            {
              level: "Practitioner",
              fitz: "1,000",
              credential: "Practitioner Seal",
              desc: "Required for advanced coursework and dissertation supervision. Recognised by University partner organisations.",
            },
            {
              level: "Specialist",
              fitz: "2,000",
              credential: "Specialist Distinction",
              desc: "Qualifies the holder to supervise AI implementations within their department. Recognised externally.",
            },
            {
              level: "Sovereign",
              fitz: "5,000",
              credential: "Sovereign Credentials NFT",
              desc: "The Programme's highest award. Prerequisite for Visiting Intelligence supervisory roles. Recognised by the Governance Board.",
            },
          ].map((c) => (
            <div key={c.level} className="border border-gold/30 bg-ivory p-6 text-center rounded-sm">
              <div className="font-serif text-lg font-bold mb-1">{c.level}</div>
              <div className="text-2xl font-bold text-gold mb-1">{c.fitz}</div>
              <div className="text-xs text-stone-light mb-3">FITZ tokens awarded</div>
              <div className="font-serif text-sm font-bold border-t border-gold/20 pt-3 mb-2">
                {c.credential}
              </div>
              <p className="text-xs text-stone leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Programme Guide ───────────────────────────────────────────────── */}
      <Section alternate>
        <div className="max-w-2xl mx-auto text-center">
          <div className="ornamental-divider mb-8">
            <span className="ornament">✦</span>
          </div>
          <h3 className="font-serif text-xl font-bold mb-4">Programme Documentation</h3>
          <p className="text-stone leading-relaxed mb-8">
            The complete AI Skills Programme Guide — including module syllabi, reading lists,
            assessment criteria, and FITZ token allocation tables — is available for download
            from the Institutional Documents Library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents/ai-skills-programme-guide.pdf"
              download
              className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors"
            >
              Download Programme Guide
            </Link>
            <Link
              href="/on-chain"
              className="inline-block border border-navy text-navy px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-navy hover:text-ivory transition-colors"
            >
              View Credential Registry
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
