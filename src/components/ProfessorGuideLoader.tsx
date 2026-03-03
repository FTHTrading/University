"use client";

import dynamic from "next/dynamic";

const ProfessorGuide = dynamic(
  () => import("@/components/ProfessorGuide"),
  { ssr: false }
);

export default function ProfessorGuideLoader() {
  return <ProfessorGuide />;
}
