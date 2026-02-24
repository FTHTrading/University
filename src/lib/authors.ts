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
    title: "Endowed Chair, Artificial Intelligence & Ethics",
    affiliation: "Centre for Artificial Intelligence & Ethics, Fitzherbert University",
    bio: "A pioneer in algorithmic fairness and model governance. Royal Society Fellow (2023). Her constitutional frameworks for AI regulation have been adopted by three national regulatory bodies.",
    url: "https://fitzherbert.university/academics#faculty",
  },
  "victoria-langford": {
    id: "victoria-langford",
    name: "Professor Victoria Langford",
    title: "Dean, School of Law & Constitutional Studies",
    affiliation: "School of Law & Constitutional Studies, Fitzherbert University",
    bio: "The foremost authority on comparative constitutional governance. Advisor to the constitutional assemblies of four nations. Blackstone Medal recipient (2022).",
    url: "https://fitzherbert.university/academics#faculty",
  },
  "richard-pemberton": {
    id: "richard-pemberton",
    name: "Professor Richard Pemberton",
    title: "Dean, Graduate School of Commerce & Strategy",
    affiliation: "Graduate School of Commerce & Strategy, Fitzherbert University",
    bio: "Expert in strategic management, market theory, and fiduciary stewardship. Former advisor to sovereign wealth funds across three continents.",
    url: "https://fitzherbert.university/academics#faculty",
  },
  "james-harrington": {
    id: "james-harrington",
    name: "Professor James Harrington",
    title: "Dean, School of Engineering & Applied Science",
    affiliation: "School of Engineering & Applied Science, Fitzherbert University",
    bio: "Structural engineer whose probabilistic resilience models have redefined how governments assess critical infrastructure risk. ICE Gold Medal (2021).",
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
