# 📘 FTHTrading University

### *Veritas per Disciplina*

**Established 1783**

---

> A sovereign institution of disciplined inquiry, enduring scholarship, and architectural permanence.

---

## 🎓 Senior-Level Repository Mandate

This repository contains the full digital infrastructure of **FTHTrading University** — a heritage Ivy League–style academic institution built using modern web architecture with timeless aesthetic principles.

This is not a startup template.
This is not a marketing site.
This is a digitally expressed institution.

---

## 🏛️ COLOR-CODED TABLE OF CONTENTS

> Visual key inspired by collegiate heraldry.

| Section | Domain | Description |
| --- | --- | --- |
| 🟦 **I. Institutional Overview** | Identity | Mission, Philosophy, Charter |
| 🟥 **II. Architecture & Design System** | Visual System | Branding, Typography, Colors |
| 🟨 **III. Academic Structure** | Academics | Schools, Programs, Faculty |
| 🟩 **IV. Athletics & Strategy** | Performance | Teams, Esports, Analytics |
| 🟪 **V. Governance & Charter** | Authority | Constitution, Amendments |
| 🟫 **VI. Endowment & Stewardship** | Finance | Legacy & Capital |
| ⚫ **VII. Technical Infrastructure** | Engineering | Stack & Deployment |
| ⚙️ **VIII. Development Workflow** | DevOps | Setup & Contribution |
| 🛡️ **IX. Security & Integrity** | Security | Standards & Controls |
| 📈 **X. Roadmap & Expansion** | Strategy | Future Phases |

---

## 🟦 I. Institutional Overview

**FTHTrading University** is designed to reflect:

- 300+ years of academic permanence
- Endowed institutional gravitas
- Architectural dignity
- Formal intellectual authority

Core Identity:

- Motto: *Veritas per Disciplina*
- Founded: 1783
- Charter: Ratified 1783 · Reaffirmed 1867 · Amended 1921, 1967, 2003, 2024
- Institutional Tone: Scholarly, Measured, Enduring

---

## 🟥 II. Architecture & Design System

### 🎨 Primary Color Palette

| Role | Color | Hex |
| --- | --- | --- |
| Oxford Navy | Primary | `#0B1F3B` |
| Heritage Maroon | Accent | `#7A0019` |
| Old Gold | Highlight | `#C8A24C` |
| Parchment | Background | `#F4F1EA` |
| Stone Grey | Secondary | `#4A4A4A` |
| Ivory | Alternate BG | `#FAFAF7` |

### Typography

| Role | Family | Source |
| --- | --- | --- |
| Headings | Playfair Display | `next/font/google` |
| Body | Libre Baskerville | `next/font/google` |
| Labels | Small-caps, tracking-widest | CSS utility |

### Design Principles

- Serif-dominant typography with drop caps and engraved headings
- Gold rule dividers and ornamental flourishes
- Parchment texture overlay with ivy vine accents
- Parallax architectural hero with vignette
- Subtle motion only (Framer Motion)
- No startup aesthetics

### Heritage Visual Utilities

| Utility | Effect |
| --- | --- |
| `.parchment-overlay` | Fixed SVG noise texture, mix-blend-mode: multiply |
| `.ivy-corners` | Gold vine accents at top corners |
| `.gold-emboss` | Hover glow with gold border transition |
| `.gold-underline` | Animated underline 0→100% width |
| `.ornamental-divider` | Gradient lines with centre ornament |
| `.drop-cap` | Floated 4.2em maroon serif first-letter |
| `.vignette` | Radial gradient dark-edge overlay |
| `.stat-card` | Card with gold top accent bar |

### Components

| Component | Purpose |
| --- | --- |
| `Crest` | Full heraldic SVG — quartered shield, laurel wreath, crowned helm, scroll banner |
| `Header` | Sticky heritage nav with "Established 1783" bar, Apply/Visit/Give links, mobile drawer |
| `Footer` | Multi-column links: Colleges, Governance, Campus, Research |
| `Hero` | Parallax hero (useScroll/useTransform) with staggered entrance animations |
| `Section` / `SectionHeader` | Reusable content wrapper with stone texture and alternate backgrounds |
| `Timeline` | Scroll-triggered interactive vertical timeline (1783–2026) |
| `CollegeCard` | Animated card with hover scale for college listings |

