# 📘 Fitzherbert University

### *Veritas per Disciplina*

**Established 1783**

---

> A sovereign institution of disciplined inquiry, enduring scholarship, and architectural permanence.

---

## 🎓 Senior-Level Repository Mandate

This repository contains the full digital infrastructure of **Fitzherbert University** — a heritage Ivy League–style academic institution built using modern web architecture with timeless aesthetic principles.

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

**Fitzherbert University** is designed to reflect:

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
| `ErrorBoundary` | Heritage-styled React error boundary (wraps 3D canvas) |
| `ProfessorGuide` | AI professor chatbot — text + voice input, TTS output, streaming responses |
| `ProfessorGuideLoader` | Dynamic `next/dynamic` loader for ProfessorGuide (SSR-safe) |
| `WalkingProfessor` | Animated 3D NPC professors for the campus map |
| `PolygonRegistryConsole` | Polygon blockchain credential verification console |

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
| Language | TypeScript 5.9 (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme inline`) |
| Animation | Framer Motion (useScroll, useTransform) |
| 3D Engine | React Three Fiber + Drei + Three.js |
| Typography | Playfair Display + Libre Baskerville (`next/font/google`) |
| AI Worker | Cloudflare Workers AI (Llama 3.3) |
| Deployment | Cloudflare Pages (static export) + Workers |
| Documents | PDFKit (build-time PDF generation) |
| Integrity | SHA-256 · CIDv1 · Binary Merkle Trees |

### Architecture

```
src/
├── app/
│   ├── globals.css              # Heritage design system (270+ lines)
│   ├── layout.tsx               # Root layout, JSON-LD (Org + Edu), metadata, skip-link
│   ├── manifest.ts              # PWA web manifest
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # History, Timeline, Charter, Values
│   ├── academics/
│   │   ├── page.tsx             # Colleges, Faculty, Alumni, Calendar
│   │   └── [slug]/page.tsx      # Individual college detail (SSG)
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
│   ├── campus-map/page.tsx      # Interactive 3D campus (React Three Fiber, walk mode, NPCs)
│   ├── citations/
│   │   ├── page.tsx             # Aggregated citation index (Collection JSON-LD)
│   │   └── CitationsPage.tsx    # Citations UI with search and filters
│   ├── credentials/page.tsx     # Verifiable credential viewer + validator
│   ├── documents/
│   │   ├── page.tsx             # Document catalogue (25 PDFs)
│   │   └── [slug]/page.tsx      # Individual document detail (SSG)
│   ├── endowment/page.tsx       # Allocation, Growth, Distribution, Reports
│   ├── epochs/
│   │   ├── page.tsx             # Epoch history index (ItemList + BreadcrumbList JSON-LD)
│   │   ├── EpochsPage.tsx       # Epoch timeline UI + immutability declaration
│   │   └── [version]/
│   │       ├── page.tsx          # Epoch detail SSG (Dataset + BreadcrumbList JSON-LD)
│   │       └── EpochDetailPage.tsx # Epoch detail UI: articles, diff, Merkle proof
│   ├── faq/
│   │   ├── page.tsx             # 27 FAQs, 7 categories (FAQPage JSON-LD)
│   │   └── FAQPage.tsx          # FAQ accordion UI with category filters
│   ├── glossary/
│   │   ├── page.tsx             # 33 terms, 5 domains (DefinedTermSet JSON-LD)
│   │   └── GlossaryPage.tsx     # Glossary UI with search and alphabetical grouping
│   ├── governance/page.tsx      # Charter, Amendments, Senate, Archive
│   ├── human-continuity/page.tsx        # Human oversight & continuity framework
│   ├── institutional-architecture/page.tsx # Architectural design philosophy
│   ├── legal-intelligence/page.tsx      # AI-assisted legal research systems
│   ├── on-chain/page.tsx        # On-chain governance & smart contracts
│   ├── partnerships/page.tsx    # Strategic partnership network
│   ├── research/page.tsx        # Institutes, Impact, White Papers, Labs
│   ├── skills/page.tsx          # AI skills programme & competency framework
│   ├── sovereign-systems/page.tsx       # Autonomous institutional systems
│   ├── sponsor/page.tsx         # Sponsorship & patronage tiers
│   ├── student-economics/page.tsx       # FITZ token & student economic model
│   ├── timeline/
│   │   ├── page.tsx             # 20 events (Event ItemList JSON-LD)
│   │   └── TimelinePage.tsx     # Interactive timeline with era filters
│   └── visiting-intelligences/page.tsx  # Visiting AI fellowship programme
├── components/
│   ├── CollegeCard.tsx          # Animated card with hover scale
│   ├── Crest.tsx                # Full heraldic SVG (200×240 viewBox)
│   ├── ErrorBoundary.tsx        # Heritage-styled error boundary for 3D canvas
│   ├── Footer.tsx               # 6-column footer with Reference section
│   ├── Header.tsx               # Heritage nav with 10 links + action bar
│   ├── Hero.tsx                 # Parallax hero with vignette
│   ├── PolygonRegistryConsole.tsx # Polygon blockchain credential console
│   ├── ProfessorGuide.tsx       # AI professor chatbot (voice + text, TTS)
│   ├── ProfessorGuideLoader.tsx # Dynamic loader for ProfessorGuide
│   ├── Section.tsx              # Reusable content wrapper
│   ├── Timeline.tsx             # Scroll-triggered vertical timeline
│   └── WalkingProfessor.tsx     # Animated 3D NPC for campus map
├── lib/
│   ├── academics-data.ts        # College/programme data definitions
│   ├── ai-professor-client.ts   # Client for AI professor Cloudflare Worker
│   ├── articles.ts              # 15 articles, types, query functions
│   ├── authors.ts               # 5 author profiles
│   ├── canonical.ts             # SHA-256 hashing, CIDv1 generation, Merkle tree
│   ├── document-catalog.ts      # 25-document PDF catalogue metadata
│   ├── epoch-history.ts         # Sealed epoch snapshots (immutable history store)
│   ├── epochs.ts                # Epoch versioning types + diff engine
│   ├── polygon-registry-client.ts # Polygon blockchain registry client
│   ├── professor-knowledge.ts   # AI professor knowledge base & system prompt
│   └── quest-system.ts          # Gamified learning quest definitions
scripts/
├── canonical-publish.ts         # Build-time SHA-256 + CIDv1 + Merkle epoch pipeline
├── document-content.ts          # PDF content definitions (25 documents)
├── generate-documents.ts        # PDFKit PDF generator (25 institutional PDFs)
├── generate-rss.ts              # Build-time RSS generator (15 articles)
├── ipfs-client.ts               # IPFS pinning + retrieval client
├── ipfs-local-setup.ps1         # Local IPFS node setup script
├── issue-credential.ts          # Verifiable credential issuance (W3C VC)
└── validate-integrity.ts        # SHA-256 + CIDv1 integrity validation
workers/
└── ai-professor/
    └── src/index.ts             # Cloudflare Worker: Llama 3.3 AI professor API
public/
├── blog/rss.xml                 # Generated RSS 2.0 feed
├── canonical-registry.json      # Generated canonical registry (machine-readable)
├── documents/                   # 25 generated institutional PDFs
├── robots.txt
└── sitemap.xml
```

### Routes (81 statically pre-rendered)

| Route | Content |
| --- | --- |
| `/` | Homepage — Hero, Chancellor's Message, Colleges, Research, Athletics, News, Endowment |
| `/about` | Founding History, Interactive Timeline, Charter, Values, Governance Overview |
| `/academics` | 6 Colleges, Departments, Faculty Spotlights, Alumni, Calendar |
| `/academics/[slug]` | Individual college detail pages (6 SSG routes) |
| `/admissions` | Class Profile (SAT/GPA), Tuition ($87,700), Scholarships, Financial Aid |
| `/athletics` | 24 Varsity Teams, Esports, Facilities, Analytics |
| `/campus` | 8 Named Halls, 6 Residential Colleges, 3 Libraries, 7 Traditions, Gardens |
| `/campus-map` | Interactive 3D campus — React Three Fiber, walk mode, day/night cycle, NPC professors |
| `/credentials` | Verifiable credential viewer and W3C VC validator |
| `/documents` | Institutional document catalogue (25 PDFs) |
| `/documents/[slug]` | Individual document detail pages (25 SSG routes) |
| `/endowment` | Founders Circle, Allocation Bars, Growth Timeline, Distribution, Reports |
| `/governance` | 12 Charter Articles, 7 Amendments, 8 Senators, 6 Committees, Archive |
| `/research` | 6 Institutes, Impact Metrics, 6 White Papers, 6 Key Facilities |
| `/blog` | University Record — 15 articles, category filters, Article/FAQ/Person JSON-LD |
| `/blog/[slug]` | 15 dynamic article pages with ScholarlyArticle, FAQPage, BreadcrumbList schema |
| `/timeline` | Interactive 1783–2026 timeline, 20 events, 4 eras, Event JSON-LD |
| `/faq` | Institutional FAQ hub — 27 FAQs, 7 categories, FAQPage JSON-LD |
| `/glossary` | 33 defined terms, 5 domains, DefinedTermSet JSON-LD |
| `/archive` | Canonical Archive — SHA-256 hashes, CIDv1 identifiers, Merkle epoch root |
| `/epochs` | Epoch History — version timeline, immutability declaration, ItemList JSON-LD |
| `/epochs/[version]` | Epoch detail — article registry, changelog diff, Merkle proof, Dataset JSON-LD |
| `/citations` | Aggregated citation index from all publications, Collection JSON-LD |
| `/human-continuity` | Human oversight framework — governance continuity principles |
| `/institutional-architecture` | Architectural design philosophy & campus planning |
| `/legal-intelligence` | AI-assisted legal research & constitutional analysis systems |
| `/on-chain` | On-chain governance — smart contracts, DAO structure, token voting |
| `/partnerships` | Strategic partnership network & institutional alliances |
| `/skills` | AI skills programme — competency framework & certification paths |
| `/sovereign-systems` | Autonomous institutional infrastructure & self-governing systems |
| `/sponsor` | Patronage & sponsorship tiers with benefits |
| `/student-economics` | FITZ token utility model, student economic participation |
| `/visiting-intelligences` | Visiting AI fellowship programme |
| `/glossary` | 33 defined terms, 5 domains, DefinedTermSet JSON-LD |
| `/archive` | Canonical Archive — SHA-256 hashes, CIDv1 identifiers, Merkle epoch root |
| `/epochs` | Epoch History — version timeline, immutability declaration, ItemList JSON-LD |
| `/epochs/[version]` | Epoch detail — article registry, changelog diff, Merkle proof, Dataset JSON-LD |
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
- Epoch Versioning System (sealed snapshots, diff engine, Merkle proof explorer)
- Static `sitemap.xml`
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
| **Cloudflare Pages** | `npm run deploy:pages` — static export to Cloudflare Pages |
| **Cloudflare Workers** | `npm run deploy:worker` — AI Professor API |
| **Full Deploy** | `npm run deploy` — Pages + Worker in sequence |

```bash
# Deploy everything
npm run deploy

# Or individually
npm run deploy:pages    # Static site → Cloudflare Pages
npm run deploy:worker   # AI Professor → Cloudflare Workers
```

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
- [x] Epoch Versioning System (sealed snapshots, diff changelog, Merkle proof explorer)
- [x] /epochs index + /epochs/[version] detail SSG pages
- [x] Immutability declaration + version selector UI
- [x] Interactive 3D Campus Map (React Three Fiber, walk mode, day/night cycle)
- [x] AI Professor chatbot (Cloudflare Workers AI, Llama 3.3, voice + TTS)
- [x] Verifiable credentials (W3C VC, SHA-256 attestation)
- [x] 25 institutional PDFs (PDFKit build-time generation)
- [x] Individual college detail pages (SSG)
- [x] Document catalogue with individual document pages (SSG)
- [x] Polygon registry console (on-chain credential verification)
- [x] Student economics & FITZ token utility model
- [x] Strategic partnerships network
- [x] Sponsorship & patronage tiers
- [x] Sovereign systems architecture
- [x] Human continuity framework
- [x] Legal intelligence systems
- [x] Visiting AI fellowship programme
- [x] AI skills programme & competency framework
- [x] Error boundary for 3D canvas
- [x] PWA web manifest

### Planned Enhancements

- [ ] Alumni network portal
- [ ] Endowment annual report microsite
- [ ] Research database searchable index
- [ ] Custom self-hosted serif typeface
- [ ] Seasonal campus imagery toggle
- [ ] Institutional Data Transparency dashboard
- [ ] Governance Dashboard preview
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

© 2026 Fitzherbert University. All rights reserved.

*Established 1783. Veritas · Disciplina · Hereditas.*

---

## 🔐 Collaborators

Add trusted contributors via **Settings → Collaborators** (search by GitHub username or email).
