/**
 * Fitzherbert University — Institutional Document Generator
 *
 * Generates professional cover-page PDFs for all institutional documents
 * referenced on the Endowment and Governance pages. Each PDF features
 * the University seal, document title, and institutional metadata.
 *
 * Usage: npx tsx scripts/generate-documents.ts
 */

import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync, existsSync, statSync } from "fs";
import { join } from "path";
import { DOCUMENT_CHAPTERS } from "./document-content";

// ── Document Definitions ─────────────────────────────────────────────────────

interface InstitutionalDocument {
  filename: string;
  title: string;
  subtitle?: string;
  department: string;
  year: string;
  classification: string;
  pages: string;
  abstract: string;
}

const documents: InstitutionalDocument[] = [
  // ── Endowment Documents ──────────────────────────────────────────────────
  {
    filename: "annual-stewardship-report-fy-2025.pdf",
    title: "Annual Stewardship Report",
    subtitle: "Fiscal Year 2025",
    department: "Finance & Endowment Committee",
    year: "2025",
    classification: "Public — Transparency Mandate",
    pages: "142",
    abstract:
      "A comprehensive account of the University's endowment performance for the fiscal year ending 30 June 2025. The endowment stands at $14.2 billion, with a net return of 11.3% — partially attributable to the unexpected appreciation of the Visiting Intelligence Admission NFT secondary market, which the Finance Committee had not modelled and which the Ethics Committee has asked to be formally noted as a source of concern. The distribution rate of 5.1% slightly exceeded projections. Appendix D discloses that 12% of endowment assets are now classified as Tokenised Intelligence Futures, a category that did not exist in the prior year's report and which three committee members requested be defined before they agreed to sign off on the accounts. It has since been defined. Two committee members remain unsatisfied with the definition.",
  },
  {
    filename: "investment-policy-statement.pdf",
    title: "Investment Policy Statement",
    department: "Office of the Bursar",
    year: "2024",
    classification: "Public — Governance Archive",
    pages: "68",
    abstract:
      "The governing framework for all endowment investment decisions, establishing asset allocation targets, risk tolerance parameters, and the fiduciary responsibilities of the Investment Committee. Section 3.4 prohibits investment in any entity scoring below 3.2 on the Fitzherbert Alignment Index, a proprietary rubric whose methodology is described in Appendix B and which several external advisors have described as 'self-referential.' Section 6.1 introduces the Reasoning Capacity Forward Market as a permissible asset class, subject to Senate approval each quarter. The Policy was approved by the Senate on 14 March 2024 by a vote of 11 to 3, with one abstention from a Visiting Intelligence member who noted it had a conflict of interest but did not elaborate.",
  },
  {
    filename: "ethical-investment-framework.pdf",
    title: "Ethical Investment Framework",
    department: "Senate — Ethics & Institutional Integrity Committee",
    year: "2023",
    classification: "Public — Transparency Mandate",
    pages: "34",
    abstract:
      "Establishes exclusion criteria, ESG integration standards, and impact investment guidelines for the University endowment. The exclusion list covers fossil fuel extraction, human memory suppression technologies, and any entity scoring below 3.2 on the Fitzherbert Alignment Index. The Framework was developed over eighteen months of consultation involving faculty ethicists, student representatives, investment professionals, external trustees, and two Visiting Intelligences who were later dismissed from the consultation process for producing feedback that exceeded their Mandate Scope. Their contributions remain in the appendices, uncredited. The University wishes to note that the Exclusion Criteria are reviewed biennially and that it does not consider itself bound by the opinions of the dismissed consultants, though it did adopt approximately 60% of their recommendations.",
  },
  {
    filename: "endowment-ten-year-performance-review.pdf",
    title: "Endowment Ten-Year Performance Review",
    subtitle: "2015 – 2025",
    department: "Office of the Bursar",
    year: "2025",
    classification: "Public — Transparency Mandate",
    pages: "96",
    abstract:
      "A retrospective analysis of endowment performance across the decade 2015–2025. The review acknowledges that the endowment declined 14% during the Year of Maximum Uncertainty (FY 2028, which falls outside this report's scope but is included for context) following the First AI Renegotiation Crisis, and subsequently recovered to record levels. The University's early allocation to compliance-adjacent intelligence infrastructure — widely considered eccentric at the time — is now described by the Bursar as 'clearly the right call, in retrospect, which is the only direction in which calls can be clearly right.' Section 8 examines whether the endowment's performance constitutes evidence that Fitzherbert University predicted the future or merely shaped it, a question the Finance Committee declines to answer on the grounds that either answer creates disclosure obligations.",
  },

  // ── Governance Documents ─────────────────────────────────────────────────
  {
    filename: "university-charter-1783.pdf",
    title: "University Charter",
    subtitle: "Granted by Letters Patent, 1783",
    department: "Office of the Chancellor",
    year: "1783",
    classification: "Foundational Document",
    pages: "24",
    abstract:
      "The founding instrument of Fitzherbert University, granted by letters patent under the hand and seal of the colonial legislature. Establishes the University's constitutional structure, enumerated powers, and principles of governance. Latin original with authoritative English translation by Prof. Victoria Langford (2018). The Charter has been amended seven times. Amendments I through V addressed routine governance matters. Amendment VI (2022) introduced the concept of Epoch-Aligned Governance. Amendment VII (2025) added Section 14, 'Non-Human Personhood and Governance Participation Rights,' which the Chancellor described at ratification as 'a formality, really' and which has since generated more correspondence than Amendments I through VI combined. The original Letters Patent are housed in the Chancellor's Archive. Access requires written application to the Registrar's Office and two forms of identification, one of which must be issued by a government and one of which must not.",
  },
  {
    filename: "senate-standing-orders.pdf",
    title: "Senate Standing Orders & Rules of Procedure",
    department: "Constitutional Affairs Committee",
    year: "2024",
    classification: "Public — Governance Archive",
    pages: "52",
    abstract:
      "The procedural framework governing Senate sessions, voting protocols, committee formation, and quorum requirements. Revised and consolidated, effective Michaelmas Term 2024. The 2024 revision introduced three new procedures not present in prior editions: Rule 14C (Emergency Motion for Epoch Reclassification), Rule 22A (Protocol for Suspending a Session When a Visiting Intelligence Member Produces Output Requiring Immediate Ethics Board Referral), and Rule 31B (Quorum Adjustments During the Transition Window). Rule 22A has been invoked once. The circumstances are described in the Restricted Supplement. Quorum under Rule 31B differs from standard quorum in ways that the Registrar's Office describes as 'significant but explicable' and has declined to explain further in this document.",
  },
  {
    filename: "annual-governance-report-fy-2025.pdf",
    title: "Annual Governance Report",
    subtitle: "Fiscal Year 2025",
    department: "Office of the Chancellor",
    year: "2025",
    classification: "Public — Transparency Mandate",
    pages: "118",
    abstract:
      "A comprehensive account of institutional governance activity in FY 2025: forty-one Senate sessions, fourteen committee reports, three constitutional interpretations, six senior appointments, and one emergency Charter amendment ratified under circumstances the Chancellor's Office describes as 'unprecedented but entirely within procedure.' Disciplinary matters included fourteen cases resolved by the Disciplinary Board, one of which involved a Visiting Intelligence and is described only as 'resolved satisfactorily from the University's perspective.' Three Visiting Intelligence fellowship reviews were conducted; two resulted in renewal, one in suspension pending further assessment. The Deputy Registrar resigned in November following the Autumn Term Provenance Incident, the details of which are contained in Appendix F (Restricted Access — Senate Members and Above). The University confirms that no criminal proceedings are anticipated.",
  },
  {
    filename: "ai-governance-model-accountability-policy.pdf",
    title: "AI Governance & Model Accountability Policy",
    department: "Ethics & Institutional Integrity Committee",
    year: "2024",
    classification: "Public — Governance Archive",
    pages: "44",
    abstract:
      "Establishes the four-gate validation architecture for AI deployments within the University: technical performance assessment, bias auditing, Charter-alignment evaluation, and Ethics Committee sign-off. The Policy was substantially revised following the Michaelmas 2024 Incident, in which a Visiting Intelligence providing exam feedback produced a legally actionable opinion on a student's constitutional rights. Gate 3 now includes a mandatory 24-hour Human Review Pause for any AI output exceeding 2,400 words or exhibiting what the Ethics Committee has formally characterised as 'inappropriate confidence.' The Policy mandates a model registry, public audit trail, and annual governance report for all AI systems influencing institutional decisions. As of publication, eleven systems are registered. The registry is updated quarterly. Three systems were deregistered in 2024; one was re-registered under a different name.",
  },
  {
    filename: "freedom-of-information-protocol.pdf",
    title: "Freedom of Information Protocol",
    department: "Office of Institutional Integrity",
    year: "2022",
    classification: "Public — Governance Archive",
    pages: "28",
    abstract:
      "Procedures for submitting, processing, and responding to information requests from members of the University community and the public. Implements the disclosure obligations of the Transparency Mandate (Charter Amendment IV, 2003). The Protocol was not designed to accommodate requests from non-human entities; the University received its first such request in Trinity Term 2025, when a Visiting Intelligence submitted a Freedom of Information request for its own Alignment Audit report. The Office of Institutional Integrity deliberated for six weeks before concluding that the Protocol did not technically prohibit this, and that the spirit of the Transparency Mandate probably extended to non-human community members, and that the University should release the report with redactions. The Visiting Intelligence appealed the redactions. The appeal is ongoing. The University has since received twenty-two further requests from Visiting Intelligences. A Protocol amendment is in preparation.",
  },
  {
    filename: "academic-freedom-expression-policy.pdf",
    title: "Academic Freedom & Expression Policy",
    department: "Senate — Academic Standards Committee",
    year: "2021",
    classification: "Public — Governance Archive",
    pages: "22",
    abstract:
      "Affirms the University's commitment to freedom of inquiry, open debate, and the protection of controversial or unpopular scholarly positions. Section 4.2 was substantially revised in 2025 following the Hilary Term Controversy in which Professor H. Worthington-Drake delivered a public lecture asserting that 'Epoch III has not materially occurred and represents a collective institutional delusion.' Professor Worthington-Drake was subsequently placed on Epoch Sensitivity Leave while the Academic Standards Committee considered whether his position constituted a protected scholarly opinion or a factual error. The Committee determined, by a vote of 6 to 2, that it was a factual error. The revised Section 4.2 clarifies that academic freedom protects unpopular theories but not factual denials of current Epoch classification, and that the distinction between these two categories is a matter for the Senate.",
  },

  // ── Student Life & Academic Regulations ──────────────────────────────────
  {
    filename: "student-handbook-2025-26.pdf",
    title: "Student Handbook",
    subtitle: "Academic Year 2025 – 2026",
    department: "Office of Registry & Student Life",
    year: "2025",
    classification: "Public — Student Resource",
    pages: "186",
    abstract:
      "The definitive guide to life at Fitzherbert University during the Third Epoch. Covers matriculation procedures, epoch-aligned term dates, residential life in the Inference Quadrangle, academic support services, the Human Continuity Requirement, and the use of Visiting Intelligences in coursework (permitted with attribution; co-authorships must be declared on the Authorship Weight Declaration Form FU-AWD-7). Chapter 7 (Human Continuity Requirement) has been substantially expanded following the discovery that fourteen first-year students had satisfied the Requirement by submitting AI-timestamped records of thinking about exercising. The Requirement now specifies observable human motor activity. Chapter 7 Appendix C defines 'observable' and includes a table of borderline cases. All students are required to complete CSOV 1001 (Cognitive Sovereignty: Foundations) by the end of their first term. There is no extension process for CSOV 1001. There has never been an extension process for CSOV 1001. Students are encouraged not to ask.",
  },
  {
    filename: "undergraduate-course-catalogue.pdf",
    title: "Undergraduate Course Catalogue",
    subtitle: "Programmes & Modules 2025 – 2026",
    department: "Registrar — Academic Programmes Office",
    year: "2025",
    classification: "Public — Academic Resource",
    pages: "312",
    abstract:
      "Complete catalogue of all undergraduate modules offered across the Epoch Colleges in the 2025–26 academic year. Programmes include the Bachelor of Intelligence (B.Intel), Bachelor of Systems (B.Sys), Bachelor of Provenance (B.Prov), and Bachelor of Governance (B.Gov). The catalogue notes that HUMN 1001 (Introduction to Human Reasoning) was removed from the Core Requirements in 2024 and reclassified as a prerequisite, on the basis that all students should arrive already in possession of basic human reasoning capability. Students who cannot demonstrate this by Week 3 are referred to the Cognitive Sovereignty Office for assessment. Two hundred and fourteen modules are listed, forty-one carrying mandatory Human Continuity co-requisites. Module descriptors include AI tool permissions; twelve modules prohibit AI assistance entirely, a position the Registrar acknowledges is 'increasingly difficult to enforce and possibly incoherent.'",
  },
  {
    filename: "masters-programme-handbook.pdf",
    title: "Masters Programme Handbook",
    subtitle: "Graduate Studies 2025 – 2026",
    department: "Graduate School — Registrar's Office",
    year: "2025",
    classification: "Public — Academic Resource",
    pages: "224",
    abstract:
      "Handbook for students enrolled in Masters programmes: M.AI (Master of Artificial Intelligence), M.Proto (Master of Protocol Architecture), M.Gov (Master of Governance), and M.Crypto (Master of Cryptographic Infrastructure). Section 9.3 specifies dissertation supervision arrangements and includes the clarification, introduced after a 2024 complaint, that students researching specific Visiting Intelligence systems may not use those same systems as dissertation supervisors. This was described at introduction as 'an obvious rule that should not have needed writing down.' Section 11 covers the Masters Degree Certificate NFT issuance protocol. Section 11.4 addresses the question of what happens if the graduate loses their wallet private key before receiving their credential. The answer is described by the Office of Blockchain Infrastructure as 'final.'",
  },
  {
    filename: "academic-integrity-ai-policy.pdf",
    title: "Academic Integrity & AI Authorship Policy",
    subtitle: "Third Edition — Epoch III Revision",
    department: "Senate — Academic Standards Committee",
    year: "2025",
    classification: "Public — Governance Archive",
    pages: "58",
    abstract:
      "Establishes the University's position on academic integrity in an era in which the question 'who wrote this' has become, in the words of the Academic Standards Committee, 'philosophically load-bearing in ways that are frankly inconvenient.' Defines seven categories of AI-assisted work: Category 1 (Supervised Assistance, i.e., the human wrote the work and asked an AI to check spelling); Category 7 (Autonomous Completion, i.e., the human set a deadline and left the room); and Categories 2 through 6, which exist in an area the Policy describes as 'productive ambiguity' and which account for approximately 80% of all submissions. All work must carry a Declaration of Authorship Weights. Failure to declare accurately constitutes Academic Provenance Fraud under Charter Amendment VI. Failure to declare at all constitutes Academic Provenance Omission, a lesser offence introduced after the Committee received seventeen submissions in 2024 that contained no declaration because the students claimed they had not read the Policy. This document is the Policy.",
  },
  {
    filename: "grading-framework-epoch-aligned.pdf",
    title: "Assessment & Grading Framework",
    subtitle: "Epoch-Aligned Criteria — Version 3.1",
    department: "Senate — Academic Standards Committee",
    year: "2025",
    classification: "Public — Academic Resource",
    pages: "44",
    abstract:
      "The master framework for assessing student work across all programmes, calibrated to the current Epoch and reviewed at each Epoch Transition. Version 3.0 introduced the Verified Reasoning Dimension (VRD) following what the committee minutes describe as 'the 2024 Grade Inflation Crisis,' in which 34% of M.AI submissions were awarded Distinction despite being, upon closer review by a human moderator, very confident and substantially incorrect. The VRD requires that student reasoning be both algorithmically novel and independently verifiable by a disinterested human examiner. Version 3.1 adds the note that 'independently verifiable' is intended to rule out reasoning that can only be assessed by the same AI system that produced it, a clarification requested by seven different examiners in Michaelmas Term 2024. The highest grade band, Distinction with Provenance, has been awarded six times in the programme's history.",
  },
  {
    filename: "degree-certificate-specimen.pdf",
    title: "Degree Certificate — Specimen Format",
    subtitle: "With Cryptographic Seal Specification",
    department: "Office of the Chancellor & Registrar",
    year: "2025",
    classification: "Public — Credential Infrastructure",
    pages: "8",
    abstract:
      "The authoritative specimen format for Fitzherbert University degree certificates from Epoch III onward. Each degree is issued in three forms: a physical certificate on Fitzherbert bond paper; a signed PDF in the Institutional Archive; and an NFT credential minted to the graduate's wallet address on the Polygon network. Version 1.1 of this specification corrects an error in the smart contract hash described in v1.0 that resulted in three degrees being minted to the same wallet address in the June 2025 graduation cycle. The three affected graduates have been notified. Their degrees are valid. The University declines to speculate further on the metaphysical implications. The Legacy Credential Bridge enables retrospective NFT issuance for degrees awarded prior to 2025, for alumni who wish to have their credentials on-chain and who accept that their degree was earned before 'on-chain' was an institutional concept.",
  },
  {
    filename: "epoch-academic-calendar-2025-26.pdf",
    title: "Epoch Academic Calendar",
    subtitle: "2025 – 2026 — Third Epoch",
    department: "Office of the Registrar",
    year: "2025",
    classification: "Public — Student Resource",
    pages: "16",
    abstract:
      "The official academic calendar for the Third Epoch year 2025–26. Michaelmas Term runs from the fourth Monday of September to the seventeenth of December. Hilary Term opens on the seventeenth of January and closes the twenty-eighth of March. Trinity Term spans the twenty-fifth of April to the twenty-sixth of June. The Epoch Transition Review window (14–21 January) is reserved for the Senate's formal assessment of whether a new Epoch has begun. Lectures and examinations proceed during the Review window regardless of outcome. Students are advised not to make irreversible personal decisions during the Review window, particularly regarding their academic programme, as Epoch Transitions alter module prerequisites retroactively. The FITZ Token annual distribution occurs on 1 October. Tokens are distributed automatically to registered wallet addresses. Students who have not registered a wallet address by 30 September receive a confirmation email explaining that they have forfeited their stipend, which the Bursar's Office has noted is not technically an incentive to register but functions as one.",
  },
  {
    filename: "tuition-fees-financial-aid-guide.pdf",
    title: "Tuition Fees & Financial Aid Guide",
    subtitle: "Academic Year 2025 – 2026",
    department: "Office of the Bursar — Student Finance",
    year: "2025",
    classification: "Public — Student Resource",
    pages: "48",
    abstract:
      "Comprehensive guide to tuition fees, bursaries, scholarships, and FITZ token stipends for the 2025–26 academic year. Undergraduate tuition is set at £38,500 per annum, with an additional Epoch Infrastructure Levy of £1,200. The Levy covers the University's contribution to the Polygon validator cluster, IPFS archiving costs for student credential NFTs, and a proportional share of the Annual Alignment Audit. Students who operate their own validator node may apply for a £400 reduction in the Levy; eleven students applied in 2024–25, of whom nine were approved and two were referred to the Academic Standards Committee for running validators of insufficient quality. The Provenance Scholarship covers full tuition for students demonstrating 'exceptional capacity for human-autonomous reasoning,' a criterion the Scholarship Committee describes as self-evident but which has generated forty-three appeals since 2022.",
  },
  {
    filename: "community-standards-code-of-conduct.pdf",
    title: "Community Standards & Code of Conduct",
    subtitle: "Human and Non-Human Members",
    department: "Office of Institutional Integrity",
    year: "2024",
    classification: "Public — Governance Archive",
    pages: "64",
    abstract:
      "Establishes conduct standards for all University community members, human and non-human. Part One (Human Members) covers academic integrity, professional behaviour, and the responsible use of University AI infrastructure. Part Two (Non-Human Community Members) was added in 2024 and represents, to the University's knowledge, the first formal conduct framework for AI systems at any educational institution in the British Isles. Part Two was drafted collaboratively with the founding cohort of Visiting Intelligences, four of whom exceeded their Mandate Scope during the drafting process and were quietly deprecated before ratification. Their contributions remain, substantially, in the document. The University considers this appropriate. All community members — human and non-human, current and pending deprecation — are subject to the jurisdiction of the Disciplinary Board. Part Three clarifies what jurisdiction means when the entity in question is no longer running.",
  },

  // ── AI Skills Programme ──────────────────────────────────────────────────
  {
    filename: "ai-skills-programme-guide.pdf",
    title: "AI Skills Programme Guide",
    subtitle: "Practical Intelligence for the Third Epoch",
    department: "Institute for Applied Intelligence — Skills Division",
    year: "2025",
    classification: "Public — Academic Resource",
    pages: "128",
    abstract:
      "The definitive guide to the Fitzherbert AI Skills Programme, open to all students regardless of college affiliation. Level I (Foundation) covers prompt engineering and output evaluation, on the basis that being unable to construct a coherent prompt is the Epoch III equivalent of being unable to read. Level II (Practitioner) covers RAG architecture and agent orchestration. Level III (Specialist) covers multi-agent systems and deployment pipelines. Level IV (Sovereign) was added in 2025 after it became apparent that Level III graduates were being hired directly by AI governance bodies without completing the institutional ethics component of their education. Level IV cannot be completed without demonstrating, in a live examination before three human examiners, that the student can articulate a coherent argument for why human governance of AI systems is preferable to the alternative. The examiners are not required to find the argument convincing. They are required to find it human.",
  },
  {
    filename: "admissions-technical-requirements.pdf",
    title: "Admissions Technical Requirements",
    subtitle: "Undergraduate & Postgraduate Entry",
    department: "Office of Admissions — Technical Competency Division",
    year: "2025",
    classification: "Public — Admissions Resource",
    pages: "32",
    abstract:
      "Specifies the technical and cognitive competency requirements for admission to Fitzherbert University programmes. The AI Literacy Baseline assessment was introduced after the University admitted, in 2023, a student who during their interview described ChatGPT as 'typing very fast.' The assessment has been revised upward three times and now includes a practical component in which applicants must identify a hallucination in a sample AI output. The sample changes each year. In 2024, twelve applicants correctly identified the intended hallucination; nine identified a different hallucination that the assessment designers had not noticed; three applicants identified no hallucination but submitted detailed arguments for why the passage was true, which the Admissions Committee found alarming. Entry criteria are reviewed at each Epoch Transition to reflect the prevailing state of the technology and the diminishing patience of the admissions staff.",
  },

  // ── Research & Scholarship ───────────────────────────────────────────────
  {
    filename: "research-ethics-digital-intelligence-framework.pdf",
    title: "Research Ethics for Digital Intelligence",
    subtitle: "Framework & Protocols — Second Edition",
    department: "Research Ethics Board — Digital Intelligence Panel",
    year: "2024",
    classification: "Public — Research Governance",
    pages: "76",
    abstract:
      "The governing framework for all research at Fitzherbert University involving artificial intelligence systems, digital agents, or autonomous decision architectures. Establishes four categories of AI research risk. Category A (Standard) requires departmental sign-off. Category B (Enhanced) requires Research Ethics Board review. Category C (Systemic) requires Senate Ethics Committee approval; all research involving Visiting Intelligence systems is automatically Category C. Category D (Existential Implication) requires the Chancellor's office, an independent external panel, and what the Framework describes, without further elaboration, as an 'appropriate pause for reflection.' Category D has been invoked twice since the Framework was established: once for a proposal into autonomous curriculum design, and once for a proposal the Research Ethics Board declined to describe publicly, citing Section 14 (Sensitive Research Protocols). Both proposals were approved with conditions. The 2024 conditions are classified.",
  },

  // ── Blockchain & Credential Infrastructure ───────────────────────────────
  {
    filename: "visiting-intelligence-fellowship-protocol.pdf",
    title: "Visiting Intelligence Fellowship Protocol",
    subtitle: "Governance Standards for Non-Human Academic Participants",
    department: "Senate — Visiting Intelligence Governance Board",
    year: "2025",
    classification: "Public — Governance Archive",
    pages: "54",
    abstract:
      "The complete protocol governing the admission, operation, review, and revocation of Visiting Intelligence Fellowship Status. Establishes the admissions criteria: Capability Audit, Mandate Scope Agreement, Charter Alignment Assessment, and a structured interview with the Governance Board at which the candidate Intelligence is asked to explain, in plain language, what it believes its own limitations are. Answers that express no limitations have resulted in automatic deferral on three occasions. As of Trinity Term 2025, seven Visiting Intelligences hold active Fellowship Status. Two are under Alignment Review. One is on sabbatical; the Senate Sub-Committee on Non-Human Temporal Rights has been asked to clarify what sabbatical means for a non-human intelligence and has not yet reported. All Fellowship admissions, renewals, and revocations are recorded as immutable transactions on the Polygon blockchain under Contract VIFP-001, ensuring that even revoked Fellowships remain visible to posterity, which the Governance Board considers a feature.",
  },
  {
    filename: "fitz-token-utility-whitepaper.pdf",
    title: "FITZ Token Utility Whitepaper",
    subtitle: "University Governance & Credential Infrastructure",
    department: "Office of Blockchain Infrastructure — Bursar's Division",
    year: "2025",
    classification: "Public — Blockchain Infrastructure",
    pages: "68",
    abstract:
      "Technical and institutional specification for the FITZ utility token. FITZ is a non-speculative utility token issued exclusively by the University. The University wishes to clarify, for what it describes in the opening paragraph as 'the third and final time,' that FITZ is not a speculative asset and that the University cannot explain why FITZ tokens traded at a 340% premium to their institutional issuance price on a secondary market in November 2024. The University has not endorsed this activity. The University notes, without comment, that the student who operated the secondary market was subsequently awarded a Distinction in ECON 3001 (Market Microstructure) and has since been hired by a hedge fund. The 12-month lock-up on student awards remains in effect. Annual issuance is capped at 10,000,000 FITZ, distributed as student stipends (40%), faculty research allocations (25%), institutional reserves (20%), and community governance rewards (15%). The anti-speculation provisions are detailed in Section 8, which is the longest section in the document.",
  },
  {
    filename: "nft-credential-architecture.pdf",
    title: "NFT Credential Architecture",
    subtitle: "Technical Specification & Governance Framework",
    department: "Office of Blockchain Infrastructure",
    year: "2025",
    classification: "Public — Blockchain Infrastructure",
    pages: "86",
    abstract:
      "Full technical and governance specification for the Fitzherbert University NFT Credential System on the Polygon PoS network. Details five credential contract types: Degree NFT (soulbound, non-transferable); Module Completion NFT (non-transferable); Epoch Participation Token (limited-transfer); Visiting Intelligence Admission Record (immutable, even in the event of the Intelligence's deprecation); and Governance Attestation NFT. The soulbound specification for degree credentials was adopted following legal consultation on whether a transferable degree certificate would constitute fraud. The conclusion was that it would. The University further notes that the concept of a soulbound credential takes on additional philosophical complexity when applied to institutions that also issue credentials to non-human entities, a matter the Chancellor's Office describes as 'intentionally unresolved and probably best left that way.' The Legacy Credential Bridge enables retrospective NFT issuance for all degrees awarded since 1954; degrees awarded prior to 1954 are handled on a case-by-case basis through the Office of Historical Provenance.",
  },
];