---

## 🟨 III. Academic Structure

### Schools

- College of Arts & Sciences (Est. 1783)
- School of Divinity & Moral Philosophy (Est. 1789)
- School of Law & Constitutional Studies (Est. 1801)
- School of Medicine & Public Health (Est. 1832)
- School of Engineering & Applied Science (Est. 1847)
- Graduate School of Commerce & Strategy (Est. 1891)

### Features

- Department listings per college (5–10 each)
- Faculty Spotlights (4 detailed profiles with drop-cap bios)
- Notable Alumni (Chief Justice, Nobel Laureate, Fields Medalist, et al.)
- Academic Calendar (Oxford-style named terms: Michaelmas, Hilary, Trinity)
- Endowed Chairs (Ashcroft Chair in Constitutional Law, Pemberton Chair in Economic Theory, et al.)
- Research Institutes (6)
- Publications Archive (6 white papers)

---

## 🟩 IV. Athletics & Strategy

Includes:

- 24 Varsity Teams with records and statistics
- Esports Division with 4 competitive titles
- Heritage Athletic Complex (18,000 seats)
- Performance Analytics programme
- Season Reports

---

## 🟪 V. Governance & Charter

Institutional Authority Framework:

- Founding Charter (1783) — 12 Articles with descriptions
- 7 Constitutional Amendments (1801–2024)
- Academic Senate (8 members, 6 standing committees)
- Institutional Transparency Reports
- Governance Documents Archive (7 documents)

Charter authority chain:

> Ratified 1783 · Reaffirmed 1867 · Amended 1921, 1967, 2003, 2024

---

## 🟫 VI. Endowment & Stewardship

Endowment Overview:

- **$14.2B** total endowment (2025)
- 5.1% distribution policy, 9.4% 20-year annualised return
- 1,200+ named funds across 243 years

Asset Allocation (FY 2025):

| Asset Class | Allocation |
| --- | --- |
| Public Equities | 28% |
| Private Equity & Venture | 23% |
| Real Assets | 18% |
| Fixed Income | 14% |
| Hedge Funds | 10% |
| Cash & Short-Term | 7% |

Distribution Breakdown:

| Category | Share |
| --- | --- |
| Scholarships & Financial Aid | 34% |
| Faculty Chairs & Research | 28% |
| Campus & Heritage Preservation | 20% |
| Library & Collections | 18% |

Includes:

- Investment Office leadership
- Stewardship reports archive (4 documents)
- Growth timeline ($42M in 1950 → $14.2B in 2025)

---

## ⚫ VII. Technical Infrastructure

### Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme inline`) |
| Animation | Framer Motion (useScroll, useTransform) |
| Typography | Playfair Display + Libre Baskerville (`next/font/google`) |
| Deployment | Static export (`output: "export"`) |

### Architecture

