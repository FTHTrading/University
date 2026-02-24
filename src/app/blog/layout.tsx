import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Record — Thought Leadership & Institutional Analysis",
  description:
    "Original scholarship from the faculties, centres, and institutes of FTHTrading University — advancing the discourse on institutional governance, competitive strategy, and technological sovereignty.",
  keywords: [
    "FTHTrading University blog",
    "thought leadership",
    "institutional governance",
    "athletics intelligence",
    "AI governance",
    "university research",
    "scholarly articles",
  ],
  openGraph: {
    title: "University Record — FTHTrading University",
    description:
      "Original scholarship from the faculties, centres, and institutes of FTHTrading University.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
