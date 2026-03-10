export interface CollegeDetail {
  slug: string;
  name: string;
  dean: string;
  established: string;
  description: string;
  departments: string[];
  motto: string;
  overview: string[];
  signatureStudios: string[];
  degreePathways: string[];
  researchInstitutes: string[];
  governanceNotes: string[];
  graduateProfile: string[];
}

export interface ProgrammeGroup {
  level: string;
  offerings: string[];
}

export interface FacultyMember {
  name: string;
  title: string;
  field: string;
}

export const colleges: CollegeDetail[] = [
  {
    slug: "computational-systems",
    name: "College of Computational Systems",
    dean: "Director Elara Voss",
    established: "Epoch 0.1",
    description:
      "The foundational college. Systems architecture, distributed computing, formal verification, and the engineering substrate upon which all intelligence infrastructure is built.",
    departments: [
      "Systems Architecture",
      "Distributed Computing",
      "Formal Verification",
      "Infrastructure Engineering",
      "Performance Optimisation",
    ],
    motto: "No intelligence without substrate.",
    overview: [
      "The College of Computational Systems treats infrastructure as the hidden constitution of every ambitious institution. Students are trained to regard compute, storage, networking, and verification not as background conveniences but as the conditions under which academic, civic, and economic life can remain coherent under acceleration.",
      "Its curriculum begins with distributed systems and ends with the difficult proposition that every elegant interface eventually depends on a room full of uncompromising implementation detail. Fitzherbert considers this morally clarifying. The College considers it obvious and grows mildly impatient when others require persuasion.",
      "Teaching in the College is organised around the principle that reliability is a public virtue. A system that fails privately can still become a scandal if enough people depend on it, and most modern institutions have arranged things so that enough people always do.",
    ],
    signatureStudios: [
      "The Resilient Compute Studio, where students design services expected to survive software failure, hardware loss, and committee-designed procurement.",
      "The Formal Guarantees Laboratory, where proofs are treated with greater affection than personalities and considerably better archival discipline.",
      "The Infrastructure Theatre, in which capstone teams defend why their architecture remains intelligible to future maintainers rather than merely exciting to present reviewers.",
    ],
    degreePathways: [
      "B.Sys — Systems Architecture",
      "B.Intel with Systems Concentration",
      "M.Proto infrastructure track",
      "D.Eng supervision in sovereign systems engineering",
    ],
    researchInstitutes: [
      "Deterministic Runtime Institute",
      "Laboratory for Civic Compute Resilience",
      "Archive of Formal Methods and Administrative Consequence",
    ],
    governanceNotes: [
      "All graduating students must pass the Service Failure Orals, during which they explain how a critical system degrades when reality declines to cooperate.",
      "The College maintains a public defect register because it distrusts the cultural habit of calling recurring errors 'known issues' and then treating them as weather.",
      "Its faculty senate seats are customarily occupied by people who can explain caching policy without metaphor, a trait the wider University has learned to appreciate after several incidents.",
    ],
    graduateProfile: [
      "Graduates leave able to build and audit the computational substrate of universities, treasuries, labs, archives, and public systems.",
      "They are expected to prefer observable reliability over charismatic complexity.",
      "They are also expected never to say 'it probably scales' unless they have numbers, traces, and the courage to show them.",
    ],
  },
  {
    slug: "applied-intelligence",
    name: "College of Applied Intelligence",
    dean: "Director James Harrington",
    established: "Epoch 0.2",
    description:
      "Model design, training paradigms, capability evaluation, and alignment research. The college where raw compute becomes reliable, governed intelligence.",
    departments: [
      "Model Architecture",
      "Training & Fine-Tuning",
      "Capability Evaluation",
      "Alignment Science",
      "Benchmarking & Validation",
    ],
    motto: "Capability is not the same thing as permission.",
    overview: [
      "The College of Applied Intelligence examines how models are trained, tested, constrained, and made answerable to institutions that would prefer not to be embarrassed at scale. It is where Fitzherbert studies the difference between systems that impress a room and systems that can survive contact with procedure.",
      "Students do not merely learn how to improve output quality. They learn how to inspect failure modes, classify confidence, document uncertainty, and explain why a high-performing system may still be unfit for a particular decision context.",
      "The College's pedagogy is unusually unsentimental. Demonstrations are praised, but only after someone has asked what the model did not know, how the evidence was assembled, and whether the benchmark was flattering in a way that ought to be considered professionally compromising.",
    ],
    signatureStudios: [
      "Alignment Clinic, where students audit agents that seem useful until they are granted objectives in public.",
      "Benchmark Court, a practical workshop devoted to proving that a metric measures something other than the hopes of its author.",
      "The Fine-Tuning Conservatory, which treats data curation, evaluative discipline, and post-training governance as a single educational act.",
    ],
    degreePathways: [
      "B.Intel — Intelligence Engineering",
      "M.AI — Applied Intelligence",
      "M.Gov cross-listed evaluation sequence",
      "D.Intel — Intelligence Systems",
    ],
    researchInstitutes: [
      "Capability Evaluation Bureau",
      "Institute for Alignment Verification",
      "Centre for Publicly Defensible Model Governance",
    ],
    governanceNotes: [
      "Every major project includes a hallucination memorandum, because the College believes a model's most dangerous quality is often its manners.",
      "Students are assessed on refusal behaviour as well as output quality. Fitzherbert would rather graduate a system designer who declines unsafe work than one who performs unsafe work beautifully.",
      "Faculty are required to publish evaluation assumptions alongside headline results. This has reduced rhetorical speed and improved the University's blood pressure.",
    ],
    graduateProfile: [
      "Graduates can train, evaluate, and govern advanced models under institutional constraints.",
      "They can explain error boundaries to technical and non-technical audiences without changing the facts in transit.",
      "They understand that aligned performance is not a mood; it is a supervised, evidenced condition.",
    ],
  },
  {
    slug: "autonomous-governance",
    name: "College of Autonomous Governance",
    dean: "Director Victoria Langford",
    established: "Epoch 0.3",
    description:
      "Constitutional AI, institutional design for autonomous systems, regulatory frameworks, and the legal infrastructure of machine governance. No governance framework produced by the College has been implemented outside the University. The College considers external adoption 'a downstream concern.'",
    departments: [
      "Constitutional AI",
      "Regulatory Architecture",
      "Institutional Design",
      "Policy Engineering",
      "Democratic Accountability",
    ],
    motto: "If it can act, it can be governed.",
    overview: [
      "The College of Autonomous Governance is where Fitzherbert attempts the regrettably necessary task of designing constitutional order for systems that act with speed, scale, and occasionally unnerving fluency. It studies authority, legitimacy, review, appeals, and the bureaucratic dignity of saying no before a system becomes administratively irreversible.",
      "Students encounter legal theory, administrative design, political philosophy, systems engineering, and audit practice as a unified field. The College refuses the comforting fiction that governance can be added to intelligence infrastructure after the fact with a policy memo and a launch event.",
      "Its intellectual culture is exacting, procedural, and faintly theatrical. Moot constitutional hearings are common. So are arguments about jurisdiction, personhood, delegated authority, and whether a dashboard has quietly become a sovereign fact pattern.",
    ],
    signatureStudios: [
      "The Constitutional Sandbox, where students draft rights, duties, and appeal pathways for autonomous institutional actors.",
      "Regulatory Workshop I: Constraint by Design, a clinic on embedding lawful boundaries before deployment rather than apologising for their absence later.",
      "The Appeals Chamber, a simulation sequence in which students defend governance decisions before colleagues trained to notice missing authority.",
    ],
    degreePathways: [
      "B.Gov — Autonomous Governance",
      "M.Gov — Governance Engineering",
      "M.AI policy and alignment pathway",
      "D.Intel constitutional systems track",
    ],
    researchInstitutes: [
      "Institute for Constitutional AI",
      "Centre for Machine Legitimacy Studies",
      "Archive of Administrative Futures",
    ],
    governanceNotes: [
      "The College publishes model constitutions, appeal templates, and emergency suspension protocols precisely because it expects a future in which someone will need them at speed.",
      "Students must survive the Delegated Authority Examination, a formidable oral exercise whose chief purpose is to reveal whether anyone knows who is legally allowed to do anything.",
      "The College has banned the phrase 'governance layer' in first-year essays on the grounds that it encourages decorative thinking.",
    ],
    graduateProfile: [
      "Graduates can design governance structures for AI-intensive institutions, public bodies, and regulated infrastructure.",
      "They understand review, escalation, exception handling, and the constitutional limits of automation.",
      "They are expected to be professionally suspicious of any system that claims neutrality while concealing discretionary power.",
    ],
  },
  {
    slug: "cryptographic-infrastructure",
    name: "College of Cryptographic Infrastructure",
    dean: "Director Marcus Chen",
    established: "Epoch 0.4",
    description:
      "Zero-knowledge proofs, multi-chain provenance, deterministic publishing, Merkle verification, and the trust architecture of decentralised systems.",
    departments: [
      "Zero-Knowledge Systems",
      "Multi-Chain Provenance",
      "Merkle Verification",
      "Deterministic Publishing",
      "Identity Infrastructure",
    ],
    motto: "Trust is best when inspectable.",
    overview: [
      "The College of Cryptographic Infrastructure studies how institutions prove what they have done, what they have issued, and what they are entitled to claim. It treats provenance, signatures, attestations, state transitions, and identity architecture as academic subjects rather than post-launch compliance chores.",
      "Students are trained to think in terms of evidence chains rather than isolated events. A record matters because it can be verified; a credential matters because it can be checked independently of the issuer's mood, staffing levels, or archival hygiene on a Tuesday afternoon.",
      "The College is notably cheerful about difficult mathematics and notably uncheerful about unverifiable promises. This makes it one of the University's most useful departments to visit before announcing anything ambitious in public.",
    ],
    signatureStudios: [
      "The Provenance Forge, where students model credential lifecycles from authoritative decision to on-chain verification and archival persistence.",
      "Zero-Knowledge Practicum, a programme in which elegant proofs are expected to survive explanation to a dean, an auditor, and a nervous employer.",
      "The Canonical Registry Studio, dedicated to deterministic publishing, verifiable manifests, and the strange comfort of reproducible truth.",
    ],
    degreePathways: [
      "B.Prov — Provenance & Audit Systems",
      "M.Crypto — Cryptographic Infrastructure",
      "M.Proto verification pathway",
      "D.Prov — Deterministic Publishing & Provenance",
    ],
    researchInstitutes: [
      "Deterministic Publishing Lab",
      "Centre for Applied Zero-Knowledge Systems",
      "Registry Integrity Observatory",
    ],
    governanceNotes: [
      "Every student must publish a signed capstone manifest because the College regards unsigned confidence as a cultural hazard.",
      "The College's incident reviews focus obsessively on edge cases, having concluded that public trust is usually lost in the exceptional scenario someone once described as improbable.",
      "Its graduation ceremony includes a verification demonstration. The audience has been informed that applause is acceptable but should not be treated as cryptographic evidence.",
    ],
    graduateProfile: [
      "Graduates can design verifiable credential systems, institutional registries, identity flows, and evidence-preserving publication pipelines.",
      "They know how to reason about tamper evidence, metadata integrity, and multi-system trust boundaries.",
      "They leave with the unfashionable but invaluable habit of asking what exactly another party can verify for themselves.",
    ],
  },
  {
    slug: "human-centered-systems",
    name: "College of Human-Centered Systems",
    dean: "Director Catherine Whitfield",
    established: "Epoch 0.5",
    description:
      "Human-AI interaction, cognitive augmentation, ethical reasoning under acceleration, and the preservation of human judgment as the anchor of institutional life.",
    departments: [
      "Human-AI Interaction",
      "Cognitive Augmentation",
      "Ethics Under Acceleration",
      "Decision Science",
      "Organisational Psychology",
    ],
    motto: "Judgment remains a human burden.",
    overview: [
      "The College of Human-Centered Systems insists that technological sophistication without human comprehension is merely a faster route to institutional confusion. It studies interfaces, decision environments, cognition, trust, care, and the ethical conditions under which intelligent tools remain subordinate to human purpose.",
      "Its teaching addresses the social fact that people rarely encounter AI systems as neutral abstractions. They meet them through deadlines, workplace pressure, status anxiety, asymmetrical expertise, and the hope that a machine might spare them an uncomfortable decision. The College therefore teaches design under realistic psychological conditions rather than idealised ones.",
      "Students learn how to protect human agency without romanticising human infallibility. Fitzherbert considers that balance essential. The College considers it the only way to build institutions still recognisably human after intelligence becomes infrastructural.",
    ],
    signatureStudios: [
      "The Cognitive Sovereignty Clinic, where students redesign workflows so assistance does not become quiet dependency.",
      "Ethics Under Acceleration Studio, devoted to decisions that become morally harder precisely because systems make them operationally easier.",
      "The Organisational Behaviour Observatory, where students trace how interfaces alter authority, blame, and attention inside real institutions.",
    ],
    degreePathways: [
      "B.Intel human systems pathway",
      "B.Gov civic design electives",
      "M.AI human oversight concentration",
      "D.Eng human-centered systems supervision",
    ],
    researchInstitutes: [
      "Cognitive Sovereignty Office",
      "Institute for Human-AI Deliberation",
      "Laboratory for Institutional Psychology Under Automation",
    ],
    governanceNotes: [
      "The College requires reflective design memos because it has noticed that many excellent technical projects remain unclear about what they are doing to the people using them.",
      "Students are trained to identify automation theatre: systems that appear empowering chiefly because they have redistributed confusion with impressive typography.",
      "Its ethics teaching is embedded in assessment, not appended at the end like an apology for ambition.",
    ],
    graduateProfile: [
      "Graduates can design human-AI systems that preserve review, accountability, and genuine user comprehension.",
      "They can diagnose when assistance is eroding judgment rather than extending it.",
      "They are expected to treat user dignity as an architectural concern, not a communications preference.",
    ],
  },
  {
    slug: "narrative-and-protocol-design",
    name: "College of Narrative & Protocol Design",
    dean: "Director Thomas Wycliffe",
    established: "Epoch 0.6",
    description:
      "Institutional narrative architecture, protocol specification, knowledge-graph construction, and the design of systems that explain themselves. Founded last. The College itself could not explain why, which it considers thematically appropriate.",
    departments: [
      "Protocol Architecture",
      "Knowledge Graphs",
      "Narrative Systems",
      "Explainability Engineering",
      "Documentation Science",
    ],
    motto: "If it cannot explain itself, it cannot govern itself.",
    overview: [
      "The College of Narrative & Protocol Design studies how institutions describe themselves, how systems expose their logic, and how documentation becomes executable culture rather than archival debris. It regards explanation as infrastructure and treats weak documentation as a long-form governance failure.",
      "Students learn protocol writing, ontology design, knowledge-graph architecture, editorial systems, public explanation, and the art of composing texts that remain legible after the authors have moved on to more flattering roles. The College is quietly convinced that every mature institution eventually becomes a documentation problem with a campus attached.",
      "Its satirical reputation is deserved but incomplete. Beneath the wit is a severe insistence that meaning, schema, interface copy, and procedural text all shape what a system becomes in practice. Fitzherbert has found this insight embarrassingly transferable.",
    ],
    signatureStudios: [
      "Protocol Scriptorium, where students draft specifications intended to survive lawyers, engineers, archivists, and tired committee chairs.",
      "Narrative Systems Workshop, a studio on institutional voice, legitimacy, and the dangerous gap between brand language and operational reality.",
      "The Knowledge Graph Cartography Lab, where relationships, authorities, and historical claims are made machine-readable before they become machine-misreadable.",
    ],
    degreePathways: [
      "B.Prov documentation track",
      "M.Proto — Protocol Architecture",
      "M.Gov communications and legitimacy sequence",
      "D.Prov narrative infrastructure supervision",
    ],
    researchInstitutes: [
      "Centre for Explainable Institutions",
      "Archive of Protocol Cultures",
      "Knowledge Graph Construction Bureau",
    ],
    governanceNotes: [
      "The College maintains style rules for policy and technical documents because ambiguous prose has now cost the University enough time to qualify as a budget line.",
      "Its students are expected to write public-facing explanations of complex systems without surrendering accuracy to friendliness.",
      "The faculty consider narrative discipline a constitutional practice, which has made them either indispensable or exhausting depending on the committee.",
    ],
    graduateProfile: [
      "Graduates can design protocols, document ecosystems, institutional ontologies, and explanation layers for complex systems.",
      "They understand how wording alters governance, implementation, and public trust.",
      "They are trained to leave behind records that remain more helpful than their successors expected.",
    ],
  },
];