```
src/
├── app/
│   ├── globals.css              # Heritage design system (270+ lines)
│   ├── layout.tsx               # Root layout, JSON-LD (Org + Edu), metadata, skip-link
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # History, Timeline, Charter, Values
│   ├── academics/page.tsx       # Colleges, Faculty, Alumni, Calendar
│   ├── admissions/page.tsx      # Class Profile, Tuition, Scholarships
│   ├── athletics/page.tsx       # Varsity, Esports, Facilities
│   ├── blog/
│   │   ├── layout.tsx           # Blog-level metadata
│   │   ├── page.tsx             # Article listing with category filters
│   │   └── [slug]/
│   │       ├── page.tsx         # Article SSG (ScholarlyArticle, Person, FAQ, Breadcrumb JSON-LD)
│   │       └── ArticleLayout.tsx # Article UI (drop-cap, citations, FAQ, author card)
│   ├── archive/
│   │   ├── page.tsx             # Canonical archive (Collection + BreadcrumbList JSON-LD)
│   │   └── ArchivePage.tsx      # Archive UI: epoch root, SHA-256, CIDv1 per article
│   ├── campus/page.tsx          # Named Halls, Residential Colleges, Traditions
│   ├── citations/
│   │   ├── page.tsx             # Aggregated citation index (Collection JSON-LD)
│   │   └── CitationsPage.tsx    # Citations UI with search and filters
│   ├── endowment/page.tsx       # Allocation, Growth, Distribution, Reports
│   ├── faq/
│   │   ├── page.tsx             # 27 FAQs, 7 categories (FAQPage JSON-LD)
│   │   └── FAQPage.tsx          # FAQ accordion UI with category filters
│   ├── glossary/
│   │   ├── page.tsx             # 33 terms, 5 domains (DefinedTermSet JSON-LD)
│   │   └── GlossaryPage.tsx     # Glossary UI with search and alphabetical grouping
│   ├── governance/page.tsx      # Charter, Amendments, Senate, Archive
│   ├── research/page.tsx        # Institutes, Impact, White Papers, Labs
│   └── timeline/
│       ├── page.tsx             # 20 events (Event ItemList JSON-LD)
│       └── TimelinePage.tsx     # Interactive timeline with era filters
├── components/
│   ├── CollegeCard.tsx
│   ├── Crest.tsx                # Full heraldic SVG (200×240 viewBox)
│   ├── Footer.tsx               # 6-column footer with Reference section
│   ├── Header.tsx               # Heritage nav with 10 links + action bar
│   ├── Hero.tsx                 # Parallax hero with vignette
│   ├── Section.tsx
│   └── Timeline.tsx
├── lib/
│   ├── articles.ts              # 15 articles, types, query functions
│   ├── authors.ts               # 5 author profiles
│   └── canonical.ts             # SHA-256 hashing, CIDv1 generation, Merkle tree
scripts/
├── generate-rss.ts              # Build-time RSS generator (15 articles)
└── canonical-publish.ts         # Build-time SHA-256 + CIDv1 + Merkle epoch pipeline
public/
├── blog/rss.xml                 # Generated RSS 2.0 feed
├── canonical-registry.json      # Generated canonical registry (machine-readable)
├── robots.txt
└── sitemap.xml                  # 30 URLs
```

### Routes (30+ statically pre-rendered)

| Route | Content |
| --- | --- |
| `/` | Homepage — Hero, Chancellor's Message, Colleges, Research, Athletics, News, Endowment |
| `/about` | Founding History, Interactive Timeline, Charter, Values, Governance Overview |
| `/academics` | 6 Colleges, Departments, Faculty Spotlights, Alumni, Calendar |
| `/admissions` | Class Profile (SAT/GPA), Tuition ($87,700), Scholarships, Financial Aid |
| `/athletics` | 24 Varsity Teams, Esports, Facilities, Analytics |
| `/campus` | 8 Named Halls, 6 Residential Colleges, 3 Libraries, 7 Traditions, Gardens |
| `/endowment` | Founders Circle, Allocation Bars, Growth Timeline, Distribution, Reports |
| `/governance` | 12 Charter Articles, 7 Amendments, 8 Senators, 6 Committees, Archive |
| `/research` | 6 Institutes, Impact Metrics, 6 White Papers, 6 Key Facilities |
| `/blog` | University Record — 15 articles, category filters, Article/FAQ/Person JSON-LD |
| `/blog/[slug]` | 15 dynamic article pages with ScholarlyArticle, FAQPage, BreadcrumbList schema |
| `/timeline` | Interactive 1783–2026 timeline, 20 events, 4 eras, Event JSON-LD |
| `/faq` | Institutional FAQ hub — 27 FAQs, 7 categories, FAQPage JSON-LD |
| `/glossary` | 33 defined terms, 5 domains, DefinedTermSet JSON-LD |
| `/archive` | Canonical Archive — SHA-256 hashes, CIDv1 identifiers, Merkle epoch root |
| `/citations` | Aggregated citation index from all publications, Collection JSON-LD |

### Performance Targets

| Metric | Target |
| --- | --- |
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |

### SEO & Machine-Readable Legitimacy

