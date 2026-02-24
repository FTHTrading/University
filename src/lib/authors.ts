export interface Author {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  url: string;
}

export const authors: Record<string, Author> = {
  "margaret-sinclair": {
    id: "margaret-sinclair",
    name: "Professor Margaret Sinclair",
    title: "Director, Institute for Accelerated Intelligence",
    affiliation: "Institute for Accelerated Intelligence, Fitzherbert University",
    bio: "A pioneer in alignment verification and model governance. Royal Society Fellow (2023). Her constitutional frameworks for AI regulation have been adopted by three national regulatory bodies and inform the University's four-gate validation protocol.",
    url: "https://fitzherbert.university/academics#faculty",
  },
  "victoria-langford": {
    id: "victoria-langford",
    name: "Professor Victoria Langford",
    title: "Director, Institute for Autonomous Governance",
    affiliation: "Institute for Autonomous Governance, Fitzherbert University",
    bio: "The foremost authority on comparative constitutional governance. Advisor to the constitutional assemblies of four nations. Blackstone Medal recipient (2022).",
    url: "https://fitzherbert.university/academics#faculty",
  },
  "richard-pemberton": {
    id: "richard-pemberton",
    name: "Professor Richard Pemberton",
    title: "Endowed Chair, Institutional Strategy & Stewardship",
    affiliation: "College of Autonomous Governance, Fitzherbert University",
    bio: "Expert in strategic management, market theory, and fiduciary stewardship. Former advisor to sovereign wealth funds across three continents. Leads the University's endowment philosophy work.",
    url: "https://fitzherbert.university/academics#faculty",
  },
  "james-harrington": {
    id: "james-harrington",
    name: "Professor James Harrington",
    title: "Director, Institute for Multi-Chain Provenance",
    affiliation: "Institute for Multi-Chain Provenance, Fitzherbert University",
    bio: "Systems engineer whose probabilistic resilience models and cryptographic verification frameworks have redefined how institutions assess critical infrastructure. ICE Gold Medal (2021).",
    url: "https://fitzherbert.university/academics#faculty",
  },
  "editorial-board": {
    id: "editorial-board",
    name: "The Editorial Board",
    title: "Office of the Chancellor",
    affiliation: "Fitzherbert University",
    bio: "The Editorial Board comprises senior faculty and the Office of Institutional Communications, responsible for authoritative commentary on University affairs and strategic direction.",
    url: "https://fitzherbert.university/about",
  },
};
