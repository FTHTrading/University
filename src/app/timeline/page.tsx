import type { Metadata } from "next";
import TimelinePage from "./TimelinePage";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "From the Heritage Charter of 1783 to the AI-Native Rechartering of 2025. The institutional timeline of Fitzherbert University, measured in capability epochs.",
};

export default function Page() {
  return <TimelinePage />;
}