- JSON-LD structured data (`CollegeOrUniversity`, `EducationalOrganization`, `ScholarlyArticle`, `Person`, `Event`, `FAQPage`, `DefinedTermSet`, `Collection`, `BreadcrumbList`)
- IPFS Canonical Publishing v1.0 (SHA-256 content hashing, CIDv1 generation, Binary Merkle epoch root)
- OpenGraph + Twitter Card metadata on all routes
- Canonical URL tags
- Static `sitemap.xml` (30 URLs)
- RSS feed (`/blog/rss.xml`) with Atom namespace
- Canonical registry (`/canonical-registry.json`) with SHA-256 hashes + CIDv1 identifiers
- `robots.txt` with sitemap reference
- Page-level `<title>` and `<meta description>` on every route
- Person JSON-LD for all faculty authors
- Organization JSON-LD with `hasCredential` (BA, MA, PhD, JD, MD)
- Semantic HTML with ARIA landmarks
- Skip-to-content accessibility link

---

## ⚙️ VIII. Development Workflow

### Initial Setup

```bash
git clone https://github.com/FTHTrading/University.git
cd University
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
# Static output in out/ directory
```

### Deployment

| Platform | Configuration |
| --- | --- |
| **Vercel** | Push to GitHub, zero-config |
| **Netlify** | Build: `npm run build`, Publish: `out` |
| **GitHub Pages** | Use `out/` with Actions workflow |

---

## 🛡️ IX. Security & Integrity

- ESLint enforced
- TypeScript strict mode
- No runtime mutation of institutional constants
- Structured metadata with schema validation
- Controlled content architecture
- Repository access limited to approved collaborators
- All Heritage Design System tokens defined in single source (`globals.css`)

---

## 📈 X. Roadmap & Expansion

### Completed ✅

- [x] Full heraldic SVG University Seal
- [x] Parallax architectural hero with vignette
- [x] Interactive scroll-triggered timeline
- [x] Parchment/ivy/gold heritage design utilities
- [x] Faculty Spotlights & Notable Alumni
- [x] Endowment financial allocation charts
- [x] Governance document archive
- [x] Campus page (halls, colleges, traditions)
- [x] Drop cap prose styling
- [x] Night Campus dark theme (prefers-color-scheme)
- [x] robots.txt + sitemap.xml
- [x] Skip-to-content accessibility link
- [x] JSON-LD structured data
- [x] OpenGraph + Twitter Card metadata
- [x] University Record blog (15 articles, 3 categories)
- [x] Article/FAQ/Person/BreadcrumbList JSON-LD per article
- [x] Enhanced Organization JSON-LD (hasCredential, contactPoint, geo)
- [x] Interactive /timeline page (1783–2026, 4 eras, Event schema)
- [x] Institutional /faq hub (27 FAQs, 7 categories, FAQPage schema)
- [x] RSS feed with prebuild generation
- [x] /glossary (33 terms, 5 domains, DefinedTermSet schema)
- [x] /citations index (aggregated bibliography, Collection schema)
- [x] IPFS Canonical Publishing pipeline (SHA-256 + CIDv1 + Merkle epoch root)
- [x] /archive (canonical attestation registry with copy-to-clipboard)
- [x] Canonical Artifact Identifier footer on all articles
- [x] Machine-readable canonical registry (`/canonical-registry.json`)

### Planned Enhancements

- [ ] Alumni network portal
- [ ] Endowment annual report microsite
- [ ] Research database searchable index
- [ ] Custom self-hosted serif typeface
- [ ] Stylised SVG campus map
- [ ] Seasonal campus imagery toggle
- [ ] Institutional Data Transparency dashboard
- [ ] Governance Dashboard preview
- [x] ~~IPFS canonical publishing layer~~ (v1.1.0)
- [ ] Web3 governance integration
- [ ] Autonomous RAG agent for institutional knowledge

---

## 🏛 Repository Governance

This repository represents institutional identity. All changes must preserve:

- Tone
- Aesthetic continuity
- Structural coherence
- Authority alignment

**No modern startup styling permitted.**

---

## 📜 Licence

© 2026 FTHTrading University. All rights reserved.

*Established 1783. Veritas · Disciplina · Hereditas.*

---

## 🔐 Collaborators

Add trusted contributors via **Settings → Collaborators** (search by GitHub username or email).
