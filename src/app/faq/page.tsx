import type { Metadata } from "next";
import { FAQPage } from "./FAQPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Institutional Knowledge",
  description:
    "Comprehensive answers to questions about FTHTrading University — admissions, academics, governance, endowment, research, campus life, athletics, and AI infrastructure.",
  keywords: [
    "FTHTrading University FAQ",
    "university admissions FAQ",
    "endowment FAQ",
    "governance FAQ",
    "AI governance university",
    "institutional FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions — FTHTrading University",
    description:
      "Comprehensive institutional knowledge across admissions, academics, governance, endowment, research, and AI infrastructure.",
    type: "website",
  },
};

const faqSections: {
  category: string;
  faqs: { question: string; answer: string }[];
}[] = [
  {
    category: "Institution & History",
    faqs: [
      {
        question: "When was FTHTrading University founded?",
        answer:
          "FTHTrading University was founded in 1783 by royal charter of the colonial legislature. Sir Henry FitzHerbert, the Reverend Jonathan Ashworth, and Lady Margaret Pemberton signed the founding charter. The original parchment is held in the University Archives in Heritage Hall.",
      },
      {
        question: "What is FTHTrading University's motto?",
        answer:
          "The University's motto is 'Veritas per Disciplina' — Truth through Discipline. It appears on the institutional crest and reflects the founding conviction that knowledge is achieved through rigorous, systematic inquiry.",
      },
      {
        question: "How many students attend FTHTrading University?",
        answer:
          "FTHTrading University enrols approximately 8,200 students: 4,800 undergraduates and 3,400 graduate and professional students, across six colleges and numerous interdisciplinary programmes.",
      },
      {
        question: "Where is FTHTrading University located?",
        answer:
          "FTHTrading University occupies a 1,200-acre campus in Cambridge, Massachusetts, with additional research facilities and properties worldwide. The main campus includes Heritage Hall, the Pemberton Library, and 47 named buildings.",
      },
      {
        question: "What is the governance structure of FTHTrading University?",
        answer:
          "The University is governed by a three-body system: the Board of Governors (fiduciary and strategic oversight), the Faculty Senate (supreme academic authority since the 1967 Charter Amendment), and the Student Assembly (student representation). The Charter has been amended five times: 1801, 1867, 1921, 1967, 2003, and 2024.",
      },
    ],
  },
  {
    category: "Admissions",
    faqs: [
      {
        question: "What is the acceptance rate at FTHTrading University?",
        answer:
          "FTHTrading University maintains a highly selective admissions process with an acceptance rate of approximately 6.2%. The Admissions Committee employs holistic review, evaluating academic achievement, intellectual curiosity, character, and potential contribution to the University community.",
      },
      {
        question: "Does FTHTrading University offer financial aid?",
        answer:
          "Yes. FTHTrading University meets 100% of demonstrated financial need for all admitted students. Approximately 54% of undergraduates receive need-based financial aid, with an average award of $62,400 per year. The University operates a need-blind admissions policy for domestic applicants.",
      },
      {
        question: "What standardised tests does FTHTrading University accept?",
        answer:
          "The University's admissions process is test-flexible. Applicants may submit SAT, ACT, or equivalent international qualification scores. The Admissions Committee also accepts Advanced Placement, International Baccalaureate, and A-Level results as supplementary evidence of academic preparation.",
      },
      {
        question: "How do I apply to FTHTrading University?",
        answer:
          "Applications are submitted through the University's admissions portal. The application includes academic transcripts, two faculty recommendations, a personal statement, and an optional interview. Early Decision applications are due 1 November; Regular Decision applications are due 2 January.",
      },
    ],
  },
  {
    category: "Academics",
    faqs: [
      {
        question: "How many colleges does FTHTrading University have?",
        answer:
          "FTHTrading University comprises six colleges: the College of Arts & Sciences (founded 1783), School of Divinity & Moral Philosophy (1789), School of Law & Constitutional Studies (1801), School of Medicine & Public Health (1832), School of Engineering & Applied Science (1847), and Graduate School of Commerce & Strategy (1891).",
      },
      {
        question: "What is the student-to-faculty ratio?",
        answer:
          "The University maintains a student-to-faculty ratio of approximately 5:1, with 847 faculty members across 78 departments and programmes. This ratio enables close mentorship and seminar-style instruction characteristic of the University's pedagogical tradition.",
      },
      {
        question: "Does FTHTrading University offer online programmes?",
        answer:
          "The University does not currently offer fully online degree programmes, consistent with its commitment to residential education and in-person intellectual community. Select continuing education and executive programmes incorporate hybrid delivery.",
      },
      {
        question: "What research institutes does the University operate?",
        answer:
          "The University operates 12 research institutes including the Institute for Advanced Study (1963), the Centre for Ethics & Public Life (1991), the AI & Machine Learning Institute (2017), and the Centre for Artificial Intelligence & Ethics. Combined annual research expenditure exceeds $890 million.",
      },
    ],
  },
  {
    category: "Endowment & Finance",
    faqs: [
      {
        question: "How large is FTHTrading University's endowment?",
        answer:
          "FTHTrading University's endowment stands at $14.2 billion as of FY 2025, accumulated over 243 years of stewardship. The endowment generated a rolling 10-year CAGR of 8.7% and a 20-year annualised return of 9.4% net of fees.",
      },
      {
        question: "How is the endowment invested?",
        answer:
          "The endowment is allocated across six asset classes: 28% public equities, 23% private equity and venture capital, 18% real assets (including the original 1,200-acre land grant), 14% fixed income, 10% hedge funds, and 7% cash and equivalents. Allocation is reviewed annually by the Finance & Endowment Committee.",
      },
      {
        question: "What is the endowment's distribution rate?",
        answer:
          "The University distributes approximately 5.1% of the endowment's trailing twelve-quarter average market value annually, balancing current operational needs with intergenerational preservation. This distribution funds scholarships, faculty positions, research, and campus maintenance.",
      },
      {
        question: "Does the endowment have ethical investment constraints?",
        answer:
          "Since 2023, the Ethical Investment Framework excludes industries incompatible with the University's values. Exclusion criteria were developed through eighteen months of faculty-student-trustee consultation and are reviewed biennially. The framework is published in the Annual Stewardship Report.",
      },
    ],
  },
  {
    category: "Research & Innovation",
    faqs: [
      {
        question: "What is FTHTrading University's annual research expenditure?",
        answer:
          "The University's combined annual research expenditure exceeds $890 million across 12 institutes, 78 departments, and numerous interdisciplinary programmes. Funding sources include federal grants, foundation support, endowment income, and industry partnerships.",
      },
      {
        question: "How many Nobel laureates are affiliated with FTHTrading University?",
        answer:
          "FTHTrading University claims 14 Nobel laureates among its faculty, alumni, and long-term research associates, spanning Chemistry, Physics, Economics, Medicine, and Literature. The first Nobel laureate, Professor Edmund Hartley, received the Prize in Chemistry in 1903.",
      },
      {
        question:
          "What is the University's approach to AI research ethics?",
        answer:
          "All AI research at FTHTrading University operates under the Charter Amendment V (2024) framework, which requires four-gate validation: technical benchmarking, quantitative bias auditing, qualitative ethical review by faculty, and formal sign-off by the Ethics & Institutional Integrity Committee. The Centre for AI & Ethics publishes annual governance reports.",
      },
    ],
  },
  {
    category: "Campus & Student Life",
    faqs: [
      {
        question: "How large is the FTHTrading University campus?",
        answer:
          "The main campus occupies 1,200 acres — the original land grant from the 1783 Charter. It includes 47 named buildings, 5 residential colleges, the Pemberton Library (3.2 million volumes), the Heritage Athletic Complex, and 200 acres of gardens, courtyards, and woodlands.",
      },
      {
        question: "Does FTHTrading University have residential colleges?",
        answer:
          "Yes. All undergraduates live in one of five residential colleges: Ashworth College, Pemberton College, Hartley College, Whitfield College, and Moreau College. Each college has its own dining hall, common rooms, and academic advisors, fostering close-knit intellectual communities.",
      },
      {
        question: "What athletic programmes does the University offer?",
        answer:
          "FTHTrading University fields 31 varsity teams across NCAA Division I athletics. The Athletics Intelligence Division applies game-theoretic analysis and Bayesian opponent modelling to competitive strategy. The University also supports club sports, intramural leagues, and a competitive esports programme.",
      },
    ],
  },
  {
    category: "AI Governance & Technology",
    faqs: [
      {
        question: "What is institutional AI governance?",
        answer:
          "Institutional AI governance is the discipline of managing artificial intelligence systems within organisations using constitutional frameworks, validation gates, bias auditing, and human oversight. FTHTrading University's Charter Amendment V (2024) established the first constitutional AI governance framework at a major university.",
      },
      {
        question: "What is a model registry?",
        answer:
          "A model registry is a governed catalogue of all AI/ML models deployed within an institution. Each entry records the model's scope, authority, validation status, bias audit results, and responsible parties. FTHTrading University's registry currently tracks 47 models across admissions analytics, research allocation, and campus operations.",
      },
      {
        question: "What is Retrieval-Augmented Generation (RAG)?",
        answer:
          "RAG is an AI architecture that combines information retrieval from a knowledge base with language model generation. FTHTrading University is developing an agentic RAG system to create a queryable knowledge layer over the institution's documentary corpus, enabling governed institutional memory.",
      },
      {
        question: "How does FTHTrading University audit AI models for bias?",
        answer:
          "The University employs a four-gate validation architecture: technical benchmarking against held-out datasets, quantitative bias auditing (disparate impact analysis, calibration testing, counterfactual fairness), qualitative ethical review by faculty ethicists, and formal sign-off by the Ethics & Institutional Integrity Committee.",
      },
    ],
  },
];

export default function Page() {
  // Build JSON-LD for FAQPage
  const allFaqs = faqSections.flatMap((s) => s.faqs);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "FTHTrading University — Frequently Asked Questions",
    description:
      "Comprehensive answers to questions about FTHTrading University across admissions, academics, governance, endowment, research, and AI infrastructure.",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fthtrading.university",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Frequently Asked Questions",
        item: "https://fthtrading.university/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FAQPage sections={faqSections} />
    </>
  );
}
