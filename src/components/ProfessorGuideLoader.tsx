"use client";

import dynamic from "next/dynamic";

const WalkingProfessor = dynamic(
  () => import("@/components/WalkingProfessor"),
  { ssr: false }
);

export default function ProfessorGuideLoader() {
  return <WalkingProfessor />;
}