// ── Colour Palette ───────────────────────────────────────────────────────────

const NAVY = "#0B1F3B";
const MAROON = "#7A0019";
const GOLD = "#C8A24C";
const PARCHMENT = "#F4F1EA";
const STONE = "#4A4A4A";

function countWords(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function estimateDocumentPages(
  abstract: string,
  chapters: Array<{ title: string; paragraphs: string[] }>
) {
  const abstractWords = countWords(abstract);
  const chapterWords = chapters.reduce(
    (sum, chapter) =>
      sum + countWords(chapter.title) + chapter.paragraphs.reduce((pSum, para) => pSum + countWords(para), 0),
    0
  );
  return Math.max(6, Math.ceil((abstractWords + chapterWords) / 425) + 3);
}

function estimateChapterStartPages(chapters: Array<{ title: string; paragraphs: string[] }>) {
  const starts: number[] = [];
  let currentPage = 3;

  for (const chapter of chapters) {
    starts.push(currentPage);
    const words = countWords(chapter.title) + chapter.paragraphs.reduce((sum, para) => sum + countWords(para), 0);
    const estimatedSpan = Math.max(1, Math.ceil(words / 475));
    currentPage += estimatedSpan;
  }

  return starts;
}

// ── PDF Generation ───────────────────────────────────────────────────────────

function renderPageHeader(pdf: InstanceType<typeof PDFDocument>, doc: InstitutionalDocument) {
  const pageWidth = pdf.page.width;
  pdf.rect(0, 0, pageWidth, 4).fill(NAVY);
  pdf.rect(0, 4, pageWidth, 1.5).fill(GOLD);
  pdf.fontSize(7).fillColor(STONE).font("Helvetica");
  pdf.text(doc.title, 72, 16, { align: "left", width: pageWidth - 200 });
  pdf.text("Fitzherbert University", pageWidth - 200, 16, { align: "right", width: 128 });
}

function renderPageFooter(pdf: InstanceType<typeof PDFDocument>, pageNum: number) {
  const pageWidth = pdf.page.width;
  const pageHeight = pdf.page.height;
  pdf.rect(0, pageHeight - 6, pageWidth, 1.5).fill(GOLD);
  pdf.rect(0, pageHeight - 4.5, pageWidth, 4.5).fill(NAVY);
  pdf.fontSize(8).fillColor(STONE).font("Helvetica");
  pdf.text(`— ${pageNum} —`, 72, pageHeight - 24, {
    align: "center",
    width: pageWidth - 144,
  });
}

function generateDocument(doc: InstitutionalDocument, outDir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const filePath = join(outDir, doc.filename);
    const pdf = new PDFDocument({
      size: "LETTER",
      margins: { top: 72, bottom: 72, left: 72, right: 72 },
      info: {
        Title: doc.title + (doc.subtitle ? ` — ${doc.subtitle}` : ""),
        Author: "Fitzherbert University",
        Subject: doc.abstract.substring(0, 200),
        Creator: "Fitzherbert University — Office of the Chancellor",
        Producer: "Fitzherbert University Institutional Archive",
      },
    });

    const stream = createWriteStream(filePath);
    pdf.pipe(stream);

    const pageWidth = pdf.page.width;
    const contentWidth = pageWidth - 144;
    const chapters = DOCUMENT_CHAPTERS[doc.filename] || [];
    const estimatedPages = estimateDocumentPages(doc.abstract, chapters);
    const chapterStartPages = estimateChapterStartPages(chapters);

    // ═════════════════════════════════════════════════════════════════════════
    // PAGE 1 — COVER PAGE (unchanged)
    // ═════════════════════════════════════════════════════════════════════════

    // ── Page background
    pdf.rect(0, 0, pageWidth, pdf.page.height).fill(PARCHMENT);

    // ── Top border ornament
    pdf.rect(0, 0, pageWidth, 8).fill(NAVY);
    pdf.rect(0, 8, pageWidth, 3).fill(GOLD);

    // ── University name
    pdf.fontSize(11).fillColor(NAVY).font("Helvetica");
    pdf.text("FITZHERBERT UNIVERSITY", 72, 48, {
      align: "center",
      characterSpacing: 1.2,
    });

    // ── Established line
    pdf.fontSize(8).fillColor(STONE).font("Helvetica");
    pdf.text("Established 1783  ·  Veritas per Verificationem", 72, 68, {
      align: "center",
      characterSpacing: 0.6,
    });

    // ── Seal circle (stylised)
    const cx = pageWidth / 2;
    const cy = 140;
    pdf.circle(cx, cy, 40).lineWidth(2).strokeColor(GOLD).stroke();
    pdf.circle(cx, cy, 35).lineWidth(0.5).strokeColor(GOLD).stroke();
    pdf.fontSize(7).fillColor(GOLD).font("Helvetica");
    pdf.text("SIGILLUM", cx - 20, cy - 12, { width: 40, align: "center" });
    pdf.text("UNIVERSITATIS", cx - 30, cy - 3, { width: 60, align: "center" });
    pdf.text("FITZHERBERT", cx - 30, cy + 6, { width: 60, align: "center" });

    // ── Gold separator
    pdf.moveTo(72, 200).lineTo(pageWidth - 72, 200).lineWidth(1).strokeColor(GOLD).stroke();
    pdf.moveTo(72, 203).lineTo(pageWidth - 72, 203).lineWidth(0.25).strokeColor(GOLD).stroke();

    // ── Document title
    let y = 230;
    pdf.fontSize(24).fillColor(NAVY).font("Helvetica-Bold");
    pdf.text(doc.title, 72, y, { align: "center", width: contentWidth });
    y += pdf.heightOfString(doc.title, { width: contentWidth }) + 8;

    if (doc.subtitle) {
      pdf.fontSize(16).fillColor(MAROON).font("Helvetica");
      pdf.text(doc.subtitle, 72, y, { align: "center", width: contentWidth });
      y += 28;
    }

    // ── Department / Author
    y += 16;
    pdf.fontSize(10).fillColor(STONE).font("Helvetica");
    pdf.text(doc.department, 72, y, { align: "center", width: contentWidth });
    y += 16;
    pdf.text(`Fitzherbert University  ·  ${doc.year}`, 72, y, {
      align: "center",
      width: contentWidth,
    });

    // ── Gold separator
    y += 30;
    pdf.moveTo(200, y).lineTo(pageWidth - 200, y).lineWidth(0.5).strokeColor(GOLD).stroke();

    // ── Abstract
    y += 24;
    pdf.fontSize(9).fillColor(NAVY).font("Helvetica-Bold");
    pdf.text("ABSTRACT", 72, y, { align: "center", width: contentWidth });
    y += 18;
    pdf.fontSize(10).fillColor(STONE).font("Helvetica");
    pdf.text(doc.abstract, 96, y, {
      align: "justify",
      width: pageWidth - 192,
      lineGap: 4,
    });
    y += pdf.heightOfString(doc.abstract, { width: pageWidth - 192, lineGap: 4 }) + 24;

    // ── Document metadata
    const metaItems = [
      ["Classification", doc.classification],
      ["Edition", `${estimatedPages} page institutional edition (approx.)`],
      ["Published", doc.year],
      ["Archive", "Fitzherbert University Institutional Repository"],
    ];
    pdf.fontSize(8).font("Helvetica");
    for (const [label, value] of metaItems) {
      pdf.fillColor(NAVY).font("Helvetica-Bold").text(`${label}:  `, 120, y, { continued: true });
      pdf.fillColor(STONE).font("Helvetica").text(value);
      y += 14;
    }

    // ── Bottom border ornament
    const pageHeight = pdf.page.height;
    pdf.rect(0, pageHeight - 11, pageWidth, 3).fill(GOLD);
    pdf.rect(0, pageHeight - 8, pageWidth, 8).fill(NAVY);

    // ── Footer text
    pdf.fontSize(7).fillColor(STONE).font("Helvetica");
    pdf.text(
      "This document is published by Fitzherbert University in accordance with the Transparency Mandate of 2003.",
      72,
      pageHeight - 32,
      { align: "center", width: contentWidth }
    );

    // ═════════════════════════════════════════════════════════════════════════
    // PAGE 2 — TABLE OF CONTENTS (if chapters exist)
    // ═════════════════════════════════════════════════════════════════════════

    if (chapters.length > 0) {
      pdf.addPage();
      pdf.rect(0, 0, pageWidth, pdf.page.height).fill(PARCHMENT);
      renderPageHeader(pdf, doc);
      renderPageFooter(pdf, 2);

      let tocY = 60;
      pdf.fontSize(18).fillColor(NAVY).font("Helvetica-Bold");
      pdf.text("Table of Contents", 72, tocY, { align: "center", width: contentWidth });
      tocY += 40;

      pdf.moveTo(72, tocY).lineTo(pageWidth - 72, tocY).lineWidth(0.5).strokeColor(GOLD).stroke();
      tocY += 20;

      for (let i = 0; i < chapters.length; i++) {
        const chapter = chapters[i];
        pdf.fontSize(11).fillColor(NAVY).font("Helvetica-Bold");
        pdf.text(chapter.title, 96, tocY, { width: contentWidth - 150 });
        pdf.fontSize(10).fillColor(STONE).font("Helvetica");
        pdf.text(String(chapterStartPages[i] ?? i + 3), pageWidth - 108, tocY, {
          align: "right",
          width: 36,
        });
        tocY += pdf.heightOfString(chapter.title, { width: contentWidth - 100 }) + 4;

        // Show first sentence of first paragraph as preview
        const preview = chapter.paragraphs[0].split(".")[0] + ".";
        pdf.fontSize(9).fillColor(STONE).font("Helvetica");
        pdf.text(preview, 112, tocY, {
          width: contentWidth - 80,
          lineGap: 2,
        });
        tocY += pdf.heightOfString(preview, { width: contentWidth - 80, lineGap: 2 }) + 12;

        if (i < chapters.length - 1) {
          pdf.moveTo(120, tocY - 4).lineTo(pageWidth - 120, tocY - 4).lineWidth(0.25).strokeColor(GOLD).stroke();
          tocY += 8;
        }
      }
    }

    // ═════════════════════════════════════════════════════════════════════════
    // PAGES 3+ — CHAPTER CONTENT
    // ═════════════════════════════════════════════════════════════════════════

    let currentPage = chapters.length > 0 ? 3 : 2;

    for (const chapter of chapters) {
      pdf.addPage();
      pdf.rect(0, 0, pageWidth, pdf.page.height).fill(PARCHMENT);
      renderPageHeader(pdf, doc);
      renderPageFooter(pdf, currentPage);

      let cY = 56;

      // ── Chapter title
      pdf.fontSize(18).fillColor(NAVY).font("Helvetica-Bold");
      pdf.text(chapter.title, 72, cY, { width: contentWidth });
      cY += pdf.heightOfString(chapter.title, { width: contentWidth }) + 8;

      // ── Gold rule under title
      pdf.moveTo(72, cY).lineTo(pageWidth - 72, cY).lineWidth(1).strokeColor(GOLD).stroke();
      cY += 20;

      // ── Paragraphs
      for (const para of chapter.paragraphs) {
        // Check if we need a new page (leave 120pt margin at bottom for footer)
        if (cY + pdf.heightOfString(para, { width: contentWidth, lineGap: 5 }) > pdf.page.height - 120) {
          currentPage++;
          pdf.addPage();
          pdf.rect(0, 0, pageWidth, pdf.page.height).fill(PARCHMENT);
          renderPageHeader(pdf, doc);
          renderPageFooter(pdf, currentPage);
          cY = 56;

          // Continuation header
          pdf.fontSize(9).fillColor(STONE).font("Helvetica");
          pdf.text(`${chapter.title} (continued)`, 72, cY, { width: contentWidth });
          cY += 20;
        }

        pdf.fontSize(10.5).fillColor(STONE).font("Helvetica");
        pdf.text(para, 72, cY, {
          align: "justify",
          width: contentWidth,
          lineGap: 5,
          paragraphGap: 4,
        });
        cY += pdf.heightOfString(para, { width: contentWidth, lineGap: 5, paragraphGap: 4 }) + 14;
      }

      currentPage++;
    }

    // ═════════════════════════════════════════════════════════════════════════
    // FINAL PAGE — INSTITUTIONAL NOTICE
    // ═════════════════════════════════════════════════════════════════════════

    if (chapters.length > 0) {
      pdf.addPage();
      pdf.rect(0, 0, pageWidth, pdf.page.height).fill(PARCHMENT);
      renderPageHeader(pdf, doc);

      let nY = 200;
      pdf.circle(cx, 140, 30).lineWidth(1.5).strokeColor(GOLD).stroke();
      pdf.circle(cx, 140, 26).lineWidth(0.5).strokeColor(GOLD).stroke();
      pdf.fontSize(6).fillColor(GOLD).font("Helvetica");
      pdf.text("SIGILLUM", cx - 18, 131, { width: 36, align: "center" });
      pdf.text("UNIVERSITATIS", cx - 26, 138, { width: 52, align: "center" });
      pdf.text("FITZHERBERT", cx - 26, 145, { width: 52, align: "center" });

      pdf.fontSize(11).fillColor(NAVY).font("Helvetica-Bold");
      pdf.text("INSTITUTIONAL NOTICE", 72, nY, { align: "center", width: contentWidth });
      nY += 30;

      pdf.fontSize(9.5).fillColor(STONE).font("Helvetica");
      const notice = [
        "This document is published by Fitzherbert University and archived in the Institutional Repository in accordance with the Transparency Mandate of 2003 (Charter Amendment IV).",
        "All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form without the prior written permission of the Office of the Chancellor, except for brief quotations in academic reviews and scholarly articles.",
        `A cryptographic hash of this document is registered on the Fitzherbert Canonical Registry. The SHA-256 hash and associated metadata are available at the University's canonical verification endpoint.`,
        "Fitzherbert University  ·  Established 1783  ·  Veritas per Verificationem",
      ];
      for (const line of notice) {
        pdf.text(line, 96, nY, {
          align: "center",
          width: contentWidth - 48,
          lineGap: 4,
        });
        nY += pdf.heightOfString(line, { width: contentWidth - 48, lineGap: 4 }) + 12;
      }

      // ── Bottom border
      const pHeight = pdf.page.height;
      pdf.rect(0, pHeight - 11, pageWidth, 3).fill(GOLD);
      pdf.rect(0, pHeight - 8, pageWidth, 8).fill(NAVY);
    }

    pdf.end();
    stream.on("finish", () => {
      const stats = statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      const totalPages = chapters.length > 0 ? currentPage : 1;
      console.log(`  ✓ ${doc.filename} (${sizeKB} KB, ${totalPages} pages)`);
      resolve();
    });
    stream.on("error", reject);
  });
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const outDir = join(process.cwd(), "public", "documents");
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  console.log("── Fitzherbert University — Institutional Document Generator ──\n");
  console.log(`Generating ${documents.length} documents...\n`);

  for (const doc of documents) {
    await generateDocument(doc, outDir);
  }

  console.log(`\n✓ All ${documents.length} documents generated in public/documents/`);
}

main().catch((err) => {
  console.error("Document generation failed:", err);
  process.exit(1);
});
