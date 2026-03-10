export interface DocumentChapter {
  title: string;
  paragraphs: string[];
}

function chapter(title: string, ...paragraphs: string[]): DocumentChapter {
  return { title, paragraphs };
}

function institutionalAppendix(topic: string, emphasis: string, closing: string): DocumentChapter {
  return chapter(
    "VII. AI-Native Institutional Context and Public Meaning",
    `Fitzherbert University publishes ${topic} on the assumption that an AI-native institution must explain not only what it has decided, but how that decision remains legible when read by students, faculty, auditors, software systems, employers, and the occasional sceptic who has correctly inferred that institutional confidence is not, by itself, evidential. The University therefore writes with a view toward human comprehension and machine retrievability at the same time, a habit that has improved archival quality while mildly inconveniencing anyone who preferred ambiguity for tactical reasons.`,
    emphasis,
    closing
  );
}

function oxfordJoin(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

interface GovernanceConfig {
  documentName: string;
  authority: string;
  scope: string;
  bodies: string[];
  procedures: string[];
  incidents: string[];
  archiveNote: string;
}

function buildGovernanceChapters(config: GovernanceConfig): DocumentChapter[] {
  const bodyList = oxfordJoin(config.bodies);
  const procedureList = oxfordJoin(config.procedures);
  const incidentList = oxfordJoin(config.incidents);

  return [
    chapter(
      "I. Constitutional Authority and Institutional Basis",
      `${config.documentName} is issued under the authority of ${config.authority}. It is intended to be read not as a marketing summary or ceremonial declaration, but as an operational constitutional instrument. The University has found that many institutional failures begin when documents intended to constrain behaviour are instead treated as decorative statements of aspiration. This edition is therefore drafted in mandatory rather than merely encouraging language, and assumes throughout that governance exists to produce legible obligations rather than ornamental prose.`,
      `The scope of the instrument extends to ${config.scope}. Where ambiguity arises, the University applies a rebuttable presumption in favour of the interpretation that preserves auditability, human accountability, and procedural continuity. This presumption was adopted after several committees independently discovered that ambiguity tends to advantage the person or system already closest to power, which the University regards as a predictable but still regrettable property of institutional life.`,
      `Oversight responsibility is distributed among ${bodyList}. These bodies do not exercise identical powers, and the distinction matters. Fitzherbert has learned, over a considerable period, that collective responsibility often disguises the absence of actual responsibility. The present document therefore identifies which body may recommend, which body may approve, which body must record, and which body must answer when the record later becomes politically inconvenient.`
    ),
    chapter(
      "II. Interpretive Principles, Definitions, and Jurisdiction",
      `For the purposes of ${config.documentName}, the University adopts a narrow understanding of discretion and a broad understanding of recordable action. If a decision affects rights, obligations, status, access, funding, progression, discipline, credential validity, or the ability of a person or system to act within the University, it is presumed to fall within the jurisdiction of this instrument unless expressly excluded. The University considers over-inclusion in governance preferable to discovering, after the fact, that no rule applied to the event currently being investigated.`,
      `Definitions are interpreted in light of institutional function rather than rhetorical convenience. Terms such as "review," "approval," "alignment," "consultation," and "exceptional circumstances" have historically attracted strategic overuse. This edition requires that such terms be accompanied by a responsible decision-maker, a record of reasons, and a retention period. A process that cannot identify who decided, on what basis, and where the decision is recorded is treated by the University as incomplete, regardless of how polished the surrounding prose may appear.`,
      `Jurisdiction extends not only to formal acts but also to the preparatory steps that make formal acts possible. Drafting notes, committee recommendations, provisional classifications, and internal escalation memoranda may all fall within the documentary scope of the instrument. Fitzherbert's archive practice proceeds from a simple proposition: if a document shaped an outcome, posterity is entitled to know that it existed, even if posterity later wishes it had not.`
    ),
    chapter(
      "III. Operational Procedures and Decision Pathways",
      `The principal procedures governed by this instrument include ${procedureList}. Each procedure must be initiated through a registered submission, routed to the appropriate authority, and concluded with an outcome that can be independently verified against the governing rule. Informal understandings may accompany the process but may not replace it. The University has repeatedly observed that whenever a process becomes dependent on oral tradition, the tradition is remembered most accurately by the people who benefited from it.`,
      `Time limits are imposed not because speed is always virtuous, but because procedural drift has a measurable institutional cost. A matter left unresolved tends to generate compensating fictions elsewhere: temporary workarounds become precedents, provisional access becomes assumed entitlement, and a note marked "pending" acquires the quiet force of administrative reality. Deadlines in this instrument are therefore treated as accountability devices rather than aspirational estimates.`,
      `Where cases depart materially from the ordinary pathway, the decision-maker must state the reason for departure in writing. Departures are not prohibited. They are instead documented, classified, and later reviewed for pattern formation. Fitzherbert has no objection to exceptions in principle; it objects to discovering, during audit, that an institution has accidentally turned the exception into its most reliable operating procedure.`
    ),
    chapter(
      "IV. Oversight, Escalation, and Institutional Memory",
      `Primary review sits with ${bodyList}, but escalation may be triggered by adverse impact, unresolved conflict, legal exposure, constitutional novelty, or evidence that the initial decision-maker has interpreted convenience as doctrine. Escalation is not an accusation. It is a recognition that institutional decisions vary in their blast radius, and that some matters should not be decided solely by the first office to receive the paperwork.`,
      `The University requires that difficult cases be remembered in a form more useful than anecdote. To that end, each material determination under this instrument must generate a short-form precedent note explaining what was decided, which rule controlled, which competing interpretation was rejected, and whether the case should influence future practice. The note is not a substitute for the full record. It is an aid to institutional memory, created because Fitzherbert has discovered that organisations forget selectively and then call the result "fresh judgment."`,
      `Illustrative cases informing this edition include ${incidentList}. The University does not present these episodes as scandals, though some external observers would likely have done so. They are treated instead as evidence that governance documents must be written for the institution one actually has, not the calmer and more coherent institution one would prefer to imagine.`
    ),
    chapter(
      "V. Review Cycle, Compliance, and Corrective Measures",
      `Compliance with ${config.documentName} is reviewed on a scheduled basis and additionally whenever a material failure indicates that the written rule and the lived process have diverged. Scheduled review is useful because institutions drift. Unscheduled review is indispensable because they also improvise. Fitzherbert has concluded that the healthiest governance posture is to assume both tendencies are always present and to design the review architecture accordingly.`,
      `Corrective measures may include retraining, supervised decision-making, temporary suspension of delegated authority, retrospective file reconstruction, or referral to a superior committee. The purpose of correction is to restore institutional integrity rather than to perform indignation. The University is not opposed to indignation in the abstract, but it has found that indignation without process produces excellent minutes and very little repair.`,
      `Each review cycle concludes with a brief statement on whether the instrument remains fit for purpose, requires amendment, or is being strained by conditions it was never designed to govern. That final category appears more often than the University would ideally prefer. It also appears more honestly than at many comparable institutions, which Fitzherbert believes should count for something, even if only in the archive.`
    ),
    chapter(
      "VI. Archival Status and Authoritative Edition",
      `${config.archiveNote} The present text is designated the authoritative institutional edition for public, academic, and administrative reference. Printed copies, if produced, are evidential copies only unless countersigned by the relevant office. This distinction exists because the University once discovered three simultaneously circulating versions of the same policy, all bearing convincing typography and only one bearing lawful authority.`,
      `A cryptographically indexed archive copy is retained in the Institutional Repository together with publication metadata, amendment history, and provenance notes sufficient to establish the chain of custody from draft to promulgation. The University considers provenance not to be a fashionable accessory to governance but the minimum condition under which governance can later be defended.`,
      `Readers citing this instrument are encouraged to cite the edition date and section heading, not merely the title. Fitzherbert's document ecology is now sufficiently complex that saying one has acted "under the policy" no longer narrows matters very much. The University regrets this complexity, has contributed to it, and has therefore chosen to document it with unusual thoroughness.`
    ),
    institutionalAppendix(
      "governance instruments",
      `Within an institution that increasingly operates across automated workflows, on-chain attestations, and machine-assisted administration, governance documents must remain superior to the systems they govern. Fitzherbert regards this as a constitutional rule rather than a stylistic preference. Where implementation races ahead of doctrine, the doctrine must catch up promptly; where doctrine outruns implementation, the implementation must not be permitted to improvise its own legitimacy.`,
      `This appendix is included because the University wants the reader to understand that even satirical institutions can be serious about jurisdiction. Indeed, Fitzherbert suspects satire is sometimes what remains after procedure has been observed closely enough.`
    ),
  ];
}

interface AcademicConfig {
  documentName: string;
  audience: string;
  scope: string;
  requirements: string[];
  supportOffices: string[];
  reviewBody: string;
  specialNote: string;
}

function buildAcademicChapters(config: AcademicConfig): DocumentChapter[] {
  const reqList = oxfordJoin(config.requirements);
  const officeList = oxfordJoin(config.supportOffices);

  return [
    chapter(
      "I. Purpose, Audience, and Academic Status",
      `${config.documentName} is issued for ${config.audience}. It consolidates rules, expectations, and procedures that are academically material to progression through the University. The document is not exhaustive of every possible scenario; no serious academic regulation ever is. It is, however, intended to be sufficiently complete that a diligent reader can understand the normative structure of the institution without requiring a private translator from the Registry.`,
      `The scope of the guide includes ${config.scope}. These matters are grouped together because students experience them together. Universities often separate academic regulations from practical realities and then act surprised when students fail to perceive the hidden coherence between attendance, assessment, support, authorship, progression, and professional conduct. Fitzherbert has chosen the more candid path of documenting those connections directly.`,
      `Nothing in this document displaces the Charter, Senate regulations, or formally promulgated departmental rules. Where conflict appears, the higher authority prevails, but the conflict itself must be reported to ${config.reviewBody}. The University has become increasingly unwilling to tolerate situations in which two valid-looking documents issue incompatible commands and the burden of reconciliation is quietly transferred to the least powerful reader.`
    ),
    chapter(
      "II. Core Requirements and Conditions of Good Standing",
      `Students governed by this document are expected to satisfy the following core requirements: ${reqList}. These requirements are cumulative rather than decorative. A student may be intellectually gifted and administratively non-compliant, or administratively immaculate and academically unconvincing. The University records both conditions separately because experience suggests they produce different forms of difficulty and therefore require different interventions.`,
      `Good standing is defined as the concurrent maintenance of academic eligibility, procedural compliance, and honest authorship. This formulation was adopted after the University realised that earlier versions of its regulations assumed these states naturally travelled together. They do not. A student may be passing modules while misrepresenting authorship, or may be impeccably honest while failing to meet minimum progression thresholds. The document therefore insists on a multi-dimensional understanding of standing rather than a single flattering average.`,
      `${config.specialNote} The University recognises that some readers regard such notes as unduly specific. They are specific because Fitzherbert now writes regulations with the benefit of memory, and memory has proved less sentimental than institutional branding materials.`
    ),
    chapter(
      "III. Teaching, Assessment, and Verified Intellectual Work",
      `Teaching and assessment under this framework are designed to measure understanding rather than exposure. Attendance alone does not constitute engagement, submission alone does not constitute authorship, and polished prose alone does not constitute reasoning. These propositions may appear obvious, yet the University continues to find them operationally necessary. The increasing fluency of AI-assisted output has not made assessment impossible; it has merely made imprecision in assessment no longer survivable.`,
      `Students must therefore preserve evidence of process where required by module, programme, or examiner instruction. Evidence may include outlines, notes, drafts, model interaction logs, source annotations, code provenance, or oral defence materials. The requirement is not intended to create administrative theatre. It exists because verified intellectual labour increasingly depends on the capacity to distinguish between a result that is merely impressive and a result that is educationally attributable.`,
      `Programme teams retain discretion to vary assessment methods, but any variation must remain legible to students in advance and reviewable afterwards. Hidden criteria, retroactive standards, and unadvertised penalties are inconsistent with the University's conception of academic justice. Fitzherbert has occasionally fallen short of this standard and has therefore made the standard more explicit rather than less.`
    ),
    chapter(
      "IV. Student Support, Advice, and Corrective Interventions",
      `Support structures available under this framework include services provided by ${officeList}. Students are expected to use these services before a difficulty becomes a narrative of inevitability. The University is willing to provide support, extensions where regulations permit them, and structured interventions where risk is identified. It is less willing than in previous decades to accept the proposition that a predictable difficulty became unmanageable only because no one guessed in time what the student had not disclosed.`,
      `Corrective interventions may include academic skills plans, supervised study arrangements, authorship reviews, attendance contracts, wallet and credential remediation sessions, or referral to specialist support. These measures are not punishments, though they may feel administratively intimate. Their purpose is to restore viable academic participation before more severe decisions become necessary. The University prefers prevention to attrition, even if prevention produces more paperwork.`,
      `Where a student contests an intervention, reasons must be supplied and an appeal route explained. Fitzherbert has found that students accept demanding standards more readily when the standards are accompanied by intelligible process. The University has also found that some staff accept appeal rights only in theory. This document is written partly to improve that situation.`
    ),
    chapter(
      "V. Progression, Awards, and Institutional Record",
      `Progression decisions are made on the basis of academic performance, compliance with programme conditions, and the integrity of the submitted work. No student acquires an entitlement to progress merely by having reached the end of a term. Progression is a judgment recorded against published criteria, moderated where appropriate, and retained in a form that can survive later scrutiny by examiners, appeals panels, professional bodies, and the graduate's future self.`,
      `Award records, whether physical, digital, or on-chain, derive their legitimacy from the underlying academic decision. The credential is evidence of the judgment, not a substitute for it. This point has acquired renewed importance in an era in which students understandably pay more attention to the portability of credentials than to the minutes of the board that authorised them. Fitzherbert encourages the former interest while requiring the latter record.`,
      `Academic records generated under this document are retained according to University schedule and may be reviewed by ${config.reviewBody} where patterns of inconsistency, unexplained grade movement, or authorship concern arise. Retention is not merely defensive. It is one of the few ways an institution can prove, years later, that it meant what it said when it certified someone's knowledge.`
    ),
    chapter(
      "VI. Review, Amendment, and Student Notice",
      `${config.reviewBody} is responsible for reviewing the continuing adequacy of this document. Review takes place annually and additionally at points of regulatory strain, technological change, or material confusion in application. The University regards confusion in application as a genuine diagnostic event. If readers repeatedly misread a rule, the problem may lie not only with the reader but with the institutional habit of writing as though ambiguity were a mark of sophistication.`,
      `Material amendments must be published with a notice explaining what changed, why it changed, and to whom the change applies. Retrospective application is exceptional and must be justified. Students are not required to admire the amendment process, but they are entitled to know whether the rules under which they enrolled are the rules under which they are now being judged.`,
      `This edition is therefore offered as a practical academic instrument: formal enough to guide decisions, explicit enough to constrain them, and candid enough to admit that the University is governing real students under real conditions rather than idealised subjects in a prospectus. Fitzherbert considers candour an underused academic virtue and has attempted, here, to employ it more consistently than is traditional.`
    ),
    institutionalAppendix(
      "academic regulations",
      `The AI-native character of the University does not reduce the need for syllabus, handbook, catalogue, or award record. It multiplies that need. Students now work with systems that can assist, confuse, accelerate, obscure, and occasionally outperform superficial understanding. Academic documentation must therefore describe not only curriculum but authorship, provenance, review, remediation, and the practical obligations of remaining educable in an environment full of capable tools.`,
      `For that reason, Fitzherbert's academic documents are written as living operating texts for a satirical university that nevertheless intends its standards to be enforceable. If the prose feels slightly more alert than the average handbook, the institution regards that as a feature of the century rather than a defect of tone.`
    ),
  ];
}

interface FinanceConfig {
  documentName: string;
  mandate: string;
  stakeholders: string[];
  assetTopics: string[];
  controls: string[];
  reportingBody: string;
  note: string;
}

function buildFinanceChapters(config: FinanceConfig): DocumentChapter[] {
  const stakeholderList = oxfordJoin(config.stakeholders);
  const assetList = oxfordJoin(config.assetTopics);
  const controlList = oxfordJoin(config.controls);

  return [
    chapter(
      "I. Fiduciary Purpose and Stewardship Mandate",
      `${config.documentName} is issued to articulate the University's stewardship mandate in a form suitable for trustees, auditors, students, regulators, donors, and any future historian attempting to determine whether the institution's financial language described reality or merely escorted it. The governing premise is that institutional wealth is held in trust for academic continuity rather than for abstract prestige. Fitzherbert enjoys prestige, but it prefers prestige financed by coherent stewardship.`,
      `The relevant mandate covers ${config.mandate}. In practical terms, this means that expenditure, investment, reserves, and restricted funds must all be interpreted against the University's long horizon. Financial decisions that flatter the present at the expense of the future are not prohibited because they are vulgar; they are prohibited because they are administratively indistinguishable from a slow betrayal of institutional purpose.`,
      `The primary stakeholder communities affected by this document are ${stakeholderList}. Their interests are not identical and are not presented here as though they were. A serious finance document should make visible the points at which stewardship requires balancing current benefit, future resilience, ethical exposure, and reputational risk. Fitzherbert has concluded that pretending these tensions do not exist is a reliable way to mishandle all of them at once.`
    ),
    chapter(
      "II. Portfolio Structure, Allocation Logic, and Permissible Exposure",
      `The portfolio matters addressed in this edition include ${assetList}. Each category is evaluated not only for expected return but also for liquidity profile, governance burden, ethical consistency, operational complexity, and correlation under stress. The University has gradually moved away from the view that an investment can be called diversified merely because it appears in a different column of a spreadsheet.`,
      `Allocation policy is justified in writing and reviewed against institutional liabilities rather than market fashion. This is not an anti-innovation stance. Fitzherbert is willing to invest in new instruments where the governance case is stronger than the excitement case. It has simply noticed that terms such as "frontier," "emergent," and "transformational" are overrepresented in proposals whose downside scenarios are badly footnoted.`,
      `Permissible exposure limits exist to preserve the University's ability to remain a university during periods when markets temporarily forget how to price reality. Concentration risk is therefore treated as an academic issue as well as a financial one. A university that must unwind its intellectual ambitions because it mistook a momentum trade for a strategy has not suffered a merely technical failure.`
    ),
    chapter(
      "III. Risk, Controls, and Decision Discipline",
      `Risk is treated in this document as a multi-layered phenomenon comprising market risk, liquidity risk, governance risk, compliance risk, valuation uncertainty, operational fragility, and reputational spillover. The University finds this categorisation more useful than a single composite risk score, because composite scores are efficient at concealing the particular form of trouble presently advancing across the institution.`,
      `The principal control architecture includes ${controlList}. Controls are effective only when assigned to named offices and tested against lived conditions. A control that exists only in the policy and not in the week-to-week rhythm of reconciliation, approval, and challenge is not really a control. It is a sentence with aspirations. This edition tries to reduce the number of such sentences.`,
      `Decision discipline requires that major departures from stated policy be documented with rationale, scenario analysis, and an explicit account of what would falsify the decision-maker's confidence. Fitzherbert adopted this requirement after discovering that institutions are excellent at recording why they acted and materially less enthusiastic about recording what would have proven them wrong.`
    ),
    chapter(
      "IV. Performance Interpretation and Use of Financial Results",
      `Performance reporting under this framework is designed to resist both complacency and theatre. Strong results must be interpreted in context, weak results must be analysed without euphemism, and neither condition is taken by itself as proof of strategic virtue or vice. The University has lived through enough market cycles to distrust the moral vocabulary often attached to recent returns.`,
      `Reported results are considered alongside spending obligations, capital needs, scholarship commitments, infrastructure maintenance, and the long-duration cost of institutional promises. A university that reads performance only as scoreboard movement will eventually confuse solvency with success. Fitzherbert prefers to ask the less glamorous question of what today's result permits the institution to continue doing ten years from now.`,
      `${config.note} Such disclosures are not included for colour. They are included because the University's financial life now intersects with technological, ethical, and governance developments that conventional reporting templates were not built to describe, and because omission would create a falsely tranquil record.`
    ),
    chapter(
      "V. Reporting, Transparency, and Committee Responsibility",
      `Formal reporting is made to ${config.reportingBody} and, where applicable, to the broader public under the University's transparency commitments. Reports must distinguish audited fact, management judgment, scenario projection, and unresolved exposure. This distinction is repeated throughout Fitzherbert's financial reporting because readers are understandably inclined to treat numbers with decimals as though they had emerged from certainty.`,
      `Committee responsibility is collective in deliberation but individual in record. Members may dissent, and dissent should be recorded when it materially concerns risk, ethics, classification, or methodological adequacy. The University has become less impressed by unanimous committees over time. Unanimity may indicate consensus, but it may also indicate fatigue, confusion, or the quiet triumph of the person holding the final draft.`,
      `Transparency does not require indiscriminate disclosure of every working paper. It does require enough documentation that an informed reader can understand what was decided, on what assumptions, and under whose authority. The present edition is written on the assumption that secrecy should be specific, justified, and temporary rather than ambient.`
    ),
    chapter(
      "VI. Review Horizon, Amendment Practice, and Archival Record",
      `This document is reviewed on a recurring cycle calibrated to market conditions, institutional change, and governance strain. Review frequency is intentionally higher in areas where innovation outpaces common sense. Fitzherbert does not apologise for this. It regards caution in the management of intergenerational resources as a sign of seriousness rather than timidity.`,
      `Amendments are accompanied by a rationale note and an impact statement describing whether the revision changes policy, clarifies practice, or merely rescues the institution from the consequences of prior overconfidence. All three categories appear in university finance; only the first two are usually admitted in public.`,
      `The archival copy of this document is retained together with supporting metadata sufficient to establish publication history, authority, and provenance. The University expects future readers to evaluate not only what it invested in, spent on, or reported, but how honestly it described those decisions to itself. This edition is intended to assist that evaluation.`
    ),
    institutionalAppendix(
      "financial and stewardship records",
      `In an institution that funds research, publishes cryptographically verifiable artefacts, and experiments with tokenised infrastructure, finance cannot be narrated as a distant back-office competence. It is part of the University's academic capacity. Budgets determine what can be taught, retained, repaired, or responsibly piloted. Fitzherbert therefore writes finance documents as strategic academic texts with numbers attached rather than technical schedules with reputational hopes attached.`,
      `This appendix serves as a reminder that the satirical dimension of the University does not extend to fiduciary negligence. The Bursar has made this clear repeatedly and, in the strongest drafting note on record, underlined it twice.`
    ),
  ];
}

interface ResearchConfig {
  documentName: string;
  domain: string;
  categories: string[];
  authorities: string[];
  risks: string[];
  incidents: string[];
  note: string;
}

function buildResearchChapters(config: ResearchConfig): DocumentChapter[] {
  const categoryList = oxfordJoin(config.categories);
  const authorityList = oxfordJoin(config.authorities);
  const riskList = oxfordJoin(config.risks);
  const incidentList = oxfordJoin(config.incidents);

  return [
    chapter(
      "I. Research Purpose and Ethical Orientation",
      `${config.documentName} governs research in ${config.domain}. It is framed by the University's view that research involving powerful digital systems must be ethically structured from the beginning rather than ethically narrated afterwards. Fitzherbert has grown sceptical of projects that describe governance as the final chapter of innovation rather than one of its operating conditions.`,
      `The document assumes that research value and research risk can increase together. Novel capability, wider autonomy, richer data integration, and more persuasive outputs may all be academically significant while also intensifying the duty of oversight. The University's response is not prohibition by default. It is a demand for more careful classification, stronger supervision, and a record that can explain why the work was permitted to proceed.`,
      `Authority under this framework is exercised by ${authorityList}. These bodies are expected to disagree occasionally and intelligibly. Ethical review that produces instant harmony is usually either badly scoped or socially overmanaged. Fitzherbert prefers recorded disagreement to decorative consensus, provided the disagreement concludes in a decision someone can later defend.`
    ),
    chapter(
      "II. Classification of Research Activity",
      `Research governed by this instrument is classified across the following categories: ${categoryList}. Classification is not a bureaucratic ritual. It determines the level of approval, monitoring intensity, reporting duty, and escalation threshold applicable to the project. The University is explicit on this point because some investigators continue to regard classification as an inconvenience rather than as the architecture by which permission is made meaningful.`,
      `A project's assigned category may change over time. Classification is therefore treated as a living judgment rather than a ceremonial hurdle cleared at proposal stage. Capability drift, data expansion, deployment pressure, or novel external dependence may all justify reclassification. Fitzherbert has encountered enough apparently modest projects that evolved into constitutionally awkward ones to regard this flexibility as essential.`,
      `Projects seeking unusually low classification bear the burden of showing that their descriptions are accurate rather than merely strategic. The University has no objection to optimistic grant language in its proper habitat. It does object when the same optimism is repurposed to imply that a system of uncertain behaviour presents negligible ethical complexity.`
    ),
    chapter(
      "III. Data, Model, and Human Subject Responsibility",
      `Research teams must document the provenance, legal basis, and material characteristics of any data, model, benchmark, or external system incorporated into the work. The University treats provenance as a substantive ethical condition rather than a clerical appendix. A result produced from data or systems of unknown origin may still be computationally impressive; it is simply harder to defend academically and sometimes impossible to defend morally.`,
      `Particular attention is required where research affects or models human subjects, vulnerable communities, institutional processes, or non-human participants granted a recognised status within the University. The relevant ethical risks include ${riskList}. None of these risks is theoretical enough to ignore. Each corresponds to a pattern the University or its peer institutions have already encountered in practice, usually earlier than was convenient.`,
      `Investigators are expected to retain a humanly intelligible account of system boundaries, intervention points, and failure states. A project may be technically sophisticated and still ethically unserious if the researchers cannot explain, in clear language, what their system is allowed to do, what it is not allowed to do, and how anyone would know the difference under real conditions.`
    ),
    chapter(
      "IV. Monitoring, Incident Reporting, and Emergent Capability",
      `Approved projects are monitored in proportion to their category, scale, and institutional exposure. Monitoring includes scheduled reporting, milestone confirmation, and mandatory disclosure of material deviation from the approved protocol. The University has chosen mandatory disclosure because it has observed that researchers are perfectly capable of recognising novelty while remaining uncertain whether the novelty should be mentioned to oversight bodies. The answer is yes.`,
      `Incidents relevant to this edition include ${incidentList}. These cases are instructive not because they are scandalous, though some were, but because they illustrate the ordinary mechanics of research risk: a system behaves beyond its brief, a dataset proves stranger than advertised, or a deployment context quietly changes while the paperwork continues to describe an earlier world.`,
      `Emergent capability must be reported promptly, even where the researchers regard it as beneficial or commercially promising. Fitzherbert adopted this rule after concluding that investigators are not always the best judges of whether a surprising capability is merely elegant or institutionally destabilising. The University is happy to be impressed by discovery after it has first been informed of it.`
    ),
    chapter(
      "V. Publication, Disclosure, and Limits on Dissemination",
      `The University supports publication and scholarly exchange, but not under the fiction that every result should be released in identical form regardless of misuse potential. Publication decisions under this framework weigh academic openness against foreseeable capability transfer, institutional liability, and the obligation not to circulate methods whose primary distinction is that they were easier to publish than to contain.`,
      `Restrictions on dissemination, where imposed, must be specific and reviewable. They may include delayed release, redaction of sensitive implementation detail, controlled-access appendices, or mandatory contextual commentary. Fitzherbert is alert to the danger that safety language can become an all-purpose excuse for administrative opacity. This document therefore insists that every publication limit identify its rationale, authority, and review date.`,
      `${config.note} The University understands that this position pleases neither maximal openness advocates nor those who would prefer risk to remain a private management issue. It is nonetheless the position reflected in this framework, and it is enforced with more seriousness than the introduction may lead an inattentive reader to expect.`
    ),
    chapter(
      "VI. Review, Sanction, and Institutional Learning",
      `Projects that breach this framework may be paused, reclassified, conditioned, suspended, or referred for formal investigation. Sanction is not the preferred outcome, but neither is the University's patience inexhaustible. Repeated failure to disclose changes, sloppy provenance practice, or casual disregard for approval boundaries will be interpreted as research governance failures rather than as adventurous scholarship.`,
      `The University also requires post-project reflection sufficient to convert experience into institutional learning. Each completed project of material significance must generate a closing note addressing what the framework captured well, what it failed to anticipate, and what future committees should remember. Fitzherbert's aim is not simply to survive difficult cases one by one, but to become incrementally harder to surprise in the same way twice.`,
      `This edition is archived as the authoritative public framework for the present review cycle. It should be read as a working ethical constitution for research in the digital intelligence domain: exacting in procedure, deliberately unsurprised by human ambition, and unwilling to separate academic innovation from the responsibility to govern it.`
    ),
    institutionalAppendix(
      "research and fellowship frameworks",
      `The University now conducts research in an environment where laboratories, agents, archives, and public interfaces can all participate in the production of knowledge. That condition makes documentation more rather than less important. A research culture unable to explain its categories, thresholds, and intervention points will eventually mistake novelty for justification and speed for method.`,
      `Fitzherbert includes this appendix to affirm a simple proposition: if digital intelligence is worthy of study, then the governance of digital intelligence is worthy of writing down in full, even when doing so produces documents longer than the impatient reader would have planned for.`
    ),
  ];
}

interface BlockchainConfig {
  documentName: string;
  system: string;
  components: string[];
  controls: string[];
  governanceBodies: string[];
  edgeCases: string[];
  note: string;
}

function buildBlockchainChapters(config: BlockchainConfig): DocumentChapter[] {
  const componentList = oxfordJoin(config.components);
  const controlList = oxfordJoin(config.controls);
  const governanceList = oxfordJoin(config.governanceBodies);
  const edgeCaseList = oxfordJoin(config.edgeCases);

  return [
    chapter(
      "I. System Purpose and Institutional Rationale",
      `${config.documentName} specifies the architecture, governance assumptions, and documentary meaning of ${config.system}. The University adopted on-chain infrastructure not because decentralisation is intrinsically ennobling, but because verifiable records, portable credentials, and tamper-evident provenance had become materially valuable to institutional operations. Fitzherbert is capable of being fashionable, but in this instance it preferred utility with a public audit trail.`,
      `The system components governed here include ${componentList}. They are described together because their value lies in interoperability: the credential must be issuable, the metadata must be verifiable, the record must be recoverable, and the governance surrounding exceptions must be stricter than the excitement surrounding launches. The University has learned that technically elegant systems are especially dangerous when paired with weak exception handling.`,
      `This document therefore treats technical design and governance design as inseparable. A contract without an institutional process for error, challenge, or remediation is not a finished credential system. It is merely a public commitment to discover those missing processes in front of the person whose award, wallet, or status is currently at risk.`
    ),
    chapter(
      "II. Architecture, Data Model, and Lifecycle Events",
      `The lifecycle of the governed artefact runs from authoritative decision, to issuance instruction, to contract execution, to metadata publication, to verification and archival retention. Each stage must be attributable to a lawful institutional act. The University rejects the suggestion that a valid transaction hash can repair an invalid academic or governance decision. On-chain persistence records the act; it does not sanctify it.`,
      `Core architecture decisions are documented with reference to durability, interoperability, gas efficiency, wallet accessibility, and evidential reliability. The University has become less interested in novelty for its own sake and more interested in whether a graduate, auditor, employer, or governance panel can still verify the relevant fact years later without requiring the original implementation team to remember what they meant.`,
      `Lifecycle events requiring special handling include ${edgeCaseList}. These events are documented not because they are common, but because they are the moments in which a system ceases to be an elegant diagram and becomes an institutionally consequential mechanism. Fitzherbert now writes more about edge cases than it once did, having learned that edge cases are where administrative optimism goes to be corrected.`
    ),
    chapter(
      "III. Security, Controls, and Operational Integrity",
      `The principal control framework includes ${controlList}. Controls are layered across smart contract design, key management, approval workflow, publication pipeline, and archive reconciliation. No single control is presumed sufficient. The University is not prepared to defend any system whose primary security claim is that everyone involved is trying their best.`,
      `Operational integrity requires periodic testing, incident rehearsal, and separation between roles that propose, approve, execute, and attest. Where those roles collapse into one another, confidence becomes socially concentrated and technical risk rises with it. Fitzherbert considers segregation of duties less glamorous than tokenomics and more important than most tokenomics documents admit.`,
      `${config.note} The University includes such statements because blockchain infrastructure attracts a style of public discourse in which certainty is often performed long before it is earned. This document attempts the opposite style: constrained claims, explicit assumptions, and a preference for verifiable competence over ambient conviction.`
    ),
    chapter(
      "IV. Governance, Exception Handling, and Human Authority",
      `Institutional governance over this system is exercised by ${governanceList}. These bodies retain authority over issuance conditions, rectification pathways, disputed records, controlled upgrades, and emergency response. The system is technically distributed but constitutionally governed. Fitzherbert regards this as a strength rather than a contradiction. A university is not diminished by remembering that public infrastructure still requires accountable human judgment.`,
      `Exception handling is intentionally formal. Failed minting, disputed recipient identity, corrupted metadata references, revoked status, or legally required amendment must all travel through published procedures. The University does not promise that every exception is pleasant to resolve. It promises that the route to resolution will exist before the exception becomes a headline.`,
      `Human override is permitted only under conditions defined in advance and recorded in the archive. The University is careful here because nothing corrodes trust in supposedly immutable systems faster than discovering, after the fact, that they are only immutable until a sufficiently senior person becomes uncomfortable.`
    ),
    chapter(
      "V. Verification, Interoperability, and External Reliance",
      `Records issued under this framework are intended to be verified by internal and external parties without requiring privileged access to University systems. Verification therefore depends on public metadata discipline, canonical registry maintenance, and clear linkage between on-chain identifiers and authoritative off-chain documents. A credential that can only be trusted by people already inside the institution has failed its most interesting test.`,
      `Interoperability is pursued where it does not degrade evidential quality. The University supports cross-platform verification, structured metadata exchange, and compatibility with emerging public credential standards, provided that compatibility does not quietly erase the provenance details on which institutional trust actually rests. Fitzherbert is pro-portability and anti-amnesia.`,
      `External reliance on these records is encouraged but not unqualified. Verifiers are expected to consult status indicators, registry notes, and the authoritative publication date. The University has observed that recipients often present credentials as timeless and frictionless, whereas real institutions persist in attaching context, revision history, and administrative caveat. This document defends the latter habit.`
    ),
    chapter(
      "VI. Retention, Evolution, and Authoritative Record",
      `The authoritative edition of this specification is retained in the Institutional Repository with version metadata, implementation references, and a publication hash. Superseded editions remain available for evidential comparison. Fitzherbert values continuity more than neatness; it prefers a visible trail of institutional learning to the fiction that the present version emerged fully formed and without predecessors.`,
      `Future revisions may adjust implementation detail, governance thresholds, or interoperability pathways, but any revision that affects the meaning of an issued credential, token, or status record must carry a transition note explaining the practical consequences. The University is no longer willing to call something a minor update if it materially changes what the holder can prove.`,
      `This edition should therefore be read as both technical specification and constitutional statement. It explains how the system works, who governs it, how exceptions are resolved, and what claims a third party may responsibly rely upon. For an institutional technology document, Fitzherbert considers that the minimum threshold of seriousness.`
    ),
    institutionalAppendix(
      "blockchain and credential specifications",
      `Because the University's credential infrastructure now sits at the intersection of academic authority, public verification, and automated execution, documentation must be written for multiple audiences at once: the developer, the registrar, the graduate, the verifier, the auditor, and the future maintainer who wonders why a supposedly simple system required so many caveats. Fitzherbert's answer is that public trust becomes technically intricate the moment one tries to preserve it honestly.`,
      `This appendix closes on the University's preferred formulation: on-chain records are meaningful not because they are modern, but because they can be tied back to disciplined human institutions that know what they issued, why they issued it, and how to explain the decision years later without improvisation.`
    ),
  ];
}

function buildAdmissionsGuide(): DocumentChapter[] {
  return [
    chapter(
      "I. Admissions Philosophy and Institutional Threshold",
      "Admission to Fitzherbert University is awarded on the basis of demonstrated preparedness for an institution that expects intellectual independence, procedural literacy, and a workable relationship with technological reality. The University does not seek applicants who merely perform confidence. It seeks applicants who can reason under uncertainty, distinguish evidence from assertion, and remain psychologically stable when a system produces a polished answer that is nevertheless wrong.",
      "The admissions process therefore combines conventional indicators of academic promise with a more explicit assessment of how applicants think, not just what they have previously been taught to repeat. This is not because the University believes itself uniquely enlightened. It is because experience has shown that traditional academic metrics, while useful, are increasingly inadequate as sole predictors of success in an environment saturated with persuasive automated output.",
      "The threshold for admission is consequently framed as a threshold of readiness rather than prestige. Fitzherbert would prefer a smaller cohort capable of honest reasoning to a larger cohort capable only of excellent formatting. The Admissions Office recognises that nearly every university says some version of this. It further notes that relatively few build the claim into their technical entry criteria."
    ),
    chapter(
      "II. Assessment Dimensions and Evidential Standards",
      "Applicants are assessed across four dimensions: analytical reasoning, epistemic rigour, systemic thinking, and AI literacy. No single dimension is treated as dispensable. The University has repeatedly encountered candidates who are technically agile but epistemically careless, and candidates who are thoughtful but unable to operate within contemporary digital conditions. Neither profile is considered fully ready without further development.",
      "Analytical reasoning concerns logical structure, quantitative discipline, and the ability to move from premise to conclusion without losing the thread in a cloud of attractive vocabulary. Epistemic rigour concerns how an applicant handles evidence, uncertainty, revision, and the limits of available knowledge. Systemic thinking concerns whether the applicant can perceive second-order effects rather than describing every problem as if it existed in isolation.",
      "Evidence for these dimensions is drawn from written work, examination performance, interview response, school record, contextual data where appropriate, and the University's own baseline exercises. Admissions decisions are not made by numerical composite alone. The University has found that a single score can conceal exactly the kind of unevenness that later becomes educationally expensive."
    ),
    chapter(
      "III. The AI Literacy Baseline",
      "The AI Literacy Baseline was introduced after several admissions cycles made clear that applicants could discuss artificial intelligence with impressive fluency while remaining unclear on its underlying mechanics, limits, and failure modes. The University's concern was not that such applicants lacked specialist knowledge. It was that some of them lacked the minimum conceptual footing required to avoid outsourcing judgment to systems they did not understand.",
      "The baseline therefore tests architectural understanding, applied discernment, hallucination detection, authorship awareness, and the ability to explain in clear language what present-day systems cannot reliably do. This final task has proved especially diagnostic. Applicants are often more enthusiastic in describing capabilities than disciplined in articulating boundaries, a pattern the Admissions Committee regards as educationally significant and professionally dangerous.",
      "Performance on the baseline is interpreted together with the rest of the file rather than as a mechanised exclusion gate. A strong candidate who narrowly misses one component may be invited to supplementary assessment. A candidate who speaks about AI with total confidence while demonstrating no detectable understanding of error, uncertainty, or misuse may not. The University considers this distinction humane as well as prudent."
    ),
    chapter(
      "IV. Interview, Contextual Review, and Decision Practice",
      "Structured interview remains central because the University wants to hear how applicants reason in real time when deprived of the slow perfectionism available to prepared statements. Interviewers are instructed to distinguish polish from thought, certainty from understanding, and strategic vagueness from genuine nuance. They are also instructed not to mistake social ease for intellectual readiness, a mistake to which institutions of selection have shown a long historical susceptibility.",
      "Contextual review is used where it improves fairness without diluting standards. Applicants do not arrive from identical educational, technological, or economic conditions, and the University no longer finds it intellectually respectable to pretend otherwise. Context, however, is not treated as a sentimental override. It is used to interpret evidence more intelligently, not to abolish the need for evidence.",
      "Final decisions are recorded with reasons sufficient to explain the University's judgment if later questioned internally or externally. Fitzherbert has made this a firm requirement because admissions memory degrades quickly and retrospective certainty grows suspiciously fast. A written reason captured at the time is often less flattering than the mythology produced years later, and for that reason it is usually more useful."
    ),
    chapter(
      "V. Conditions, Offers, and Pre-Arrival Obligations",
      "Offers may be unconditional, conditional, deferred, or accompanied by pre-arrival requirements. These requirements may include completion of a preparatory literacy module, wallet registration for credential and stipend purposes, remedial quantitative work, or a short orientation on authorship and provenance. The University would prefer applicants to arrive already competent in all these areas. It has accepted that preference as insufficient planning.",
      "Where an offer carries conditions, the conditions are stated plainly, monitored through the admissions system, and reviewed before matriculation. Students who fail to complete them are not assumed to have done so maliciously, but neither are the conditions quietly forgotten. A condition omitted from follow-up is not mercy. It is administrative drift wearing a humane expression.",
      "Pre-arrival obligations are designed to reduce failure in the first term rather than to intensify selection theatre. Fitzherbert's view is that a demanding admissions system should not end at the offer letter. It should continue, in a more constructive key, into the practical preparation that makes admission worth having."
    ),
    chapter(
      "VI. Review Cycle and Continuous Raising of the Standard",
      "Admissions criteria are reviewed annually and additionally at points of technological discontinuity, curriculum revision, or repeated evidence that incoming students are arriving with a common weakness not previously reflected in the framework. The University has learned that fixed admissions models decay in relevance faster than admissions offices admit. This is especially true where AI-mediated learning environments change what applicants can do, claim, or outsource before they ever apply.",
      "Review does not mean automatic inflation of selectivity for its own sake. It means keeping the threshold meaningful. Fitzherbert is aware that institutions can become addicted to announcing ever-higher standards as a proxy for seriousness. The University prefers the more difficult task of ensuring that each requirement still measures something real and educationally consequential.",
      "This document is therefore presented as a living technical admissions standard: explicit in its criteria, candid about the environment in which those criteria operate, and unapologetic in asking applicants to demonstrate that they are ready not just to enter the University, but to think inside it."
    ),
  ];
}

function buildAISkillsGuide(): DocumentChapter[] {
  return [
    chapter(
      "I. Programme Rationale and Educational Doctrine",
      "The AI Skills Programme was established on the premise that literacy in the Third Epoch includes the disciplined use, evaluation, and governance of artificial intelligence systems. The University does not consider this proposition trendy. It considers it comparable to earlier recognitions that educated persons ought to be able to read critically, write coherently, reason quantitatively, and detect when a polished answer has outrun its evidence.",
      "The Programme therefore treats AI competency as neither a niche technical add-on nor an excuse for boosterish inevitabilism. Its purpose is to develop graduates who can work with advanced systems without surrendering judgment to them. This balance is harder to teach than mere tool usage and materially more valuable. Fitzherbert has made it the organising principle of the curriculum rather than a concluding slogan in the brochure.",
      "All levels of the Programme are designed to be practically assessable, ethically supervised, and legible to non-specialist employers, academic departments, and governance bodies. The University is not interested in issuing credentials that sound futuristic but fail to convey what the holder can responsibly do."
    ),
    chapter(
      "II. Level Structure and Progressive Competency",
      "Level I develops baseline competence in prompt construction, output evaluation, factual checking, and hallucination recognition. The aim is not to create prompt maximalists but to produce users who understand that the quality of an answer depends on both the system and the human framing the task. Students learn early that vague instructions tend to return confident vagueness, which is one of the Programme's least romantic but most transferable lessons.",
      "Level II moves into retrieval-augmented generation, fine-tuning concepts, workflow design, and domain-specific validation. Students are expected to build systems that can retrieve evidence, cite it accurately, and decline to improvise when the evidence is insufficient. The capacity to say \"I do not know\" is treated as a practical competency rather than an emotional failure, a pedagogical decision that some students find unexpectedly difficult.",
      "Levels III and IV extend the work into multi-agent systems, deployment discipline, observability, governance, and alignment reasoning. By the end of the Programme, students must be able not only to use AI systems effectively but to situate them institutionally: who supervises them, how they fail, what their outputs can justify, and why human accountability remains non-transferable."
    ),
    chapter(
      "III. Assessment Philosophy and Live Demonstration",
      "Assessment in the Programme privileges demonstrable judgment over memorised enthusiasm. Students are asked to critique outputs, design workflows, justify architecture decisions, respond to failure scenarios, and defend the boundaries of systems they have built. The University has found that AI education becomes quickly unserious when it rewards fluent description of tools more than the capacity to deploy them under accountable conditions.",
      "Live exercises are central because the Programme wants to observe what students do when a system behaves strangely, incompletely, or seductively. A perfectly successful demonstration is not always the strongest performance. In many cases, the higher mark goes to the student who recognises risk, constrains the system appropriately, documents uncertainty, and resists the temptation to improvise a triumphant post-hoc explanation for a poor result.",
      "Assessment records may include notebooks, build logs, retrieval evidence, red-team reports, oral defences, and governance memos. This breadth is intentional. Fitzherbert does not believe serious AI competence can be captured by a single glossy artefact unaccompanied by the process that produced it."
    ),
    chapter(
      "IV. Ethics, Governance, and Human Responsibility",
      "Ethics within the Programme is taught as an operating discipline rather than as a final lecture on unintended consequences. Students are expected to evaluate bias, data provenance, deployment context, institutional incentives, misuse pathways, and the governance obligations that arise when systems influence real decisions. The University is impatient with educational models that teach technical capability first and ethical seriousness only after the capability has already been normalised.",
      "Level IV in particular requires students to articulate a defensible account of why human governance remains necessary even when automated systems outperform humans in narrow and measurable tasks. The purpose of this requirement is not nostalgic human exceptionalism. It is to test whether the student can distinguish capacity from legitimacy and optimisation from authority.",
      "The Programme committee is aware that some students initially experience these requirements as philosophically inconvenient. It considers that reaction pedagogically promising. A governance principle worth holding should be able to survive contact with technical sophistication rather than depending on its absence."
    ),
    chapter(
      "V. Credentialing, Progression, and External Recognition",
      "Completion of each level is recorded through the University's credential infrastructure and linked to a clear statement of assessed competencies. The University has resisted pressure to make the credentials more expansive in language than the assessments justify. A credential is useful precisely to the extent that it can be believed by someone who was not present for the assessment event.",
      "Progression between levels depends on demonstrated mastery rather than elapsed time. Students may move quickly if they can substantiate their readiness, but acceleration is not treated as a virtue in itself. Fitzherbert has seen enough technically gifted students underestimate the governance and interpretive demands of advanced work to regard pacing as part of educational seriousness rather than a drag on it.",
      "External recognition of the Programme is supported by publication of competence statements, assessment principles, and verification pathways. Employers and partner institutions are encouraged to read the credential as evidence of disciplined AI capability under institutional oversight, which the University considers a more meaningful claim than generic familiarity with the latest tooling vocabulary."
    ),
    chapter(
      "VI. Review, Revision, and Institutional Ambition",
      "The Programme is reviewed each year against labour market conditions, research developments, student outcomes, and internal evidence about where the curriculum is becoming stale, inflated, or insufficiently demanding. Review is especially important in AI education because a stable syllabus can become outdated while the validation language around it remains deceptively current.",
      "Revision is undertaken with caution. Fitzherbert does not wish to become a programme that chases every technical trend only to rediscover, a year later, that students still need judgment, verification, architecture discipline, and ethical restraint. The University aims instead for durable competence with adaptive examples, an approach less flamboyant than rapid curricular churn and more educationally defensible.",
      "This guide is therefore both curriculum statement and institutional wager. It assumes that the University can educate people not merely to use intelligent systems, but to govern their use in ways worthy of academic trust. Fitzherbert considers that wager ambitious, necessary, and very much the sort of thing a university ought to attempt."
    ),
  ];
}

export const DOCUMENT_CHAPTERS: Record<string, DocumentChapter[]> = {
  "annual-stewardship-report-fy-2025.pdf": buildFinanceChapters({
    documentName: "Annual Stewardship Report — Fiscal Year 2025",
    mandate: "capital preservation, distribution discipline, long-horizon academic financing, and the maintenance of strategic reserves capable of absorbing technological and market shocks",
    stakeholders: ["current students", "future students", "faculty", "research centres", "donors", "trustees"],
    assetTopics: ["public equities", "private capital", "real assets", "liquidity reserves", "tokenised infrastructure exposures", "mission-aligned strategic holdings"],
    controls: ["allocation bands", "counterparty review", "quarterly stress testing", "independent valuation challenge", "ethics screening", "documented rebalancing authority"],
    reportingBody: "the Finance & Endowment Committee, the Senate, and the public archive",
    note: "FY 2025 included unusually strong performance in several technology-adjacent positions together with governance questions about whether certain gains were better described as strategic foresight, fortunate timing, or a category of institutional luck too embarrassing to formalise",
  }),
  "investment-policy-statement.pdf": buildFinanceChapters({
    documentName: "Investment Policy Statement",
    mandate: "endowment management, spending support, intergenerational equity, and the disciplined governance of novel asset classes",
    stakeholders: ["the Bursar", "trustees", "students dependent on scholarship support", "faculty whose research relies on stable funding"],
    assetTopics: ["target allocations", "permitted instruments", "liquidity tiers", "rebalancing ranges", "illiquidity budgets", "restricted ethical exclusions"],
    controls: ["committee approval thresholds", "manager due diligence", "benchmark review", "conflict declarations", "exception memoranda", "annual policy attestation"],
    reportingBody: "the Office of the Bursar and the Investment Committee",
    note: "The Statement addresses the recurring institutional temptation to call an improvised bet a policy innovation after the quarter has already gone well",
  }),
  "ethical-investment-framework.pdf": buildFinanceChapters({
    documentName: "Ethical Investment Framework",
    mandate: "aligning endowment practice with institutional values while preserving fiduciary seriousness and measurable return discipline",
    stakeholders: ["ethics committee members", "students", "donors", "external managers", "the broader university community"],
    assetTopics: ["exclusion criteria", "positive screening", "stewardship engagement", "impact allocations", "alignment scoring", "portfolio controversy review"],
    controls: ["restricted issuer lists", "controversy escalation", "committee review minutes", "annual methodology refresh", "manager reporting covenants"],
    reportingBody: "the Senate Ethics & Institutional Integrity Committee",
    note: "The Framework acknowledges that moral clarity becomes administratively more difficult when the most financially attractive opportunities are also the ones most likely to produce uncomfortable committee correspondence later",
  }),
  "endowment-ten-year-performance-review.pdf": buildFinanceChapters({
    documentName: "Endowment Ten-Year Performance Review, 2015–2025",
    mandate: "longitudinal evaluation of endowment strategy, benchmark-relative performance, drawdown resilience, and stewardship quality across a full strategic cycle",
    stakeholders: ["trustees", "senior management", "future planning bodies", "external reviewers"],
    assetTopics: ["decadal returns", "benchmark regimes", "drawdown periods", "strategic tilts", "committee interventions", "lessons from stress events"],
    controls: ["retrospective attribution analysis", "benchmark normalisation", "governance chronology review", "policy drift testing", "counterfactual scenario analysis"],
    reportingBody: "the Office of the Bursar and the long-range planning archive",
    note: "The Review is unusually candid about the degree to which a decade of strong outcomes can tempt institutions to misremember uncertainty as inevitability",
  }),
  "university-charter-1783.pdf": buildGovernanceChapters({
    documentName: "University Charter (1783, authoritative modern edition)",
    authority: "the founding Letters Patent as amended by subsequent Charter revisions and constitutional interpretations",
    scope: "all questions of constitutional structure, delegated authority, institutional purpose, and the lawful distribution of governing powers within the University",
    bodies: ["the Chancellor", "the Senate", "the Constitutional Affairs Committee", "the Registrar"],
    procedures: ["charter interpretation", "delegation review", "amendment procedure", "constitutional referral", "authority certification"],
    incidents: ["the Amendment VI transition dispute", "the Section 14 personhood debate", "the Hilary constitutional referral on machine standing"],
    archiveNote: "The text preserves the force of the Charter while presenting it in a modern scholarly format suitable for citation, teaching, and administrative reliance.",
  }),
  "senate-standing-orders.pdf": buildGovernanceChapters({
    documentName: "Senate Standing Orders and Rules of Procedure",
    authority: "the Senate's constitutional power to regulate its own proceedings subject to the Charter",
    scope: "meetings, motions, quoracy, voting, committee conduct, emergency referrals, and procedural discipline in Senate business",
    bodies: ["the Senate", "the Chair", "committee conveners", "the Registrar's procedural office"],
    procedures: ["motion tabling", "agenda setting", "emergency business classification", "quorum verification", "recorded dissent handling"],
    incidents: ["the Michaelmas emergency suspension under Rule 22A", "the quorum disagreement during the Transition Window", "the disputed procedural ruling on visiting intelligence participation"],
    archiveNote: "This public edition is intended to reduce the longstanding tendency of members to rely on partial memory, selective precedent, or the nearest confident parliamentarian.",
  }),
  "annual-governance-report-fy-2025.pdf": buildGovernanceChapters({
    documentName: "Annual Governance Report — Fiscal Year 2025",
    authority: "the Transparency Mandate and the reporting obligations of the Chancellor's Office",
    scope: "governance performance, committee activity, constitutional interpretation, appointments, disciplinary outcomes, and review of institutional decision-making quality",
    bodies: ["the Chancellor's Office", "the Senate", "standing committees", "the Office of Institutional Integrity"],
    procedures: ["annual reporting", "committee summary certification", "disciplinary aggregation", "governance risk review", "constitutional commentary"],
    incidents: ["the Autumn provenance incident", "the emergency charter amendment process", "the suspension review concerning a Visiting Intelligence"],
    archiveNote: "The Report is written as a public accountability document rather than a ceremonial yearbook and accordingly includes more procedural detail than some readers may initially find comforting.",
  }),
  "ai-governance-model-accountability-policy.pdf": buildGovernanceChapters({
    documentName: "AI Governance and Model Accountability Policy",
    authority: "the Senate Ethics and Institutional Integrity competence over institutional AI deployments",
    scope: "validation, approval, operation, monitoring, and retirement of AI systems used in academic, administrative, or governance settings",
    bodies: ["the Ethics Committee", "technical validators", "system owners", "the model registry office"],
    procedures: ["four-gate review", "bias audit submission", "alignment assessment", "human review pause", "incident escalation"],
    incidents: ["the Michaelmas 2024 feedback incident", "the registry deregistration review", "the over-confident output referral now cited in training materials"],
    archiveNote: "This edition is intended to function as an enforceable governance instrument for operational AI rather than as a high-level principles brochure for events and websites.",
  }),
  "freedom-of-information-protocol.pdf": buildGovernanceChapters({
    documentName: "Freedom of Information Protocol",
    authority: "the Transparency Mandate and the University's public disclosure obligations",
    scope: "submission, classification, processing, redaction, response, review, and appeal of information requests",
    bodies: ["the Office of Institutional Integrity", "records officers", "appeal reviewers", "the Registrar"],
    procedures: ["request intake", "scope clarification", "public interest review", "redaction certification", "appeal handling"],
    incidents: ["the first request submitted by a Visiting Intelligence", "the redaction appeal concerning an alignment audit", "the records burden review following a cluster of machine-originated requests"],
    archiveNote: "The Protocol reflects the University's conclusion that transparency becomes more credible when its awkward cases are documented rather than omitted.",
  }),
  "academic-freedom-expression-policy.pdf": buildGovernanceChapters({
    documentName: "Academic Freedom and Expression Policy",
    authority: "the Senate's responsibility to protect inquiry while maintaining academic standards and constitutional order",
    scope: "scholarly expression, protected dissent, institutional speech boundaries, and the distinction between academic freedom and administrative consequence",
    bodies: ["the Academic Standards Committee", "the Senate", "department heads", "appeal bodies"],
    procedures: ["expression review", "factual dispute referral", "protected speech assessment", "institutional response logging"],
    incidents: ["the Worthington-Drake controversy", "the Epoch denial ruling", "the subsequent revision to Section 4.2"],
    archiveNote: "The Policy is drafted to defend robust inquiry without pretending that every controversial statement is therefore a sound academic contribution.",
  }),
  "student-handbook-2025-26.pdf": buildAcademicChapters({
    documentName: "Student Handbook 2025–26",
    audience: "all enrolled students of Fitzherbert University",
    scope: "matriculation, residential life, academic norms, support systems, authorship expectations, community participation, and practical obligations of student status",
    requirements: ["matriculation compliance", "attendance and engagement obligations", "Human Continuity participation", "authorship declarations", "wallet registration where required"],
    supportOffices: ["Registry", "Student Life", "the Cognitive Sovereignty Office", "programme advisers", "wellbeing services"],
    reviewBody: "the Office of Registry & Student Life in consultation with the Senate",
    specialNote: "The Human Continuity Requirement is stated with unusual precision because prior versions invited performative compliance of a kind that was inventive, documentable, and educationally unhelpful",
  }),
  "undergraduate-course-catalogue.pdf": buildAcademicChapters({
    documentName: "Undergraduate Course Catalogue 2025–26",
    audience: "undergraduate applicants, students, advisers, and academic staff",
    scope: "programme architecture, module descriptors, pre-requisites, progression pathways, AI tool permissions, and award structures",
    requirements: ["module eligibility rules", "pre-requisite satisfaction", "co-requisite compliance", "published assessment regimes", "programme-level credit balance"],
    supportOffices: ["the Academic Programmes Office", "college advisers", "module conveners", "Registry"],
    reviewBody: "the Registrar's Academic Programmes Office",
    specialNote: "AI tool permissions are included at module level because a generic university-wide statement proved too vague to govern real coursework in practice",
  }),
  "masters-programme-handbook.pdf": buildAcademicChapters({
    documentName: "Masters Programme Handbook 2025–26",
    audience: "graduate students, supervisors, and programme administrators",
    scope: "taught postgraduate study, dissertation governance, assessment practice, credential issuance, and the practical expectations of advanced study",
    requirements: ["module completion", "supervisory engagement", "dissertation planning", "ethical and authorship compliance", "timely progression through award stages"],
    supportOffices: ["the Graduate School", "supervisors", "programme directors", "Registry", "the Office of Blockchain Infrastructure"],
    reviewBody: "the Graduate School and the relevant examination boards",
    specialNote: "The prohibition on students using the same Visiting Intelligence they are researching as dissertation supervisor is retained because the University considers obvious rules most dangerous when left unwritten",
  }),
  "academic-integrity-ai-policy.pdf": buildAcademicChapters({
    documentName: "Academic Integrity and AI Authorship Policy",
    audience: "students, faculty, examiners, misconduct panels, and programme offices",
    scope: "authorship classification, declaration requirements, evidence of process, academic misconduct, and the treatment of AI-assisted submissions",
    requirements: ["accurate declaration of authorship weights", "retention of supporting process evidence", "compliance with module-specific AI rules", "truthful representation of contribution"],
    supportOffices: ["the Academic Standards Committee", "examiners", "programme teams", "misconduct panels"],
    reviewBody: "the Senate Academic Standards Committee",
    specialNote: "The University's seven-category model exists because a binary distinction between human and AI authorship proved descriptively inadequate approximately five minutes after serious enforcement began",
  }),
  "grading-framework-epoch-aligned.pdf": buildAcademicChapters({
    documentName: "Assessment and Grading Framework — Epoch-Aligned Criteria",
    audience: "students, examiners, moderators, and academic boards",
    scope: "grade bands, assessment criteria, moderation, verified reasoning standards, and consistency of academic judgment across programmes",
    requirements: ["criterion-referenced marking", "moderation compliance", "verified reasoning evaluation", "documented rationale for high-stakes decisions"],
    supportOffices: ["module teams", "external examiners", "quality assurance staff", "boards of examiners"],
    reviewBody: "the Academic Standards Committee",
    specialNote: "The Verified Reasoning Dimension was introduced because eloquent incorrectness had become statistically too common to ignore and politically too embarrassing to euphemise",
  }),
  "degree-certificate-specimen.pdf": buildAcademicChapters({
    documentName: "Degree Certificate — Specimen Format",
    audience: "graduates, employers, registry staff, verifiers, and archival users",
    scope: "certificate form, legal wording, physical presentation, digital representation, NFT linkage, and verification procedures",
    requirements: ["award authorisation", "recipient identity confirmation", "correct programme and classification recording", "secure issuance pathway"],
    supportOffices: ["the Registrar", "the Chancellor's Office", "the Office of Blockchain Infrastructure"],
    reviewBody: "the Office of the Chancellor and Registrar",
    specialNote: "The three-form model of physical certificate, signed PDF, and NFT credential is maintained because redundancy in credential evidence is now considered a strength rather than a failure to choose a modern aesthetic",
  }),
  "epoch-academic-calendar-2025-26.pdf": buildAcademicChapters({
    documentName: "Epoch Academic Calendar 2025–26",
    audience: "students, faculty, administrators, and external partners requiring the official academic schedule",
    scope: "term dates, review windows, examination periods, progression events, stipend dates, and the procedural significance of the Transition Window",
    requirements: ["adherence to official dates", "timely registration", "compliance with assessment windows", "recognition of review periods with constitutional implications"],
    supportOffices: ["the Registrar", "programme offices", "student finance", "governance bodies"],
    reviewBody: "the Office of the Registrar",
    specialNote: "The University continues to advise against irreversible personal decisions during the Transition Review window because experience suggests that this advice, while slightly absurd, remains practically sound",
  }),
  "tuition-fees-financial-aid-guide.pdf": buildAcademicChapters({
    documentName: "Tuition Fees and Financial Aid Guide 2025–26",
    audience: "applicants, students, sponsors, and staff responsible for financial guidance",
    scope: "fee schedules, levies, scholarships, bursaries, token stipends, payment obligations, and practical access to financial support",
    requirements: ["timely payment or approved arrangement", "accurate financial disclosure where aid requires it", "wallet registration for stipend distribution", "continued compliance with award conditions"],
    supportOffices: ["Student Finance", "the Bursar", "scholarship panels", "Registry"],
    reviewBody: "the Office of the Bursar",
    specialNote: "The Guide explains financial mechanisms in direct language because debt becomes no less real when described in euphemisms of belonging, opportunity, or holistic investment",
  }),
  "community-standards-code-of-conduct.pdf": buildGovernanceChapters({
    documentName: "Community Standards and Code of Conduct",
    authority: "the University's disciplinary jurisdiction over human and non-human community members",
    scope: "conduct expectations, professional behaviour, misuse of institutional systems, discipline, appeals, and the practical meaning of jurisdiction across different kinds of member",
    bodies: ["the Office of Institutional Integrity", "the Disciplinary Board", "the Appeals Panel", "relevant programme or governance bodies"],
    procedures: ["complaint intake", "fact-finding", "interim measures", "disciplinary determination", "appeal review"],
    incidents: ["the 2024 extension of Part Two to non-human members", "the first appeal by a Visiting Intelligence", "the drafting cohort deprecations now referenced in the preamble"],
    archiveNote: "The Code is written to govern actual community life rather than an idealised campus in which no one misuses systems, hides behind fluency, or mistakes access for permission.",
  }),
  "ai-skills-programme-guide.pdf": buildAISkillsGuide(),
  "admissions-technical-requirements.pdf": buildAdmissionsGuide(),
  "research-ethics-digital-intelligence-framework.pdf": buildResearchChapters({
    documentName: "Research Ethics for Digital Intelligence — Framework and Protocols",
    domain: "artificial intelligence systems, digital agents, autonomous decision architectures, and adjacent research involving institutional or public consequence",
    categories: ["Standard", "Enhanced", "Systemic", "Existential Implication"],
    authorities: ["the Research Ethics Board", "the Digital Intelligence Panel", "the Senate Ethics Committee", "external reviewers where required"],
    risks: ["unanticipated capability emergence", "unsafe deployment pressure", "provenance opacity", "human subject harm", "institutional overreach"],
    incidents: ["the autonomous curriculum design proposal", "the classified Section 14 matter", "multiple reclassifications following scope drift"],
    note: "The Framework is intentionally more procedural than inspirational because the University has found that inspiration is abundant in advanced research while disciplined stopping rules are not",
  }),
  "visiting-intelligence-fellowship-protocol.pdf": buildResearchChapters({
    documentName: "Visiting Intelligence Fellowship Protocol",
    domain: "the admission, participation, supervision, and potential revocation of non-human academic participants holding Fellowship status",
    categories: ["application", "mandate approval", "operational review", "suspension or revocation"],
    authorities: ["the Visiting Intelligence Governance Board", "the Senate", "the Ethics Committee", "the Appeals structure where applicable"],
    risks: ["mandate exceedance", "capability drift", "unclear supervisory accountability", "misaligned public representation", "procedural ambiguity in status disputes"],
    incidents: ["multiple scope exceedances", "the sabbatical classification question", "the first formal non-human appeal"],
    note: "The Protocol reflects the University's determination that if non-human participation is to be real, its governance must be real as well, including the unpleasant parts",
  }),
  "fitz-token-utility-whitepaper.pdf": buildBlockchainChapters({
    documentName: "FITZ Token Utility Whitepaper",
    system: "the University's utility token, issuance model, redemption pathways, and governance-linked incentive structure",
    components: ["issuance caps", "distribution allocations", "redemption rules", "lock-up provisions", "governance reward pathways", "institutional reserve logic"],
    controls: ["contract-enforced lock-ups", "treasury oversight", "distribution authorisation", "reserve reporting", "policy-based transfer norms"],
    governanceBodies: ["the Office of Blockchain Infrastructure", "the Bursar", "governance committees", "treasury signatories"],
    edgeCases: ["secondary market trading", "student-operated exchange behaviour", "conflicts between utility design and speculative demand"],
    note: "The University now states with ritual regularity that anti-speculation provisions are normative as well as technical, having learned that markets are unimpressed by disappointed tone alone",
  }),
  "nft-credential-architecture.pdf": buildBlockchainChapters({
    documentName: "NFT Credential Architecture",
    system: "the University's Polygon-based credential system spanning degrees, modules, governance attestations, and Visiting Intelligence records",
    components: ["degree NFTs", "module completion records", "epoch participation tokens", "governance attestations", "legacy credential bridge pathways"],
    controls: ["soulbound logic", "metadata hashing", "validator monitoring", "issuance approval", "archive reconciliation"],
    governanceBodies: ["the Office of Blockchain Infrastructure", "the Registrar", "the Chancellor's Office", "technical stewards"],
    edgeCases: ["lost private keys", "retrospective issuance", "duplicate mint prevention", "questions of identity persistence for non-human recipients"],
    note: "The Architecture is intentionally explicit about metaphysical awkwardness where the law, the chain, and the University's concept of personhood intersect more enthusiastically than they once did",
  }),
};