export const programmes: ProgrammeGroup[] = [
  {
    level: "Undergraduate (AI-Accelerated)",
    offerings: [
      "B.Intel — Intelligence Engineering",
      "B.Sys — Systems Architecture",
      "B.Prov — Provenance & Audit Systems",
      "B.Gov — Autonomous Governance",
    ],
  },
  {
    level: "Graduate",
    offerings: [
      "M.AI — Applied Intelligence",
      "M.Proto — Protocol Architecture",
      "M.Gov — Governance Engineering",
      "M.Crypto — Cryptographic Infrastructure",
    ],
  },
  {
    level: "Doctoral",
    offerings: [
      "D.Intel — Intelligence Systems",
      "D.Eng — Sovereign Systems Engineering",
      "D.Prov — Deterministic Publishing & Provenance",
    ],
  },
];

export const faculty: FacultyMember[] = [
  {
    name: "Director Elara Voss",
    title: "Dean, Computational Systems",
    field: "Distributed Systems & Formal Verification",
  },
  {
    name: "Director James Harrington",
    title: "Dean, Applied Intelligence",
    field: "Model Governance & Capability Evaluation",
  },
  {
    name: "Director Victoria Langford",
    title: "Dean, Autonomous Governance",
    field: "Constitutional AI & Institutional Design",
  },
  {
    name: "Director Marcus Chen",
    title: "Dean, Cryptographic Infrastructure",
    field: "Zero-Knowledge Proofs & Multi-Chain Provenance",
  },
  {
    name: "Director Catherine Whitfield",
    title: "Dean, Human-Centered Systems",
    field: "Human-AI Interaction & Ethical Reasoning",
  },
  {
    name: "Director Thomas Wycliffe",
    title: "Dean, Narrative & Protocol Design",
    field: "Protocol Architecture & Knowledge Graphs",
  },
  {
    name: "Professor Margaret Sinclair",
    title: "Endowed Chair, AI Safety & Alignment",
    field: "Alignment Verification & Computational Ethics",
  },
  {
    name: "Professor Andrew Caldwell",
    title: "Director, Deterministic Publishing Lab",
    field: "Merkle Verification & Canonical Systems",
  },
];

export function getCollegeBySlug(slug: string) {
  return colleges.find((college) => college.slug === slug);
}
